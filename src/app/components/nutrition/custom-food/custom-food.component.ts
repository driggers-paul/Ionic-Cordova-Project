import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AltServing, FoodItem } from '../../../services/nutrition/nutrition.service';
import { Platform } from '@ionic/angular';

export const DEFAULT_SERVING_SIZES: AltServing[] = [
  {measure: 'ounces', quantity: 1, serving_weight: 1},
  {measure: 'grams', quantity: 1, serving_weight: 1},
  {measure: 'fl. ounces', quantity: 1, serving_weight: 1},
  {measure: 'ml', quantity: 1, serving_weight: 1},
  {measure: 'cup', quantity: 1, serving_weight: 1},
  {measure: 'tbsp', quantity: 1, serving_weight: 1},
  {measure: 'pound', quantity: 1, serving_weight: 1},
  {measure: 'serving', quantity: 1, serving_weight: 1},
];

export const DIRECT_SERVING: AltServing = {
  measure: 'serving',
  quantity: 1,
  serving_weight: 1
};

@Component({
  selector: 'app-custom-food',
  templateUrl: './custom-food.component.html',
  styleUrls: ['./custom-food.component.scss']
})
export class CustomFoodComponent implements OnInit, OnDestroy {

  @Output()
  public cancel: EventEmitter<undefined> = new EventEmitter<undefined>();

  @Output()
  public foodItemCreated: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();

  @Output()
  public mealIndexChanged: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  public removeFoodItem: EventEmitter<undefined> = new EventEmitter<undefined>();

  @Input()
  public isCustom = true;
  public confirmingDelete = false;

  @Input()
  public set mealIndex(value: number) {
    this._mealIndex = value;
  }

  @Input()
  public set foodItem(foodItem: FoodItem) {
    if (!this.form) {
      this.initForm();
    }
    this._foodItem = foodItem;
    this.setFormThroughFoodItem(this._foodItem);
    this.updateAmountServingUnits(this._foodItem.serving_size.unit, false);
  }

  @Input()
  public showMealSelect = true;

  @Input()
  public isConsumable = true;

  @Input()
  public set defaultServingSizes(sizes: AltServing[] | null) {
    this._defaultServingSizes = sizes || DEFAULT_SERVING_SIZES;
    if (!this.form) {
      this.initForm();
    }

    this.updateAmountServingUnits(this.form.get('serving_size').get('unit').value, false);
  }

  @Input()
  public isDeletable = false;

  @Input()
  public originalServingUnit: string;

  @Input()
  public showServing = true;

  @Input()
  public isTemplateFood = false;

  public servingSizes: AltServing[] = [];

  public form: FormGroup;

  public _mealIndex;

  public _defaultServingSizes: AltServing[] = DEFAULT_SERVING_SIZES;

  public _foodItem: FoodItem;

  public customConversion = false;

  constructor(
    private formBuilder: FormBuilder,
    private platform: Platform
  ) {
  }

  ngOnInit() {
    this.initForm();
    this.fixForSmallIosScreenSizeOpen(false);
  }
  ngOnDestroy(): void {
    this.fixForSmallIosScreenSizeOpen(true);
  }

  public close() {
    this.cancel.emit();
  }

  public save() {
    if (this._foodItem) {

      // if amount consumed is being set to zer then need to remove the food item
      if (this.form.get('amount_consumed').get('amount').value === 0 || this.confirmingDelete) {
        this.removeFoodItem.emit();
      } else {
        this.foodItemCreated.emit(this.createFoodItemValue());
      }
    } else {
      this.foodItemCreated.emit(this.createFoodItemValue());
    }

  }

  /**
   * Action changes the meal index
   * @param value
   */
  public changeMealIndex(value) {
    this._mealIndex = value;
    this.mealIndexChanged.emit(this._mealIndex);
  }

  private subscribeToFormValueChanges() {
    this.form.get('serving_size').get('unit').valueChanges.subscribe(value => {

      // setting up amount consumed serving sizes
      this.updateAmountServingUnits(value);
    });

    this.form.get('amount_consumed').get('unit').valueChanges.subscribe(() => {
      // Reflecting the calories/carbs/fats/protein values based on amount consumed.
      if (
        (this.form.get('amount_consumed').get('unit').valid && this.form.get('amount_consumed').get('amount').valid)
        && this.form.get('amount_consumed').get('amount').value
      ) {
        this.setCalculatedValues();
      }
    });

    this.form.get('amount_consumed').get('amount').valueChanges.subscribe(() => {

      // Reflecting the calories/carbs/fats/protein values based on amount consumed.
      if (
        (this.form.get('amount_consumed').get('unit').valid && this.form.get('amount_consumed').get('amount').valid)
        && this.form.get('amount_consumed').get('amount').value
      ) {
        this.setCalculatedValues();
      }
    });
  }

  public updateValue(formControl: AbstractControl, newValue) {
    formControl.setValue(newValue);
    // this.forCustomFoodFocus();
  }

