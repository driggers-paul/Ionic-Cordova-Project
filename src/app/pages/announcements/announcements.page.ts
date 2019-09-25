import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ErrorsService } from '../../services/errors/errors.service';
import { LoadingController, ToastController, ModalController } from '@ionic/angular';
import {
  Announcement,
  AnnouncementsService,
} from '../../services/announcements/announcements.service';
import { GlobalEmitterService, GlobalEvents } from '../../services/global-emitter/global-emitter.service';
import { AnalyticsService } from '../../services/analytics/analytics.service';
import { AnalyticEvents } from './../../services/analytics/analytic-events.enum';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.page.html',
  styleUrls: ['./announcements.page.scss'],
})

export class AnnouncementsPage implements OnInit, AfterViewInit {
  public announcements: Announcement[] = [];

  constructor(
    public errorService: ErrorsService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private announcementService: AnnouncementsService,
    public globalEmitter: GlobalEmitterService,
    private analyticService: AnalyticsService,
    private modalCtrl: ModalController
  ) {
  }

  ngOnInit() {
    this.getAnnouncements();
  }

  ngAfterViewInit() {
    // this.modalCtrl.dismiss({ 'AnnounceModal Dismissed': true });
  }

  cancelModal() {
    // this.modalCtrl.dismiss({ 'AnnounceModal Dismissed': true });
    // this.modalCtrl.getTop().then((value) => {
    //   console.log("Top Modal = ", value);
    //   console.log("This.modalController = ", this.modalCtrl);
    // }).catch((error) => {
    //   console.log("Top Error = ", error);
    // });
    this.modalCtrl.dismiss(null, undefined);
  }

  private async getAnnouncements() {
    const loader = await this.loadingCtrl.create({
      message: 'Please wait ...',
    });
    await loader.present();

    try {
      this.announcements = <Announcement[]>await this.announcementService.transphormerAnnouncements();
      this.markAnnouncementsAsRead();
    } catch (e) {
      const toast = await this.toastCtrl.create({
        message: this.errorService.firstError(e),
        duration: 3000,
      });
      await toast.present();
    } finally {
      loader.dismiss();
    }
  }

  public async markAnnouncementsAsRead() {
    this.analyticService.logEvent(AnalyticEvents.ViewingAnnouncements, {});
    const unreadAnnouncementIds = this.announcements.filter(announcement => !announcement.transphormer_announcement.read_at)
      .map(announcement => announcement.id);

    if (unreadAnnouncementIds.length > 0) {
      this.announcements = <Announcement[]>await this.announcementService.markAnnouncementsAsRead(unreadAnnouncementIds);
      this.globalEmitter.emit(GlobalEvents.AnnouncementRead);
    }
  }
}
