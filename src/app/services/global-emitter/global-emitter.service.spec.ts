import { TestBed } from '@angular/core/testing';
import { GlobalEmitterService } from './global-emitter.service';

describe('GlobalEmitterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalEmitterService = TestBed.get(GlobalEmitterService);
    expect(service).toBeTruthy();
  });
});
