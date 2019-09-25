import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnnouncementsPage } from './announcements.page';
import { SideMenuModule } from '../../components/side-menu/side-menu.module';

const routes: Routes = [
  {
    path: '',
    component: AnnouncementsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SideMenuModule
  ],
  declarations: [AnnouncementsPage],
  exports: [AnnouncementsPage]
})
export class AnnouncementsPageModule {
}
