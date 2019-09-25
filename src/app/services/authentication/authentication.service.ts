import { Injectable } from '@angular/core';
import { BaseService, Token } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ErrorFormat } from '../errors/errors.service';
import { OnBoarding } from '../onboarding/onboarding.service';
import { Trainer } from '../trainer/trainer.service';
import { Weight } from '../weights/weights.service';
import { CameraPhotos } from '../camera/camera.service';
import { WorkoutSession } from '../workouts/workouts.service';
import { Platform } from '@ionic/angular';
import { LinkApplication } from '../trainer-transphormer-link/trainer-transphormer-link.service';
import { CustomMacro } from '../custom-macro/custom-macro.service';
import { GlobalEmitterService, GlobalEvents } from '../global-emitter/global-emitter.service';
import { switchMap } from 'rxjs/operators';

interface RegisterResponse {
  transphormer: Transphormer;
  token: Token;
}

export type TRANSPHORMER_ACCOUNT_TYPE = 1;
export type TRAINER_ACCOUNT_TYPE = 2;
export const TRANSPHORMER_ACCOUNT = 1;
export const TRAINER_ACCOUNT = 2;

export type AccountTypes = TRANSPHORMER_ACCOUNT_TYPE | TRAINER_ACCOUNT_TYPE;

export interface Transphormer extends OnBoarding {
  id: number;
  display_name: string;
  first_name: string;
  last_name: string;
  email: string;
  dob: string;
  height_in_inches?: string;
  trainer: Trainer | null;
  is_trainer: boolean;
  latest_weight?: Weight;
  starting_weight_value: number;
  latest_weight_value: number;
  latest_weight_diff: number;
  latest_image?: CameraPhotos | null;
  latest_workout?: WorkoutSession | null;
  age: number;
  created_at: string;
  iphone_subscription: boolean;
  android_subscription: boolean;
  is_paid_user: boolean;
  profile_complete: boolean;
  linked_trainer?: LinkApplication | null | undefined;
  last_two_month_updates?: CameraPhotos[];
  first_image_date: string | false | null;
  custom_macros?: CustomMacro | null;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends BaseService {

  public isAuthenticated = false;

  constructor(protected http: HttpClient, protected platform: Platform, public globalEmitter: GlobalEmitterService) {
    super(http, platform);
    AuthenticationService.SET_PLATFORM(platform);
    (<any>window).globalEmitter = this.globalEmitter;
  }

  public static LoginError(e): Promise<ErrorFormat> {
    e.error.errors = {
      credential: [e.error.message]
    };

    return AuthenticationService.HandleError(e);
  }

  /**
   * Service to register user in the system
   *
   * @param email
   * @param password
   * @param first_name
   * @param last_name
   * @param account_type
   * @param token
   */
  public register(
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    account_type: AccountTypes,
    token: string | null = null
  ): Promise<Transphormer | ErrorFormat> {
    const data: any = {
      email: email,
      password: password,
      first_name: first_name,
      last_name: last_name,
      client_id: AuthenticationService.ClientId(),
      client_secret: AuthenticationService.ClientSecret(),
      account_type: account_type,
    };

    if (token) {
      data.token = token;
    }

    if (window.localStorage.getItem('campaignId')) {
      data.campaignId = window.localStorage.getItem('campaignId');
    }

    return this.http.post(
      AuthenticationService.Url('auth/register'),
      data,
      AuthenticationService.BaseOptions(false)
    )
      .toPromise()
      .then(result => {
        this.saveToken((<RegisterResponse>result).token);
        this.saveTransphormer((<RegisterResponse>result).transphormer);
        return (<RegisterResponse>result).transphormer;
      })
      .catch(BaseService.HandleError);
  }

  /**
   * Authenticates user and logs the user in
   *
   * @param email
   * @param password
   * @param token
   */
  public login(email: string, password: string, token: string | null = null): Promise<any> {
    const data: any = {
      username: email,
      password: password,
      client_id: AuthenticationService.ClientId(),
      client_secret: AuthenticationService.ClientSecret(),
      grant_type: 'password',
    };

    if (token) {
      data.token = token;
    }

    return this.http.post(AuthenticationService.Url('auth/login'), data, BaseService.BaseOptions(false))
      .toPromise()
      .then(result => {
        this.saveToken(<Token>result);
        this.isAuthenticated = true;
        return result;
      })
      .catch(AuthenticationService.LoginError);
  }

  // noinspection JSMethodCanBeStatic
  public forgotPassword(email: string): Promise<any> {
    const data = {
      email: email,
      client_id: BaseService.ClientId(),
      client_secret: BaseService.ClientSecret(),
    };

    return this.http
      .post(BaseService.Url('auth/forgot-password'), data, BaseService.BaseOptions(false))
      .toPromise()
      .catch(BaseService.HandleError);
  }

  // noinspection JSMethodCanBeStatic
  public resetPassword(
    token: string,
    email: string,
    password: string,
    password_confirmation: string,
  ): Promise<any> {
    const data = {
      token: token,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      client_id: BaseService.ClientId(),
      client_secret: BaseService.ClientSecret(),
    };

    return this.http
      .post(BaseService.Url('auth/reset-password'), data, BaseService.BaseOptions(false))
      .toPromise()
      .catch(BaseService.HandleError);
  }

  /**
   * Logs the user out of the system
   */
  public logout(): Promise<any> {
    this.isAuthenticated = false;

    return this.http
      .post(AuthenticationService.Url('auth/logout'), {}, AuthenticationService.BaseOptions())
      .toPromise()
      .catch(AuthenticationService.HandleError);
  }

  public setupAuthenticationState() {
    this.isAuthenticated = !!(window.localStorage.getItem('transphormer'));
    if (this.isAuthenticated) {
      this.globalEmitter.emit(GlobalEvents.SessionInitialized);
    }
  }

  public refreshToken(): Observable<Token> {
    const refreshToken = window.localStorage.getItem('refresh_token');
    return this.http.post<Token>(AuthenticationService.Url('auth/login'), {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: AuthenticationService.ClientId(),
      client_secret: AuthenticationService.ClientSecret()
    }, AuthenticationService.BaseOptions(false))
      .pipe(switchMap(token => {
        this.saveToken(token);
        return of(token);
      }));
  }
}
