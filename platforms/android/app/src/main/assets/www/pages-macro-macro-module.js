(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-macro-macro-module"],{

/***/ "./src/app/pages/macro/macro.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/macro/macro.module.ts ***!
  \*********************************************/
/*! exports provided: MacroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroPageModule", function() { return MacroPageModule; });
/* harmony import */ var _components_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/calendar/calendar.module */ "./src/app/components/calendar/calendar.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _macro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./macro.page */ "./src/app/pages/macro/macro.page.ts");
/* harmony import */ var _components_nutrition_nutrition_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/nutrition/nutrition.module */ "./src/app/components/nutrition/nutrition.module.ts");
/* harmony import */ var _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/side-menu/side-menu.module */ "./src/app/components/side-menu/side-menu.module.ts");
/* harmony import */ var _components_nutrition_add_food_add_food_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/nutrition/add-food/add-food.component */ "./src/app/components/nutrition/add-food/add-food.component.ts");
/* harmony import */ var _guards_android_back_button_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../guards/android-back-button.guard */ "./src/app/guards/android-back-button.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: _macro_page__WEBPACK_IMPORTED_MODULE_6__["MacroPage"],
        canDeactivate: [_guards_android_back_button_guard__WEBPACK_IMPORTED_MODULE_10__["AndroidBackButtonGuard"]]
    },
];
var MacroPageModule = /** @class */ (function () {
    function MacroPageModule() {
    }
    MacroPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_nutrition_nutrition_module__WEBPACK_IMPORTED_MODULE_7__["NutritionModule"],
                _components_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarModule"],
                _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_8__["SideMenuModule"]
            ],
            declarations: [_macro_page__WEBPACK_IMPORTED_MODULE_6__["MacroPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            entryComponents: [_components_nutrition_add_food_add_food_component__WEBPACK_IMPORTED_MODULE_9__["AddFoodComponent"]]
        })
    ], MacroPageModule);
    return MacroPageModule;
}());



/***/ }),

