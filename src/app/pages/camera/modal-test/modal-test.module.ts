import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalTestPage } from './modal-test.page';
import { CameraPage } from '../camera.page'
import { CameraPageModule } from '../camera.module';
import { AnnouncementsPageModule } from '../../announcements/announcements.module';
import { AnnouncementsPage } from '../../announcements/announcements.page';

const routes: Routes = [
  {
    path: '',
    component: ModalTestPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnouncementsPageModule,   
    RouterModule.forChild(routes)
  ],
  declarations: [ModalTestPage]
})
export class ModalTestPageModule {}
