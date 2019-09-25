import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { ErrorFormat } from '../errors/errors.service';
import { FoodItem } from '../nutrition/nutrition.service';
import { Observable } from 'rxjs';

export interface CustomFoodTemplate {
  id: number;
  name: string;
  calories: number;
  carbs: number;
  fats: number;
  protein: number;
  serving_unit: string;
  serving_amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class CustomFoodTemplateService extends BaseService {

  constructor(protected http: HttpClient, protected platform: Platform) {
    super(http, platform);
    CustomFoodTemplateService.SET_PLATFORM(platform);
  }

  public listCustomFoods(): Promise<CustomFoodTemplate[] | ErrorFormat> {
    return this.http.get<CustomFoodTemplate[]>(CustomFoodTemplateService.Url('nutritions/custom-food')
      , CustomFoodTemplateService.BaseOptions(true, true))
      .toPromise()
      .catch(CustomFoodTemplateService.HandleError);
  }

  public storeCustomFood(foodItem: FoodItem): Promise<CustomFoodTemplate | ErrorFormat> {
    const data = {
      calories: foodItem.serving_size.calories,
      fats: foodItem.serving_size.fats,
      carbs: foodItem.serving_size.carbs,
      protein: foodItem.serving_size.protein,
      name: foodItem.name,
      amount: foodItem.serving_size.amount,
      unit: foodItem.serving_size.unit,
    };

    return this.http.post<CustomFoodTemplate>(CustomFoodTemplateService.Url('nutritions/custom-food'),
      data,
      CustomFoodTemplateService.BaseOptions())
      .toPromise()
      .catch(CustomFoodTemplateService.HandleError);
  }

  public updateCustomFood(id: number, foodItem: FoodItem): Promise<CustomFoodTemplate | ErrorFormat> {
    const data = {
      calories: foodItem.serving_size.calories,
      fats: foodItem.serving_size.fats,
      carbs: foodItem.serving_size.carbs,
      protein: foodItem.serving_size.protein,
      name: foodItem.name,
      amount: foodItem.serving_size.amount,
      unit: foodItem.serving_size.unit,
    };

    return this.http.put<CustomFoodTemplate>(CustomFoodTemplateService.Url(`nutritions/custom-food/${id}`),
      data,
      CustomFoodTemplateService.BaseOptions())
      .toPromise()
      .catch(CustomFoodTemplateService.HandleError);
  }

  public deleteCustomFood(id: number): Promise<any | ErrorFormat> {

    return this.http.delete(CustomFoodTemplateService.Url(`nutritions/custom-food/${id}`),
      CustomFoodTemplateService.BaseOptions())
      .toPromise()
      .catch(CustomFoodTemplateService.HandleError);
  }

  public searchTemplate(name: string): Observable<CustomFoodTemplate[] | ErrorFormat> {
    const options = CustomFoodTemplateService.BaseOptions();
    options.params = {
      name
    };

    return this.http.get<CustomFoodTemplate[]>(CustomFoodTemplateService.Url('nutritions/custom-food'), options);
  }
}
