import { TestBed, inject } from '@angular/core/testing';

import { AndroidBackButtonGuard } from './android-back-button.guard';

describe('AndroidBackButtonGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AndroidBackButtonGuard]
    });
  });

  it('should ...', inject([AndroidBackButtonGuard], (guard: AndroidBackButtonGuard) => {
    expect(guard).toBeTruthy();
  }));
});