/***/ "./src/app/pages/macro/macro.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/macro/macro.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <app-menu-button></app-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Nutrition</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <button class=\"logo-button\" ion-button right>\r\n        <div class=\"tb-logo\"></div>\r\n      </button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"transphormer && currentWeight && macroCountingInfo\">\r\n\r\n  <!-- Calories component -->\r\n\r\n  <app-progress-bar [currentValue]=\"calories\" dangerColor=\"red\" [goalValue]=\"activeBmrValues.calories\"\r\n                    hideTextBarrierRemaining=\"78\"\r\n                    hideTextBarrierProgress=\"10\"></app-progress-bar>\r\n\r\n  <!-- Macros Component -->\r\n  <ion-item lines=\"none\">\r\n    <ion-label>\r\n      Macros\r\n      <ion-button fill=\"clear\" class=\"edit-macro\" (click)=\"openCustomMacro()\">\r\n        <ion-icon name=\"create\" mode=\"md\"></ion-icon>\r\n      </ion-button>\r\n    </ion-label>\r\n    <ion-label class=\"right\">\r\n      <span class=\"color\">Remaining</span>\r\n    </ion-label>\r\n  </ion-item>\r\n  <div class=\"inline\">\r\n    <app-macros categoryName=\"protein\" [goalValue]=\"activeBmrValues.protein\"\r\n                [currentNutritionValue]=\"protein\"\r\n                dangerColor=\"red\"\r\n                barColor=\"#fba04b\"></app-macros>\r\n    <app-macros categoryName=\"carbs\" [goalValue]=\"activeBmrValues.carbs\" [currentNutritionValue]=\"carbs\"\r\n                dangerColor=\"red\"\r\n                barColor=\"#12c112\"></app-macros>\r\n    <app-macros categoryName=\"fats\" [goalValue]=\"activeBmrValues.fats\" barColor=\"#f96c85\" dangerColor=\"red\"\r\n                [currentNutritionValue]=\"fats\"></app-macros>\r\n  </div>\r\n\r\n  <!-- Water Component  -->\r\n  <ion-item lines=\"none\">\r\n    <ion-label>Water</ion-label>\r\n  </ion-item>\r\n  <app-water [currentValue]=\"macroCountingInfo.water_amount\" dangerColor=\"red\"\r\n             [totalValue]=\"nutritionCalculator.waterIntake(currentWeight.weight)\"\r\n             (waterSelected)=\"updateWaterAmount($event)\"></app-water>\r\n\r\n  <!-- Calendar tab -->\r\n  <app-calendar [dateTime]=\"date\" (dateChange)=\"resetMacroInfoForDate($event)\"></app-calendar>\r\n\r\n  <!-- Add Food -->\r\n  <div class=\"add-food\">\r\n    <ion-button expand=\"full\" fill=\"clear\" (click)=\"openAddFoodModal()\" *ngIf=\"canAddFood\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n      Add Food\r\n    </ion-button>\r\n  </div>\r\n\r\n  <!-- Meal List -->\r\n\r\n  <app-meal-list [nutritionDayId]=\"macroCountingInfo.id\" [meals]=\"meals\"\r\n                 (mealUpdated)=\"updateMeal($event)\"></app-meal-list>\r\n  <div class=\"total\">\r\n    <div class=\"row\">\r\n      <div class=\"col-1\"><span class=\"title\">Total</span></div>\r\n\r\n      <div class=\"col-2\"><span class=\"title calories\">{{ calories.toFixed(0) }}</span></div>\r\n      <div class=\"col-2\"><span class=\"title protein-color\">{{ protein.toFixed(0) }}</span></div>\r\n      <div class=\"col-2\"><span class=\"title carbs-color\">{{ carbs.toFixed(0) }}</span></div>\r\n      <div class=\"col-2\"><span class=\"title fat-color\">{{ fats.toFixed(0) }}</span></div>\r\n      <div class=\"col-space\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-1\"><span class=\"title\">Goal</span></div>\r\n      <div class=\"col-2\"><span class=\"title calories\">{{ activeBmrValues.calories.toFixed(0) }}</span></div>\r\n      <div class=\"col-2\"><span class=\"title protein-color\">{{ activeBmrValues.protein.toFixed(0) }}</span></div>\r\n      <div class=\"col-2\"><span class=\"title carbs-color\">{{ activeBmrValues.carbs.toFixed(0) }}</span></div>\r\n      <div class=\"col-2\"><span class=\"title fat-color\">{{ activeBmrValues.fats.toFixed(0) }}</span></div>\r\n      <div class=\"col-space\"></div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/macro/macro.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/macro/macro.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inline {\n  display: flex;\n  justify-content: space-around;\n  align-items: center; }\n\nion-item {\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 700; }\n\nion-item .right {\n    text-align: right; }\n\nion-item .color {\n    color: #bcbdbc;\n    padding-right: 6px; }\n\n.hide {\n  display: none; }\n\nbutton.logo-button {\n  background: inherit;\n  --background: inherit; }\n\n.tb-logo {\n  background-image: url('logo.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  font-size: 32px;\n  width: 1em;\n  height: 1em; }\n\napp-macros {\n  width: 30%; }\n\n.add-water ion-button {\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 10px;\n  color: #1fb2d2; }\n\n.add-food {\n  padding: 12px;\n  font-weight: 900; }\n\n.add-food ion-button {\n    text-transform: uppercase;\n    font-weight: 900;\n    font-size: 14px;\n    color: #1fb2d2;\n    border: 3px solid #1fb2d2; }\n\n.meal {\n  background-color: #f4f4f4; }\n\n.row {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  text-transform: uppercase;\n  padding: 5px 15px; }\n\n.col-1 {\n  width: 20%; }\n\n.col-2 {\n  width: 20%;\n  text-align: center; }\n\n.col-space {\n  width: 5%; }\n\n.col-space ion-icon {\n    color: #00909a;\n    font-size: 14px;\n    vertical-align: middle; }\n\n.title {\n  font-size: 10px;\n  font-weight: 600; }\n\n.values {\n  text-align: center;\n  font-size: 12px;\n  font-weight: 900;\n  text-transform: capitalize;\n  color: #999; }\n\n.meal-quantity .highlight {\n  background-color: #dcdada; }\n\n.meal-quantity .col-1 .values {\n  color: #000; }\n\n.meal-quantity .col-2 .values {\n  padding: 0 9px; }\n\n.content .row {\n  padding: 4px 15px; }\n\n.content .col-1 .values {\n  font-size: 8px;\n  font-weight: 600;\n  color: #999; }\n\n.content .col-2 .values {\n  font-size: 12px;\n  font-weight: 400; }\n\n.content .add-food ion-button {\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 10px;\n  color: #1fb2d2; }\n\n.total {\n  padding: 10px 0; }\n\n.total .row {\n    padding: 2px 15px; }\n\n.total .col-2 .title {\n    font-weight: 900;\n    font-size: 12px; }\n\n.calories {\n  color: #1fb2d2; }\n\n.protein-color {\n  color: #fba04b; }\n\n.carbs-color {\n  color: #12c910; }\n\n.fat-color {\n  color: #f8617a; }\n\n.edit-macro {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  height: 1em;\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFjcm8vRTpcXGlvbmljXFxWZXJ2ZUNvbW1lcmNlXFxOZXdEZXZcXG10c3QtYXBwL3NyY1xcYXBwXFxwYWdlc1xcbWFjcm9cXG1hY3JvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFIbEI7SUFLSSxpQkFBaUIsRUFBQTs7QUFMckI7SUFRSSxjQUFjO0lBQ2Qsa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFhLEVBQUE7O0FBR2Y7RUFDRSxpQ0FBc0Q7RUFDdEQsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBR2I7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFFSSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBSWxCO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUZsQjtJQUlJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCx5QkFBeUIsRUFBQTs7QUFLN0I7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFNBQVMsRUFBQTs7QUFEWDtJQUdJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysc0JBQXNCLEVBQUE7O0FBSTFCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixXQUFXLEVBQUE7O0FBR2I7RUFFSSx5QkFBeUIsRUFBQTs7QUFGN0I7RUFNTSxXQUFXLEVBQUE7O0FBTmpCO0VBV00sY0FBYyxFQUFBOztBQUtwQjtFQUVJLGlCQUFpQixFQUFBOztBQUZyQjtFQU1NLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQVJqQjtFQWFNLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFkdEI7RUFtQk0seUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUtwQjtFQUNFLGVBQWUsRUFBQTs7QUFEakI7SUFHSSxpQkFBaUIsRUFBQTs7QUFIckI7SUFNSSxnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBOztBQUluQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxrQkFBZ0I7RUFDaEIsZ0JBQWM7RUFDZCxnQkFBYztFQUNkLG1CQUFpQjtFQUNqQixXQUFXO0VBQ1gsU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFjcm8vbWFjcm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubGluZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAucmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC5jb2xvciB7XHJcbiAgICBjb2xvcjogI2JjYmRiYztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcclxuICB9XHJcbn1cclxuXHJcbi5oaWRlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5idXR0b24ubG9nby1idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgLS1iYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG59XHJcblxyXG4udGItbG9nbyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbi9sb2dvLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbTtcclxufVxyXG5cclxuYXBwLW1hY3JvcyB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLmFkZC13YXRlciB7XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogIzFmYjJkMjtcclxuICB9XHJcbn1cclxuXHJcbi5hZGQtZm9vZCB7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzFmYjJkMjtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMxZmIyZDI7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLm1lYWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xyXG59XHJcblxyXG4uY29sLTEge1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5jb2wtMiB7XHJcbiAgd2lkdGg6IDIwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2wtc3BhY2Uge1xyXG4gIHdpZHRoOiA1JTtcclxuICBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzAwOTA5YTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udmFsdWVzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi5tZWFsLXF1YW50aXR5IHtcclxuICAuaGlnaGxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2RhZGE7XHJcbiAgfVxyXG4gIC5jb2wtMSB7XHJcbiAgICAudmFsdWVzIHtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb2wtMiB7XHJcbiAgICAudmFsdWVzIHtcclxuICAgICAgcGFkZGluZzogMCA5cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgLnJvdyB7XHJcbiAgICBwYWRkaW5nOiA0cHggMTVweDtcclxuICB9XHJcbiAgLmNvbC0xIHtcclxuICAgIC52YWx1ZXMge1xyXG4gICAgICBmb250LXNpemU6IDhweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb2wtMiB7XHJcbiAgICAudmFsdWVzIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYWRkLWZvb2Qge1xyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIGNvbG9yOiAjMWZiMmQyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRvdGFsIHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgLnJvdyB7XHJcbiAgICBwYWRkaW5nOiAycHggMTVweDtcclxuICB9XHJcbiAgLmNvbC0yIC50aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNhbG9yaWVzIHtcclxuICBjb2xvcjogIzFmYjJkMjtcclxufVxyXG5cclxuLnByb3RlaW4tY29sb3Ige1xyXG4gIGNvbG9yOiAjZmJhMDRiO1xyXG59XHJcblxyXG4uY2FyYnMtY29sb3Ige1xyXG4gIGNvbG9yOiAjMTJjOTEwO1xyXG59XHJcblxyXG4uZmF0LWNvbG9yIHtcclxuICBjb2xvcjogI2Y4NjE3YTtcclxufVxyXG5cclxuLmVkaXQtbWFjcm8ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICBoZWlnaHQ6IDFlbTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/macro/macro.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/macro/macro.page.ts ***!
  \*******************************************/
