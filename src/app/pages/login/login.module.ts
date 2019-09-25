import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { LogoModule } from '../../components/logo/logo.module';
import { SideMenuModule } from '../../components/side-menu/side-menu.module';
import { AndroidBackButtonGuard } from '../../guards/android-back-button.guard';
import { IsLoggedInGuard } from '../../guards/is-logged-in.guard';


const routes: Routes = [
  {
    path: '',
    component: LoginPage,
    canActivate: [IsLoggedInGuard],
    canDeactivate: [AndroidBackButtonGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    LogoModule,
    SideMenuModule
  ],
  declarations: [LoginPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPageModule {
}
