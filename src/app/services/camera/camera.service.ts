import { Inject, Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { ErrorFormat } from '../errors/errors.service';
import { Platform } from '@ionic/angular';
import { RollbarService } from '../../rollbar';
import * as Rollbar from 'rollbar';

export interface CameraPhotos {
  picture_front: string;
  picture_back: string;
  picture_side: string;
  transphormer_id: number;
  id: number;
  video_url: string;
  text?: string;
  created_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class CameraService extends BaseService {

  constructor(protected http: HttpClient, protected platform: Platform, @Inject(RollbarService) protected rollbar: Rollbar) {
    super(http, platform);
    CameraService.SET_PLATFORM(platform);
  }

  public uploadImages(data: FormData): Promise<CameraPhotos | ErrorFormat> {
    const options = CameraService.BaseOptions();
    options.headers.set('enctype', 'multipart/form-data');

    return this.http.post<CameraPhotos>(CameraService.Url('camera'), data, options)
      .toPromise()
      .then((value) => {
        return Promise.resolve<CameraPhotos>(value);
      })
      .catch((errorResponse) => {
        this.rollbar.error(errorResponse);
        const errorContent = {
          status: errorResponse.status,
          list: {global: ['Something went wrong']}
        };
        return Promise.reject<ErrorFormat>(errorContent);
      });
  }

  public images(): Promise<CameraPhotos[] | ErrorFormat> {
    return this.http.get<CameraPhotos[]>(CameraService.Url('camera'), CameraService.BaseOptions(true, true))
      .toPromise()
      .catch(CameraService.HandleError);
  }

}
