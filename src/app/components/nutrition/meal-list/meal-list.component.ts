import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Meal } from '../../../services/nutrition/nutrition.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss'],
})
export class MealListComponent implements OnInit {

  @Input()
  public meals: Meal[] = [];

  @Input()
  public nutritionDayId = 0;

  @Output()
  public mealUpdated: EventEmitter<Meal> = new EventEmitter<Meal>();

  constructor() {
  }

  ngOnInit() {
  }


}
