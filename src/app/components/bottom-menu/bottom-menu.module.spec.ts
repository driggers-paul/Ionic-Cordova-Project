import { BottomMenuModule } from './bottom-menu.module';

describe('BottomMenuModule', () => {
  let bottomMenuModule: BottomMenuModule;

  beforeEach(() => {
    bottomMenuModule = new BottomMenuModule();
  });

  it('should create an instance', () => {
    expect(bottomMenuModule).toBeTruthy();
  });
});
