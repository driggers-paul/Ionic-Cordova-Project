import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CameraButtonsComponent } from './camera-buttons.component';

describe('CameraButtonsComponent', () => {
  let component: CameraButtonsComponent;
  let fixture: ComponentFixture<CameraButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CameraButtonsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
