import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { from, NEVER, Observable, throwError } from 'rxjs';
import { catchError, retry, switchMap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { AuthenticationService } from '../../authentication/authentication.service';
import { LoadingController, NavController, Platform } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { SideMenuHandlerEmitter } from '../../../components/side-menu/side-menu-handler';
import { RequestCachingService } from '../caching/request-caching.service';
import { ToastService } from '../../toast-service/toast-service.service';

@Injectable({
  providedIn: 'root'
})
export class RefreshTokenInterceptor implements HttpInterceptor {

  public constructor(
    public authService: AuthenticationService,
    public platform: Platform,
    public localNotification: LocalNotifications,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public cachingService: RequestCachingService,
    public toastService: ToastService
  ) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // setting number of refresh attempts
    let attempts = 0;
    const maxAttempts = 2;

    return next.handle(req)
      .pipe(catchError((err: HttpErrorResponse) => {
        // if attempts are exhausted then preventing any further actions
        if (attempts > maxAttempts) {
          this.forceLogout();
          return NEVER;
        }

        // if request fails with unauthorized action
        if (err.status === 401) {

          // checking if action is for our api system not for third party
          if ((!req.url.includes('auth/login') || !req.url.includes('auth/register')) && req.url.includes(environment.apiUrl)) {

            // if response is unauthenticated response
            if (err.error && err.error.message === 'Unauthenticated.') {
              return this.authService.refreshToken()
                .pipe(retry(1))  // max retry on refresh token 2 times
                .pipe(catchError(() => {

                  // if attempt to refresh token it self fails then also cancelling further request
                  this.forceLogout();
                  return NEVER;
                }))
                .pipe(switchMap(token => {
                  attempts++;
                  const newRequest = req.clone({
                    setHeaders: {
                      Authorization: `Bearer ${token.access_token}`
                    }
                  });

                  return next.handle(newRequest);
                }));
            }
          }
        }

        return throwError(err);
      }));
  }

  /**
   * Force logout the user from system if refresh token attempt fails
   */
  public forceLogout() {
    this.toastService.flash('Invalid session. You have been logged out.');
    this.authService.removeTokens();
    this.authService.removeTransphormer();
    window.localStorage.clear();
    this.authService.setupAuthenticationState();
    if (this.platform.is('cordova')) {
      this.localNotification.cancelAll();
    }
    SideMenuHandlerEmitter.closeMenu();

    // hiding any loader if in view
    from(this.loadingCtrl.dismiss())
      .pipe(catchError(() => NEVER))
      .subscribe();

    this.cachingService.clearAll();
    this.navCtrl.navigateRoot('');
  }

}
