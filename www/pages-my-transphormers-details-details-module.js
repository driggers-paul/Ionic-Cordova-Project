(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-transphormers-details-details-module"],{

/***/ "./src/app/components/info-bit/info-bit.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/info-bit/info-bit.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bit\" [ngClass]=\"extraClass\">\r\n  <div class=\"top\">{{ top }}</div>\r\n  <div class=\"middle\">\r\n    {{middle}}<ng-content select=\".middle\"></ng-content>\r\n  </div>\r\n  <div class=\"bottom\">{{ bottom }}</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/info-bit/info-bit.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/info-bit/info-bit.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bit {\n  margin: 8px 4px;\n  display: flex;\n  min-width: 25%;\n  flex-direction: column; }\n\n.bottom {\n  font-size: 70%;\n  text-transform: uppercase;\n  color: var(--ion-1p-gray);\n  font-weight: bolder; }\n\n.top {\n  font-size: 70%;\n  text-transform: uppercase;\n  color: var(--ion-1p-darkest);\n  font-weight: bolder; }\n\n.middle {\n  font-size: 150%;\n  font-weight: bold;\n  padding: 0 4px; }\n\n.small .middle {\n  font-size: 135%;\n  line-height: 1.4em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmZvLWJpdC9FOlxcaW9uaWNcXFZlcnZlQ29tbWVyY2VcXE5ld0RldlxcbXRzdC1hcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGluZm8tYml0XFxpbmZvLWJpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsY0FBYztFQUNkLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUVoQjtFQUVJLGVBQWU7RUFDZixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5mby1iaXQvaW5mby1iaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYml0IHtcclxuICBtYXJnaW46IDhweCA0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtaW4td2lkdGg6IDI1JTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5ib3R0b20ge1xyXG4gIGZvbnQtc2l6ZTogNzAlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6IHZhcigtLWlvbi0xcC1ncmF5KTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi50b3Age1xyXG4gIGZvbnQtc2l6ZTogNzAlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6IHZhcigtLWlvbi0xcC1kYXJrZXN0KTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5taWRkbGUge1xyXG4gIGZvbnQtc2l6ZTogMTUwJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAwIDRweDtcclxufVxyXG4uc21hbGwge1xyXG4gIC5taWRkbGUge1xyXG4gICAgZm9udC1zaXplOiAxMzUlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/info-bit/info-bit.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/info-bit/info-bit.component.ts ***!
  \***********************************************************/
/*! exports provided: InfoBitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoBitComponent", function() { return InfoBitComponent; });
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

var InfoBitComponent = /** @class */ (function () {
    function InfoBitComponent() {
        this.size = '';
    }
    InfoBitComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(InfoBitComponent.prototype, "extraClass", {
        get: function () {
            return [this.size];
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoBitComponent.prototype, "top", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoBitComponent.prototype, "middle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoBitComponent.prototype, "bottom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoBitComponent.prototype, "size", void 0);
    InfoBitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-bit',
            template: __webpack_require__(/*! ./info-bit.component.html */ "./src/app/components/info-bit/info-bit.component.html"),
            styles: [__webpack_require__(/*! ./info-bit.component.scss */ "./src/app/components/info-bit/info-bit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoBitComponent);
    return InfoBitComponent;
}());



/***/ }),

/***/ "./src/app/pages/my-transphormers/details/details.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/my-transphormers/details/details.module.ts ***!
  \******************************************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details.page */ "./src/app/pages/my-transphormers/details/details.page.ts");
/* harmony import */ var _components_progress_update_progress_update_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/progress-update/progress-update.module */ "./src/app/components/progress-update/progress-update.module.ts");
/* harmony import */ var _components_info_bit_info_bit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/info-bit/info-bit.component */ "./src/app/components/info-bit/info-bit.component.ts");
/* harmony import */ var _components_common_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/common-components.module */ "./src/app/components/common-components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"]
    }
];
var DetailsPageModule = /** @class */ (function () {
    function DetailsPageModule() {
    }
    DetailsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_progress_update_progress_update_module__WEBPACK_IMPORTED_MODULE_6__["ProgressUpdateModule"],
                _components_common_components_module__WEBPACK_IMPORTED_MODULE_8__["AppComponentsModule"]
            ],
            declarations: [_details_page__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"], _components_info_bit_info_bit_component__WEBPACK_IMPORTED_MODULE_7__["InfoBitComponent"]]
        })
    ], DetailsPageModule);
    return DetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/my-transphormers/details/details.page.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/my-transphormers/details/details.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"/my-transphormers\" text=\"\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title *ngIf=\"transphormer\">{{transphormer.display_name}}\r\n            <ion-icon *ngIf=\"transphormer.is_paid_user\" name=\"star-outline\" size=\"small\"></ion-icon>\r\n            <ion-icon *ngIf=\"transphormer.is_my_cfl\" name=\"link\" size=\"small\"></ion-icon>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"transphormer\">\r\n    <!-- Photos -->\r\n    <div padding>\r\n        <app-progress-update\r\n                *ngIf=\"transphormer.latest_image\"\r\n                [update]=\"transphormer.latest_image\">\r\n        </app-progress-update>\r\n        <ion-button\r\n                (click)=\"goToPhotos()\"\r\n                color=\"primary\"\r\n                expand=\"full\">\r\n            View all photos\r\n            <ion-icon name=\"image\" slot=\"end\"></ion-icon>\r\n        </ion-button>\r\n    <div class=\"content\" padding-top>\r\n        <app-info-bit top=\"Age\" [bottom]=\"dob\" [middle]=\"transphormer.age\"></app-info-bit>\r\n        <app-info-bit top=\"Started at\" [middle]=\"transphormer.starting_weight_value\"\r\n                      [bottom]=\"transphormerSinceDate\"></app-info-bit>\r\n        <app-info-bit top=\"Weight\" [middle]=\"transphormer.latest_weight.weight\"\r\n                      [bottom]=\"weightLastUpdatedOn\"></app-info-bit>\r\n        <app-info-bit top=\"Height\" [middle]=\"transphormer.height_in_inches\"\r\n                      [bottom]=\"'Sex: ' + (transphormer.sex === '1' ? 'M' : 'F')\"></app-info-bit>\r\n    </div>\r\n    </div>\r\n\r\n    <div padding-horizontal>\r\n        <ion-button\r\n                color=\"secondary\"\r\n                (click)=\"goToMetrics()\"\r\n                expand=\"full\">\r\n            <ion-icon name=\"analytics\" slot=\"end\"></ion-icon>\r\n            View all Weigh-ins\r\n        </ion-button>\r\n        <ion-button\r\n                [color]=\"transphormer.is_paid_user ? 'tertiary' : 'medium'\"\r\n                [disabled]=\"!transphormer.is_paid_user\"\r\n                (click)=\"goToMessages()\"\r\n                expand=\"full\">\r\n            <ion-icon name=\"chatboxes\" slot=\"end\" *ngIf=\"transphormer.is_paid_user\"></ion-icon>\r\n            <ion-icon name=\"lock\" slot=\"end\" *ngIf=\"!transphormer.is_paid_user\"></ion-icon>\r\n            Messages\r\n        </ion-button>\r\n        <p class=\"premium-disabled\" *ngIf=\"!transphormer.is_paid_user\">Transphormer is not premium. Messaging is\r\n            disabled.</p>\r\n    </div>\r\n\r\n    <ion-list-header>Workouts</ion-list-header>\r\n    <div class=\"content\" padding-horizontal>\r\n        <app-info-bit top=\"Completed\" [middle]=\"transphormer.thirty_day_completed_workouts\"\r\n                      bottom=\"Last 30 Days\"></app-info-bit>\r\n        <app-info-bit top=\"Completed\" [middle]=\"transphormer.seven_day_completed_workouts\"\r\n                      bottom=\"Last 7 Days\"></app-info-bit>\r\n        <app-info-bit top=\"Training\" bottom=\"Program\" size=\"small\">\r\n            <div class=\"middle\">{{ trainingLevelName }}\r\n                <br/>{{ transphormer.access_to_gym === '1' ? gymWorkoutName : homeWorkoutName }}</div>\r\n        </app-info-bit>\r\n    </div>\r\n    <ion-list-header>Nutrition</ion-list-header>\r\n    <app-macros-bar [transphormer]=\"transphormer\" [topRight]=\"transphormer.likely_to_do\"\r\n                    [topLeft]=\"'Plan'\"></app-macros-bar>\r\n    <div padding>\r\n        <ion-button\r\n                *ngIf=\"transphormer.likely_to_do === 'Calorie / Macro counting'\"\r\n                (click)=\"goToNutritionDetails()\"\r\n                color=\"primary\"\r\n                expand=\"full\">\r\n            View Nutrition Details\r\n            <ion-icon name=\"paper\" slot=\"end\"></ion-icon>\r\n        </ion-button>\r\n        <div class=\"content\" padding-vertical>\r\n            <app-info-bit top=\"Goal Weight\" [middle]=\"transphormer.goal_weight\" bottom=\"Pounds\"></app-info-bit>\r\n            <app-info-bit top=\"Goal\" [bottom]=\"bottomBodyChange\">\r\n                <div class=\"middle\" *ngIf=\"transphormer.transphormation_goal === 'Primarily lose bodyfat'\">Lose</div>\r\n                <div class=\"middle\" *ngIf=\"transphormer.transphormation_goal === 'Maintain'\">Maintain</div>\r\n                <div class=\"middle\" *ngIf=\"transphormer.transphormation_goal === 'Gain lean muscle'\">\r\n                    Gain💪💪💪💪💪💪💪💪💪💪💪\r\n                </div>\r\n            </app-info-bit>\r\n            <app-info-bit top=\"Activity\" size=\"small\" bottom=\"level\"\r\n                          [middle]=\"transphormer.activity_level.replace(' Activity', '')\"></app-info-bit>\r\n            <app-info-bit *ngIf=\"transphormer.likely_to_do === 'Macro meal plan'\" top=\"Eating\"\r\n                          [middle]=\"transphormer.meals_per_day\" bottom=\"Meals / day\"></app-info-bit>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/my-transphormers/details/details.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/my-transphormers/details/details.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list-header {\n  --background: var(--ion-color-header); }\n\n.inline {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\np {\n  font-size: 16px; }\n\n.thumbnail {\n  height: 150px;\n  margin: 10px; }\n\n.thumbnail img {\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n\n.section-header {\n  background: #d6e1f8;\n  padding: 5px 10px; }\n\n.section-header .heading ion-icon {\n    font-size: 24px;\n    padding-right: 10px; }\n\n.section-header ion-icon {\n    font-size: 30px; }\n\n.content {\n  justify-content: space-around;\n  text-align: center;\n  display: flex;\n  flex-wrap: wrap; }\n\n.workouts {\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  text-align: center;\n  margin: 24px 0; }\n\n.workouts .indicators > div, .workouts .days {\n    display: flex;\n    flex-direction: row;\n    justify-content: center; }\n\n.workouts .indicator, .workouts .days > div {\n    width: 12vw; }\n\n.workouts > div {\n    font-weight: bold;\n    text-transform: uppercase; }\n\nion-content > ion-list {\n  margin-bottom: 24px; }\n\np.premium-disabled {\n  text-align: center;\n  font-size: 75%;\n  font-weight: bold;\n  color: var(--ion-1p-gray); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktdHJhbnNwaG9ybWVycy9kZXRhaWxzL0U6XFxpb25pY1xcVmVydmVDb21tZXJjZVxcTmV3RGV2XFxtdHN0LWFwcC9zcmNcXGFwcFxccGFnZXNcXG15LXRyYW5zcGhvcm1lcnNcXGRldGFpbHNcXGRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQWEsRUFBQTs7QUFHZjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBRmQ7SUFLSSxZQUFZO0lBQ1osb0JBQWlCO09BQWpCLGlCQUFpQixFQUFBOztBQUlyQjtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTs7QUFGbkI7SUFLSSxlQUFlO0lBQ2YsbUJBQW1CLEVBQUE7O0FBTnZCO0lBVUksZUFBZSxFQUFBOztBQUluQjtFQUVFLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUxoQjtJQU9JLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQ0YsRUFBQTs7QUFWRjtJQVlJLFdBQVcsRUFBQTs7QUFaZjtJQWVJLGlCQUFpQjtJQUNqQix5QkFBeUIsRUFBQTs7QUFJN0I7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQix5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215LXRyYW5zcGhvcm1lcnMvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0LWhlYWRlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItaGVhZGVyKTtcclxufVxyXG5cclxuLmlubGluZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4udGh1bWJuYWlsIHtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuXHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZDZlMWY4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG5cclxuICAuaGVhZGluZyBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIC8vIG1hcmdpbjogMCAyMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLndvcmtvdXRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMjRweCAwO1xyXG4gIC5pbmRpY2F0b3JzID4gZGl2LCAuZGF5cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbiAgfVxyXG4gIC5pbmRpY2F0b3IsIC5kYXlzID4gZGl2IHtcclxuICAgIHdpZHRoOiAxMnZ3O1xyXG4gIH1cclxuICA+IGRpdiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCA+IGlvbi1saXN0IHtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG5wLnByZW1pdW0tZGlzYWJsZWQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDc1JTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogdmFyKC0taW9uLTFwLWdyYXkpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/my-transphormers/details/details.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/my-transphormers/details/details.page.ts ***!
  \****************************************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_trainer_transphormer_trainer_transphormer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/trainer-transphormer/trainer-transphormer.service */ "./src/app/services/trainer-transphormer/trainer-transphormer.service.ts");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/onboarding/onboarding.service */ "./src/app/services/onboarding/onboarding.service.ts");
