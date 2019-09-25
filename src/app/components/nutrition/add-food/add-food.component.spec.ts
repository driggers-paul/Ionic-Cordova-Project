import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AddFoodComponent } from './add-food.component';
import { IonicModule, LoadingController } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrandedFood, CommonDetailFood } from '../../../services/third-party/nutritionix.service';
import { UPC_A_EXAMPLE } from '../../../services/barcode-scanner/barcode-scanner.service.spec';
import { BarcodeScannerService } from '../../../services/barcode-scanner/barcode-scanner.service';
import { of } from 'rxjs';
import { RollbarService } from '../../../rollbar';

class MockLoadingController {
  public create(a: any) {
    return {
      present() {
        console.log('presented');
      },
      dismiss() {
        console.log('dismissed');
      }
    };
  }
}

class MockBarcodeScannerService {
  public scan(): Promise<string> {
    return Promise.resolve(UPC_A_EXAMPLE);
  }
}

class MockRollbar {

}

describe('AddFoodComponent', () => {
  let component: AddFoodComponent;
  let fixture: ComponentFixture<AddFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), HttpClientModule],
      declarations: [AddFoodComponent],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .overrideComponent(AddFoodComponent, {
        set: {
          providers: [
            {provide: LoadingController, useClass: MockLoadingController},
            {provide: BarcodeScannerService, useClass: MockBarcodeScannerService},
            {provide: RollbarService, useClass: MockRollbar}
          ]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should convert food items with null bits', () => {
    expect(component).toBeTruthy();
    const nullItems = <CommonDetailFood>{
      nf_calories: null,
      nf_total_carbohydrate: null,
      nf_total_fat: null,
      nf_protein: 0
    };
    expect(component.fixFood(nullItems)).toEqual({
      carbs: 0,
      protein: 0,
      fats: 0,
      calories: 0
    });
    const nullItems2 = <CommonDetailFood>{
      nf_calories: 5.66666666,
      nf_total_carbohydrate: 4,
      nf_total_fat: 2.3334,
      nf_protein: 0
    };
    expect(component.fixFood(nullItems2)).toEqual({
      carbs: '4.00',
      protein: 0,
      fats: '2.33',
      calories: '5.67'
    });
  });

  it('should attempt to scan barcode and fail', fakeAsync(() => {
    expect(component).toBeTruthy();

    spyOn(component.barcodeScanner, 'scan').and.returnValue(Promise.reject('fail'));
    spyOn(component.toastService, 'flash');

    component.scanBarcode();

    expect(component.barcodeScanner.scan).toHaveBeenCalled();
    tick(10);
    expect(component.toastService.flash).toHaveBeenCalledWith('fail');
  }));

  it('should attempt to scan barcode and call search barcode action', fakeAsync(() => {
    expect(component).toBeTruthy();

    spyOn(component.barcodeScanner, 'scan').and.returnValue(Promise.resolve(UPC_A_EXAMPLE));
    spyOn(component, 'searchBarcode');

    component.scanBarcode();

    expect(component.barcodeScanner.scan).toHaveBeenCalled();
    tick(10);
    expect(component.searchBarcode).toHaveBeenCalledWith(UPC_A_EXAMPLE);
  }));

  it('should show message when barcode search on nurtritioninx service returns blank', fakeAsync(() => {
    expect(component).toBeTruthy();

    const emptyResult = {
      foods: []
    };

    spyOn(component.nutritioninxService, 'searchBarcode').and.returnValue(of(emptyResult));
    spyOn(component.toastService, 'flash');

    component.searchBarcode(UPC_A_EXAMPLE);

    tick(10);
    expect(component.toastService.flash).toHaveBeenCalledWith('No item found for the barcode');

  }));

  it('should search branded food if result returns non empty branded food listing', fakeAsync(() => {
    expect(component).toBeTruthy();

    const brandedFoodResult = {
      foods: [<BrandedFood>{}],
    };

    spyOn(component.nutritioninxService, 'searchBarcode').and.returnValue(of(brandedFoodResult));
    spyOn(component, 'openBrandedFood');

    component.searchBarcode(UPC_A_EXAMPLE);

    tick(10);
    expect(component.nutritioninxService.searchBarcode).toHaveBeenCalled();
    expect(component.openBrandedFood).toHaveBeenCalled();
  }));

  it('should create alt servings from out side values if no alt measures is present', () => {
    expect(component).toBeTruthy();
    const nullItems = <CommonDetailFood>{
      nf_calories: null,
      nf_total_carbohydrate: null,
      nf_total_fat: null,
      nf_protein: 0,
      alt_measures: null,
      serving_qty: 1,
      serving_unit: 'cup',
      serving_weight_grams: 100
    };
    expect(component.getAltServings(nullItems)).toEqual([{
      quantity: nullItems.serving_qty,
      measure: nullItems.serving_unit,
      serving_weight: nullItems.serving_weight_grams
    }]);
  });

  it('should add to alt measures if outside serving info value is not present', () => {
    expect(component).toBeTruthy();
    const nullItems = <CommonDetailFood>{
      nf_calories: null,
      nf_total_carbohydrate: null,
      nf_total_fat: null,
      nf_protein: 0,
      alt_measures: [{
        serving_weight: 110,
        measure: 'oz',
        quantity: 1,
      }],
      serving_qty: 1,
      serving_unit: 'cup',
      serving_weight_grams: 10
    };
    expect(component.getAltServings(nullItems)).toEqual([{
      serving_weight: 110,
      measure: 'oz',
      quantity: 1,
    }, {
      quantity: nullItems.serving_qty,
      measure: nullItems.serving_unit,
      serving_weight: nullItems.serving_weight_grams
    }]);
  });
});
