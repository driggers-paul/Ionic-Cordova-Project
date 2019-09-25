import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from './pie-chart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PieChartComponent],
  declarations: [PieChartComponent]
})
export class PieChartModule {
}
