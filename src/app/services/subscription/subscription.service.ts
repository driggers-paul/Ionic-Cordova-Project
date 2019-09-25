import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Transphormer } from '../authentication/authentication.service';
import { ErrorFormat } from '../errors/errors.service';
import { Platform } from '@ionic/angular';
import { AccountService, AccountSetting } from '../account/account.service';

export type AllowedPlatforms = 'ios' | 'android';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService extends BaseService {
  constructor(
    protected http: HttpClient, protected platform: Platform,
    private accountService: AccountService
  ) {
    super(http, platform);
    SubscriptionService.SET_PLATFORM(platform);
  }

  public updateSubscriptionPlatform(platform: AllowedPlatforms,
                                    product_id,
                                    subscription_data,
                                    receipt
  ): Promise<Transphormer | ErrorFormat> {
    const data = {
      iphone_subscription: platform === 'ios',
      android_subscription: platform === 'android',
      product_id,
      subscription_data,
      receipt
    };

    return this.http.post<Transphormer>(SubscriptionService.Url('subscription'), data,
      SubscriptionService.BaseOptions())
      .toPromise()
      .then(transphormer => {
        this.saveTransphormer(transphormer);
        this.setupSubscriptionChangedValues();
        return transphormer;
      }).catch(SubscriptionService.HandleError);
  }

  /**
   * Updating various account settings handler on subscription change
   */
  private async setupSubscriptionChangedValues() {
    const accountSettings: AccountSetting = <AccountSetting>await this.accountService.getAccountSetting();
    this.accountService.subscribeToLiveStream(accountSettings.receive_livestream_notification);
  }
}
