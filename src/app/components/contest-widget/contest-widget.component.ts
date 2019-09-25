import { Component, Input } from '@angular/core';
import { Moment } from 'moment';
import * as moment from 'moment';
import { CameraPhotos } from '../../services/camera/camera.service';

export interface ChallengeInfo {
  start: Moment;
  end: Moment;
  name: string;
  elapsed?: number;
  length?: number;
  week?: number;
}

@Component({
  selector: 'app-contest-widget',
  templateUrl: './contest-widget.component.html',
  styleUrls: ['./contest-widget.component.scss'],
})
export class ContestWidgetComponent {

  private _today?: Moment;
  private _challengeDates?: ChallengeInfo[];
  private _currentChallenge?: ChallengeInfo;

  @Input()
  public updates: CameraPhotos[] = [];

  @Input()
  set challengeDates(d: ChallengeInfo[]) {
    this._challengeDates = d;
  }

  get challengeDates(): ChallengeInfo[] {
    return this._challengeDates || [
      {
        start: moment('2019-04-23 00:00:00-05:00'),
        end: moment('2019-06-16 23:59:59-05:00'),
        name: '2019 Spring Sprint Challenge',
      },
    ];
  }

  @Input()
  set today(today: Moment) {
    this._currentChallenge = null;
    if (moment.isMoment(today)) {
      this._today = today;
      return;
    }
  }

  get today(): Moment {
    return this._today || moment();
  }

  constructor() {
    this.today = moment();
  }

  public get currentChallengeCompleted(): boolean {
    if (!this.currentChallenge || !this.transphormerChallengeStart) {
      return false;
    }
    return this.transphormerChallengeStart.clone().add(8, 'weeks').isBefore(this.today);
  }

  public get currentChallenge(): ChallengeInfo {
    if (!this._currentChallenge) {
      const toWeeksInAdvance = this.today.clone().add(14, 'days');
      for (const challenge of this.challengeDates) {
        if (
          challenge.start.isSameOrBefore(toWeeksInAdvance) &&
          challenge.end.clone().add(3, 'day').isSameOrAfter(this.today)
        ) {
          challenge.length = challenge.end.diff(challenge.start, 'days');
          this._currentChallenge = challenge;
          break;
        }
      }
    }
    return this._currentChallenge;
  }

  public get signupsAllowed(): boolean {
    return this.currentChallenge.start.clone().subtract(2, 'weeks').isSameOrBefore(this.today)
      && this.currentChallenge.start.isAfter(this.today);
  }

  public get challengeIsActive(): boolean {
    return this.currentChallenge.start.isSameOrBefore(this.today)
      && this.currentChallenge.end.isSameOrAfter(this.today);
  }

  public get transphormerChallengeStart(): Moment {
    if (!this.updates) {
      return null;
    }

    const two_weeks_before_date = this.currentChallenge.start.clone().subtract(2, 'weeks');
    const photos_two_weeks_before = this.updates.filter((item) => {
      return moment(new Date(item.created_at)).isBetween(two_weeks_before_date, this.currentChallenge.start, null, '[)');
    })
      .sort((a: CameraPhotos, b: CameraPhotos) => {
        return (a.created_at < b.created_at) ? -1 : 1;
      });
    if (photos_two_weeks_before.length > 0) {
      return moment(new Date(photos_two_weeks_before[0].created_at));
    }
    return null;
  }

  public get userIsSignedUpForCurrentChallenge(): boolean {
    if (!this.updates || !this.currentChallenge) {
      return false;
    }
    return !!this.transphormerChallengeStart;
  }

  public get currentChallengeDay(): string {
    return (this.today.diff(this.transphormerChallengeStart, 'days') + 1).toString();
  }

  public get currentChallengeWeek(): string {
    return (this.today.diff(this.transphormerChallengeStart, 'weeks') + 1).toString();
  }
}
