import { Component, HostListener, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { FoodItem } from '../../../services/nutrition/nutrition.service';
import { FoodItemsService } from '../../../services/food-items/food-items.service';
import { ToastService } from '../../../services/toast-service/toast-service.service';
import { ErrorsService } from '../../../services/errors/errors.service';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.scss']
})
export class EditFoodComponent implements OnInit {

  @Input()
  public mealIndex = 1;

  @Input()
  public foodItem: FoodItem;

  @Input()
  public nutritionDayId = 0;

  @Input()
  public isCustom = true;


  constructor(
    private modal: ModalController,
    private loadingController: LoadingController,
    private foodItemService: FoodItemsService,
    private toastService: ToastService,
    public errorService: ErrorsService
  ) {
  }

  ngOnInit() {
  }

  public closeModal() {
    this.modal.dismiss();
  }

  public async updateFoodItem(foodItem: FoodItem) {
    const loader = await this.loadingController.create({
      message: 'Please wait ...'
    });
    await loader.present();
    try {
      const updatedFoodItem = <FoodItem>await this.foodItemService.updateFoodItem(
        this.foodItem.id, this.nutritionDayId, this.mealIndex, this.isCustom, foodItem
      );
      this.modal.dismiss(updatedFoodItem);
    } catch (e) {
      this.toastService.flash(this.errorService.firstError(e));
    } finally {
      loader.dismiss();
    }

  }

  public async removeFoodItem() {
    const loader = await this.loadingController.create({
      message: 'Please wait ...'
    });
    await loader.present();
    try {
      await this.foodItemService.deleteFoodItem(this.foodItem.id, this.nutritionDayId);
      this.modal.dismiss('remove');
    } catch (e) {
      this.toastService.flash(this.errorService.firstError(e));
      console.log(e);
    } finally {
      loader.dismiss();
    }

  }

  @HostListener('document:backbutton', ['$event'])
  public backButtonHandler($event) {
    $event.preventDefault();
    this.closeModal();
  }
}
