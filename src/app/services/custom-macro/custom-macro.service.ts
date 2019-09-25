import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { Moment } from 'moment';
import { ErrorFormat } from '../errors/errors.service';
import * as moment from 'moment';
import { Transphormer } from '../authentication/authentication.service';

export interface CustomMacro {
  id: number;
  reset_to_original: boolean;
  carbs: number;
  fats: number;
  protein: number;
  calories: number;
  transphormer_id: number;
  edit_date: Moment | string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomMacroService extends BaseService {

  constructor(
    public http: HttpClient,
    protected platform: Platform,
    public alertCtrl: AlertController,
    public navCtrl: NavController
  ) {
    super(http, platform);
  }

  /**
   * Returns list of previously created macros
   */
  public history(): Promise<CustomMacro[] | ErrorFormat> {
    return this.http.get<CustomMacro[]>(
      CustomMacroService.Url('nutritions/custom-macros'),
      CustomMacroService.BaseOptions(true, true)
    )
      .toPromise()
      .then(result => result.map(macro => {
        macro.edit_date = moment(macro.edit_date);
        return macro;
      }))
      .catch(CustomMacroService.HandleError);
  }

  /**
   * Creates new custom macro record
   *
   * @param reset_to_original
   * @param protein
   * @param carbs
   * @param fats
   * @param date
   */
  public create(
    reset_to_original: boolean, protein: number, carbs: number, fats: number, date: string
  ): Promise<CustomMacro | ErrorFormat> {
    const data = {
      reset_to_original,
      carbs,
      fats,
      protein,
      date
    };
    return this.http.post<CustomMacro>(CustomMacroService.Url('nutritions/custom-macros'), data, CustomMacroService.BaseOptions())
      .toPromise()
      .then(result => {
        result.edit_date = moment(result.edit_date);
        return result;
      })
      .catch(CustomMacroService.HandleError);
  }

  /**
   * Action to update existing custom macro record
   * @param id
   * @param reset_to_original
   * @param protein
   * @param carbs
   * @param fats
   */
  public update(
    id: number, reset_to_original: boolean, protein: number, carbs: number, fats: number
  ): Promise<CustomMacro | ErrorFormat> {
    const data = {
      reset_to_original,
      carbs,
      fats,
      protein
    };
    return this.http.patch<CustomMacro>(
      CustomMacroService.Url(`nutritions/custom-macros/${id}`), data, CustomMacroService.BaseOptions()
    )
      .toPromise()
      .then(result => {
        result.edit_date = moment(result.edit_date);
        return result;
      })
      .catch(CustomMacroService.HandleError);
  }

  /**
   * Returns the latest custom macro
   */
  public latestMacro(): Promise<CustomMacro | null | ErrorFormat> {
    return this.http.get<CustomMacro | null>(
      CustomMacroService.Url('nutritions/custom-macros/latest'), CustomMacroService.BaseOptions()
    )
      .toPromise()
      .then<CustomMacro | null>(result => {
        if (result.id) {
          result.edit_date = moment(result.edit_date);
          return result;
        } else {
          return null;
        }
      })
      .catch(CustomMacroService.HandleError);
  }

  public async notifyToUpdateMacro(newWeight: number, comparisionWeight) {
    const diff = newWeight - comparisionWeight;
    if (Math.abs(diff) > 10) {
      let latestMacro = <CustomMacro>await this.latestMacro();
      latestMacro = latestMacro || <CustomMacro>{reset_to_original: true};

      const transphormer: Transphormer = JSON.parse(window.localStorage.getItem('transphormer'));

      if (!latestMacro.reset_to_original && transphormer.likely_to_do === 'Calorie / Macro counting') {
        const alert = await this.alertCtrl.create({
          header: 'Update your macro',
          message: `You have ${diff > 0 ? 'gained' : 'lost'} 10 pounds or more. Please update your macro settings.`,
          backdropDismiss: false,
          buttons: [{
            text: 'Cancel',
            cssClass: 'global-danger',
          }, {
            text: 'Update',
            handler: () => {
              this.navCtrl.navigateRoot('macro?openCustomMacro=true');
            }
          }]
        });

        await alert.present();
      }
    }
  }
}
