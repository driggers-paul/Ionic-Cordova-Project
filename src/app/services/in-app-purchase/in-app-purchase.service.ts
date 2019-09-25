import { EventEmitter, Inject, Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { IAPProduct, IAPProductOptions, InAppPurchase2 } from '@ionic-native/in-app-purchase-2/ngx';
import { Observable } from 'rxjs';
import { Transphormer } from '../authentication/authentication.service';
import { OnboardingService } from '../onboarding/onboarding.service';
import { RollbarService } from '../../rollbar';
import * as Rollbar from 'rollbar';

// Apparently you cannot "re-use" a product on Google and I did not want to have to through all of the
// fuss of re-creating each of the products to make everything match. Live and learn, I guess. So each
// platform has it's own set of products.
export const APPLE_MONTHLY_PRODUCT = 'com.firstphorm.apps.premium_monthly';
export const APPLE_QUARTERLY_PRODUCT = 'com.firstphorm.apps.premium_quarterly';
export const APPLE_YEARLY_PRODUCT = 'com.firstphorm.apps.premium_yearly';

export const GOOGLE_MONTHLY_PRODUCT = 'com.firstphorm.apps.subscription_monthly';
export const GOOGLE_QUARTERLY_PRODUCT = 'com.firstphorm.apps.subscription_quarterly';
export const GOOGLE_YEARLY_PRODUCT = 'com.firstphorm.apps.subscription_yearly';

@Injectable({
  providedIn: 'root'
})
export class InAppPurchaseService extends BaseService {

  protected subscriptionUpdated: EventEmitter<IAPProduct> = new EventEmitter<IAPProduct>();

  protected ready: EventEmitter<IAPProduct[]> = new EventEmitter<IAPProduct[]>();

  protected products: string[] = [];

  public approvedState: EventEmitter<IAPProduct> = new EventEmitter<IAPProduct>();
  public verifiedState: EventEmitter<IAPProduct> = new EventEmitter<IAPProduct>();
  public ownedState: EventEmitter<IAPProduct> = new EventEmitter<IAPProduct>();

  constructor(
    public http: HttpClient,
    public platform: Platform,
    public store: InAppPurchase2,
    public onboardService: OnboardingService,
    @Inject(RollbarService) private rollbar: Rollbar,
  ) {
    super(http, platform);
    InAppPurchaseService.SET_PLATFORM(platform);
  }

  public setDebugLevel(debugLevel: 'QUIET' | 'ERROR' | 'WARNING' | 'INFO' | 'DEBUG') {
    this.store.verbosity = this.store[debugLevel];
  }

  public registerProducts(products: string[], type: 'ios' | 'android') {
    this.products = products;
    const iapProducts: IAPProductOptions[] = products.map(product => {
      return <IAPProductOptions>{id: product, type: this.store.PAID_SUBSCRIPTION};
    });
    this.store.register(iapProducts);

    this.listenSubscriptionChange();
    this.store.ready(() => {
      const updatedProducts = this.store.products.map(product => {

        // Additional data
        product.additionalData = {
          transphormer_id: this.transphormer().id
        };
        return product;
      });

      this.ready.emit(updatedProducts);
    });

    this.setupValidationHandling(type);
    this.handlePaymentCompletion();

    this.store.refresh();
  }

  private listenSubscriptionChange() {
    this.store.when('subscription').updated(() => {
      for (const product of this.products) {
        this.subscriptionUpdated.emit(this.store.get(product));
      }
    });
  }

  public subscriptionUpdate(): Observable<IAPProduct> {
    return this.subscriptionUpdated.asObservable();
  }

  public storeReady(): Observable<IAPProduct[]> {
    return this.ready.asObservable();
  }

  public purchase(subscription: string | IAPProduct) {
    return this.store.order(subscription);
  }

  public handlePaymentCompletion() {
    const eventStream = this.store.when('subscription');
    eventStream.approved((iapProduct: IAPProduct) => {
      this.approvedState.emit(iapProduct);
      return iapProduct.verify();
    });
    eventStream.verified((iapProduct: IAPProduct) => {
      this.verifiedState.emit(iapProduct);
      return iapProduct.finish();
    });
    eventStream.owned((iapProduct: IAPProduct) => {
      this.ownedState.emit(iapProduct);
    });
  }

  public platformProducts(): any {
    if (this.platform.is('android')) {
      return {
        monthly: GOOGLE_MONTHLY_PRODUCT,
        quarterly: GOOGLE_QUARTERLY_PRODUCT,
        yearly: GOOGLE_YEARLY_PRODUCT,
      };
    } else if (this.platform.is('ios')) {
      return {
        monthly: APPLE_MONTHLY_PRODUCT,
        quarterly: APPLE_QUARTERLY_PRODUCT,
        yearly: APPLE_YEARLY_PRODUCT,
      };
    }
  }

  public platformProductsArray() {
    return Object.values(this.platformProducts()) as string[];
  }

  public transphormer(): Transphormer {
    return JSON.parse(window.localStorage.getItem('transphormer'));
  }

  public setupValidationHandling(type: string) {
    this.store.validator = (product: IAPProduct, callback) => {
      this.http.post<Transphormer>(InAppPurchaseService.Url(`subscription/validate/${type}`), product)
        .subscribe(() => {
          this.onboardService.fetchOnBoard();
          callback(true, product.transaction);
        }, (error) => {
          callback(false, 'Something went wrong.');
          this.rollbar.error(this.rollbar.error(error));
        });
    };
  }
}
