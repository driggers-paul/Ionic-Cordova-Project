import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { ErrorFormat } from '../errors/errors.service';
import { Moment } from 'moment';
import { Platform } from '@ionic/angular';

export interface Weight {
  weight: number;
  logged_on: string | Moment;
  id: number;
  transphormer_id: number;
  nice_logged_date?: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeightsService extends BaseService {

  constructor(protected http: HttpClient, protected platform: Platform) {
    super(http, platform);
    WeightsService.SET_PLATFORM(platform);
  }

  /**
   * Retrieves the latest weight of the transphormer
   */
  public latestWeight(): Promise<Weight | null | ErrorFormat> {
    return this.http.get<Weight>(WeightsService.Url('weigh-ins/latest'), WeightsService.BaseOptions(true, true))
      .toPromise()
      .then(weight => this.loggedDateConversion(this.checkWeightValue(weight)))
      .catch(WeightsService.HandleError);
  }

  /**
   * Stores weight log for the transphormer
   * @param weight
   */
  public saveWeight(weight: number): Promise<Weight | null | ErrorFormat> {
    const data = {weight};
    return this.http.post<Weight | null>(WeightsService.Url('weigh-ins'), data, WeightsService.BaseOptions(true, true))
      .toPromise()
      .then(newWeight => this.loggedDateConversion(newWeight))
      .catch(WeightsService.HandleError);
  }

  /**
   * List all weights for the transphormer
   */
  public listWeights(): Promise<Weight[] | ErrorFormat> {
    return this.http.get<Weight[]>(WeightsService.Url('weigh-ins'), WeightsService.BaseOptions(true, true))
      .toPromise()
      .then(weights => weights.map(weight => this.loggedDateConversion(weight)))
      .catch(WeightsService.HandleError);
  }

  /**
   * Converts logged date string value to date value
   * @param weight
   */
  private loggedDateConversion(weight: Weight | null): Weight {
    if (weight !== null) {
      weight.logged_on = moment.utc(weight.logged_on, 'YYYY-MM-DD HH:mm:ss', true);
    }

    return weight;
  }

  /**
   * Updates the weight
   * @param id
   * @param weight
   */
  public updateWeight(id: number, weight: number): Promise<Weight | ErrorFormat> {
    return this.http.put<Weight>(WeightsService.Url(`weigh-ins/${id}`), {weight}, WeightsService.BaseOptions())
      .toPromise()
      .then(newWeight => this.loggedDateConversion(newWeight))
      .catch(WeightsService.HandleError);
  }

  /**
   * Deletes the weight
   * @param id
   */
  public deleteWeight(id: number): Promise<any | ErrorFormat> {
    return this.http.delete(WeightsService.Url(`weigh-ins/${id}`), WeightsService.BaseOptions())
      .toPromise()
      .catch(WeightsService.HandleError);
  }

  private checkWeightValue(weight: Weight | any): Weight | null {
    if (weight.hasOwnProperty('id')) {
      return weight;
    }

    return null;
  }

  /**
   * Get single weight instance
   * @param id
   */
  public getWeight(id: number): Promise<Weight | ErrorFormat> {
    return this.http.get<Weight>(WeightsService.Url(`weigh-ins/${id}`), WeightsService.BaseOptions())
      .toPromise()
      .then(weight => this.loggedDateConversion(weight))
      .catch(WeightsService.HandleError);
  }
}
