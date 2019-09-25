(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-trainer-requests-trainer-requests-module"],{

/***/ "./src/app/components/trainer-linking/trainer-application/trainer-application.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/trainer-linking/trainer-application/trainer-application.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div padding>\r\n  <h4>Pending Advisor Request</h4>\r\n  <p text-center *ngIf=\"application\"><strong>{{ application.trainer.transphormer.first_name }} {{\r\n    application.trainer.transphormer.last_name }}</strong></p>\r\n  <p>\r\n    You've requested an advisor, but they have not yet responded.\r\n  </p>\r\n  <p>\r\n    If you'd like to find another advisor, or train by yourself, you can cancel this request.\r\n  </p>\r\n  <div class=\"button global-margin-top-25\">\r\n    <ion-button color=\"danger\" expand=\"full\" (click)=\"confirmCancel()\">Cancel Advisor Request</ion-button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/trainer-linking/trainer-application/trainer-application.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/trainer-linking/trainer-application/trainer-application.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhaW5lci1saW5raW5nL3RyYWluZXItYXBwbGljYXRpb24vdHJhaW5lci1hcHBsaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/trainer-linking/trainer-application/trainer-application.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/trainer-linking/trainer-application/trainer-application.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TrainerApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerApplicationComponent", function() { return TrainerApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_trainer_transphormer_link_trainer_transphormer_link_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/trainer-transphormer-link/trainer-transphormer-link.service */ "./src/app/services/trainer-transphormer-link/trainer-transphormer-link.service.ts");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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




var TrainerApplicationComponent = /** @class */ (function () {
    function TrainerApplicationComponent(errorService, linkService, toastCtrl, loadingCtrl, alertCtrl) {
        this.errorService = errorService;
        this.linkService = linkService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.cancelApplication = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TrainerApplicationComponent.prototype.ngOnInit = function () {
    };
    TrainerApplicationComponent.prototype.cancelRequest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, e_1, toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Cancelling request...',
                        })];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, 8, 9]);
                        return [4 /*yield*/, this.linkService.destroyLink(this.application.id)];
                    case 4:
                        _a.sent();
                        this.cancelApplication.emit(true);
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
    TrainerApplicationComponent.prototype.confirmCancel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Cancel Advisor Request?',
                            message: 'Are you sure you want to cancel your active Advisor request?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary'
                                },
                                {
                                    text: 'Ok',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            this.cancelRequest();
                                            return [2 /*return*/];
                                        });
                                    }); },
                                },
                            ],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrainerApplicationComponent.prototype, "application", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TrainerApplicationComponent.prototype, "cancelApplication", void 0);
    TrainerApplicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trainer-application',
            template: __webpack_require__(/*! ./trainer-application.component.html */ "./src/app/components/trainer-linking/trainer-application/trainer-application.component.html"),
            styles: [__webpack_require__(/*! ./trainer-application.component.scss */ "./src/app/components/trainer-linking/trainer-application/trainer-application.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_errors_errors_service__WEBPACK_IMPORTED_MODULE_2__["ErrorsService"],
            _services_trainer_transphormer_link_trainer_transphormer_link_service__WEBPACK_IMPORTED_MODULE_1__["TrainerTransphormerLinkService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], TrainerApplicationComponent);
    return TrainerApplicationComponent;
}());



/***/ }),

/***/ "./src/app/components/trainer-linking/trainer-linking.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/trainer-linking/trainer-linking.module.ts ***!
  \**********************************************************************/
/*! exports provided: TrainerLinkingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerLinkingModule", function() { return TrainerLinkingModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _trainer_request_trainer_request_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trainer-request/trainer-request.component */ "./src/app/components/trainer-linking/trainer-request/trainer-request.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _trainer_application_trainer_application_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trainer-application/trainer-application.component */ "./src/app/components/trainer-linking/trainer-application/trainer-application.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TrainerLinkingModule = /** @class */ (function () {
    function TrainerLinkingModule() {
    }
    TrainerLinkingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]],
            declarations: [_trainer_request_trainer_request_component__WEBPACK_IMPORTED_MODULE_2__["TrainerRequestComponent"], _trainer_application_trainer_application_component__WEBPACK_IMPORTED_MODULE_5__["TrainerApplicationComponent"]],
            exports: [_trainer_application_trainer_application_component__WEBPACK_IMPORTED_MODULE_5__["TrainerApplicationComponent"], _trainer_request_trainer_request_component__WEBPACK_IMPORTED_MODULE_2__["TrainerRequestComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], TrainerLinkingModule);
    return TrainerLinkingModule;
}());



