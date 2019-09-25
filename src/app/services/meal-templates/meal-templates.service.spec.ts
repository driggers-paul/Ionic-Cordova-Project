import { TestBed } from '@angular/core/testing';
import { MealTemplatesService } from './meal-templates.service';

describe('MealTemplatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MealTemplatesService = TestBed.get(MealTemplatesService);
    expect(service).toBeTruthy();
  });
});
