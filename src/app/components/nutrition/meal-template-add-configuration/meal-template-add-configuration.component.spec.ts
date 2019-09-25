import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealTemplateAddConfigurationComponent } from './meal-template-add-configuration.component';

describe('MealTemplateAddConfigurationComponent', () => {
  let component: MealTemplateAddConfigurationComponent;
  let fixture: ComponentFixture<MealTemplateAddConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealTemplateAddConfigurationComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealTemplateAddConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
