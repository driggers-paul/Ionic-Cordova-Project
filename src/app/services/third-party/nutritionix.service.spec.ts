import { TestBed } from '@angular/core/testing';
import { NutritionixService } from './nutritionix.service';

describe('NutritionixService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NutritionixService = TestBed.get(NutritionixService);
    expect(service).toBeTruthy();
  });
});
