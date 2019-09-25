import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomImgComponent } from './zoom-img.component';

describe('ZoomImgComponent', () => {
  let component: ZoomImgComponent;
  let fixture: ComponentFixture<ZoomImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ZoomImgComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
