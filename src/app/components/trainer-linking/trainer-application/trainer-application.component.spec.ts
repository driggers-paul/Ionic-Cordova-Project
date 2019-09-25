import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainerApplicationComponent } from './trainer-application.component';

describe('TrainerApplicationComponent', () => {
  let component: TrainerApplicationComponent;
  let fixture: ComponentFixture<TrainerApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrainerApplicationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
