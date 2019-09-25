import { TestBed } from '@angular/core/testing';
import { BranchioService } from './branchio.service';

describe('BranchioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BranchioService = TestBed.get(BranchioService);
    expect(service).toBeTruthy();
  });
});
