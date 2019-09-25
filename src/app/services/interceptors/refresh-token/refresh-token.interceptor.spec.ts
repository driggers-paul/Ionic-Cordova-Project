import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RefreshTokenInterceptor } from './refresh-token.interceptor';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { BaseService } from '../../base/base.service';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';

class MockLocalNotification {

}

describe('RefreshToken', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        IonicModule,
      ],
      providers: [{
        provide: LocalNotifications, useClass: MockLocalNotification
      }]
    });
  });

  it('should create an instance', () => {
    const refreshTokenInterceptor = TestBed.get(RefreshTokenInterceptor);
    expect(refreshTokenInterceptor).toBeTruthy();
  });

  it('refresh token should be attempted if request return unauthenticated', fakeAsync(() => {
    const refreshTokenInterceptor: RefreshTokenInterceptor = TestBed.get(RefreshTokenInterceptor);
    const mockAuthService = spyOn(refreshTokenInterceptor.authService, 'refreshToken').and.returnValue(of());

    const req = new HttpRequest('GET', BaseService.Url('any/url'));
    const subject = new BehaviorSubject<any>(true);
    const next: any = {
      handle(request?: HttpRequest<any>) {
        return subject.asObservable().pipe(switchMap(() => throwError(new HttpErrorResponse({
          error: {message: 'Unauthenticated.'},
          status: 401
        }))));
      }
    };
    refreshTokenInterceptor.intercept(req, next).subscribe();


    tick(20);
    expect(mockAuthService).toHaveBeenCalled();
  }));
});
