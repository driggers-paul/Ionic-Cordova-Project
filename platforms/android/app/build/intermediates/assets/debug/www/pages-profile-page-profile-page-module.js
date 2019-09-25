(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-page-profile-page-module"],{

/***/ "./src/app/pages/profile-page/profile-page.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile-page/profile-page.module.ts ***!
  \***********************************************************/
/*! exports provided: ProfilePagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePagePageModule", function() { return ProfilePagePageModule; });
/* harmony import */ var _components_height_height_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/height/height.module */ "./src/app/components/height/height.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-page.page */ "./src/app/pages/profile-page/profile-page.page.ts");
/* harmony import */ var _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/side-menu/side-menu.module */ "./src/app/components/side-menu/side-menu.module.ts");
/* harmony import */ var _components_common_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/common-components.module */ "./src/app/components/common-components.module.ts");
/* harmony import */ var _components_nutrition_nutrition_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/nutrition/nutrition.module */ "./src/app/components/nutrition/nutrition.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _profile_page_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePagePage"],
    },
];
var ProfilePagePageModule = /** @class */ (function () {
    function ProfilePagePageModule() {
    }
    ProfilePagePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _components_height_height_module__WEBPACK_IMPORTED_MODULE_0__["HeightModule"],
                _components_common_components_module__WEBPACK_IMPORTED_MODULE_8__["AppComponentsModule"],
                _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_7__["SideMenuModule"],
                _components_nutrition_nutrition_module__WEBPACK_IMPORTED_MODULE_9__["NutritionModule"]
            ],
            declarations: [_profile_page_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePagePage"]]
        })
    ], ProfilePagePageModule);
    return ProfilePagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile-page/profile-page.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile-page/profile-page.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <app-menu-button></app-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>My Profile</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"profile\">\r\n  <ion-list>\r\n    <ion-list-header>Personal info</ion-list-header>\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"updateProfile()\">\r\n      <div class=\"global-input\">\r\n        <ion-label position=\"stacked\">Email</ion-label>\r\n        <ion-input type=\"email\" disabled=\"true\" [value]=\"email\"></ion-input>\r\n      </div>\r\n      <div class=\"global-input\">\r\n        <ion-label position=\"stacked\">First Name</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"first_name\"></ion-input>\r\n      </div>\r\n      <div class=\"global-input\">\r\n        <ion-label position=\"stacked\">Last Name</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"last_name\"></ion-input>\r\n      </div>\r\n      <div class=\"global-input\">\r\n        <ion-label position=\"stacked\">Height</ion-label>\r\n        <app-height [height]=\"form.get('height').value\" (heightChange)=\"form.get('height').setValue($event)\">\r\n      </app-height>\r\n      </div>\r\n      <div class=\"global-input padding\">\r\n        <ion-label position=\"stacked\">Weight</ion-label>\r\n        <ion-button type=\"button\" color=\"primary\" fill=\"outline\" expand=\"full\" (click)=\"goToWeighIn()\">\r\n          + Add Weight\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"global-input\">\r\n        <ion-label position=\"stacked\">Date of Birth</ion-label>\r\n        <ion-datetime display-format=\"MM/DD/YYYY\" formControlName=\"date_of_birth\"></ion-datetime>\r\n      </div>\r\n      <div class=\"global-input\">\r\n        <ion-label position=\"stacked\">Sex</ion-label>\r\n        <ion-select formControlName=\"sex\" placeholder=\"Please Select\">\r\n          <ion-select-option [value]=\"SexValues.Male\">Male</ion-select-option>\r\n          <ion-select-option [value]=\"SexValues.Female\">Female</ion-select-option>\r\n        </ion-select>\r\n      </div>\r\n      <div class=\"global-input padding\">\r\n        <ion-label position=\"stacked\">Goal Weight</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"goal_weight\"></ion-input>\r\n        <small *ngIf=\"isMacroCalorieCounting\">Your goal weight is influencing your daily Macros.</small>\r\n      </div>\r\n      <ion-list-header>Workouts</ion-list-header>\r\n      <div class=\"global-input\">\r\n        <ion-label position=\"stacked\">What level of exercise are you ready for?</ion-label>\r\n        <ion-select formControlName=\"training_level\" placeholder=\"Please Select\">\r\n          <ion-select-option *ngFor=\"let trainingLevel of trainingLevels\" [value]=\"trainingLevel.value\">{{\r\n            trainingLevel.name }}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </div>\r\n      <div class=\"global-input\">\r\n        <ion-label position=\"stacked\">Are you working out in a gym?</ion-label>\r\n        <ion-select formControlName=\"access_to_gym\" placeholder=\"Please Select\">\r\n          <ion-select-option value=\"1\">Yes</ion-select-option>\r\n          <ion-select-option value=\"0\">No</ion-select-option>\r\n        </ion-select>\r\n      </div>\r\n      <div class=\"global-input\" *ngIf=\"form.get('access_to_gym').value == 0\">\r\n        <ion-label position=\"stacked\">What type of equipment do you have at home or have access to?</ion-label>\r\n        <ion-select formControlName=\"home_workout_selection\" placeholder=\"Please Select\">\r\n          <ion-select-option *ngFor=\"let homeWorkout of homeWorkouts\" [value]=\"homeWorkout.value\">{{\r\n            homeWorkout.name }}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </div>\r\n      <div class=\"global-input\" *ngIf=\"form.get('access_to_gym').value == 1\">\r\n        <ion-label position=\"stacked\">Do you prefer traditional lifting plans or circuit style training or functional\r\n          fitness?</ion-label>\r\n        <ion-select formControlName=\"gym_workout_selection\" placeholder=\"Please Select\">\r\n          <ion-select-option *ngFor=\"let programType of programTypes\" [value]=\"programType.value\">{{ programType.name\r\n            }}</ion-select-option>\r\n        </ion-select>\r\n      </div>\r\n      <div class=\"premium-note\" *ngIf=\"is_free_user && form.get('gym_workout_selection').value && form.get('gym_workout_selection').value != getProgramType(2).value && form.get('access_to_gym').value == 1\">\r\n        <p>The <strong>{{ getProgramType(form.get('gym_workout_selection').value).name }}</strong> training program is only available to\r\n          Premium subscribers. You will default to the free option.\r\n        </p>\r\n        <ion-button class=\"premium\" fill=\"solid\" color=\"warning\" size=\"small\" shape=\"round\" (click)=\"goPremium()\">Go Premium &rarr;</ion-button>\r\n      </div>\r\n      <div class=\"premium-note\" *ngIf=\"is_free_user && form.get('access_to_gym').value == 0\">\r\n        <p>The <strong>at-home workout</strong> training programs are only available to\r\n          Premium subscribers. You will default to the Traditional gym workout.\r\n        </p>\r\n        <ion-button class=\"premium\" fill=\"solid\" color=\"warning\" size=\"small\" shape=\"round\" (click)=\"goPremium()\">Go Premium &rarr;</ion-button>\r\n      </div>\r\n      <ion-list-header>Nutrition</ion-list-header>\r\n      <div class=\"global-input\">\r\n        <ion-label position=\"stacked\">What are you more likely to do?</ion-label>\r\n        <ion-select [interfaceOptions]=\"{header: 'Choose an option'}\" formControlName=\"likely_to_do\" placeholder=\"Please Select\">\r\n          <ion-select-option [value]=\"'Macro meal plan'\">Meal plan</ion-select-option>\r\n          <ion-select-option>Calorie / Macro counting</ion-select-option>\r\n          <ion-select-option>Portion control</ion-select-option>\r\n        </ion-select>\r\n      </div>\r\n      <div class=\"premium-note\" *ngIf=\"is_free_user && form.get('likely_to_do').value === 'Calorie / Macro counting'\">\r\n        <p>The <strong>{{ form.get('likely_to_do').value }}</strong> option is only available to Premium subscribers.\r\n          You will default to the free option.\r\n        </p>\r\n        <ion-button class=\"premium\" fill=\"solid\" color=\"warning\" size=\"small\" shape=\"round\" (click)=\"goPremium()\">Go Premium &rarr;</ion-button>\r\n      </div>\r\n      <div class=\"global-input\">\r\n        <app-macros-bar [transphormer]=\"transphormer\"></app-macros-bar>\r\n        <ion-button margin-top *ngIf=\"isMacroCalorieCounting\" (click)=\"openCustomMacro()\" expand=\"full\" >Customize Macros</ion-button>\r\n      </div>\r\n      <div class=\"premium-note\" *ngIf=\"isMacroCalorieCounting && hasCustomMacros\">\r\n        <p>Your macros are customized. Changing the values below will not affect your macros unless they are reset.</p>\r\n      </div>\r\n      <div class=\"global-input\">\r\n        <ion-label position=\"stacked\">I want to...</ion-label>\r\n        <ion-select formControlName=\"transphormation_goal\" placeholder=\"Please Select\">\r\n          <ion-select-option *ngFor=\"let transphormationGoal of transphormationGoals\" [value]=\"transphormationGoal\">{{\r\n            transphormationGoal }}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <small>This value impacts your daily macros.</small>\r\n      </div>\r\n      <div class=\"global-input\">\r\n        <ion-label position=\"stacked\">What is your daily activity level?</ion-label>\r\n        <ion-select formControlName=\"activity_level\" placeholder=\"Please Select\">\r\n          <ion-select-option *ngFor=\"let activeLevel of activeLevels\" [value]=\"activeLevel\">{{\r\n            activeLevel }}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <small>This value impacts your daily macros.</small>\r\n      </div>\r\n      <div class=\"global-input\" *ngIf=\"form.get('likely_to_do').value === 'Macro meal plan'\">\r\n        <ion-label position=\"stacked\">How many meals per day are you wanting to eat?</ion-label>\r\n        <ion-select formControlName=\"meals_per_day\" placeholder=\"Please Select\">\r\n          <ion-select-option [value]=\"3\">3</ion-select-option>\r\n          <ion-select-option [value]=\"4\">4</ion-select-option>\r\n          <ion-select-option [value]=\"5\">5</ion-select-option>\r\n        </ion-select>\r\n        <small>This value does not impact your macros, only portion sizes.</small>\r\n      </div>\r\n      <div class=\"global-input\" *ngIf=\"isMacroCalorieCounting\">\r\n        <ion-label position=\"stacked\">Do you prefer Carbs or Fats?</ion-label>\r\n        <ion-select formControlName=\"preference_macro_counting\" placeholder=\"Please Select\" [interfaceOptions]=\"{header: 'Carbs or Fats?'}\">\r\n          <ion-select-option value=\"Both\">Both</ion-select-option>\r\n          <ion-select-option value=\"Carbs\">Carbs</ion-select-option>\r\n          <ion-select-option value=\"Fats\">Fat</ion-select-option>\r\n        </ion-select>\r\n        <small>This value adjusts daily carbs and fats.</small>\r\n      </div>\r\n      <div class=\"global-input padding\">\r\n        <ion-button type=\"submit\" color=\"primary\" expand=\"full\">Update</ion-button>\r\n      </div>\r\n    </form>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/profile-page/profile-page.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile-page/profile-page.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile form {\n  padding-bottom: 20px; }\n\nion-list-header {\n  --background: var(--ion-color-header); }\n\n.premium-note {\n  margin: calc(var(--default-margin) * -1) calc(var(--default-margin) * 2) calc(var(--default-margin) * 3);\n  background: var(--ion-color-warning-lightest);\n  padding: var(--default-margin); }\n\n.premium-note p {\n    font-size: 12pt;\n    margin-top: 0;\n    margin-bottom: var(--default-margin); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1wYWdlL0U6XFxpb25pY1xcVmVydmVDb21tZXJjZVxcTmV3RGV2XFxtdHN0LWFwcC9zcmNcXGFwcFxccGFnZXNcXHByb2ZpbGUtcGFnZVxccHJvZmlsZS1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG9CQUFvQixFQUFBOztBQUl4QjtFQUNFLHFDQUFhLEVBQUE7O0FBR2Y7RUFDRSx3R0FDaUM7RUFDakMsNkNBQTZDO0VBQzdDLDhCQUE4QixFQUFBOztBQUpoQztJQU9JLGVBQWU7SUFDZixhQUFhO0lBQ2Isb0NBQW9DLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlLXBhZ2UvcHJvZmlsZS1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlIHtcclxuICBmb3JtIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1oZWFkZXIpO1xyXG59XHJcblxyXG4ucHJlbWl1bS1ub3RlIHtcclxuICBtYXJnaW46IGNhbGModmFyKC0tZGVmYXVsdC1tYXJnaW4pICogLTEpIGNhbGModmFyKC0tZGVmYXVsdC1tYXJnaW4pICogMilcclxuICAgIGNhbGModmFyKC0tZGVmYXVsdC1tYXJnaW4pICogMyk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctbGlnaHRlc3QpO1xyXG4gIHBhZGRpbmc6IHZhcigtLWRlZmF1bHQtbWFyZ2luKTtcclxuICAvLyBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tZGVmYXVsdC1tYXJnaW4pO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/profile-page/profile-page.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile-page/profile-page.page.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePagePage", function() { return ProfilePagePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/onboarding/onboarding.service */ "./src/app/services/onboarding/onboarding.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/toast-service/toast-service.service */ "./src/app/services/toast-service/toast-service.service.ts");
/* harmony import */ var _components_nutrition_custom_macros_custom_macros_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/nutrition/custom-macros/custom-macros.component */ "./src/app/components/nutrition/custom-macros/custom-macros.component.ts");
/* harmony import */ var _services_nutrition_calculator_nutrition_calculator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/nutrition-calculator/nutrition-calculator.service */ "./src/app/services/nutrition-calculator/nutrition-calculator.service.ts");
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/analytics/analytics.service */ "./src/app/services/analytics/analytics.service.ts");
/* harmony import */ var _services_analytics_analytic_events_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../services/analytics/analytic-events.enum */ "./src/app/services/analytics/analytic-events.enum.ts");
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











