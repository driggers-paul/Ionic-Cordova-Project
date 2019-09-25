import { TestBed } from '@angular/core/testing';
import { CommonAlertService } from './common-alert.service';

describe('CommonAlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonAlertService = TestBed.get(CommonAlertService);
    expect(service).toBeTruthy();
  });
});