/***/ }),

/***/ "./src/app/components/trainer-linking/trainer-request/trainer-request.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/trainer-linking/trainer-request/trainer-request.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div padding>\r\n  <p>You do not currently have an advisor.</p>\r\n  <p>You can request an advisor and when they accept, you'll get a notification that they have accepted your request.</p>\r\n  <p>To begin, just type in advisor's email or affiliate ID and tap \"Send Request\".</p>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-searchbar [(ngModel)]=\"matchValue\" placeholder=\"Email or Affiliate ID\"></ion-searchbar>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"submit()\">\r\n    <div class=\"button global-margin-top-25\">\r\n      <ion-button type=\"submit\" color=\"primary\" expand=\"full\">Send Request</ion-button>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/trainer-linking/trainer-request/trainer-request.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/trainer-linking/trainer-request/trainer-request.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhaW5lci1saW5raW5nL3RyYWluZXItcmVxdWVzdC90cmFpbmVyLXJlcXVlc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/trainer-linking/trainer-request/trainer-request.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/trainer-linking/trainer-request/trainer-request.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TrainerRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerRequestComponent", function() { return TrainerRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_trainer_trainer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/trainer/trainer.service */ "./src/app/services/trainer/trainer.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_trainer_transphormer_link_trainer_transphormer_link_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/trainer-transphormer-link/trainer-transphormer-link.service */ "./src/app/services/trainer-transphormer-link/trainer-transphormer-link.service.ts");
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






var TrainerRequestComponent = /** @class */ (function () {
    function TrainerRequestComponent(errorService, toastCtrl, loadingCtrl, alertController, trainerService, linkService) {
        this.errorService = errorService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.trainerService = trainerService;
        this.linkService = linkService;
        this.trainerSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.trainers = [];
        this.matchValue = '';
    }
    TrainerRequestComponent.prototype.ngOnInit = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            trainer: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    };
    TrainerRequestComponent.prototype.fetchTrainers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1, toast;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 5]);
                        this.formGroup.get('trainer').setValue('');
                        _a = this;
                        return [4 /*yield*/, this.trainerService.listTrainers(this.matchValue)];
                    case 1:
                        _a.trainers = (_b.sent());
                        return [2 /*return*/, this.trainers];
                    case 2:
                        e_1 = _b.sent();
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: this.errorService.firstError(e_1),
                                duration: 3000,
                            })];
                    case 3:
                        toast = _b.sent();
                        return [4 /*yield*/, toast.present()];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, Promise.reject(e_1)];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    TrainerRequestComponent.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, trainers, application, alert_1, e_2, toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Sending request...',
                        })];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 10, 13, 14]);
                        return [4 /*yield*/, this.fetchTrainers()];
                    case 4:
                        trainers = _a.sent();
                        if (!(trainers.length > 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.linkService.applyLinkingByTransphormer(trainers[0].trainer.id, this.user.id)];
                    case 5:
                        application = (_a.sent());
                        this.trainerSelect.emit(application);
                        return [3 /*break*/, 9];
                    case 6: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            message: 'No matching advisor found.',
                            buttons: ['OK'],
                        })];
                    case 7:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [3 /*break*/, 14];
                    case 10:
                        e_2 = _a.sent();
                        console.log(e_2);
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: this.errorService.firstError(e_2),
                                duration: 3000,
                            })];
                    case 11:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 12:
                        _a.sent();
                        return [3 /*break*/, 14];
                    case 13:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(TrainerRequestComponent.prototype, "user", {
        get: function () {
            return JSON.parse(window.localStorage.getItem('transphormer'));
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TrainerRequestComponent.prototype, "trainerSelect", void 0);
    TrainerRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trainer-request',
            template: __webpack_require__(/*! ./trainer-request.component.html */ "./src/app/components/trainer-linking/trainer-request/trainer-request.component.html"),
            styles: [__webpack_require__(/*! ./trainer-request.component.scss */ "./src/app/components/trainer-linking/trainer-request/trainer-request.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_errors_errors_service__WEBPACK_IMPORTED_MODULE_1__["ErrorsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _services_trainer_trainer_service__WEBPACK_IMPORTED_MODULE_3__["TrainerService"],
            _services_trainer_transphormer_link_trainer_transphormer_link_service__WEBPACK_IMPORTED_MODULE_5__["TrainerTransphormerLinkService"]])
    ], TrainerRequestComponent);
    return TrainerRequestComponent;
}());



