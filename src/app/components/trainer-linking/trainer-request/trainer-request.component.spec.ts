import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerRequestComponent } from './trainer-request.component';

describe('TrainerRequestComponent', () => {
  let component: TrainerRequestComponent;
  let fixture: ComponentFixture<TrainerRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrainerRequestComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
