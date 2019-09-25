import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [LogoComponent],
  exports: [LogoComponent]
})
export class LogoModule {
}
