import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFoodComponent } from './custom-food.component';

describe('CustomFoodComponent', () => {
  let component: CustomFoodComponent;
  let fixture: ComponentFixture<CustomFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
