import { Component, Input, OnChanges } from '@angular/core';
import { Transphormer } from '../../services/authentication/authentication.service';
import { MacroInfo } from '../../pages/nutrition/nutrition-calculator';
import { NutritionCalculatorService } from '../../services/nutrition-calculator/nutrition-calculator.service';

@Component({
  selector: 'app-macros-bar',
  templateUrl: './macros-bar.component.html',
  styleUrls: ['./macros-bar.component.scss'],
})
export class MacrosBarComponent implements OnChanges {

  @Input() public transphormer: Transphormer;
  @Input() public topRight: string;
  @Input() public topLeft: string;
  @Input() public showHeader = true;

  private macros: MacroInfo;

  public _isCustomMacro = false;

  constructor(
    private macroCalculator: NutritionCalculatorService
  ) {
  }

  ngOnChanges() {
    this.setupMacros();
  }

  public setupMacros() {
    if (!this.transphormer) {
      return;
    }

    if (this.transphormer.likely_to_do !== 'Calorie / Macro counting') {
      this.macros = this.macroCalculator.calculateBasicMacros(this.transphormer);
      return;
    }

    this.macros = this.macroCalculator.calculateAdvancedMacros(
      this.transphormer.latest_weight_value,
      +this.transphormer.goal_weight,
      this.transphormer.activity_level,
      this.transphormer.transphormation_goal,
      this.transphormer.sex,
      this.transphormer.preference_macro_counting);

    // if transphormer has created custom macro
    if (this.transphormer.custom_macros) {

      // if custom macro has not been reverted to original
      if (!this.transphormer.custom_macros.reset_to_original) {
        this.macros = this.transphormer.custom_macros;
        this._isCustomMacro = true;
      }
    }
  }

  public get isCustom() {
    if (!this.transphormer) {
      return false;
    }

    if (this.transphormer.likely_to_do !== 'Calorie / Macro counting') {
      return false;
    }

    if (this.transphormer.custom_macros
      && !this.transphormer.custom_macros.reset_to_original) {
      return true;
    }

    return false;
  }

  public get calories(): string {
    if (this.macros) {
      return this.macros.calories.toString();
    } else {
      return '?';
    }
  }

  public get protein(): string {
    if (this.macros) {
      return this.macros.protein.toString();
    } else {
      return '?';
    }
  }

  public get carbs(): string {
    if (this.macros) {
      return this.macros.carbs.toString();
    } else {
      return '?';
    }
  }

  public get fats(): string {
    if (this.macros) {
      return this.macros.fats.toString();
    } else {
      return '?';
    }
  }
}
