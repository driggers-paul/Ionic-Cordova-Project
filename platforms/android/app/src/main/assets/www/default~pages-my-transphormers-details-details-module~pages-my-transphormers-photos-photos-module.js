(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-my-transphormers-details-details-module~pages-my-transphormers-photos-photos-module"],{

/***/ "./src/app/components/progress-update/progress-update.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/progress-update/progress-update.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"update\">\r\n    <div class=\"photos\">\r\n        <div *ngIf=\"update.picture_front\" class=\"thumbnail\" (click)=\"openZoomImg(update.picture_front)\">\r\n            <img [src]=\"update.picture_front\" />\r\n        </div>\r\n        <div *ngIf=\"update.picture_back\" class=\"thumbnail\" (click)=\"openZoomImg(update.picture_back)\">\r\n            <img [src]=\"update.picture_back\" />\r\n        </div>\r\n        <div *ngIf=\"update.picture_side\" class=\"thumbnail\" (click)=\"openZoomImg(update.picture_side)\">\r\n            <img [src]=\"update.picture_side\" />\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"expanded && hasExpandibles\" padding>\r\n        <ion-button *ngIf=\"update.video_url\" (click)=\"viewVideo()\" color=\"primary\" expand=\"full\" class=\"video-link\"><ion-icon name=\"videocam\" slot=\"start\"></ion-icon> View Update Video</ion-button>\r\n        <div *ngIf=\"update.text\" class=\"update-text\" [innerText]=\"update.text\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/progress-update/progress-update.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/progress-update/progress-update.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".update {\n  display: flex;\n  flex-direction: column; }\n  .update .photos {\n    display: flex;\n    justify-content: space-around; }\n  .thumbnail {\n  margin-right: 10px;\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .thumbnail:last-child {\n    margin-right: 0; }\n  .thumbnail img {\n    height: 100%; }\n  .update-text {\n  white-space: pre-line; }\n  @media screen and (max-width: 768px) {\n  .thumbnail {\n    height: auto; }\n    .thumbnail img {\n      height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9ncmVzcy11cGRhdGUvRTpcXGlvbmljXFxWZXJ2ZUNvbW1lcmNlXFxOZXdEZXZcXG10c3QtYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9ncmVzcy11cGRhdGVcXHByb2dyZXNzLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtFQUZ4QjtJQUlJLGFBQWE7SUFDYiw2QkFBNkIsRUFBQTtFQUlqQztFQUNFLGtCQUFrQjtFQUlsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtFQVJyQjtJQUdJLGVBQWUsRUFBQTtFQUhuQjtJQVdJLFlBQVksRUFBQTtFQUloQjtFQUNFLHFCQUFxQixFQUFBO0VBR3ZCO0VBQ0U7SUFDRSxZQUFZLEVBQUE7SUFEZDtNQUlJLFlBQVksRUFBQSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9ncmVzcy11cGRhdGUvcHJvZ3Jlc3MtdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwZGF0ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC5waG90b3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIH1cclxufVxyXG5cclxuLnRodW1ibmFpbCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLnVwZGF0ZS10ZXh0IHtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnRodW1ibmFpbCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/progress-update/progress-update.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/progress-update/progress-update.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProgressUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressUpdateComponent", function() { return ProgressUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _zoom_img_zoom_img_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zoom-img/zoom-img.component */ "./src/app/components/zoom-img/zoom-img.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
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




var ProgressUpdateComponent = /** @class */ (function () {
    function ProgressUpdateComponent(modal, iab) {
        this.modal = modal;
        this.iab = iab;
        this.update = {
            picture_front: null,
            picture_side: null,
            picture_back: null,
            transphormer_id: 0,
            created_at: '',
            id: 0,
            video_url: null,
            text: null,
        };
    }
    ProgressUpdateComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ProgressUpdateComponent.prototype, "hasExpandibles", {
        get: function () {
            return this.update.video_url || this.update.text;
        },
        enumerable: true,
        configurable: true
    });
    ProgressUpdateComponent.prototype.viewVideo = function () {
        this.iab.create(this.update.video_url, '_system', { location: 'yes' });
    };
    ProgressUpdateComponent.prototype.openZoomImg = function (imageSource) {
        return __awaiter(this, void 0, void 0, function () {
            var myModal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: _zoom_img_zoom_img_component__WEBPACK_IMPORTED_MODULE_1__["ZoomImgComponent"],
                            backdropDismiss: false,
                            componentProps: {
                                imgSource: imageSource
                            },
                        })];
                    case 1:
                        myModal = _a.sent();
                        return [4 /*yield*/, myModal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProgressUpdateComponent.prototype, "expanded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgressUpdateComponent.prototype, "update", void 0);
    ProgressUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progress-update',
            template: __webpack_require__(/*! ./progress-update.component.html */ "./src/app/components/progress-update/progress-update.component.html"),
            styles: [__webpack_require__(/*! ./progress-update.component.scss */ "./src/app/components/progress-update/progress-update.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"]])
    ], ProgressUpdateComponent);
    return ProgressUpdateComponent;
}());



/***/ }),

/***/ "./src/app/components/progress-update/progress-update.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/progress-update/progress-update.module.ts ***!
  \**********************************************************************/
/*! exports provided: ProgressUpdateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressUpdateModule", function() { return ProgressUpdateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _progress_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress-update.component */ "./src/app/components/progress-update/progress-update.component.ts");
/* harmony import */ var _zoom_img_zoom_img_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../zoom-img/zoom-img.module */ "./src/app/components/zoom-img/zoom-img.module.ts");
/* harmony import */ var _zoom_img_zoom_img_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../zoom-img/zoom-img.component */ "./src/app/components/zoom-img/zoom-img.component.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProgressUpdateModule = /** @class */ (function () {
    function ProgressUpdateModule() {
    }
    ProgressUpdateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _zoom_img_zoom_img_module__WEBPACK_IMPORTED_MODULE_4__["ZoomImgModule"]
            ],
            declarations: [_progress_update_component__WEBPACK_IMPORTED_MODULE_3__["ProgressUpdateComponent"]],
            exports: [_progress_update_component__WEBPACK_IMPORTED_MODULE_3__["ProgressUpdateComponent"]],
            entryComponents: [_zoom_img_zoom_img_component__WEBPACK_IMPORTED_MODULE_5__["ZoomImgComponent"]],
            providers: [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]]
        })
    ], ProgressUpdateModule);
    return ProgressUpdateModule;
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
//# sourceMappingURL=default~pages-my-transphormers-details-details-module~pages-my-transphormers-photos-photos-module.js.map