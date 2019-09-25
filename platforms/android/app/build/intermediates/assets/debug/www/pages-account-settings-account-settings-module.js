(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-settings-account-settings-module"],{

/***/ "./src/app/pages/account-settings/account-settings.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/account-settings/account-settings.module.ts ***!
  \*******************************************************************/
/*! exports provided: AccountSettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingsPageModule", function() { return AccountSettingsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _account_settings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-settings.page */ "./src/app/pages/account-settings/account-settings.page.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_native_pro_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/pro/ngx */ "./node_modules/@ionic-native/pro/ngx/index.js");
/* harmony import */ var _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/side-menu/side-menu.module */ "./src/app/components/side-menu/side-menu.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _account_settings_page__WEBPACK_IMPORTED_MODULE_5__["AccountSettingsPage"]
    }
];
var AccountSettingsPageModule = /** @class */ (function () {
    function AccountSettingsPageModule() {
    }
    AccountSettingsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_8__["SideMenuModule"]
            ],
            declarations: [_account_settings_page__WEBPACK_IMPORTED_MODULE_5__["AccountSettingsPage"]],
            providers: [_ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_6__["LocalNotifications"], _ionic_native_pro_ngx__WEBPACK_IMPORTED_MODULE_7__["Pro"]]
        })
    ], AccountSettingsPageModule);
    return AccountSettingsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/account-settings/account-settings.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/account-settings/account-settings.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Settings</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <app-menu-button></app-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]='form' (ngSubmit)=\"updateAccountSetting()\">\r\n    <ion-list>\r\n      <ion-list-header>Reminders</ion-list-header>\r\n      <ion-item>\r\n        <ion-label>Photo Reminders</ion-label>\r\n        <ion-select okText=\"Okay\" cancelText=\"Dismiss\" formControlName='photo_reminder'>\r\n          <ion-select-option [value]=\"1\">Every week</ion-select-option>\r\n          <ion-select-option [value]=\"2\">Every 2 weeks</ion-select-option>\r\n          <ion-select-option [value]=\"3\">Every 3 weeks</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Weigh in Reminders</ion-label>\r\n        <ion-select formControlName=\"weigh_reminder\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n          <ion-select-option value=\"null\">Never</ion-select-option>\r\n          <ion-select-option [value]=\"1\">Every week</ion-select-option>\r\n          <ion-select-option [value]=\"2\">Every 2 weeks</ion-select-option>\r\n          <ion-select-option [value]=\"3\">Every 3 weeks</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Workout Reminders</ion-label>\r\n        <ion-toggle slot=\"end\" formControlName=\"workout_reminder\"></ion-toggle>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"form.get('workout_reminder').value === true\">\r\n        <ion-label>What Time?</ion-label>\r\n        <ion-datetime displayFormat=\"hh:mm A\" formControlName=\"what_time\"></ion-datetime>\r\n      </ion-item>\r\n      <ion-list-header>Notifications</ion-list-header>\r\n      <ion-item>\r\n        <div>\r\n          <ion-label>New Chat Messages</ion-label>\r\n          <span class=\"description\">Get notification of new chat messages from your Transphormation Advisor.</span>\r\n        </div>\r\n        <ion-toggle slot=\"end\" formControlName=\"receive_email\"></ion-toggle>\r\n      </ion-item>\r\n      <ion-item text-wrap>\r\n        <div>\r\n          <ion-label>Announcements</ion-label>\r\n          <span class=\"description\">Get notified of new announcements from your Transphormation Advisor.</span>\r\n        </div>\r\n        <ion-toggle slot=\"end\" formControlName=\"receive_notification\"></ion-toggle>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-item text-wrap>\r\n      <div>\r\n        <ion-label>Livestreams</ion-label>\r\n        <span class=\"description\">Get notifications for Livestreams.</span>\r\n      </div>\r\n      <ion-toggle slot=\"end\" formControlName=\"receive_livestream_notification\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-button type=\"submit\" padding color=\"primary\" expand=\"full\">Update</ion-button>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/account-settings/account-settings.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/account-settings/account-settings.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-info {\n  font-size: 10px; }\n\nion-label + span.description {\n  margin: -8px 0 10px 0;\n  display: block;\n  font-size: 12px;\n  color: var(--ion-color-text); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC1zZXR0aW5ncy9FOlxcaW9uaWNcXFZlcnZlQ29tbWVyY2VcXE5ld0RldlxcbXRzdC1hcHAvc3JjXFxhcHBcXHBhZ2VzXFxhY2NvdW50LXNldHRpbmdzXFxhY2NvdW50LXNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7RUFDZiw0QkFBNEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQtc2V0dGluZ3MvYWNjb3VudC1zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWluZm8ge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuaW9uLWxhYmVsICsgc3Bhbi5kZXNjcmlwdGlvbiB7XHJcbiAgbWFyZ2luOiAtOHB4IDAgMTBweCAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRleHQpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/account-settings/account-settings.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/account-settings/account-settings.page.ts ***!
  \*****************************************************************/
