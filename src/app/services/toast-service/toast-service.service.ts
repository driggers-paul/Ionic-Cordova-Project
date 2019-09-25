import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ToastOptions } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }

  public async flash(opts: ToastOptions|string, duration?: number) {
    if (typeof opts === 'string') {
      opts = { message: opts };
    }

    if (duration) {
      opts.duration = duration;
    }

    if (!opts.duration) {
      opts.duration = 3000;
    }
    const m = await this.toastController.create(opts);
    return m.present();
  }
}
