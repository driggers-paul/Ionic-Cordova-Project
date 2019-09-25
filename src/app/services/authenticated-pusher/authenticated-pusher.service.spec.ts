import { TestBed } from '@angular/core/testing';
import { AuthenticatedPusherService } from './authenticated-pusher.service';

describe('AuthenticatedPusherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticatedPusherService = TestBed.get(AuthenticatedPusherService);
    expect(service).toBeTruthy();
  });
});
