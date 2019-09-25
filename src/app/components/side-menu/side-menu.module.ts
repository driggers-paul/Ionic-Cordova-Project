import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu.component';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Pro } from '@ionic-native/pro/ngx';
import { MenuButtonComponent } from './menu-button/menu-button.component';
// import { CameraPageModule } from '../../pages/camera/camera.module';

@NgModule({
  imports: [CommonModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [SideMenuComponent, MenuButtonComponent],
  exports: [SideMenuComponent, MenuButtonComponent],
  providers: [LocalNotifications, Pro]
})
export class SideMenuModule {
}
