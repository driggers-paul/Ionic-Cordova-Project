(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-trainer-detail-trainer-detail-module"],{

/***/ "./src/app/pages/trainer-detail/trainer-detail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/trainer-detail/trainer-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: TrainerDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerDetailPageModule", function() { return TrainerDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _trainer_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trainer-detail.page */ "./src/app/pages/trainer-detail/trainer-detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _trainer_detail_page__WEBPACK_IMPORTED_MODULE_5__["TrainerDetailPage"]
    }
];
var TrainerDetailPageModule = /** @class */ (function () {
    function TrainerDetailPageModule() {
    }
    TrainerDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_trainer_detail_page__WEBPACK_IMPORTED_MODULE_5__["TrainerDetailPage"]]
        })
    ], TrainerDetailPageModule);
    return TrainerDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/trainer-detail/trainer-detail.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/trainer-detail/trainer-detail.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button default-href=\"/messages\" text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Advisor Detail</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"trainer\">\r\n  <ion-list>\r\n    <ion-list-header>\r\n      General\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>\r\n        Name\r\n      </ion-label>\r\n      {{ trainer.transphormer.display_name }}\r\n    </ion-item>\r\n    <ion-item *ngIf=\"trainer.city !== '' && trainer.state !== ''\">\r\n      <ion-label>\r\n        Location\r\n      </ion-label>\r\n      {{ trainer.city }}, {{ trainer.state }}\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        Years Training\r\n      </ion-label>\r\n      {{ trainer.years_training }}\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        Certifications\r\n      </ion-label>\r\n      {{ trainer.certifications }}\r\n    </ion-item>\r\n    <ion-list-header>\r\n      Social Media\r\n    </ion-list-header>\r\n    <ion-item *ngIf=\"trainer.facebook_group\" (click)=\"visitUrl(trainer.facebook_group)\">\r\n      <ion-icon margin-right name=\"logo-facebook\" item-start></ion-icon>\r\n      Facebook Group\r\n    </ion-item>\r\n    <ion-item *ngIf=\"trainer.facebook\" (click)=\"visitFacebook(trainer.facebook)\">\r\n      <ion-icon margin-right name=\"logo-facebook\" item-start></ion-icon>\r\n      {{ trainer.facebook }}\r\n    </ion-item>\r\n    <ion-item *ngIf=\"trainer.instagram\" (click)=\"visitInstagram(trainer.instagram)\">\r\n      <ion-icon margin-right name=\"logo-instagram\" item-start></ion-icon>\r\n      {{ trainer.instagram }}\r\n    </ion-item>\r\n    <ion-item *ngIf=\"trainer.linkedin\" (click)=\"visitLinkedIn(trainer.linkedin)\">\r\n      <ion-icon margin-right name=\"logo-linkedin\" item-start></ion-icon>\r\n      {{ trainer.linkedin }}\r\n    </ion-item>\r\n    <ion-item *ngIf=\"trainer.pintrest\" (click)=\"visitPinterest(trainer.pintrest)\">\r\n      <ion-icon margin-right name=\"logo-pinterest\" item-start></ion-icon>\r\n      {{ trainer.pintrest }}\r\n    </ion-item>\r\n    <ion-item *ngIf=\"trainer.twitter\" (click)=\"visitTwitter(trainer.twitter)\">\r\n      <ion-icon margin-right name=\"logo-twitter\" item-start></ion-icon>\r\n      {{ trainer.twitter }}\r\n    </ion-item>\r\n    <ion-item *ngIf=\"trainer.youtube\" (click)=\"visitYoutube(trainer.youtube)\">\r\n      <ion-icon margin-right name=\"logo-youtube\" item-start></ion-icon>\r\n      {{ trainer.youtube }}\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/trainer-detail/trainer-detail.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/trainer-detail/trainer-detail.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYWluZXItZGV0YWlsL3RyYWluZXItZGV0YWlsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/trainer-detail/trainer-detail.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/trainer-detail/trainer-detail.page.ts ***!
  \*************************************************************/
/*! exports provided: TrainerDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerDetailPage", function() { return TrainerDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_trainer_trainer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/trainer/trainer.service */ "./src/app/services/trainer/trainer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var TrainerDetailPage = /** @class */ (function () {
    function TrainerDetailPage(errorService, toastCtrl, loadingCtrl, trainerService, route) {
        this.errorService = errorService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.trainerService = trainerService;
        this.route = route;
    }
    TrainerDetailPage.prototype.ngOnInit = function () {
        this.setupTrainer();
    };
    TrainerDetailPage.prototype.checkHttp = function (url, prepend) {
        if (url.indexOf('http') === -1) {
            return prepend + url;
        }
        return url;
    };
    TrainerDetailPage.prototype.visitFacebook = function (url) {
        return this.visitUrl(this.checkHttp(url, 'https://www.facebook.com/'));
    };
    TrainerDetailPage.prototype.visitTwitter = function (url) {
        return this.visitUrl(this.checkHttp(url, 'https://www.twitter.com/'));
    };
    TrainerDetailPage.prototype.visitPinterest = function (url) {
        return this.visitUrl(this.checkHttp(url, 'https://www.pinterest.com/'));
    };
    TrainerDetailPage.prototype.visitInstagram = function (url) {
        return this.visitUrl(this.checkHttp(url, 'https://www.instagram.com/'));
    };
    TrainerDetailPage.prototype.visitYoutube = function (url) {
        return this.visitUrl(this.checkHttp(url, 'https://www.youtube.com/results?search_query='));
    };
    TrainerDetailPage.prototype.visitLinkedIn = function (url) {
        return this.visitUrl(this.checkHttp(url, 'https://www.linkedin.com/in/'));
    };
    TrainerDetailPage.prototype.visitUrl = function (url) {
        window.open(url, '_system', 'location=yes');
        return false;
    };
    TrainerDetailPage.prototype.setupTrainer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, _a, e_1, toast;
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
                        _b.trys.push([3, 5, 8, 9]);
                        _a = this;
                        return [4 /*yield*/, this.trainerService.getTrainerByTransphormerId(parseFloat(this.route.snapshot.paramMap.get('id')))];
                    case 4:
                        _a.trainer = (_b.sent());
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
    TrainerDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trainer-detail',
            template: __webpack_require__(/*! ./trainer-detail.page.html */ "./src/app/pages/trainer-detail/trainer-detail.page.html"),
            styles: [__webpack_require__(/*! ./trainer-detail.page.scss */ "./src/app/pages/trainer-detail/trainer-detail.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_errors_errors_service__WEBPACK_IMPORTED_MODULE_1__["ErrorsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _services_trainer_trainer_service__WEBPACK_IMPORTED_MODULE_3__["TrainerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TrainerDetailPage);
    return TrainerDetailPage;
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
//# sourceMappingURL=pages-trainer-detail-trainer-detail-module.js.map