import { TestBed } from '@angular/core/testing';
import { LivestreamingService } from './livestreaming.service';

describe('LivestreamingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LivestreamingService = TestBed.get(LivestreamingService);
    expect(service).toBeTruthy();
  });
});
