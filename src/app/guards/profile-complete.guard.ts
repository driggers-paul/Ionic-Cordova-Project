import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Transphormer } from '../services/authentication/authentication.service';
import { NavController } from '@ionic/angular';
import { ToastService } from '../services/toast-service/toast-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileCompleteGuard implements CanActivate {

  constructor(private navCtrl: NavController,
              private toastSvc: ToastService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const transphormer: Transphormer = JSON.parse(window.localStorage.getItem('transphormer'));
    if (transphormer && transphormer.profile_complete) {
      return true;
    }

    this.toastSvc.flash('Please finish filling out your profile before using the application.');
    this.navCtrl.navigateRoot('info-gathering');
  }
}
