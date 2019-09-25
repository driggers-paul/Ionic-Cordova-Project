import { LoadingController, ModalController } from '@ionic/angular';
import { Component, HostListener, OnInit } from '@angular/core';
import { NutritionCalculatorService } from '../../services/nutrition-calculator/nutrition-calculator.service';
import { Weight } from '../../services/weights/weights.service';
import { FoodItem, MacroCountingInfo, Meal, NutritionService } from '../../services/nutrition/nutrition.service';
import { AddFoodComponent } from '../../components/nutrition/add-food/add-food.component';
import { Transphormer } from '../../services/authentication/authentication.service';
import * as moment from 'moment';
import { CanLeaveRoute } from '../../guards/android-back-button.guard';
import { ToastService } from '../../services/toast-service/toast-service.service';
import { ErrorsService } from '../../services/errors/errors.service';
import * as _ from 'lodash';
import { CustomMacrosComponent } from '../../components/nutrition/custom-macros/custom-macros.component';
import { CustomMacro } from '../../services/custom-macro/custom-macro.service';
import { ActivatedRoute } from '@angular/router';
import { AnalyticEvents } from '../../services/analytics/analytic-events.enum';
import { AnalyticsService } from '../../services/analytics/analytics.service';
import { MacroManagementService } from '../../services/macro-management/macro-management.service';

@Component({
  selector: 'app-macro',
  templateUrl: './macro.page.html',
  styleUrls: ['./macro.page.scss'],
})
export class MacroPage implements OnInit, CanLeaveRoute {

  public water = 0;
  public macroCountingInfo: MacroCountingInfo;

  public currentWeight: Weight;

  public meals: Meal[] = [];

  public bmrValues;

  public activeBmrValues;

  public today = moment();

  public transphormer: Transphormer;

  public date = moment();

  public canLeaveAndroidBack = true;

  constructor(
    private modal: ModalController,
    public nutritionCalculator: NutritionCalculatorService,
    private loadingCtrl: LoadingController,
    private nutritionService: NutritionService,
    private toastService: ToastService,
    public errorService: ErrorsService,
    public route: ActivatedRoute,
    public analyticService: AnalyticsService,
    public macroManagement: MacroManagementService
  ) {
  }

  async ngOnInit() {
    await this.setupMacro();
    if (this.route.snapshot.queryParams.openCustomMacro) {
      this.openCustomMacro();
    }
  }

  /**
   * Updates the meal information
   *
   * @param updatedMeal
   */
  public updateMeal(updatedMeal: Meal) {
    const index = this.meals.findIndex(meal => meal.meal_count === updatedMeal.meal_count);
    this.meals[index] = updatedMeal;
    const meals = _.cloneDeep(this.meals);
    this.meals = this.meals.map(meal => {
      meal.food_items = meals.reduce((foodItems: FoodItem[], m) => {
        foodItems = _.merge(foodItems, m.food_items.filter(item => item.meal === meal.meal_count));
        return foodItems;
      }, []);

      meal.active = meal.food_items.length > 0;
      return meal;
    });

    this.analyticService.logEvent(AnalyticEvents.LoggingNutrition);
  }

  public async openAddFoodModal() {
    const addFoodModal = await this.modal.create({
      component: AddFoodComponent,
      backdropDismiss: false,
      cssClass: 'global-modal-d-block',
      componentProps: {
        mealIndex: 1,
        nutritionDayId: this.macroCountingInfo.id
      }
    });
    await addFoodModal.present();

    const result: {
      mealIndex: number,
      foodItem: FoodItem | null,
      foodItems: FoodItem[]
    } | undefined = (await addFoodModal.onDidDismiss()).data;

    if (result) {
      if (result.foodItem) {
        this.meals[result.mealIndex - 1].food_items.push(result.foodItem);
      } else {
        for (const foodItem of result.foodItems) {
          this.meals[result.mealIndex - 1].food_items.push(foodItem);
        }
      }
      this.meals[result.mealIndex - 1].active = true;
    }

  }

  public async updateWaterAmount(water: number) {
    const loader = await this.loadingCtrl.create({
      message: 'Please wait ...'
    });
    await loader.present();

    try {
      this.macroCountingInfo.water_amount += water;

      this.macroCountingInfo = <MacroCountingInfo>await this.nutritionService.updateMacroCountingInfo(this.macroCountingInfo);

    } catch (e) {
      this.toastService.flash(this.errorService.firstError(e));
      this.macroCountingInfo.water_amount -= water;
    } finally {
      loader.dismiss();
    }

  }

  public async resetMacroInfoForDate(date: Date) {
    const loader = await this.loadingCtrl.create({
      message: 'Please wait ...'
    });
    await loader.present();
    try {
      this.date = moment(date);
      this.macroCountingInfo = await this.macroManagement.macroCounting(this.date);
      this.meals = this.macroManagement.setupMeals(this.macroManagement.blankMeal(), this.macroCountingInfo);
    } catch (e) {
      this.toastService.flash(this.errorService.firstError(e));
    } finally {
      loader.dismiss();
    }

  }

  private async setupMacro() {
    this.transphormer = JSON.parse(window.localStorage.getItem('transphormer'));
    const loader = await this.loadingCtrl.create({
      message: 'Please wait ...'
    });

    await loader.present();

    try {
      const result = await this.macroManagement.macros(this.transphormer, true, null, this.date);
      this.currentWeight = result.weight;
      this.bmrValues = result.bmrValues;
      this.activeBmrValues = result.goalValues;
      this.macroCountingInfo = result.macroCounting;
      this.meals = result.meals;

    } catch (e) {
      this.toastService.flash(this.errorService.firstError(e));
    } finally {
      loader.dismiss();
    }
  }

  public get calories(): number {
    return this.meals
      .reduce((carry, meal) => carry + meal.food_items
          .reduce((calories, foodItem) => calories + foodItem.calories, 0)
        , 0);
  }

  public get protein(): number {
    return this.meals
      .reduce((carry, meal) => carry + meal.food_items
          .reduce((protein, foodItem) => protein + foodItem.protein, 0)
        , 0);
  }

  public get carbs(): number {
    return this.meals
      .reduce((carry, meal) => carry + meal.food_items
          .reduce((carbs, foodItem) => carbs + foodItem.carbs, 0)
        , 0);
  }

  public get fats(): number {
    return this.meals
      .reduce((carry, meal) => carry + meal.food_items
          .reduce((fats, foodItem) => fats + foodItem.fats, 0)
        , 0);
  }

  public get canAddFood(): boolean {
    const index = this.meals.findIndex(meal => meal.active === false);

    return index >= -1;
  }

  @HostListener('document:backbutton', ['$event'])
  public backButtonHandler($event) {
    $event.preventDefault();
    this.canLeaveAndroidBack = false;
  }

  /**
   * Open modal for editing/creating custom macro
   */
  public async openCustomMacro() {
    const macroModal = await this.modal.create({
      component: CustomMacrosComponent,
      componentProps: {
        originalMacro: this.bmrValues,
      }
    });

    await macroModal.present();

    const result = await macroModal.onDidDismiss();

    if (result.data) {
      this.setActiveBmrValue(result.data);
    }
  }

  public setActiveBmrValue(value: CustomMacro | null) {
    if (value) {
      this.activeBmrValues = value.reset_to_original ? this.bmrValues : value;
    } else {
      this.activeBmrValues = this.bmrValues;
    }
  }
}