/***/ }),

/***/ "./src/app/pages/trainer-requests/trainer-requests.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/trainer-requests/trainer-requests.module.ts ***!
  \*******************************************************************/
/*! exports provided: TrainerRequestsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerRequestsPageModule", function() { return TrainerRequestsPageModule; });
/* harmony import */ var _components_trainer_linking_trainer_linking_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/trainer-linking/trainer-linking.module */ "./src/app/components/trainer-linking/trainer-linking.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _trainer_requests_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trainer-requests.page */ "./src/app/pages/trainer-requests/trainer-requests.page.ts");
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
        component: _trainer_requests_page__WEBPACK_IMPORTED_MODULE_6__["TrainerRequestsPage"]
    }
];
var TrainerRequestsPageModule = /** @class */ (function () {
    function TrainerRequestsPageModule() {
    }
    TrainerRequestsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_trainer_linking_trainer_linking_module__WEBPACK_IMPORTED_MODULE_0__["TrainerLinkingModule"],
                _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_7__["SideMenuModule"]
            ],
            declarations: [_trainer_requests_page__WEBPACK_IMPORTED_MODULE_6__["TrainerRequestsPage"]]
        })
    ], TrainerRequestsPageModule);
    return TrainerRequestsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/trainer-requests/trainer-requests.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/trainer-requests/trainer-requests.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <app-menu-button></app-menu-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"!hasTrainer\">Find Advisor</ion-title>\r\n    <ion-title *ngIf=\"hasTrainer\">My Advisor</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"checkComplete\">\r\n  <app-trainer-request *ngIf=\"!hasTrainer\" (trainerSelect)=\"newTrainerApplication($event)\"></app-trainer-request>\r\n  <app-trainer-application *ngIf=\"!canMessage && hasTrainer\" [application]=\"application\" (cancelApplication)=\"removeApplicationStatus()\"></app-trainer-application>\r\n  <ion-list *ngIf=\"hasTrainer && canMessage && trainer\">\r\n    <ion-list-header>\r\n      General\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>\r\n        Name\r\n      </ion-label>\r\n      {{ trainer.transphormer.display_name }}\r\n    </ion-item>\r\n    <ion-item *ngIf=\"trainer.city && trainer.state\">\r\n      <ion-label>\r\n        Location\r\n      </ion-label>\r\n      {{ trainer.city }}, {{ trainer.state }}\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        Years Training\r\n      </ion-label>\r\n      {{ trainer.years_training }}\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        Certifications\r\n      </ion-label>\r\n      {{ trainer.certifications }}\r\n    </ion-item>\r\n    <ion-list-header>\r\n      Social Media\r\n    </ion-list-header>\r\n    <ion-item *ngIf=\"trainer.facebook_group\" (click)=\"visitUrl(trainer.facebook_group)\">\r\n      <ion-icon margin-right name=\"logo-facebook\" item-start></ion-icon>\r\n      Facebook Group\r\n    </ion-item>\r\n    <ion-item *ngIf=\"trainer.facebook\" (click)=\"visitFacebook(trainer.facebook)\">\r\n      <ion-icon margin-right name=\"logo-facebook\" item-start></ion-icon>\r\n        {{ trainer.facebook }}\r\n    </ion-item>\r\n    <ion-item *ngIf=\"trainer.instagram\" (click)=\"visitInstagram(trainer.instagram)\">\r\n      <ion-icon margin-right name=\"logo-instagram\" item-start></ion-icon>\r\n        {{ trainer.instagram }}\r\n    </ion-item>\r\n    <ion-item *ngIf=\"trainer.linkedin\" (click)=\"visitLinkedIn(trainer.linkedin)\">\r\n      <ion-icon margin-right name=\"logo-linkedin\" item-start></ion-icon>\r\n      {{ trainer.linkedin }}\r\n    </ion-item>\r\n    <ion-item *ngIf=\"trainer.pintrest\" (click)=\"visitPinterest(trainer.pintrest)\">\r\n      <ion-icon margin-right name=\"logo-pinterest\" item-start></ion-icon>\r\n      {{ trainer.pintrest }}\r\n    </ion-item>\r\n    <ion-item *ngIf=\"trainer.twitter\" (click)=\"visitTwitter(trainer.twitter)\">\r\n      <ion-icon margin-right name=\"logo-twitter\" item-start></ion-icon>\r\n      {{ trainer.twitter }}\r\n    </ion-item>\r\n    <ion-item *ngIf=\"trainer.youtube\" (click)=\"visitYoutube(trainer.youtube)\">\r\n      <ion-icon margin-right name=\"logo-youtube\" item-start></ion-icon>\r\n      {{ trainer.youtube }}\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-button *ngIf=\"hasTrainer && canMessage\" (click)=\"dropTrainer()\" margin color=\"danger\" class=\"global-margin-top-20\" strong=\"true\" expand=\"full\">Drop Advisor</ion-button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/trainer-requests/trainer-requests.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/trainer-requests/trainer-requests.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list-header {\n  --background: var(--ion-color-header); }\n\nion-icon {\n  margin-right: .3em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJhaW5lci1yZXF1ZXN0cy9FOlxcaW9uaWNcXFZlcnZlQ29tbWVyY2VcXE5ld0RldlxcbXRzdC1hcHAvc3JjXFxhcHBcXHBhZ2VzXFx0cmFpbmVyLXJlcXVlc3RzXFx0cmFpbmVyLXJlcXVlc3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFhLEVBQUE7O0FBR2Y7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYWluZXItcmVxdWVzdHMvdHJhaW5lci1yZXF1ZXN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdC1oZWFkZXIge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWhlYWRlcik7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IC4zZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/trainer-requests/trainer-requests.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/trainer-requests/trainer-requests.page.ts ***!
  \*****************************************************************/