  /**
   * Sets the amount consumed serving sizes based on serving size unit
   * @param {String} servingSizeUnit
   * @param {boolean} allowChangingOfConsumedAmount
   */
  private updateAmountServingUnits(servingSizeUnit: string, allowChangingOfConsumedAmount = true): void {
    this.servingSizes = [];

    if (!servingSizeUnit) {
      return;
    }

    // custom list for amount consumed serving unit
    if (this.isCustom || this._foodItem.is_custom) {
      this.servingSizes = [this._defaultServingSizes.find(servingSize => servingSize.measure === servingSizeUnit)];
      this.servingSizes.push(DIRECT_SERVING);
      this.originalServingUnit = servingSizeUnit;
      // delay to allow the angular system to detect changes and update front end
      window.setTimeout(() => {
        if (allowChangingOfConsumedAmount) {
          this.form.get('amount_consumed').get('unit').setValue(servingSizeUnit);
        }
      }, 100);

    } else {
      this.servingSizes = this._defaultServingSizes;
    }


  }

  /**
   * Setting other validations
   */
  private setupCustomValidations() {
    if (!this.isConsumable) {
      this.form.get('amount_consumed').get('unit').clearValidators();
      this.form.get('amount_consumed').get('amount').clearValidators();
    }
  }

  /**
   * Returns the food item instance of the form value
   */
  private createFoodItemValue(): FoodItem {
    const form = this.form.getRawValue();

    const consumedSizeMeasure = this._defaultServingSizes.find(size => size.measure === form.amount_consumed.unit);

    const servingSize = {
      unit: form.serving_size.unit,
      amount: form.serving_size.amount,
      calories: form.calories,
      fats: form.fats,
      protein: form.protein,
      carbs: form.carbs,
    };

    return <FoodItem>{
      is_custom: this._foodItem ? this._foodItem.is_custom : this.isCustom,
      is_custom_food_template: this._foodItem ? this._foodItem.is_custom_food_template : false,
      name: form.name,
      amount_consumed: form.amount_consumed,
      serving_size: servingSize,
      is_branded_food: this._foodItem ? this._foodItem.is_branded_food : false,
      nutritioninx_food_name: this._foodItem ? (this._foodItem.nutritioninx_food_name || null) : null,
      nutritioninx_item_id: this._foodItem ? (this._foodItem.nutritioninx_item_id || null) : null,
      calories: this.calculateRelativeValueConsumed(
        consumedSizeMeasure, form.amount_consumed.amount, form.calories, form.serving_size
      ),
      fats: this.calculateRelativeValueConsumed(
        consumedSizeMeasure, form.amount_consumed.amount, form.fats, form.serving_size
      ),
      carbs: this.calculateRelativeValueConsumed(
        consumedSizeMeasure, form.amount_consumed.amount, form.carbs, form.serving_size
      ),
      protein: this.calculateRelativeValueConsumed(
        consumedSizeMeasure, form.amount_consumed.amount, form.protein, form.serving_size
      ),
      alt_servings: this._defaultServingSizes,
    };
  }

  public forCustomFoodFocus() {
    this.customConversion = false;
    this.form.get('amount_consumed').get('amount').setValue(this.isConsumable ? '' : 1);
  }

  private initForm(): void {
    if (this.form) {
      return;
    }

    this.form = this.formBuilder.group({
      name: this.formBuilder.control({value: '', disabled: false}, [Validators.required]),
      calories: this.formBuilder.control({value: '', disabled: false}, [Validators.required]),
      fats: this.formBuilder.control({value: '', disabled: false}, [Validators.required]),
      carbs: this.formBuilder.control({value: '', disabled: false}, [Validators.required]),
      protein: this.formBuilder.control({value: '', disabled: false}, [Validators.required]),
      calculatedCalories: this.formBuilder.control({value: '', disabled: false}),
      calculatedFats: this.formBuilder.control({value: '', disabled: false}),
      calculatedCarbs: this.formBuilder.control({value: '', disabled: false}),
      calculatedProtein: this.formBuilder.control({value: '', disabled: false}),
      serving_size: this.formBuilder.group({
        amount: this.formBuilder.control('', [Validators.required]),
        unit: this.formBuilder.control('', [Validators.required]),
      }),
      amount_consumed: this.formBuilder.group({
        amount: this.formBuilder.control('', [Validators.required]),
        unit: this.formBuilder.control('', [Validators.required]),
      })
    });

    this.subscribeToFormValueChanges();
    this.setupCustomValidations();
  }

  /**
   * Sets the form values based on food item input
   *
   * @param foodItem
   */
  private setFormThroughFoodItem(foodItem: FoodItem) {
    this.initForm();
    this.form.get('name').setValue(foodItem.name);
    this.form.get('serving_size').get('unit').setValue(foodItem.serving_size.unit, {
      emitEvent: false
    });
    this.form.get('serving_size').get('amount').setValue(foodItem.serving_size.amount);
    this.form.get('calories').setValue(foodItem.serving_size.calories);
    this.form.get('fats').setValue(foodItem.serving_size.fats);
    this.form.get('carbs').setValue(foodItem.serving_size.carbs);
    this.form.get('protein').setValue(foodItem.serving_size.protein);
    this.form.get('calculatedCalories').setValue(foodItem.calories);
    this.form.get('calculatedFats').setValue(foodItem.fats);
    this.form.get('calculatedCarbs').setValue(foodItem.carbs);
    this.form.get('calculatedProtein').setValue(foodItem.protein);
    this.form.get('amount_consumed').get('unit').setValue(foodItem.amount_consumed.unit);
    this.form.get('amount_consumed').get('amount').setValue(foodItem.amount_consumed.amount, {
      emitEvent: false
    });
  }

