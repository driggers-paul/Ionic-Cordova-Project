import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TrainerRequestComponent } from './trainer-request/trainer-request.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerApplicationComponent } from './trainer-application/trainer-application.component';

@NgModule({
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule],
  declarations: [TrainerRequestComponent, TrainerApplicationComponent],
  exports: [TrainerApplicationComponent, TrainerRequestComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrainerLinkingModule {
}
