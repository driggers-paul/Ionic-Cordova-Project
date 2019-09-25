import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroComponent } from './macro.component';

describe('MacroComponent', () => {
  let component: MacroComponent;
  let fixture: ComponentFixture<MacroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacroComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
