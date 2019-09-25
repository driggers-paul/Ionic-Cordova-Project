import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { ErrorFormat } from '../errors/errors.service';
import { merge } from 'lodash';
import { Transphormer } from '../authentication/authentication.service';
import { Platform } from '@ionic/angular';

export enum  Sex {
  Male = '1',
  Female = '2'
}

export type NutritionValues = 'Macro meal plan' | 'Calorie / Macro counting' | 'Portion control';

export interface PersonalInfo {
  height: number;
  weight: number;
  sex: Sex;
  goal_weight: number;
  date_of_birth: string;
  first_name?: string;
  last_name?: string;
}

export interface BaseInfo {
  transphormation_goal: TransphormationGoalTypes;
  training_level: TrainingLevelsTypes;
  gym_workout_selection: ProgramTypes;
  home_workout_selection: number;
  access_to_gym: string;
  activity_level: ActiveLevelTypes;
  likely_to_do: NutritionValues;
  meals_per_day: number | null;
  preference_macro_counting: PreferenceMacroCounting | null;
}

export interface MarketingInfo {
  understand_supplements: boolean;
  understand_nutrition: boolean;
  committed_to_exercise: boolean;
}

export interface OnBoarding extends PersonalInfo, BaseInfo, MarketingInfo {
}

export const TrainingLevels = [
  {
    name: 'Beginner',
    value: 3
  },
  {
    name: 'Intermediate',
    value: 1
  },
  {
    name: 'Advanced',
    value: 2
  },
];

export const TrainingHomeWorkouts = [
  {
    name: 'No equipment',
    value: 5
  },
  {
    name: 'Cardio equipment, no bands or weights',
    value: 8
  },
  {
    name: 'Bands or weights, no cardio equipment',
    value: 6
  },
  {
    name: 'Bands or weights and cardio equipment',
    value: 7
  },
];

export type TrainingLevelsTypes = number;

export type ProgramTypes = number;

export type PreferenceMacroCounting = 'Carbs' | 'Fats' | 'Both';

export const TransphormationGoal: TransphormationGoalTypes[] = [
  'Primarily lose bodyfat',
  'Gain lean muscle',
  'Maintain'
];

export const TrainingProgramTypes = [
  {
    name: 'EMOM',
    value: 1
  },
  {
    name: 'Traditional',
    value: 2
  },
  {
    name: 'Cross Training',
    value: 3
  },
  {
    name: 'Weight loss',
    value: 4
  },
];

export type TransphormationGoalTypes =
  | 'Primarily lose bodyfat'
  | 'Maintain'
  | 'Gain lean muscle';

export const ActiveLevels = [
  'Sedentary',
  'Light Activity',
  'Very Active'
];

export type ActiveLevelTypes =
  | 'Sedentary'
  | 'Light Activity'
  | 'Moderate Activity'
  | 'Very Active';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService extends BaseService {
  constructor(protected http: HttpClient, protected platform: Platform) {
    super(http, platform);
    OnboardingService.SET_PLATFORM(platform);
  }

  /**
   * Service to store onboarding data
   *
   * @param personalInfo
   * @param baseInfo
   * @param marketingInfo
   */
  public saveOnBoard(
    personalInfo: PersonalInfo,
    baseInfo: BaseInfo,
    marketingInfo: MarketingInfo
  ): Promise<Transphormer | ErrorFormat> {
    const data: OnBoarding = merge({}, personalInfo, baseInfo, marketingInfo);
    return this.http
      .post<Transphormer>(
        OnboardingService.Url('onboarding'),
        data,
        OnboardingService.BaseOptions()
      )
      .toPromise()
      .then(transphormer => {
        this.saveTransphormer(transphormer);
        return transphormer;
      })
      .catch(OnboardingService.HandleError);
  }

  /**
   * Fetches the transphormer data
   */
  public fetchOnBoard(): Promise<Transphormer | ErrorFormat> {
    return this.http.get<Transphormer>(OnboardingService.Url('onboarding'), OnboardingService.BaseOptions())
      .toPromise()
      .then(result => {
        this.saveTransphormer(result);
        return result;
      })
      .catch(OnboardingService.HandleError);
  }

  public updateOnBoardInformation(data: OnBoarding): Promise<Transphormer | ErrorFormat> {
    return this.http.put<Transphormer>(OnboardingService.Url('onboarding'), data, OnboardingService.BaseOptions())
      .toPromise()
      .then(result => {
        this.saveTransphormer(result);
        return result;
      })
      .catch(OnboardingService.HandleError);
  }
}
