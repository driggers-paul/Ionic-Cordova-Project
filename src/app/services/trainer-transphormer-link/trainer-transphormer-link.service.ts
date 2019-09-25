import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { ErrorFormat } from '../errors/errors.service';
import { Trainer } from '../trainer/trainer.service';
import { Transphormer } from '../authentication/authentication.service';
import { Platform } from '@ionic/angular';

export type ApplicationStatus = 'waiting' | 'accepted';

export interface LinkApplication {
  id: number;
  trainer_id: number;
  transphormer_id: number;
  status: ApplicationStatus;
  trainer: Trainer;
  transphormer: Transphormer;
}

@Injectable({
  providedIn: 'root'
})
export class TrainerTransphormerLinkService extends BaseService {

  constructor(protected http: HttpClient, protected platform: Platform) {
    super(http, platform);
    TrainerTransphormerLinkService.SET_PLATFORM(platform);
  }

  public requestStatus(): Promise<LinkApplication | ErrorFormat> {
    const options = TrainerTransphormerLinkService.BaseOptions();
    options.params = {
      wants_link: true
    };
    return this.http.get<LinkApplication>(TrainerTransphormerLinkService.Url('trainer-transphormer')
      , options)
      .toPromise()
      .catch(TrainerTransphormerLinkService.HandleError);
  }


  public applyLinkingByTransphormer(trainer: number, transphormer: number): Promise<LinkApplication | ErrorFormat> {
    return this.http.post<LinkApplication>(TrainerTransphormerLinkService.Url('trainer-transphormer'), {trainer, transphormer}
      , TrainerTransphormerLinkService.BaseOptions())
      .toPromise()
      .catch(TrainerTransphormerLinkService.HandleError);
  }

  public destroyLink(id: number): Promise<any | ErrorFormat> {
    return this.http.delete(TrainerTransphormerLinkService.Url(`trainer-transphormer/${id}`),
      TrainerTransphormerLinkService.BaseOptions())
      .toPromise()
      .catch(TrainerTransphormerLinkService.HandleError);
  }

  public trainerApplications(): Promise<LinkApplication[] | ErrorFormat> {
    return this.http.get<LinkApplication[]>(TrainerTransphormerLinkService.Url('trainer-transphormer')
      , TrainerTransphormerLinkService.BaseOptions())
      .toPromise()
      .catch(TrainerTransphormerLinkService.HandleError);
  }

  public acceptStatus(id: number): Promise<LinkApplication | ErrorFormat> {
    return this.http.post<LinkApplication>(TrainerTransphormerLinkService.Url(`trainer-transphormer/${id}/accept`), {}
      , TrainerTransphormerLinkService.BaseOptions())
      .toPromise()
      .catch(TrainerTransphormerLinkService.HandleError);
  }

  public batchAcceptStatus(ids: number[]): Promise<any | ErrorFormat> {
    return this.http.post(TrainerTransphormerLinkService.Url('trainer-transphormer/bulk/accept'), {ids},
      TrainerTransphormerLinkService.BaseOptions())
      .toPromise()
      .catch(TrainerTransphormerLinkService.HandleError);
  }

  public batchDeleteStatus(ids: number[]): Promise<any | ErrorFormat> {
    return this.http.post(TrainerTransphormerLinkService.Url('trainer-transphormer/bulk'), {
        ids,
        _method: 'delete'
      },
      TrainerTransphormerLinkService.BaseOptions())
      .toPromise()
      .catch(TrainerTransphormerLinkService.HandleError);
  }
}