  private calculateRelativeValueConsumed(
    consumedSize: AltServing,
    consumedAmount: number,
    macro: number,
    servingSize: {amount: number, unit: string}
  ): number {
    consumedAmount = this.isConsumable ? consumedAmount : 1;
    // Handle custom or template foods.
    if (this.isCustom || this.isTemplateFood) {
      if (consumedSize.measure === 'serving') {
        return consumedAmount * macro;
      }

      return (consumedAmount / servingSize.amount) * macro;
    }

    const baseServing = this.servingSizes
      .find(serving => serving.measure === servingSize.unit);
    // Based on the information we get back from Nutritionix, calculate the new "weight" of the product.
    // Take the serving weight, which defines, for a given size, e.g. cup, how many base units exist within the product.
    // E.g. if I have 2 "cups" selected, the serving weight will be 244. In many cases, the quantity in the consumedSize
    // is 1 or is actually the serving_weight itself (like when using grams). However, in come cases, the quantity is
    // not 1 or 100, but might be "3" like it is with grilled chicken breast. I'm not sure they don't just say that the
    // quantity is 28.33, but it could just be that is how they represent the fraction.
    const perConsumedSizeWeight = (consumedSize.serving_weight / (consumedSize.qty || consumedSize.quantity));
    // We then take that amount per unit consumed and actually multiply it by the amount we are consuming.
    const newWeight = perConsumedSizeWeight * consumedAmount;
    // Now, we know how much of the product's base weight is being consumed. Since *most* products have a base weight
    // associated with them (e.g. 200 calories = 50 grams) then we need to figure out what the new macro is by dividing
    // that by the base weight first and then multiplying that by the new weight.
    // It turns out that for some products (like metric liquids), there is no base weight and the products themselves
    // are just measured by some base unit like mL. Therefore, if the base_weight is null, just use 1 since when the
    // food is converted, we are adding the default serving quantity, which fixes everything above.
    const perServingWeight = ((baseServing.qty || baseServing.quantity) / baseServing.serving_weight) / servingSize.amount;
    return newWeight * macro * perServingWeight;
  }

  private setCalculatedValues() {
    const form = this.form.getRawValue();
    const consumedSizeMeasure = this._defaultServingSizes.find(size => size.measure === form.amount_consumed.unit);

    if (!consumedSizeMeasure) {
      return;
    }
    if (this.isCustom) {
      this.customConversion = !!this.form.get('amount_consumed').get('amount').value;
    } else {
      this.customConversion = false;
    }

    this.form.get('calculatedCalories').setValue(
      this.calculateRelativeValueConsumed(
        consumedSizeMeasure, form.amount_consumed.amount, form.calories, form.serving_size
      ).toFixed(2)
    );
    this.form.get('calculatedFats').setValue(
      this.calculateRelativeValueConsumed(
        consumedSizeMeasure, form.amount_consumed.amount, form.fats, form.serving_size
      ).toFixed(2)
    );
    this.form.get('calculatedCarbs').setValue(
      this.calculateRelativeValueConsumed(
        consumedSizeMeasure, form.amount_consumed.amount, form.carbs, form.serving_size
      ).toFixed(2)
    );
    this.form.get('calculatedProtein').setValue(
      this.calculateRelativeValueConsumed(
        consumedSizeMeasure, form.amount_consumed.amount, form.protein, form.serving_size
      ).toFixed(2)
    );
  }

  private fixForSmallIosScreenSizeOpen(value: boolean) {
    if (this.platform.is('cordova') && this.platform.is('iphone')) {
      (<any>window).Keyboard.hideFormAccessoryBar(value);
    }
  }

  public cancelDelete() {
    this.confirmingDelete = false;
  }

  public delete() {
    this.confirmingDelete = true;
  }

  public get updateColor(): string {
    if (this.isDeletable) {
      if (this.form.get('amount_consumed').get('amount').value === 0) {
        return 'danger';
      }
    }

    return 'primary';
  }

  public get updateText(): string {
    if (this.isDeletable) {
      if (this.form.get('amount_consumed').get('amount').value === 0 || this.confirmingDelete) {
        return 'Delete';
      }
    }

    return 'Save';
  }

  public get isDisabledAmountConsumed(): boolean {
    if (!this.isCustom) {
      return false;
    }

    let value = (this.form.get('serving_size').get('unit').value) && (this.form.get('serving_size').get('amount').value >= 0)
      && (this.form.get('calories').value >= 0 && this.form.get('carbs').value >= 0)
      && (this.form.get('fats').value >= 0 && this.form.get('protein').value >= 0);

    value = !!value;

    return !value;
  }
}
