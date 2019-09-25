import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';
import { environment } from '../../../environments/environment';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedPusherService extends BaseService {

  private pusher: Pusher;

  constructor(public http: HttpClient, public platform: Platform) {
    super(http, platform);

    AuthenticatedPusherService.SET_PLATFORM(platform);

    this.pusher = new Pusher(environment.pusher.key, {
      cluster: environment.pusher.cluster,
      host: environment.pusher.host,
      encrypted: true,
      authEndpoint: AuthenticatedPusherService.Url('broadcasting/auth'),
      auth: {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${window.localStorage.getItem('access_token')}`
        }
      }
    });
  }

  public openChannel(channelName: string) {
    this.pusher.subscribe(channelName);
  }

  public closeChannel(channelName: string) {
    this.pusher.unsubscribe(channelName);
  }

  public openEvent<T>(eventName: string): Observable<T> {
    const subject = new Subject<T>();

    this.pusher.bind(eventName, (data) => {
      subject.next(data as T);
    });

    return subject.asObservable();
  }

  public closeEvent(eventName, callback?: Function) {
    this.pusher.unbind(eventName, callback);
  }
}