/*! exports provided: AccountSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingsPage", function() { return AccountSettingsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_account_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/account/account.service */ "./src/app/services/account/account.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/toast-service/toast-service.service */ "./src/app/services/toast-service/toast-service.service.ts");
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/analytics/analytics.service */ "./src/app/services/analytics/analytics.service.ts");
/* harmony import */ var _services_analytics_analytic_events_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/analytics/analytic-events.enum */ "./src/app/services/analytics/analytic-events.enum.ts");
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








var AccountSettingsPage = /** @class */ (function () {
    function AccountSettingsPage(formBuilder, errorService, loadingCtrl, toastSvc, accountService, analyticService) {
        this.formBuilder = formBuilder;
        this.errorService = errorService;
        this.loadingCtrl = loadingCtrl;
        this.toastSvc = toastSvc;
        this.accountService = accountService;
        this.analyticService = analyticService;
    }
    AccountSettingsPage.prototype.ngOnInit = function () {
        this.transphormer = JSON.parse(window.localStorage.getItem('transphormer'));
        this.form = this.formBuilder.group({
            photo_reminder: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            weigh_reminder: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            workout_reminder: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            what_time: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            receive_email: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            receive_notification: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            receive_livestream_notification: this.formBuilder.control({
                value: false,
                disabled: !this.transphormer.is_paid_user
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
        this.getAccountSetting();
    };
    AccountSettingsPage.prototype.getAccountSetting = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, data, rawValue, key, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Please wait...',
                        })];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, 6, 7]);
                        return [4 /*yield*/, this.accountService.getAccountSetting()];
                    case 4:
                        data = _a.sent();
                        rawValue = this.form.getRawValue();
                        for (key in data) {
                            if (rawValue.hasOwnProperty(key)) {
                                this.form.get(key).setValue(data[key]);
                            }
                        }
                        return [3 /*break*/, 7];
                    case 5:
                        e_1 = _a.sent();
                        this.toastSvc.flash(this.errorService.firstError(e_1));
                        return [3 /*break*/, 7];
                    case 6:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AccountSettingsPage.prototype.updateAccountSetting = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, data, time, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Please wait...',
                        })];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 10, 11, 12]);
                        data = this.form.getRawValue();
                        return [4 /*yield*/, this.accountService.updateAccountSetting(data)];
                    case 4:
                        _a.sent();
                        time = data.what_time.split(':');
                        this.accountService.setWorkoutReminder(data.workout_reminder, time.length > 1 ? parseFloat(time[0]) : 0, time.length > 1 ? parseFloat(time[1]) : 0);
                        return [4 /*yield*/, this.accountService.setWorkoutReminder(data.workout_reminder, parseFloat(time[0]), parseFloat(time[1]))];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.accountService.setPhotoReminder(true, data.photo_reminder)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.accountService.setWeighInReminder(true, data.weigh_reminder)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.accountService.subscribeToLiveStream(data.receive_livestream_notification)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.analyticService.logEvent(_services_analytics_analytic_events_enum__WEBPACK_IMPORTED_MODULE_7__["AnalyticEvents"].ChangingConfiguration, {})];
                    case 9:
                        _a.sent();
                        this.toastSvc.flash('Account setting updated successfully');
                        return [3 /*break*/, 12];
                    case 10:
                        e_2 = _a.sent();
                        this.toastSvc.flash(this.errorService.firstError(e_2));
                        return [3 /*break*/, 12];
                    case 11:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    AccountSettingsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-settings',
            template: __webpack_require__(/*! ./account-settings.page.html */ "./src/app/pages/account-settings/account-settings.page.html"),
            styles: [__webpack_require__(/*! ./account-settings.page.scss */ "./src/app/pages/account-settings/account-settings.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_1__["ErrorsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
            _services_account_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
            _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_6__["AnalyticsService"]])
    ], AccountSettingsPage);
    return AccountSettingsPage;
}());



/***/ }),

/***/ "./src/app/services/analytics/analytic-events.enum.ts":
/*!************************************************************!*\
  !*** ./src/app/services/analytics/analytic-events.enum.ts ***!
  \************************************************************/
/*! exports provided: AnalyticEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticEvents", function() { return AnalyticEvents; });
var AnalyticEvents;
(function (AnalyticEvents) {
    AnalyticEvents["ViewingWorkouts"] = "viewing_workouts";
    AnalyticEvents["AddingWeightIn"] = "adding_weigh_in";
    AnalyticEvents["LoggingNutrition"] = "logging_nutrition";
    AnalyticEvents["MessagingWithTrainer"] = "messaging_with_trainer";
    AnalyticEvents["WatchingLiveStream"] = "watching_live_stream";
    AnalyticEvents["HelpView"] = "help_view";
    AnalyticEvents["WorkoutHelp"] = "workout_help";
    AnalyticEvents["SearchingAdvisor"] = "searching_advisor";
    AnalyticEvents["DroppingAdvisor"] = "dropping_advisor";
    AnalyticEvents["TakingPhotos"] = "taking_photos";
    AnalyticEvents["ViewingAnnouncements"] = "viewing_announcements";
    AnalyticEvents["UpdatingProfile"] = "updating_profile";
    AnalyticEvents["ChangingConfiguration"] = "changing_configuration";
})(AnalyticEvents || (AnalyticEvents = {}));


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
//# sourceMappingURL=pages-account-settings-account-settings-module.js.map