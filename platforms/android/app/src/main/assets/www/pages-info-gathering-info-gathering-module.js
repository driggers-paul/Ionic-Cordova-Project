(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-info-gathering-info-gathering-module"],{

/***/ "./src/app/pages/info-gathering/components/basic-info/basic-info.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/info-gathering/components/basic-info/basic-info.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h4 class=\"title\">Step 2: Basic Training info and goals</h4>\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\r\n        <div class=\"global-input\">\r\n            <ion-label>What is your Transphormation goal?</ion-label>\r\n            <ion-select formControlName=\"transphormation_goal\" placeholder=\"Please Select\">\r\n                <ion-select-option *ngFor=\"let transphormationGoal of transphormationGoal\"\r\n                                   [value]=\"transphormationGoal\">{{\r\n                    transphormationGoal }}\r\n                </ion-select-option>\r\n            </ion-select>\r\n        </div>\r\n        <div class=\"global-input\">\r\n            <ion-label>What is your training level?</ion-label>\r\n            <ion-select formControlName=\"training_level\" placeholder=\"Please Select\"\r\n                        interface-options=\"{cssClass: 'sample'}\">\r\n                <ion-select-option *ngFor=\"let trainingLevel of trainingLevels\" [value]=\"trainingLevel.value\">{{\r\n                    trainingLevel.name }}\r\n                </ion-select-option>\r\n            </ion-select>\r\n        </div>\r\n        <div class=\"global-input\">\r\n            <ion-label>Do you have access to a gym and plan on using it for the majority of your workouts?\r\n            </ion-label>\r\n            <ion-radio-group formControlName=\"access_to_gym\">\r\n                <div class=\"inline\">\r\n                    <div class=\"inline\">\r\n                        <ion-label class=\"options\">Yes</ion-label>\r\n                        <ion-radio mode=\"md\" [value]=\"1\"></ion-radio>\r\n                    </div>\r\n                    <div class=\"inline\">\r\n                        <ion-label class=\"options\">No</ion-label>\r\n                        <ion-radio mode=\"md\" [value]=\"0\"></ion-radio>\r\n                    </div>\r\n                </div>\r\n            </ion-radio-group>\r\n            <div>\r\n                <div class=\"global-input sub-part\" [class.hide]=\"form.get('access_to_gym').value !== 1\">\r\n                    <ion-label>Do you prefer traditional lifting plans or circuit style training or functional\r\n                        fitness?\r\n                    </ion-label>\r\n                    <ion-select formControlName=\"gym_workout_selection\" placeholder=\"Please Select\">\r\n                        <ion-select-option *ngFor=\"let programType of programTypes\" [value]=\"programType.value\">{{\r\n                            programType.name }}\r\n                        </ion-select-option>\r\n                    </ion-select>\r\n                    <div class=\"premium-note\" [class.hide]=\"form.get('gym_workout_selection').value == 2 || form.get('gym_workout_selection').value == null\">\r\n                        <p>The <strong>{{ getPt(form.get('gym_workout_selection').value || 1).name }}</strong> training program is for\r\n                            Premium subscribers only.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"global-input sub-part\" [class.hide]=\"form.get('access_to_gym').value !== 0\">\r\n                    <ion-label>What type of equipment do you have at home or access to?</ion-label>\r\n                    <ion-select formControlName=\"home_workout_selection\" placeholder=\"Please Select\">\r\n                      <ion-select-option *ngFor=\"let homeWorkout of homeWorkouts\" [value]=\"homeWorkout.value\">{{\r\n                        homeWorkout.name }}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                    <div class=\"premium-note\">\r\n                        <p>Our at-home workouts are for Premium subscribers only.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"global-input\">\r\n            <ion-label>What are you more likely to do?</ion-label>\r\n            <ion-select formControlName=\"likely_to_do\" placeholder=\"Please Select\">\r\n                <ion-select-option value=\"Macro meal plan\">Meal plan</ion-select-option>\r\n                <ion-select-option value=\"Calorie / Macro counting\">Calorie / Macro counting</ion-select-option>\r\n                <ion-select-option value=\"Portion control\">Portion control</ion-select-option>\r\n            </ion-select>\r\n            <div class=\"premium-note\" [class.hide]=\"!form.get('likely_to_do').value || form.get('likely_to_do').value !== 'Calorie / Macro counting'\">\r\n                <p>The <strong>{{ form.get('likely_to_do').value }}</strong> nutrition program is for\r\n                    Premium subscribers only.\r\n                </p>\r\n            </div>\r\n            <div class=\"sub-part global-input\" *ngIf=\"form.get('likely_to_do').value === 'Macro meal plan'\">\r\n                <ion-label>How many meals per day are you wanting to eat?</ion-label>\r\n                <ion-radio-group formControlName=\"meals_per_day\">\r\n                    <div class=\"inline\">\r\n                        <div class=\"inline\">\r\n                            <ion-label class=\"options\">3</ion-label>\r\n                            <ion-radio mode=\"md\" value=\"3\"></ion-radio>\r\n                        </div>\r\n                        <div class=\"inline\">\r\n                            <ion-label class=\"options\">4</ion-label>\r\n                            <ion-radio mode=\"md\" value=\"4\"></ion-radio>\r\n                        </div>\r\n                        <div class=\"inline\">\r\n                            <ion-label class=\"options\">5</ion-label>\r\n                            <ion-radio mode=\"md\" value=\"5\"></ion-radio>\r\n                        </div>\r\n                    </div>\r\n                </ion-radio-group>\r\n            </div>\r\n            <div class=\"sub-part\" *ngIf=\"form.get('likely_to_do').value === 'Calorie / Macro counting'\">\r\n                <ion-label>Do you prefer Carbs or Fats?</ion-label>\r\n                <ion-radio-group formControlName=\"preference_macro_counting\">\r\n                    <div class=\"inline\">\r\n                        <div class=\"inline\">\r\n                            <ion-label class=\"options\">Both</ion-label>\r\n                            <ion-radio mode=\"md\" value=\"Both\"></ion-radio>\r\n                        </div>\r\n                        <div class=\"inline\">\r\n                            <ion-label class=\"options\">Carbs</ion-label>\r\n                            <ion-radio mode=\"md\" value=\"Carbs\"></ion-radio>\r\n                        </div>\r\n                        <div class=\"inline\">\r\n                            <ion-label class=\"options\">Fats</ion-label>\r\n                            <ion-radio mode=\"md\" value=\"Fats\"></ion-radio>\r\n                        </div>\r\n                    </div>\r\n                </ion-radio-group>\r\n            </div>\r\n        </div>\r\n        <div class=\"global-input\">\r\n            <ion-label>How active are you throughout the day?</ion-label>\r\n            <ion-select formControlName=\"activity_level\" placeholder=\"Please Select\">\r\n                <ion-select-option *ngFor=\"let activeLevel of activeLevel\" [value]=\"activeLevel\">{{\r\n                    activeLevel }}\r\n                </ion-select-option>\r\n            </ion-select>\r\n        </div>\r\n        <div class=\"buttons\">\r\n            <ion-button type=\"button\" (click)=\"movePrevious()\">Previous</ion-button>\r\n            <ion-button type=\"submit\" [disabled]=\"form.invalid\">Next</ion-button>\r\n        </div>\r\n    </form>\r\n    <!--form question end-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/info-gathering/components/basic-info/basic-info.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/info-gathering/components/basic-info/basic-info.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inline {\n  display: flex;\n  justify-content: space-around;\n  align-items: center; }\n\n.radio {\n  padding: 0 15px; }\n\n.buttons {\n  display: flex;\n  justify-content: space-between;\n  margin: 24px 0; }\n\n.title {\n  text-align: center;\n  margin-bottom: 24px; }\n\n.options {\n  font-weight: normal;\n  padding: 10px; }\n\nion-select {\n  max-width: 100%;\n  width: 100%; }\n\n.sub-part {\n  padding: 16px;\n  border-left: 4px solid var(--ion-1p-green);\n  margin: 16px 0; }\n\n.premium-note {\n  margin-top: var(--default-margin);\n  background: var(--ion-color-warning-lightest);\n  padding: var(--default-margin); }\n\n.premium-note p {\n    font-size: 12pt;\n    margin-top: 0;\n    margin-bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5mby1nYXRoZXJpbmcvY29tcG9uZW50cy9iYXNpYy1pbmZvL0U6XFxpb25pY1xcVmVydmVDb21tZXJjZVxcTmV3RGV2XFxtdHN0LWFwcC9zcmNcXGFwcFxccGFnZXNcXGluZm8tZ2F0aGVyaW5nXFxjb21wb25lbnRzXFxiYXNpYy1pbmZvXFxiYXNpYy1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG1CQUFtQjtFQUNuQixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUdiO0VBQ0UsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsaUNBQWlDO0VBQ2pDLDZDQUE2QztFQUM3Qyw4QkFBOEIsRUFBQTs7QUFIaEM7SUFLSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5mby1nYXRoZXJpbmcvY29tcG9uZW50cy9iYXNpYy1pbmZvL2Jhc2ljLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5saW5lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yYWRpbyB7XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luOiAyNHB4IDA7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuXHJcbi5vcHRpb25zIHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnN1Yi1wYXJ0IHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0taW9uLTFwLWdyZWVuKTtcclxuICBtYXJnaW46IDE2cHggMDtcclxufVxyXG5cclxuLnByZW1pdW0tbm90ZSB7XHJcbiAgbWFyZ2luLXRvcDogdmFyKC0tZGVmYXVsdC1tYXJnaW4pO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLWxpZ2h0ZXN0KTtcclxuICBwYWRkaW5nOiB2YXIoLS1kZWZhdWx0LW1hcmdpbik7XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/info-gathering/components/basic-info/basic-info.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/info-gathering/components/basic-info/basic-info.component.ts ***!
  \************************************************************************************/
/*! exports provided: BasicInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInfoComponent", function() { return BasicInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/onboarding/onboarding.service */ "./src/app/services/onboarding/onboarding.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasicInfoComponent = /** @class */ (function () {
    function BasicInfoComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.previous = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.complete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.trainingLevels = _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_2__["TrainingLevels"];
        this.transphormationGoal = _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_2__["TransphormationGoal"];
        this.activeLevel = _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_2__["ActiveLevels"];
        this.programTypes = _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_2__["TrainingProgramTypes"];
        this.homeWorkouts = _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_2__["TrainingHomeWorkouts"];
    }
    BasicInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.formBuilder.group({
            activity_level: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            training_level: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            transphormation_goal: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            access_to_gym: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            gym_workout_selection: this.formBuilder.control({ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            home_workout_selection: this.formBuilder.control({ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            likely_to_do: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            meals_per_day: this.formBuilder.control({ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            preference_macro_counting: this.formBuilder.control({ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
        this.form.get('likely_to_do').valueChanges.subscribe(function (value) {
            _this.form.get('meals_per_day').disable();
            _this.form.get('preference_macro_counting').disable();
            if (value === 'Macro meal plan') {
                _this.form.get('meals_per_day').enable();
            }
            else if (value === 'Calorie / Macro counting') {
                _this.form.get('preference_macro_counting').enable();
            }
        });
        this.form.get('access_to_gym').valueChanges.subscribe(function (value) {
            _this.form.get('gym_workout_selection').disable();
            _this.form.get('home_workout_selection').disable();
            if (value === 1) {
                _this.form.get('gym_workout_selection').enable();
            }
            else {
                _this.form.get('home_workout_selection').enable();
            }
        });
    };
    BasicInfoComponent.prototype.getPt = function (value) {
        return this.programTypes.find(function (programType) { return programType.value === value; });
    };
    BasicInfoComponent.prototype.movePrevious = function () {
        this.previous.emit();
    };
    BasicInfoComponent.prototype.submitForm = function () {
        this.complete.emit(this.form.getRawValue());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BasicInfoComponent.prototype, "previous", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BasicInfoComponent.prototype, "complete", void 0);
    BasicInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-info',
            template: __webpack_require__(/*! ./basic-info.component.html */ "./src/app/pages/info-gathering/components/basic-info/basic-info.component.html"),
            styles: [__webpack_require__(/*! ./basic-info.component.scss */ "./src/app/pages/info-gathering/components/basic-info/basic-info.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], BasicInfoComponent);
    return BasicInfoComponent;
}());



/***/ }),

/***/ "./src/app/pages/info-gathering/components/marketing-questions/marketing-questions.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/info-gathering/components/marketing-questions/marketing-questions.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h4 class=\"title\">Step 3: Commitments</h4>\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\r\n    <div class=\"global-input\">\r\n      <ion-label>Do you understand the importance of nutrition?</ion-label>\r\n      <ion-radio-group formControlName=\"understand_nutrition\">\r\n        <div class=\"inline\">\r\n          <div class=\"inline\">\r\n            <ion-label class=\"options\">Yes</ion-label>\r\n            <ion-radio mode=\"md\" value=\"1\"></ion-radio>\r\n          </div>\r\n          <div class=\"inline\">\r\n            <ion-label class=\"options\">No</ion-label>\r\n            <ion-radio mode=\"md\" value=\"0\"></ion-radio>\r\n          </div>\r\n        </div>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n    <div class=\"global-input\">\r\n      <ion-label>Are you committed to exercising consistently to achieve your goals?</ion-label>\r\n      <ion-radio-group formControlName=\"committed_to_exercise\">\r\n        <div class=\"inline\">\r\n          <div class=\"inline\">\r\n            <ion-label class=\"options\">Yes</ion-label>\r\n            <ion-radio mode=\"md\" value=\"1\"></ion-radio>\r\n          </div>\r\n          <div class=\"inline\">\r\n            <ion-label class=\"options\">No</ion-label>\r\n            <ion-radio mode=\"md\" value=\"0\"></ion-radio>\r\n          </div>\r\n        </div>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n    <div class=\"global-input\">\r\n      <ion-label>Do you understand the role supplements have in helping you achieve your\r\n        Transphormation goals?\r\n      </ion-label>\r\n      <ion-radio-group formControlName=\"understand_supplements\">\r\n        <div class=\"inline\">\r\n          <div class=\"inline\">\r\n            <ion-label class=\"options\">Yes</ion-label>\r\n            <ion-radio mode=\"md\" value=\"1\"></ion-radio>\r\n          </div>\r\n          <div class=\"inline\">\r\n            <ion-label class=\"options\">No</ion-label>\r\n            <ion-radio mode=\"md\" value=\"0\"></ion-radio>\r\n          </div>\r\n        </div>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n    <div class=\"buttons\">\r\n      <ion-button type=\"button\" (click)=\"movePrevious()\">Previous</ion-button>\r\n      <ion-button type=\"submit\" [disabled]=\"form.invalid\">Finish</ion-button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/info-gathering/components/marketing-questions/marketing-questions.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/info-gathering/components/marketing-questions/marketing-questions.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttons {\n  display: flex;\n  justify-content: space-between;\n  margin: 24px 0; }\n\n.title {\n  text-align: center;\n  margin-bottom: 24px; }\n\n.options {\n  font-weight: normal;\n  padding: 10px; }\n\n.inline {\n  display: flex;\n  justify-content: space-around;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5mby1nYXRoZXJpbmcvY29tcG9uZW50cy9tYXJrZXRpbmctcXVlc3Rpb25zL0U6XFxpb25pY1xcVmVydmVDb21tZXJjZVxcTmV3RGV2XFxtdHN0LWFwcC9zcmNcXGFwcFxccGFnZXNcXGluZm8tZ2F0aGVyaW5nXFxjb21wb25lbnRzXFxtYXJrZXRpbmctcXVlc3Rpb25zXFxtYXJrZXRpbmctcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG1CQUFtQjtFQUNuQixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5mby1nYXRoZXJpbmcvY29tcG9uZW50cy9tYXJrZXRpbmctcXVlc3Rpb25zL21hcmtldGluZy1xdWVzdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luOiAyNHB4IDA7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuXHJcbi5vcHRpb25zIHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5pbmxpbmUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/info-gathering/components/marketing-questions/marketing-questions.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/info-gathering/components/marketing-questions/marketing-questions.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: MarketingQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingQuestionsComponent", function() { return MarketingQuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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


var MarketingQuestionsComponent = /** @class */ (function () {
    function MarketingQuestionsComponent() {
        this.previous = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.complete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MarketingQuestionsComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            understand_nutrition: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            committed_to_exercise: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            understand_supplements: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    };
    MarketingQuestionsComponent.prototype.movePrevious = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.previous.emit();
                return [2 /*return*/];
            });
        });
    };
    MarketingQuestionsComponent.prototype.submitForm = function () {
        this.complete.emit(this.form.getRawValue());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MarketingQuestionsComponent.prototype, "previous", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MarketingQuestionsComponent.prototype, "complete", void 0);
    MarketingQuestionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-marketing-questions',
            template: __webpack_require__(/*! ./marketing-questions.component.html */ "./src/app/pages/info-gathering/components/marketing-questions/marketing-questions.component.html"),
            styles: [__webpack_require__(/*! ./marketing-questions.component.scss */ "./src/app/pages/info-gathering/components/marketing-questions/marketing-questions.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MarketingQuestionsComponent);
    return MarketingQuestionsComponent;
}());



/***/ }),

/***/ "./src/app/pages/info-gathering/components/personal-info/personal-info.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/info-gathering/components/personal-info/personal-info.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h4 class=\"title\">Step 1: Personal information</h4>\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\r\n    <div class=\"global-input\">\r\n      <ion-label>Date of Birth</ion-label>\r\n      <ion-datetime display-format=\"MM/DD/YYYY\" formControlName=\"date_of_birth\"></ion-datetime>\r\n    </div>\r\n    <div class=\"global-input\">\r\n      <ion-label>Height</ion-label>\r\n    <app-height\r\n        [height]=\"form.get('height').value\"\r\n        (heightChange)=\"form.get('height').setValue($event)\">\r\n      </app-height>\r\n    </div>\r\n    <div class=\"global-input\">\r\n      <ion-label>Weight <span class=\"color\">(lbs)</span></ion-label>\r\n      <ion-input formControlName=\"weight\" type=\"number\"></ion-input>\r\n    </div>\r\n    <div class=\"global-input\">\r\n      <ion-label>Goal Weight <span class=\"color\">(lbs)</span></ion-label>\r\n      <ion-input formControlName=\"goal_weight\" type=\"number\"></ion-input>\r\n    </div>\r\n    <div class=\"global-input radio\">\r\n      <ion-label>Sex</ion-label>\r\n      <ion-radio-group formControlName=\"sex\">\r\n        <div class=\"inline\">\r\n          <div class=\"inline\">\r\n            <ion-label class=\"options\">Male</ion-label>\r\n            <ion-radio mode=\"md\" value=\"1\"></ion-radio>\r\n          </div>\r\n          <div class=\"inline\">\r\n            <ion-label class=\"options\">Female</ion-label>\r\n            <ion-radio mode=\"md\" value=\"2\"></ion-radio>\r\n          </div>\r\n        </div>\r\n      </ion-radio-group>\r\n    </div>\r\n    <ion-button type=\"submit\" [disabled]=\"form.invalid\">Next</ion-button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/info-gathering/components/personal-info/personal-info.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/info-gathering/components/personal-info/personal-info.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inline {\n  display: flex;\n  justify-content: space-around;\n  align-items: center; }\n\n.options {\n  font-weight: normal;\n  padding: 10px; }\n\nion-button {\n  display: flex;\n  justify-content: center;\n  margin-top: 24px; }\n\n.title {\n  text-align: center;\n  margin-bottom: 24px; }\n\ndiv.global-input .color {\n  color: #bcbdbc; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5mby1nYXRoZXJpbmcvY29tcG9uZW50cy9wZXJzb25hbC1pbmZvL0U6XFxpb25pY1xcVmVydmVDb21tZXJjZVxcTmV3RGV2XFxtdHN0LWFwcC9zcmNcXGFwcFxccGFnZXNcXGluZm8tZ2F0aGVyaW5nXFxjb21wb25lbnRzXFxwZXJzb25hbC1pbmZvXFxwZXJzb25hbC1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYSxFQUFBOztBQUdmO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBRUksY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5mby1nYXRoZXJpbmcvY29tcG9uZW50cy9wZXJzb25hbC1pbmZvL3BlcnNvbmFsLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5saW5lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vcHRpb25zIHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxufVxyXG5cclxuZGl2Lmdsb2JhbC1pbnB1dCB7XHJcbiAgLmNvbG9yIHtcclxuICAgIGNvbG9yOiAjYmNiZGJjO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/info-gathering/components/personal-info/personal-info.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/info-gathering/components/personal-info/personal-info.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PersonalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoComponent", function() { return PersonalInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonalInfoComponent = /** @class */ (function () {
    function PersonalInfoComponent() {
        this.complete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PersonalInfoComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            date_of_birth: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('1988-01-01', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            goal_weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            sex: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    PersonalInfoComponent.prototype.submitForm = function () {
        var info = this.form.getRawValue();
        this.complete.emit(info);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PersonalInfoComponent.prototype, "complete", void 0);
    PersonalInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal-info',
            template: __webpack_require__(/*! ./personal-info.component.html */ "./src/app/pages/info-gathering/components/personal-info/personal-info.component.html"),
            styles: [__webpack_require__(/*! ./personal-info.component.scss */ "./src/app/pages/info-gathering/components/personal-info/personal-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonalInfoComponent);
    return PersonalInfoComponent;
}());



/***/ }),

/***/ "./src/app/pages/info-gathering/info-gathering.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/info-gathering/info-gathering.module.ts ***!
  \***************************************************************/
/*! exports provided: InfoGatheringPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoGatheringPageModule", function() { return InfoGatheringPageModule; });
/* harmony import */ var _components_height_height_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/height/height.module */ "./src/app/components/height/height.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _info_gathering_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info-gathering.page */ "./src/app/pages/info-gathering/info-gathering.page.ts");
/* harmony import */ var _components_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/personal-info/personal-info.component */ "./src/app/pages/info-gathering/components/personal-info/personal-info.component.ts");
/* harmony import */ var _components_basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/basic-info/basic-info.component */ "./src/app/pages/info-gathering/components/basic-info/basic-info.component.ts");
/* harmony import */ var _components_marketing_questions_marketing_questions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/marketing-questions/marketing-questions.component */ "./src/app/pages/info-gathering/components/marketing-questions/marketing-questions.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [{
        path: '',
        component: _info_gathering_page__WEBPACK_IMPORTED_MODULE_6__["InfoGatheringPage"]
    }];
var InfoGatheringPageModule = /** @class */ (function () {
    function InfoGatheringPageModule() {
    }
    InfoGatheringPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _components_height_height_module__WEBPACK_IMPORTED_MODULE_0__["HeightModule"]
            ],
            declarations: [_info_gathering_page__WEBPACK_IMPORTED_MODULE_6__["InfoGatheringPage"], _components_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_7__["PersonalInfoComponent"], _components_basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_8__["BasicInfoComponent"], _components_marketing_questions_marketing_questions_component__WEBPACK_IMPORTED_MODULE_9__["MarketingQuestionsComponent"]],
            exports: [_components_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_7__["PersonalInfoComponent"], _components_basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_8__["BasicInfoComponent"], _components_marketing_questions_marketing_questions_component__WEBPACK_IMPORTED_MODULE_9__["MarketingQuestionsComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], InfoGatheringPageModule);
    return InfoGatheringPageModule;
}());



/***/ }),

/***/ "./src/app/pages/info-gathering/info-gathering.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/info-gathering/info-gathering.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Onboarding</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <app-personal-info [class.hide]=\"step !== 1\" (complete)=\"setupPersonalInfo($event)\"></app-personal-info>\r\n  <app-basic-info [class.hide]=\"step !== 2\" (previous)=\"moveToStep1()\"\r\n                  (complete)=\"setupBaseInfo($event)\"></app-basic-info>\r\n  <app-marketing-questions [class.hide]=\"step !== 3\" (previous)=\"moveToStep2()\"\r\n                           (complete)=\"onBoard($event)\"></app-marketing-questions>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/info-gathering/info-gathering.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/info-gathering/info-gathering.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hide {\n  display: none; }\n\nion-content {\n  margin-bottom: 36px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5mby1nYXRoZXJpbmcvRTpcXGlvbmljXFxWZXJ2ZUNvbW1lcmNlXFxOZXdEZXZcXG10c3QtYXBwL3NyY1xcYXBwXFxwYWdlc1xcaW5mby1nYXRoZXJpbmdcXGluZm8tZ2F0aGVyaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5mby1nYXRoZXJpbmcvaW5mby1nYXRoZXJpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICBtYXJnaW4tYm90dG9tOiAzNnB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/info-gathering/info-gathering.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/info-gathering/info-gathering.page.ts ***!
  \*************************************************************/
/*! exports provided: InfoGatheringPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoGatheringPage", function() { return InfoGatheringPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/onboarding/onboarding.service */ "./src/app/services/onboarding/onboarding.service.ts");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/toast-service/toast-service.service */ "./src/app/services/toast-service/toast-service.service.ts");
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





