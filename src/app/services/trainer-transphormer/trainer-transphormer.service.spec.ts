import { TestBed } from '@angular/core/testing';
import { TrainerTransphormerService } from './trainer-transphormer.service';

describe('TrainerTransphormerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainerTransphormerService = TestBed.get(TrainerTransphormerService);
    expect(service).toBeTruthy();
  });
});
