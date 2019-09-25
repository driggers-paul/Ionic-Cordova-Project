(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-weight-edit-weight-module"],{

/***/ "./src/app/pages/edit-weight/edit-weight.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/edit-weight/edit-weight.module.ts ***!
  \*********************************************************/
/*! exports provided: EditWeightPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWeightPageModule", function() { return EditWeightPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_weight_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-weight.page */ "./src/app/pages/edit-weight/edit-weight.page.ts");
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
        component: _edit_weight_page__WEBPACK_IMPORTED_MODULE_5__["EditWeightPage"]
    }
];
var EditWeightPageModule = /** @class */ (function () {
    function EditWeightPageModule() {
    }
    EditWeightPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_6__["SideMenuModule"]
            ],
            declarations: [_edit_weight_page__WEBPACK_IMPORTED_MODULE_5__["EditWeightPage"]]
        })
    ], EditWeightPageModule);
    return EditWeightPageModule;
}());



/***/ }),

/***/ "./src/app/pages/edit-weight/edit-weight.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/edit-weight/edit-weight.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit Weigh-In</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <app-menu-button></app-menu-button>\r\n    </ion-buttons>\r\n    <ion-button slot=\"end\" fill=\"clear\" (click)=\"close()\">\r\n      <ion-icon name=\"close\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"weight\">\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"updateWeight()\">\r\n    <div class=\"global-input\">\r\n      <ion-label position=\"stacked\">Current weigh-in (lbs)</ion-label>\r\n      <ion-input formControlName=\"weight\"\r\n                 [value]=\"weight.weight\"></ion-input>\r\n    </div>\r\n    <div class=\"global-input\">\r\n      <ion-label position=\"stacked\">Logged On</ion-label>\r\n      <ion-input disabled=\"true\" [value]=\"weight.logged_on.local().format('YYYY-MM-DD h:mm a')\"></ion-input>\r\n    </div>\r\n    <div class=\"inline bottom-btn global-input\">\r\n      <ion-button type=\"button\" color=\"danger\" expand=\"full\" (click)=\"isConfirmingDelete = !isConfirmingDelete\">{{ isConfirmingDelete ? 'Don\\'t Delete' : 'Delete' }}</ion-button>\r\n      <ion-button fill=\"clear\" expand=\"full\" *ngIf=\"!isConfirmingDelete\" strong (click)=\"close()\">Cancel</ion-button>\r\n      <ion-button type=\"submit\" *ngIf=\"!isConfirmingDelete\" color=\"primary\" expand=\"full\" [disabled]=\"!form.dirty || form.invalid\">\r\n        Update\r\n      </ion-button>\r\n      <ion-button *ngIf=\"isConfirmingDelete\" (click)=\"deleteWeight()\" color=\"primary\" expand=\"full\">\r\n        Delete\r\n      </ion-button>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/edit-weight/edit-weight.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/edit-weight/edit-weight.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottom-btn {\n  margin-top: 20px;\n  bottom: 10px; }\n  .bottom-btn ion-button {\n    text-transform: uppercase;\n    font-size: 14px; }\n  .inline {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC13ZWlnaHQvRTpcXGlvbmljXFxWZXJ2ZUNvbW1lcmNlXFxOZXdEZXZcXG10c3QtYXBwL3NyY1xcYXBwXFxwYWdlc1xcZWRpdC13ZWlnaHRcXGVkaXQtd2VpZ2h0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7RUFGZDtJQUlJLHlCQUF5QjtJQUN6QixlQUFlLEVBQUE7RUFJbkI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdC13ZWlnaHQvZWRpdC13ZWlnaHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvdHRvbS1idG4ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbi5pbmxpbmUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/edit-weight/edit-weight.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/edit-weight/edit-weight.page.ts ***!
  \*******************************************************/
/*! exports provided: EditWeightPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWeightPage", function() { return EditWeightPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_weights_weights_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/weights/weights.service */ "./src/app/services/weights/weights.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/toast-service/toast-service.service */ "./src/app/services/toast-service/toast-service.service.ts");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_interceptors_caching_request_caching_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/interceptors/caching/request-caching.service */ "./src/app/services/interceptors/caching/request-caching.service.ts");
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








