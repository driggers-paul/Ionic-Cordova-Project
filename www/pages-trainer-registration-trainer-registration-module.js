(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-trainer-registration-trainer-registration-module"],{

/***/ "./src/app/pages/trainer-registration/trainer-registration.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/trainer-registration/trainer-registration.module.ts ***!
  \***************************************************************************/
/*! exports provided: TrainerRegistrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerRegistrationPageModule", function() { return TrainerRegistrationPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _trainer_registration_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trainer-registration.page */ "./src/app/pages/trainer-registration/trainer-registration.page.ts");
/* harmony import */ var _components_logo_logo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/logo/logo.module */ "./src/app/components/logo/logo.module.ts");
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
        component: _trainer_registration_page__WEBPACK_IMPORTED_MODULE_5__["TrainerRegistrationPage"]
    }
];
var TrainerRegistrationPageModule = /** @class */ (function () {
    function TrainerRegistrationPageModule() {
    }
    TrainerRegistrationPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_logo_logo_module__WEBPACK_IMPORTED_MODULE_6__["LogoModule"],
                _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_7__["SideMenuModule"]
            ],
            declarations: [_trainer_registration_page__WEBPACK_IMPORTED_MODULE_5__["TrainerRegistrationPage"]]
        })
    ], TrainerRegistrationPageModule);
    return TrainerRegistrationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/trainer-registration/trainer-registration.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/trainer-registration/trainer-registration.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <app-menu-button></app-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Advisor Profile</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"profile\">\r\n    <ion-list>\r\n        <ion-list-header>Personal info</ion-list-header>\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n            <div class=\"global-input\">\r\n                <ion-label position=\"stacked\">Address</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"address\"></ion-input>\r\n            </div>\r\n            <div class=\"global-input\">\r\n                <ion-label position=\"stacked\">Address 2</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"address2\"></ion-input>\r\n            </div>\r\n            <div class=\"global-input\">\r\n                <ion-label position=\"stacked\">City</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"city\"></ion-input>\r\n            </div>\r\n            <div class=\"global-input\">\r\n                <ion-label position=\"stacked\">State</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"state\"></ion-input>\r\n            </div>\r\n            <div class=\"global-input\">\r\n                <ion-label position=\"stacked\">Zip Code</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"postal_code\"></ion-input>\r\n            </div>\r\n            <div class=\"global-input\">\r\n                <ion-label position=\"stacked\">Country</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"country\"></ion-input>\r\n            </div>\r\n            <div class=\"global-input\">\r\n                <ion-label position=\"stacked\">Phone number</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"phone\"></ion-input>\r\n            </div>\r\n            <ion-list-header>Social media</ion-list-header>\r\n            <div class=\"global-input\">\r\n                <ion-label position=\"stacked\">Facebook Group URL</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"facebook_group\"></ion-input>\r\n            </div>\r\n            <div class=\"global-input\">\r\n                <ion-label position=\"stacked\">Facebook Profile URL</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"facebook\"></ion-input>\r\n            </div>\r\n            <div class=\"global-input\">\r\n                <ion-label position=\"stacked\">Instagram URL</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"instagram\"></ion-input>\r\n            </div>\r\n            <div class=\"global-input\">\r\n                <ion-label position=\"stacked\">Linked In URL</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"linkedin\"></ion-input>\r\n            </div>\r\n            <div class=\"global-input\">\r\n                <ion-label position=\"stacked\">Pinterest URL</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"pintrest\"></ion-input>\r\n            </div>\r\n            <div class=\"global-input\">\r\n                <ion-label position=\"stacked\">Twitter URL</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"twitter\"></ion-input>\r\n            </div>\r\n            <div class=\"global-input\">\r\n                <ion-label position=\"stacked\">Youtube URL</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"youtube\"></ion-input>\r\n            </div>\r\n            <ion-list-header>Training history</ion-list-header>\r\n            <div class=\"global-input\">\r\n                <ion-label position=\"stacked\">Which personal training certifications have you obtained?</ion-label>\r\n                <ion-radio-group formControlName=\"certifications\">\r\n                    <ion-item>\r\n                        <ion-label class=\"options\">NASM</ion-label>\r\n                        <ion-radio mode=\"md\" slot=\"start\" value=\"NASM\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label class=\"options\">ACSM</ion-label>\r\n                        <ion-radio mode=\"md\" slot=\"start\" value=\"ACSM\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label class=\"options\">ISSA</ion-label>\r\n                        <ion-radio mode=\"md\" slot=\"start\" value=\"ISSA\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label class=\"options\">NPTI</ion-label>\r\n                        <ion-radio mode=\"md\" slot=\"start\" value=\"NPTI\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label class=\"options\">None</ion-label>\r\n                        <ion-radio mode=\"md\" slot=\"start\" value=\"none\"></ion-radio>\r\n                    </ion-item>\r\n                </ion-radio-group>\r\n            </div>\r\n            <div class=\"global-input\">\r\n                <ion-label position=\"stacked\">How many clients do you currently train?</ion-label>\r\n                <ion-radio-group formControlName=\"current_training_clients\">\r\n                    <ion-item>\r\n                        <ion-label class=\"options\">10-20 clients</ion-label>\r\n                        <ion-radio mode=\"md\" slot=\"start\" value=\"10-20 clients\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label class=\"options\">20+ clients</ion-label>\r\n                        <ion-radio mode=\"md\" slot=\"start\" value=\"20+ clients\"></ion-radio>\r\n                    </ion-item>\r\n                </ion-radio-group>\r\n            </div>\r\n            <div class=\"global-input\">\r\n                <ion-label position=\"stacked\">How many years have you been training clients?</ion-label>\r\n                <ion-radio-group formControlName=\"years_training\">\r\n                    <ion-item>\r\n                        <ion-label class=\"options\">1-2 years</ion-label>\r\n                        <ion-radio mode=\"md\" slot=\"start\" value=\"1-2 years\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label class=\"options\">2-5 years</ion-label>\r\n                        <ion-radio mode=\"md\" slot=\"start\" value=\"2-5 years\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label class=\"options\">5+ years</ion-label>\r\n                        <ion-radio mode=\"md\" slot=\"start\" value=\"5+ years\"></ion-radio>\r\n                    </ion-item>\r\n                </ion-radio-group>\r\n            </div>\r\n            <div class=\"global-input\">\r\n                <ion-label position=\"stacked\">Do you currently write nutrition plans for your clients?</ion-label>\r\n                <ion-radio-group formControlName=\"creates_nutrition_plans\">\r\n                    <ion-item>\r\n                        <ion-label class=\"options\">Yes</ion-label>\r\n                        <ion-radio mode=\"md\" slot=\"start\" value=\"1\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label class=\"options\">No</ion-label>\r\n                        <ion-radio mode=\"md\" slot=\"start\" value=\"0\"></ion-radio>\r\n                    </ion-item>\r\n                </ion-radio-group>\r\n            </div>\r\n            <div class=\"global-input\">\r\n                <ion-label position=\"stacked\">Have you passed the Legionnaire Basic Training Certification?</ion-label>\r\n                <ion-radio-group formControlName=\"passed_basic_training\">\r\n                    <ion-item>\r\n                        <ion-label class=\"options\">Yes</ion-label>\r\n                        <ion-radio mode=\"md\" slot=\"start\" value=\"1\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label class=\"options\">No</ion-label>\r\n                        <ion-radio mode=\"md\" slot=\"start\" value=\"0\"></ion-radio>\r\n                    </ion-item>\r\n                </ion-radio-group>\r\n            </div>\r\n            <div class=\"global-input\">\r\n                <ion-label position=\"stacked\">Do you make supplement recommendations to your clients?</ion-label>\r\n                <ion-radio-group formControlName=\"recommends_supplements\">\r\n                    <ion-item>\r\n                        <ion-label class=\"options\">Yes</ion-label>\r\n                        <ion-radio mode=\"md\" slot=\"start\" value=\"1\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label class=\"options\">No</ion-label>\r\n                        <ion-radio mode=\"md\" slot=\"start\" value=\"0\"></ion-radio>\r\n                    </ion-item>\r\n                </ion-radio-group>\r\n            </div>\r\n            <div class=\"global-input\">\r\n                <ion-label position=\"stacked\">Do you currently have a Legionnaire Coach?</ion-label>\r\n                <ion-radio-group formControlName=\"has_legionnaire_coach\">\r\n                    <ion-item>\r\n                        <ion-label class=\"options\">Yes</ion-label>\r\n                        <ion-radio mode=\"md\" slot=\"start\" value=\"1\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label class=\"options\">No</ion-label>\r\n                        <ion-radio mode=\"md\" slot=\"start\" value=\"0\"></ion-radio>\r\n                    </ion-item>\r\n                </ion-radio-group>\r\n            </div>\r\n            <div class=\"global-input\" *ngIf=\"form.get('has_legionnaire_coach').value == 1\">\r\n                <ion-label position=\"stacked\">Who is your legionnaire coach?</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"legionnaire_coach\"></ion-input>\r\n            </div>\r\n            <div class=\"global-input\">\r\n                <ion-label position=\"stacked\">Do you currently write workout programs for your clients?</ion-label>\r\n                <ion-radio-group formControlName=\"creates_workout_plans\">\r\n                    <ion-item>\r\n                        <ion-label class=\"options\">Yes</ion-label>\r\n                        <ion-radio mode=\"md\" slot=\"start\" value=\"1\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label class=\"options\">No</ion-label>\r\n                        <ion-radio mode=\"md\" slot=\"start\" value=\"0\"></ion-radio>\r\n                    </ion-item>\r\n                </ion-radio-group>\r\n            </div>\r\n            <div class=\"global-input\">\r\n                <ion-label position=\"stacked\">How do you primarily train your clients?</ion-label>\r\n                <ion-radio-group formControlName=\"how_train_clients\">\r\n                    <ion-item>\r\n                        <ion-label class=\"options\">In Person</ion-label>\r\n                        <ion-radio mode=\"md\" slot=\"start\" value=\"in-person\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label class=\"options\">Online</ion-label>\r\n                        <ion-radio mode=\"md\" slot=\"start\" value=\"online\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label class=\"options\">Both</ion-label>\r\n                        <ion-radio mode=\"md\" slot=\"start\" value=\"both\"></ion-radio>\r\n                    </ion-item>\r\n                </ion-radio-group>\r\n            </div>\r\n            <div slot=\"fixed\" class=\"global-input padding\">\r\n                <ion-button type=\"submit\" expand=\"full\" [disabled]=\"form.invalid\">Save Profile</ion-button>\r\n            </div>\r\n        </form>\r\n    </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/trainer-registration/trainer-registration.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/trainer-registration/trainer-registration.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile form {\n  padding-bottom: 20px; }\n\nion-list-header {\n  --background: var(--ion-color-header); }\n\nion-radio-group ion-item {\n  --inner-border-width: 0;\n  font-size: var(--app-caption-size); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJhaW5lci1yZWdpc3RyYXRpb24vRTpcXGlvbmljXFxWZXJ2ZUNvbW1lcmNlXFxOZXdEZXZcXG10c3QtYXBwL3NyY1xcYXBwXFxwYWdlc1xcdHJhaW5lci1yZWdpc3RyYXRpb25cXHRyYWluZXItcmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG9CQUFvQixFQUFBOztBQUl4QjtFQUNFLHFDQUFhLEVBQUE7O0FBR2Y7RUFFSSx1QkFBcUI7RUFDckIsa0NBQWtDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90cmFpbmVyLXJlZ2lzdHJhdGlvbi90cmFpbmVyLXJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZSB7XHJcbiAgZm9ybSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1saXN0LWhlYWRlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItaGVhZGVyKTtcclxufVxyXG5cclxuaW9uLXJhZGlvLWdyb3VwIHtcclxuICBpb24taXRlbSB7XHJcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYXBwLWNhcHRpb24tc2l6ZSlcclxuICB9XHJcbn1cclxuXHJcbi8vLmdsb2JhbC1pbnB1dCBpb24tbGFiZWwge1xyXG4vLyAgO1xyXG4vL31cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/trainer-registration/trainer-registration.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/trainer-registration/trainer-registration.page.ts ***!
  \*************************************************************************/
