import { TestBed } from '@angular/core/testing';
import { InAppPurchaseService } from './in-app-purchase.service';

describe('InAppPurchaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InAppPurchaseService = TestBed.get(InAppPurchaseService);
    expect(service).toBeTruthy();
  });
});
