import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { RequestCachingService } from './request-caching.service';
import { tap } from 'rxjs/operators';

export const LOCAL_CACHING_HEADER_NAME = 'To-Cache-Locally';

@Injectable({
  providedIn: 'root',
})
export class CachingInterceptorService implements HttpInterceptor {

  constructor(private cachingService: RequestCachingService) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cachedResponse = this.cachingService.get(req);
    if (cachedResponse) {
      return of(cachedResponse);
    }
    return this.sendRequest(req, next, this.cachingService);
  }

  public sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
    cache: RequestCachingService): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(event => {
      if (event instanceof HttpResponse) {
        const cachedTime = this.cachingTimePeriod(req);

        if (event.ok && cachedTime !== undefined) {
          cache.put(req, event.clone(), cachedTime);
        }
      }
    }));
  }

  private cachingTimePeriod(request: HttpRequest<any>): number | undefined {
    if (request.headers.has(LOCAL_CACHING_HEADER_NAME)) {
      const value = parseFloat(request.headers.get(LOCAL_CACHING_HEADER_NAME));
      if (!isNaN(value)) {
        return value;
      }
    }

    return undefined;
  }
}
