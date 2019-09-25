(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-photo-listing-photo-listing-module"],{

/***/ "./src/app/pages/photo-listing/photo-listing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/photo-listing/photo-listing.module.ts ***!
  \*************************************************************/
/*! exports provided: PhotoListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoListingPageModule", function() { return PhotoListingPageModule; });
/* harmony import */ var _components_zoom_img_zoom_img_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/zoom-img/zoom-img.component */ "./src/app/components/zoom-img/zoom-img.component.ts");
/* harmony import */ var _components_zoom_img_zoom_img_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/zoom-img/zoom-img.module */ "./src/app/components/zoom-img/zoom-img.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _photo_listing_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./photo-listing.page */ "./src/app/pages/photo-listing/photo-listing.page.ts");
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
        component: _photo_listing_page__WEBPACK_IMPORTED_MODULE_7__["PhotoListingPage"]
    }
];
var PhotoListingPageModule = /** @class */ (function () {
    function PhotoListingPageModule() {
    }
    PhotoListingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _components_zoom_img_zoom_img_module__WEBPACK_IMPORTED_MODULE_1__["ZoomImgModule"],
                _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_8__["SideMenuModule"]
            ],
            declarations: [_photo_listing_page__WEBPACK_IMPORTED_MODULE_7__["PhotoListingPage"]],
            entryComponents: [_components_zoom_img_zoom_img_component__WEBPACK_IMPORTED_MODULE_0__["ZoomImgComponent"]]
        })
    ], PhotoListingPageModule);
    return PhotoListingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/photo-listing/photo-listing.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/photo-listing/photo-listing.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <app-menu-button></app-menu-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button (click)=\"photoListingAction()\">\r\n                <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n        <ion-title>My Photos</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content scrollY=\"false\" *ngIf=\"allImages.length !== 0\">\r\n    <div class=\"container\">\r\n        <div class=\"latest-progress\" *ngIf=\"latestImage\">\r\n            <h6 class=\"list-header\">Latest Progress</h6>\r\n            <div class=\"image-set\">\r\n                <div class=\"thumbnail\" (click)=\"openZoomImg(latestImage.picture_front)\">\r\n                    <img [src]=\"latestImage.picture_front\" alt=\"\">\r\n                </div>\r\n                <div class=\"thumbnail\" (click)=\"openZoomImg(latestImage.picture_back)\">\r\n                    <img [src]=\"latestImage.picture_back\" alt=\"\">\r\n                </div>\r\n                <div class=\"thumbnail\" (click)=\"openZoomImg(latestImage.picture_side)\">\r\n                    <img [src]=\"latestImage.picture_side\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"older-progress\">\r\n            <h6 class=\"list-header\">Past Progress</h6>\r\n            <div class=\"images-listing\">\r\n                <div class=\"older-progress-block\" *ngFor=\"let image of images\">\r\n                    <h6 class=\"list-header\">{{ formatImage(image.created_at) }}</h6>\r\n                    <div class=\"image-set\">\r\n                        <div class=\"thumbnail\" (click)=\"openZoomImg(image.picture_front)\">\r\n                            <img [src]=\"image.picture_front\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"thumbnail\" (click)=\"openZoomImg(image.picture_back)\">\r\n                            <img [src]=\"image.picture_back\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"thumbnail\" (click)=\"openZoomImg(image.picture_side)\">\r\n                            <img [src]=\"image.picture_side\" alt=\"\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n<ion-content *ngIf=\"allImages.length === 0\">\r\n    <div class=\"no-photos\">\r\n        <h6>No Images Uploaded.</h6>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/photo-listing/photo-listing.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/photo-listing/photo-listing.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --photo-padding: 10px; }\n\n.container {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 44px); }\n\n.plt-android .container {\n  height: calc(100vh - 74px); }\n\n.list-header {\n  background-color: var(--ion-color-header);\n  padding: var(--photo-padding);\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 12px;\n  margin-bottom: 5px; }\n\n.image-set {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--photo-padding); }\n\n.image-set .thumbnail {\n    width: calc((100vw - var(--photo-padding) * 4) / 3); }\n\n.older-progress {\n  display: flex;\n  overflow-y: hidden;\n  flex-direction: column; }\n\n.older-progress .images-listing {\n    overflow-y: scroll; }\n\n.no-photos {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGhvdG8tbGlzdGluZy9FOlxcaW9uaWNcXFZlcnZlQ29tbWVyY2VcXE5ld0RldlxcbXRzdC1hcHAvc3JjXFxhcHBcXHBhZ2VzXFxwaG90by1saXN0aW5nXFxwaG90by1saXN0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFnQixFQUFBOztBQUdsQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0UsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0UseUNBQXlDO0VBQ3pDLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsNkJBQTZCLEVBQUE7O0FBTC9CO0lBUUksbURBQW1ELEVBQUE7O0FBSXZEO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTs7QUFIeEI7SUFNSSxrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bob3RvLWxpc3RpbmcvcGhvdG8tbGlzdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1waG90by1wYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDRweCk7XHJcbn1cclxuXHJcbi5wbHQtYW5kcm9pZCAuY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NHB4KTtcclxufVxyXG5cclxuLmxpc3QtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItaGVhZGVyKTtcclxuICBwYWRkaW5nOiB2YXIoLS1waG90by1wYWRkaW5nKTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5pbWFnZS1zZXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiB2YXIoLS1waG90by1wYWRkaW5nKTtcclxuXHJcbiAgLnRodW1ibmFpbCB7XHJcbiAgICB3aWR0aDogY2FsYygoMTAwdncgLSB2YXIoLS1waG90by1wYWRkaW5nKSAqIDQpIC8gMyk7XHJcbiAgfVxyXG59XHJcblxyXG4ub2xkZXItcHJvZ3Jlc3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIC5pbWFnZXMtbGlzdGluZyB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgfVxyXG59XHJcblxyXG4ubm8tcGhvdG9zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/photo-listing/photo-listing.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/photo-listing/photo-listing.page.ts ***!
  \***********************************************************/
