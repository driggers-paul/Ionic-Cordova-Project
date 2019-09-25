import { CalendarModule } from '../../components/calendar/calendar.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MacroPage } from './macro.page';
import { NutritionModule } from '../../components/nutrition/nutrition.module';
import { SideMenuModule } from '../../components/side-menu/side-menu.module';
import { AddFoodComponent } from '../../components/nutrition/add-food/add-food.component';
import { AndroidBackButtonGuard } from '../../guards/android-back-button.guard';

const routes: Routes = [
  {
    path: '',
    component: MacroPage,
    canDeactivate: [AndroidBackButtonGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NutritionModule,
    CalendarModule,
    SideMenuModule
  ],
  declarations: [MacroPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [AddFoodComponent]
})
export class MacroPageModule {}