var InfoGatheringPage = /** @class */ (function () {
    function InfoGatheringPage(loadingCtrl, navCtrl, toastSvc, errorService, onboardService) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.toastSvc = toastSvc;
        this.errorService = errorService;
        this.onboardService = onboardService;
        this.step = 1;
    }
    InfoGatheringPage.prototype.ngOnInit = function () {
    };
    InfoGatheringPage.prototype.setupPersonalInfo = function (personalInfo) {
        this.personalInfo = personalInfo;
        this.moveToStep2();
    };
    InfoGatheringPage.prototype.setupBaseInfo = function (baseInfo) {
        this.baseInfo = baseInfo;
        this.moveToStep3();
    };
    InfoGatheringPage.prototype.moveToStep1 = function () {
        this.step = 1;
    };
    InfoGatheringPage.prototype.moveToStep2 = function () {
        this.step = 2;
    };
    InfoGatheringPage.prototype.moveToStep3 = function () {
        this.step = 3;
    };
    /**
     * Saves the on board information collected through service
     *
     * @param marketingInfo
     */
    InfoGatheringPage.prototype.onBoard = function (marketingInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var loader, transphormer, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.marketingInfo = marketingInfo;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Completing registration...',
                            })];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, 6, 7]);
                        return [4 /*yield*/, this.onboardService.saveOnBoard(this.personalInfo, this.baseInfo, this.marketingInfo)];
                    case 4:
                        transphormer = _a.sent();
                        this.navCtrl.navigateRoot('subscription?showExtra=true');
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
    InfoGatheringPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-gathering',
            template: __webpack_require__(/*! ./info-gathering.page.html */ "./src/app/pages/info-gathering/info-gathering.page.html"),
            styles: [__webpack_require__(/*! ./info-gathering.page.scss */ "./src/app/pages/info-gathering/info-gathering.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_3__["ErrorsService"],
            _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_2__["OnboardingService"]])
    ], InfoGatheringPage);
    return InfoGatheringPage;
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
//# sourceMappingURL=pages-info-gathering-info-gathering-module.js.map