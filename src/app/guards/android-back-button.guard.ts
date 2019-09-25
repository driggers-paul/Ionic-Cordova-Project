import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanLeaveRoute {
  canLeaveAndroidBack: boolean;
  backButtonHandler?($event);
  sideMenuNavigation?();
}

@Injectable({
  providedIn: 'root'
})
export class AndroidBackButtonGuard implements CanDeactivate<CanLeaveRoute> {
  canDeactivate(
    component: CanLeaveRoute,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const result = component.canLeaveAndroidBack;
    component.canLeaveAndroidBack = true;
    return result;
  }
}
