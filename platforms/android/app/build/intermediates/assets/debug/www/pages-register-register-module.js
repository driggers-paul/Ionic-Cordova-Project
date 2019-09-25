(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terms/terms.component */ "./src/app/pages/register/terms/terms.component.ts");
/* harmony import */ var _components_logo_logo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/logo/logo.module */ "./src/app/components/logo/logo.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_logo_logo_module__WEBPACK_IMPORTED_MODULE_7__["LogoModule"]
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"], _terms_terms_component__WEBPACK_IMPORTED_MODULE_6__["TermsComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            entryComponents: [_terms_terms_component__WEBPACK_IMPORTED_MODULE_6__["TermsComponent"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/register/register.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button default-href=\"/\" text=\"Login\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Register</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n  <div class=\"global-container\">\r\n    <app-logo></app-logo>\r\n    <form [formGroup]=\"form\">\r\n      <div class=\"global-input\">\r\n        <ion-label position=\"stacked\">Email</ion-label>\r\n        <ion-input type=\"email\" formControlName=\"email\"></ion-input>\r\n      </div>\r\n      <div class=\"global-input\">\r\n        <ion-label position=\"stacked\">Password</ion-label>\r\n        <ion-input type=\"password\" formControlName=\"password\"></ion-input>\r\n      </div>\r\n      <div class=\"global-input\">\r\n        <ion-label position=\"stacked\">First Name</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"first_name\"></ion-input>\r\n      </div>\r\n      <div class=\"global-input\">\r\n        <ion-label position=\"stacked\">Last Name</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"last_name\"></ion-input>\r\n      </div>\r\n      <!-- <div class=\"global-input inline\">\r\n        <ion-label>I am a Trainer</ion-label>\r\n        <ion-checkbox (ionChange)=\"updateStatus()\"></ion-checkbox>\r\n      </div> -->\r\n      <ion-button class=\"global-margin-top-20\" (click)=\"terms()\" expand=\"full\" [disabled]=\"form.invalid\">\r\n        Submit\r\n      </ion-button>\r\n\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-select {\n  border: 1px solid #747d83;\n  border-radius: 3px;\n  margin-bottom: var(--default-margin); }\n\nion-row {\n  margin: 0 -5px; }\n\n.inline {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.terms-conditons {\n  display: flex;\n  align-items: center; }\n\n.terms-conditons p {\n    font-size: 16px;\n    padding: 0 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvRTpcXGlvbmljXFxWZXJ2ZUNvbW1lcmNlXFxOZXdEZXZcXG10c3QtYXBwL3NyY1xcYXBwXFxwYWdlc1xccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsb0NBQW9DLEVBQUE7O0FBR3RDO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUZyQjtJQUtJLGVBQWU7SUFDZixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VsZWN0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNzQ3ZDgzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1kZWZhdWx0LW1hcmdpbik7XHJcbn1cclxuXHJcbmlvbi1yb3cge1xyXG4gIG1hcmdpbjogMCAtNXB4O1xyXG59XHJcblxyXG4uaW5saW5lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGVybXMtY29uZGl0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terms/terms.component */ "./src/app/pages/register/terms/terms.component.ts");
/* harmony import */ var _services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/firebase/firebase.service */ "./src/app/services/firebase/firebase.service.ts");
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







var RegisterPage = /** @class */ (function () {
    // public trainer: 0;
    function RegisterPage(errorHandler, navCtrl, authenticationService, loadingCtrl, errorService, toastCtrl, modal, firebase) {
        this.errorHandler = errorHandler;
        this.navCtrl = navCtrl;
        this.authenticationService = authenticationService;
        this.loadingCtrl = loadingCtrl;
        this.errorService = errorService;
        this.toastCtrl = toastCtrl;
        this.modal = modal;
        this.firebase = firebase;
        this.password = 'password';
        this.acceptedAgreement = false;
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.setupForm();
    };
    RegisterPage.prototype.setupForm = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            account_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["TRANSPHORMER_ACCOUNT"]),
        });
    };
    RegisterPage.prototype.terms = function () {
        return __awaiter(this, void 0, void 0, function () {
            var termsModal, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.acceptedAgreement) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.modal.create({
                                component: _terms_terms_component__WEBPACK_IMPORTED_MODULE_5__["TermsComponent"],
                                backdropDismiss: false,
                            })];
                    case 1:
                        termsModal = _a.sent();
                        return [4 /*yield*/, termsModal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, termsModal.onDidDismiss()];
                    case 3:
                        result = _a.sent();
                        this.acceptedAgreement = result.data;
                        _a.label = 4;
                    case 4:
                        if (this.acceptedAgreement) {
                            this.register();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, toast, e_1, toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Please wait',
                        })];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 7, 10, 11]);
                        return [4 /*yield*/, this.authenticationService.register(this.form.get('email').value, this.form.get('password').value, this.form.get('first_name').value, this.form.get('last_name').value, this.form.get('account_type').value)];
                    case 4:
                        _a.sent();
                        this.firebase.saveTokenToServer(this.firebase.token());
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Registration is successful.',
                                duration: 3000,
                            })];
                    case 5:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 6:
                        _a.sent();
                        this.navCtrl.navigateRoot('info-gathering');
                        return [3 /*break*/, 11];
                    case 7:
                        e_1 = _a.sent();
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: this.errorService.firstError(e_1),
                                duration: 3000,
                            })];
                    case 8:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 9:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 10:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/pages/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_errors_errors_service__WEBPACK_IMPORTED_MODULE_2__["ErrorsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_2__["ErrorsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ }),

