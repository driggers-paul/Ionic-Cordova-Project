(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-exercise-view-exercise-view-module"],{

/***/ "./src/app/pages/exercise-view/exercise-view.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/exercise-view/exercise-view.module.ts ***!
  \*************************************************************/
/*! exports provided: ExerciseViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseViewPageModule", function() { return ExerciseViewPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _exercise_view_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exercise-view.page */ "./src/app/pages/exercise-view/exercise-view.page.ts");
/* harmony import */ var _pipes_safe_url_safe_url_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/safe-url/safe-url.module */ "./src/app/pipes/safe-url/safe-url.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _exercise_view_page__WEBPACK_IMPORTED_MODULE_5__["ExerciseViewPage"]
    }
];
var ExerciseViewPageModule = /** @class */ (function () {
    function ExerciseViewPageModule() {
    }
    ExerciseViewPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _pipes_safe_url_safe_url_module__WEBPACK_IMPORTED_MODULE_6__["SafeUrlModule"]
            ],
            declarations: [_exercise_view_page__WEBPACK_IMPORTED_MODULE_5__["ExerciseViewPage"]]
        })
    ], ExerciseViewPageModule);
    return ExerciseViewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/exercise-view/exercise-view.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/exercise-view/exercise-view.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/workouts\" text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Training Program</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <section class=\"video\" *ngIf=\"exercise\">\r\n    <div class=\"tutorial-video padding\">\r\n      <div class=\"heading\">\r\n        <h4>{{ exercise.name }}</h4>\r\n        <div class=\"body-parts\">\r\n          <p class=\"tags\" *ngFor=\"let tag of exercise.tags\">{{ tag.name }}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"video-container\" *ngIf=\"exercise.link\">\r\n      <iframe *ngIf=\"exercise.link.indexOf('m3u8') === -1\" [src]=\"exercise.link | safeUrl\" width=\"100%\" height=\"250px\" frameborder=\"0\"></iframe>\r\n      <video *ngIf=\"exercise.link.indexOf('m3u8') !== -1\" controls [src]=\"exercise.link | safeUrl\" width=\"100%\" height=\"250px\"></video>\r\n    </div>\r\n    <div class=\"exercise padding\" *ngIf=\"exercise.alternate_exercises.length !== 0\">\r\n      <div class=\"caption\">\r\n        <h5 class=\"title\">Alternate exercise</h5>\r\n        <div class=\"inline\" *ngFor=\"let alternate of exercise.alternate_exercises\" (click)=\"goToAlternateExercise(alternate.id)\">\r\n          <p class=\"name\">{{ alternate.name }}</p>\r\n          <ion-button fill=\"clear\">\r\n            <ion-icon color=\"primary\" name=\"arrow-forward\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modification-notes padding\">\r\n      <h5 class=\"title\">Modification Notes</h5>\r\n      <p>{{ exercise.modification_notes }}</p>\r\n    </div>\r\n    <div class=\"expect padding\">\r\n      <h5 class=\"title\">What to do</h5>\r\n      <p>{{ exercise.description }}</p>\r\n    </div>\r\n  </section>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/exercise-view/exercise-view.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/exercise-view/exercise-view.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f7f9fc; }\n\n.padding {\n  padding: 10px; }\n\np {\n  font-size: 12px;\n  line-height: 14px; }\n\n.tutorial-video {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 20px 0; }\n\n.tutorial-video .body-parts {\n    display: flex;\n    justify-content: center;\n    margin-top: 15px; }\n\n.tutorial-video .body-parts .tags {\n      font-size: 12px;\n      background-color: #d5dde8;\n      padding: 2px 15px;\n      margin: 0 5px;\n      border-radius: 25px; }\n\n.exercise .inline {\n  margin: 3px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 35px;\n  background-color: var(--ion-color-secondary-contrast);\n  padding: 0 4px; }\n\n.exercise .inline p {\n    font-size: 14px;\n    line-height: 4px; }\n\n.exercise .inline ion-icon {\n    font-size: 16px; }\n\n.modification-notes {\n  border-bottom: 1px solid #f0f3f8;\n  border-top: 1px solid #f0f3f8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhlcmNpc2Utdmlldy9FOlxcaW9uaWNcXFZlcnZlQ29tbWVyY2VcXE5ld0RldlxcbXRzdC1hcHAvc3JjXFxhcHBcXHBhZ2VzXFxleGVyY2lzZS12aWV3XFxleGVyY2lzZS12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFhLEVBQUE7O0FBR2Y7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFMakI7SUFRSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQixFQUFBOztBQVZwQjtNQWFNLGVBQWU7TUFDZix5QkFBeUI7TUFDekIsaUJBQWlCO01BQ2pCLGFBQWE7TUFDYixtQkFBbUIsRUFBQTs7QUFLekI7RUFFSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixxREFBcUQ7RUFDckQsY0FBYyxFQUFBOztBQVRsQjtJQVlNLGVBQWU7SUFDZixnQkFBZ0IsRUFBQTs7QUFidEI7SUFpQk0sZUFBZSxFQUFBOztBQUtyQjtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4ZXJjaXNlLXZpZXcvZXhlcmNpc2Utdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjdmOWZjO1xyXG59XHJcblxyXG4ucGFkZGluZyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG59XHJcblxyXG4udHV0b3JpYWwtdmlkZW8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG5cclxuICAuYm9keS1wYXJ0cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG5cclxuICAgIC50YWdzIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkZGU4O1xyXG4gICAgICBwYWRkaW5nOiAycHggMTVweDtcclxuICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5leGVyY2lzZSB7XHJcbiAgLmlubGluZSB7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XHJcbiAgICBwYWRkaW5nOiAwIDRweDtcclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1vZGlmaWNhdGlvbi1ub3RlcyB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYzZjg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGYzZjg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/exercise-view/exercise-view.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/exercise-view/exercise-view.page.ts ***!
  \***********************************************************/
