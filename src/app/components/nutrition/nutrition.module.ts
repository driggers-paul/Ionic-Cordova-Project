import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { IonicModule } from '@ionic/angular';
import { MacrosComponent } from './macros/macros.component';
import { WaterComponent } from './water/water.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { MealItemComponent } from './meal-item/meal-item.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { CustomFoodComponent } from './custom-food/custom-food.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { FactorNumberComponent } from './factor-number/factor-number.component';
import { MealTemplateNameComponent } from './meal-template-name/meal-template-name.component';
import { MealTemplateAddConfigurationComponent } from './meal-template-add-configuration/meal-template-add-configuration.component';
import { CustomMacrosComponent } from './custom-macros/custom-macros.component';



@NgModule({
  declarations: [
    ProgressBarComponent, MacrosComponent,
    WaterComponent, MealListComponent,
    MealItemComponent, AddFoodComponent, CustomFoodComponent, EditFoodComponent, FactorNumberComponent,
    MealTemplateNameComponent, MealTemplateAddConfigurationComponent, CustomMacrosComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ProgressBarComponent, MacrosComponent,
    WaterComponent, MealListComponent, MealItemComponent,
    AddFoodComponent, CustomFoodComponent
  ],
  entryComponents: [EditFoodComponent, MealTemplateNameComponent, MealTemplateAddConfigurationComponent, CustomMacrosComponent]
})
export class NutritionModule {
}
