import { Component, ElementRef, EventEmitter, Inject, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import videojs from 'video.js';
import mux from 'videojs-mux';
import { RollbarService } from '../../rollbar';
import * as Rollbar from 'rollbar';
import { environment } from '../../../environments/environment';
import { Video, VideosService } from '../../services/videos/videos.service';
import { LiveStreamError } from '../../pages/live-stream/live-stream.page';
import { Observable } from 'rxjs';
import { Transphormer } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnDestroy, OnInit {
  private eventsSubscription: any;
  @Input() events: Observable<string>;
  @Output() paused = new EventEmitter<boolean>();
  @Output() ended = new EventEmitter<boolean>();
  @Output() playing = new EventEmitter<boolean>();
  @Output() error = new EventEmitter<boolean>();
  @Output() playbackProblem = new EventEmitter<boolean>();

  @ViewChild('videoElement') public videoElement: ElementRef;
  private player: any;
  public videoPlayer: any;
  private _videoUrl: any;
  public mux: any;
  private _video: Video;
  public hasLiveStreamUrl = false;
  private _live = false;
  private notifiedPlaying = false;

  constructor(
    @Inject(RollbarService) private rollbar: Rollbar,
    private videoService: VideosService,
  ) {
    this.videoPlayer = videojs;
    this.mux = mux;
  }

  ngOnInit() {
    this.setupEventSubscriber();
  }

  private setupEventSubscriber() {
    if (!this.events) {
      return;
    }

    this.eventsSubscription = this.events.subscribe((action: string) => {
      if (action === 'pause') {
        this.player.pause();
      }
    });
  }

  public initPlayer() {
    this.player = this.videoPlayer(this.videoElement.nativeElement, {
      controls: true,
      autoplay: true,
      playsinline: true,
      nativeControlsForTouch: false,
      preload: 'auto',
      liveui: this._live,
      defaultMuted: false,
      plugins: {
        mux: {
          data: {
            env_key: environment.mux_data_key,
            player_name: 'VideoJS Player',
            player_init_time: Date.now(),
            video_title: this._video.title,
            video_id: this._video.id,
            video_stream_type: this._live ? 'live' : 'on-demand',
            viewer_user_id: this.transphormer.id,
          }
        }
      }
    });
    this.player.on('play', () => {
      this.playing.emit(true);
      this.notifyStart();

    });
    this.player.on('pause', () => {
      this.paused.emit(true);
      this.notifyStop();
    });
    this.player.on('ended', () => {
      this.ended.emit(true);
      this.notifyStop();
    });
    this.player.on('error', () => {
      const error = this.player.error();
      this.rollbar.error('Player error', error);
      this.error.emit(error);
    });
    this.player.tech_.on('retryplaylist', () => {
      this.setupPlaybackUrl();
      this.playbackProblem.emit();
    });
    this.player.tech_.on('playliststuck', () => {
      this.setupPlaybackUrl();
      this.playbackProblem.emit();
    });
  }

  public notifyStart() {
    if (!this._live || this.notifiedPlaying) {
      return;
    }
    this.notifiedPlaying = true;
    this.videoService.startPlaying(this._video.id);
  }

  public notifyStop() {
    if (!this._live || !this.notifiedPlaying) {
      return;
    }
    this.notifiedPlaying = false;
    if (!this._video || !this._video.id) {
      return;
    }
    this.videoService.stopPlaying(this._video.id);
  }

  public get transphormer(): Transphormer {
    return JSON.parse(window.localStorage.getItem('transphormer'));
  }

  ngOnDestroy() {
    if (this.eventsSubscription) {
      this.eventsSubscription.unsubscribe();
    }

    if (this.player) {
      if (!this.player.paused()) {
        this.player.pause();
      }
      this.player.dispose();
    }

    this.player = null;

    this.notifyStop();
  }

  @Input()
  set video(video: Video) {
    this._video = video;
    if (!video) {
      this.ngOnDestroy();
      return;
    }

    this.initPlayer();
    this.setupPlaybackUrl();
  }

  private setupPlaybackUrl() {
    this.getPlaybackUrl()
      .then((videoUrl) => {
        this.videoUrl = videoUrl;
      });
  }

  public getPlaybackUrl() {
    return this.videoService
      .getPlaybackUrl(this._video.id)
      .catch(() => {
        throw new Error(LiveStreamError.UNABLE_CONNECT);
      });
  }

  @Input()
  set live(value) {
    this._live = !!value;
  }

  @Input()
  set videoUrl(value) {
    if (!value || !this.player) {
      return;
    }

    this.hasLiveStreamUrl = true;
    this._videoUrl = value;
    this.setupVideoPlayer();
  }

  public setupVideoPlayer() {
    this.player.src({
      src: this._videoUrl,
      type: 'application/x-mpegURL',
    });
  }

}
