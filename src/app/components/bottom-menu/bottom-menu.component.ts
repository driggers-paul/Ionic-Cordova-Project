import { Component, Input, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Transphormer } from '../../services/authentication/authentication.service';
import { GlobalEmitterService, GlobalEvents } from '../../services/global-emitter/global-emitter.service';
import { MessageCount, MessageService } from '../../services/message/message.service';
import { SideMenuHandlerEmitter } from '../side-menu/side-menu-handler';

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.scss'],
})
export class BottomMenuComponent implements OnInit {

  @Input()
  public user: Transphormer;

  public advisorUnreadCount: number | string = 0;
  public transphormerHasMessages = false;
  public advisorHasMessages = false;

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private globalEmitter: GlobalEmitterService,
    private messageService: MessageService
  ) {
    this.globalEmitter.listen(GlobalEvents.SessionInitialized).subscribe(() => this.checkUnreadNotification());
    this.globalEmitter.listen(GlobalEvents.TransphormerMessageRead).subscribe(() => this.transphormerHasMessages = false);
    this.globalEmitter.listen(GlobalEvents.NewTransphormerMessages).subscribe(() => this.checkUnreadNotification());
    this.globalEmitter.listen(GlobalEvents.NewAdvisorMessages).subscribe(() => this.checkUnreadNotification());
    this.globalEmitter.listen(GlobalEvents.AdvisorMessageRead).subscribe(() => this.checkUnreadNotification());
  }

  public ngOnInit() {
    SideMenuHandlerEmitter.getEmitter().emit('navigating');
    this.checkUnreadNotification();
  }

  public goToDashboard() {
    SideMenuHandlerEmitter.getEmitter().emit('navigating');
    this.navCtrl.navigateRoot('dashboard');
  }

  public goToWorkouts() {
    SideMenuHandlerEmitter.getEmitter().emit('navigating');
    this.navCtrl.navigateForward('workouts');
  }

  public goToNutrition() {
    SideMenuHandlerEmitter.getEmitter().emit('navigating');
    if (this.user.likely_to_do === 'Calorie / Macro counting' && this.user.is_paid_user) {
      this.navCtrl.navigateForward('macro');
    } else {
      this.navCtrl.navigateForward('nutrition');
    }
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
            this.navCtrl.navigateRoot('subscription');
          }
        }
      ]
    });
    return alert.present();
  }

  public goToMessages() {
    if (!this.user.is_paid_user) {
      this.premiumAlert('Advisor messaging');
      return false;
    }
    SideMenuHandlerEmitter.getEmitter().emit('navigating');
    if (this.user.is_trainer) {
      this.navCtrl.navigateForward('trainer-messages');
    } else {
      this.navCtrl.navigateForward('messages');
    }
  }

  public async checkUnreadNotification() {
    const count = <MessageCount>await this.messageService.unreadMessageCount();
    this.transphormerHasMessages = count.unread_transphormer_messages > 0;
    this.advisorHasMessages = count.unread_advisor_messages > 0;
    this.advisorUnreadCount = count.unread_advisor_messages >= 100 ? '99+' : count.unread_advisor_messages;
  }
}
