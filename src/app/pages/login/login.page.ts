import { AfterViewChecked, Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorFormat, ErrorsService } from '../../services/errors/errors.service';
import {
  LoadingController,
  NavController, Platform,
} from '@ionic/angular';
import {
  AuthenticationService,
  Transphormer,
} from '../../services/authentication/authentication.service';
import { SideMenuHandlerEmitter } from '../../components/side-menu/side-menu-handler';
import { OnboardingService } from '../../services/onboarding/onboarding.service';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { CanLeaveRoute } from '../../guards/android-back-button.guard';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ToastService } from '../../services/toast-service/toast-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, AfterViewChecked, CanLeaveRoute {
  public form: FormGroup;
  public canLeaveAndroidBack = true;

  constructor(
    public errorHandler: ErrorsService,
    public navCtrl: NavController,
    private authenticationService: AuthenticationService,
    private toastSvc: ToastService,
    private platform: Platform,
    private loadingCtrl: LoadingController,
    protected onboardingService: OnboardingService,
    private firebase: FirebaseService,
    private statusBar: StatusBar
  ) {
  }

  ngAfterViewChecked() {
    if (this.platform.is('cordova')) {
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#ffffff');
    }
  }

  ngOnInit() {
    this.setupForm();
    SideMenuHandlerEmitter.toggleAllowMenu(false);
  }

  /**
   * Setup form
   */
  private setupForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public async login() {
    this.navCtrl.navigateRoot('dashboard');
  }

  /**
   *
   * Finds the logged in user information
   *
   * @param handleCatch
   */
  private async getTransphormer(
    handleCatch: boolean
  ): Promise<Transphormer | ErrorFormat> {
    try {
      return await this.onboardingService.fetchOnBoard();
    } catch (e) {
      return Promise.reject(e);
    }
  }

  @HostListener('document:backbutton', ['$event'])
  public backButtonHandler($event) {
    $event.preventDefault();
    this.canLeaveAndroidBack = false;
  }
}
