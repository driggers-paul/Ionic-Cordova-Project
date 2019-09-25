import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { ErrorFormat } from '../errors/errors.service';
import { Platform } from '@ionic/angular';
import { choices } from '../../pages/nutrition/nutrition-values';
import * as moment from 'moment';
import { Moment } from 'moment';
import { TrackedFood } from '../food-items/food-items.service';

type NutritionTypes = 'protein' | 'carb' | 'veggie';

export interface NutritionItem {
  // id: number;
  name: string;
  type: NutritionTypes;
  unit: string;
  quantity?: number;
  // created_at: string;
  // updated_at: string;
  calculatedQuantity?: number;
}

export interface MacroCountingInfo {
  id?: number;
  track_date: string | Date | Moment;
  water_amount: number;
  tracked_items: TrackedFood[];
}

export interface Meal {
  meal_count: number;
  food_items: FoodItem[];
  active: boolean;
}

export interface FoodItem {
  id?: number;
  meal?: number;
  carbs: number;
  calories: number;
  protein: number;
  fats: number;
  base_weight: number;
  name: string;
  is_custom: boolean;
  is_custom_food_template?: boolean;
  is_branded_food?: boolean;
  nutritioninx_food_name?: string;
  nutritioninx_item_id?: string;
  meal_template_id?: number;
  serving_size?: {
    amount: number;
    unit: string;
    carbs: number;
    calories: number;
    protein: number;
    fats: number;
  };
  amount_consumed?: {
    amount: number;
    unit: string;
  };
  alt_servings?: AltServing[] | null;
  total_count?: number;
}

export interface AltServing {
  serving_weight: number;
  quantity: number;
  measure: string;
  qty?: number;
  seq?: number;
}

@Injectable({
  providedIn: 'root'
})
export class NutritionService extends BaseService {

  constructor(protected http: HttpClient, protected platform: Platform) {
    super(http, platform);
    NutritionService.SET_PLATFORM(platform);
  }

  public getNutritionItems(): Promise<NutritionItem[] | ErrorFormat> {
    const result: NutritionItem[] = [];
    for (const type in choices) {
      if (choices[type] instanceof Array) {
        const options = choices[type];
        for (let i = 0; i < options.length; i++) {
          result.push({type, name: options[i].name, unit: options[i].unit} as NutritionItem);
        }
      }
    }

    return Promise.resolve(result)
      .catch(NutritionService.HandleError);
  }

  public getMacroCountingInfo(date: Date): Promise<MacroCountingInfo | ErrorFormat> {
    const mDate = moment(date);
    return this.http.get<MacroCountingInfo>(NutritionService.Url(`nutritions/macro-counting/${mDate.format('YYYY-MM-DD')}`), NutritionService.BaseOptions())
      .toPromise()
      .then(macroInfo => {
        macroInfo.track_date = moment(macroInfo.track_date);
        return macroInfo;
      })
      .catch(NutritionService.HandleError);
  }


  public storeMacroCountingInfo(date: string | Date | Moment, water: number): Promise<MacroCountingInfo | ErrorFormat> {
    date = <Moment>(!(date instanceof moment) ? moment(date) : date);
    const data = {
      date: date.format('YYYY-MM-DD'),
      water
    };
    return this.http.post<MacroCountingInfo>(NutritionService.Url('nutritions/macro-counting'), data, NutritionService.BaseOptions())
      .toPromise()
      .catch(NutritionService.HandleError);
  }

  public patchMacroCountingInfo(id: number, date: string | Date | Moment, water: number): Promise<MacroCountingInfo | ErrorFormat> {
    date = <Moment>(!(date instanceof moment) ? moment(date) : date);
    const data = {
      date: date.format('YYYY-MM-DD'),
      water
    };
    return this.http.put<MacroCountingInfo>(NutritionService.Url(`nutritions/macro-counting/${id}`), data, NutritionService.BaseOptions())
      .toPromise()
      .catch(NutritionService.HandleError);
  }

  public updateMacroCountingInfo(macroInfo: MacroCountingInfo): Promise<MacroCountingInfo | ErrorFormat> {
    if (macroInfo.id) {
      return this.patchMacroCountingInfo(macroInfo.id, macroInfo.track_date, macroInfo.water_amount);
    } else {
      return this.storeMacroCountingInfo(macroInfo.track_date, macroInfo.water_amount);
    }
  }
}
