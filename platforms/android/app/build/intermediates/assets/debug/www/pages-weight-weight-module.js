(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-weight-weight-module"],{

/***/ "./src/app/pages/weight/weight.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/weight/weight.module.ts ***!
  \***********************************************/
/*! exports provided: WeightPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeightPageModule", function() { return WeightPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _weight_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weight.page */ "./src/app/pages/weight/weight.page.ts");
/* harmony import */ var _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/side-menu/side-menu.module */ "./src/app/components/side-menu/side-menu.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _weight_page__WEBPACK_IMPORTED_MODULE_5__["WeightPage"]
    }
];
var WeightPageModule = /** @class */ (function () {
    function WeightPageModule() {
    }
    WeightPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_6__["SideMenuModule"]
            ],
            declarations: [_weight_page__WEBPACK_IMPORTED_MODULE_5__["WeightPage"]]
        })
    ], WeightPageModule);
    return WeightPageModule;
}());



/***/ }),

/***/ "./src/app/pages/weight/weight.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/weight/weight.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>{{ wasAddedToday ? 'Edit' : 'Add' }} Weigh-in</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <app-menu-button></app-menu-button>\r\n    </ion-buttons>\r\n    <ion-button slot=\"end\" fill=\"clear\" (click)=\"deleteRecord()\">\r\n      <ion-icon name=\"close\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div padding class=\"todays-weighin\" *ngIf=\"wasAddedToday\">\r\n    <ion-icon name=\"alert\" size=\"large\"></ion-icon>\r\n    <div>You are editing today's weigh-in. You can only weigh-in once every 24 hours.</div>\r\n  </div>\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"storeWeight()\">\r\n    <div class=\"global-input\">\r\n      <ion-label position=\"stacked\">New weight (lbs)</ion-label>\r\n      <ion-input type=\"number\" formControlName=\"weight\"></ion-input>\r\n    </div>\r\n    <div class=\"global-input\">\r\n      <ion-label position=\"stacked\">Last weigh-in (lbs)</ion-label>\r\n      <ion-input disabled=\"true\" [value]=\"latestWeight ? latestWeight.weight : 'No weight logged yet!'\"></ion-input>\r\n    </div>\r\n    <div class=\"global-input\">\r\n      <ion-label position=\"stacked\">Logged On</ion-label>\r\n      <ion-input disabled=\"true\" [value]=\"latestWeightDate\"></ion-input>\r\n    </div>\r\n    <div class=\"inline bottom-btn global-input\">\r\n      <ion-button type=\"button\" fill=\"clear\" expand=\"full\" (click)=\"deleteRecord()\">Cancel</ion-button>\r\n\r\n      <ion-button type=\"submit\" color=\"primary\" expand=\"full\" [disabled]=\"form.invalid\">\r\n        {{wasAddedToday ? 'Update' : '' }} Weigh-in\r\n      </ion-button>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/weight/weight.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/weight/weight.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inline {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.todays-weighin {\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-warning-contrast);\n  border: 4px solid var(--ion-color-warning);\n  margin: 20px;\n  background: var(--ion-color-warning-lightest); }\n\n.todays-weighin ion-icon {\n    margin-right: 12px; }\n\n.bottom-btn {\n  margin-top: 20px;\n  bottom: 10px; }\n\n.bottom-btn ion-button {\n    text-transform: uppercase;\n    font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2VpZ2h0L0U6XFxpb25pY1xcVmVydmVDb21tZXJjZVxcTmV3RGV2XFxtdHN0LWFwcC9zcmNcXGFwcFxccGFnZXNcXHdlaWdodFxcd2VpZ2h0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsMENBQTBDO0VBQzFDLFlBQVk7RUFDWiw2Q0FBNkMsRUFBQTs7QUFOL0M7SUFRSSxrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUZkO0lBSUkseUJBQXlCO0lBQ3pCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlaWdodC93ZWlnaHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubGluZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRvZGF5cy13ZWlnaGluIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0KTtcclxuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLWxpZ2h0ZXN0KTtcclxuICBpb24taWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYm90dG9tLWJ0biB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBib3R0b206IDEwcHg7XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/weight/weight.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/weight/weight.page.ts ***!
  \*********************************************/
/*! exports provided: WeightPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeightPage", function() { return WeightPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _services_weights_weights_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/weights/weights.service */ "./src/app/services/weights/weights.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_interceptors_caching_request_caching_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/interceptors/caching/request-caching.service */ "./src/app/services/interceptors/caching/request-caching.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/toast-service/toast-service.service */ "./src/app/services/toast-service/toast-service.service.ts");
/* harmony import */ var _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/onboarding/onboarding.service */ "./src/app/services/onboarding/onboarding.service.ts");
/* harmony import */ var _services_custom_macro_custom_macro_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/custom-macro/custom-macro.service */ "./src/app/services/custom-macro/custom-macro.service.ts");
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/analytics/analytics.service */ "./src/app/services/analytics/analytics.service.ts");
/* harmony import */ var _services_analytics_analytic_events_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/analytics/analytic-events.enum */ "./src/app/services/analytics/analytic-events.enum.ts");
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












