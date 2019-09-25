import { TestBed } from '@angular/core/testing';
import { WeightsService } from './weights.service';

describe('WeightsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeightsService = TestBed.get(WeightsService);
    expect(service).toBeTruthy();
  });
});
