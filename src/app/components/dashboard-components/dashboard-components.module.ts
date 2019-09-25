import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MacroComponent } from './macro/macro.component';

@NgModule({
  declarations: [MacroComponent],
  exports: [
    MacroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardComponentsModule { }
