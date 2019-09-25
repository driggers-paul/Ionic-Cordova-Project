import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { AltServing } from '../nutrition/nutrition.service';

interface SearchResult {
  common: any[];
  branded: BrandedFood[];
}

export interface BrandedFood {
  brand_name: string;
  brand_name_item_name: string;
  brand_type: number;
  food_name: string;
  nf_calories: number;
  nix_item_id: string;
  nix_brand_id: string;
  serving_qty: number;
  serving_weight: number;
  serving_unit: string;
}

export interface CommonDetail {
  foods: CommonDetailFood[];
}

export interface CommonDetailFood extends BrandedFood {
  alt_measures: AltServing[] | null;
  brand_name: string | null;
  food_name: string;
  nf_calories: number;
  nf_protein: number;
  nf_total_fat: number;
  nf_total_carbohydrate: number;
  serving_qty: number;
  serving_unit: string;
  serving_weight_grams: number;
  nix_brand_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class NutritionixService {

  constructor(protected http: HttpClient, public platform: Platform) {
  }

  /**
   * Returns api url path
   *
   * @param url
   * @constructor
   * @return string
   */
  public static Url(url: string): string {
    return environment.nutritionix.url + url;
  }

  /**
   * Returns headers
   *
   * @param authenticated
   * @param cache
   * @param cacheDuration
   * @constructor
   * @return HttpHeaders
   */
  public static Headers(authenticated = true, cache = false, cacheDuration = 21600): HttpHeaders {
    let header = new HttpHeaders();
    header = header.set('Accept', 'application/json');
    header = header.set('x-app-id', environment.nutritionix.appId);
    header = header.set('x-app-key', environment.nutritionix.appKey);


    return header;
  }

  public static BaseOptions(authenticated = true, cache = false, cacheDuration = 21600) {
    return {
      headers: NutritionixService.Headers(authenticated, cache, cacheDuration),
      params: {} as any
    };
  }

  public search(searchValue): Observable<SearchResult> {
    const options = NutritionixService.BaseOptions();
    options.params = {
      query: searchValue,
      self: true,
      branded: true,
      common: true,
      common_general: true,
      common_grocery: true,
      common_restaurant: true,
      detailed: true,
      claims: true
    };
    return this.http.get<SearchResult>(NutritionixService.Url('search/instant'), options);
  }

  public commonDetail(query: string, transphormerId: number): Promise<CommonDetail | any> {
    const options = NutritionixService.BaseOptions();
    options.headers = options.headers.set('x-remote-user-id', transphormerId.toString());
    const body = {
      query
    };

    return this.http.post<CommonDetail>(NutritionixService.Url('natural/nutrients'), body, options)
      .toPromise()
      .then(result => {
        result.foods = result.foods.map(food => {
          if (food.alt_measures instanceof Array) {
            food.alt_measures = food.alt_measures.map(measure => {
              measure.quantity = measure.qty;
              return measure;
            });
          }
          return food;
        });
        return result;
      });
  }

  public brandedDetail(query: string): Promise<CommonDetail | any> {
    const options = NutritionixService.BaseOptions();
    options.params = {
      nix_item_id: query
    };

    return this.http.get<CommonDetail>(NutritionixService.Url('search/item'), options)
      .toPromise();
  }

  public searchBarcode(barcode: string): Observable<CommonDetail> {
    const options = NutritionixService.BaseOptions();
    options.params = {
      upc: barcode,
      claims: false
    };
    return this.http.get<CommonDetail>(NutritionixService.Url('search/item'), options);
  }
}
