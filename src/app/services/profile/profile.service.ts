import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { ErrorFormat } from '../errors/errors.service';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService {
  constructor(protected http: HttpClient, protected platform: Platform) {
    super(http, platform);
    ProfileService.SET_PLATFORM(platform);
  }

  public changePassword(
    old_password: string,
    password: string,
    password_confirmation: string
  ): Promise<any | ErrorFormat> {
    const data = {
      password,
      old_password,
      password_confirmation
    };
    return this.http
      .post<any>(ProfileService.Url('change-password'), data, ProfileService.BaseOptions(true))
      .toPromise()
      .catch(ProfileService.HandleError);
  }
}
