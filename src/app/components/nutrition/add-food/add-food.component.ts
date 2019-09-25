import { LoadingController, ModalController, Platform } from '@ionic/angular';
import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { AltServing, FoodItem } from '../../../services/nutrition/nutrition.service';
import { BrandedFood, CommonDetail, CommonDetailFood, NutritionixService } from '../../../services/third-party/nutritionix.service';
import { forkJoin, Subscription } from 'rxjs';
import { FoodItemsService } from '../../../services/food-items/food-items.service';
import { CustomFoodTemplate, CustomFoodTemplateService } from '../../../services/custom-food-template/custom-food-template.service';
import { ToastService } from '../../../services/toast-service/toast-service.service';
import { ErrorsService } from '../../../services/errors/errors.service';
import { Transphormer } from '../../../services/authentication/authentication.service';
import { RequestCachingService } from '../../../services/interceptors/caching/request-caching.service';
import { BarcodeScannerService } from '../../../services/barcode-scanner/barcode-scanner.service';
import * as Rollbar from 'rollbar';
import { RollbarService } from '../../../rollbar';
import { MealTemplate, MealTemplatesService } from '../../../services/meal-templates/meal-templates.service';
import { MealTemplateAddConfigurationComponent } from '../meal-template-add-configuration/meal-template-add-configuration.component';

interface AroundThisTime {
  type: 'tracked-item' | 'meal';
  data: FoodItem | MealTemplate<FoodItem>;
}

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss'],
})
export class AddFoodComponent implements OnInit {

  @Input()
  public mealIndex = 1;

  @Input()
  public nutritionDayId = 0;

  public showFoodManagement = false;
  public showCustomFoodManagement = false;
  public searchValue = '';
  public foodItem: FoodItem;
  public searchFocused = false;

  public searchResults: {
    branded: BrandedFood[],
    common: any[],
    customFood: CustomFoodTemplate[],
    meals: any[],
    totalFoodList: {
      type: 'custom' | 'branded' | 'common' | 'meal';
      typeId: 1 | 2 | 3 | 4;
      data: BrandedFood | CustomFoodTemplate | MealTemplate<FoodItem> | any;
    }[]
  } = {
    branded: [],
    common: [],
    customFood: [],
    totalFoodList: [],
    meals: [],
  };

  public recentItems: FoodItem[] = [];

  public aroundThisTimeItems: AroundThisTime[] = [];

  public showMore = false;

  public showMoreAroundThisTime = false;

  public isApiBasedFoodItem = false;

  private searchSubscription: Subscription;

  private scanningBarcode = false;

  constructor(
    private modal: ModalController,
    public nutritioninxService: NutritionixService,
    private foodItemService: FoodItemsService,
    private loadingController: LoadingController,
    private customFoodTemplateService: CustomFoodTemplateService,
    public toastService: ToastService,
    public errorService: ErrorsService,
    private cachingService: RequestCachingService,
    public barcodeScanner: BarcodeScannerService,
    public platform: Platform,
    @Inject(RollbarService) private rollbar: Rollbar,
    public mealTemplateService: MealTemplatesService,
    @Inject(ModalController) public modalController: ModalController
  ) {
  }

  ngOnInit() {
    this.setupRecentAndAroundThisTimeItems();
  }

  public closeModal() {
    this.modal.dismiss();
  }

  public async updateMealContent(foodItem: FoodItem) {
    const loader = await this.loadingController.create({
      message: 'Please wait ...'
    });

    await loader.present();

    try {
      const newFoodItem = <FoodItem>await this.foodItemService
        .createFoodItem(this.nutritionDayId, this.mealIndex, foodItem.is_custom, foodItem, this.isApiBasedFoodItem);

      // if food being added is custom then cleaning the caching
      if (foodItem.is_custom) {
        this.cachingService.clearAll();
      }

      this.modal.dismiss({
        mealIndex: this.mealIndex,
        foodItem: newFoodItem,
        foodItems: []
      });
    } catch (e) {
      this.toastService.flash(this.errorService.firstError(e));
    } finally {
      loader.dismiss();
    }

  }

  public async searchContentChange() {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }

    this.showMore = false;

