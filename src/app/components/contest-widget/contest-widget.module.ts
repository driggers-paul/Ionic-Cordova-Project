import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContestWidgetComponent } from './contest-widget.component';

@NgModule({
  declarations: [ContestWidgetComponent],
  imports: [
    CommonModule,
  ],
  exports: [ContestWidgetComponent],
})
export class ContestWidgetModule {
}
