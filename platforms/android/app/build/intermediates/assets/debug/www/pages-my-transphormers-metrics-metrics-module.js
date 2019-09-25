(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-transphormers-metrics-metrics-module"],{

/***/ "./src/app/pages/my-transphormers/metrics/metrics.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/my-transphormers/metrics/metrics.module.ts ***!
  \******************************************************************/
/*! exports provided: MetricsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricsPageModule", function() { return MetricsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _metrics_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metrics.page */ "./src/app/pages/my-transphormers/metrics/metrics.page.ts");
/* harmony import */ var _components_chart_chart_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/chart/chart.module */ "./src/app/components/chart/chart.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _metrics_page__WEBPACK_IMPORTED_MODULE_5__["MetricsPage"]
    }
];
var MetricsPageModule = /** @class */ (function () {
    function MetricsPageModule() {
    }
    MetricsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_chart_chart_module__WEBPACK_IMPORTED_MODULE_6__["ChartModule"]
            ],
            declarations: [_metrics_page__WEBPACK_IMPORTED_MODULE_5__["MetricsPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MetricsPageModule);
    return MetricsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/my-transphormers/metrics/metrics.page.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/my-transphormers/metrics/metrics.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>My Body Metrics</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button default-href=\"/dashboard\" text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <div class=\"heading\" text-center margin-bottom *ngIf=\"weights.length > 1\">\r\n    {{ weights[weights.length - 1].weight }} lbs\r\n    <ion-icon name=\"arrow-round-forward\"></ion-icon>\r\n    {{ weights[0].weight }}lbs\r\n  </div>\r\n\r\n  <div class=\"heading\" *ngIf=\"weights.length === 1\">\r\n    {{ weights[0].weight }} lbs\r\n    <ion-icon name=\"arrow-round-forward\"></ion-icon>\r\n    {{ weights[0].weight }}lbs\r\n  </div>\r\n\r\n  <div class=\"heading\" margin-bottom *ngIf=\"weights.length === 0\">\r\n    No weigh-ins to see. Log one!\r\n  </div>\r\n\r\n  <app-chart margin-vertical [weights]=\"weights\"></app-chart>\r\n  <ion-list margin-top>\r\n    <ion-item *ngFor=\"let weight of weights; let i = index; let last = last\">\r\n      <ion-label>{{ weight.weight }} lbs <span class=\"diff\" *ngIf=\"!last\">({{ diffInWeight(i) }} {{ Math.abs(diffInWeight(i)) > 1 ? 'lbs' : 'lb'}})</span></ion-label>\r\n      <span class=\"time\">{{ weight.logged_on.fromNow() }}</span>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/my-transphormers/metrics/metrics.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/my-transphormers/metrics/metrics.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215LXRyYW5zcGhvcm1lcnMvbWV0cmljcy9tZXRyaWNzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/my-transphormers/metrics/metrics.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/my-transphormers/metrics/metrics.page.ts ***!
  \****************************************************************/
/*! exports provided: MetricsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricsPage", function() { return MetricsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_trainer_transphormer_trainer_transphormer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/trainer-transphormer/trainer-transphormer.service */ "./src/app/services/trainer-transphormer/trainer-transphormer.service.ts");
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






var MetricsPage = /** @class */ (function () {
    function MetricsPage(errorService, loadingCtrl, toastCtrl, trainerTransphormerService, router) {
        this.errorService = errorService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.trainerTransphormerService = trainerTransphormerService;
        this.router = router;
        this.weights = [];
        this.Math = Math;
    }
    MetricsPage.prototype.ngOnInit = function () {
        this.setupWeights();
    };
    MetricsPage.prototype.setupWeights = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, weights, now_1, e_1, toast;
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
                        _a.trys.push([3, 5, 8, 9]);
                        return [4 /*yield*/, this.trainerTransphormerService
                                .transphormerWeights(parseFloat(this.router.snapshot.paramMap.get('id')))];
                    case 4:
                        weights = _a.sent();
                        now_1 = moment__WEBPACK_IMPORTED_MODULE_1__();
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
    MetricsPage.prototype.diffInWeight = function (currentIndex) {
        if (currentIndex === this.weights.length - 1) {
            return 0;
        }
        else {
            return (-1) * (this.weights[currentIndex + 1].weight - this.weights[currentIndex].weight);
        }
    };
    MetricsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-metrics',
            template: __webpack_require__(/*! ./metrics.page.html */ "./src/app/pages/my-transphormers/metrics/metrics.page.html"),
            styles: [__webpack_require__(/*! ./metrics.page.scss */ "./src/app/pages/my-transphormers/metrics/metrics.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_errors_errors_service__WEBPACK_IMPORTED_MODULE_2__["ErrorsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _services_trainer_transphormer_trainer_transphormer_service__WEBPACK_IMPORTED_MODULE_4__["TrainerTransphormerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], MetricsPage);
    return MetricsPage;
}());



/***/ }),

/***/ "./src/app/services/trainer-transphormer/trainer-transphormer.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/services/trainer-transphormer/trainer-transphormer.service.ts ***!
  \*******************************************************************************/
/*! exports provided: TrainerTransphormerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerTransphormerService", function() { return TrainerTransphormerService; });
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





var TrainerTransphormerService = /** @class */ (function (_super) {
    __extends(TrainerTransphormerService, _super);
    function TrainerTransphormerService(http, platform) {
        var _this = _super.call(this, http, platform) || this;
        _this.http = http;
        _this.platform = platform;
        TrainerTransphormerService_1.SET_PLATFORM(platform);
        return _this;
    }
    TrainerTransphormerService_1 = TrainerTransphormerService;
    TrainerTransphormerService.prototype.transphormers = function (params, page, perPage) {
        if (params === void 0) { params = null; }
        if (page === void 0) { page = 1; }
        if (perPage === void 0) { perPage = 100; }
        var options = TrainerTransphormerService_1.BaseOptions();
        options.params = params ? Object.assign({}, params) : {};
        options.params.perPage = perPage.toString();
        options.params.page = page.toString();
        return this.http
            .get(TrainerTransphormerService_1.Url('trainer/transphormer'), options)
            .toPromise()
            .catch(TrainerTransphormerService_1.HandleError);
    };
    TrainerTransphormerService.prototype.transphormer = function (id) {
        return this.http
            .get(TrainerTransphormerService_1.Url("trainer/transphormer/" + id), TrainerTransphormerService_1.BaseOptions())
            .toPromise()
            .catch(TrainerTransphormerService_1.HandleError);
    };
    TrainerTransphormerService.prototype.transphormerPhotos = function (transphormerId) {
        return this.http.get(TrainerTransphormerService_1.Url("trainer/transphormer/" + transphormerId + "/camera"), TrainerTransphormerService_1.BaseOptions())
            .toPromise()
            .catch(TrainerTransphormerService_1.HandleError);
    };
    TrainerTransphormerService.prototype.transphormerWeights = function (transphormerId) {
        var _this = this;
        return this.http.get(TrainerTransphormerService_1.Url("trainer/transphormer/" + transphormerId + "/weigh-ins"), TrainerTransphormerService_1.BaseOptions())
            .toPromise()
            .then(function (weights) { return weights.map(function (weight) { return _this.loggedDateConversion(weight); }); })
            .catch(TrainerTransphormerService_1.HandleError);
    };
    TrainerTransphormerService.prototype.trackedItems = function (transphormerId, from, to) {
        var url = "trainer/transphormer/" + transphormerId + "/tracked-items";
        var opts = [];
        if (from) {
            opts.push('from=' + escape(from));
        }
        if (to) {
            opts.push('to=' + escape(to));
        }
        if (opts.length > 0) {
            url += '?' + opts.join('&');
        }
        return this.http.get(TrainerTransphormerService_1.Url(url), TrainerTransphormerService_1.BaseOptions())
            .toPromise()
            .catch(TrainerTransphormerService_1.HandleError);
    };
    /**
     * Converts logged date string value to date value
     * @param weight
     */
    TrainerTransphormerService.prototype.loggedDateConversion = function (weight) {
        weight.logged_on = moment__WEBPACK_IMPORTED_MODULE_3__(weight.logged_on, 'YYYY-MM-DD HH:mm:ss', true);
        return weight;
    };
    var TrainerTransphormerService_1;
    TrainerTransphormerService = TrainerTransphormerService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], TrainerTransphormerService);
    return TrainerTransphormerService;
}(_base_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ })

}]);
//# sourceMappingURL=pages-my-transphormers-metrics-metrics-module.js.map