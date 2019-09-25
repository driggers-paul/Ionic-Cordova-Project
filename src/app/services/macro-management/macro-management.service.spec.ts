import { TestBed } from '@angular/core/testing';
import { MacroManagementService } from './macro-management.service';

describe('MacroManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MacroManagementService = TestBed.get(MacroManagementService);
    expect(service).toBeTruthy();
  });
});
