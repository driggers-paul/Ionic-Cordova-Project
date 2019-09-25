import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { from, NEVER, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiDeprecationInterceptor implements HttpInterceptor {

  private deprecationWarningShown = false;

  public constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(catchError((err: HttpErrorResponse) => {
        if (req.url.includes(environment.apiUrl) && err.status === 410) {
          this.showDeprecationWarning();
          return NEVER;
        }

        return throwError(err);
      }));
  }

  /**
   * Alert action to inform user to update app.
   */
  public showDeprecationWarning() {
    from(this.loadingCtrl.dismiss())
      .pipe(catchError(() => NEVER))
      .subscribe();

    if (this.deprecationWarningShown) {
      return;
    }

    this.deprecationWarningShown = true;

    this.alertCtrl.create({
      header: 'Update required',
      message: 'This version of the My Transphormation Starts Today app is outdated. Please update to the latest version.',
      buttons: [{
        text: 'OK'
      }]
    })
      .then((alert) => {
        alert.onDidDismiss().then(() => {
          this.deprecationWarningShown = false;
        });

        alert.present();
      });
  }

}
