import { Injectable } from '@angular/core';
import { MacroCountingInfo, Meal, NutritionService } from '../nutrition/nutrition.service';
import { Weight, WeightsService } from '../weights/weights.service';
import { Transphormer } from '../authentication/authentication.service';
import { NutritionCalculatorService } from '../nutrition-calculator/nutrition-calculator.service';
import { CustomMacro, CustomMacroService } from '../custom-macro/custom-macro.service';
import { MacroInfo, NutritionCalculator } from '../../pages/nutrition/nutrition-calculator';
import { FoodItemsService } from '../food-items/food-items.service';
import { Moment } from 'moment';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class MacroManagementService {

  constructor(
    public nutritionService: NutritionService,
    public nutritionCalculator: NutritionCalculatorService,
    public customMacroService: CustomMacroService,
    public weightService: WeightsService,
    public foodItemService: FoodItemsService
  ) {
  }

  public async macros(
    transphormer: Transphormer,
    forMacroCounting: boolean,
    currentWeight: Weight | null = null,
    date: Moment | null = null
  ) {

    let goalValues = this.defaultGoalValues();
    let bmrValues = this.defaultGoalValues();
    let meals = this.blankMeal();
    date = date || moment();
    const weightRequest = currentWeight ? Promise.resolve(currentWeight) : this.weightService.latestWeight();

    const [weight, latestMacro, macroCounting] = <[Weight, CustomMacro, MacroCountingInfo]>await Promise.all([
      weightRequest,
      this.customMacroService.latestMacro(),
      this.macroCounting(date)
    ]);
    let macros: MacroInfo | null = null;

    if (!forMacroCounting) {
      macros = new NutritionCalculator(transphormer, weight.weight).getMacros();

      return {goalValues, macros, meals, macroCounting, weight, bmrValues};
    }

    bmrValues = this.bmrValue(weight, transphormer);
    goalValues = bmrValues;

    if (latestMacro) {
      if (!latestMacro.reset_to_original) {
        goalValues = latestMacro;
      }
    }
    meals = this.setupMeals(meals, macroCounting);

    return {goalValues, macros, meals, macroCounting, weight, bmrValues};
  }

  public bmrValue(weight: Weight, transphormer: Transphormer) {
    return this.nutritionCalculator.calculateAdvancedMacros(
      weight.weight, transphormer.goal_weight, transphormer.activity_level,
      transphormer.transphormation_goal, transphormer.sex, transphormer.preference_macro_counting
    );
  }

  public blankMeal() {
    const meals = [];

    for (let i = 1; i <= 6; i++) {
      meals.push({
        meal_count: i,
        food_items: [],
        active: false
      });
    }

    return meals;
  }

  public defaultGoalValues() {
    return {
      calories: 0,
      protein: 0,
      fats: 0,
      carbs: 0
    };
  }

  public setupMeals(meals: Meal[], macroCounting: MacroCountingInfo) {
    return meals.map(meal => {
      meal.food_items = macroCounting.tracked_items
        .filter(trackedItem => trackedItem.meal === meal.meal_count)
        .map(trackedItem => this.foodItemService.convertToFoodItem(trackedItem));
      meal.active = meal.food_items.length > 0;
      return meal;
    });
  }

  public async macroCounting(date: Moment): Promise<MacroCountingInfo> {
    let macroCounting: MacroCountingInfo;
    try {
      macroCounting = <MacroCountingInfo>await this.nutritionService.getMacroCountingInfo(date.toDate());
    } catch (e) {
      if (e.status !== 404) {
        throw e;
      }

      macroCounting = {
        track_date: moment().format('YYYY-MM-DD'),
        water_amount: 0,
        tracked_items: []
      };
    }

    return macroCounting;

  }

  public displayMacros(transphormer: Transphormer, macros?: MacroInfo, meals?: Meal[]) {
    return {
      get calories() {
        return calculateCalorieValue('calories');
      },
      get fats() {
        return calculateCalorieValue('fats');
      },
      get protein() {
        return calculateCalorieValue('protein');
      },
      get carbs() {
        return calculateCalorieValue('carbs');
      },
    };

    function calculateCalorieValue(type: string): string {
      if (transphormer.likely_to_do !== 'Calorie / Macro counting') {
        if (macros) {
          return macros[type].toString();
        }

        return '?';
      }

      if (!meals) {
        return '?';
      }

      return meals.reduce((carry, meal) => carry + meal.food_items
          .reduce((typeValue, foodItem) => typeValue + foodItem[type], 0)
        , 0).toFixed(0);
    }
  }


  // public get calories(): string {
  //   if (!this.transphormerDoingCalorieMacroCounting) {
  //     if (this.macros) {
  //       return this.macros.calories.toString();
  //     } else {
  //       return '?';
  //     }
  //   }
  //   if (!this.meals) {
  //     return '?';
  //   }
  //   return this.meals
  //     .reduce((carry, meal) => carry + meal.food_items
  //         .reduce((calories, foodItem) => calories + foodItem.calories, 0)
  //       , 0).toFixed(0);
  // }
  //
  // public get protein(): string {
  //   if (!this.transphormerDoingCalorieMacroCounting && this.macros) {
  //     if (this.macros) {
  //       return this.macros.protein.toString();
  //     } else {
  //       return '?';
  //     }
  //   }
  //   if (!this.meals) {
  //     return '?';
  //   }
  //   return this.meals
  //     .reduce((carry, meal) => carry + meal.food_items
  //         .reduce((protein, foodItem) => protein + foodItem.protein, 0)
  //       , 0).toFixed(0);
  // }
  //
  // public get carbs(): string {
  //   if (!this.transphormerDoingCalorieMacroCounting && this.macros) {
  //     if (this.macros) {
  //       return this.macros.carbs.toString();
  //     } else {
  //       return '?';
  //     }
  //   }
  //   if (!this.meals) {
  //     return '?';
  //   }
  //   return this.meals
  //     .reduce((carry, meal) => carry + meal.food_items
  //         .reduce((carbs, foodItem) => carbs + foodItem.carbs, 0)
  //       , 0).toFixed(0);
  // }
  //
  // public get fats(): string {
  //   if (!this.transphormerDoingCalorieMacroCounting && this.macros) {
  //     if (this.macros) {
  //       return this.macros.fats.toString();
  //     } else {
  //       return '?';
  //     }
  //   }
  //   if (!this.meals) {
  //     return '?';
  //   }
  //   return this.meals
  //     .reduce((carry, meal) => carry + meal.food_items
  //         .reduce((fats, foodItem) => fats + foodItem.fats, 0)
  //       , 0).toFixed(0);
  // }
}
