import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { ErrorFormat } from '../errors/errors.service';
import { Transphormer } from '../authentication/authentication.service';
import { Platform } from '@ionic/angular';

export interface Trainer {
  id: number;
  transphormer_id: number;
  legionnaire_url: string;
  referral_url: string;
  transphormer?: Transphormer;
  address: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  facebook: string | null;
  google_plus: string | null;
  instagram: string | null;
  linkedin: string | null;
  pintrest: string | null;
  twitter: string | null;
  youtube: string | null;
  facebook_group: string | null;
  certifications: string;
  current_training_clients: string;
  years_training: string;
  creates_nutrition_plan: boolean;
  passed_basic_training: boolean;
  recommends_supplements: boolean;
  has_legionnaire_coach: boolean;
  creates_workout_plans: boolean;
  legionnaire_coach: string;
  how_train_clients: string;
}

@Injectable({
  providedIn: 'root'
})
export class TrainerService extends BaseService {
  constructor(protected http: HttpClient, protected platform: Platform) {
    super(http, platform);
    TrainerService.SET_PLATFORM(platform);
  }

  public updateTrainer(trainerId: number, data): Promise<any | ErrorFormat> {
    return this.http
      .put<any>(
        TrainerService.Url(`trainer/${trainerId}`),
        data,
        TrainerService.BaseOptions(true)
      )
      .toPromise()
      .catch(TrainerService.HandleError);
  }

  public listTrainers(name): Promise<Transphormer[] | ErrorFormat> {
    const options = TrainerService.BaseOptions();
    options.params = {exact_match: encodeURIComponent(name)};


    return this.http.get<Transphormer[]>(TrainerService.Url('trainer'), options)
      .toPromise()
      .catch(TrainerService.HandleError);
  }

  public showTrainer(id: number): Promise<Transphormer | ErrorFormat> {
    return this.http.get<Transphormer>(TrainerService.Url(`trainer/${id}`), TrainerService.BaseOptions())
      .toPromise()
      .catch(TrainerService.HandleError);
  }

  public getTrainerByTransphormerId(id: number): Promise<Trainer | ErrorFormat> {
    return this.http.get<Trainer>(TrainerService.Url(`trainer-for-transphormer/${id}`), TrainerService.BaseOptions())
      .toPromise()
      .catch(TrainerService.HandleError);
  }
}
