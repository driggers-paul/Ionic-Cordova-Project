import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base/base.service';
import { ErrorFormat } from '../errors/errors.service';
import { Platform } from '@ionic/angular';
import { RequestCachingService } from '../interceptors/caching/request-caching.service';

export interface PlaybackToken {
  playbackUrl: string;
}

export interface Video {
  id: number;
  total_views: number;
  description: string;
  live_status: string;
  duration: string;
  length: number;
  created_at: string;
  publish_date?: string;
  poster: string;
  thumbnail: string;
  signed_url: string;
  title: string;
}

export interface Videos {
  videos?: Video[];
  active_stream?: Video;
}


@Injectable({
  providedIn: 'root'
})
export class VideosService extends BaseService {

  constructor(protected http: HttpClient,
              protected platform: Platform,
              protected cache: RequestCachingService) {
    super(http, platform);
    VideosService.SET_PLATFORM(platform);
  }

  public getVideo(videoId: number): Promise<any> {
    return this.http
      .get(
        VideosService.Url(`vod/${videoId}`),
        VideosService.BaseOptions(true, true, 900)
      )
      .toPromise()
      .catch(VideosService.HandleError);
  }

  public getLatestVideo(): Promise<Video | ErrorFormat> {
    return this
      .getVideos(1, false)
      .then((response: Videos) => {
        if (response.active_stream) {
          return response.active_stream;
        }

        return response.videos[0] || null;
      });
  }

  public clearVideosCache() {
    const url = VideosService.Url('vods') + '?limit=100';
    this.cache.clearKey(url, 'GET');
  }

  public getVideos(limit = 100, useCache = true): Promise<Videos | ErrorFormat> {
    const url = VideosService.Url('vods') + '?limit=100';
    return this.http
      .get<Videos>(
        url,
        {
          ...VideosService.BaseOptions(true, useCache, 900),
        }
      )
      .toPromise()
      .catch(VideosService.HandleError);
  }

  public getPlaybackUrl(streamId: number): Promise<string | ErrorFormat> {
    return this.http
      .post<string>(
        VideosService.Url(`vod/${streamId}/playback-url`),
        {},
        VideosService.BaseOptions()
      )
      .toPromise()
      .catch(VideosService.HandleError);
  }

  public startPlaying(streamId: number): Promise<string | ErrorFormat> {
    return this.http
      .post<string>(
        VideosService.Url(`vod/${streamId}/watching`),
        {},
        VideosService.BaseOptions()
      )
      .toPromise()
      .catch(VideosService.HandleError);
  }

  public stopPlaying(streamId: number): Promise<string | ErrorFormat> {
    return this.http
      .post<string>(
        VideosService.Url(`vod/${streamId}/not-watching`),
        {},
        VideosService.BaseOptions()
      )
      .toPromise()
      .catch(VideosService.HandleError);
  }
}
