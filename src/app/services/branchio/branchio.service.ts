import { Injectable } from '@angular/core';
import { BranchIo } from '@ionic-native/branch-io/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BranchioService {
  constructor(private branch: BranchIo, private platform: Platform) {
  }

  public async start() {
    if (this.platform.is('cordova')) {
      try {
        const data = await this.branch.initSession();
        window.localStorage.setItem('campaignId', data.a_id);
      } catch (e) {
        console.log(e, 'error');
      }
    }
  }
}