/***/ "./src/app/pages/register/terms/terms.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/register/terms/terms.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Terms and Conditions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <div class=\"content\">\r\n    <h6 class=\"heading\">Agreement</h6>\r\n    <p class=\"text\">\r\n      These Terms of Use (the <b>\"Agreement\"</b>) constitute a legally binding agreement by and between 1st Phorm\r\n      International, LLC (hereinafter, <b>\"1st Phorm International, LLC\"</b>) and you (<b>\"You\"</b> or <b>\"Your\"</b>)\r\n      concerning Your use of 1st Phorm International, LLC's website located at https://www.1st Phorm.com or\r\n      https://www.mytransphormationstartstoday.com (the <b>\"Website\"</b>) and 1st Phorm International, LLC mobile phone\r\n      applications (the <b>\"Applications\"</b>) and the services available through the Website and Applications (the <b>\"Services\"</b>).\r\n      By using the Services, You represent and warrant that You have read and understand, and agree to be bound by,\r\n      this Agreement and 1st Phorm International, LLC's Privacy Policy, which is incorporated herein by reference and\r\n      made part of this Agreement. IF YOU DO NOT UNDERSTAND THIS AGREEMENT, OR DO NOT AGREE TO BE BOUND BY THESE TERMS,\r\n      YOU MAY NOT USE THE SERVICES.\r\n    </p>\r\n    <h6 class=\"heading\">privacy policy</h6>\r\n    <p class=\"text\">\r\n      By using the Services, You consent to the collection and use of certain information about You, as specified in\r\n      the <a>Privacy Policy</a>. Use of information we collect now is subject to the Privacy Policy in effect at the\r\n      time such information is used.</p>\r\n    <h6 class=\"heading\">CHANGES TO AGREEMENT</h6>\r\n    <p class=\"text\">\r\n      1ST PHORM INTERNATIONAL, LLC RESERVES THE RIGHT TO CHANGE THIS AGREEMENT AT ANY TIME UPON NOTICE TO YOU, TO BE\r\n      GIVEN BY: (I) THE POSTING OF A NEW VERSION; AND/OR (II) A CHANGE NOTICE ON THE WEBSITE OR APPLICATION. IT IS YOUR\r\n      RESPONSIBILITY TO REVIEW THIS AGREEMENT PERIODICALLY. You will be deemed to have agreed to any such modification\r\n      or amendment by Your decision to continue using the Services following the date in which the modified or amended\r\n      Agreement is posted.\r\n    </p>\r\n    <h6 class=\"heading\">ELIGIBILITY</h6>\r\n    <p class=\"text\">\r\n      BY USING THE SERVICES, YOU REPRESENT AND WARRANT THAT YOU ARE AT LEAST 18 YEARS OLD AND ARE OTHERWISE LEGALLY\r\n      QUALIFIED TO ENTER INTO AND FORM CONTRACTS UNDER APPLICABLE LAW. This Agreement is void where prohibited.</p>\r\n    <h6 class=\"heading\">LICENSE</h6>\r\n    <p class=\"text\">\r\n      Subject to Your compliance with the terms and conditions of this Agreement, 1st Phorm International, LLC grants\r\n      You a non¬exclusive, non¬ sublicensable, revocable, non¬transferable license to use the Services through the\r\n      Website or by downloading and installing our Applications. THE SERVICES ARE FOR YOUR PERSONAL AND NON¬COMMERCIAL\r\n      USE. The Services, including the Website and the Applications, or any portion thereof, may not be reproduced,\r\n      duplicated, copied, modified, sold, resold, distributed, visited, or otherwise exploited for any commercial\r\n      purpose without the express written consent of 1st Phorm International, LLC. Except as expressly set forth\r\n      herein, this Agreement grants You no rights in or to the intellectual property of 1st Phorm International, LLC or\r\n      any other party. The license granted in this section is conditioned on Your compliance with the terms and\r\n      conditions of this Agreement. In the event that You breach any provision of this Agreement, Your rights under\r\n      this section will immediately terminate.</p>\r\n    <p class=\"text\">\r\n      When accessing the Services through the Applications that were downloaded from an app store or app distribution\r\n      platform, such as the Apple App Store or Google Play, (the “App Provider”), You acknowledge and agree that: (a)\r\n      this Agreement are concluded between us, and not with the App Provider, and that we are solely responsible for\r\n      the Applications (not the App Provider); (b) the App Provider has no obligation to furnish any maintenance and\r\n      support services with respect to the Applications; (c) in the event of any failure of the Applications to conform\r\n      to any applicable warranty, (i) you may notify the App Provider and the App Provider will refund the purchase\r\n      price for the Applications to you (if applicable), (ii) to the maximum extent permitted by applicable law, the\r\n      App Provider will have no other warranty obligation whatsoever with respect to the Applications, and (iii) any\r\n      other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any\r\n      warranty will be our responsibility; (d) the App Provider is not responsible for addressing any claims you have\r\n      or any claims of any third party relating to the Applications or your possession and use of the Applications,\r\n      including, but not limited to: (i) product liability claims; (ii) any claim that the app fails to conform to any\r\n      applicable legal or regulatory requirement; and (iii) claims arising under consumer protection or similar\r\n      legislation; (e) in the event of any third party claim that the Applications or your possession and use of that\r\n      Applications infringes that third party’s intellectual property rights, we will be responsible for the\r\n      investigation, defense, settlement and discharge of any such intellectual property infringement claim to the\r\n      extent required by this Agreement; (f) the App Provider, and its subsidiaries, are third party beneficiaries of\r\n      this Agreement as it relates to your license of the Applications, and that, upon your acceptance of the terms and\r\n      conditions of this Agreement, the App Provider will have the right (and will be deemed to have accepted the\r\n      right) to enforce this Agreement as related to your license of the Applications against you as a third party\r\n      beneficiary thereof; and (g) you must also comply with all applicable third party terms of service when using the\r\n      Applications.\r\n    </p>\r\n    <h6 class=\"heading\"> THE SERVICE DOES NOT PROVIDE PROFESSIONAL MEDICAL SERVICES OR ADVICE; NO DOCTOR¬ PATIENT\r\n      RELATIONSHIP</h6>\r\n    <p class=\"text\">\r\n      1st Phorm International, LLC provides the Services for informational purposes only. THE SERVICES DO NOT CONTAIN\r\n      OR CONSTITUTE, AND SHOULD NOT BE INTERPRETED AS, MEDICAL ADVICE OR OPINION. 1st Phorm International, LLC and the\r\n      accountability coaches, referred to as “Transphormation Advisors” are not medical professionals, and neither 1st\r\n      Phorm International, LLC or Transphormation Advisors provide medical services or render medical advice. The\r\n      Services are not a substitute for the advice of a medical professional, and the information made available on or\r\n      through the Services should not be relied upon when making medical decisions, or to diagnose or treat a medical\r\n      or health condition. If you require medical advice or services, You should consult a medical professional. YOUR\r\n      USE OF THE SERVICES DOES NOT CREATE A DOCTOR¬PATIENT RELATIONSHIP BETWEEN YOU AND 1ST PHORM INTERNATIONAL, LLC OR\r\n      YOU AND YOUR TRANSPHORMATION ADVISOR IF YOU CHOOSE TO HAVE ONE.\r\n    </p>\r\n    <p class=\"text\">\r\n      YOU HEREBY AGREE THAT, BEFORE USING THE SERVICES, YOU SHALL CONSULT YOUR PHYSICIAN, PARTICULARLY IF YOU ARE AT\r\n      RISK FOR PROBLEMS RESULTING FROM EXERCISE OR CHANGES IN YOUR DIET.\r\n    </p>\r\n    <h6 class=\"heading\">FOOD DATABASE AND NUTRITIONAL INFORMATION</h6>\r\n    <p class=\"text\">\r\n      1st Phorm International, LLC's food database contains a combination of nutritional information entered directly\r\n      by 1st Phorm International, LLC and nutritional information entered by 1st Phorm International, LLC members\r\n      (\"Food Database\"). Any 1st Phorm International, LLC member can contribute nutritional information to the Food\r\n      Database, as well as edit existing nutritional information. Please be advised that nutritional information found\r\n      in 1st Phorm International, LLC's Food Database has not been reviewed by persons with the expertise required to\r\n      provide You with complete, accurate, or reliable information. 1ST PHORM INTERNATIONAL, LLC DOES NOT (I) GUARANTEE\r\n      THE ACCURACY, COMPLETENESS, OR USEFULNESS OF ANY NUTRITIONAL INFORMATION IN THE FOOD DATABASE; OR (II) ADOPT,\r\n      ENDORSE OR ACCEPT RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY SUCH NUTRITIONAL INFORMATION. UNDER NO\r\n      CIRCUMSTANCES WILL 1ST PHORM INTERNATIONAL, LLC BE RESPONSIBLE FOR ANY LOSS OR DAMAGE RESULTING FROM YOUR\r\n      RELIANCE ON NUTRITIONAL INFORMATION. You are solely responsible for ensuring that any nutritional information in\r\n      the Food Database is accurate, complete and useful. Nutritional information in the Food Database may not be\r\n      reproduced, duplicated, copied, modified, sold, resold, distributed, visited, or otherwise exploited for any\r\n      commercial purpose without the express written consent of 1st Phorm International, LLC.\r\n    </p>\r\n    <h6 class=\"heading\">RELIANCE ON THIRD¬PARTY CONTENT</h6>\r\n    <p class=\"text\">\r\n      Opinions, advice, statements, or other information, including, without limitation, food, nutrition and exercise\r\n      data, made available by means of the Services by third parties, including Transphormation Advisors that are or\r\n      are not independent contractors of 1st Phorm International, LLC, are those of their respective authors, and\r\n      should not necessarily be relied on. Such authors are solely responsible for such content. 1ST PHORM\r\n      INTERNATIONAL, LLC DOES NOT: (I) GUARANTEE THE ACCURACY, COMPLETENESS, OR USEFULNESS OF ANY THIRD¬PARTY\r\n      INFORMATION ON THE SERVICE; OR (II) ADOPT, ENDORSE OR ACCEPT RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF\r\n      ANY OPINION, ADVICE OR STATEMENT MADE BY A THIRD¬PARTY BY MEANS OF THE SERVICES. UNDER NO CIRCUMSTANCES WILL 1ST\r\n      PHORM INTERNATIONAL, LLC BE RESPONSIBLE FOR ANY LOSS OR DAMAGE RESULTING FROM YOUR RELIANCE ON INFORMATION OR\r\n      OTHER CONTENT POSTED ON THE SERVICES OR TRANSMITTED TO OR BY ANY THIRD¬PARTY. You also understand that by\r\n      accessing and using the Services, You may encounter information, materials and subject matter that You or others\r\n      may deem offensive, indecent, or objectionable. You agree to use the Services at Your sole risk and that 1st\r\n      Phorm International, LLC and its affiliates, partners, suppliers and licensors shall have no liability to You for\r\n      information, material or subject matter that is found to be offensive, indecent, or objectionable.\r\n    </p>\r\n    <h6 class=\"heading\">RISK ASSUMPTION</h6>\r\n    <p class=\"text\">\r\n      YOU KNOWINGLY AND FREELY ASSUME ALL RISK WHEN USING THE WEBSITE, APPLICATIONS AND SERVICES. YOU, ON BEHALF OF\r\n      YOURSELF, YOUR PERSONAL REPRESENTATIVES AND YOUR HEIRS, HEREBY VOLUNTARILY AGREE TO RELEASE, WAIVE, DISCHARGE,\r\n      HOLD HARMLESS, DEFEND AND INDEMNIFY 1ST PHORM INTERNATIONAL, LLC AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS,\r\n      AFFILIATES, REPRESENTATIVES, SUBLICENSEES, SUCCESSORS, AND ASSIGNS FROM ANY AND ALL CLAIMS, ACTIONS OR LOSSES FOR\r\n      BODILY INJURY, PROPERTY DAMAGE, WRONGFUL DEATH, EMOTIONAL DISTRESS, LOSS OF SERVICES OR OTHER DAMAGES OR HARM,\r\n      WHETHER TO YOU OR TO THIRD PARTIES, WHICH MAY RESULT FROM YOUR USE OF THE SERVICES.\r\n    </p>\r\n    <h6 class=\"heading\">USER INFORMATION; PASSWORD PROTECTION</h6>\r\n    <p class=\"text\">In connection with Your use of certain Services, You are required to complete a registration form.\r\n      You represent and warrant that all user information You provide on the registration form or otherwise in\r\n      connection with Your use of the Services will be current, complete and accurate, and that You will update that\r\n      information as necessary to maintain its completeness and accuracy by visiting your personal profile. For\r\n      additional information, see the section concerning \"User Ability to Access, Update, and Correct Personal\r\n      Information\" in 1st Phorm International, LLC's Privacy Policy.\r\n    </p>\r\n    <p class=\"text\">You will also be asked to provide a user name and password in connection with Your use of certain\r\n      of the Services. You are entirely responsible for maintaining the confidentiality of Your password. You may not\r\n      use the account, user name, or password of any other Member at any time. You agree to notify 1st Phorm\r\n      International, LLC immediately of any unauthorized use of Your account, user name, or password. 1st Phorm\r\n      International, LLC shall not be liable for any loss that You incur as a result of someone else using Your\r\n      password, either with or without Your knowledge. You may be held liable for any losses incurred by 1st Phorm\r\n      International, LLC, its affiliates, officers, directors, employees, consultants, agents, and representatives due\r\n      to someone else’s use of Your account or password.</p>\r\n    <h6 class=\"heading\">PUBLIC PROFILES; INFORMATION PROVIDED BY MEMBERS</h6>\r\n    <p class=\"text\">As part of registration, members must create public profiles, which may contain certain identifying\r\n      information (such as age, location, total weight loss, ethnicity, marital status, religion, etc.). In addition,\r\n      members have the option to post photographs, video links and other information (such as likes, dislikes,\r\n      intentions and goals) on their public profiles. 1st Phorm International, LLC relies on its members to provide\r\n      current and accurate information, and 1st Phorm International, LLC does not, and cannot, investigate information\r\n      contained in member public profiles. Accordingly, 1st Phorm International, LLC must assume that information\r\n      contained in each member public profile is current and accurate. 1ST PHORM INTERNATIONAL, LLC DOES NOT REPRESENT,\r\n      WARRANT OR GUARANTEE THE CURRENCY OR ACCURACY OF PUBLIC PROFILE INFORMATION, AND HEREBY DISCLAIMS ALL\r\n      RESPONSIBILITY AND LIABILITY FOR ANY INFORMATION PROVIDED BY MEMBERS BY MEANS OF PUBLIC PROFILES OR OTHERWISE IN\r\n      CONNECTION WITH THE SERVICES.\r\n    </p>\r\n    <h6 class=\"heading\">\r\n      YOUR INTERACTIONS WITH OTHER MEMBERS\r\n    </h6>\r\n    <p class=\"text\">\r\n      YOU ARE SOLELY RESPONSIBLE FOR YOUR INTERACTIONS WITH OTHER MEMBERS. YOU ACKNOWLEDGE AND UNDERSTAND THAT 1ST\r\n      PHORM INTERNATIONAL, LLC HAS NOT, AND DOES NOT, IN ANY WAY: (A) SCREEN ITS MEMBERS; (B) INQUIRE INTO THE\r\n      BACKGROUNDS OF ITS MEMBERS; OR (C) REVIEW OR VERIFY THE STATEMENTS OF ITS MEMBERS, INCLUDING WITHOUT LIMITATION\r\n      INFORMATION OR REPRESENTATIONS CONTAINED IN PUBLIC PROFILES. YOU HEREBY AGREE TO EXERCISE REASONABLE PRECAUTION\r\n      IN ALL INTERACTIONS WITH OTHER MEMBERS, PARTICULARLY IF YOU DECIDE TO MEET ANOTHER MEMBER IN PERSON. 1ST PHORM\r\n      INTERNATIONAL, LLC DOES NOT REPRESENT, WARRANT, ENDORSE OR GUARANTEE THE CONDUCT OF ITS MEMBERS OR THEIR\r\n      COMPATIBILITY WITH YOU. IN NO EVENT SHALL 1ST PHORM INTERNATIONAL, LLC BE LIABLE FOR INDIRECT, SPECIAL,\r\n      INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR RELATING TO ANY MEMBER’S CONDUCT IN CONNECTION WITH SUCH\r\n      MEMBER’S USE OF THE SERVICES, INCLUDING, WITHOUT LIMITATION, BODILY INJURY, PROPERTY DAMAGE, WRONGFUL DEATH,\r\n      EMOTIONAL DISTRESS, LOSS OF SERVICES OR ANY OTHER DAMAGES RESULTING FROM COMMUNICATIONS OR MEETINGS BETWEEN\r\n      MEMBERS. YOU KNOWINGLY AND FREELY ASSUME ALL RISK WHEN USING THE WEBSITE, APPLICATIONS AND SERVICES.\r\n    </p>\r\n    <h6 class=\"heading\">\r\n      MEMBER DISPUTES\r\n    </h6>\r\n    <p class=\"text\">\r\n      1st Phorm International, LLC reserves the right, but disclaims any perceived, implied or actual duty, to monitor\r\n      disputes between members. You agree to hold 1st Phorm International, LLC harmless in connection with any dispute\r\n      or claim You make against any other member.\r\n    </p>\r\n    <h6 class=\"heading\">\r\n      PREMIUM VERSIONS OF THE WEBSITES AND/OR APPLICATIONS\r\n    </h6>\r\n    <p class=\"text\">\r\n      <b>1st Phorm International, LLC offers certain premium versions of the Websites, Applications or Services (the\r\n        “Premium Services”) in exchange for the payment of fees. The Premium Services provide you access</b> to certain\r\n      enhanced features and functionality (e.g., communication with a Transphormation Advisor, access to live and\r\n      recorded communication, etc.). By signing up for and using the Premium Services, you agree to pay any fees due\r\n      for and incurred by you in your usage of the Premium Services.\r\n    </p>\r\n    <p class=\"text\">\r\n      When you sign up for the Premium Services, your preferred payment method (“Payment Method”) will be the payment\r\n      method associated with your Apple App Store or GooglePlay Store account. You may switch to a different Payment\r\n      Method by updating your payment method with those app providers.\r\n    </p>\r\n    <p class=\"text\">\r\n      You may elect to make payment for the Premium Services on a monthly, quarterly, or annual subscription basis. All\r\n      fees due for the Premium Services are payable in advance. Fees due for the Premium Services will be billed\r\n      automatically to the Payment Method at the start of the monthly or annual subscription period, as applicable, and\r\n      will auto¬renew until you elect to cancel your access to Premium Services. The subscription renewal fees will be\r\n      the same as the initial charges unless you are otherwise notified in advance. You expressly authorize us to\r\n      charge your Payment Method for the appropriate fees charged for the Premium Services and for any other purchases\r\n      you elect to make via 1st Phorm International, LLC.\r\n    </p>\r\n    <p class=\"text\">\r\n      We reserve the right to terminate your access to a Premium Service for any nonpayment of associated charges. If\r\n      you want to discontinue a Premium Service, then you must cancel that Premium Service per applicable cancellation\r\n      procedure. The cancellation of a Premium Service will go into effect at the end of your current billing cycle,\r\n      and you will have the same level of access to the Premium Service through the remainder of such billing cycle.\r\n      For example, if you are billed on a monthly subscription basis and cancel during a given month, you will be\r\n      charged for the entirety of that month and maintain access to the Premium Services through the end of that month.\r\n      ALL PURCHASES OF PREMIUM SERVICES ARE FINAL, AND NO REFUND WILL BE GIVEN FOR UNUSED PORTIONS OF ANY PREMIUM\r\n      SERVICES UPON TERMINATION OR CANCELATION.\r\n    </p>\r\n    <p class=\"text\">\r\n      We reserve the right to increase fees charged for the Premium Services or to institute new fees at any time upon\r\n      reasonable notice posted in advance on the Websites and/or Applications. Your only remedy regarding the increase\r\n      of fees or imposition of new fees in connection with the Premium Services is to cancel the Premium Services per\r\n      the cancellation procedure.\r\n    </p>\r\n    <h6 class=\"heading\">\r\n      CONSENT TO RECEIVE EMAIL FROM 1ST PHORM INTERNATIONAL, LLC\r\n    </h6>\r\n    <p class=\"text\">\r\n      In providing the Services, You may receive periodic email communications regarding the Services, new product\r\n      offers and information regarding the Services, which are part of the Services and which You cannot opt out of\r\n      receiving. You may also receive periodic promotions and other offers or materials 1st Phorm International, LLC\r\n      believes might be of interest to You. You can opt¬ out of receiving these promotional messages at any time by (a)\r\n      following the unsubscribe instructions contained in each newsletter; or (b) changing the email preferences in\r\n      Your account.\r\n    </p>\r\n    <h6 class=\"heading\">\r\n      CONSENT TO RECEIVE EMAIL COMMUNICATIONS FROM MEMBERS\r\n    </h6>\r\n    <p class=\"text\">\r\n      By finding and connecting with Your friends and other members, You may receive electronic communications,\r\n      including email and instant messages from other Website members. You can manage the messages You receive from\r\n      other members by changing the messaging preferences in Your account.\r\n    </p>\r\n    <h6 class=\"heading\">\r\n      THIRD¬PARTY WEBSITES\r\n    </h6>\r\n    <p class=\"text\">\r\n      The Service includes links to websites of third parties (<b>\"Third¬Party Websites\"</b>), some of whom may have\r\n      established relationships with 1st Phorm International, LLC and some of whom may not. 1st Phorm International,\r\n      LLC does not have control over the content and performance of Third¬Party Websites. 1ST PHORM INTERNATIONAL, LLC\r\n      HAS NOT REVIEWED, AND CANNOT REVIEW OR CONTROL, ALL OF THE MATERIAL, INCLUDING COMPUTER SOFTWARE OR OTHER GOODS\r\n      OR SERVICES, MADE AVAILABLE ON OR THROUGH THIRD¬PARTY WEBSITES. ACCORDINGLY, 1ST PHORM INTERNATIONAL, LLC DOES\r\n      NOT REPRESENT, WARRANT OR ENDORSE ANY THIRD¬PARTY WEBSITE, OR THE ACCURACY, CURRENCY, CONTENT, FITNESS,\r\n      LAWFULNESS OR QUALITY OF THE INFORMATION MATERIAL, GOODS OR SERVICES AVAILABLE THROUGH THIRD¬PARTY WEBSITES. 1ST\r\n      PHORM INTERNATIONAL, LLC DISCLAIMS, AND YOU AGREE TO ASSUME, ALL RESPONSIBILITY AND LIABILITY FOR ANY DAMAGES OR\r\n      OTHER HARM, WHETHER TO YOU OR TO THIRD PARTIES, RESULTING FROM YOUR USE OF THIRD-PARTY WEBSITES.\r\n    </p>\r\n    <p class=\"text\">\r\n      YOU AGREE THAT, WHEN LINKING TO OR OTHERWISE ACCESSING OR USING A THIRD-PARTY WEBSITE, YOU ARE RESPONSIBLE FOR:\r\n      (I) TAKING PRECAUTIONS AS NECESSARY TO PROTECT YOU AND YOUR COMPUTER SYSTEMS FROM VIRUSES, WORMS, TROJAN HORSES,\r\n      MALICIOUS CODE AND OTHER HARMFUL OR DESTRUCTIVE CONTENT; (II) ANY DOWNLOADING, USE OR PURCHASE OF MATERIAL THAT\r\n      IS OBSCENE, INDECENT, OFFENSIVE, OR OTHERWISE OBJECTIONABLE OR UNLAWFUL, OR THAT CONTAINS TECHNICAL INACCURACIES,\r\n      TYPOGRAPHICAL MISTAKES AND OTHER ERRORS; (III) ANY DOWNLOADING, USE OR PURCHASE OF MATERIAL THAT VIOLATES THE\r\n      PRIVACY OR PUBLICITY RIGHTS, OR INFRINGES THE INTELLECTUAL PROPERTY AND OTHER PROPRIETARY RIGHTS OF THIRD\r\n      PARTIES, OR THAT IS SUBJECT TO ADDITIONAL TERMS AND CONDITIONS, STATED OR UNSTATED; (IV) ALL FINANCIAL CHARGES OR\r\n      OTHER LIABILITIES TO THIRD PARTIES RESULTING FROM TRANSACTIONS OR OTHER ACTIVITIES; AND (V) READING AND\r\n      UNDERSTANDING ANY TERMS OF USE OR PRIVACY POLICIES THAT APPLY TO THOSE THIRD¬PARTY WEBSITE.\r\n    </p>\r\n    <h6 class=\"heading\">\r\n      THIRD¬PARTY SERVICES\r\n    </h6>\r\n    <p class=\"text\">\r\n      Certain features, aspects, products and services offered through the Services are provided, in whole or in part,\r\n      by third parties (<b>\"Third¬Party Services\"</b> as provided by <b>\"Third¬Party Service Providers\"</b>). In order\r\n      to use Third¬Party Services, You may be required to enter into additional terms and conditions with Third¬Party\r\n      Service Providers. IF YOU DO NOT UNDERSTAND OR DO NOT AGREE TO BE BOUND BY THOSE ADDITIONAL TERMS AND CONDITIONS,\r\n      YOU MAY NOT USE THE RELATED THIRD¬PARTY SERVICES. In the event of any inconsistency between terms and conditions\r\n      relating to Third¬Party Services and the terms and conditions of this Agreement, those additional terms and\r\n      conditions will control, although only with respect to such Third¬Party Services. The providers of Third¬Party\r\n      Service Providers may collect and use certain information about you, as specified in the Third¬Party Service\r\n      Providers’ privacy policies. Prior to providing information to any Third¬Party Service Provider, you should\r\n      review their privacy policy. IF YOU DO NOT UNDERSTAND OR DO NOT AGREE TO THE TERMS OF A THIRD¬PARTY SERVICE\r\n      PROVIDER’S PRIVACY POLICY, YOU SHOULD NOT USE THE RELATED THIRD¬PARTY SERVICES. 1ST PHORM INTERNATIONAL, LLC\r\n      HEREBY DISCLAIMS ALL RESPONSIBILITY AND LIABILITY FOR ANY OF YOUR INFORMATION COLLECTED OR USED BY THIRD¬PARTY\r\n      SERVICE PROVIDERS.\r\n    </p>\r\n    <h6 class=\"heading\">\r\n      USER CONTENT\r\n    </h6>\r\n    <p class=\"text\">\r\n      <b>\"User Content\"</b> is any content, materials or information (e.g., any text, information, photos, images,\r\n      video, and other content and material, including nutritional information contributed to the Food Database) that\r\n      You upload or post to, or transmit, display, perform or distribute by means of, the Services, whether in\r\n      connection with Your use of Website, Application, or through the use of any Third Party Websites or Third Party\r\n      Services or otherwise. You hereby grant 1st Phorm International, LLC and its officers, directors, employees,\r\n      agents, affiliates, representatives, service providers, partners, sublicensees, successors, and assigns\r\n      (collectively, the <b>\"1st Phorm International, LLC Parties\"</b>) a perpetual, fully paid¬up, worldwide,\r\n      sublicensable, irrevocable, assignable license to copy, distribute, publish, transmit, publicly display or\r\n      perform, edit, modify, translate, reformat and otherwise use User Content in connection with the operation of the\r\n      Services or any other similar services or related business, in any medium now existing or later devised,\r\n      including without limitation in advertising and publicity. You further agree that this license includes the right\r\n      for the 1st Phorm International, LLC Parties to publish, display or otherwise use and make available your User\r\n      Content and possibly your name and/or any user name of yours in connection with their exercise of the license\r\n      granted under this section. You agree to waive, and hereby waive, any claims arising from or relating to the\r\n      exercise by the 1st Phorm International, LLC Parties of the rights granted under this section, including without\r\n      limitation any claims relating to your rights of personal privacy and publicity. You will not be compensated for\r\n      any exercise of the license granted under this section.\r\n    </p>\r\n    <p class=\"text\">\r\n      You hereby represent and warrant that You own all rights, title and interest in and to User Content or are\r\n      otherwise authorized to grant the rights provided the 1st Phorm International, LLC Parties under this section.\r\n      You represent and warrant that, when using the Website, Applications and Services, You will obey the law and\r\n      respect the intellectual property rights of others. Your use of the Website and Services is at all times governed\r\n      by and subject to laws regarding copyright ownership and use of intellectual property generally. You agree not to\r\n      upload, post, transmit, display, perform or distribute any content, information or other materials in violation\r\n      of any third party’s copyrights, trademarks, or other intellectual property or proprietary rights. YOU SHALL BE\r\n      SOLELY RESPONSIBLE FOR ANY VIOLATIONS OF ANY LAWS AND FOR ANY INFRINGEMENTS OF THIRD¬PARTY\r\n    </p>\r\n    <p class=\"text\">\r\n      RIGHTS CAUSED BY YOUR USE OF THE WEBSITE, APPLICATIONS AND SERVICES. YOU BARE THE SOLE BURDEN OF PROVING THAT\r\n      CONTENT, INFORMATION OR OTHER MATERIALS DO NOT VIOLATE ANY LAWS OR THIRD¬PARTY RIGHTS.\r\n    </p>\r\n    <p class=\"text\">\r\n      1st Phorm International, LLC reserves the right to (i) remove, suspend, edit or modify any User Content in its\r\n      sole discretion, including without limitation any User Content at any time, without notice to you and for any\r\n      reason (including, but not limited to, upon receipt of claims or allegations from third parties or authorities\r\n      relating to such User Content or if 1st Phorm International, LLC is concerned that you may have violated these\r\n      Terms of Use), or for no reason at all and (ii) to remove, suspend or block any User Content submissions. 1st\r\n      Phorm International, LLC also reserves the right to access, read, preserve, and disclose any information as 1st\r\n      Phorm International, LLC reasonably believes is necessary to (i) satisfy any applicable law, regulation, legal\r\n      process or governmental request, (ii) enforce these Terms of Use, including investigation of potential violations\r\n      hereof, (iii) detect, prevent, or otherwise address fraud, security or technical issues, (iv) respond to user\r\n      support requests, or (v) protect the rights, property or safety of 1st Phorm International, LLC, its users and\r\n      the public.\r\n    </p>\r\n    <h6 class=\"heading\">\r\n      PUBLIC FORUMS\r\n    </h6>\r\n    <p class=\"text\">\r\n      <b>\"Public Forum\"</b> is any area, site or feature offered as part of the Services (including without limitation\r\n      public profiles, discussion forums, message boards, blogs, chat rooms, emails or instant messaging features) that\r\n      enables You (a) to upload, submit, post, display, perform, distribute and/or view User Content, and/or (b) to\r\n      communicate, share, or exchange User Content with other members or visitors. You acknowledge that Public Forums,\r\n      and features contained therein, are for public and not private communications. You further acknowledge that\r\n      anything You upload, submit, post, transmit, communicate, share or exchange by means of any Public Forum may be\r\n      viewed on the Internet by the general public, and therefore, You have no expectation of privacy with regard to\r\n      any such submission or posting. You are, and shall remain, solely responsible for the User Content you upload,\r\n      submit, post, transmit, communicate, share or exchange by means of any Public Forum and for the consequences of\r\n      submitting or posting same. You agree to abide by the Community Guidelines when transmitting or posting any User\r\n      Content to any Public Forum. 1ST PHORM INTERNATIONAL, LLC DISCLAIMS ANY PERCEIVED, IMPLIED OR ACTUAL DUTY TO\r\n      MONITOR PUBLIC FORUMS AND SPECIFICALLY DISCLAIMS ANY RESPONSIBILITY OR LIABILITY FOR INFORMATION PROVIDED\r\n      THEREON.\r\n    </p>\r\n    <h6 class=\"heading\">\r\n      YOUR RESPONSIBILITY FOR DEFAMATORY COMMENTS\r\n    </h6>\r\n    <p class=\"text\">\r\n      You agree and understand that you may be held legally responsible for damages suffered by other members or third\r\n      parties as the result of Your remarks, information, feedback or other content posted or made available on the\r\n      Services that is deemed defamatory or otherwise legally actionable. Under the Federal Communications Decency Act\r\n      of 1996, 1st Phorm International, LLC is not legally responsible, nor can it be held liable for damages of any\r\n      kind, arising out of or in connection to any defamatory or otherwise legally actionable remarks, information,\r\n      feedback or other content posted or made available on the Services.\r\n    </p>\r\n    <h6 class=\"heading\">\r\n      OBJECTIONABLE CONTENT\r\n    </h6>\r\n    <p class=\"text\">\r\n      You represent and warrant that you shall not use the Services to upload, post, transmit, display, perform or\r\n      distribute any content, information or materials that: (a) are libelous, defamatory, abusive, or threatening,\r\n      excessively violent, harassing, obscene, lewd, lascivious, filthy, or pornographic; (b) constitute child\r\n      pornography; (c) solicit personal information; (d) incite, encourage or threaten physical harm against another;\r\n      (e) promote or glorify racial intolerance, use hate and/or racist terms, or signify hate towards any person or\r\n      group of people; (f) glamorize the use of hard core illegal substances and drugs; (g) advertise or otherwise\r\n      solicit funds or constitute a solicitation for goods or services; (h) violate any provision of this Agreement or\r\n      any other 1st Phorm International, LLC agreement, guidelines or policy; or (i) is generally offensive or in bad\r\n      taste, as determined by 1st Phorm International, LLC (collectively, <b>\"Objectionable Content\"</b>). 1ST PHORM\r\n      INTERNATIONAL, LLC DISCLAIMS ANY PERCEIVED, IMPLIED OR ACTUAL DUTY TO MONITOR THE CONTENTS OF THE SERVICES AND\r\n      SPECIFICALLY DISCLAIMS ANY RESPONSIBILITY OR LIABILITY FOR INFORMATION PROVIDED HEREON. Without limiting any of\r\n      its other remedies, 1st Phorm International, LLC reserves the right to terminate Your use of the Services or Your\r\n      uploading, posting, transmission, display, performance or distribution of Objectionable Content. 1st Phorm\r\n      International, LLC, in its sole discretion, may delete any Objectionable Content from its servers. 1st Phorm\r\n      International, LLC intends to cooperate fully with any law enforcement officials or agencies in the investigation\r\n      of any violation of this Agreement or of any applicable laws.\r\n    </p>\r\n    <h3 class=\"sub-heading\">\r\n      PROHIBITED USES\r\n    </h3>\r\n    <p class=\"text\">\r\n      1st Phorm International, LLC imposes certain restrictions on Your use of the Services. You represent and warrant\r\n      that you will not: (a) \"stalk\" or otherwise harass any person, or contact any person who has requested not to be\r\n      contacted; (b) provide false, misleading or inaccurate information to 1st Phorm International, LLC or any other\r\n      member; (c) impersonate, or otherwise misrepresent affiliation, connection or association with, any person or\r\n      entity; (d) create more than one unique public profile; (e) harvest or otherwise collect information about 1st\r\n      Phorm International, LLC users, including email addresses and phone numbers; (f) use or attempt to use any\r\n      engine, software, tool, agent, or other device or mechanism (including without limitation browsers, spiders,\r\n      robots, avatars, or intelligent agents) to harvest or otherwise collect information from the Website for any use,\r\n      including without limitation use on third¬party websites; (g) access content or data not intended for You, or log\r\n      onto a server or account that You are not authorized to access; (h) attempt to probe, scan, or test the\r\n      vulnerability of the Services, the Website, the Applications, or any associated system or network, or breach\r\n      security or authentication measures without proper authorization; (i) interfere or attempt to interfere with the\r\n      use of the Website, the Applications or the Services by any other user, host or network, including, without\r\n      limitation by means of submitting a virus, overloading, \"flooding,\" \"spamming,\" \"mail bombing,\" or \"crashing\";\r\n      (j) use the Services to send unsolicited e¬ mail, including without limitation promotions or advertisements for\r\n      products or services; (k) forge any TCP/IP packet header or any part of the header information in any e¬mail or\r\n      in any uploading or posting to, or transmission, display, performance or distribution by means of, the Services;\r\n      (l) post or transmit any unsolicited advertising, promotional materials, \"junk mail\", \"spam,\" \"chain letters,\"\r\n      \"pyramid schemes\" or any other form of solicitation or any non¬resume information such as opinions or notices,\r\n      commercial or otherwise; or (m) attempt to modify, reverse¬engineer, decompile, disassemble or otherwise reduce\r\n      or attempt to reduce to a human¬perceivable form any of the source code used by the 1st Phorm International, LLC\r\n      Parties in providing the Website or Applications. Any violation of this section may subject You to civil and/or\r\n      criminal liability.\r\n    </p>\r\n    <h6 class=\"heading\">\r\n      INTELLECTUAL PROPERTY\r\n    </h6>\r\n    <p class=\"text\">\r\n      <b>a. Software</b>\r\n    </p>\r\n    <p class=\"text\">\r\n      You acknowledge and agree that the Applications and all intellectual property rights associated therewith are,\r\n      and shall remain, the property of 1st Phorm International, LLC. Furthermore, You acknowledge and agree that the\r\n      source and object code of the Applications and the format, directories, queries, algorithms, structure and\r\n      organization of the Applications are the intellectual property and proprietary and confidential information of\r\n      1st Phorm International, LLC and its affiliates, licensors and suppliers. Except as expressly stated in this\r\n      Agreement, You are not granted any intellectual property rights in or to the Applications by implication,\r\n      estoppel or other legal theory, and all rights in and to the Applications not expressly granted in this Agreement\r\n      are hereby reserved and retained by 1st Phorm International, LLC.\r\n    </p>\r\n    <p class=\"text\">\r\n      The Applications may utilize or include third party software that is subject to third party license terms (\"Third\r\n      Party Software\"). You acknowledge and agree that Your right to use such Third Party Software as part of the\r\n      Applications is subject to and governed by the terms and conditions of the third party license applicable to such\r\n      Third Party Software. In the event of a conflict between the terms of this Agreement and the terms of such third\r\n      party licenses, the terms of the third party licenses shall control with regard to Your use of the relevant Third\r\n      Party Software.\r\n    </p>\r\n    <p class=\"text\">\r\n      <b>b. Trademarks</b>\r\n    </p>\r\n    <p class=\"text\">\r\n      1st Phorm International, LLC, 1stPhorm.com, MyTransphormation Application, mytransphormationstartstoday.com and\r\n      the 1st Phorm International, LLC and MyTransphormation (Starts Today) logos (collectively, the <b>\"1st Phorm\r\n        International, LLC Marks\"</b>) are trademarks or registered trademarks of 1st Phorm International, LLC. Other\r\n      trademarks, service marks, graphics, logos and domain names appearing on the Services may be the trademarks of\r\n      third¬parties. Neither Your use of the Services, nor this Agreement, grant You any right, title or interest in or\r\n      to, or any license to reproduce or otherwise use, the 1st Phorm International, LLC Marks or any third¬party\r\n      trademarks, service marks, graphics, logos or domain names. You agree that any goodwill in the 1st Phorm\r\n      International, LLC Marks generated as a result of Your use of the Services will inure to the benefit of 1st Phorm\r\n      International, LLC, and You agree to assign, and hereby do assign, all such goodwill to 1st Phorm International,\r\n      LLC. You shall not at any time, nor shall You assist others to, challenge 1st Phorm International, LLC’s right,\r\n      title, or interest in or to, or the validity of, the 1st Phorm International, LLC Marks.\r\n    </p>\r\n    <p class=\"text\">\r\n      <b>c. Copyrighted Materials; Copyright Notice</b>\r\n    </p>\r\n    <p class=\"text\">\r\n      All content and other materials available through the Website and Services, including without limitation the 1st\r\n      Phorm International, LLC logo, design, text, graphics, and other files, and the selection, arrangement and\r\n      organization thereof, are either owned by 1st Phorm International, LLC or are the property of 1st Phorm\r\n      International, LLC’s licensors and suppliers. Except as explicitly provided, neither Your use of the Services nor\r\n      this Agreement grant You any right, title or interest in or to any such materials.\r\n    </p>\r\n    <p class=\"text\">\r\n      <b>d. DMCA Policy</b>\r\n    </p>\r\n    <p class=\"text\">\r\n      If you have evidence, know, or have a good faith belief that your rights or the rights of a third party have been\r\n      violated and you want 1st Phorm International, LLC to delete, edit, or disable the material in question, you must\r\n      provide 1st Phorm International, LLC with all of the following information: (a) a physical or electronic\r\n      signature of a person authorized to act on behalf of the owner of the exclusive right that is allegedly\r\n      infringed; (b) identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted\r\n      works are covered by a single notification, a representative list of such works; (c) identification of the\r\n      material that is claimed to be infringed or to be the subject of infringing activity and that is to be removed or\r\n      access to which is to be disabled, and information reasonably sufficient to permit 1st Phorm International, LLC\r\n      to locate the material; (d) information reasonably sufficient to permit 1st Phorm International, LLC to contact\r\n      you, such as an address, telephone number, and if available, an electronic mail address at which you may be\r\n      contacted; (e) a statement that you have a good faith belief that use of the material in the manner complained of\r\n      is not authorized by the copyright owner, its agent, or the law; and (f) a statement that the information in the\r\n      notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of\r\n      an exclusive right that is allegedly infringed. For this notification to be effective, you must provide it to 1st\r\n      Phorm International, LLC’s designated agent at:\r\n    </p>\r\n    <p class=\"text\">\r\n      Attn: Copyright Agent 1st Phorm International, LLC Inc.\r\n    </p>\r\n    <p class=\"text\">\r\n      9779 Green Park Industrial Drive St. Louis, MO 63123\r\n    </p>\r\n    <p class=\"text\">\r\n      Or email to <a href=\"mailto:jlayton@1stPhorm.com\">jlayton@1stPhorm.com</a>\r\n    </p>\r\n    <h6 class=\"heading\">\r\n      DISCLAIMERS; LIMITATION OF LIABILITY\r\n    </h6>\r\n    <p class=\"text\">\r\n      <b>a. NO WARRANTIES.</b>\r\n    </p>\r\n    <p class=\"text\">\r\n      1ST PHORM INTERNATIONAL, LLC, ON BEHALF OF ITSELF AND ITS THIRD¬PARTY SERVICE PROVIDERS, LICENSORS AND SUPPLIERS,\r\n      HEREBY DISCLAIMS ALL WARRANTIES. THE WEBSITE, APPLICATIONS AND SERVICES ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE.\"\r\n      TO THE MAXIMUM EXTENT PERMITTED BY LAW, 1ST PHORM INTERNATIONAL, LLC, ON BEHALF OF ITSELF AND ITS THIRD¬PARTY\r\n      SERVICE PROVIDERS, LICENSORS AND SUPPLIERS, EXPRESSLY DISCLAIMS ANY AND ALL WARRANTIES, EXPRESS OR IMPLIED,\r\n      REGARDING THE WEBSITE, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A\r\n      PARTICULAR PURPOSE, OR NON¬INFRINGEMENT. NEITHER 1ST PHORM INTERNATIONAL, LLC NOR ITS THIRD¬PARTY SERVICE\r\n      PROVIDERS, LICENSORS OR SUPPLIERS WARRANTS THAT THE WEBSITE, APPLICATIONS OR THE SERVICES WILL MEET YOUR\r\n      REQUIREMENTS, THAT THE OPERATION OF THE WEBSITE, APPLICATIONS OR THE SERVICES WILL BE UNINTERRUPTED OR\r\n      ERROR¬FREE.\r\n    </p>\r\n    <p class=\"text\">\r\n      <b>b. YOUR RESPONSIBILITY FOR LOSS OR DAMAGE; BACKUP OF DATA</b>\r\n    </p>\r\n    <p class=\"text\">\r\n      YOU AGREE THAT YOUR USE OF THE WEBSITE, APPLICATIONS AND SERVICES IS AT YOUR SOLE RISK. YOU WILL NOT HOLD 1ST\r\n      PHORM INTERNATIONAL, LLC OR ITS THIRD¬PARTY SERVICE PROVIDERS, LICENSORS AND SUPPLIERS, AS APPLICABLE,\r\n      RESPONSIBLE FOR ANY LOSS OR DAMAGE THAT RESULTS FROM YOUR ACCESS TO OR USE OF THE SERVICES, INCLUDING WITHOUT\r\n      LIMITATION ANY LOSS OR DAMAGE TO ANY OF YOUR COMPUTERS OR DATA. THE WEBSITE, APPLICATIONS AND SERVICES MAY\r\n      CONTAIN BUGS, ERRORS, PROBLEMS OR OTHER LIMITATIONS.\r\n    </p>\r\n    <p class=\"text\">\r\n      IMPORTANTLY, YOU HEREBY ACKNOWLEDGE THAT A CATASTROPHIC SERVER FAILURE OR OTHER EVENT COULD RESULT IN THE LOSS OF\r\n      ALL OF THE DATA RELATED TO YOUR ACCOUNT. YOU AGREE AND UNDERSTAND THAT IT IS YOUR RESPONSIBILITY TO BACKUP YOUR\r\n      DATA TO YOUR PERSONAL COMPUTER OR EXTERNAL STORAGE DEVICE AND TO ENSURE SUCH BACKUPS ARE SECURE.\r\n    </p>\r\n    <p class=\"text\">\r\n      <b>c. LIMITATION OF LIABILITY</b>\r\n    </p>\r\n    <p class=\"text\">\r\n      THE LIABILITY OF 1ST PHORM INTERNATIONAL, LLC AND ITS THIRD¬PARTY SERVICE PROVIDERS, LICENSORS AND SUPPLIERS IS\r\n      LIMITED. TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL 1ST PHORM INTERNATIONAL, LLC OR ITS\r\n      THIRD¬PARTY SERVICE PROVIDERS, LICENSORS OR SUPPLIERS BE LIABLE FOR SPECIAL, INCIDENTAL, OR CONSEQUENTIAL\r\n      DAMAGES, LOST PROFITS, LOST DATA OR CONFIDENTIAL OR OTHER INFORMATION, LOSS OF PRIVACY, COSTS OF PROCUREMENT OF\r\n      SUBSTITUTE GOODS OR SERVICES, FAILURE TO MEET ANY DUTY INCLUDING WITHOUT LIMITATION OF GOOD FAITH OR OF\r\n      REASONABLE CARE, NEGLIGENCE, OR OTHERWISE, REGARDLESS OF THE FORESEEABILITY OF THOSE DAMAGES OR OF ANY ADVICE OR\r\n      NOTICE GIVEN TO 1ST PHORM INTERNATIONAL, LLC OR ITS THIRD¬\r\n    </p>\r\n    <p class=\"text\">\r\n      PARTY SERVICE PROVIDERS, LICENSORS AND SUPPLIERS ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE WEBSITE,\r\n      APPLICATIONS OR SERVICES. THIS LIMITATION SHALL APPLY REGARDLESS OF WHETHER THE DAMAGES ARISE OUT OF BREACH OF\r\n      CONTRACT, TORT, OR ANY OTHER LEGAL THEORY OR FORM OF ACTION. ADDITIONALLY, THE MAXIMUM LIABILITY OF 1ST PHORM\r\n      INTERNATIONAL, LLC AND ITS THIRD¬PARTY SERVICE PROVIDERS, LICENSORS AND SUPPLIERS TO YOU UNDER ALL CIRCUMSTANCES\r\n      WILL BE $50.00. YOU AGREE THAT THIS LIMITATION OF LIABILITY REPRESENTS A REASONABLE ALLOCATION OF RISK AND IS A\r\n      FUNDAMENTAL ELEMENT OF THE BASIS OF THE BARGAIN BETWEEN 1ST PHORM INTERNATIONAL, LLC AND YOU. THE WEBSITE,\r\n      APPLICATIONS AND SERVICES WOULD NOT BE PROVIDED WITHOUT SUCH LIMITATIONS.\r\n    </p>\r\n    <p class=\"text\">\r\n      <b>d. APPLICATION</b>\r\n    </p>\r\n    <p class=\"text\">\r\n      THE ABOVE DISCLAIMERS, WAIVERS AND LIMITATIONS DO NOT IN ANY WAY LIMIT ANY OTHER DISCLAIMER OF WARRANTIES OR ANY\r\n      OTHER LIMITATION OF LIABILITY IN THIS AGREEMENT, ANY OTHER AGREEMENT BETWEEN YOU AND 1ST PHORM INTERNATIONAL, LLC\r\n      OR BETWEEN YOU AND ANY OF 1ST PHORM INTERNATIONAL, LLC’S THIRD¬PARTY SERVICE PROVIDERS, LICENSORS AND SUPPLIERS.\r\n      SOME JURISDICTIONS MAY NOT ALLOW THE EXCLUSION OF CERTAIN IMPLIED WARRANTIES OR THE LIMITATION OF CERTAIN\r\n      DAMAGES, SO SOME OF THE ABOVE DISCLAIMERS, WAIVERS AND LIMITATIONS OF LIABILITY MAY NOT APPLY TO YOU. UNLESS\r\n      LIMITED OR MODIFIED BY APPLICABLE LAW, THE FOREGOING DISCLAIMERS, WAIVERS AND LIMITATIONS SHALL APPLY TO THE\r\n      MAXIMUM EXTENT PERMITTED, EVEN IF ANY REMEDY FAILS ITS ESSENTIAL PURPOSE. 1ST PHORM INTERNATIONAL, LLC’S\r\n      THIRD-PARTY SERVICE PROVIDERS LICENSORS AND SUPPLIERS ARE INTENDED THIRD-PARTY BENEFICIARIES OF THESE\r\n      DISCLAIMERS, WAIVERS AND LIMITATIONS. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU THROUGH\r\n      THE SERVICES OR OTHERWISE SHALL ALTER ANY OF THE DISCLAIMERS OR LIMITATIONS STATED IN THIS SECTION.\r\n    </p>\r\n    <p class=\"text\">\r\n      <b>YOUR REPRESENTATIONS AND WARRANTIES</b>\r\n    </p>\r\n    <p class=\"text\">\r\n      You represent and warrant that Your use of the Website, Applications and Services will be in accordance with this\r\n      Agreement and any other 1st Phorm International, LLC policies and guidelines, and with any applicable laws or\r\n      regulations.\r\n    </p>\r\n    <p class=\"text\">\r\n      <b>INDEMNITY BY YOU</b>\r\n    </p>\r\n    <p class=\"text\">\r\n      Without limiting any indemnification provision of this Agreement, You agree to defend, indemnify and hold\r\n      harmless 1st Phorm International, LLC and its officers, directors, employees, agents, affiliates,\r\n      representatives, sublicensees, successors, assigns, and Third-Party Service Providers (collectively, the\r\n      \"Indemnified Parties\") from and against any and all claims, actions, demands, causes of action and other\r\n      proceedings (collectively, \"Claims\"), including but not limited to legal costs and fees, arising out of or\r\n      relating to: (i) Your breach of this Agreement, including without limitation any representation or warranty\r\n      contained in this Agreement; (ii) Your access to or use of the Website, Applications or Services; (iii) Your\r\n      provision to 1st Phorm International, LLC or any of the Indemnified Parties of information or other data; (iv)\r\n      Your violation or alleged violation of any foreign or domestic, federal, state or local law or regulation; or (v)\r\n      Your violation or alleged violation of any third party’s copyrights, trademarks, or other intellectual property\r\n      or proprietary rights.\r\n    </p>\r\n    <p class=\"text\">\r\n      The Indemnified Parties will have the right, but not the obligation, to participate through counsel of their\r\n      choice in any defense by You of any Claim as to which You are required to defend, indemnify or hold harmless the\r\n      Indemnified Parties. You may not settle any Claim without the prior written consent of the concerned Indemnified\r\n      Parties.\r\n    </p>\r\n    <p class=\"text\">\r\n      <b>GOVERNING LAW; JURISDICTION AND VENUE</b>\r\n    </p>\r\n    <p class=\"text\">\r\n      This Agreement, including without limitation this Agreement's interpretation, shall be treated as though this\r\n      Agreement were executed and performed in St. Louis, Missouri and shall be governed by and construed in accordance\r\n      with the laws of the State of Missouri without regard to its conflict of law principles. ANY CAUSE OF ACTION BY\r\n      YOU ARISING OUT OF OR RELATING TO THE SERVICES, OR THIS AGREEMENT MUST BE INSTITUTED WITHIN ONE (1) YEAR AFTER\r\n      THE CAUSE OF ACTION AROSE OR BE FOREVER WAIVED AND BARRED. ALL ACTIONS SHALL BE SUBJECT TO THE LIMITATIONS SET\r\n      FORTH IN ABOVE. The language in this Agreement shall be interpreted in accordance with its fair meaning and not\r\n      strictly for or against either party.\r\n    </p>\r\n    <p class=\"text\">\r\n      <b>a. Requirement of Arbitration.</b>\r\n    </p>\r\n    <p class=\"text\">\r\n      You agree that any dispute, of any nature whatsoever, between You and 1st Phorm International, LLC arising out of\r\n      or relating to this\r\n    </p>\r\n    <p class=\"text\">\r\n      Agreement, shall be decided by neutral, binding arbitration before an arbitrator of 1st Phorm International,\r\n      LLC’s choosing in St. Louis, Missouri (unless You and 1st Phorm International, LLC mutually agree to a different\r\n      arbitrator), who shall render an award in accordance with the substantive laws of Missouri. A final judgment or\r\n      award by the arbitrator may then be duly entered and recorded by the prevailing party in the appropriate court as\r\n      final judgment. The arbitrator shall award costs (including, without limitation, the arbitrator’s fee and\r\n      reasonable attorney’s fees) to the prevailing party.\r\n    </p>\r\n    <p class=\"text\">\r\n      <b>b. Remedies in Aid of Arbitration; Equitable Relief.</b>\r\n    </p>\r\n    <p class=\"text\">\r\n      This agreement to arbitrate will not preclude You or 1st Phorm International, LLC from seeking provisional\r\n      remedies in aid of arbitration, including without limitation orders to stay a court action, compel arbitration or\r\n      confirm an arbitral award, from a court of competent jurisdiction. Furthermore, this agreement to arbitrate will\r\n      not preclude You or 1st Phorm International, LLC from applying to a court of competent jurisdiction for a\r\n      temporary restraining order, preliminary injunction, or other interim or conservatory relief, as necessary. THE\r\n      PROPER VENUE FOR ANY ACTION PERMITTED UNDER THIS SUBSECTION REGARDING “EQUITABLE RELIEF” WILL BE THE FEDERAL AND\r\n      STATE COURTS LOCATED IN ST. LOUIS, MISSOURI; THE PARTIES HEREBY WAIVE ANY OBJECTION TO THE VENUE AND PERSONAL\r\n      JURISDICTION OF SUCH COURTS.\r\n    </p>\r\n    <h6 class=\"heading\">\r\n      TERMINATION\r\n    </h6>\r\n    <p class=\"text\">\r\n      <b>a. Termination; Survival</b>\r\n    </p>\r\n    <p class=\"text\">\r\n      Either party may terminate this Agreement and its rights hereunder at any time, for any or no reason at all, by\r\n      providing to the other party notice of its intention to do so in accordance with this Agreement. This Agreement\r\n      shall automatically terminate in the event that You breach any of this Agreement’s representations, warranties or\r\n      covenants. Such termination shall be automatic, and shall not require any action by 1st Phorm International, LLC.\r\n      Upon termination, all rights, licenses and obligations created by this Agreement will terminate, except that\r\n      Sections 1¬4, 6¬13, 16¬30 will survive any termination of this Agreement.\r\n    </p>\r\n    <p class=\"text\">\r\n      <b>b. Effect of Termination</b>\r\n    </p>\r\n    <p class=\"text\">\r\n      Any termination of this Agreement automatically terminates all rights and licenses granted to You under this\r\n      Agreement, including all rights to use the Website, Applications and Services. Subsequent to termination, 1st\r\n      Phorm International, LLC reserves the right to exercise whatever means it deems necessary to prevent Your\r\n      unauthorized use of the Website,, Applications and Services, including without limitation technological barriers\r\n      such as IP blocking and direct contact with Your Internet Service Provider.\r\n    </p>\r\n    <p class=\"text\">\r\n      <b>c. Legal Action</b>\r\n    </p>\r\n    <p class=\"text\">\r\n      If 1st Phorm International, LLC, in 1st Phorm International, LLC’s discretion, takes legal action against You in\r\n      connection with any actual or suspected breach of this Agreement, 1st Phorm International, LLC will be entitled\r\n      to recover from You as part of such legal action, and You agree to pay, 1st Phorm International, LLC’s reasonable\r\n      costs and attorneys’ fees incurred as a result of such legal action. The 1st Phorm International, LLC Parties\r\n      will have no legal obligation or other liability to You or to any third party arising out of or relating to any\r\n      termination of this Agreement.\r\n    </p>\r\n    <h3 class=\"sub-heading\">\r\n      NOTICES\r\n    </h3>\r\n    <p class=\"text\">\r\n      All notices required or permitted to be given under this Agreement must be in writing. 1st Phorm International,\r\n      LLC shall give any notice by email sent to the most recent email address, if any, provided by You to 1st Phorm\r\n      International, LLC. You agree that any notice received from 1st Phorm International, LLC electronically satisfies\r\n      any legal requirement that such notice be in writing. YOU BEAR THE SOLE RESPONSIBILITY OF ENSURING THAT YOUR\r\n      EMAIL ADDRESS ON FILE WITH 1ST PHORM INTERNATIONAL, LLC IS ACCURATE AND CURRENT, AND NOTICE TO YOU SHALL BE\r\n      DEEMED EFFECTIVE UPON THE SENDING BY 1ST PHORM INTERNATIONAL, LLC OF AN EMAIL TO THAT ADDRESS. You shall give any\r\n      notice to 1st Phorm International, LLC by means of: (1) U.S. mail, postage prepaid, to 1st Phorm International,\r\n      LLC Inc., 9779 Green Park Industrial Drive St. Louis, Missouri; or (2) email to: legal@1stPhorm.com. Notice to\r\n      1st Phorm International, LLC shall be effective upon receipt of notice by 1st Phorm International, LLC.\r\n    </p>\r\n    <h3 class=\"sub-heading\">\r\n      GENERAL\r\n    </h3>\r\n    <p class=\"text\">\r\n      This Agreement constitutes the entire agreement between 1st Phorm International, LLC and You concerning Your use\r\n      of the Services. This Agreement may only be modified by a written amendment signed by an authorized executive of\r\n      1st Phorm International, LLC or by the unilateral amendment of this Agreement by 1st Phorm International, LLC and\r\n      by the posting by 1st Phorm International, LLC of such amended version. If any part of this Agreement is held\r\n      invalid or unenforceable, that part will be construed to reflect the parties’ original intent, and the remaining\r\n      portions will remain in full force and effect. A waiver by either party of any term or condition of this\r\n      Agreement or any breach thereof, in any one instance, will not waive such term or condition or any subsequent\r\n      breach thereof. 1st Phorm International, LLC may assign or transfer this Agreement at any time, with or without\r\n      notice to You. This Agreement and all of Your rights and obligations hereunder will not be assignable or\r\n      transferable by You without the prior written consent of 1st Phorm International, LLC. This Agreement will be\r\n      binding upon and will inure to the benefit of the parties, their successors and permitted assigns. You and 1st\r\n      Phorm International, LLC are independent contractors, and no agency, partnership, joint venture or\r\n      employee¬employer relationship is intended or created by this Agreement. Except for the 1st Phorm International,\r\n      LLC Parties and the Indemnified Parties as and to the extent set forth in Sections 18, 21, 25 and 28(c), and 1st\r\n      Phorm International, LLC’s licensors and suppliers as and to the extent expressly set forth in Section 23, there\r\n      are no third¬party beneficiaries to this Agreement. You acknowledge and agree that any actual or threatened\r\n      breach of this Agreement or infringement of proprietary or other third party rights by You would cause\r\n      irreparable injury to 1st Phorm International, LLC and 1st Phorm International, LLC’s licensors and suppliers,\r\n      and would therefore entitle 1st Phorm International, LLC or 1st Phorm International, LLC’s licensors or\r\n      suppliers, as the case may be, to injunctive relief. The headings in this Agreement are for the purpose of\r\n      convenience only and shall not limit, enlarge, or affect any of the covenants, terms, conditions or provisions of\r\n      this Agreement.\r\n    </p>\r\n    <h6 class=\"heading\">\r\n      1ST PHORM INTERNATIONAL, LLC PRIVACY POLICY\r\n    </h6>\r\n    <p class=\"text\">\r\n      Acknowledgement and Acceptance of Terms 1st Phorm is committed to protecting your privacy. This Privacy Statement\r\n      sets forth our current privacy practices with regard to the information we collect when you or your computer\r\n      interact with our website. By accessing www.1stphorm.com or the MyTransphormation App you acknowledge and fully\r\n      understand 1st Phorm’ Privacy Statement and freely consent to the information collection and use practices\r\n      described in this Website Privacy Statement.\r\n    </p>\r\n\r\n    <p class=\"text\">\r\n      Participating Merchant Policies Related services and offerings with links from this website, including vendor\r\n      sites, have their own privacy statements that can be viewed by clicking on the corresponding links within each\r\n      respective website. Online merchants and others who participate in 1st Phorm services are encouraged to\r\n      participate in industry privacy initiatives and to take a responsible attitude towards consumer privacy. However,\r\n      since we do not have direct control over the policies or practices of participating merchants and other third\r\n      parties, we are not responsible for the privacy practices or contents of those sites. We recommend and encourage\r\n      that you always review the privacy policies of merchants and other third parties before you provide any personal\r\n      information or complete any transaction with such parties.\r\n    </p>\r\n    <p class=\"text\">\r\n      Information We Collect And How We Use It 1st Phorm collects certain information from and about its users three\r\n      ways: directly from our Web Server logs, the user, and with Cookies.\r\n    </p>\r\n    <p class=\"text\">\r\n      Web Server Logs When you visit our Website, we may track information to administer the site and analyze its\r\n      usage. Examples of information we may track include:\r\n    </p>\r\n    <ul class=\"text\">\r\n      <li>\r\n        Your Internet protocol address.\r\n      </li>\r\n      <li>\r\n        The kind of browser or computer you use.\r\n      </li>\r\n      <li>\r\n        Number of links you click within the site.\r\n      </li>\r\n      <li>\r\n        State or country from which you accessed the site.\r\n      </li>\r\n      <li>\r\n        Date and time of your visit.\r\n      </li>\r\n      <li>\r\n        Name of your Internet service provider.\r\n      </li>\r\n      <li>\r\n        Web page you linked to our site from.\r\n      </li>\r\n      <li>\r\n        Pages you viewed on the site.\r\n      </li>\r\n      <li>\r\n        Use Of Web Beacons Or Gif Files\r\n      </li>\r\n    </ul>\r\n    <p class=\"text\">\r\n      1st Phorm Web pages may contain electronic images known as Web beacons – sometimes also called single-pixel gifs\r\n      – that allow 1st Phorm to count users who have visited those pages and to deliver co-branded services. 1st Phorm\r\n      may include Web beacons in promotional e-mail messages or newsletters in order to determine whether messages have\r\n      been opened and acted upon. Some of these Web beacons may be placed by third party service providers to help\r\n      determine the effectiveness of our advertising campaigns or email communications. These Web beacons may be used\r\n      by these service providers to place a persistent cookie on your computer. This allows the service provider to\r\n      recognize your computer each time you visit certain pages or emails and compile anonymous information in relation\r\n      to those page views, which in turn enables us and our service providers to learn which advertisements and emails\r\n      bring you to our website and how you use the site. 1st Phorm prohibits Web beacons from being used to collect or\r\n      access your personal information.\r\n    </p>\r\n    <p class=\"text\">\r\n      Changes To This Statement 1st Phorm has the discretion to occasionally update this privacy statement. When we do,\r\n      we will also revise the “updated” date at the top of this Privacy page. We encourage you to periodically review\r\n      this privacy statement to stay informed about how we are helping to protect the personal information we collect.\r\n      Your continued use of the service constitutes your agreement to this privacy statement and any updates.\r\n    </p>\r\n    <p class=\"text\">\r\n      CONTACTING US: If you have questions regarding our Privacy Statement, its implementation, failure to adhere to\r\n      this Privacy Statement and/or our general practices, please Contact Us or send your comments to:\r\n    </p>\r\n    <p class=\"text\">\r\n      1st Phorm\r\n    </p>\r\n    <p class=\"text\">\r\n      Attention: Privacy Statement Personnel\r\n    </p>\r\n    <p class=\"text\">\r\n      PO Box 775217\r\n    </p>\r\n    <p class=\"text\">\r\n      Saint Louis, MO 63177\r\n    </p>\r\n\r\n\r\n    <h6 class=\"text\">\r\n      EFFECTIVE DATE: December 19, 2018\r\n    </h6>\r\n\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <div class=\"fixed-bottom\">\r\n      <div class=\"inline center\">\r\n        <ion-checkbox [(ngModel)]=\"termsCheck\"></ion-checkbox>\r\n        <p>I agree to the Terms and Conditions</p>\r\n      </div>\r\n      <div class=\"inline\">\r\n        <ion-button [disabled]=\"!termsCheck\" (click)=\"accept()\" color=\"primary\">Accept</ion-button>\r\n        <ion-button (click)=\"close()\" color=\"danger\">Decline</ion-button>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/register/terms/terms.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/register/terms/terms.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content .heading {\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 20px;\n  margin-top: 10px; }\n\n.content .sub-heading {\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 14px; }\n\n.content .text {\n  font-size: 14px;\n  line-height: 14px;\n  margin: 2px 0 6px 0; }\n\n.inline {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center; }\n\n.center {\n  justify-content: center; }\n\nion-footer p {\n  font-size: 12px;\n  padding-left: 10px;\n  color: var(--ion-color-light); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvdGVybXMvRTpcXGlvbmljXFxWZXJ2ZUNvbW1lcmNlXFxOZXdEZXZcXG10c3QtYXBwL3NyY1xcYXBwXFxwYWdlc1xccmVnaXN0ZXJcXHRlcm1zXFx0ZXJtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUxwQjtFQVNJLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZUFBZSxFQUFBOztBQVhuQjtFQWVJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBSXZCO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSx1QkFBdUIsRUFBQTs7QUFHekI7RUFFSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDZCQUE2QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvdGVybXMvdGVybXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgLmhlYWRpbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIC5zdWItaGVhZGluZyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAudGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgIG1hcmdpbjogMnB4IDAgNnB4IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5saW5lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/register/terms/terms.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/register/terms/terms.component.ts ***!
  \*********************************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
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


var TermsComponent = /** @class */ (function () {
    function TermsComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.termsCheck = false;
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    TermsComponent.prototype.accept = function () {
        this.modalCtrl.dismiss(true);
    };
    TermsComponent.prototype.close = function () {
        this.modalCtrl.dismiss(false);
    };
    TermsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terms',
            template: __webpack_require__(/*! ./terms.component.html */ "./src/app/pages/register/terms/terms.component.html"),
            styles: [__webpack_require__(/*! ./terms.component.scss */ "./src/app/pages/register/terms/terms.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], TermsComponent);
    return TermsComponent;
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
//# sourceMappingURL=pages-register-register-module.js.map