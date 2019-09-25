import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { WorkoutSession } from '../workouts/workouts.service';
import { ErrorFormat } from '../errors/errors.service';
import { Platform } from '@ionic/angular';
import { CameraPhotos } from '../camera/camera.service';

export interface DashboardWorkoutSessionInfo extends WorkoutSession {
  total_days: number;
  last_two_month_updates: CameraPhotos[];
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseService {

  constructor(protected http: HttpClient, protected platform: Platform) {
    super(http, platform);
    DashboardService.SET_PLATFORM(platform);
  }

  public dashboard(): Promise<DashboardWorkoutSessionInfo | ErrorFormat> {
    return this.http.get<DashboardWorkoutSessionInfo>(DashboardService.Url('dashboard'),
      DashboardService.BaseOptions(true, true))
      .toPromise()
      .catch(DashboardService.HandleError);
  }
}
