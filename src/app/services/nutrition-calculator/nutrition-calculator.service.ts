import { ActiveLevelTypes, PreferenceMacroCounting, Sex, TransphormationGoalTypes } from '../onboarding/onboarding.service';
import { Injectable } from '@angular/core';
import { MacroInfo, NutritionCalculator } from '../../pages/nutrition/nutrition-calculator';
import { Transphormer } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class NutritionCalculatorService {
  /**
   * Returns value in oz of water intake
   *
   * @param currentWeight
   */
  public waterIntake(currentWeight: number) {
    if (currentWeight <= 200) {
      return 100;
    }

    return 120;
  }

  public getActivityLevelMultiplier(weightDifference: number, activityLevel: ActiveLevelTypes) {
    const multipliers = [
      [10, 11, 12], // For <60 lbs
      [11, 12, 13], // 60 - 100 lbs
      [12, 13, 14] // 100+ lbs
    ];
    const levelModifiers = {
      'Sedentary' : 0,
      'Light Activity': 1,
      'Very Active': 2
    };

    let weightDiff = 0;
    if (weightDifference > 60 && weightDifference < 100) {
      weightDiff = 1;
    } else if (weightDifference >= 100) {
      weightDiff = 2;
    }

    return multipliers[weightDiff][levelModifiers[activityLevel]];
  }

  public calculateBasicMacros(
    transphormer: Transphormer
  ): MacroInfo {
    const nutritionCalculator = new NutritionCalculator(transphormer, transphormer.latest_weight_value);
    return nutritionCalculator.getMacros();
  }

  public calculateAdvancedMacros(
    currentWeight: number,
    goalWeight: number,
    activityLevel: ActiveLevelTypes,
    transphormationGoal: TransphormationGoalTypes,
    sex: Sex,
    macroCountingPreference: PreferenceMacroCounting
  ) {
    const weightDifference = currentWeight - goalWeight;
    let goalMultiplier;

    const activityLevelMultiplier = this.getActivityLevelMultiplier(weightDifference, activityLevel);

    switch (transphormationGoal) {
      case 'Primarily lose bodyfat':
        goalMultiplier = 1;
        break;
      case 'Maintain':
        goalMultiplier = 1.15;
        break;
      case 'Gain lean muscle':
        goalMultiplier = 1.5;
    }

    const baseBmr = (weightDifference > 60) ? goalWeight : currentWeight;
    const bmr = baseBmr * activityLevelMultiplier * goalMultiplier;

    const protein = goalWeight + ((weightDifference > 100) ? 25 : 0);
    let fats, carbs, baseFatGrams, baseCarbGrams;

    // if female
    if (sex === Sex.Female) {
      baseFatGrams = 40;
      baseCarbGrams = 100;
    } else {
      baseFatGrams = 50;
      baseCarbGrams = 125;
    }

    fats = baseFatGrams + (weightDifference > 100 ? 20 : 0);
    carbs = baseCarbGrams + (weightDifference > 100 ? 25 : 0);

    if (macroCountingPreference === 'Carbs') {
      carbs = (bmr - (protein * 4) - (fats * 9)) / 4;
    } else if (macroCountingPreference === 'Both') {
      const remainingCalories = (bmr - (fats * 9) - (carbs * 4) - (protein * 4)) / 2;
      fats += Math.ceil(remainingCalories / 9);
      carbs += Math.ceil(remainingCalories / 4);
    } else {
      fats = (bmr - (protein * 4) - (carbs * 4)) / 9;
    }

    return {
      calories: bmr,
      protein,
      fats: Math.round(fats),
      carbs: Math.round(carbs)
    };
  }
}
