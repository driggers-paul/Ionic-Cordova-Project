import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CameraPage } from './camera.page';
import { PreviewImgComponent } from './components/preview-img/preview-img.component';
import { UploadImgComponent } from './components/upload-img/upload-img.component';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
import { CameraButtonsComponent } from './components/camera-buttons/camera-buttons.component';
import { SideMenuModule } from '../../components/side-menu/side-menu.module';

const routes: Routes = [
  {
    path: '',
    component: CameraPage
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

  declarations: [
    CameraPage,
    PreviewImgComponent,
    UploadImgComponent,
    CameraButtonsComponent,
  ],
  providers: [CameraPreview],
  exports: [CameraPage, UploadImgComponent, PreviewImgComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    CameraPage
  ]
})
export class CameraPageModule {
}
