import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
class PusherService {
  protected service;
  private pusher: Pusher;

  constructor() {
    this.pusher = new Pusher(environment.pusher.key, {
      cluster: environment.pusher.cluster,
      host: environment.pusher.host,
      encrypted: true,
    });
  }

  public getGeneralStreamChannel() {
    const channel = this.pusher.subscribe('stream');
    return {
      channel,
      pusher: this.pusher,
      close() {
        this.pusher.unsubscribe('stream');
      }
    };
  }

  public getChannelForLiveStream(stream) {
    const channel = this.pusher.subscribe('stream.' + stream);
    return {
      channel,
      pusher: this.pusher,
      close() {
        this.pusher.unsubscribe('stream.' + stream);
      }
    };
  }
}

export { Pusher, PusherService };
