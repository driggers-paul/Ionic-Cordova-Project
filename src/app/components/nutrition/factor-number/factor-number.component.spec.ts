import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorNumberComponent } from './factor-number.component';

describe('FactorNumberComponent', () => {
  let component: FactorNumberComponent;
  let fixture: ComponentFixture<FactorNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactorNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactorNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
