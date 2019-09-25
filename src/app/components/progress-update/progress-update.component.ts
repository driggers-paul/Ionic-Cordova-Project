import { Component, Input, OnInit } from '@angular/core';
import { CameraPhotos } from '../../services/camera/camera.service';
import { ZoomImgComponent } from '../zoom-img/zoom-img.component';
import { ModalController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-progress-update',
  templateUrl: './progress-update.component.html',
  styleUrls: ['./progress-update.component.scss'],
})
export class ProgressUpdateComponent implements OnInit {

  @Input() public expanded: boolean;

  @Input()
  public update: CameraPhotos = {
    picture_front: null,
    picture_side: null,
    picture_back: null,
    transphormer_id: 0,
    created_at: '',
    id: 0,
    video_url: null,
    text: null,
  };

  constructor(
    private modal: ModalController,
    private iab: InAppBrowser,
  ) {
  }

  ngOnInit() {
  }

  public get hasExpandibles() {
    return this.update.video_url || this.update.text;
  }

  viewVideo() {
    this.iab.create(this.update.video_url, '_system', {location: 'yes'});
  }

  public async openZoomImg(imageSource: string) {
    const myModal = await this.modal.create({
      component: ZoomImgComponent,
      backdropDismiss: false,
      componentProps: {
        imgSource: imageSource
      },
    });
    await myModal.present();
  }
}
