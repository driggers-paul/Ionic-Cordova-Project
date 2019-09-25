import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MacroPage } from './macro.page';

describe('MacroPage', () => {
  let component: MacroPage;
  let fixture: ComponentFixture<MacroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MacroPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
