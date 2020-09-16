import { Component } from '@angular/core';
import { VideoUpload } from 'ionic-plugin-video-upload/video-upload/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private videoUpload: VideoUpload) {}

  clickUpload = () => {
    
    this.videoUpload.init({
      poolID: 'YOUR_POOL_ID',
      region: 'YOUR_REGION',
      bucket: 'YOUR_BUCKET',
      folder: 'YOUR_LOCATION',
      cameraWidth: CAMERA_WIDTH,
      cameraHeight: CAMERA_HEIGHT
    });

    this.videoUpload.startUpload('standard').then(result => {

    })
  }

  
  clickLive = () => {
    this.videoUpload.initLive({
      cameraWidth: CAMERA_WIDTH,
      cameraHeight: CAMERA_HEIGHT
    })

    this.videoUpload.startBroadcast('rtmp://3.89.78.208/live/g121790');
  }

}
