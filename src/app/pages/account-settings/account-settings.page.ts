import { Component, OnInit } from '@angular/core';
import { ErrorsService } from '../../services/errors/errors.service';
import { LoadingController } from '@ionic/angular';
import { AccountService, AccountSetting } from '../../services/account/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transphormer } from '../../services/authentication/authentication.service';
import { ToastService } from '../../services/toast-service/toast-service.service';
import { AnalyticsService } from '../../services/analytics/analytics.service';
import { AnalyticEvents } from './../../services/analytics/analytic-events.enum';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.page.html',
  styleUrls: ['./account-settings.page.scss'],
})
export class AccountSettingsPage implements OnInit {
  public form: FormGroup;

  public transphormer: Transphormer;

  constructor(
    private formBuilder: FormBuilder,
    public errorService: ErrorsService,
    private loadingCtrl: LoadingController,
    private toastSvc: ToastService,
    private accountService: AccountService,
    private analyticService: AnalyticsService
  ) {
  }

  ngOnInit() {
    this.transphormer = JSON.parse(window.localStorage.getItem('transphormer'));
    this.form = this.formBuilder.group({
      photo_reminder: this.formBuilder.control('', [Validators.required]),
      weigh_reminder: this.formBuilder.control('', [Validators.required]),
      workout_reminder: this.formBuilder.control('', [Validators.required]),
      what_time: this.formBuilder.control('', [Validators.required]),
      receive_email: this.formBuilder.control('', [Validators.required]),
      receive_notification: this.formBuilder.control('', [Validators.required]),
      receive_livestream_notification: this.formBuilder.control({
        value: false,
        disabled: !this.transphormer.is_paid_user
      }, [Validators.required]),
    });

    this.getAccountSetting();
  }

  private async getAccountSetting() {
    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
    });
    await loader.present();

    try {
      const data = <AccountSetting>await this.accountService.getAccountSetting();

      const rawValue = <Object>this.form.getRawValue();
      for (const key in data) {
        if (rawValue.hasOwnProperty(key)) {
          this.form.get(key).setValue(data[key]);
        }
      }

    } catch (e) {
      this.toastSvc.flash(this.errorService.firstError(e));
    } finally {
      loader.dismiss();
    }
  }

  public async updateAccountSetting() {
    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
    });
    await loader.present();

    try {
      const data = this.form.getRawValue();
      await this.accountService.updateAccountSetting(data);
      const time = data.what_time.split(':');
      this.accountService.setWorkoutReminder(
        data.workout_reminder,
        time.length > 1 ? parseFloat(time[0]) : 0,
        time.length > 1 ? parseFloat(time[1]) : 0
      );
      await this.accountService.setWorkoutReminder(data.workout_reminder, parseFloat(time[0]), parseFloat(time[1]));
      await this.accountService.setPhotoReminder(true, data.photo_reminder);
      await this.accountService.setWeighInReminder(true, data.weigh_reminder);
      await this.accountService.subscribeToLiveStream(data.receive_livestream_notification);
      await this.analyticService.logEvent(AnalyticEvents.ChangingConfiguration, {});

      this.toastSvc.flash('Account setting updated successfully');
    } catch (e) {
      this.toastSvc.flash(this.errorService.firstError(e));
    } finally {
      loader.dismiss();
    }
  }
}
