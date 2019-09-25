import { TestBed } from '@angular/core/testing';
import { CustomMacroService } from './custom-macro.service';

describe('CustomMacroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomMacroService = TestBed.get(CustomMacroService);
    expect(service).toBeTruthy();
  });
});
