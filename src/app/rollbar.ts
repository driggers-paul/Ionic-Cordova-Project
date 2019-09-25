import { environment } from '../environments/environment';
import { ErrorHandler, Inject, Injectable, InjectionToken } from '@angular/core';
import * as Rollbar from 'rollbar';

const rollbarConfig = {
  accessToken: '6045bb3d740d4fe083099e576f62d77f',
  itemsPerMinute: 5,
  environment: environment.production ? 'prod' : 'dev',
  captureUncaught: true,
  enabled: true,
  verbose: true,
  captureUnhandledRejections: true,
};

export const RollbarService = new InjectionToken<Rollbar>('rollbar');

@Injectable()
export class RollbarErrorHandler implements ErrorHandler {
  constructor(@Inject(RollbarService) private rollbar: Rollbar) {}

  handleError(err: any): void {
    this.rollbar.error(err.originalError || err);
  }
}

export function rollbarFactory() {
  return new Rollbar(rollbarConfig);
}
