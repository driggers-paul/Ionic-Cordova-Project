import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MacrosBarComponent } from './macros-bar/macros-bar.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    MacrosBarComponent,
    VideoPlayerComponent,
  ],
  exports: [
    MacrosBarComponent,
    VideoPlayerComponent,
  ]
})
export class AppComponentsModule {
}
