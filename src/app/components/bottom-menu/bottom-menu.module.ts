import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomMenuComponent } from './bottom-menu.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [BottomMenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [BottomMenuComponent]
})
export class BottomMenuModule {
}
