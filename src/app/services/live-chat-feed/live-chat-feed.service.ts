import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { ErrorFormat } from '../errors/errors.service';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';

export interface FeedItem {
  id: number;
  text: string;
  author: string;
  special: boolean;
  sticky: boolean;
  approved_at: string;
  created_at: string;
  updated_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class LiveChatFeedService extends BaseService {

  constructor(protected http: HttpClient, protected platform: Platform) {
    super(http, platform);

    LiveChatFeedService.SET_PLATFORM(platform);
  }

  public getAllMessagesForStream(streamId: Number) {
    return this.http
      .get<FeedItem[]>(LiveChatFeedService.Url(`live-stream/events/${streamId}/items` ), LiveChatFeedService.BaseOptions())
      .toPromise()
      .catch(LiveChatFeedService.HandleError);
  }

  getNewItemsForStream(streamId: number, lastTimestamp: string): Promise<FeedItem[] | ErrorFormat> {
    const timestamp = escape(lastTimestamp);
    return this.http
      .get<FeedItem[]>(LiveChatFeedService.Url(`live-stream/events/${streamId}/items?since=${timestamp}`), LiveChatFeedService.BaseOptions())
      .toPromise()
      .catch(LiveChatFeedService.HandleError);
  }

  public sendMessage(streamId: number, message: string) {
    const data = {
      stream_id: streamId,
      text: message,
    };
    return this.http
      .post<FeedItem>(LiveChatFeedService.Url(`live-stream/events/${streamId}/items`), data, LiveChatFeedService.BaseOptions())
      .toPromise()
      .catch(LiveChatFeedService.HandleError);
  }
}