/*! exports provided: PhotoListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoListingPage", function() { return PhotoListingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_camera_camera_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/camera/camera.service */ "./src/app/services/camera/camera.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_zoom_img_zoom_img_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/zoom-img/zoom-img.component */ "./src/app/components/zoom-img/zoom-img.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
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







var PhotoListingPage = /** @class */ (function () {
    function PhotoListingPage(errorHandler, toastCtrl, loadingCtrl, cameraService, actionCtrl, navCtrl, modal, changeDetector) {
        this.errorHandler = errorHandler;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.cameraService = cameraService;
        this.actionCtrl = actionCtrl;
        this.navCtrl = navCtrl;
        this.modal = modal;
        this.changeDetector = changeDetector;
        this.images = [];
        this.allImages = [];
    }
    PhotoListingPage.prototype.ngOnInit = function () {
        this.setupImages();
    };
    PhotoListingPage.prototype.setupImages = function () {
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
                        _a = this;
                        return [4 /*yield*/, this.cameraService.images()];
                    case 4:
                        _a.allImages = (_b.sent());
                        this.images = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(this.allImages);
                        this.latestImage = this.images[0];
                        this.images.splice(0, 1);
                        return [3 /*break*/, 9];
                    case 5:
                        e_1 = _b.sent();
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: this.errorHandler.firstError(e_1),
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
    PhotoListingPage.prototype.photoListingAction = function () {
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
                                        _this.changeDetector.detectChanges();
                                    },
                                },
                                {
                                    text: 'Take new photos',
                                    icon: 'camera',
                                    handler: function () {
                                        _this.navCtrl.navigateRoot('camera', {
                                            animated: true,
                                            animationDirection: 'forward'
                                        });
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
    PhotoListingPage.prototype.formatImage = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_4__(date, 'YYYY-MM-DD HH:mm:ss').format('MMMM Do, YYYY');
    };
    PhotoListingPage.prototype.openZoomImg = function (imageSource) {
        return __awaiter(this, void 0, void 0, function () {
            var myModal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: _components_zoom_img_zoom_img_component__WEBPACK_IMPORTED_MODULE_5__["ZoomImgComponent"],
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
    PhotoListingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photo-listing',
            template: __webpack_require__(/*! ./photo-listing.page.html */ "./src/app/pages/photo-listing/photo-listing.page.html"),
            styles: [__webpack_require__(/*! ./photo-listing.page.scss */ "./src/app/pages/photo-listing/photo-listing.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_errors_errors_service__WEBPACK_IMPORTED_MODULE_1__["ErrorsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _services_camera_camera_service__WEBPACK_IMPORTED_MODULE_3__["CameraService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], PhotoListingPage);
    return PhotoListingPage;
}());



/***/ }),

/***/ "./src/app/services/camera/camera.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/camera/camera.service.ts ***!
  \***************************************************/
/*! exports provided: CameraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraService", function() { return CameraService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.service */ "./src/app/services/base/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rollbar */ "./src/app/rollbar.ts");
/* harmony import */ var rollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rollbar */ "./node_modules/rollbar/dist/rollbar.umd.min.js");
/* harmony import */ var rollbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rollbar__WEBPACK_IMPORTED_MODULE_5__);
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var CameraService = /** @class */ (function (_super) {
    __extends(CameraService, _super);
    function CameraService(http, platform, rollbar) {
        var _this = _super.call(this, http, platform) || this;
        _this.http = http;
        _this.platform = platform;
        _this.rollbar = rollbar;
        CameraService_1.SET_PLATFORM(platform);
        return _this;
    }
    CameraService_1 = CameraService;
    CameraService.prototype.uploadImages = function (data) {
        var _this = this;
        var options = CameraService_1.BaseOptions();
        options.headers.set('enctype', 'multipart/form-data');
        return this.http.post(CameraService_1.Url('camera'), data, options)
            .toPromise()
            .then(function (value) {
            return Promise.resolve(value);
        })
            .catch(function (errorResponse) {
            _this.rollbar.error(errorResponse);
            var errorContent = {
                status: errorResponse.status,
                list: { global: ['Something went wrong'] }
            };
            return Promise.reject(errorContent);
        });
    };
    CameraService.prototype.images = function () {
        return this.http.get(CameraService_1.Url('camera'), CameraService_1.BaseOptions(true, true))
            .toPromise()
            .catch(CameraService_1.HandleError);
    };
    var CameraService_1;
    CameraService = CameraService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_rollbar__WEBPACK_IMPORTED_MODULE_4__["RollbarService"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], rollbar__WEBPACK_IMPORTED_MODULE_5__])
    ], CameraService);
    return CameraService;
}(_base_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ })

}]);
//# sourceMappingURL=pages-photo-listing-photo-listing-module.js.map