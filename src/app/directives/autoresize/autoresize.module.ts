import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoresizeDirective } from './autoresize.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [AutoresizeDirective],
  exports: [AutoresizeDirective],
})
export class AutoresizeModule {
}
