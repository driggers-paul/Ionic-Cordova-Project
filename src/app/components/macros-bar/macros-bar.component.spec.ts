import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacrosBarComponent } from './macros-bar.component';
import { By } from '@angular/platform-browser';
import { NutritionCalculatorService } from '../../services/nutrition-calculator/nutrition-calculator.service';
import { Transphormer } from '../../services/authentication/authentication.service';

const MockNCS = {
  calculateBasicMacros() {
    return {
      calories: 100,
      carbs: 5,
      protein: 5,
      fats: 5
    };
  }
  ,
  calculateAdvancedMacros() {
    return {
      calories: 200,
      carbs: 50,
      protein: 50,
      fats: 50
    };
  }
};

describe('MacrosBarComponent', () => {
  let component: MacrosBarComponent;
  let fixture: ComponentFixture<MacrosBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MacrosBarComponent],
      providers: [
        {
          provide: NutritionCalculatorService, useValue: MockNCS
        },
      ],
      // schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();

    fixture = TestBed.createComponent(MacrosBarComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    fixture = TestBed.createComponent(MacrosBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show question marks for unknown macros', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
    const caloriesEl = fixture.debugElement;
    const r = caloriesEl.query(By.css('div.calories .val'));
    expect(r.nativeElement.textContent).toBe('?');
  });

  it('show simple macros for non CMC users', async () => {
    component.transphormer = <Transphormer>{ likely_to_do: 'Macro meal plan' };
    fixture.detectChanges();
    const caloriesEl = fixture.debugElement;
    const r = caloriesEl.query(By.css('div.calories .val'));
    expect(r.nativeElement.textContent).toBe('100');
  });

  it('show advanced macros for CMC users', async () => {
    component.transphormer = <Transphormer>{ likely_to_do: 'Calorie / Macro counting' };
    fixture.detectChanges();
    const caloriesEl = fixture.debugElement;
    const r = caloriesEl.query(By.css('div.calories .val'));
    expect(r.nativeElement.textContent).toBe('200');
  });

  it('should use custom macro value if has and not reverted to original', async () => {
    component.transphormer = <Transphormer>{
      likely_to_do: 'Calorie / Macro counting',
      custom_macros: {
        calories: 1700,
        carbs: 100,
        protein: 100,
        fats: 100,
        transphormer_id: 1,
        id: 1,
        reset_to_original: false,
      }
    };
    component.setupMacros();
    fixture.detectChanges();
    expect(component.calories).toEqual('1700');
    expect(component.fats).toEqual('100');
    expect(component.carbs).toEqual('100');
    expect(component.protein).toEqual('100');
  });
});
