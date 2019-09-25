import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CameraPage } from '../camera.page';
import { AnnouncementsPage } from '../../announcements/announcements.page';

@Component({
  selector: 'app-modal-test',
  templateUrl: './modal-test.page.html',
  styleUrls: ['./modal-test.page.scss'],
})
export class ModalTestPage implements OnInit, AfterViewInit {

  public updateID: number;
  public submitErr: any;
  public currentModal: any = null;

  constructor(private modalCtrl: ModalController) { 
    console.log("Modal Test page View Constructor.")
  }

  ngOnInit() {
    console.log("Modal Test page View Initialized.")
  }

  ngAfterViewInit() {
    console.log("Modal Test page After View Initialized.")
  }

  ionViewDidLoad() {
    this.showModal();
  }

  public async showModal() {
    await this.modalCtrl.create({
      component: AnnouncementsPage,
      componentProps: {
        'hideExtFields': true,
        'retOnComplete': 'dashboard'
      }
    }).then((modal) => {
      this.currentModal = modal;
      this.currentModal.onDidDismiss().then((data) => {
        console.log("Modal Data = ", data);
      })
      this.currentModal.present();
    });
    
  }

}
