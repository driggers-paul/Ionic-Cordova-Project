import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProgressUpdateComponent } from './progress-update.component';
import { ZoomImgModule } from '../zoom-img/zoom-img.module';
import { ZoomImgComponent } from '../zoom-img/zoom-img.component';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ZoomImgModule
  ],
  declarations: [ProgressUpdateComponent],
  exports: [ProgressUpdateComponent],
  entryComponents: [ZoomImgComponent],
  providers: [InAppBrowser]
})
export class ProgressUpdateModule {
}
