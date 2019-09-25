import { TestBed, inject } from '@angular/core/testing';

import { IsLoggedInGuard } from './is-logged-in.guard';

describe('AuthenticationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsLoggedInGuard]
    });
  });

  it('should ...', inject([IsLoggedInGuard], (guard: IsLoggedInGuard) => {
    expect(guard).toBeTruthy();
  }));
});
