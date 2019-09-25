import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTestPage } from './modal-test.page';

describe('ModalTestPage', () => {
  let component: ModalTestPage;
  let fixture: ComponentFixture<ModalTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
