import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AccountSettingsPage } from './account-settings.page';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Pro } from '@ionic-native/pro/ngx';
import { SideMenuModule } from '../../components/side-menu/side-menu.module';

const routes: Routes = [
  {
    path: '',
    component: AccountSettingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SideMenuModule
  ],
  declarations: [AccountSettingsPage],
  providers: [LocalNotifications, Pro]
})
export class AccountSettingsPageModule {
}
