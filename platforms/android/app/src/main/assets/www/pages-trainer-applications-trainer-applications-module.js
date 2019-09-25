(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-trainer-applications-trainer-applications-module"],{

/***/ "./src/app/pages/trainer-applications/trainer-applications.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/trainer-applications/trainer-applications.module.ts ***!
  \***************************************************************************/
/*! exports provided: TrainerApplicationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerApplicationsPageModule", function() { return TrainerApplicationsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _trainer_applications_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trainer-applications.page */ "./src/app/pages/trainer-applications/trainer-applications.page.ts");
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
        component: _trainer_applications_page__WEBPACK_IMPORTED_MODULE_5__["TrainerApplicationsPage"]
    }
];
var TrainerApplicationsPageModule = /** @class */ (function () {
    function TrainerApplicationsPageModule() {
    }
    TrainerApplicationsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_6__["SideMenuModule"]
            ],
            declarations: [_trainer_applications_page__WEBPACK_IMPORTED_MODULE_5__["TrainerApplicationsPage"]]
        })
    ], TrainerApplicationsPageModule);
    return TrainerApplicationsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/trainer-applications/trainer-applications.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/trainer-applications/trainer-applications.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <app-menu-button></app-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\" (click)=\"selectionActions()\">\r\n        <ion-icon name=\"more\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Advisor Requests</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item *ngIf=\"!applications || applications.length === 0\">\r\n      No requests currently pending.\r\n    </ion-item>\r\n    <ion-item-sliding *ngFor=\"let application of applications\" >\r\n      <ion-item lines=\"none\">\r\n        <ion-avatar large slot=\"start\">\r\n          <ion-icon name=\"contact\" size=\"large\"></ion-icon>\r\n        </ion-avatar>\r\n        <ion-label>{{ application.transphormer.first_name }} {{ application.transphormer.last_name }}</ion-label>\r\n        <ion-label [color]=\"application.status === 'waiting' ? 'warning' : 'success'\" >{{ application.status === 'waiting' ? 'Pending': 'Accepted' }}</ion-label>\r\n      </ion-item>\r\n      <ion-item-options side=\"start\" *ngIf=\"application.status === 'waiting'\">\r\n        <ion-item-option (click)=\"acceptApplication(application)\" color=\"primary\">Accept</ion-item-option>\r\n      </ion-item-options>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option (click)=\"deleteApplication(application)\" color=\"danger\">Remove</ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/trainer-applications/trainer-applications.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/trainer-applications/trainer-applications.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  padding: 10px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJhaW5lci1hcHBsaWNhdGlvbnMvRTpcXGlvbmljXFxWZXJ2ZUNvbW1lcmNlXFxOZXdEZXZcXG10c3QtYXBwL3NyY1xcYXBwXFxwYWdlc1xcdHJhaW5lci1hcHBsaWNhdGlvbnNcXHRyYWluZXItYXBwbGljYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYWluZXItYXBwbGljYXRpb25zL3RyYWluZXItYXBwbGljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/trainer-applications/trainer-applications.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/trainer-applications/trainer-applications.page.ts ***!
  \*************************************************************************/
/*! exports provided: TrainerApplicationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerApplicationsPage", function() { return TrainerApplicationsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_trainer_transphormer_link_trainer_transphormer_link_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/trainer-transphormer-link/trainer-transphormer-link.service */ "./src/app/services/trainer-transphormer-link/trainer-transphormer-link.service.ts");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
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




var TrainerApplicationsPage = /** @class */ (function () {
    function TrainerApplicationsPage(errorService, toastCtrl, loadingCtrl, trainerApplicationService, actionSheetCtrl) {
        this.errorService = errorService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.trainerApplicationService = trainerApplicationService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.applications = [];
    }
    TrainerApplicationsPage.prototype.ngOnInit = function () {
        this.setupApplications();
    };
    TrainerApplicationsPage.prototype.setupApplications = function () {
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
                        return [4 /*yield*/, this.trainerApplicationService.trainerApplications()];
                    case 4:
                        _a.applications = (_b.sent());
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
    TrainerApplicationsPage.prototype.acceptApplication = function (application) {
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
                        return [4 /*yield*/, this.trainerApplicationService.acceptStatus(application.id)];
                    case 4:
                        _a.sent();
                        application.status = 'accepted';
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
    TrainerApplicationsPage.prototype.deleteApplication = function (application) {
        return __awaiter(this, void 0, void 0, function () {
            var loader, index, e_3, toast;
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
                        return [4 /*yield*/, this.trainerApplicationService.destroyLink(application.id)];
                    case 4:
                        _a.sent();
                        index = this.applications.findIndex(function (existingApplication) { return application.id === existingApplication.id; });
                        this.applications.splice(index, 1);
                        return [3 /*break*/, 9];
                    case 5:
                        e_3 = _a.sent();
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: this.errorService.firstError(e_3),
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
    TrainerApplicationsPage.prototype.selectionActions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            buttons: [
                                {
                                    text: 'Accept All',
                                    icon: 'checkmark',
                                    handler: function () {
                                        _this.acceptAll();
                                    },
                                },
                                {
                                    text: 'Decline All',
                                    icon: 'trash',
                                    handler: function () {
                                        _this.declineAll();
                                    },
                                },
                                {
                                    text: 'Cancel',
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
    TrainerApplicationsPage.prototype.acceptAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, ids, e_4, toast;
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
                        ids = this.applications.map(function (application) { return application.id; });
                        return [4 /*yield*/, this.trainerApplicationService.batchAcceptStatus(ids)];
                    case 4:
                        _a.sent();
                        this.applications.forEach(function (application) {
                            application.status = 'accepted';
                        });
                        return [3 /*break*/, 9];
                    case 5:
                        e_4 = _a.sent();
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: this.errorService.firstError(e_4),
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
    TrainerApplicationsPage.prototype.declineAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, ids, e_5, toast;
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
                        ids = this.applications.map(function (application) { return application.id; });
                        return [4 /*yield*/, this.trainerApplicationService.batchDeleteStatus(ids)];
                    case 4:
                        _a.sent();
                        this.applications = [];
                        return [3 /*break*/, 9];
                    case 5:
                        e_5 = _a.sent();
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: this.errorService.firstError(e_5),
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
    TrainerApplicationsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trainer-applications',
            template: __webpack_require__(/*! ./trainer-applications.page.html */ "./src/app/pages/trainer-applications/trainer-applications.page.html"),
            styles: [__webpack_require__(/*! ./trainer-applications.page.scss */ "./src/app/pages/trainer-applications/trainer-applications.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_errors_errors_service__WEBPACK_IMPORTED_MODULE_2__["ErrorsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _services_trainer_transphormer_link_trainer_transphormer_link_service__WEBPACK_IMPORTED_MODULE_1__["TrainerTransphormerLinkService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]])
    ], TrainerApplicationsPage);
    return TrainerApplicationsPage;
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
//# sourceMappingURL=pages-trainer-applications-trainer-applications-module.js.map