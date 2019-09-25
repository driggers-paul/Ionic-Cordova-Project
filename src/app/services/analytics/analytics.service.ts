import { Injectable } from '@angular/core';
import { Transphormer } from '../authentication/authentication.service';
import { Sex } from '../onboarding/onboarding.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { GlobalEmitterService, GlobalEvents } from '../global-emitter/global-emitter.service';
import { Firebase } from '@ionic-native/firebase/ngx';
import { AnalyticEvents } from './analytic-events.enum';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(
    public firebaseAnalytics: Firebase,
    public router: Router,
    public platform: Platform,
    public globalEmitter: GlobalEmitterService
  ) {
  }

  /**
   * Sets relative user/transphormer information to be used for identifying
   * @param transphormer
   */
  public setUserInformation(transphormer: Transphormer) {
    if (!this.platform.is('cordova')) {
      return;
    }

    this.firebaseAnalytics.setUserId(transphormer.id.toString())
      .then(() => {
        return Promise.all([
          this.firebaseAnalytics.setUserProperty('age', transphormer.age.toString()),
          this.firebaseAnalytics.setUserProperty('gender', transphormer.sex === Sex.Male ? 'male' : 'female'),
        ]);
      }).catch((err) => {
      console.error('properties not set', err);
    });
  }

  /**
   * Initialize the service
   */
  public init() {

    if (!this.platform.is('cordova')) {
      return;
    }

    // tracking page views
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => this.updateCurrentRoute(event.url));

    // Setting session information on session initialized events
    this.globalEmitter.listen(GlobalEvents.SessionInitialized).subscribe(() => {
      const user = JSON.parse(window.localStorage.getItem('transphormer'));
      this.setUserInformation(user);
    });
  }

  /**
   * Sets the current page to the firebase for analytics like user engagement and screnn view
   * @param routeUrl
   */
  public updateCurrentRoute(routeUrl: string) {
    this.firebaseAnalytics.setScreenName(routeUrl.replace(/(\d+)/g, ':id'));
  }

  /**
   * Logs custom Event
   * @param eventName
   * @param extraData
   */
  public logEvent(eventName: AnalyticEvents, extraData?: any) {
    if (this.platform.is('cordova')) {
      this.firebaseAnalytics.logEvent(eventName, extraData);
    }


  }
}
