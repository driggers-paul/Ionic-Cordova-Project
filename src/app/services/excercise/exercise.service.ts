import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Exercise } from '../workouts/workouts.service';
import { ErrorFormat } from '../errors/errors.service';
import { Platform } from '@ionic/angular';

export interface Tag {
  name: string;
  exercise_id: number;
}

@Injectable({
  providedIn: 'root'
})
export class ExerciseService extends BaseService {

  constructor(protected http: HttpClient, protected platform: Platform) {
    super(http, platform);
    ExerciseService.SET_PLATFORM(platform);
  }

  public getExercise(exerciseId: number): Promise<Exercise | ErrorFormat> {
    return this.http.get<Exercise>(ExerciseService.Url(`exercises/${exerciseId}`), ExerciseService.BaseOptions())
      .toPromise()
      .catch(ExerciseService.HandleError);
  }
}
