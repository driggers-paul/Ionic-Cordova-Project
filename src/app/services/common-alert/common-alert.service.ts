import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AlertOptions } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class CommonAlertService {

  constructor(
    public alertCtrl: AlertController
  ) {
  }


  /**
   * Opens common alert dialog with pre defined styling. By default will add a cancel button if no buttons are provided which is
   * left aligned. The alert adds common-alert-helper class to provide default styling and will be added first to allow full override
   * by new classes.The default mode of alert is material mode 'md'.
   *
   * By default the cancel button will be added.
   *
   * For default cancel button styling on a button use class cancel-alert through property cssClass on the button.
   * Note only add it to a single button throughout the alert.
   *
   * Please follow ionic alert documentation to control alert actions.
   *
   * @see https://ionicframework.com/docs/api/alert
   * @param option
   * @param useDefaultCancel [Add the cancel button. Defaults true]
   */
  public async open(option: AlertOptions, useDefaultCancel = true) {
    if (typeof option.cssClass === 'string') {
      option.cssClass = `common-alert-helper ${option.cssClass}`;
    } else if (option.cssClass instanceof Array) {
      option.cssClass = `common-alert-helper ${option.cssClass.join(' ')}`;
    } else {
      option.cssClass = 'common-alert-helper';
    }

    option.mode = option.mode || 'md';
    option.buttons = option.buttons || [];

    if (useDefaultCancel) {
      option.buttons.push({
        text: 'OK',
        cssClass: 'cancel-alert'
      });
    }
    const alert = await this.alertCtrl.create(option);

    await alert.present();

    return alert;
  }
}
