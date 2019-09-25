import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base/base.service';
import { ErrorFormat } from '../errors/errors.service';
import { Platform } from '@ionic/angular';

export interface LiveToken {
  secure_token: string;
  timestamp: number;
  client_id: number;
  account_id: number;
}

type VideoTypes = 'video';

export interface VideoContent {
  type: VideoTypes;
  data: {
    id: string;
    draft: boolean;
    views: number;
    likes: {
      total: number;
    };
    comments: {
      total: number;
    };
    caption: string;
    description: string;
    duration: number;
    eventId: number;
    createdAt: string;
    publishAt: string;
    tags: any[];
    thumbnailUrl: string;
    thumbnailUrlSmall: string;
    m3u8: string;
  };
  event_info: {
    id: number;
    logo: {
      url: string | null | undefined;
      thumbnailUrl: string | null | undefined;
      smallUrl: string | null | undefined;
    };
    description: string | null;
    fullName: string;
    shortName: string | null;
    ownerAccountId: number;
    viewCount: number;
    createdAt: string;
    startTime: string;
    endTime: string;
    isLive: boolean
  };
}

export interface Videos {
  unavailable?: boolean;
  videos: VideoContent[] | null;
  live_videos: VideoContent[] | null;
}

@Injectable({
  providedIn: 'root'
})
export class LivestreamingService extends BaseService {
  constructor(protected http: HttpClient, protected platform: Platform) {
    super(http, platform);
    LivestreamingService.SET_PLATFORM(platform);
  }

  public getEvent(streamId: string): Promise<any> {
    return this.http
      .get(
        LivestreamingService.Url(`live-stream/events/${streamId}`),
        LivestreamingService.BaseOptions(true)
      )
      .toPromise()
      .catch(LivestreamingService.HandleError);
  }

  public getEventVideos(streamId: string): Promise<any> {
    return this.http
      .get(
        LivestreamingService.Url(`live-stream/events/${streamId}/videos`),
        LivestreamingService.BaseOptions(true)
      )
      .toPromise()
      .catch(LivestreamingService.HandleError);
  }

  public getlivestreamVideos(): Promise<Videos | ErrorFormat> {
    return this.http
      .get<Videos>(
        LivestreamingService.Url('videos'),
        LivestreamingService.BaseOptions(true)
      )
      .toPromise()
      .catch(LivestreamingService.HandleError);
  }

  public getlivestreamToken(): Promise<LiveToken | ErrorFormat> {
    return this.http
      .get<LiveToken>(
        LivestreamingService.Url('video/token'),
        LivestreamingService.BaseOptions()
      )
      .toPromise()
      .catch(LivestreamingService.HandleError);
  }
}