var EditWeightPage = /** @class */ (function () {
    function EditWeightPage(navCtrl, toastService, weightService, loadingCtrl, errorService, route, cacheService) {
        this.navCtrl = navCtrl;
        this.toastService = toastService;
        this.weightService = weightService;
        this.loadingCtrl = loadingCtrl;
        this.errorService = errorService;
        this.route = route;
        this.cacheService = cacheService;
        this.isConfirmingDelete = false;
    }
    EditWeightPage.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(600),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(60),
            ]),
        });
        this.form.get('weight').valueChanges.subscribe(function (value) {
            _this.roundOffWeight(value);
        });
        this.fetchWeight();
    };
    /**
     * Rounding off the weight value to prevent decimal places.
     * @todo check why number pipe is not rendering updated values on view (could be a bug or something is missing).
     * @param value
     */
    EditWeightPage.prototype.roundOffWeight = function (value) {
        value = parseFloat(value);
        if (!isNaN(value)) {
            this.form.get('weight').setValue(Math.round(value), {
                emitEvent: false
            });
        }
    };
    EditWeightPage.prototype.close = function () {
        this.navCtrl.navigateBack('/body-metrics');
    };
    /**
     * Update the record with new weight value
     */
    EditWeightPage.prototype.updateWeight = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Please wait ...'
                        })];
                    case 1:
                        loader = _b.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, 6, 7]);
                        _a = this;
                        return [4 /*yield*/, this.weightService.updateWeight(this.weight.id, this.form.get('weight').value)];
                    case 4:
                        _a.weight = (_b.sent());
                        this.cacheService.clearAll();
                        this.toastService.flash('Weigh in updated successfully');
                        this.navCtrl.navigateRoot('/body-metrics');
                        return [3 /*break*/, 7];
                    case 5:
                        e_1 = _b.sent();
                        this.toastService.flash(this.errorService.firstError(e_1));
                        return [3 /*break*/, 7];
                    case 6:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Delete the weight log entry
     */
    EditWeightPage.prototype.deleteWeight = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, _a, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Please wait ...'
                        })];
                    case 1:
                        loader = _b.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, 6, 7]);
                        _a = this;
                        return [4 /*yield*/, this.weightService.deleteWeight(this.weight.id)];
                    case 4:
                        _a.weight = (_b.sent());
                        this.cacheService.clearAll();
                        this.toastService.flash('Weigh in deleted successfully');
                        this.navCtrl.navigateRoot('/body-metrics');
                        return [3 /*break*/, 7];
                    case 5:
                        e_2 = _b.sent();
                        this.toastService.flash(this.errorService.firstError(e_2));
                        return [3 /*break*/, 7];
                    case 6:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Fetch original content
     */
    EditWeightPage.prototype.fetchWeight = function () {
        return __awaiter(this, void 0, void 0, function () {
            var weightId, loader, _a, e_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        weightId = this.route.snapshot.params.id;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Please wait ...'
                            })];
                    case 1:
                        loader = _b.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, 6, 7]);
                        _a = this;
                        return [4 /*yield*/, this.weightService.getWeight(weightId)];
                    case 4:
                        _a.weight = (_b.sent());
                        return [3 /*break*/, 7];
                    case 5:
                        e_3 = _b.sent();
                        this.toastService.flash(this.errorService.firstError(e_3));
                        return [3 /*break*/, 7];
                    case 6:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    EditWeightPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-weight',
            template: __webpack_require__(/*! ./edit-weight.page.html */ "./src/app/pages/edit-weight/edit-weight.page.html"),
            styles: [__webpack_require__(/*! ./edit-weight.page.scss */ "./src/app/pages/edit-weight/edit-weight.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _services_weights_weights_service__WEBPACK_IMPORTED_MODULE_1__["WeightsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_5__["ErrorsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _services_interceptors_caching_request_caching_service__WEBPACK_IMPORTED_MODULE_7__["RequestCachingService"]])
    ], EditWeightPage);
    return EditWeightPage;
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
//# sourceMappingURL=pages-edit-weight-edit-weight-module.js.map