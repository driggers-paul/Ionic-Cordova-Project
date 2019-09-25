import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestWidgetComponent } from './contest-widget.component';
import { CameraPhotos } from '../../services/camera/camera.service';

import * as moment from 'moment';

describe('ContestWidgetComponent', () => {
  let component: ContestWidgetComponent;
  let fixture: ComponentFixture<ContestWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestWidgetComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(ContestWidgetComponent);
    component = fixture.componentInstance;
    component.challengeDates = [
      {
        start: moment('2019-04-22 00:00:00-06:00'),
        end: moment('2019-06-16 23:59:59-06:00'),
        name: '2019 Spring Sprint Challenge',
      },
    ];
  }));

  it('should recognize current challenge', () => {
    component.today = moment('2019-04-08 12:00:00-06:00');
    fixture.detectChanges();
    expect(component.currentChallenge).toBeDefined('Day of pre-start');
    component.today = moment('2019-04-07 12:00:00-06:00');
    fixture.detectChanges();
    expect(component.currentChallenge).toBeNull('Day before pre-start');
    component.today = moment('2019-04-23 12:00:00-06:00');
    fixture.detectChanges();
    expect(component.currentChallenge).toBeTruthy('Day after start');
    component.today = moment('2019-06-16 12:00:00-06:00');
    fixture.detectChanges();
    expect(component.currentChallenge).toBeTruthy('Day of end');
    component.today = moment('2019-06-20 12:00:00-06:00');
    fixture.detectChanges();
    expect(component.currentChallenge).toBeNull('Day after end');
  });

  it('should handle transphormer with pending contest and has not signed up', () => {
    component.today = moment('2019-04-08 12:00:00-06:00');
    component.updates = <CameraPhotos[]>[];
    fixture.detectChanges();
    expect(component.userIsSignedUpForCurrentChallenge).toBeFalsy();

    component.updates = <CameraPhotos[]>[{created_at: '2019-04-05 12:00:00-06:00'}];
    fixture.detectChanges();
    expect(component.userIsSignedUpForCurrentChallenge).toBeFalsy();
    expect(component.signupsAllowed).toBeTruthy();
    expect(component.challengeIsActive).toBeFalsy();
    expect(component.currentChallengeCompleted).toBeFalsy();
    const e: HTMLElement = fixture.nativeElement;
    expect(e.textContent).toContain('Submit pictures by');
  });

  it('should handle transphormer with pending contest and has signed up', () => {
    component.today = moment('2019-04-08 12:00:00-06:00');
    component.updates = <CameraPhotos[]>[{ created_at: '2019-04-08 12:00:00-06:00' }];
    fixture.detectChanges();
    expect(component.userIsSignedUpForCurrentChallenge).toBeTruthy();
    expect(component.transphormerChallengeStart).toBeDefined();
    expect(component.currentChallengeCompleted).toBeFalsy();
    expect(component.currentChallengeWeek).toBe('1');
    expect(component.currentChallengeDay).toBe('1');
    const e: HTMLElement = fixture.nativeElement;
    expect(e.textContent).toContain('Week 1');
  });

  it('should handle transphormer with active contest and has signed up', () => {
    component.today = moment('2019-04-30 12:00:00-06:00');
    component.updates = <CameraPhotos[]>[{ created_at: '2019-04-08 12:00:00-06:00' }];
    fixture.detectChanges();
    expect(component.userIsSignedUpForCurrentChallenge).toBeTruthy();
    expect(component.transphormerChallengeStart).toBeDefined();
    expect(component.signupsAllowed).toBeFalsy();
    expect(component.challengeIsActive).toBeTruthy();
    expect(component.currentChallengeCompleted).toBeFalsy();
    expect(component.currentChallengeWeek).toBe('4');
    expect(component.currentChallengeDay).toBe('23');
    const e: HTMLElement = fixture.nativeElement;
    expect(e.textContent).toContain('Week');
  });

  it('should handle transphormer with active contest and has not signed up', () => {
    component.today = moment('2019-04-30 12:00:00-06:00');
    component.updates = <CameraPhotos[]>[{ created_at: '2019-04-05 12:00:00-06:00' }];
    fixture.detectChanges();
    expect(component.userIsSignedUpForCurrentChallenge).toBeFalsy();
    expect(component.transphormerChallengeStart).toBeNull();
    expect(component.currentChallengeCompleted).toBeFalsy();
    const e: HTMLElement = fixture.nativeElement;
    expect(e.textContent).toBeFalsy('No output expected');
  });

  it('should handle completion', () => {
    component.today = moment('2019-06-05 12:00:00-06:00');
    component.updates = <CameraPhotos[]>[{ created_at: '2019-04-09 12:00:00-06:00' }];
    fixture.detectChanges();
    expect(component.userIsSignedUpForCurrentChallenge).toBeTruthy('signed up for challenge');
    expect(component.transphormerChallengeStart).toBeDefined('start challenge date');
    expect(component.currentChallengeCompleted).toBeTruthy('challenge is completed');
    const e: HTMLElement = fixture.nativeElement;
    expect(e.textContent).toContain('Completed!');
  });

  it('should handle new Transphormer with no updates', () => {
    component.today = moment('2019-04-30 12:00:00-06:00');
    component.updates = undefined;
    fixture.detectChanges();
    expect(component.userIsSignedUpForCurrentChallenge).toBeFalsy();
    expect(component.transphormerChallengeStart).toBeNull();
    expect(component.currentChallengeCompleted).toBeFalsy();
    const e: HTMLElement = fixture.nativeElement;
    expect(e.textContent).toBeFalsy('No output expected');
  });

});