var ProfilePagePage = /** @class */ (function () {
    function ProfilePagePage(modal, nutritionCalculatorService, formBuilder, onboardingService, loadingCtrl, toastSvc, errorService, navCtrl, analyticService) {
        this.modal = modal;
        this.nutritionCalculatorService = nutritionCalculatorService;
        this.formBuilder = formBuilder;
        this.onboardingService = onboardingService;
        this.loadingCtrl = loadingCtrl;
        this.toastSvc = toastSvc;
        this.errorService = errorService;
        this.navCtrl = navCtrl;
        this.analyticService = analyticService;
        this.complete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.trainingLevels = _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_2__["TrainingLevels"];
        this.transphormationGoals = _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_2__["TransphormationGoal"];
        this.activeLevels = _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_2__["ActiveLevels"];
        this.programTypes = _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_2__["TrainingProgramTypes"];
        this.is_free_user = false;
        this.homeWorkouts = _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_2__["TrainingHomeWorkouts"];
        this.email = '';
        this.SexValues = _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_2__["Sex"];
    }
    ProfilePagePage.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            first_name: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            last_name: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            height: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            weight: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            goal_weight: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            date_of_birth: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            sex: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            activity_level: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            training_level: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            transphormation_goal: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            access_to_gym: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            likely_to_do: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            home_workout_selection: this.formBuilder.control(''),
            gym_workout_selection: this.formBuilder.control(''),
            meals_per_day: this.formBuilder.control(''),
            preference_macro_counting: this.formBuilder.control(''),
        });
        this.fetchProfile();
    };
    ProfilePagePage.prototype.goPremium = function () {
        this.navCtrl.navigateRoot('subscription');
    };
    ProfilePagePage.prototype.fetchProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, transphormer, _a, attribute, e_1;
            var _this = this;
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
                        _b.trys.push([3, 5, 6, 7]);
                        _a = this;
                        return [4 /*yield*/, this.onboardingService.fetchOnBoard()];
                    case 4:
                        transphormer = _a.transphormer = (_b.sent());
                        for (attribute in Object(lodash__WEBPACK_IMPORTED_MODULE_5__["pick"])(transphormer, Object.keys(this.form.getRawValue()))) {
                            if (transphormer.hasOwnProperty(attribute)) {
                                this.form.get(attribute).setValue(transphormer[attribute]);
                            }
                        }
                        this.form.get('date_of_birth').setValue(transphormer.dob);
                        this.is_free_user = !transphormer.is_paid_user;
                        this.email = transphormer.email;
                        this.form.valueChanges.subscribe(function () {
                            var values = _this.form.getRawValue();
                            if (values.likely_to_do === 'Calorie / Macro counting' && _this.is_free_user) {
                                values.likely_to_do = 'Portion control';
                            }
                            _this.transphormer = Object.assign({}, _this.transphormer, values);
                        });
                        return [3 /*break*/, 7];
                    case 5:
                        e_1 = _b.sent();
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
    Object.defineProperty(ProfilePagePage.prototype, "isMacroCalorieCounting", {
        get: function () {
            if (!this.transphormer) {
                return false;
            }
            return this.transphormer.is_paid_user && (this.form.get('likely_to_do').value === 'Calorie / Macro counting');
        },
        enumerable: true,
        configurable: true
    });
    ProfilePagePage.prototype.updateProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data = this.form.getRawValue();
                        if (data.likely_to_do !== 'Macro meal plan') {
                            data.meals_per_day = 0;
                        }
                        return [4 /*yield*/, this.onboardingService.updateOnBoardInformation(data)];
                    case 1:
                        _a.sent();
                        this.toastSvc.flash('Profile saved.');
                        this.analyticService.logEvent(_services_analytics_analytic_events_enum__WEBPACK_IMPORTED_MODULE_10__["AnalyticEvents"].UpdatingProfile, {});
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
    ProfilePagePage.prototype.goToWeighIn = function () {
        this.navCtrl.navigateRoot('weight', {
            animationDirection: 'forward',
            animated: true
        });
    };
    ProfilePagePage.prototype.getProgramType = function (value) {
        return this.programTypes.find(function (programType) { return programType.value === value; });
    };
    Object.defineProperty(ProfilePagePage.prototype, "hasCustomMacros", {
        get: function () {
            if (!this.transphormer) {
                return false;
            }
            return this.transphormer.custom_macros && !this.transphormer.custom_macros.reset_to_original;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Open modal for editing/creating custom macro
     */
    ProfilePagePage.prototype.openCustomMacro = function () {
        return __awaiter(this, void 0, void 0, function () {
            var bmrValues, macroModal, result, custom_macros;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bmrValues = this.nutritionCalculatorService.calculateAdvancedMacros(+this.transphormer.latest_weight_value, +this.transphormer.goal_weight, this.transphormer.activity_level, this.transphormer.transphormation_goal, this.transphormer.sex, this.transphormer.preference_macro_counting);
                        return [4 /*yield*/, this.modal.create({
                                component: _components_nutrition_custom_macros_custom_macros_component__WEBPACK_IMPORTED_MODULE_7__["CustomMacrosComponent"],
                                componentProps: {
                                    originalMacro: bmrValues,
                                }
                            })];
                    case 1:
                        macroModal = _a.sent();
                        return [4 /*yield*/, macroModal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, macroModal.onDidDismiss()];
                    case 3:
                        result = _a.sent();
                        if (result.data) {
                            custom_macros = result.data;
                            this.transphormer = Object.assign({}, this.transphormer, { custom_macros: custom_macros });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProfilePagePage.prototype, "complete", void 0);
    ProfilePagePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-page',
            template: __webpack_require__(/*! ./profile-page.page.html */ "./src/app/pages/profile-page/profile-page.page.html"),
            styles: [__webpack_require__(/*! ./profile-page.page.scss */ "./src/app/pages/profile-page/profile-page.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _services_nutrition_calculator_nutrition_calculator_service__WEBPACK_IMPORTED_MODULE_8__["NutritionCalculatorService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_2__["OnboardingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
            _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_4__["ErrorsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_9__["AnalyticsService"]])
    ], ProfilePagePage);
    return ProfilePagePage;
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


/***/ })

}]);
//# sourceMappingURL=pages-profile-page-profile-page-module.js.map