var WeightPage = /** @class */ (function () {
    function WeightPage(errorService, weightService, loadingCtrl, toastCtrl, navCtrl, cacheService, toastService, onboarding, customMacroService, analyticService) {
        this.errorService = errorService;
        this.weightService = weightService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.cacheService = cacheService;
        this.toastService = toastService;
        this.onboarding = onboarding;
        this.customMacroService = customMacroService;
        this.analyticService = analyticService;
        this.wasAddedToday = false;
    }
    WeightPage.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(600),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(60),
            ]),
        });
        this.form.get('weight').valueChanges.subscribe(function (value) {
            _this.roundOffWeight(value);
        });
        this.fetchLatestWeight();
    };
    Object.defineProperty(WeightPage.prototype, "latestWeightDate", {
        get: function () {
            if (!this.latestWeight) {
                return 'No weight logged yet!';
            }
            return this.latestWeight.logged_on.local().format('YYYY-MM-DD h:mm a');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Setups the latest weight
     */
    WeightPage.prototype.fetchLatestWeight = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Please wait ...',
                        })];
                    case 1:
                        loader = _b.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, 7, 8]);
                        _a = this;
                        return [4 /*yield*/, this.weightService.latestWeight()];
                    case 4:
                        _a.latestWeight = (_b.sent());
                        this.checkWasLoggedToday();
                        return [3 /*break*/, 8];
                    case 5:
                        e_1 = _b.sent();
                        console.log(e_1);
                        return [4 /*yield*/, this.toastService.flash(this.errorService.firstError(e_1))];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    WeightPage.prototype.storeWeight = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, transphormer, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Please wait ...',
                        })];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 9, 11, 12]);
                        if (!this.wasAddedToday) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.editExistingWeight()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.storeNewWeight()];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [4 /*yield*/, this.onboarding.fetchOnBoard()];
                    case 8:
                        transphormer = _a.sent();
                        this.customMacroService.notifyToUpdateMacro(transphormer.latest_weight_value, transphormer.starting_weight_value);
                        this.navCtrl.navigateRoot('body-metrics');
                        this.analyticService.logEvent(_services_analytics_analytic_events_enum__WEBPACK_IMPORTED_MODULE_11__["AnalyticEvents"].AddingWeightIn);
                        return [3 /*break*/, 12];
                    case 9:
                        e_2 = _a.sent();
                        return [4 /*yield*/, this.toastService.flash(this.errorService.firstError(e_2))];
                    case 10:
                        _a.sent();
                        return [3 /*break*/, 12];
                    case 11:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Rounding off the weight value to prevent decimal places.
     * @todo check why number pipe is not rendering updated values on view (could be a bug or something is missing).
     * @param value
     */
    WeightPage.prototype.roundOffWeight = function (value) {
        value = parseFloat(value);
        if (!isNaN(value)) {
            this.form.get('weight').setValue(Math.round(value), {
                emitEvent: false
            });
        }
    };
    /**
     * Stores new weight in the system
     */
    WeightPage.prototype.storeNewWeight = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.weightService.saveWeight(this.form.get('weight').value)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Weight logged successfully',
                                duration: 3000,
                            })];
                    case 2:
                        toast = _a.sent();
                        this.cacheService.clearAll();
                        return [4 /*yield*/, toast.present()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Edit existing weight
     */
    WeightPage.prototype.editExistingWeight = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.weightService.updateWeight(this.latestWeight.id, this.form.get('weight').value)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Weight Updated successfully',
                                duration: 3000,
                            })];
                    case 2:
                        toast = _a.sent();
                        this.cacheService.clearAll();
                        return [4 /*yield*/, toast.present()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Setup various checks which will indicate the latest weight log was added the same day.
     */
    WeightPage.prototype.checkWasLoggedToday = function () {
        if (this.latestWeight === null) {
            this.wasAddedToday = false;
        }
        else {
            var lowerBoundTime = moment__WEBPACK_IMPORTED_MODULE_6__().set('hour', 0)
                .set('minute', 0)
                .set('second', 0);
            var upperBoundTime = moment__WEBPACK_IMPORTED_MODULE_6__().set('hour', 23)
                .set('minute', 59)
                .set('second', 59);
            this.wasAddedToday = this.latestWeight.logged_on.isBetween(lowerBoundTime, upperBoundTime);
        }
    };
    /**
     * Delete latest record
     */
    WeightPage.prototype.deleteRecord = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.navigateBack('/body-metrics');
                return [2 /*return*/];
            });
        });
    };
    WeightPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weight',
            template: __webpack_require__(/*! ./weight.page.html */ "./src/app/pages/weight/weight.page.html"),
            styles: [__webpack_require__(/*! ./weight.page.scss */ "./src/app/pages/weight/weight.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_errors_errors_service__WEBPACK_IMPORTED_MODULE_1__["ErrorsService"],
            _services_weights_weights_service__WEBPACK_IMPORTED_MODULE_2__["WeightsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _services_interceptors_caching_request_caching_service__WEBPACK_IMPORTED_MODULE_5__["RequestCachingService"],
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
            _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_8__["OnboardingService"],
            _services_custom_macro_custom_macro_service__WEBPACK_IMPORTED_MODULE_9__["CustomMacroService"],
            _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_10__["AnalyticsService"]])
    ], WeightPage);
    return WeightPage;
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

