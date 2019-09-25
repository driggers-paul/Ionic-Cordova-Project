import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { ErrorFormat } from '../errors/errors.service';
import { Transphormer } from '../authentication/authentication.service';
import { Trainer } from '../trainer/trainer.service';
import { Platform } from '@ionic/angular';
import * as moment from 'moment';
import { Moment } from 'moment';
import { ListingParams } from '../trainer-transphormer/trainer-transphormer.service';

export interface TransphormerAnnouncement {
  announcement_id: number;
  transphormer_id: number;
  transphormer: Transphormer;
  read_at: Moment | string | null;
}

export interface Announcement {
  id: number;
  trainer_id: number;
  heading: string;
  announcements: string;
  created_at: string;
  sent: Moment;
  updated_at: string;
  trainer: Trainer;
  transphormers?: Transphormer[];
  transphormer_announcements?: TransphormerAnnouncement[];
  transphormer_announcement?: TransphormerAnnouncement;
  transphormer_announcements_count?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService extends BaseService {

  constructor(protected http: HttpClient, protected platform: Platform) {
    super(http, platform);
    AnnouncementsService.SET_PLATFORM(platform);
  }

  public transphormerAnnouncements(): Promise<Announcement[] | ErrorFormat> {
    return this.http.get<Announcement[]>(AnnouncementsService.Url('transphormer/announcements'), AnnouncementsService.BaseOptions())
      .toPromise()
      .then(announcements => announcements.map(announcement => this.setSentDate(announcement)))
      .then(announcements => announcements.map(announcement => this.setReadAtDate(announcement)))
      .catch(AnnouncementsService.HandleError);
  }

  public trainerAnnouncements(): Promise<Announcement[] | ErrorFormat> {
    return this.http.get<Announcement[]>(AnnouncementsService.Url('trainer/announcements'), AnnouncementsService.BaseOptions())
      .toPromise()
      .then(announcements => announcements.map(announcement => this.setSentDate(announcement)))
      .catch(AnnouncementsService.HandleError);
  }

  public createAnnouncements(heading: string, announcements: string, filters: ListingParams): Promise<Announcement | ErrorFormat> {
    const body = {
      heading,
      announcements,
      filters: filters
    };

    return this.http.post<any>(AnnouncementsService.Url('announcements'), body, BaseService.BaseOptions())
      .toPromise()
      .catch(AnnouncementsService.HandleError);
  }

  private setSentDate(announcement: Announcement) {
    announcement.sent = moment.utc(announcement.created_at).local();
    return announcement;
  }

  public markAnnouncementsAsRead(announcement_ids: number[]): Promise<Announcement[] | ErrorFormat> {
    return this.http.post<Announcement[]>(
      AnnouncementsService.Url('transphormer/announcements/mark-read'),
      {announcement_ids},
      AnnouncementsService.BaseOptions()
    )
      .toPromise()
      .then(announcements => announcements.map(announcement => this.setSentDate(announcement)))
      .then(announcements => announcements.map(announcement => this.setReadAtDate(announcement)))
      .catch(AnnouncementsService.HandleError);
  }

  private setReadAtDate(announcement: Announcement): Announcement {
    if (announcement.transphormer_announcement) {
      announcement.transphormer_announcement.read_at = !announcement.transphormer_announcement.read_at ? null
        : moment.utc(announcement.transphormer_announcement.read_at).local();
    }

    return announcement;
  }

  public unreadAnnouncements(): Promise<{ count: number } | ErrorFormat> {
    return this.http.get<{ count: number }>(
      AnnouncementsService.Url('transphormer/announcements/unread-count'),
      AnnouncementsService.BaseOptions()
    )
      .toPromise()
      .catch(AnnouncementsService.HandleError);
  }
}
