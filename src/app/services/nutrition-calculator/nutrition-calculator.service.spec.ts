import { TestBed } from '@angular/core/testing';
import { NutritionCalculatorService } from './nutrition-calculator.service';
import { Sex } from '../onboarding/onboarding.service';

enum ALM {
  SEDENTARY = 'Sedentary',
  LIGHT = 'Light Activity',
  ACTIVE = 'Very Active',
}

describe('NutritionCalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NutritionCalculatorService = TestBed.get(NutritionCalculatorService);
    expect(service).toBeTruthy();
  });

  it('should calculate water intake', () => {
    const service: NutritionCalculatorService = TestBed.get(NutritionCalculatorService);
    expect(service.waterIntake(250)).toBe(120);
    expect(service.waterIntake(156)).toBe(100);
  });

  it('should get activity level modifiers', () => {
    const service: NutritionCalculatorService = TestBed.get(NutritionCalculatorService);
    expect(service.getActivityLevelMultiplier(5, ALM.SEDENTARY)).toBe(10);
    expect(service.getActivityLevelMultiplier(5, ALM.LIGHT)).toBe(11);
    expect(service.getActivityLevelMultiplier(5, ALM.ACTIVE)).toBe(12);
    expect(service.getActivityLevelMultiplier(65, ALM.SEDENTARY)).toBe(11);
    expect(service.getActivityLevelMultiplier(65, ALM.LIGHT)).toBe(12);
    expect(service.getActivityLevelMultiplier(65, ALM.ACTIVE)).toBe(13);
    expect(service.getActivityLevelMultiplier(105, ALM.SEDENTARY)).toBe(12);
    expect(service.getActivityLevelMultiplier(105, ALM.LIGHT)).toBe(13);
    expect(service.getActivityLevelMultiplier(105, ALM.ACTIVE)).toBe(14);
  });

  it('should calculate macros properly', () => {
    const service: NutritionCalculatorService = TestBed.get(NutritionCalculatorService);
    let result = service.calculateAdvancedMacros(325, 230, 'Sedentary', 'Primarily lose bodyfat', Sex.Male, 'Fats');
    expect(result).toEqual({
      calories: 2530,
      protein: 230,
      fats: 123,
      carbs: 125
    });
    result = service.calculateAdvancedMacros(325, 230, 'Sedentary', 'Primarily lose bodyfat', Sex.Female, 'Fats');
    expect(result).toEqual({
      calories: 2530,
      protein: 230,
      fats: 134,
      carbs: 100
    });
  });

  it('should use different base amounts for men and women', () => {
    const service: NutritionCalculatorService = TestBed.get(NutritionCalculatorService);
    let result = service.calculateAdvancedMacros(120, 120, 'Sedentary', 'Primarily lose bodyfat', Sex.Male, 'Fats');
    expect(result.carbs).toEqual(125);
    result = service.calculateAdvancedMacros(120, 120, 'Sedentary', 'Primarily lose bodyfat', Sex.Male, 'Carbs');
    expect(result.fats).toEqual(50);

    result = service.calculateAdvancedMacros(120, 120, 'Sedentary', 'Primarily lose bodyfat', Sex.Female, 'Fats');
    expect(result.carbs).toEqual(100);
    result = service.calculateAdvancedMacros(120, 120, 'Sedentary', 'Primarily lose bodyfat', Sex.Female, 'Carbs');
    expect(result.fats).toEqual(40);
  });

  it('should use different add carb and protein modifiers for weight diff >100lbs', () => {
    const service: NutritionCalculatorService = TestBed.get(NutritionCalculatorService);
    let result = service.calculateAdvancedMacros(120, 120, 'Sedentary', 'Primarily lose bodyfat', Sex.Male, 'Fats');
    expect(result.carbs).toEqual(125);
    result = service.calculateAdvancedMacros(320, 120, 'Sedentary', 'Primarily lose bodyfat', Sex.Male, 'Fats');
    expect(result.carbs).toEqual(150);

    result = service.calculateAdvancedMacros(120, 120, 'Sedentary', 'Primarily lose bodyfat', Sex.Female, 'Carbs');
    expect(result.fats).toEqual(40);
    result = service.calculateAdvancedMacros(320, 120, 'Sedentary', 'Primarily lose bodyfat', Sex.Female, 'Carbs');
    expect(result.fats).toEqual(60);
  });

  it('should calculate carbs and fats for "Both"', () => {
    const service: NutritionCalculatorService = TestBed.get(NutritionCalculatorService);
    let result = service.calculateAdvancedMacros(220, 180, 'Sedentary', 'Primarily lose bodyfat', Sex.Male, 'Both');
    expect(result).toEqual({
      calories: 2200,
      protein: 180,
      fats: 80,
      carbs: 192
    });
    result = service.calculateAdvancedMacros(120, 115, 'Sedentary', 'Primarily lose bodyfat', Sex.Female, 'Both');
    expect(result).toEqual({
      calories: 1200,
      protein: 115,
      fats: 39,
      carbs: 98
    });
  });

  it('should add additional protein for weight diff >100lbs', () => {
    const service: NutritionCalculatorService = TestBed.get(NutritionCalculatorService);
    let result = service.calculateAdvancedMacros(425, 230, 'Sedentary', 'Primarily lose bodyfat', Sex.Male, 'Fats');
    expect(result.protein).toEqual(255);
    result = service.calculateAdvancedMacros(325, 230, 'Sedentary', 'Primarily lose bodyfat', Sex.Male, 'Fats');
    expect(result.protein).toEqual(230);
  });

  it('should pass Ryans tests', () => {
    const service: NutritionCalculatorService = TestBed.get(NutritionCalculatorService);
    let result = service.calculateAdvancedMacros(175, 140, 'Light Activity', 'Primarily lose bodyfat', Sex.Male, 'Carbs');
    expect(result).toEqual({
      calories: 1925,
      protein: 140,
      fats: 50,
      carbs: 229
    });
    result = service.calculateAdvancedMacros(208, 200, 'Very Active', 'Gain lean muscle', Sex.Male, 'Carbs');
    expect(result).toEqual({
      calories: 3744,
      protein: 200,
      fats: 50,
      carbs: 624
    });
    result = service.calculateAdvancedMacros(120, 115, 'Sedentary', 'Primarily lose bodyfat', Sex.Female, 'Carbs');
    expect(result).toEqual({
      calories: 1200,
      protein: 115,
      fats: 40,
      carbs: 95
    });
    result = service.calculateAdvancedMacros(290, 180, 'Sedentary', 'Primarily lose bodyfat', Sex.Female, 'Fats');
    expect(result).toEqual({
      calories: 2160,
      protein: 205,
      fats: 93,
      carbs: 125
    });
  });

});
