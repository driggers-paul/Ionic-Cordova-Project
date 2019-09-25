import { TestBed } from '@angular/core/testing';
import { CustomFoodTemplateService } from './custom-food-template.service';

describe('CustomFoodTemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomFoodTemplateService = TestBed.get(CustomFoodTemplateService);
    expect(service).toBeTruthy();
  });
});