/* harmony import */ var _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/toast-service/toast-service.service */ "./src/app/services/toast-service/toast-service.service.ts");
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








var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, loaderCtrl, toastSvc, trainerTransphormerService, errorService, router) {
        this.navCtrl = navCtrl;
        this.loaderCtrl = loaderCtrl;
        this.toastSvc = toastSvc;
        this.trainerTransphormerService = trainerTransphormerService;
        this.errorService = errorService;
        this.router = router;
    }
    DetailsPage.prototype.ngOnInit = function () {
        this.transphormerId = parseFloat(this.router.snapshot.paramMap.get('id'));
        this.getTransphormerDetails();
    };
    DetailsPage.prototype.getTransphormerDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loaderCtrl.create({
                            message: 'Please wait',
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
                        return [4 /*yield*/, this.trainerTransphormerService.transphormer(this.transphormerId)];
                    case 4:
                        _a.transphormer = (_b.sent());
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
    Object.defineProperty(DetailsPage.prototype, "dob", {
        get: function () {
            return moment__WEBPACK_IMPORTED_MODULE_5__(this.transphormer.dob).format('M/d/YY');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailsPage.prototype, "weightLastUpdatedOn", {
        get: function () {
            if (!this.transphormer) {
                return '';
            }
            if (this.transphormer.latest_weight === null) {
                return 'Never';
            }
            var currentTimeUtc = moment__WEBPACK_IMPORTED_MODULE_5__["utc"]();
            var lastUpdateUtc = moment__WEBPACK_IMPORTED_MODULE_5__["utc"](this.transphormer.latest_weight.logged_on);
            if (Math.abs(currentTimeUtc.diff(lastUpdateUtc, 'hours')) < 24) {
                return Math.abs(currentTimeUtc.diff(lastUpdateUtc, 'hours')) + " Hours";
            }
            else {
                return Math.abs(currentTimeUtc.diff(lastUpdateUtc, 'days')) + " Days";
            }
        },
        enumerable: true,
        configurable: true
    });
    DetailsPage.prototype.goToPhotos = function () {
        this.navCtrl.navigateForward("photos/" + this.transphormer.id);
    };
    DetailsPage.prototype.goToNutritionDetails = function () {
        this.navCtrl.navigateForward("my-transphormers/" + this.transphormer.id + "/nutrition-detail");
    };
    DetailsPage.prototype.goToMetrics = function () {
        this.navCtrl.navigateForward("metrics/" + this.transphormer.id);
    };
    Object.defineProperty(DetailsPage.prototype, "trainingLevelName", {
        get: function () {
            var _this = this;
            var option = _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_6__["TrainingLevels"].find(function (i) {
                return i.value === _this.transphormer.training_level;
            });
            if (!option) {
                return 'error';
            }
            return option.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailsPage.prototype, "homeWorkoutName", {
        get: function () {
            var _this = this;
            var option = _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_6__["TrainingHomeWorkouts"].find(function (i) {
                return i.value === _this.transphormer.home_workout_selection;
            });
            if (!option) {
                return 'error';
            }
            return option.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailsPage.prototype, "gymWorkoutName", {
        get: function () {
            var _this = this;
            var option = _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_6__["TrainingProgramTypes"].find(function (i) {
                return i.value === _this.transphormer.gym_workout_selection;
            });
            if (!option) {
                return 'error';
            }
            return option.name || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailsPage.prototype, "transphormerSinceDate", {
        get: function () {
            if (!this.transphormer) {
                return '';
            }
            return moment__WEBPACK_IMPORTED_MODULE_5__["utc"](this.transphormer.created_at).format('MMM YYYY');
        },
        enumerable: true,
        configurable: true
    });
    DetailsPage.prototype.goToMessages = function () {
        this.navCtrl.navigateForward("chat-messages/" + this.transphormerId);
    };
    Object.defineProperty(DetailsPage.prototype, "bottomBodyChange", {
        get: function () {
            if (this.transphormer.transphormation_goal === 'Primarily lose bodyfat') {
                return 'Bodyfat';
            }
            if (this.transphormer.transphormation_goal === 'Gain lean muscle') {
                return 'Muscle';
            }
        },
        enumerable: true,
        configurable: true
    });
    DetailsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.page.html */ "./src/app/pages/my-transphormers/details/details.page.html"),
            styles: [__webpack_require__(/*! ./details.page.scss */ "./src/app/pages/my-transphormers/details/details.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
            _services_trainer_transphormer_trainer_transphormer_service__WEBPACK_IMPORTED_MODULE_2__["TrainerTransphormerService"],
            _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_3__["ErrorsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], DetailsPage);
    return DetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-my-transphormers-details-details-module.js.map