/*! exports provided: TrainerRegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerRegistrationPage", function() { return TrainerRegistrationPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_trainer_trainer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/trainer/trainer.service */ "./src/app/services/trainer/trainer.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/toast-service/toast-service.service */ "./src/app/services/toast-service/toast-service.service.ts");
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







var TrainerRegistrationPage = /** @class */ (function () {
    function TrainerRegistrationPage(formBuilder, trainerService, loadingCtrl, toastSvc, errorService) {
        this.formBuilder = formBuilder;
        this.trainerService = trainerService;
        this.loadingCtrl = loadingCtrl;
        this.toastSvc = toastSvc;
        this.errorService = errorService;
    }
    Object.defineProperty(TrainerRegistrationPage.prototype, "transphormer", {
        get: function () {
            return JSON.parse(window.localStorage.getItem('transphormer'));
        },
        enumerable: true,
        configurable: true
    });
    TrainerRegistrationPage.prototype.ngOnInit = function () {
        var coachNameRequiredValidator = function (control) {
            var has_legionnaire_coach = control.get('has_legionnaire_coach');
            var legionnaire_coach = control.get('legionnaire_coach');
            return has_legionnaire_coach.value === '1' &&
                legionnaire_coach.value === '' ? { 'coachRequired': true } : null;
        };
        this.form = this.formBuilder.group({
            address: this.formBuilder.control(''),
            address2: this.formBuilder.control(''),
            city: this.formBuilder.control(''),
            state: this.formBuilder.control(''),
            postal_code: this.formBuilder.control(''),
            phone: this.formBuilder.control(''),
            country: this.formBuilder.control(''),
            facebook: this.formBuilder.control(''),
            instagram: this.formBuilder.control(''),
            linkedin: this.formBuilder.control(''),
            pintrest: this.formBuilder.control(''),
            twitter: this.formBuilder.control(''),
            youtube: this.formBuilder.control(''),
            certifications: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            facebook_group: this.formBuilder.control(''),
            current_training_clients: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            years_training: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            creates_nutrition_plans: this.formBuilder.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            passed_basic_training: this.formBuilder.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            recommends_supplements: this.formBuilder.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            has_legionnaire_coach: this.formBuilder.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            creates_workout_plans: this.formBuilder.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            legionnaire_coach: this.formBuilder.control(''),
            how_train_clients: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        }, { validators: coachNameRequiredValidator });
        this.populateForm();
    };
    TrainerRegistrationPage.prototype.populateForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, trainer, attribute, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Loading profile...',
                        })];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, 6, 7]);
                        return [4 /*yield*/, this.trainerService.getTrainerByTransphormerId(this.transphormer.id)];
                    case 4:
                        trainer = (_a.sent());
                        for (attribute in Object(lodash__WEBPACK_IMPORTED_MODULE_6__["pick"])(trainer, Object.keys(this.form.getRawValue()))) {
                            if (trainer.hasOwnProperty(attribute)) {
                                this.form.get(attribute).setValue(trainer[attribute]);
                            }
                        }
                        return [3 /*break*/, 7];
                    case 5:
                        e_1 = _a.sent();
                        this.toastSvc.flash(this.errorService.firstError(e_1));
                        return [3 /*break*/, 7];
                    case 6:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    TrainerRegistrationPage.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.trainerService.updateTrainer(this.trainer().trainer.id, this.form.getRawValue())];
                    case 1:
                        _a.sent();
                        this.toastSvc.flash('Profile saved.');
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        this.toastSvc.flash(this.errorService.firstError(e_2));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TrainerRegistrationPage.prototype.trainer = function () {
        return (JSON.parse(window.localStorage.getItem('transphormer')));
    };
    TrainerRegistrationPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trainer-registration',
            template: __webpack_require__(/*! ./trainer-registration.page.html */ "./src/app/pages/trainer-registration/trainer-registration.page.html"),
            styles: [__webpack_require__(/*! ./trainer-registration.page.scss */ "./src/app/pages/trainer-registration/trainer-registration.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_trainer_trainer_service__WEBPACK_IMPORTED_MODULE_2__["TrainerService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
            _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_4__["ErrorsService"]])
    ], TrainerRegistrationPage);
    return TrainerRegistrationPage;
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
//# sourceMappingURL=pages-trainer-registration-trainer-registration-module.js.map