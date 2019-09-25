import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SideMenuModule } from './components/side-menu/side-menu.module';

import { LogoModule } from './components/logo/logo.module';
import { FilterModule } from './components/filter/filter.module';
import { Firebase } from '@ionic-native/firebase/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { BranchIo } from '@ionic-native/branch-io/ngx';
import { CachingInterceptorService } from './services/interceptors/caching/caching-interceptor.service';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RollbarErrorHandler, rollbarFactory, RollbarService } from './rollbar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { RefreshTokenInterceptor } from './services/interceptors/refresh-token/refresh-token.interceptor';
import { ApiDeprecationInterceptor } from './services/interceptors/api-deprication/api-deprecation.interceptor';
import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2/ngx';
import { IonicGestureConfig } from './gesture/ionic-gesture-config';
// import { CameraPageModule } from './pages/camera/camera.page';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SideMenuModule,
    FilterModule,
    NoopAnimationsModule
    // CameraPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    HttpClientModule,
    SideMenuModule,
    LogoModule,
    Firebase,
    FCM,
    BranchIo,
    Clipboard,
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiDeprecationInterceptor, multi: true },
    { provide: RollbarService, useFactory: rollbarFactory },
    { provide: ErrorHandler, useClass: RollbarErrorHandler },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: IonicGestureConfig
    },
    BarcodeScanner,
    AppVersion,
    InAppPurchase2
  ],
  bootstrap: [AppComponent],
  exports: [HttpClientModule, LogoModule, FilterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
