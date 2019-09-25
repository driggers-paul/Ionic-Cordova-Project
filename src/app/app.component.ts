import { Component, Inject } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FirebaseService } from './services/firebase/firebase.service';
import { BranchioService } from './services/branchio/branchio.service';
import { RollbarService } from './rollbar';
import * as Rollbar from 'rollbar';
import { AuthenticationService } from './services/authentication/authentication.service';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { AnalyticsService } from './services/analytics/analytics.service';
import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private firebase: FirebaseService,
    private branchIoService: BranchioService,
    @Inject(RollbarService) private rollbar: Rollbar,
    public auth: AuthenticationService,
    public appVer: AppVersion,
    public analyticsService: AnalyticsService
  ) {
    const t = JSON.parse(window.localStorage.getItem('transphormer'));
    if (t) {
      this.rollbar.configure({
        payload: {
          person: {
            id: t.id,
            email: t.email,
            paid: t.is_paid_user
          }
        }
      });
    }
    this.initializeApp();
  }

  async initializeApp() {
    this.platform.ready().then(async () => {
      if (this.platform.is('cordova')) {
        this.splashScreen.hide();
        this.statusBar.styleLightContent();
      }
      this.analyticsService.init();
      this.firebase.start();
      this.branchIoService.start();
      this.setupAndroidKeyboardHandlers();
      this.auth.setupAuthenticationState();
      this.setupAppVersionInfoInRollbar();
    });
  }

  private setupAndroidKeyboardHandlers() {
    if (this.platform.is('cordova') && this.platform.is('android')) {
      window.addEventListener('keyboardDidShow', e => {
        (<any>document.body).style.height = 'inherit';
        (<any>document.body).style.height = (document.body.clientHeight - (<any>e).keyboardHeight - 7) + 'px';
        window.setTimeout(() => {
          document.activeElement.scrollIntoView();
        }, 100);
      });

      window.addEventListener('keyboardDidHide', e => {
        (<any>document.body).style.height = 'inherit';
      });

    }
  }

  public setupAppVersionInfoInRollbar() {
    if (this.platform.is('cordova')) {
      this.appVer.getVersionNumber()
        .then( value => {
          this.rollbar.configure({
            payload: {
              code_version: value
            }
          });
        });
    }
  }
}