    if (this.searchValue.trim() === '') {
      this.searchResults.branded = [];
      this.searchResults.customFood = [];
      this.searchResults.common = [];
      this.searchResults.totalFoodList = [];
    } else {

      this.searchSubscription = forkJoin(
        this.nutritioninxService.search(this.searchValue),
        this.customFoodTemplateService.searchTemplate(this.searchValue),
        this.mealTemplateService.list(this.searchValue)
      ).subscribe(results => {
        this.searchResults.branded = results[0].branded;
        this.searchResults.common = results[0].common;
        this.searchResults.customFood = <CustomFoodTemplate[]>results[1];
        this.searchResults.meals = <MealTemplate<FoodItem>[]>results[2];
        this.setTotalItems();
      });
    }

  }

  public get hasSearchResults(): boolean {
    return this.searchResults.branded.length > 0
      || this.searchResults.customFood.length > 0
      || this.searchResults.meals.length > 0
      || this.searchResults.common.length > 0;
  }

  public setTotalItems() {
    this.searchResults.totalFoodList = [];
    const searchTerm = this.searchValue.trim().toLowerCase();
    if (searchTerm.indexOf('1stphorm') !== -1) {
      searchTerm.replace('1stphorm', '1st phorm');
    }

    const matchesBranded = this.searchResults.branded.some(function (i: BrandedFood) {
      return i.brand_name !== '' && searchTerm.indexOf(i.brand_name.toLowerCase()) !== -1;
    });

    this.searchResults.customFood.forEach(food => {
      this.searchResults.totalFoodList.push({
        type: 'custom',
        typeId: 1,
        data: food
      });
    });

    this.searchResults.meals.forEach(food => {
      this.searchResults.totalFoodList.push({
        type: 'meal',
        typeId: 4,
        data: food
      });
    });

    if (matchesBranded) {
      this.searchResults.branded.forEach(food => {
        this.searchResults.totalFoodList.push({
          type: 'branded',
          typeId: 2,
          data: food
        });
      });
    }

    this.searchResults.common.forEach(food => {
      this.searchResults.totalFoodList.push({
        type: 'common',
        typeId: 3,
        data: food
      });
    });

    if (!matchesBranded) {
      this.searchResults.branded.forEach(food => {
        this.searchResults.totalFoodList.push({
          type: 'branded',
          typeId: 2,
          data: food
        });
      });
    }

  }

  public async openCommonFood(data) {
    const loader = await this.loadingController.create({
      message: 'Please wait ...'
    });

    await loader.present();

    try {
      const transphormer: Transphormer = JSON.parse(window.localStorage.getItem('transphormer'));
      const list = <CommonDetail>await this.nutritioninxService.commonDetail(data.food_name, transphormer.id);
      if (list.foods.length > 0) {
        const item = list.foods[0];
        this.foodItem = this.convertCommonFoodToFoodItem(item);
        this.showCustomFoodManagement = true;
        this.isApiBasedFoodItem = false;
      } else {
        this.toastService.flash('Item not found');
      }
    } catch (e) {
      this.toastService.flash(this.errorService.firstError(e));
    } finally {
      loader.dismiss();
    }
  }

  public async openBrandedFood(data) {
    const loader = await this.loadingController.create({
      message: 'Please wait ...'
    });

    await loader.present();

    try {
      const list = <CommonDetail>await this.nutritioninxService.brandedDetail(data.nix_item_id);
      if (list.foods.length > 0) {
        const item = list.foods[0];
        this.foodItem = this.convertBrandedFoodToFoodItem(item);
        this.showCustomFoodManagement = true;
        this.isApiBasedFoodItem = false;
      } else {
        this.toastService.flash('Item not found');
      }
    } catch (e) {
      this.toastService.flash(this.errorService.firstError(e));
    } finally {
      loader.dismiss();
    }
  }

  public async openCustomFood(data) {
    this.foodItem = this.convertCustomFoodToFoodItem(data);
    this.showCustomFoodManagement = true;
    this.isApiBasedFoodItem = true;
  }

  public openRecentFood(foodItem: FoodItem) {
    this.foodItem = foodItem;

    // if the food item is not a custom food
    if (!this.foodItem.is_custom) {

      // if the food is branded food
      if (this.foodItem.is_branded_food) {
        const data = <any>foodItem;
        data.nix_item_id = foodItem.nutritioninx_item_id;
        this.openBrandedFood(data);

      } else {
        // food is common food
        const data = <any>foodItem;
        data.food_name = foodItem.nutritioninx_food_name;
        this.openCommonFood(data);
      }
    } else {
      this.foodItem.is_custom_food_template = true;
      this.showCustomFoodManagement = true;
    }

  }

  public formatNumber(num: number) {
    return Number.isInteger(num) ? num : num.toFixed(2);
  }

  public async setupRecentAndAroundThisTimeItems() {
    const loader = await this.loadingController.create({
      message: 'Please wait ...'
    });

    await loader.present();
    try {

      // First fetching all the request
      const recentRequest = this.foodItemService.recentFoodItems();
      const aroundThisTimeRequest = this.foodItemService.aroundTimeFoodItems();
      const aroundThisTimeMealTemplateRequest = this.mealTemplateService.aroundThisTime();

      this.recentItems = <FoodItem[]>await recentRequest;

      // merging the tracked items around this time and meal request around this time results
      const aroundThisTimeResults = (<FoodItem[]>await aroundThisTimeRequest).map<AroundThisTime>((item) => {
        return {
          type: 'tracked-item',
          data: item
        };
      });
      const aroundThisTimeMealTemplateResults = (<MealTemplate<FoodItem>[]>await aroundThisTimeMealTemplateRequest)
        .map<AroundThisTime>((item) => {
          return {
            type: 'meal',
            data: item
          };
        });

      // Sorting the result by total counts
      this.aroundThisTimeItems = aroundThisTimeResults.concat(aroundThisTimeMealTemplateResults)
        .sort((item1, item2) => item1.data.total_count <= item2.data.total_count ? 1 : -1).splice(0, 10);

    } catch (e) {
      this.toastService.flash(this.errorService.firstError(e));
    } finally {
      loader.dismiss();
    }
  }

  public fixFood(detail: CommonDetailFood) {
    const convert = (a: number) => {
      return parseFloat(`${a}`).toFixed(2);
    };
    return {
      calories: detail.nf_calories ? convert(detail.nf_calories) : 0,
      carbs: detail.nf_total_carbohydrate ? convert(detail.nf_total_carbohydrate) : 0,
      fats: detail.nf_total_fat ? convert(detail.nf_total_fat) : 0,
      protein: detail.nf_protein ? convert(detail.nf_protein) : 0
    };
  }

  private convertCommonFoodToFoodItem(detail: CommonDetailFood): FoodItem {
    const {carbs, calories, fats, protein} = this.fixFood(detail);

    return <FoodItem>{
      is_custom: false,
      meal: this.mealIndex,
      base_weight: detail.serving_weight_grams,
      name: detail.nix_brand_name || detail.food_name,
      carbs, calories, fats, protein,
      is_custom_food_template: false,
      is_branded_food: false,
      nutritioninx_food_name: detail.food_name,
      serving_size: {
        carbs, calories, fats, protein,
        unit: detail.serving_unit,
        amount: detail.serving_qty,
      },
      amount_consumed: {
        unit: detail.serving_unit,
      },
      alt_servings: this.getAltServings(detail)
    };
  }

  private convertBrandedFoodToFoodItem(detail: CommonDetailFood): FoodItem {
    const {carbs, calories, fats, protein} = this.fixFood(detail);
    return <FoodItem>{
      is_custom: false,
      meal: this.mealIndex,
      base_weight: detail.serving_weight_grams,
      name: detail.food_name,
      carbs, calories, fats, protein,
      is_custom_food_template: false,
      is_branded_food: true,
      nutritioninx_item_id: detail.nix_item_id,
      serving_size: {
        carbs, calories, fats, protein,
        unit: detail.serving_unit,
        amount: detail.serving_qty,
      },
      amount_consumed: {
        unit: detail.serving_unit,
      },
      alt_servings: this.getAltServings(detail)
    };
  }

  private convertCustomFoodToFoodItem(detail: CustomFoodTemplate, is_custom_food_template = true): FoodItem {
    return <FoodItem>{
      is_custom: true,
      meal: this.mealIndex,
      name: detail.name,
      carbs: detail.carbs,
      calories: detail.calories,
      fats: detail.fats,
      protein: detail.protein,
      is_custom_food_template,
      serving_size: {
        carbs: detail.carbs,
        calories: detail.calories,
        fats: detail.fats,
        protein: detail.protein,
        unit: detail.serving_unit,
        amount: detail.serving_amount,
      },
      amount_consumed: {
        unit: detail.serving_unit,
      },
      alt_servings: null
    };
  }

  @HostListener('document:backbutton', ['$event'])
  public backButtonHandler($event) {
    $event.preventDefault();

    if (!this.scanningBarcode) {
      this.closeModal();
    }

  }

  /**
   * Opening barcode scanner and waiting for response
   */
  public async scanBarcode() {

    try {
      this.scanningBarcode = true;
      const barcode = await this.barcodeScanner.scan();
      if (barcode !== false) {
        this.searchBarcode(barcode);
      }
    } catch (e) {
      this.toastService.flash(e);
    } finally {
      window.setTimeout(() => {
        this.scanningBarcode = false;
      }, 100);
    }
  }

  /**
   * Searching barcode food
   * @param barcode
   */
  public async searchBarcode(barcode) {
    const loader = await this.loadingController.create({
      message: 'Please wait ...'
    });

    await loader.present();

    try {
      const result = await this.nutritioninxService.searchBarcode(barcode).toPromise();

      // only continuing if there are results
      if (result.foods.length === 0) {
        this.toastService.flash('No matches for that barcode.');

      } else {
        this.openBrandedFood(result.foods[0]);
      }
    } catch (e) {
      // Apparently this is a 404 which is an "error".
      if (e.status === 404) {
        this.toastService.flash('No matches for that barcode.');
        return;
      }
      this.rollbar.error(e);
    } finally {
      loader.dismiss();
    }
  }

  public getAltServings(data: CommonDetailFood): AltServing[] {
    // Adding condition to check if alt_measures is null or undefined
    if (!data.alt_measures) {
      data.alt_measures = [];
    }

    let altServing: AltServing[] = [{
      quantity: data.serving_qty || 1,
      measure: data.serving_unit,
      serving_weight: data.serving_weight_grams || 1
    }];

    if (data.alt_measures.length > 0) {
      altServing = data.alt_measures;
    }

    const hasPrimaryServingInfo = altServing.find(serving => serving.measure === data.serving_unit);

    if (!hasPrimaryServingInfo) {
      altServing.push({
        quantity: data.serving_qty || 1,
        measure: data.serving_unit,
        serving_weight: data.serving_weight_grams || 1
      });
    }

    return altServing;
  }

  public async addMealTemplate(meal: MealTemplate<FoodItem>) {
    const configuration = await this.configureMealTemplate();

    if (configuration === false) {
      return false;
    }

    const loader = await this.loadingController.create({
      message: 'Please wait ...'
    });

    await loader.present();
    const foodItems = [];

    try {
      for (const mealItem of meal.items) {
        let item: FoodItem = mealItem;

        // if result type is not custom then fetching meal item information from nutritioninx to maintin ToS of nutritioninx
        if (!mealItem.is_custom) {

          if (mealItem.is_branded_food) {
            const list = <CommonDetail>await this.nutritioninxService.brandedDetail(mealItem.nutritioninx_item_id);
            item = this.convertBrandedFoodToFoodItem(list.foods[0]);
          } else {
            const transphormer: Transphormer = JSON.parse(window.localStorage.getItem('transphormer'));
            const list = <CommonDetail>await this.nutritioninxService.commonDetail(mealItem.nutritioninx_food_name, transphormer.id);
            item = this.convertCommonFoodToFoodItem(list.foods[0]);
          }

          item.amount_consumed.amount = mealItem.amount_consumed.amount;
          item.amount_consumed.unit = mealItem.amount_consumed.unit;
          item.calories = mealItem.calories;
          item.fats = mealItem.fats;
          item.carbs = mealItem.carbs;
          item.protein = mealItem.protein;
        } else {
          item.is_custom_food_template = true;
        }

        item.meal_template_id = meal.id;

        const foodItem = await this.foodItemService
          .createFoodItem(this.nutritionDayId, configuration.mealIndex, mealItem.is_custom, item, mealItem.is_custom_food_template);
        foodItems.push(foodItem);
      }

      this.cachingService.clearAll();

      this.modal.dismiss({
        mealIndex: configuration.mealIndex,
        foodItems: foodItems,
        foodItem: null
      });
    } catch (e) {
      this.toastService.flash(this.errorService.firstError(e));
    } finally {
      loader.dismiss();
    }
  }

  /**
   * Opens modal to configure meal template for various properties
   */
  public async configureMealTemplate(): Promise<{ mealIndex: number } | false> {
    const settingModal = await this.modalController.create({
      component: MealTemplateAddConfigurationComponent,
      componentProps: {
        mealIndex: this.mealIndex
      },
      cssClass: 'meal-template-configuration-modal',
      backdropDismiss: false
    });

    await settingModal.present();

    const result = await settingModal.onDidDismiss();
    if (result.data) {
      return result.data;
    }

    return false;
  }
}
