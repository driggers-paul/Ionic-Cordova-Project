import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MealItemComponent } from './meal-item.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Meal } from '../../../services/nutrition/nutrition.service';

class MockModalController {
  create(obj: any) {
    return {
      present() {
      },
      dismiss() {
      }
    };
  }
}

describe('MealItemComponent', () => {
  let component: MealItemComponent;
  let fixture: ComponentFixture<MealItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MealItemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule],
      providers: [{
        provide: ModalController,
        useClass: MockModalController
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create meal template when saveMealTemplate is called', fakeAsync(() => {
    component.meal = <Meal>{
      meal_count: 1,
      active: true,
      food_items: [{
        amount_consumed: {
          unit: 'ounces',
          amount: 100
        },
        alt_servings: [{
          measure: 'g',
          serving_weight: 100,
          quantity: 1,
          qty: 1,
          seq: 1
        }],
        serving_size: {
          calories: 100,
          carbs: 100,
          fats: 100,
          protein: 100,
          amount: 1,
          unit: 'g'
        },
        calories: 100,
        carbs: 100,
        protein: 100,
        fats: 100,
        is_custom: true,
        is_branded_food: false,
        nutritioninx_food_name: '',
        nutritioninx_item_id: ''
      }]
    };

    // const nameModalAction = spyOn(component, 'openMealTemplateNameModal').and.returnValue('Sample');
    const createTemplate = spyOn(component.mealTemplateService, 'create');
    // const loadingController = spyOn(component.loadingController, 'create').and.returnValue((new MockModalController()).create({}));

    component.saveAsMealTemplate();
    tick(100);
    expect(createTemplate).toHaveBeenCalledWith('Sample', component.meal.food_items);

  }));

  it('should not create meal template when saveMealTemplate is called and no name is returned', fakeAsync(() => {
    component.meal = <Meal>{
      meal_count: 1,
      active: true,
      food_items: [{
        amount_consumed: {
          unit: 'ounces',
          amount: 100
        },
        alt_servings: [{
          measure: 'g',
          serving_weight: 100,
          quantity: 1,
          qty: 1,
          seq: 1
        }],
        serving_size: {
          calories: 100,
          carbs: 100,
          fats: 100,
          protein: 100,
          amount: 1,
          unit: 'g'
        },
        calories: 100,
        carbs: 100,
        protein: 100,
        fats: 100,
        is_custom: true,
        is_branded_food: false,
        nutritioninx_food_name: '',
        nutritioninx_item_id: ''
      }]
    };

    // const nameModalAction = spyOn(component, 'openMealTemplateNameModal').and.returnValue('');
    const createTemplate = spyOn(component.mealTemplateService, 'create');
    // const loadingController = spyOn(component.loadingController, 'create').and.returnValue((new MockModalController()).create({}));

    component.saveAsMealTemplate();
    tick(100);
    expect(createTemplate).not.toHaveBeenCalled();

  }));
});
