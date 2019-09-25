(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/guards/android-back-button.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/guards/android-back-button.guard.ts ***!
  \*****************************************************/
/*! exports provided: AndroidBackButtonGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndroidBackButtonGuard", function() { return AndroidBackButtonGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AndroidBackButtonGuard = /** @class */ (function () {
    function AndroidBackButtonGuard() {
    }
    AndroidBackButtonGuard.prototype.canDeactivate = function (component, next, state) {
        var result = component.canLeaveAndroidBack;
        component.canLeaveAndroidBack = true;
        return result;
    };
    AndroidBackButtonGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], AndroidBackButtonGuard);
    return AndroidBackButtonGuard;
}());



/***/ }),

/***/ "./src/app/guards/is-logged-in.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/is-logged-in.guard.ts ***!
  \**********************************************/
/*! exports provided: IsLoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLoggedInGuard", function() { return IsLoggedInGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IsLoggedInGuard = /** @class */ (function () {
    function IsLoggedInGuard(navCtrl) {
        this.navCtrl = navCtrl;
    }
    IsLoggedInGuard.prototype.canActivate = function (next, state) {
        if (window.localStorage.getItem('transphormer')) {
            this.navCtrl.navigateRoot('/dashboard');
            return false;
        }
        return true;
    };
    IsLoggedInGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], IsLoggedInGuard);
    return IsLoggedInGuard;
}());



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _components_logo_logo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/logo/logo.module */ "./src/app/components/logo/logo.module.ts");
/* harmony import */ var _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/side-menu/side-menu.module */ "./src/app/components/side-menu/side-menu.module.ts");
/* harmony import */ var _guards_android_back_button_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../guards/android-back-button.guard */ "./src/app/guards/android-back-button.guard.ts");
/* harmony import */ var _guards_is_logged_in_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../guards/is-logged-in.guard */ "./src/app/guards/is-logged-in.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"],
        canActivate: [_guards_is_logged_in_guard__WEBPACK_IMPORTED_MODULE_9__["IsLoggedInGuard"]],
        canDeactivate: [_guards_android_back_button_guard__WEBPACK_IMPORTED_MODULE_8__["AndroidBackButtonGuard"]]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_logo_logo_module__WEBPACK_IMPORTED_MODULE_6__["LogoModule"],
                _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_7__["SideMenuModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,900\" rel=\"stylesheet\">\r\n<ion-content class=\"global-container splash-bg\">\r\n  <div class=\"login-content\">\r\n    <div>\r\n      <app-logo></app-logo>\r\n      <h4>My Transphormation<br/>Starts Today</h4>\r\n      <form class=\"global-margin-top-20\" [formGroup]=\"form\" (ngSubmit)=\"login()\">\r\n        <div class=\"global-input\">\r\n          <ion-label stacked>Email</ion-label>\r\n          <ion-input type=\"email\" inputmode=\"email\" formControlName=\"email\"\r\n                     [color]=\"errorHandler.stateColor(form.get('email'))\"></ion-input>\r\n        </div>\r\n        <div class=\"global-input\">\r\n          <ion-label stacked>Password</ion-label>\r\n          <ion-input type=\"password\" formControlName=\"password\"\r\n                     [color]=\"errorHandler.stateColor(form.get('password'))\"></ion-input>\r\n        </div>\r\n        <ion-button class=\"global-margin-top-20\" expand=\"full\" (click)=\"login()\" [disabled]=\"form.invalid\">\r\n          Sign\r\n          in to my account\r\n        </ion-button>\r\n        <div class=\"forgot-password global-margin-top-10\">\r\n          <a routerlink=\"/forgot-password\" (click)=\"goToForgotPassword()\">Forgot your password?</a>\r\n        </div>\r\n        <p class=\"or\">OR</p>\r\n        <ion-button margin-bottom expand=\"full\" fill=\"outline\" (click)=\"goToRegister()\">Create a free account</ion-button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-content {\n  background-image: url('splashbg.jpg');\n  background-size: initial;\n  background-repeat: repeat;\n  display: flex;\n  width: 100%;\n  min-height: 100%; }\n  @media screen and (max-width: 768px) {\n    .login-content {\n      background-size: 175%; } }\n  .login-content .item-input {\n    margin-bottom: var(--default-margin); }\n  .login-content .forgot-password a {\n    float: right;\n    font-size: 12px;\n    padding: 10px 0;\n    font-weight: bold;\n    text-decoration: none; }\n  h4 {\n  text-align: center;\n  margin: 0 -10px;\n  letter-spacing: -1.5px; }\n  .or {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  font-size: 10px;\n  padding: 0; }\n  .or::after {\n    content: \"\";\n    background-color: #fff;\n    width: 80%;\n    flex: 1;\n    margin: 0 2%;\n    border: solid #e3e3e3;\n    border-width: 0.5px 0; }\n  .or::before {\n    content: \"\";\n    background-color: #fff;\n    width: 80%;\n    flex: 1;\n    margin: 0 2%;\n    border: solid #e3e3e3;\n    border-width: 0.5px 0; }\n  .login-content > div {\n  background: rgba(255, 255, 255, 0.85); }\n  .scroll-content {\n  overflow-y: hidden !important; }\n  .login-content {\n  padding-top: 0;\n  justify-content: center;\n  align-items: center; }\n  .login-content > div {\n  width: 90%;\n  height: 85%;\n  padding: 0 16px; }\n  @media screen and (min-width: 769px) {\n  .login-content > div {\n    width: 50%;\n    height: 70%;\n    padding: 0 32px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRTpcXGlvbmljXFxWZXJ2ZUNvbW1lcmNlXFxOZXdEZXZcXG10c3QtYXBwL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUE0QztFQUM1Qyx3QkFBd0I7RUFDeEIseUJBQXlCO0VBTXpCLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7RUFOaEI7SUFMRjtNQU1JLHFCQUFxQixFQUFBLEVBa0J4QjtFQXhCRDtJQWNJLG9DQUFvQyxFQUFBO0VBZHhDO0lBa0JJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUIsRUFBQTtFQUl6QjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0JBQXNCLEVBQUE7RUFHeEI7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsVUFBVSxFQUFBO0VBTFo7SUFRSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixPQUFPO0lBQ1AsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixxQkFBcUIsRUFBQTtFQWR6QjtJQWtCSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixPQUFPO0lBQ1AsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixxQkFBcUIsRUFBQTtFQUl6QjtFQUNFLHFDQUFvQyxFQUFBO0VBR3RDO0VBQ0UsNkJBQTZCLEVBQUE7RUFHL0I7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBO0VBR3JCO0VBRUUsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlLEVBQUE7RUFHakI7RUFDRTtJQUVFLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZSxFQUFBLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYXNzZXRzL3NwbGFzaGJnLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogaW5pdGlhbDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxNzUlO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG5cclxuICAuaXRlbS1pbnB1dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1kZWZhdWx0LW1hcmdpbik7XHJcbiAgfVxyXG5cclxuICAuZm9yZ290LXBhc3N3b3JkIGEge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5oNCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMCAtMTBweDtcclxuICBsZXR0ZXItc3BhY2luZzogLTEuNXB4O1xyXG59XHJcblxyXG4ub3Ige1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZmxleDogMTtcclxuICAgIG1hcmdpbjogMCAyJTtcclxuICAgIGJvcmRlcjogc29saWQgI2UzZTNlMztcclxuICAgIGJvcmRlci13aWR0aDogMC41cHggMDtcclxuICB9XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luOiAwIDIlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAjZTNlM2UzO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwLjVweCAwO1xyXG4gIH1cclxufVxyXG5cclxuLmxvZ2luLWNvbnRlbnQgPiBkaXYge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjg1KTtcclxufVxyXG5cclxuLnNjcm9sbC1jb250ZW50IHtcclxuICBvdmVyZmxvdy15OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRlbnQge1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250ZW50ID4gZGl2IHtcclxuICAvL21hcmdpbjogMjUlIGF1dG8gMCBhdXRvO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA4NSU7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xyXG4gIC5sb2dpbi1jb250ZW50ID4gZGl2IHtcclxuICAgIC8vbWFyZ2luOiAyNSUgYXV0byAwIGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICBwYWRkaW5nOiAwIDMycHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _components_side_menu_side_menu_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/side-menu/side-menu-handler */ "./src/app/components/side-menu/side-menu-handler.ts");
/* harmony import */ var _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/onboarding/onboarding.service */ "./src/app/services/onboarding/onboarding.service.ts");
/* harmony import */ var _services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/firebase/firebase.service */ "./src/app/services/firebase/firebase.service.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/toast-service/toast-service.service */ "./src/app/services/toast-service/toast-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var LoginPage = /** @class */ (function () {
    function LoginPage(errorHandler, navCtrl, authenticationService, toastSvc, platform, loadingCtrl, onboardingService, firebase, statusBar) {
        this.errorHandler = errorHandler;
        this.navCtrl = navCtrl;
        this.authenticationService = authenticationService;
        this.toastSvc = toastSvc;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.onboardingService = onboardingService;
        this.firebase = firebase;
        this.statusBar = statusBar;
        this.canLeaveAndroidBack = true;
    }
    LoginPage.prototype.ngAfterViewChecked = function () {
        if (this.platform.is('cordova')) {
            this.statusBar.styleDefault();
            this.statusBar.backgroundColorByHexString('#ffffff');
        }
    };
    LoginPage.prototype.ngOnInit = function () {
        this.setupForm();
        _components_side_menu_side_menu_handler__WEBPACK_IMPORTED_MODULE_5__["SideMenuHandlerEmitter"].toggleAllowMenu(false);
    };
    /**
     * Setup form
     */
    LoginPage.prototype.setupForm = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    LoginPage.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Logging in...',
                        })];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 6, 7, 8]);
                        return [4 /*yield*/, this.authenticationService.login(this.form.get('email').value, this.form.get('password').value)];
                    case 4:
                        _a.sent();
                        this.firebase
                            .saveTokenToServer(this.firebase.token())
                            .subscribe(function (event) {
                        });
                        return [4 /*yield*/, this.getTransphormer(false)];
                    case 5:
                        _a.sent();
                        this.authenticationService.setupAuthenticationState();
                        if (this.platform.is('cordova')) {
                            this.statusBar.styleLightContent();
                        }
                        this.navCtrl.navigateRoot('dashboard');
                        return [3 /*break*/, 8];
                    case 6:
                        e_1 = _a.sent();
                        this.toastSvc.flash(this.errorHandler.firstError(e_1));
                        return [3 /*break*/, 8];
                    case 7:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.goToRegister = function () {
        this.navCtrl.navigateForward('register');
    };
    LoginPage.prototype.goToForgotPassword = function () {
        this.navCtrl.navigateForward('forgot-password');
    };
    /**
     *
     * Finds the logged in user information
     *
     * @param handleCatch
     */
    LoginPage.prototype.getTransphormer = function (handleCatch) {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.onboardingService.fetchOnBoard()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_2 = _a.sent();
                        return [2 /*return*/, Promise.reject(e_2)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.backButtonHandler = function ($event) {
        $event.preventDefault();
        this.canLeaveAndroidBack = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:backbutton', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LoginPage.prototype, "backButtonHandler", null);
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_errors_errors_service__WEBPACK_IMPORTED_MODULE_2__["ErrorsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_6__["OnboardingService"],
            _services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/services/errors/errors.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/errors/errors.service.ts ***!
  \***************************************************/
/*! exports provided: ErrorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsService", function() { return ErrorsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorsService = /** @class */ (function () {
    function ErrorsService() {
    }
    // noinspection JSMethodCanBeStatic
    ErrorsService.prototype.stateColor = function (item) {
        if (item.invalid && !item.dirty) {
            return 'dark';
        }
        else if (item.invalid) {
            return 'danger';
        }
        else {
            return 'dark';
        }
    };
    // noinspection JSMethodCanBeStatic
    /**
     * Returns the first error key with first value in the error object
     * @param errors
     * @return string
     */
    ErrorsService.prototype.firstError = function (errors) {
        if (!this.checkIsCorrectStructure(errors)) {
            return '';
        }
        var keys = Object.keys(errors.list);
        return errors.list[keys[0]][0];
    };
    // noinspection JSMethodCanBeStatic
    /**
     * Returns the errors for the key
     * @param key
     * @param errors
     */
    ErrorsService.prototype.errorForKey = function (key, errors) {
        if (!this.checkIsCorrectStructure(errors)) {
            return [];
        }
        if (errors.list.hasOwnProperty(key)) {
            return errors.list[key];
        }
        return [];
    };
    // noinspection JSMethodCanBeStatic
    /**
     * Returns the first error value for the given key
     * @param key
     * @param errors
     */
    ErrorsService.prototype.firstErrorForKey = function (key, errors) {
        if (!this.checkIsCorrectStructure(errors)) {
            return '';
        }
        if (errors.list.hasOwnProperty(key)) {
            if (errors.list[key].length > 0) {
                return errors.list[key][0];
            }
        }
        return '';
    };
    // noinspection JSMethodCanBeStatic
    /**
     * Checks whether the given key has any errors
     * @param key
     * @param errors
     */
    ErrorsService.prototype.keyHasError = function (key, errors) {
        if (!this.checkIsCorrectStructure(errors)) {
            return false;
        }
        if (errors.list.hasOwnProperty(key)) {
            return errors.list[key].length > 0;
        }
        return false;
    };
    // noinspection JSMethodCanBeStatic
    /**
     * Checks whether the given key has any errors
     * @param errors
     */
    ErrorsService.prototype.hasError = function (errors) {
        if (!this.checkIsCorrectStructure(errors)) {
            return false;
        }
        for (var key in errors.list) {
            if (errors.list[key].length > 0) {
                return true;
            }
        }
        return false;
    };
    /**
     * Returns the error status value
     * @param errors
     */
    ErrorsService.prototype.status = function (errors) {
        if (!this.checkIsCorrectStructure(errors)) {
            return -1;
        }
        return errors.status;
    };
    ErrorsService.prototype.checkIsCorrectStructure = function (error, throwException) {
        if (throwException === void 0) { throwException = true; }
        var isCorrect = !(!error.hasOwnProperty('status') || !error.hasOwnProperty('list'));
        if (throwException && isCorrect === false) {
            throw error;
        }
        return isCorrect;
    };
    ErrorsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ErrorsService);
    return ErrorsService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map