/*! exports provided: MacroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroPage", function() { return MacroPage; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_nutrition_calculator_nutrition_calculator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/nutrition-calculator/nutrition-calculator.service */ "./src/app/services/nutrition-calculator/nutrition-calculator.service.ts");
/* harmony import */ var _services_nutrition_nutrition_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/nutrition/nutrition.service */ "./src/app/services/nutrition/nutrition.service.ts");
/* harmony import */ var _components_nutrition_add_food_add_food_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/nutrition/add-food/add-food.component */ "./src/app/components/nutrition/add-food/add-food.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/toast-service/toast-service.service */ "./src/app/services/toast-service/toast-service.service.ts");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_nutrition_custom_macros_custom_macros_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/nutrition/custom-macros/custom-macros.component */ "./src/app/components/nutrition/custom-macros/custom-macros.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_analytics_analytic_events_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/analytics/analytic-events.enum */ "./src/app/services/analytics/analytic-events.enum.ts");
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/analytics/analytics.service */ "./src/app/services/analytics/analytics.service.ts");
/* harmony import */ var _services_macro_management_macro_management_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/macro-management/macro-management.service */ "./src/app/services/macro-management/macro-management.service.ts");
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














var MacroPage = /** @class */ (function () {
    function MacroPage(modal, nutritionCalculator, loadingCtrl, nutritionService, toastService, errorService, route, analyticService, macroManagement) {
        this.modal = modal;
        this.nutritionCalculator = nutritionCalculator;
        this.loadingCtrl = loadingCtrl;
        this.nutritionService = nutritionService;
        this.toastService = toastService;
        this.errorService = errorService;
        this.route = route;
        this.analyticService = analyticService;
        this.macroManagement = macroManagement;
        this.water = 0;
        this.meals = [];
        this.today = moment__WEBPACK_IMPORTED_MODULE_5__();
        this.date = moment__WEBPACK_IMPORTED_MODULE_5__();
        this.canLeaveAndroidBack = true;
    }
    MacroPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setupMacro()];
                    case 1:
                        _a.sent();
                        if (this.route.snapshot.queryParams.openCustomMacro) {
                            this.openCustomMacro();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Updates the meal information
     *
     * @param updatedMeal
     */
    MacroPage.prototype.updateMeal = function (updatedMeal) {
        var index = this.meals.findIndex(function (meal) { return meal.meal_count === updatedMeal.meal_count; });
        this.meals[index] = updatedMeal;
        var meals = lodash__WEBPACK_IMPORTED_MODULE_8__["cloneDeep"](this.meals);
        this.meals = this.meals.map(function (meal) {
            meal.food_items = meals.reduce(function (foodItems, m) {
                foodItems = lodash__WEBPACK_IMPORTED_MODULE_8__["merge"](foodItems, m.food_items.filter(function (item) { return item.meal === meal.meal_count; }));
                return foodItems;
            }, []);
            meal.active = meal.food_items.length > 0;
            return meal;
        });
        this.analyticService.logEvent(_services_analytics_analytic_events_enum__WEBPACK_IMPORTED_MODULE_11__["AnalyticEvents"].LoggingNutrition);
    };
    MacroPage.prototype.openAddFoodModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var addFoodModal, result, _i, _a, foodItem;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: _components_nutrition_add_food_add_food_component__WEBPACK_IMPORTED_MODULE_4__["AddFoodComponent"],
                            backdropDismiss: false,
                            cssClass: 'global-modal-d-block',
                            componentProps: {
                                mealIndex: 1,
                                nutritionDayId: this.macroCountingInfo.id
                            }
                        })];
                    case 1:
                        addFoodModal = _b.sent();
                        return [4 /*yield*/, addFoodModal.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, addFoodModal.onDidDismiss()];
                    case 3:
                        result = (_b.sent()).data;
                        if (result) {
                            if (result.foodItem) {
                                this.meals[result.mealIndex - 1].food_items.push(result.foodItem);
                            }
                            else {
                                for (_i = 0, _a = result.foodItems; _i < _a.length; _i++) {
                                    foodItem = _a[_i];
                                    this.meals[result.mealIndex - 1].food_items.push(foodItem);
                                }
                            }
                            this.meals[result.mealIndex - 1].active = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MacroPage.prototype.updateWaterAmount = function (water) {
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
                        this.macroCountingInfo.water_amount += water;
                        _a = this;
                        return [4 /*yield*/, this.nutritionService.updateMacroCountingInfo(this.macroCountingInfo)];
                    case 4:
                        _a.macroCountingInfo = (_b.sent());
                        return [3 /*break*/, 7];
                    case 5:
                        e_1 = _b.sent();
                        this.toastService.flash(this.errorService.firstError(e_1));
                        this.macroCountingInfo.water_amount -= water;
                        return [3 /*break*/, 7];
                    case 6:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    MacroPage.prototype.resetMacroInfoForDate = function (date) {
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
                        this.date = moment__WEBPACK_IMPORTED_MODULE_5__(date);
                        _a = this;
                        return [4 /*yield*/, this.macroManagement.macroCounting(this.date)];
                    case 4:
                        _a.macroCountingInfo = _b.sent();
                        this.meals = this.macroManagement.setupMeals(this.macroManagement.blankMeal(), this.macroCountingInfo);
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
    MacroPage.prototype.setupMacro = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, result, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.transphormer = JSON.parse(window.localStorage.getItem('transphormer'));
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Please wait ...'
                            })];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, 6, 7]);
                        return [4 /*yield*/, this.macroManagement.macros(this.transphormer, true, null, this.date)];
                    case 4:
                        result = _a.sent();
                        this.currentWeight = result.weight;
                        this.bmrValues = result.bmrValues;
                        this.activeBmrValues = result.goalValues;
                        this.macroCountingInfo = result.macroCounting;
                        this.meals = result.meals;
                        return [3 /*break*/, 7];
                    case 5:
                        e_3 = _a.sent();
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
    Object.defineProperty(MacroPage.prototype, "calories", {
        get: function () {
            return this.meals
                .reduce(function (carry, meal) { return carry + meal.food_items
                .reduce(function (calories, foodItem) { return calories + foodItem.calories; }, 0); }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MacroPage.prototype, "protein", {
        get: function () {
            return this.meals
                .reduce(function (carry, meal) { return carry + meal.food_items
                .reduce(function (protein, foodItem) { return protein + foodItem.protein; }, 0); }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MacroPage.prototype, "carbs", {
        get: function () {
            return this.meals
                .reduce(function (carry, meal) { return carry + meal.food_items
                .reduce(function (carbs, foodItem) { return carbs + foodItem.carbs; }, 0); }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MacroPage.prototype, "fats", {
        get: function () {
            return this.meals
                .reduce(function (carry, meal) { return carry + meal.food_items
                .reduce(function (fats, foodItem) { return fats + foodItem.fats; }, 0); }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MacroPage.prototype, "canAddFood", {
        get: function () {
            var index = this.meals.findIndex(function (meal) { return meal.active === false; });
            return index >= -1;
        },
        enumerable: true,
        configurable: true
    });
    MacroPage.prototype.backButtonHandler = function ($event) {
        $event.preventDefault();
        this.canLeaveAndroidBack = false;
    };
    /**
     * Open modal for editing/creating custom macro
     */
    MacroPage.prototype.openCustomMacro = function () {
        return __awaiter(this, void 0, void 0, function () {
            var macroModal, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: _components_nutrition_custom_macros_custom_macros_component__WEBPACK_IMPORTED_MODULE_9__["CustomMacrosComponent"],
                            componentProps: {
                                originalMacro: this.bmrValues,
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
                            this.setActiveBmrValue(result.data);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MacroPage.prototype.setActiveBmrValue = function (value) {
        if (value) {
            this.activeBmrValues = value.reset_to_original ? this.bmrValues : value;
        }
        else {
            this.activeBmrValues = this.bmrValues;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:backbutton', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MacroPage.prototype, "backButtonHandler", null);
    MacroPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-macro',
            template: __webpack_require__(/*! ./macro.page.html */ "./src/app/pages/macro/macro.page.html"),
            styles: [__webpack_require__(/*! ./macro.page.scss */ "./src/app/pages/macro/macro.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"],
            _services_nutrition_calculator_nutrition_calculator_service__WEBPACK_IMPORTED_MODULE_2__["NutritionCalculatorService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["LoadingController"],
            _services_nutrition_nutrition_service__WEBPACK_IMPORTED_MODULE_3__["NutritionService"],
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
            _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_7__["ErrorsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_12__["AnalyticsService"],
            _services_macro_management_macro_management_service__WEBPACK_IMPORTED_MODULE_13__["MacroManagementService"]])
    ], MacroPage);
    return MacroPage;
}());



/***/ }),

/***/ "./src/app/services/nutrition-calculator/nutrition-calculator.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/services/nutrition-calculator/nutrition-calculator.service.ts ***!
  \*******************************************************************************/
/*! exports provided: NutritionCalculatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionCalculatorService", function() { return NutritionCalculatorService; });
/* harmony import */ var _onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../onboarding/onboarding.service */ "./src/app/services/onboarding/onboarding.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_nutrition_nutrition_calculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/nutrition/nutrition-calculator */ "./src/app/pages/nutrition/nutrition-calculator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NutritionCalculatorService = /** @class */ (function () {
    function NutritionCalculatorService() {
    }
    /**
     * Returns value in oz of water intake
     *
     * @param currentWeight
     */
    NutritionCalculatorService.prototype.waterIntake = function (currentWeight) {
        if (currentWeight <= 200) {
            return 100;
        }
        return 120;
    };
    NutritionCalculatorService.prototype.getActivityLevelMultiplier = function (weightDifference, activityLevel) {
        var multipliers = [
            [10, 11, 12],
            [11, 12, 13],
            [12, 13, 14] // 100+ lbs
        ];
        var levelModifiers = {
            'Sedentary': 0,
            'Light Activity': 1,
            'Very Active': 2
        };
        var weightDiff = 0;
        if (weightDifference > 60 && weightDifference < 100) {
            weightDiff = 1;
        }
        else if (weightDifference >= 100) {
            weightDiff = 2;
        }
        return multipliers[weightDiff][levelModifiers[activityLevel]];
    };
    NutritionCalculatorService.prototype.calculateBasicMacros = function (transphormer) {
        var nutritionCalculator = new _pages_nutrition_nutrition_calculator__WEBPACK_IMPORTED_MODULE_2__["NutritionCalculator"](transphormer, transphormer.latest_weight_value);
        return nutritionCalculator.getMacros();
    };
    NutritionCalculatorService.prototype.calculateAdvancedMacros = function (currentWeight, goalWeight, activityLevel, transphormationGoal, sex, macroCountingPreference) {
        var weightDifference = currentWeight - goalWeight;
        var goalMultiplier;
        var activityLevelMultiplier = this.getActivityLevelMultiplier(weightDifference, activityLevel);
        switch (transphormationGoal) {
            case 'Primarily lose bodyfat':
                goalMultiplier = 1;
                break;
            case 'Maintain':
                goalMultiplier = 1.15;
                break;
            case 'Gain lean muscle':
                goalMultiplier = 1.5;
        }
        var baseBmr = (weightDifference > 60) ? goalWeight : currentWeight;
        var bmr = baseBmr * activityLevelMultiplier * goalMultiplier;
        var protein = goalWeight + ((weightDifference > 100) ? 25 : 0);
        var fats, carbs, baseFatGrams, baseCarbGrams;
        // if female
        if (sex === _onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_0__["Sex"].Female) {
            baseFatGrams = 40;
            baseCarbGrams = 100;
        }
        else {
            baseFatGrams = 50;
            baseCarbGrams = 125;
        }
        fats = baseFatGrams + (weightDifference > 100 ? 20 : 0);
        carbs = baseCarbGrams + (weightDifference > 100 ? 25 : 0);
        if (macroCountingPreference === 'Carbs') {
            carbs = (bmr - (protein * 4) - (fats * 9)) / 4;
        }
        else if (macroCountingPreference === 'Both') {
            var remainingCalories = (bmr - (fats * 9) - (carbs * 4) - (protein * 4)) / 2;
            fats += Math.ceil(remainingCalories / 9);
            carbs += Math.ceil(remainingCalories / 4);
        }
        else {
            fats = (bmr - (protein * 4) - (carbs * 4)) / 9;
        }
        return {
            calories: bmr,
            protein: protein,
            fats: Math.round(fats),
            carbs: Math.round(carbs)
        };
    };
    NutritionCalculatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], NutritionCalculatorService);
    return NutritionCalculatorService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-macro-macro-module.js.map