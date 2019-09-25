import { Component, ElementRef, OnInit } from '@angular/core';
import {
  NavController,
  MenuController,
  LoadingController,
  Platform, AlertController, ModalController
} from '@ionic/angular';
import { SideMenuHandlerEmitter } from './side-menu-handler';
import {
  AuthenticationService,
  Transphormer
} from '../../services/authentication/authentication.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { RequestCachingService } from '../../services/interceptors/caching/request-caching.service';
import { GlobalEmitterService, GlobalEvents } from '../../services/global-emitter/global-emitter.service';
import { MessageCount, MessageService } from '../../services/message/message.service';
import { AnnouncementsService } from '../../services/announcements/announcements.service';
// import { CameraPage } from '../../pages/camera/camera.page';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  public showMenu = true;
  public user: Transphormer;

  public transphormerHasMessages = false;
  public advisorHasMessages = false;
  public advisorMessageCount: number | string = 0;
  public transphormerHasAnnouncements = 0;
  public currentModal: any = null;

  constructor(
    public navCtrl: NavController,
    private menuCtrl: MenuController,
    private authenticationService: AuthenticationService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private platform: Platform,
    private localNotifications: LocalNotifications,
    private cachingService: RequestCachingService,
    private element: ElementRef<HTMLElement>,
    private globalEmitter: GlobalEmitterService,
    private messageService: MessageService,
    public announcementService: AnnouncementsService,
    public modalCtrl: ModalController
  ) {
  }

  ngOnInit() {
    SideMenuHandlerEmitter.getEmitter().subscribe(event => {
      if (event === 'open') {
        this.open();
      }

      if (event === 'close') {
        this.close();
      }

      if (event === 'allow-menu') {
        this.showMenu = true;
      }

      if (event === 'disallow-menu') {
        this.showMenu = false;
      }
    });
    this.updateNavigationStatus();

    this.globalEmitter.listen(GlobalEvents.SessionInitialized).subscribe(() => {
      this.checkTransphormerUnreadMessages();
      this.checkTransphormerUnreadAnnouncements();
    });
    this.globalEmitter.listen(GlobalEvents.NewTransphormerMessages).subscribe(() => this.checkTransphormerUnreadMessages());
    this.globalEmitter.listen(GlobalEvents.TransphormerMessageRead).subscribe(() => this.transphormerHasMessages = false);
    this.globalEmitter.listen(GlobalEvents.AdvisorMessageRead).subscribe(() => this.checkTransphormerUnreadMessages());
    this.globalEmitter.listen(GlobalEvents.NewAdvisorMessages).subscribe(() => this.checkTransphormerUnreadMessages());
    this.globalEmitter.listen(GlobalEvents.AnnouncementRead).subscribe(() => this.transphormerHasAnnouncements = 0);
    this.globalEmitter.listen(GlobalEvents.NewAnnouncement).subscribe(() => this.checkTransphormerUnreadAnnouncements());
  }

  public async premiumAlert(feature: string) {
    const alert = await this.alertCtrl.create({
      header: 'Go Premium?',
      subHeader: `${feature} is available only for Premium subscribers.`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'danger',
        },
        {
          text: 'Go Premium',
          handler: () => {
            this.goTo('subscription');
          }
        }
      ]
    });
    return alert.present();
  }

  public goToNutrition() {
    const user = this.getUser();
    if (user.likely_to_do === 'Calorie / Macro counting' && user.is_paid_user) {
      this.goTo('macro');
    } else {
      this.goTo('nutrition');
    }
  }

  public goToMessages() {
    const user = this.getUser();
    if (!user.is_paid_user) {
      this.premiumAlert('Advisor messaging');
      return false;
    }

    this.goTo('messages');
  }

  public getUser(): Transphormer {
    return JSON.parse(window.localStorage.getItem('transphormer'));
  }

  public goToSubscription() {
    const user = this.getUser();

    if (this.platform.is('cordova') && this.platform.is('ios')) {
      if (!user.iphone_subscription) {
        this.goTo('subscription');
      } else {
        this.goTo('thanks');
      }
    } else if (this.platform.is('cordova') && this.platform.is('android')) {
      if (!user.android_subscription) {
        this.goTo('subscription');
      } else {
        this.goTo('thanks');
      }
    } else {
      this.goTo('subscription');
    }
  }

  public goToStreaming() {
    const user = this.getUser();
    if (!user.is_paid_user) {
      this.premiumAlert('Live streaming');
      return false;
    }
    this.goTo('live-streaming');
  }

  protected open() {
    this.menuCtrl.open();
  }

  protected close(): Promise<any> {
    return this.menuCtrl.close();
  }

  public async logout() {
    const loader = await this.loadingCtrl.create({
      message: 'Please wait ...'
    });
    await loader.present();
    try {
      await this.authenticationService.logout();
    } catch (e) {
      console.log(e);
    } finally {
      this.authenticationService.removeTokens();
      this.authenticationService.removeTransphormer();
      window.localStorage.clear();
      if (this.platform.is('cordova')) {
        this.localNotifications.clearAll();
      }
      this.cachingService.clearAll();
      await this.close();
      await loader.dismiss();
      this.navCtrl.navigateRoot('');
    }
  }

  public get isTrainer(): boolean {
    const user = <Transphormer>(
      JSON.parse(window.localStorage.getItem('transphormer'))
    );

    if (user) {
      return user.is_trainer && user.is_paid_user;
    }

    return false;
  }

  public goTo(url) {
    // if (url == 'camera') {
    //   this.showModalPage();
    // } else {
    console.log("Navigation URL = ", url);
      this.navCtrl.navigateRoot(url);
      this.close();
    // }
  }

  // public async showModalPage() {
  //   const modal =await this.modalCtrl.create({
  //     component: CameraPage,
  //     componentProps: {
  //       'hideExtFields': true,
  //       'retOnComplete': 'dashboard'
  //     }
  //   });

  //   modal.onDidDismiss().then((data) => {
  //     console.log("Returned Modal Value = ", data);
  //   });
    
    
  //   return await modal.present()
  // }

  public get isMobile(): boolean {
    return this.platform.is('cordova');
  }

  public updateNavigationStatus() {
    this.element.nativeElement.addEventListener('click', (e) => {
      if ((<HTMLElement>e.target).matches('ion-button')) {
        SideMenuHandlerEmitter.getEmitter().emit('navigating');
      }
    });
  }

  public get showMyFood(): boolean {
    const user = this.getUser();
    if (!user) {
      return false;
    }

    return user.likely_to_do === 'Calorie / Macro counting' && user.is_paid_user;
  }

  public async checkTransphormerUnreadMessages() {
    const count = <MessageCount>await this.messageService.unreadMessageCount();
    this.transphormerHasMessages = count.unread_transphormer_messages > 0;
    this.advisorHasMessages = count.unread_advisor_messages > 0;
    this.advisorMessageCount = count.unread_advisor_messages > 100 ? '99+' : count.unread_advisor_messages;
  }

  public async checkTransphormerUnreadAnnouncements() {
    const count = <{count: number}>await this.announcementService.unreadAnnouncements();
    this.transphormerHasAnnouncements = +(count.count);
  }
}
