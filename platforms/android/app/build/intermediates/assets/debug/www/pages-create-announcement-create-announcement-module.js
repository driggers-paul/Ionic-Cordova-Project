(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-announcement-create-announcement-module"],{

/***/ "./src/app/pages/create-announcement/create-announcement.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/create-announcement/create-announcement.module.ts ***!
  \*************************************************************************/
/*! exports provided: CreateAnnouncementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAnnouncementPageModule", function() { return CreateAnnouncementPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_announcement_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-announcement.page */ "./src/app/pages/create-announcement/create-announcement.page.ts");
/* harmony import */ var _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/side-menu/side-menu.module */ "./src/app/components/side-menu/side-menu.module.ts");
/* harmony import */ var _components_filter_filter_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/filter/filter.module */ "./src/app/components/filter/filter.module.ts");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/filter/filter.component */ "./src/app/components/filter/filter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _create_announcement_page__WEBPACK_IMPORTED_MODULE_5__["CreateAnnouncementPage"]
    }
];
var CreateAnnouncementPageModule = /** @class */ (function () {
    function CreateAnnouncementPageModule() {
    }
    CreateAnnouncementPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_6__["SideMenuModule"],
                _components_filter_filter_module__WEBPACK_IMPORTED_MODULE_7__["FilterModule"]
            ],
            declarations: [_create_announcement_page__WEBPACK_IMPORTED_MODULE_5__["CreateAnnouncementPage"]],
            entryComponents: [_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_8__["FilterComponent"]]
        })
    ], CreateAnnouncementPageModule);
    return CreateAnnouncementPageModule;
}());



/***/ }),

/***/ "./src/app/pages/create-announcement/create-announcement.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/create-announcement/create-announcement.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <app-menu-button></app-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Create Announcement</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-item>Filters\r\n    <ion-button slot=\"end\" color=\"secondary\" (click)=\"openFilterModal()\">Show</ion-button>\r\n  </ion-item>\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n    <ion-item color=\"tertiary\" text-center>\r\n      <ion-label>Sending to <ion-spinner name=\"dots\" *ngIf=\"isFiltering\"></ion-spinner> {{ filteredTransphormers }} of {{ totalTransphormers }} Transphormers</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Heading</ion-label>\r\n      <ion-input placeholder=\"Heading\" formControlName=\"heading\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Message</ion-label>\r\n      <ion-textarea autocapitalize=\"on\" rows=\"8\" placeholder=\"Message Body\" formControlName=\"announcements\"></ion-textarea>\r\n    </ion-item>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <ion-button color=\"danger\" type=\"button\" (click)=\"cancel()\">Cancel</ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-button color=\"primary\" type=\"submit\" [disabled]=\"form.invalid || isFiltering || filteredTransphormers === 0\">Send Now\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/create-announcement/create-announcement.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/create-announcement/create-announcement.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-row {\n  display: flex;\n  justify-content: center; }\n  ion-row ion-col {\n    text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXRlLWFubm91bmNlbWVudC9FOlxcaW9uaWNcXFZlcnZlQ29tbWVyY2VcXE5ld0RldlxcbXRzdC1hcHAvc3JjXFxhcHBcXHBhZ2VzXFxjcmVhdGUtYW5ub3VuY2VtZW50XFxjcmVhdGUtYW5ub3VuY2VtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUIsRUFBQTtFQUZ6QjtJQUtJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3JlYXRlLWFubm91bmNlbWVudC9jcmVhdGUtYW5ub3VuY2VtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGlvbi1jb2wge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/create-announcement/create-announcement.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/create-announcement/create-announcement.page.ts ***!
  \***********************************************************************/
/*! exports provided: CreateAnnouncementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAnnouncementPage", function() { return CreateAnnouncementPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_announcements_announcements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/announcements/announcements.service */ "./src/app/services/announcements/announcements.service.ts");
/* harmony import */ var _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/toast-service/toast-service.service */ "./src/app/services/toast-service/toast-service.service.ts");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_trainer_transphormer_trainer_transphormer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/trainer-transphormer/trainer-transphormer.service */ "./src/app/services/trainer-transphormer/trainer-transphormer.service.ts");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/filter/filter.component */ "./src/app/components/filter/filter.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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









