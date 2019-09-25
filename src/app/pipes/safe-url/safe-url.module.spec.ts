import { SafeUrlModule } from './safe-url.module';

describe('SafeUrlModule', () => {
  let safeUrlModule: SafeUrlModule;

  beforeEach(() => {
    safeUrlModule = new SafeUrlModule();
  });

  it('should create an instance', () => {
    expect(safeUrlModule).toBeTruthy();
  });
});
