import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base/base.service';
import { Platform } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ErrorFormat } from '../errors/errors.service';
import { FirebaseService } from '../firebase/firebase.service';

export enum NotificationValues {
  WORKOUT_REMINDER = 1,
  WEIGHT_REMINDER = 2,
  PHOTO_REMINDER = 3
}

export interface AccountSetting {
  transphormer_id: number;
  receive_notification: boolean;
  receive_email: boolean;
  photo_reminder: number;
  weigh_reminder: number;
  workout_reminder: boolean;
  what_time: string;
  receive_livestream_notification: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AccountService extends BaseService {
  constructor(
    protected http: HttpClient,
    protected platform: Platform,
    private localNotification: LocalNotifications,
    private firebase: FirebaseService
  ) {
    super(http, platform);
    AccountService.SET_PLATFORM(platform);
  }

  public getAccountSetting(): Promise<AccountSetting | ErrorFormat> {
    return this.http
      .get<any>(AccountService.Url('account/show'), AccountService.BaseOptions(true, true))
      .toPromise()
      .catch(AccountService.HandleError);
  }

  public updateAccountSetting(data): Promise<any> {
    return this.http
      .post<any>(AccountService.Url('account/update'), data, AccountService.BaseOptions())
      .toPromise()
      .catch(AccountService.HandleError);
  }

  public async setWorkoutReminder(toRemind: boolean, hour?: number, minute?: number) {
    if (this.platform.is('cordova')) {
      await this.localNotification.clear(NotificationValues.WORKOUT_REMINDER);

      if (toRemind) {
        this.localNotification.schedule({
          id: NotificationValues.WORKOUT_REMINDER,
          title: 'Workout Reminder',
          text: 'Time to do some work! #DuesPaid',
          foreground: true,
          trigger: {
            every: {
              minute: minute,
              hour: hour,
            },
            count: 10
          }
        });
      }
    }

    return true;
  }

  public async setPhotoReminder(toRemind: boolean, weeks: number) {
    if (this.platform.is('cordova')) {
      await this.localNotification.clear(NotificationValues.PHOTO_REMINDER);

      if (toRemind) {
        this.localNotification.schedule({
          id: NotificationValues.PHOTO_REMINDER,
          title: 'Picture Reminder',
          text: 'Don’t forget to take this week’s progress pictures!',
          foreground: true,
          trigger: {
            every: {
              hour: 7,
              minute: 0,
              weekday: 5 /* Friday */
            },
            count: 10
          }
        });
      }
    }

    return true;
  }

  public async setWeighInReminder(toRemind: boolean, weeks: number) {
    if (this.platform.is('cordova')) {
      await this.localNotification.clear(NotificationValues.WEIGHT_REMINDER);

      if (toRemind) {
        this.localNotification.schedule({
          id: NotificationValues.WEIGHT_REMINDER,
          title: 'Weigh In Reminder',
          text: 'Hop on the scale and then enter your progress in the app!',
          foreground: true,
          trigger: {
            every: {
              hour: 7,
              minute: 0,
              weekday: 3 /* Wednesday */
            },
            count: 10
          }
        });
      }
    }

    return true;
  }

  public async subscribeToLiveStream(subscribe: boolean) {
    if (subscribe) {
      this.firebase.subscribeToLivestreamNotification();
    } else {
      this.firebase.unsubscribeToLivestreamNotification();
    }
  }
}
