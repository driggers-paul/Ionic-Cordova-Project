(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reset-password-reset-password-module"],{

/***/ "./src/app/pages/reset-password/reset-password.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.module.ts ***!
  \***************************************************************/
/*! exports provided: ResetPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function() { return ResetPasswordPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password.page */ "./src/app/pages/reset-password/reset-password.page.ts");
/* harmony import */ var _components_logo_logo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/logo/logo.module */ "./src/app/components/logo/logo.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordPage"]
    }
];
var ResetPasswordPageModule = /** @class */ (function () {
    function ResetPasswordPageModule() {
    }
    ResetPasswordPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _components_logo_logo_module__WEBPACK_IMPORTED_MODULE_6__["LogoModule"]
            ],
            declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordPage"]]
        })
    ], ResetPasswordPageModule);
    return ResetPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/pages/reset-password/reset-password.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button default-href=\"/\" text=\"Login\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Reset Password</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <div class=\"global-container\">\r\n    <app-logo></app-logo>\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n      <ion-item>\r\n        <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input type=\"password\" placeholder=\"Confirm Password\" formControlName=\"password_confirmation\"></ion-input>\r\n      </ion-item>\r\n      <div class=\"global-center-btn global-margin-top-15\">\r\n        <ion-button type=\"submit\" expand=\"full\" [disabled]=\"form.invalid\">RESET PASSWORD</ion-button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/reset-password/reset-password.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/reset-password/reset-password.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.page.ts ***!
  \*************************************************************/
/*! exports provided: ResetPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPage", function() { return ResetPasswordPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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






var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(errorService, toastCtrl, loadingCtrl, authenticationService, navCtrl, route) {
        this.errorService = errorService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authenticationService = authenticationService;
        this.navCtrl = navCtrl;
        this.route = route;
        this.token = '';
    }
    ResetPasswordPage.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            password_confirmation: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
        this.route.params.subscribe(function (params) {
            _this.token = params.token;
        });
    };
    ResetPasswordPage.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, toast_1, e_1, toast;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Please wait',
                        })];
                    case 1:
                        loader = _a.sent();
                        loader.present();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 6, 9, 10]);
                        return [4 /*yield*/, this.authenticationService.resetPassword(this.token, this.form.get('email').value, this.form.get('password').value, this.form.get('password_confirmation').value)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Your password has been reset. You will be redirected to login page',
                            })];
                    case 4:
                        toast_1 = _a.sent();
                        return [4 /*yield*/, toast_1.present()];
                    case 5:
                        _a.sent();
                        window.setTimeout(function () {
                            toast_1.dismiss();
                            _this.navCtrl.navigateRoot('/');
                        }, 5000);
                        return [3 /*break*/, 10];
                    case 6:
                        e_1 = _a.sent();
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: this.errorService.firstError(e_1),
                                duration: 3000,
                            })];
                    case 7:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 8:
                        _a.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    ResetPasswordPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.page.html */ "./src/app/pages/reset-password/reset-password.page.html"),
            styles: [__webpack_require__(/*! ./reset-password.page.scss */ "./src/app/pages/reset-password/reset-password.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_errors_errors_service__WEBPACK_IMPORTED_MODULE_1__["ErrorsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
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
//# sourceMappingURL=pages-reset-password-reset-password-module.js.map