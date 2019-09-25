import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  LinkApplication,
  TrainerTransphormerLinkService,
} from '../../../services/trainer-transphormer-link/trainer-transphormer-link.service';
import { ErrorsService } from '../../../services/errors/errors.service';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-trainer-application',
  templateUrl: './trainer-application.component.html',
  styleUrls: ['./trainer-application.component.scss'],
})
export class TrainerApplicationComponent implements OnInit {
  @Input()
  public application: LinkApplication;

  @Output()
  cancelApplication: EventEmitter<true> = new EventEmitter<true>();

  constructor(
    public errorService: ErrorsService,
    private linkService: TrainerTransphormerLinkService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
  ) {
  }

  ngOnInit() {
  }

  private async cancelRequest() {
    const loader = await this.loadingCtrl.create({
      message: 'Cancelling request...',
    });

    await loader.present();

    try {
      await this.linkService.destroyLink(this.application.id);
      this.cancelApplication.emit(true);
    } catch (e) {
      const toast = await this.toastCtrl.create({
        message: this.errorService.firstError(e),
        duration: 3000,
      });
      await toast.present();
    } finally {
      loader.dismiss();
    }
  }

  public async confirmCancel() {
    const alert = await this.alertCtrl.create({
      header: 'Cancel Advisor Request?',
      message: 'Are you sure you want to cancel your active Advisor request?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Ok',
          handler: async () => {
            this.cancelRequest();
          },
        },
      ],
    });

    await alert.present();
  }
}
