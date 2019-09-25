import { TestBed, inject } from '@angular/core/testing';

import { ProfileCompleteGuard } from './profile-complete.guard';

describe('ProfileCompleteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileCompleteGuard]
    });
  });

  it('should ...', inject([ProfileCompleteGuard], (guard: ProfileCompleteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
