import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { FoodItemsService } from '../food-items/food-items.service';
import { ErrorFormat } from '../errors/errors.service';
import { FoodItem } from '../nutrition/nutrition.service';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export interface MealTemplate<T> {
  id: number;
  name: string;
  items: T[];
  transphormer_id: number;
  total_count?: number;
}

@Injectable({
  providedIn: 'root'
})
export class MealTemplatesService extends BaseService {

  constructor(protected http: HttpClient, protected platform: Platform, public foodItem: FoodItemsService) {
    super(http, platform);
  }

  /**
   * List all meal templates
   */
  public all(): Promise<MealTemplate<FoodItem>[] | ErrorFormat> {
    return this.http.get<MealTemplate<any>[]>(
      MealTemplatesService.Url('nutritions/meal-templates'), MealTemplatesService.BaseOptions(true, true))
      .toPromise()
      .then(mealTemplates => mealTemplates.map(mealTemplate => {
        mealTemplate.items = mealTemplate.items.map(mealItem => this.foodItem.convertToFoodItem(mealItem));
        return mealTemplate;
      }))
      .catch(MealTemplatesService.HandleError);
  }

  /**
   * List all templates with filters
   * @param name
   */
  public list(name?: string): Observable<MealTemplate<FoodItem>[] | ErrorFormat> {
    const options = MealTemplatesService.BaseOptions(true);

    options.params = {
      name: name || ''
    };

    return this.http.get<MealTemplate<any>[]>(
      MealTemplatesService.Url('nutritions/meal-templates'), options)
      .pipe(switchMap(results => {
        if (!!results === false) {
          return of([]);
        }

        // fix for cancelled response returning empty content to filter results
        results = results.filter(mealTemplate => {
          const items = mealTemplate.items.filter(mealItem => !!mealItem && !!mealItem.serving_information);
          return items.length > 0;
        });

        return of(results);
      }))
      .pipe(map(mealTemplates => mealTemplates.map(mealTemplate => {
        // fix for cancelled response returning empty content
        // and checking explicit structure integrity as returning empty object as well.
        mealTemplate.items = mealTemplate.items.filter(mealItem => {
          return !!mealItem && !!mealItem.serving_information;
        });
        mealTemplate.items = mealTemplate.items.map(mealItem => this.foodItem.convertToFoodItem(mealItem));
        return mealTemplate;
      })));
  }

  public create(name: string, items: FoodItem[]): Promise<MealTemplate<FoodItem> | ErrorFormat> {
    const data = {
      name,
      items
    };
    return this.http.post<MealTemplate<any>>(
      MealTemplatesService.Url('nutritions/meal-templates'), data, MealTemplatesService.BaseOptions()
    )
      .toPromise()
      .then(result => {
        result.items = result.items.map(mealItem => this.foodItem.convertToFoodItem(mealItem));
        return result;
      })
      .catch(MealTemplatesService.HandleError);
  }

  public update(id: number, name: string): Promise<MealTemplate<FoodItem> | ErrorFormat> {
    return this.http.put<MealTemplate<any>>(
      MealTemplatesService.Url(`nutritions/meal-templates/${id}`), {name}, MealTemplatesService.BaseOptions()
    )
      .toPromise()
      .then(result => {
        result.items = result.items.map(mealItem => this.foodItem.convertToFoodItem(mealItem));
        return result;
      })
      .catch(MealTemplatesService.HandleError);
  }

  public delete(id: number): Promise<any | ErrorFormat> {
    return this.http.delete(MealTemplatesService.Url(`nutritions/meal-templates/${id}`), MealTemplatesService.BaseOptions())
      .toPromise()
      .catch(MealTemplatesService.HandleError);
  }

  public aroundThisTime(): Promise<MealTemplate<FoodItem>[] | ErrorFormat> {
    return this.http.get<MealTemplate<any>[]>(
      MealTemplatesService.Url('nutritions/meal-templates/around-this-time'), MealTemplatesService.BaseOptions(true))
      .toPromise()
      .then(mealTemplates => mealTemplates.map(mealTemplate => {
        mealTemplate.items = mealTemplate.items.map(mealItem => this.foodItem.convertToFoodItem(mealItem));
        return mealTemplate;
      }))
      .catch(MealTemplatesService.HandleError);
  }
}
