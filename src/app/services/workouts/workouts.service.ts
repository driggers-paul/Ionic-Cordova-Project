import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { ErrorFormat } from '../errors/errors.service';
import { Tag } from '../excercise/exercise.service';
import { Platform } from '@ionic/angular';
import { Moment } from 'moment';
import * as moment from 'moment';

export interface WorkoutSession {
  id: number;
  workout_id: number;
  transphormer_id: number;
  completed: boolean;
  workout_data: WorkoutExerciseData[] | null;
  workout: Workout;
  notes: WorkoutNote | null;
  workout_date: string;
  session_exercises: WorkoutSessionExercise[];
}

export interface WorkoutExerciseData {
  exercise_group_id: number;
  exercise_id: number;
  workout_session_id: number;
  workout_info: WorkoutInfo[] | null;
  logged_on: string | null;
  completed_on: string | null;
}

export interface WorkoutInfo {
  reps?: number | null;
  weight: number | null;
}

export interface Workout {
  id: number;
  training_id: number;
  workout_date: string;
  is_rest_day?: number;
  name?: string;
  week: number;
  day: number;
  exercise_groups: WorkoutGroup[];
  training?: Training;
}

export interface WorkoutGroup {
  id: number;
  workout_id: number;
  exercise_group_template_id?: number;
  name?: string;
  instructions?: string;
  group_time?: number;
  total_sets?: number;
  repeat?: number;
  order_number: number;
  created_at: string;
  updated_at: string;
  exercises: WorkoutExercise[];
}


export interface Training {
  id: number;
  program_type: string;
  training_level: string;
  subscription_type: string;
  description?: string;
  start_date: string;
  end_date: string;
  name: string;
}

export interface Exercise {
  id: number;
  name: string;
  modification_notes: string;
  video: string;
  video_url: string;
  link?: string;
  description: string;
  isEditing?: boolean;
  tags?: Tag[];
  alternate_exercises?: Exercise[];
}

export interface WorkoutExercise {
  id: number;
  exercise_group_id: number;
  exercise_group_template_exercise_id?: number;
  exercise_id: number;
  total_sets: null;
  record_type?: number;
  instructions?: string;
  order_number: number;
  created_at: string;
  updated_at: string;
  time_period: number;
  name: string;
  exercise: Exercise;
  last_exercise_records?: string;
}

export interface WorkoutExercisePivot extends Exercise {
  pivot: {
    instructions: string;
    record_type: ExerciseTypes;
    id: number;
    total_reps: number | null;
  };
}

export interface WorkoutNote {
  id: number;
  transphormer_id: number;
  workout_session_id: number;
  notes: string;
}

export type ExerciseTypes = 'Weight' | 'Weight and Reps' | 'Nothing';

export interface WorkoutSessionExercise {
  id: number;
  workout_session_id: number;
  exercise_id: number;
  exercise_group_id: number;
  set: number;
  reps: number | null;
  weight: number | null;
}

export interface WorkoutSessionExerciseHistory {
  workout_date: string | Moment;
  workout_session_exercises: WorkoutSessionExercise[];
}

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService extends BaseService {

  constructor(protected http: HttpClient, protected platform: Platform) {
    super(http, platform);
  }

  /**
   * Fetches workout data for the day
   *
   * @param date
   */
  public fetchWorkout(date: Date): Promise<WorkoutSession | ErrorFormat> {
    const workoutDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    return this.http.get<WorkoutSession>(WorkoutsService.Url(`workouts/${workoutDate}`), WorkoutsService.BaseOptions())
      .toPromise()
      .catch(WorkoutsService.HandleError);
  }

  public fetchWorkoutSummary(_from: Date, _to: Date): Promise<WorkoutSession | ErrorFormat> {
    const from = `${_from.getFullYear()}-${_from.getMonth() + 1}-${_from.getDate()}`;
    const toDate = `${_to.getFullYear()}-${_to.getMonth() + 1}-${_to.getDate()}`;
    const opts = WorkoutsService.BaseOptions(true, true, 86400);
    opts.params = {from, 'to': toDate};
    return this.http.get<WorkoutSession>(WorkoutsService.Url(`workouts`), opts)
      .toPromise()
      .catch(WorkoutsService.HandleError);
  }

  /**
   * Updates workout data
   *
   * @param workoutSession
   */
  public updateWorkoutExercise(workoutSession: WorkoutSession): Promise<WorkoutSession | ErrorFormat> {
    const {id, workout_data, completed} = workoutSession;
    const payload = {
      data: workout_data,
      completed: completed
    };
    return this.http.put<WorkoutSession>(WorkoutsService.Url(`workouts/${id}`), payload, WorkoutsService.BaseOptions())
      .toPromise()
      .catch(WorkoutsService.HandleError);
  }

  /**
   * Update workout notes content
   *
   *
   * @param workoutSessionId
   * @param notes
   */
  public updateWorkoutNote(workoutSessionId: number, notes: string): Promise<any | ErrorFormat> {
    const data = {
      notes: notes
    };

    return this.http.post(WorkoutsService.Url(`workouts/${workoutSessionId}/notes`), data, WorkoutsService.BaseOptions())
      .toPromise()
      .catch(WorkoutsService.HandleError);
  }

  /**
   * Returns list of exercise history logged by transphormer.
   *
   * @param exerciseId
   * @param exerciseGroupId
   */
  public exerciseHistory(exerciseId: number, exerciseGroupId: number): Promise<WorkoutSessionExerciseHistory[] | ErrorFormat> {
    const options = WorkoutsService.BaseOptions(true);
    options.params = {
      exercise_id: exerciseId,
      exercise_group_id: exerciseGroupId
    };

    return this.http.get<WorkoutSessionExerciseHistory[]>(WorkoutsService.Url('workouts/exercise/history'), options)
      .toPromise()
      .then(result => result.map(workoutSession => {
        workoutSession.workout_date = moment(workoutSession.workout_date);
        return workoutSession;
      }))
      .catch(WorkoutsService.HandleError);
  }
}
