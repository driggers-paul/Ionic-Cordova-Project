import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

export interface EntryContent {
  response: HttpResponse<any>;
  expiration: number;
}

@Injectable({
  providedIn: 'root',
})

export class RequestCachingService {
  public cache = new Map();

  public get(request: HttpRequest<any>): HttpResponse<any> | undefined {
    const key = this.createKey(request.url, request.method);

    const cachedValue: EntryContent = this.cache.get(key);

    if (!cachedValue) {
      return undefined;
    }

    if (cachedValue.expiration >= Date.now()) {
      return cachedValue.response;
    }

    return undefined;
  }

  public clearKey(url: string, requestType: string) {
    const key = this.createKey(url, requestType);
    this.cache.delete(key);
  }

  public createKey(url: string, requestType: string): string {
    return `${url}|${requestType}`;
  }

  public put(request: HttpRequest<any>, response: HttpResponse<any>, expirationTime: number): void {
    const key = this.createKey(request.url, request.method);
    this.cache.set(key, this.entryContent(response, expirationTime));
  }

  public entryContent(response: HttpResponse<any>, expiration: number): EntryContent {
    return <EntryContent>{
      expiration,
      response
    };
  }

  public clearAll() {
    this.cache.clear();
  }
}
