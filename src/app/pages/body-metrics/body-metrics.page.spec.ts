import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BodyMetricsPage } from './body-metrics.page';

describe('BodyMetricsPage', () => {
  let component: BodyMetricsPage;
  let fixture: ComponentFixture<BodyMetricsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BodyMetricsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyMetricsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