/*! exports provided: TrainerRequestsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerRequestsPage", function() { return TrainerRequestsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _services_trainer_transphormer_link_trainer_transphormer_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/trainer-transphormer-link/trainer-transphormer-link.service */ "./src/app/services/trainer-transphormer-link/trainer-transphormer-link.service.ts");
/* harmony import */ var _services_trainer_trainer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/trainer/trainer.service */ "./src/app/services/trainer/trainer.service.ts");
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/analytics/analytics.service */ "./src/app/services/analytics/analytics.service.ts");
/* harmony import */ var _services_analytics_analytic_events_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/analytics/analytic-events.enum */ "./src/app/services/analytics/analytic-events.enum.ts");
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







var TrainerRequestsPage = /** @class */ (function () {
    function TrainerRequestsPage(toastCtrl, loadingCtrl, linkService, trainerService, alertCtrl, errorService, changeDetection, analyticService) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.linkService = linkService;
        this.trainerService = trainerService;
        this.alertCtrl = alertCtrl;
        this.errorService = errorService;
        this.changeDetection = changeDetection;
        this.analyticService = analyticService;
        this.application = null;
        this.hasTrainer = false;
        this.checkComplete = false;
        this.canMessage = false;
    }
    TrainerRequestsPage.prototype.ngOnInit = function () {
        this.checkApplicationStatus();
        this.analyticService.logEvent(_services_analytics_analytic_events_enum__WEBPACK_IMPORTED_MODULE_6__["AnalyticEvents"].SearchingAdvisor, {});
    };
    TrainerRequestsPage.prototype.setupTrainer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1, toast;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 5]);
                        _a = this;
                        return [4 /*yield*/, this.trainerService.getTrainerByTransphormerId(this.application.trainer.transphormer_id)];
                    case 1:
                        _a.trainer = (_b.sent());
                        return [3 /*break*/, 5];
                    case 2:
                        e_1 = _b.sent();
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: this.errorService.firstError(e_1),
                                duration: 3000,
                            })];
                    case 3:
                        toast = _b.sent();
                        return [4 /*yield*/, toast.present()];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    TrainerRequestsPage.prototype.checkHttp = function (url, prepend) {
        if (url.indexOf('http') === -1) {
            return prepend + url;
        }
        return url;
    };
    TrainerRequestsPage.prototype.dropTrainer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.analyticService.logEvent(_services_analytics_analytic_events_enum__WEBPACK_IMPORTED_MODULE_6__["AnalyticEvents"].DroppingAdvisor, {});
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: 'Drop advisor?',
                                message: 'Do you really want to leave this advisor?',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                        },
                                    },
                                    {
                                        text: 'Yes',
                                        handler: function () {
                                            _this.removeTrainer();
                                        },
                                    },
                                ],
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TrainerRequestsPage.prototype.removeTrainer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, e_2, toast;
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
                        return [4 /*yield*/, this.linkService.destroyLink(this.application.id)];
                    case 4:
                        _a.sent();
                        this.hasTrainer = false;
                        this.canMessage = false;
                        return [3 /*break*/, 9];
                    case 5:
                        e_2 = _a.sent();
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: this.errorService.firstError(e_2),
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
    TrainerRequestsPage.prototype.visitFacebook = function (url) {
        return this.visitUrl(this.checkHttp(url, 'https://www.facebook.com/'));
    };
    TrainerRequestsPage.prototype.visitTwitter = function (url) {
        return this.visitUrl(this.checkHttp(url, 'https://www.twitter.com/'));
    };
    TrainerRequestsPage.prototype.visitPinterest = function (url) {
        return this.visitUrl(this.checkHttp(url, 'https://www.pinterest.com/'));
    };
    TrainerRequestsPage.prototype.visitInstagram = function (url) {
        return this.visitUrl(this.checkHttp(url, 'https://www.instagram.com/'));
    };
    TrainerRequestsPage.prototype.visitYoutube = function (url) {
        return this.visitUrl(this.checkHttp(url, 'https://www.youtube.com/results?search_query='));
    };
    TrainerRequestsPage.prototype.visitLinkedIn = function (url) {
        return this.visitUrl(this.checkHttp(url, 'https://www.linkedin.com/in/'));
    };
    TrainerRequestsPage.prototype.visitUrl = function (url) {
        window.open(url, '_system', 'location=yes');
        return false;
    };
    TrainerRequestsPage.prototype.checkApplicationStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, _a, e_3, toast;
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
                        _b.trys.push([3, 5, 9, 10]);
                        _a = this;
                        return [4 /*yield*/, this.linkService.requestStatus()];
                    case 4:
                        _a.application = (_b.sent());
                        this.hasTrainer = true;
                        if (this.application.status === 'accepted') {
                            this.canMessage = true;
                            this.setupTrainer();
                        }
                        return [3 /*break*/, 10];
                    case 5:
                        e_3 = _b.sent();
                        if (!(e_3.status !== 404)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: this.errorService.firstError(e_3),
                                duration: 3000,
                            })];
                    case 6:
                        toast = _b.sent();
                        return [4 /*yield*/, toast.present()];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        loader.dismiss();
                        this.checkComplete = true;
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    TrainerRequestsPage.prototype.newTrainerApplication = function (application) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.application = application;
                this.hasTrainer = true;
                return [2 /*return*/];
            });
        });
    };
    TrainerRequestsPage.prototype.removeApplicationStatus = function () {
        this.hasTrainer = false;
        this.application = null;
        this.changeDetection.detectChanges();
    };
    Object.defineProperty(TrainerRequestsPage.prototype, "user", {
        get: function () {
            return JSON.parse(window.localStorage.getItem('transphormer'));
        },
        enumerable: true,
        configurable: true
    });
    TrainerRequestsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trainer-requests',
            template: __webpack_require__(/*! ./trainer-requests.page.html */ "./src/app/pages/trainer-requests/trainer-requests.page.html"),
            styles: [__webpack_require__(/*! ./trainer-requests.page.scss */ "./src/app/pages/trainer-requests/trainer-requests.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _services_trainer_transphormer_link_trainer_transphormer_link_service__WEBPACK_IMPORTED_MODULE_3__["TrainerTransphormerLinkService"],
            _services_trainer_trainer_service__WEBPACK_IMPORTED_MODULE_4__["TrainerService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_2__["ErrorsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_5__["AnalyticsService"]])
    ], TrainerRequestsPage);
    return TrainerRequestsPage;
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
//# sourceMappingURL=pages-trainer-requests-trainer-requests-module.js.map