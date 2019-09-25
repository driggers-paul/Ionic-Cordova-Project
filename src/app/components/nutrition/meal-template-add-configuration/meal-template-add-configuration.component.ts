import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-meal-template-add-configuration',
  templateUrl: './meal-template-add-configuration.component.html',
  styleUrls: ['./meal-template-add-configuration.component.scss'],
})
export class MealTemplateAddConfigurationComponent implements OnInit {

  @Input()
  public mealIndex = 1;

  constructor(public modal: ModalController) {
  }

  ngOnInit() {
  }

  public changeMealIndex(index) {
    this.mealIndex = index;
  }

  public close() {
    this.modal.dismiss();
  }

  public save() {
    this.modal.dismiss({
      mealIndex: this.mealIndex
    });
  }

}
