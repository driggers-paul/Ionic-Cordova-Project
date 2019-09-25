import { HeightComponent } from './height.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeightComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeightComponent],
})
export class HeightModule {}