/***/ "./src/app/services/weights/weights.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/weights/weights.service.ts ***!
  \*****************************************************/
/*! exports provided: WeightsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeightsService", function() { return WeightsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.service */ "./src/app/services/base/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WeightsService = /** @class */ (function (_super) {
    __extends(WeightsService, _super);
    function WeightsService(http, platform) {
        var _this = _super.call(this, http, platform) || this;
        _this.http = http;
        _this.platform = platform;
        WeightsService_1.SET_PLATFORM(platform);
        return _this;
    }
    WeightsService_1 = WeightsService;
    /**
     * Retrieves the latest weight of the transphormer
     */
    WeightsService.prototype.latestWeight = function () {
        var _this = this;
        return this.http.get(WeightsService_1.Url('weigh-ins/latest'), WeightsService_1.BaseOptions(true, true))
            .toPromise()
            .then(function (weight) { return _this.loggedDateConversion(_this.checkWeightValue(weight)); })
            .catch(WeightsService_1.HandleError);
    };
    /**
     * Stores weight log for the transphormer
     * @param weight
     */
    WeightsService.prototype.saveWeight = function (weight) {
        var _this = this;
        var data = { weight: weight };
        return this.http.post(WeightsService_1.Url('weigh-ins'), data, WeightsService_1.BaseOptions(true, true))
            .toPromise()
            .then(function (newWeight) { return _this.loggedDateConversion(newWeight); })
            .catch(WeightsService_1.HandleError);
    };
    /**
     * List all weights for the transphormer
     */
    WeightsService.prototype.listWeights = function () {
        var _this = this;
        return this.http.get(WeightsService_1.Url('weigh-ins'), WeightsService_1.BaseOptions(true, true))
            .toPromise()
            .then(function (weights) { return weights.map(function (weight) { return _this.loggedDateConversion(weight); }); })
            .catch(WeightsService_1.HandleError);
    };
    /**
     * Converts logged date string value to date value
     * @param weight
     */
    WeightsService.prototype.loggedDateConversion = function (weight) {
        if (weight !== null) {
            weight.logged_on = moment__WEBPACK_IMPORTED_MODULE_3__["utc"](weight.logged_on, 'YYYY-MM-DD HH:mm:ss', true);
        }
        return weight;
    };
    /**
     * Updates the weight
     * @param id
     * @param weight
     */
    WeightsService.prototype.updateWeight = function (id, weight) {
        var _this = this;
        return this.http.put(WeightsService_1.Url("weigh-ins/" + id), { weight: weight }, WeightsService_1.BaseOptions())
            .toPromise()
            .then(function (newWeight) { return _this.loggedDateConversion(newWeight); })
            .catch(WeightsService_1.HandleError);
    };
    /**
     * Deletes the weight
     * @param id
     */
    WeightsService.prototype.deleteWeight = function (id) {
        return this.http.delete(WeightsService_1.Url("weigh-ins/" + id), WeightsService_1.BaseOptions())
            .toPromise()
            .catch(WeightsService_1.HandleError);
    };
    WeightsService.prototype.checkWeightValue = function (weight) {
        if (weight.hasOwnProperty('id')) {
            return weight;
        }
        return null;
    };
    /**
     * Get single weight instance
     * @param id
     */
    WeightsService.prototype.getWeight = function (id) {
        var _this = this;
        return this.http.get(WeightsService_1.Url("weigh-ins/" + id), WeightsService_1.BaseOptions())
            .toPromise()
            .then(function (weight) { return _this.loggedDateConversion(weight); })
            .catch(WeightsService_1.HandleError);
    };
    var WeightsService_1;
    WeightsService = WeightsService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], WeightsService);
    return WeightsService;
}(_base_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ })

}]);
//# sourceMappingURL=pages-weight-weight-module.js.map