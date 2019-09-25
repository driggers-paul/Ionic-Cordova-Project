import { TestBed } from '@angular/core/testing';
import { TrainerTransphormerLinkService } from './trainer-transphormer-link.service';

describe('TrainerTransphormerLinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainerTransphormerLinkService = TestBed.get(TrainerTransphormerLinkService);
    expect(service).toBeTruthy();
  });
});
