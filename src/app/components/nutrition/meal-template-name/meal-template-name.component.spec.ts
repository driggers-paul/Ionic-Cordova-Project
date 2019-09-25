import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealTemplateNameComponent } from './meal-template-name.component';

describe('MealTemplateNameComponent', () => {
  let component: MealTemplateNameComponent;
  let fixture: ComponentFixture<MealTemplateNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealTemplateNameComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealTemplateNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
