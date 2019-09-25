import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FoodItem, Meal } from '../../../services/nutrition/nutrition.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { EditFoodComponent } from '../edit-food/edit-food.component';
import { AddFoodComponent } from '../add-food/add-food.component';
import { MealTemplatesService } from '../../../services/meal-templates/meal-templates.service';
import { ToastService } from '../../../services/toast-service/toast-service.service';
import { ErrorsService } from '../../../services/errors/errors.service';
import { MealTemplateNameComponent } from '../meal-template-name/meal-template-name.component';
import { RequestCachingService } from '../../../services/interceptors/caching/request-caching.service';

@Component({
  selector: 'app-meal-item',
  templateUrl: './meal-item.component.html',
  styleUrls: ['./meal-item.component.scss']
})
export class MealItemComponent implements OnInit {

  @Input()
  public meal: Meal;

  @Input()
  public nutritionDayId = 0;

  @Output()
  public mealUpdated: EventEmitter<Meal> = new EventEmitter<Meal>();

  public showFoodItems = false;

  constructor(
    private modalCtrl: ModalController,
    public mealTemplateService: MealTemplatesService,
    public toastService: ToastService,
    public errorService: ErrorsService,
    public cacheService: RequestCachingService,
    public loadingController: LoadingController
  ) {
  }

  ngOnInit() {
  }

  /**
   * Opens the edit modal for food item
   *
   * @param foodItem
   * @param foodItemIndex
   */
  public async openEditFoodItem(foodItem: FoodItem, foodItemIndex: number) {
    const editFoodModal = await this.modalCtrl.create({
      component: EditFoodComponent,
      cssClass: 'global-modal-d-block',
      componentProps: {
        foodItem,
        isCustom: foodItem.is_custom,
        mealIndex: this.meal.meal_count,
        nutritionDayId: this.nutritionDayId
      },
      backdropDismiss: false
    });

    await editFoodModal.present();

    const result = await editFoodModal.onDidDismiss();
    if (result.data === 'remove') {
      this.meal.food_items.splice(foodItemIndex, 1);
      this.mealUpdated.emit(this.meal);
    } else if (result.data) {
      this.meal.food_items[foodItemIndex] = result.data;
      this.mealUpdated.emit(this.meal);
    }
  }

  /**
   * Modal to add food item to existing meal list
   */
  public async addFoodItem() {
    const addFoodModal = await this.modalCtrl.create({
      component: AddFoodComponent,
      backdropDismiss: false,
      cssClass: 'global-modal-d-block',
      componentProps: {
        mealIndex: this.meal.meal_count,
        nutritionDayId: this.nutritionDayId
      }
    });
    await addFoodModal.present();

    const result = await addFoodModal.onDidDismiss();

    if (result.data) {

      if (result.data.foodItem) {
        this.meal.food_items.push(result.data.foodItem);
        this.mealUpdated.emit(this.meal);
      } else if (result.data.foodItems.length > 0) {
        for (const foodItem of result.data.foodItems) {
          this.meal.food_items.push(foodItem);
        }
        this.mealUpdated.emit(this.meal);
      }

    }
  }

  public get calories(): number {
    return this.meal.food_items.reduce((carry, foodItem) => carry + foodItem.calories, 0);
  }

  public get protein(): number {
    return this.meal.food_items.reduce((carry, foodItem) => carry + foodItem.protein, 0);
  }

  public get carbs(): number {
    return this.meal.food_items.reduce((carry, foodItem) => carry + foodItem.carbs, 0);
  }

  public get fats(): number {
    return this.meal.food_items.reduce((carry, foodItem) => carry + foodItem.fats, 0);
  }

  public get hasValue(): boolean {
    return this.calories > 0 || this.protein > 0 || this.fats > 0 || this.carbs > 0;
  }

  /**
   * Save meal template to server
   */
  public async saveAsMealTemplate() {
    const name = await this.openMealTemplateNameModal();

    if (!name) {
      return;
    }

    try {
      await this.mealTemplateService.create(<string>name, this.meal.food_items);
      this.toastService.flash('Meal saved.');
      this.cacheService.clearAll();
    } catch (e) {
      this.toastService.flash(this.errorService.firstError(e));
    }
  }

  /**
   * Open modal to ask for meal template name
   */
  public async openMealTemplateNameModal(): Promise<string | boolean> {
    const modal = await this.modalCtrl.create({
      component: MealTemplateNameComponent,
      cssClass: 'meal-template-name-modal'
    });

    await modal.present();

    const result = await modal.onDidDismiss();

    return !result.data ? false : result.data;
  }
}