/*! exports provided: ExerciseViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseViewPage", function() { return ExerciseViewPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _services_excercise_exercise_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/excercise/exercise.service */ "./src/app/services/excercise/exercise.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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





var ExerciseViewPage = /** @class */ (function () {
    function ExerciseViewPage(errorService, exerciseService, toastCtrl, loadingCtrl, routing, navCtrl) {
        this.errorService = errorService;
        this.exerciseService = exerciseService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.routing = routing;
        this.navCtrl = navCtrl;
    }
    ExerciseViewPage.prototype.ngOnInit = function () {
        this.getExercise();
    };
    ExerciseViewPage.prototype.getExercise = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.routing.params.subscribe(function (params) { return __awaiter(_this, void 0, void 0, function () {
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
                                        return [4 /*yield*/, this.exerciseService.getExercise(params.id)];
                                    case 4:
                                        _a.exercise = (_b.sent());
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
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ExerciseViewPage.prototype.goToAlternateExercise = function (id) {
        this.navCtrl.navigateForward("/exercises/" + id);
    };
    ExerciseViewPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exercise-view',
            template: __webpack_require__(/*! ./exercise-view.page.html */ "./src/app/pages/exercise-view/exercise-view.page.html"),
            styles: [__webpack_require__(/*! ./exercise-view.page.scss */ "./src/app/pages/exercise-view/exercise-view.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_errors_errors_service__WEBPACK_IMPORTED_MODULE_1__["ErrorsService"],
            _services_excercise_exercise_service__WEBPACK_IMPORTED_MODULE_2__["ExerciseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], ExerciseViewPage);
    return ExerciseViewPage;
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

/***/ "./src/app/services/excercise/exercise.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/excercise/exercise.service.ts ***!
  \********************************************************/
/*! exports provided: ExerciseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseService", function() { return ExerciseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.service */ "./src/app/services/base/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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




var ExerciseService = /** @class */ (function (_super) {
    __extends(ExerciseService, _super);
    function ExerciseService(http, platform) {
        var _this = _super.call(this, http, platform) || this;
        _this.http = http;
        _this.platform = platform;
        ExerciseService_1.SET_PLATFORM(platform);
        return _this;
    }
    ExerciseService_1 = ExerciseService;
    ExerciseService.prototype.getExercise = function (exerciseId) {
        return this.http.get(ExerciseService_1.Url("exercises/" + exerciseId), ExerciseService_1.BaseOptions())
            .toPromise()
            .catch(ExerciseService_1.HandleError);
    };
    var ExerciseService_1;
    ExerciseService = ExerciseService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], ExerciseService);
    return ExerciseService;
}(_base_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ })

}]);
//# sourceMappingURL=pages-exercise-view-exercise-view-module.js.map