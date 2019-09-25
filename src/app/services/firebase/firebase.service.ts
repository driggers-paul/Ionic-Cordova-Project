import { Injectable } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { GlobalEmitterService, GlobalEvents } from '../global-emitter/global-emitter.service';
import { Router } from '@angular/router';
import { Firebase } from '@ionic-native/firebase/ngx';

let FCM_TOKEN: string | null = null;
const LOCAL_NOTIFICATION_THROUGH_PUSH = 1000;

@Injectable({
  providedIn: 'root'
})
export class FirebaseService extends BaseService {
  constructor(public firebase: Firebase, protected platform: Platform, public http: HttpClient, private navCtrl: NavController,
              private localNotification: LocalNotifications, private globalEmitter: GlobalEmitterService, private router: Router
  ) {
    super(http, platform);
    FirebaseService.SET_PLATFORM(platform);
  }

  public async start() {
    if (this.platform.is('cordova')) {
      this.firebase.subscribe('1stphorm').then(() => {
        console.log('subscribed to global topic "1stphorm"');
      }).catch(e => {
        console.error(e);
        console.log('unable to subscribe to global topic');
      });

      // @todo Detect disconnection and Logouts
      this.firebase.onTokenRefresh()
        .subscribe((token) => {
          if (token) {
            this.saveFCMToken(token);
            this.saveTokenToServer(token);
          }
        });

      if (this.token() === null) {
        const currentToken = await this.firebase.getToken();
        if (currentToken !== null && currentToken !== undefined && currentToken !== '' && currentToken !== 'null') {
          this.saveFCMToken(currentToken);
          this.saveTokenToServer(currentToken);
        }
      }

      this.firebase.onNotificationOpen().subscribe(data => {
        if (data.wasTapped) {
          switch (data.page) {
            case 'chat-messages':
              if (data.transphormer_id) {
                this.navigateAfterDelay(`chat-messages/${data.transphormer_id}`);
              }
              break;
            default:
              this.navigateAfterDelay(data.page);
              break;
          }
        } else {
          if (data.title && data.body) {
            this.localNotification.schedule({
              id: LOCAL_NOTIFICATION_THROUGH_PUSH,
              title: data.title,
              text: data.body
            });
          }

          // sending notification through the system that new announcements are here.
          if (data.page === 'announcements') {
            this.globalEmitter.emit(GlobalEvents.NewAnnouncement);
          }

          // sending notification through the system that new notification message
          if (data.page === 'messages' && this.router.url !== '/messages') {
            this.globalEmitter.emit(GlobalEvents.NewTransphormerMessages);
          }

          // sending notification through the system that new notification message
          if (data.page === 'chat-messages' && this.router.url !== `/chat-messages/${data.transphormer_id}`) {
            this.globalEmitter.emit(GlobalEvents.NewAdvisorMessages);
          }
        }
      });
    }
  }

  private saveFCMToken(token: string) {
    FCM_TOKEN = token;
  }

  public token(): string | null {
    return FCM_TOKEN;
  }

  public saveTokenToServer(token: string): Observable<any> {
    if (this.platform.is('cordova') && token !== null && token !== '' && token !== 'null') {
      return this.http.post(FirebaseService.Url('auth/device-token'), {token}, FirebaseService.BaseOptions());
    } else {
      return new Observable<any>();
    }
  }

  private navigateAfterDelay(page: string) {
    // @todo: Callback behaviour on tap unpredictable causing it not being called when tapping a push notification.
    setTimeout(() => {
      this.navCtrl.navigateRoot(page);
    }, 100);
  }

  public subscribeToLivestreamNotification() {
    if (this.platform.is('cordova')) {
      this.firebase.subscribe('livestream')
        .then(() => console.log('subscribed to topic livestream'));
    }

  }

  public unsubscribeToLivestreamNotification() {
    if (this.platform.is('cordova')) {
      this.firebase.unsubscribe('livestream')
        .then(() => console.log('un subscribed from topic livestream'));
    }
  }
}
