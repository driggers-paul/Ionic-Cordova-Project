import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import * as pinchZoom from 'pinch-zoom';

@Component({
  selector: 'app-zoom-img',
  templateUrl: './zoom-img.component.html',
  styleUrls: ['./zoom-img.component.scss'],
})
export class ZoomImgComponent implements OnInit {
  @Input()
  public imgSource = '';

  constructor(public modalCtrl: ModalController) {
  }

  ngOnInit() {
    window.setTimeout(() => {
      this.setupImage();
    }, 1000);
  }


  public close() {
    this.modalCtrl.dismiss();
  }

  private setupImage() {
    const element = document.querySelector('.zoomable-img');
    pinchZoom(element);
  }
}