var CreateAnnouncementPage = /** @class */ (function () {
    function CreateAnnouncementPage(loadingCtrl, announcementService, toastService, navCtrl, errorService, trainerTransphormerService, modalCtrl, router) {
        this.loadingCtrl = loadingCtrl;
        this.announcementService = announcementService;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
        this.errorService = errorService;
        this.trainerTransphormerService = trainerTransphormerService;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.totalTransphormers = 0;
        this.filteredTransphormers = 0;
        this.isFiltering = false;
        this.filterValues = {
            activeDays: '',
            uploadDays: '',
            haveNotUploadDays: '',
            joinedDays: '',
            name: '',
            customer_for_life: '',
            is_premium: '',
            not_messaged_in: ''
        };
    }
    CreateAnnouncementPage.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            heading: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            announcements: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])
        });
        for (var _i = 0, _a = Object.entries(this.router.snapshot.queryParams); _i < _a.length; _i++) {
            var _b = _a[_i], variable = _b[0], value = _b[1];
            if (this.filterValues.hasOwnProperty(variable)) {
                this.filterValues[variable] = value;
                if (variable === 'customer_for_life' || variable === 'is_premium') {
                    value = value === 'true' ? true : value;
                    value = value === 'false' ? false : value;
                    this.filterValues[variable] = value;
                }
            }
        }
        this.setupTransphormersListing();
        this.filterListing();
    };
    CreateAnnouncementPage.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, e_1;
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
                        _a.trys.push([3, 5, 6, 7]);
                        return [4 /*yield*/, this.announcementService.createAnnouncements(this.form.get('heading').value, this.form.get('announcements').value, this.filterValues)];
                    case 4:
                        _a.sent();
                        this.toastService.flash('Announcement created successfully');
                        this.form.reset();
                        this.form.markAsPristine();
                        return [3 /*break*/, 7];
                    case 5:
                        e_1 = _a.sent();
                        console.log(e_1);
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
    CreateAnnouncementPage.prototype.setupTransphormersListing = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, result, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Please wait',
                        })];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, 7, 8]);
                        return [4 /*yield*/, this.trainerTransphormerService.transphormers({}, 1, 1)];
                    case 4:
                        result = (_a.sent());
                        this.totalTransphormers = result.total;
                        return [3 /*break*/, 8];
                    case 5:
                        e_2 = _a.sent();
                        return [4 /*yield*/, this.toastService.flash(this.errorService.firstError(e_2))];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    CreateAnnouncementPage.prototype.filterListing = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isFiltering = true;
                        this.filteredTransphormers = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 5, 6]);
                        return [4 /*yield*/, this.trainerTransphormerService.transphormers(this.filterValues, 1, 1)];
                    case 2:
                        result = (_a.sent());
                        this.filteredTransphormers = result.total;
                        return [3 /*break*/, 6];
                    case 3:
                        e_3 = _a.sent();
                        return [4 /*yield*/, this.toastService.flash(this.errorService.firstError(e_3))];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        this.isFiltering = false;
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    CreateAnnouncementPage.prototype.cancel = function () {
        this.navCtrl.back();
    };
    CreateAnnouncementPage.prototype.openFilterModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var filterModal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__["FilterComponent"],
                            backdropDismiss: false,
                            componentProps: {
                                initialFormValue: this.filterValues,
                            },
                        })];
                    case 1:
                        filterModal = _a.sent();
                        return [4 /*yield*/, filterModal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, filterModal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (data) {
                            this.filterValues = data;
                            this.filterListing();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateAnnouncementPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-announcement',
            template: __webpack_require__(/*! ./create-announcement.page.html */ "./src/app/pages/create-announcement/create-announcement.page.html"),
            styles: [__webpack_require__(/*! ./create-announcement.page.scss */ "./src/app/pages/create-announcement/create-announcement.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _services_announcements_announcements_service__WEBPACK_IMPORTED_MODULE_2__["AnnouncementsService"],
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_4__["ErrorsService"],
            _services_trainer_transphormer_trainer_transphormer_service__WEBPACK_IMPORTED_MODULE_6__["TrainerTransphormerService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], CreateAnnouncementPage);
    return CreateAnnouncementPage;
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
//# sourceMappingURL=pages-create-announcement-create-announcement-module.js.map