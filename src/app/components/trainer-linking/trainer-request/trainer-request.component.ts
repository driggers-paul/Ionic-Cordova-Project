import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Transphormer } from '../../../services/authentication/authentication.service';
import { ErrorsService } from '../../../services/errors/errors.service';
import {
  LoadingController,
  ToastController,
  AlertController,
} from '@ionic/angular';
import { TrainerService } from '../../../services/trainer/trainer.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  LinkApplication,
  TrainerTransphormerLinkService,
} from '../../../services/trainer-transphormer-link/trainer-transphormer-link.service';

@Component({
  selector: 'app-trainer-request',
  templateUrl: './trainer-request.component.html',
  styleUrls: ['./trainer-request.component.scss'],
})
export class TrainerRequestComponent implements OnInit {
  @Output()
  public trainerSelect: EventEmitter<LinkApplication> = new EventEmitter<LinkApplication>();

  public trainers: Transphormer[] = [];

  public formGroup: FormGroup;

  public matchValue = '';

  constructor(
    public errorService: ErrorsService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    public alertController: AlertController,
    private trainerService: TrainerService,
    private linkService: TrainerTransphormerLinkService
  ) {
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      trainer: new FormControl('', [Validators.required]),
    });
  }

  public async fetchTrainers() {
    try {
      this.formGroup.get('trainer').setValue('');
      this.trainers = <Transphormer[]>(
        await this.trainerService.listTrainers(this.matchValue)
      );
      return this.trainers;
    } catch (e) {
      const toast = await this.toastCtrl.create({
        message: this.errorService.firstError(e),
        duration: 3000,
      });
      await toast.present();
      return Promise.reject(e);
    }
  }

  public async submit() {
    const loader = await this.loadingCtrl.create({
      message: 'Sending request...',
    });
    await loader.present();
    try {
      const trainers = await this.fetchTrainers();
      if (trainers.length > 0) {
        const application = <LinkApplication>(
          await this.linkService.applyLinkingByTransphormer(
            trainers[0].trainer.id,
            this.user.id
          )
        );

        this.trainerSelect.emit(application);
      } else {
        const alert = await this.alertController.create({
          header: 'Alert',
          message: 'No matching advisor found.',
          buttons: ['OK'],
        });

        await alert.present();
      }
    } catch (e) {
      console.log(e);
      const toast = await this.toastCtrl.create({
        message: this.errorService.firstError(e),
        duration: 3000,
      });
      await toast.present();
    } finally {
      loader.dismiss();
    }
  }

  public get user(): Transphormer {
    return JSON.parse(window.localStorage.getItem('transphormer'));
  }
}
