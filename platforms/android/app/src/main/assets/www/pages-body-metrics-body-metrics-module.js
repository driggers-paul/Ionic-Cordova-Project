(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-body-metrics-body-metrics-module"],{

/***/ "./src/app/pages/body-metrics/body-metrics.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/body-metrics/body-metrics.module.ts ***!
  \***********************************************************/
/*! exports provided: BodyMetricsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyMetricsPageModule", function() { return BodyMetricsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _body_metrics_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./body-metrics.page */ "./src/app/pages/body-metrics/body-metrics.page.ts");
/* harmony import */ var _components_chart_chart_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/chart/chart.module */ "./src/app/components/chart/chart.module.ts");
/* harmony import */ var _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/side-menu/side-menu.module */ "./src/app/components/side-menu/side-menu.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _body_metrics_page__WEBPACK_IMPORTED_MODULE_5__["BodyMetricsPage"]
    }
];
var BodyMetricsPageModule = /** @class */ (function () {
    function BodyMetricsPageModule() {
    }
    BodyMetricsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_chart_chart_module__WEBPACK_IMPORTED_MODULE_6__["ChartModule"],
                _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_7__["SideMenuModule"]
            ],
            declarations: [_body_metrics_page__WEBPACK_IMPORTED_MODULE_5__["BodyMetricsPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            exports: []
        })
    ], BodyMetricsPageModule);
    return BodyMetricsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/body-metrics/body-metrics.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/body-metrics/body-metrics.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>My Weigh-ins</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <app-menu-button></app-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"primary\" fill=\"clear\" (click)=\"goToAddWeighIn()\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <div class=\"heading\" margin-bottom *ngIf=\"weights.length > 1\">\r\n    {{ weights[weights.length - 1].weight }} lbs\r\n    <ion-icon name=\"arrow-round-forward\"></ion-icon>\r\n    {{ weights[0].weight }} lbs\r\n  </div>\r\n\r\n  <div class=\"heading\" margin-bottom *ngIf=\"weights.length === 1\">\r\n    {{ weights[0].weight }} lbs\r\n    <ion-icon name=\"arrow-round-forward\"></ion-icon>\r\n    {{ weights[0].weight }} lbs\r\n  </div>\r\n\r\n  <div class=\"heading\" margin-bottom *ngIf=\"weights.length === 0\">\r\n    No weigh-ins to see. Log one!\r\n  </div>\r\n\r\n  <app-chart margin-vertical [weights]=\"weights\"></app-chart>\r\n  <ion-list margin-top>\r\n    <ion-item *ngFor=\"let weight of weights; let i = index; last as isLast\" (click)=\"goToEditWeight(weight)\">\r\n      <ion-label>{{ weight.weight }} lbs <span class=\"diff\" *ngIf=\"!isLast\">({{ diffInWeight(i) > 0 ? '+' : '' }}{{ diffInWeight(i) }} {{ Math.abs(diffInWeight(i)) > 1 ? 'lbs' : 'lb'}})</span></ion-label>\r\n      <span class=\"time\">{{ weight.logged_on.local().fromNow() }}</span>\r\n      <ion-button fill=\"clear\" type=\"button\">\r\n        <ion-icon name=\"arrow-forward\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/body-metrics/body-metrics.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/body-metrics/body-metrics.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading {\n  text-align: center; }\n\n.time {\n  font-size: 80%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm9keS1tZXRyaWNzL0U6XFxpb25pY1xcVmVydmVDb21tZXJjZVxcTmV3RGV2XFxtdHN0LWFwcC9zcmNcXGFwcFxccGFnZXNcXGJvZHktbWV0cmljc1xcYm9keS1tZXRyaWNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JvZHktbWV0cmljcy9ib2R5LW1ldHJpY3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmcge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRpbWUge1xyXG4gIGZvbnQtc2l6ZTogODAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/body-metrics/body-metrics.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/body-metrics/body-metrics.page.ts ***!
  \*********************************************************/
/*! exports provided: BodyMetricsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyMetricsPage", function() { return BodyMetricsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_weights_weights_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/weights/weights.service */ "./src/app/services/weights/weights.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
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





var BodyMetricsPage = /** @class */ (function () {
    function BodyMetricsPage(errorService, loadingCtrl, toastCtrl, weightService, navCtrl) {
        this.errorService = errorService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.weightService = weightService;
        this.navCtrl = navCtrl;
        this.weights = [];
        this.Math = Math;
    }
    BodyMetricsPage.prototype.ngOnInit = function () {
        this.setupWeights();
    };
    BodyMetricsPage.prototype.setupWeights = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, weights, now_1, e_1, toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Please wait ...'
                        })];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, 8, 9]);
                        return [4 /*yield*/, this.weightService.listWeights()];
                    case 4:
                        weights = _a.sent();
                        now_1 = moment__WEBPACK_IMPORTED_MODULE_4__();
                        this.weights = weights.reduce(function (carry, weight) {
                            var displayWeight = weight;
                            if (now_1.diff(displayWeight.logged_on, 'days') === 0) {
                                displayWeight.diffInDateAsReadable = 'Today';
                            }
                            else if (now_1.diff(displayWeight.logged_on, 'weeks') !== 0) {
                                displayWeight.diffInDateAsReadable = now_1.diff(displayWeight.logged_on, 'weeks') + " weeks ago";
                            }
                            else {
                                displayWeight.diffInDateAsReadable = now_1.diff(displayWeight.logged_on, 'days') + " days ago";
                            }
                            carry.push(displayWeight);
                            return carry;
                        }, []);
                        return [3 /*break*/, 9];
                    case 5:
                        e_1 = _a.sent();
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: this.errorService.firstError(e_1),
                                duration: 3000,
                            })];
                    case 6:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    BodyMetricsPage.prototype.diffInWeight = function (currentIndex) {
        if (currentIndex === this.weights.length - 1) {
            return 0;
        }
        else {
            return (-1 *
                (this.weights[currentIndex + 1].weight -
                    this.weights[currentIndex].weight));
        }
    };
    BodyMetricsPage.prototype.goToAddWeighIn = function () {
        this.navCtrl.navigateRoot('weight', {
            animationDirection: 'forward',
            animated: true
        });
    };
    BodyMetricsPage.prototype.goToEditWeight = function (weight) {
        this.navCtrl.navigateRoot("weight/" + weight.id + "/edit");
    };
    BodyMetricsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-body-metrics',
            template: __webpack_require__(/*! ./body-metrics.page.html */ "./src/app/pages/body-metrics/body-metrics.page.html"),
            styles: [__webpack_require__(/*! ./body-metrics.page.scss */ "./src/app/pages/body-metrics/body-metrics.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_errors_errors_service__WEBPACK_IMPORTED_MODULE_1__["ErrorsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _services_weights_weights_service__WEBPACK_IMPORTED_MODULE_3__["WeightsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], BodyMetricsPage);
    return BodyMetricsPage;
}());



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
//# sourceMappingURL=pages-body-metrics-body-metrics-module.js.map