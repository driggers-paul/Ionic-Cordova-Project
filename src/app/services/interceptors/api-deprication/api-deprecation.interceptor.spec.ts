import { ApiDeprecationInterceptor } from './api-deprecation.interceptor';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { BaseService } from '../../base/base.service';
import { BehaviorSubject, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';

fdescribe('ApiDeprecation', () => {
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        IonicModule,
      ],
      providers: []
    });
  });

  fit('should create an instance', () => {
    const interceptor = TestBed.get(ApiDeprecationInterceptor);
    expect(interceptor).toBeTruthy();
  });

  fit('should open alert box if request status is 410', fakeAsync(() => {
    const interceptor: ApiDeprecationInterceptor = TestBed.get(ApiDeprecationInterceptor);

    const alertAction = spyOn(interceptor, 'showDeprecationWarning');

    const req = new HttpRequest('GET', BaseService.Url('any/url'));
    const subject = new BehaviorSubject<any>(true);
    const next: any = {
      handle(request?: HttpRequest<any>) {
        return subject.asObservable().pipe(switchMap(() => throwError(new HttpErrorResponse({
          error: 'Error Api Deprecation',
          status: 410
        }))));
      }
    };

    interceptor.intercept(req, next).subscribe();
    tick(20);

    expect(alertAction).toHaveBeenCalled();
  }));
});
