import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BodyMetricsPage } from './body-metrics.page';
import { ChartModule } from '../../components/chart/chart.module';
import { SideMenuModule } from '../../components/side-menu/side-menu.module';

const routes: Routes = [
  {
    path: '',
    component: BodyMetricsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ChartModule,
    SideMenuModule
  ],
  declarations: [BodyMetricsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: []
})
export class BodyMetricsPageModule {
}
