(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-transphormers-photos-photos-module"],{

/***/ "./src/app/pages/my-transphormers/photos/photos.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/my-transphormers/photos/photos.module.ts ***!
  \****************************************************************/
/*! exports provided: PhotosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosPageModule", function() { return PhotosPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _photos_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photos.page */ "./src/app/pages/my-transphormers/photos/photos.page.ts");
/* harmony import */ var _components_progress_update_progress_update_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/progress-update/progress-update.module */ "./src/app/components/progress-update/progress-update.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _photos_page__WEBPACK_IMPORTED_MODULE_5__["PhotosPage"]
    }
];
var PhotosPageModule = /** @class */ (function () {
    function PhotosPageModule() {
    }
    PhotosPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_progress_update_progress_update_module__WEBPACK_IMPORTED_MODULE_6__["ProgressUpdateModule"]
            ],
            declarations: [_photos_page__WEBPACK_IMPORTED_MODULE_5__["PhotosPage"]],
        })
    ], PhotosPageModule);
    return PhotosPageModule;
}());



/***/ }),

/***/ "./src/app/pages/my-transphormers/photos/photos.page.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/my-transphormers/photos/photos.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button [defaultHref]=\"'/details/' + transphormerId\" text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" (click)=\"photoListingAction()\">\r\n      <ion-icon name=\"more\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Transphormer Updates</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<div id=\"main-updates\" [ngSwitch]=\"allImages.length\">\r\n  <div *ngSwitchCase=\"0\" text-center>\r\n    No Images uploaded.\r\n  </div>\r\n  <div *ngSwitchCase=\"1\">\r\n    <h6 class=\"list-header\">First & Only Update</h6>\r\n    <app-progress-update [update]=\"latestImage\" expanded=\"true\"></app-progress-update>\r\n  </div>\r\n  <div *ngSwitchDefault>\r\n    <div class=\"latest-progress\" *ngIf=\"latestImage\">\r\n      <h6 class=\"list-header\">Latest Progress</h6>\r\n      <app-progress-update [update]=\"latestImage\"></app-progress-update>\r\n    </div>\r\n    <h6 class=\"list-header\">Past Progress</h6>\r\n    <div class=\"older-progress\">\r\n      <div class=\"older-progress-block\" *ngFor=\"let image of images\">\r\n        <h6 class=\"list-header\">Uploaded on {{ formatImage(image.created_at) }}</h6>\r\n        <app-progress-update [update]=\"image\" [expanded]=\"this.showDetails\"></app-progress-update>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/my-transphormers/photos/photos.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/my-transphormers/photos/photos.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  color: var(--ion-color-primary-contrast);\n  padding-right: 10px;\n  font-size: 24px; }\n\n.list-header {\n  background-color: var(--ion-color-header);\n  padding: 10px;\n  text-transform: uppercase;\n  font-size: 12px;\n  margin-bottom: 5px; }\n\n.older-progress {\n  height: calc(100vh - 308px);\n  overflow-y: scroll; }\n\n#main-updates {\n  height: calc(100vh - 44px); }\n\n.plt-android #main-updates {\n  height: calc(100vh - 74px); }\n\n@media screen and (max-width: 768px) {\n  .thumbnail {\n    height: auto; }\n    .thumbnail img {\n      height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktdHJhbnNwaG9ybWVycy9waG90b3MvRTpcXGlvbmljXFxWZXJ2ZUNvbW1lcmNlXFxOZXdEZXZcXG10c3QtYXBwL3NyY1xcYXBwXFxwYWdlc1xcbXktdHJhbnNwaG9ybWVyc1xccGhvdG9zXFxwaG90b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQXdDO0VBQ3hDLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRTtJQUNFLFlBQVksRUFBQTtJQURkO01BSUksWUFBWSxFQUFBLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9teS10cmFuc3Bob3JtZXJzL3Bob3Rvcy9waG90b3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5saXN0LWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWhlYWRlcik7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5vbGRlci1wcm9ncmVzcyB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzA4cHgpO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuI21haW4tdXBkYXRlcyB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDRweCk7XHJcbn1cclxuXHJcbi5wbHQtYW5kcm9pZCAjbWFpbi11cGRhdGVzIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NHB4KTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAudGh1bWJuYWlsIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/my-transphormers/photos/photos.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/my-transphormers/photos/photos.page.ts ***!
  \**************************************************************/
/*! exports provided: PhotosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosPage", function() { return PhotosPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_trainer_transphormer_trainer_transphormer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/trainer-transphormer/trainer-transphormer.service */ "./src/app/services/trainer-transphormer/trainer-transphormer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
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






var PhotosPage = /** @class */ (function () {
    function PhotosPage(errorService, toastCtrl, loadingCtrl, trainerTransphormerService, router, actionCtrl) {
        this.errorService = errorService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.trainerTransphormerService = trainerTransphormerService;
        this.router = router;
        this.actionCtrl = actionCtrl;
        this.images = [];
        this.allImages = [];
        this.showDetails = true;
    }
    PhotosPage.prototype.ngOnInit = function () {
        this.setupImages();
    };
    PhotosPage.prototype.setupImages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, _a, e_1, toast;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Please wait',
                        })];
                    case 1:
                        loader = _b.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, 8, 9]);
                        this.transphormerId = +this.router.snapshot.paramMap.get('id');
                        _a = this;
                        return [4 /*yield*/, this.trainerTransphormerService
                                .transphormerPhotos(this.transphormerId)];
                    case 4:
                        _a.allImages = (_b.sent());
                        this.images = this.allImages.slice(0);
                        this.latestImage = this.images[0];
                        this.images.splice(0, 1);
                        return [3 /*break*/, 9];
                    case 5:
                        e_1 = _b.sent();
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: this.errorService.firstError(e_1),
                                duration: 3000,
                            })];
                    case 6:
                        toast = _b.sent();
                        return [4 /*yield*/, toast.present()];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    PhotosPage.prototype.formatImage = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_5__(date, 'YYYY-MM-DD HH:mm:ss').format('MMMM Do, YYYY');
    };
    PhotosPage.prototype.photoListingAction = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionCtrl.create({
                            buttons: [
                                {
                                    text: 'Reverse Order',
                                    icon: 'funnel',
                                    handler: function () {
                                        _this.images = _this.images.reverse();
                                    },
                                },
                                {
                                    text: this.showDetails ? 'Hide Details' : 'Show Details',
                                    icon: 'star',
                                    handler: function () {
                                        _this.showDetails = !_this.showDetails;
                                    },
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                },
                            ],
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PhotosPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photos',
            template: __webpack_require__(/*! ./photos.page.html */ "./src/app/pages/my-transphormers/photos/photos.page.html"),
            styles: [__webpack_require__(/*! ./photos.page.scss */ "./src/app/pages/my-transphormers/photos/photos.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_errors_errors_service__WEBPACK_IMPORTED_MODULE_1__["ErrorsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _services_trainer_transphormer_trainer_transphormer_service__WEBPACK_IMPORTED_MODULE_3__["TrainerTransphormerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]])
    ], PhotosPage);
    return PhotosPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-my-transphormers-photos-photos-module.js.map