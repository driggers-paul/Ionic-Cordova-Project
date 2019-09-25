import { ZoomImgComponent } from './zoom-img.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ZoomImgComponent],
  exports: [ZoomImgComponent],
})
export class ZoomImgModule {
}
