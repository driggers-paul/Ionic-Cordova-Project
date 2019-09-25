(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-nutrition-nutrition-module"],{

/***/ "./src/app/components/pie-chart/pie-chart.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/pie-chart/pie-chart.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pie\">\r\n  <canvas #canvas></canvas>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/pie-chart/pie-chart.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/pie-chart/pie-chart.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pie {\n  position: relative;\n  width: 100% !important;\n  height: 100% !important;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waWUtY2hhcnQvRTpcXGlvbmljXFxWZXJ2ZUNvbW1lcmNlXFxOZXdEZXZcXG10c3QtYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwaWUtY2hhcnRcXHBpZS1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG9CQUFpQjtLQUFqQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGllLWNoYXJ0L3BpZS1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/pie-chart/pie-chart.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/pie-chart/pie-chart.component.ts ***!
  \*************************************************************/
/*! exports provided: PieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function() { return PieChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PieChartComponent = /** @class */ (function () {
    function PieChartComponent() {
        this.protien = 0;
        this.fat = 0;
        this.carbs = 0;
        this.proteinColor = '#FF8000';
        this.carbsColor = '#32B857';
        this.fatColor = '#F84FA7';
    }
    PieChartComponent.prototype.ngOnChanges = function () {
        this.setUpChart();
    };
    PieChartComponent.prototype.setUpChart = function () {
        var ctx = this.canvasElement.nativeElement.getContext('2d');
        var value = new chart_js__WEBPACK_IMPORTED_MODULE_1__(ctx, {
            type: 'pie',
            data: {
                datasets: [
                    {
                        data: [this.protien, this.fat, this.carbs],
                        backgroundColor: [this.proteinColor, this.fatColor, this.carbsColor]
                    }
                ]
            },
            options: {
                responsive: true,
                aspectRatio: 1,
                layout: {
                    padding: 0
                },
                tooltips: {
                    enabled: false
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PieChartComponent.prototype, "canvasElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PieChartComponent.prototype, "protien", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PieChartComponent.prototype, "fat", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PieChartComponent.prototype, "carbs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PieChartComponent.prototype, "proteinColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PieChartComponent.prototype, "carbsColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PieChartComponent.prototype, "fatColor", void 0);
    PieChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pie-chart',
            template: __webpack_require__(/*! ./pie-chart.component.html */ "./src/app/components/pie-chart/pie-chart.component.html"),
            styles: [__webpack_require__(/*! ./pie-chart.component.scss */ "./src/app/components/pie-chart/pie-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PieChartComponent);
    return PieChartComponent;
}());



/***/ }),

/***/ "./src/app/components/pie-chart/pie-chart.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/pie-chart/pie-chart.module.ts ***!
  \**********************************************************/
/*! exports provided: PieChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartModule", function() { return PieChartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pie_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pie-chart.component */ "./src/app/components/pie-chart/pie-chart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PieChartModule = /** @class */ (function () {
    function PieChartModule() {
    }
    PieChartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [_pie_chart_component__WEBPACK_IMPORTED_MODULE_2__["PieChartComponent"]],
            declarations: [_pie_chart_component__WEBPACK_IMPORTED_MODULE_2__["PieChartComponent"]]
        })
    ], PieChartModule);
    return PieChartModule;
}());



/***/ }),

/***/ "./src/app/pages/nutrition/calorie-counting/calorie-counting.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/nutrition/calorie-counting/calorie-counting.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"food-row-header\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col offset=\"6\" size=\"2\">Protein(g)</ion-col>\r\n      <ion-col size=\"2\">Carb(g)</ion-col>\r\n      <ion-col size=\"2\">Fat(g)</ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n<ng-container *ngFor=\"let parent of parents\">\r\n  <ion-list-header>{{parent.name}}</ion-list-header>\r\n  <ion-grid>\r\n    <ion-row *ngFor=\"let food of parent.food\">\r\n      <ion-col size=\"5\">\r\n        <ion-item>\r\n          <ion-input [(ngModel)]=\"food.name\" placeholder=\"Food\" (ionChange)=\"updateContent()\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col offset=\"1\" size=\"2\">\r\n        <ion-item>\r\n          <ion-input [(ngModel)]=\"food.categories[0].selectedNutrition.quantity\" [min]=\"0\" type=\"number\"\r\n                     placeholder=\"g\" (ionChange)=\"updateContent()\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-item>\r\n          <ion-input [(ngModel)]=\"food.categories[1].selectedNutrition.quantity\" [min]=\"0\" type=\"number\"\r\n                     placeholder=\"g\" (ionChange)=\"updateContent()\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-item>\r\n          <ion-input [(ngModel)]=\"food.categories[2].selectedNutrition.quantity\" [min]=\"0\" type=\"number\"\r\n                     placeholder=\"g\" (ionChange)=\"updateContent()\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ng-container>\r\n<div>\r\n  <ion-list-header>\r\n    Total Intake\r\n  </ion-list-header>\r\n  <ion-grid>\r\n    <ion-row text-center>\r\n      <ion-col offset=\"6\" size=\"2\">Total</ion-col>\r\n      <ion-col size=\"2\">Total</ion-col>\r\n      <ion-col size=\"2\">Total</ion-col>\r\n    </ion-row>\r\n    <ion-row text-center>\r\n      <ion-col offset=\"6\">{{ protein }}</ion-col>\r\n      <ion-col size=\"2\">{{ carb }}</ion-col>\r\n      <ion-col size=\"2\">{{ fat }}</ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/nutrition/calorie-counting/calorie-counting.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/nutrition/calorie-counting/calorie-counting.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list-header {\n  --background: var(--ion-color-header); }\n  ion-list-header.table-headers {\n    font-size: 12px;\n    text-transform: revert; }\n  ion-item {\n  padding: 2px 0; }\n  .small {\n  font-size: 12px; }\n  .food-row-header ion-col {\n  font-size: 10px;\n  font-weight: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbnV0cml0aW9uL2NhbG9yaWUtY291bnRpbmcvRTpcXGlvbmljXFxWZXJ2ZUNvbW1lcmNlXFxOZXdEZXZcXG10c3QtYXBwL3NyY1xcYXBwXFxwYWdlc1xcbnV0cml0aW9uXFxjYWxvcmllLWNvdW50aW5nXFxjYWxvcmllLWNvdW50aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQWEsRUFBQTtFQURmO0lBSUksZUFBZTtJQUNmLHNCQUFzQixFQUFBO0VBSTFCO0VBQ0UsY0FBYyxFQUFBO0VBR2hCO0VBQ0UsZUFBZSxFQUFBO0VBR2pCO0VBRUksZUFBZTtFQUNmLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbnV0cml0aW9uL2NhbG9yaWUtY291bnRpbmcvY2Fsb3JpZS1jb3VudGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0LWhlYWRlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItaGVhZGVyKTtcclxuXHJcbiAgJi50YWJsZS1oZWFkZXJzIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiByZXZlcnQ7XHJcbiAgfVxyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgcGFkZGluZzogMnB4IDA7XHJcbn1cclxuXHJcbi5zbWFsbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uZm9vZC1yb3ctaGVhZGVyIHtcclxuICBpb24tY29sIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/nutrition/calorie-counting/calorie-counting.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/nutrition/calorie-counting/calorie-counting.component.ts ***!
  \********************************************************************************/
/*! exports provided: CalorieCountingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalorieCountingComponent", function() { return CalorieCountingComponent; });
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

var CalorieCountingComponent = /** @class */ (function () {
    function CalorieCountingComponent() {
        this.parents = [];
        this.contentUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(CalorieCountingComponent.prototype, "activeParents", {
        set: function (value) {
            this.parents = value;
        },
        enumerable: true,
        configurable: true
    });
    CalorieCountingComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(CalorieCountingComponent.prototype, "protein", {
        get: function () {
            var value = 0;
            this.parents.forEach(function (parent) {
                parent.food.forEach(function (foodContent) {
                    value += foodContent.categories[0].selectedNutrition.quantity;
                });
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalorieCountingComponent.prototype, "carb", {
        get: function () {
            var value = 0;
            this.parents.forEach(function (parent) {
                parent.food.forEach(function (foodContent) {
                    value += foodContent.categories[1].selectedNutrition.quantity;
                });
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalorieCountingComponent.prototype, "fat", {
        get: function () {
            var value = 0;
            this.parents.forEach(function (parent) {
                parent.food.forEach(function (foodContent) {
                    value += foodContent.categories[2].selectedNutrition.quantity;
                });
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    CalorieCountingComponent.prototype.updateContent = function () {
        this.contentUpdated.emit(this.parents);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], CalorieCountingComponent.prototype, "activeParents", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CalorieCountingComponent.prototype, "contentUpdated", void 0);
    CalorieCountingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calorie-counting',
            template: __webpack_require__(/*! ./calorie-counting.component.html */ "./src/app/pages/nutrition/calorie-counting/calorie-counting.component.html"),
            styles: [__webpack_require__(/*! ./calorie-counting.component.scss */ "./src/app/pages/nutrition/calorie-counting/calorie-counting.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CalorieCountingComponent);
    return CalorieCountingComponent;
}());



/***/ }),

/***/ "./src/app/pages/nutrition/food-guide/food-guide.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/nutrition/food-guide/food-guide.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\" (click)=\"close()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Recommended Food Guide</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n  <ion-list>\r\n    <ion-list-header text-capitalize>Proteins</ion-list-header>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> beef, lean ground</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> buffalo</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> chicken breast</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> cottage cheese, low fat</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> crab</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> egg substitutes</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> egg whites</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> haddock</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> ham, lean</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> lobster</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> orange roughy</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> salmon</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> shrimp</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> steak, top round</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> steak, top sirloin</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> swordfish</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> tuna</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> turkey, breast</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> turkey, lean ground</ion-item>\r\n  </ion-list>\r\n  <ion-list>\r\n    <ion-list-header text-capitalize>Carbs</ion-list-header>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> apple</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> barley</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> beans</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> bread, whole-wheat</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> brown rice, steamed</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> corn</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> melon</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> oatmeal</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> orange</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> pasta, whole grain</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> potato, baked</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> pumpkin</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> squash</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> strawberries</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> sweet potato</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> wild rice, steamed</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> ram</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> yogurt, fat-free</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> peas</ion-item>\r\n  </ion-list>\r\n  <ion-list>\r\n    <ion-list-header text-capitalize>Vegetable</ion-list-header>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> broccoli</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> artichoke</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> asparagus</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> brussel sprouts</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> cabbage</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> carrots</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> cauliflower</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> celery</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> cucumber</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> green beans</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> green peppers</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> lettuce</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> mushrooms</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> onion</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> spinach</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> tomato</ion-item>\r\n    <ion-item lines=\"none\"><ion-icon name=\"square-outline\" slot=\"start\"></ion-icon> zucchini</ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/nutrition/food-guide/food-guide.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/nutrition/food-guide/food-guide.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL251dHJpdGlvbi9mb29kLWd1aWRlL2Zvb2QtZ3VpZGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/nutrition/food-guide/food-guide.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/nutrition/food-guide/food-guide.component.ts ***!
  \********************************************************************/
/*! exports provided: FoodGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodGuideComponent", function() { return FoodGuideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FoodGuideComponent = /** @class */ (function () {
    function FoodGuideComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    FoodGuideComponent.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    FoodGuideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-guide',
            template: __webpack_require__(/*! ./food-guide.component.html */ "./src/app/pages/nutrition/food-guide/food-guide.component.html"),
            styles: [__webpack_require__(/*! ./food-guide.component.scss */ "./src/app/pages/nutrition/food-guide/food-guide.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], FoodGuideComponent);
    return FoodGuideComponent;
}());



/***/ }),

/***/ "./src/app/pages/nutrition/macro/macro.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/nutrition/macro/macro.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"macros\">\r\n    <div class=\"logo\">\r\n      <img id=\"logo\"\r\n           src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTIuMjkgMjQ5LjEyIj48dGl0bGU+QXNzZXQgMTwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBkPSJNMCwwSDE1MVYxOTEuMDhIMFpNNC44NCwxODYuMkgxNDYuMTlWNC44N0g0Ljg0WiIvPjxwYXRoIGQ9Ik0xMzUuMzYsMjM4LjI0aC00Ljgzdi0xLjE4YzAtNC44OC4wNi05Ljc3LDAtMTQuNjVhMTMuODgsMTMuODgsMCwwLDAtLjcyLTQuMzksNC45Miw0LjkyLDAsMCwwLTYuODYtMi44Niw2LjIzLDYuMjMsMCwwLDAtMy45Miw0LjY2LDI2Ljc3LDI2Ljc3LDAsMCwwLS41NCw0LjcxYy0uMDcsNC4yLDAsOC40LDAsMTIuNnYxLjFoLTQuNzVWMjExLjc2aDQuMTNjMCwxLjEyLDAsMi4yNSwwLDMuMzhhMi43OSwyLjc5LDAsMCwwLC4yNi43NSwyLjkzLDIuOTMsMCwwLDAsLjYyLS41Myw5LjQ2LDkuNDYsMCwwLDEsMTAuNzYtMy45Miw3LjA1LDcuMDUsMCwwLDEsNC4yNSwzLjVsLjQzLjc2czAsMCwuMjIuMTNjLjY2LS43LDEuMzMtMS40NSwyLTIuMTdhOS4xNiw5LjE2LDAsMCwxLDE0LjUyLDIuMjUsMTIuNzIsMTIuNzIsMCwwLDEsMS4zMyw1LjY2Yy4wNSw1LjQ0LDAsMTAuODcsMCwxNi4zMWEzLDMsMCwwLDEtLjA3LjM1aC00Ljc3di0xYzAtNC44NS4wNi05LjcsMC0xNC41NWExNC4yMSwxNC4yMSwwLDAsMC0uNzgtNC40OCw1LjE4LDUuMTgsMCwwLDAtOC0yLjQzLDcuMTQsNy4xNCwwLDAsMC0zLjI0LDYuMTJ2MTYuMzlaIi8+PHBhdGggZD0iTTYuNTgsMjM0LjgzdjE0LjI5SDEuNzZjLS4zMS0xMi40NS4zNy0yNC45MS0uMzgtMzcuNEg1Ljk0djMuODRjLjIyLS4xMy4zNC0uMTYuNC0uMjQsMi44NS0zLjYzLDYuNzMtNC42OCwxMS4wNy00LjA4czcuMjcsMy4zNiw4LjcyLDcuNDZhMTYuODMsMTYuODMsMCwwLDEtLjkxLDEzLjkxLDExLjIsMTEuMiwwLDAsMS0xNC44OSw1LjE2LDExLjQsMTEuNCwwLDAsMS0yLTEuMjdDNy43OCwyMzYuMDUsNy4yOCwyMzUuNDksNi41OCwyMzQuODNabTAtOS44N2guMDZhMTguNzMsMTguNzMsMCwwLDAsLjA2LDQuMzcsNy4zNyw3LjM3LDAsMCwwLDYuMSw1Ljg0QTcuNDksNy40OSwwLDAsMCwyMC44OSwyMzFhMTMuMTYsMTMuMTYsMCwwLDAsLjYzLTEwLjYyQTEwLDEwLDAsMCwwLDE5LDIxNi42NWE2LjYzLDYuNjMsMCwwLDAtNy42OS0xLjM0Yy0yLjgyLDEuMzYtNC43NCwzLjUyLTQuNzIsNi45MUM2LjU5LDIyMy4xMyw2LjU4LDIyNCw2LjU4LDIyNVoiLz48cGF0aCBkPSJNMzgsMjM4LjIzSDMzLjI1VjE5OS4wNUgzOHYxNi4zNmExNC4zOCwxNC4zOCwwLDAsMSwxLjktMi4xNywxMC4yMiwxMC4yMiwwLDAsMSwxMC42Ny0xLjM0YzMuNTQsMS40Niw0LjgyLDQuNTIsNSw4LjA4LjI5LDYsLjQzLDEyLC42MywxOGEyLjQ0LDIuNDQsMCwwLDEtLjA2LjI3SDUwLjc3YzAtLjMxLDAtLjY1LDAtMSwwLTQuNzEsMC05LjQzLDAtMTQuMTVhMTguODIsMTguODIsMCwwLDAtLjM5LTQsNS41Myw1LjUzLDAsMCwwLTcuNzEtNCw4LjU2LDguNTYsMCwwLDAtNC4zOSw0LjEyLDIuNSwyLjUsMCwwLDAtLjE5LDEuMTNjMCw1LjU3LDAsMTEuMTQsMCwxNi43WiIvPjxwYXRoIGQ9Ik02MS40NSwyMjQuNzhhNDQuMzMsNDQuMzMsMCwwLDEsLjc5LTQuNDksMTIuMDksMTIuMDksMCwwLDEsMTEuNDgtOS4xMiwxNy44MSwxNy44MSwwLDAsMSw1Ljg2LjY4LDExLjI2LDExLjI2LDAsMCwxLDguMDYsOC41M2MxLjMxLDUuMzkuNjUsMTAuNTMtMy4zOSwxNC42M3MtOC44NCw0Ljg5LTE0LjA2LDMtNy44Ni01Ljk1LTguNTEtMTEuMzdjLS4wNy0uNjEtLjA3LTEuMjMtLjEtMS44NVpNNjcsMjI1YTEzLjM2LDEzLjM2LDAsMCwwLDEuMDgsNS41M2MxLjM1LDIuOTUsMy41NSw0LjcyLDYuOSw0LjY4czUuNTUtMS44OCw2Ljc2LTQuODdhMTQuNDksMTQuNDksMCwwLDAtLjA2LTExLjE0LDYuNzcsNi43NywwLDAsMC02LjU4LTQuNTEsNyw3LDAsMCwwLTYuNzcsNC4wOEExMy43MywxMy43MywwLDAsMCw2NywyMjVaIi8+PHBhdGggZD0iTTk5LjA5LDIzOC4yM2gtNC44VjIxMS43NGg0LjEzVjIxNmMxLjkyLTMuNzgsNS01LjA5LDkuMDgtNC44MnY0LjE5aC0xLjYxYTcsNywwLDAsMC02LjgsNi44OGMwLDUsMCwxMCwwLDE0LjkzWiIvPjxwYXRoIGQ9Ik04Ny41NiwzMi42MlYxNjguMDlINjYuNDZWNjAuNDdsLTE3LjM2LDE1TDM1Ljc3LDYyLjEzbDUuODgtNS4yNVE1NC44Myw0NS4xMiw2OCwzMy4zNWEyLjcxLDIuNzEsMCwwLDEsMi0uNzVjNS40NywwLDEwLjk0LDAsMTYuNDEsMFoiLz48cGF0aCBkPSJNOTMuMTgsNDkuNTljMSwuMTYsMiwuMjgsMywuNDkuMjMuMDUuNDMuMzguNTguNjFhNiw2LDAsMCwwLC42MiwxLjA4YzEsMSw0LjA4LDEuMSw1LjE4LjI3YTEuNzUsMS43NSwwLDAsMC0uMTYtM2MtMS4xMy0uNTUtMi4zNy0uODktMy41NC0xLjM4QTIyLjM4LDIyLjM4LDAsMCwxLDk1LjIsNDZjLTIuMTQtMS4zOS0yLjA5LTMuODMuMi01YTEwLjc5LDEwLjc5LDAsMCwxLDEwLC4wOUEyLjc0LDIuNzQsMCwwLDEsMTA3LDQzLjQ4bC0zLjQ3LjY0YTMuNjMsMy42MywwLDAsMC01LjM4LTEuOTQsMS4yOCwxLjI4LDAsMCwwLDAsMi4zOCwxOC40MywxOC40MywwLDAsMCwyLjUsMS4wN2MxLjM5LjU2LDIuODMsMSw0LjE3LDEuNjVzMi4zMSwxLjUyLDIuMiwzLjE1YTMuNTMsMy41MywwLDAsMS0yLjU4LDMuMjMsMTMuMTIsMTMuMTIsMCwwLDEtOC40NC4yMkEzLjczLDMuNzMsMCwwLDEsOTMuMTgsNDkuNTlaIi8+PHBhdGggZD0iTTExOS42Miw0MS43MWgtNC4xOXY4LjQ0YzAsMS42Ny41MiwyLjI0LDIuMTcsMi4zOC42NCwwLDEuMjkuMDYsMiwuMDl2MS43N2MtMi4xNCwwLTQuMzEuMy02LjM3LS42NmEyLjMzLDIuMzMsMCwwLDEtMS40OC0yLjM4Yy4wNi0yLjgzLDAtNS42NywwLTguNVY0MS43NGgtMi45M1YzOS44OGgyLjg1YzAtLjM1LjA3LS42LjA3LS44NiwwLTEuNTcsMC0xLjU3LDEuNTYtMi4wOWwyLjA3LS42NnYzLjU3aDQuMjFaIi8+PC9nPjwvZz48L3N2Zz4=\"/>\r\n    </div>\r\n    <div class=\"content\">\r\n      <div class=\"topval\">\r\n        <div class=\"col ion-text-right\">\r\n          <strong>Calories:</strong>\r\n          <strong>Your plan:</strong>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div>{{cals.value.toFixed(0)}}</div>\r\n          <div>Traditional</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n<div class=\"chart-container\">\r\n  <div class=\"pie-chart\">\r\n    <app-pie-chart [protien]=\"protein.percentage\" [carbs]=\"carbs.percentage\" [fat]=\"fat.percentage\"></app-pie-chart>\r\n  </div>\r\n  <div class=\"cards\">\r\n    <div class=\"card protein\">\r\n      <div class=\"header protein-header\">\r\n        Protein\r\n      </div>\r\n      <div class=\"value\">\r\n        {{protein.value}}g\r\n      </div>\r\n    </div>\r\n    <div class=\"card carb\">\r\n      <div class=\"header carb-header\">\r\n        Carbs\r\n      </div>\r\n      <div class=\"value\">\r\n        {{carbs.value}}g\r\n      </div>\r\n    </div>\r\n    <div class=\"card fat\">\r\n      <div class=\"header fat-header\">\r\n        Fat\r\n      </div>\r\n      <div class=\"value\">\r\n        {{fat.value}}g\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<p class=\"note\">\r\n  These macros have been calculated based on the information you provided and your goals. These macros will automatically adjust as you progress. If you have questions or need help hitting these macros everyday feel free to shoot your Transphormation Advisor a message!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/nutrition/macro/macro.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/nutrition/macro/macro.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".macros {\n  display: flex;\n  justify-content: space-between; }\n  .macros strong {\n    font-weight: 900;\n    text-transform: uppercase; }\n  .macros .logo {\n    width: 20%;\n    height: 3em;\n    margin-right: 20px; }\n  .macros .logo img {\n      display: block;\n      height: 100%;\n      width: 100%;\n      -o-object-fit: contain;\n         object-fit: contain; }\n  .macros .content .topval {\n    padding: 0 0 10px 0;\n    display: flex;\n    justify-content: center; }\n  .macros .content .topval div:first-child {\n      padding-right: 4px; }\n  .macros .content .topval .col {\n      display: flex;\n      flex-direction: column; }\n  .macros .content .title {\n    font-size: 30px;\n    line-height: 12px; }\n  .macros .content p {\n    font-size: 14px;\n    text-align: right; }\n  .macros .content .right {\n    padding-left: 10px; }\n  .chart-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  .chart-container .pie-chart {\n    width: 70%;\n    height: 33vh; }\n  .chart-container .circle {\n    width: 125px;\n    height: 125px;\n    background: orange;\n    border-radius: 50%; }\n  .chart-container .cards {\n    width: 30%;\n    padding: 10px 0;\n    font-size: 12px; }\n  .chart-container .cards .card {\n      border: 5px solid #f5f6f5;\n      margin: 10px 0; }\n  .chart-container .cards .card .header {\n        text-align: center;\n        text-transform: uppercase;\n        padding: 5px 0 0 0;\n        font-weight: 900; }\n  .chart-container .cards .card .value {\n        text-align: center;\n        padding: 5px;\n        font-size: 28px;\n        font-weight: 900; }\n  .note {\n  font-size: 10px;\n  line-height: 1.3em;\n  text-align: center; }\n  .protein-header {\n  color: var(--protein-color); }\n  .carb-header {\n  color: var(--carbs-color); }\n  .fat-header {\n  color: var(--fat-color); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbnV0cml0aW9uL21hY3JvL0U6XFxpb25pY1xcVmVydmVDb21tZXJjZVxcTmV3RGV2XFxtdHN0LWFwcC9zcmNcXGFwcFxccGFnZXNcXG51dHJpdGlvblxcbWFjcm9cXG1hY3JvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QixFQUFBO0VBRmhDO0lBS0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QixFQUFBO0VBTjdCO0lBVUksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0IsRUFBQTtFQVp0QjtNQWVNLGNBQWM7TUFDZCxZQUFZO01BQ1osV0FBVztNQUNYLHNCQUFtQjtTQUFuQixtQkFBbUIsRUFBQTtFQWxCekI7SUEyQk0sbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUIsRUFBQTtFQTdCN0I7TUF5QlEsa0JBQWtCLEVBQUE7RUF6QjFCO01BK0JRLGFBQVk7TUFDWixzQkFBc0IsRUFBQTtFQWhDOUI7SUFxQ00sZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBdEN2QjtJQTBDTSxlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7RUEzQ3ZCO0lBK0NNLGtCQUFrQixFQUFBO0VBT3hCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUIsRUFBQTtFQUhyQjtJQUtJLFVBQVU7SUFDVixZQUFZLEVBQUE7RUFOaEI7SUFTSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0IsRUFBQTtFQVp0QjtJQWdCSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGVBQWUsRUFBQTtFQWxCbkI7TUFxQk0seUJBQXlCO01BQ3pCLGNBQWMsRUFBQTtFQXRCcEI7UUF5QlEsa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsZ0JBQWdCLEVBQUE7RUE1QnhCO1FBZ0NRLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osZUFBZTtRQUNmLGdCQUFnQixFQUFBO0VBT3hCO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtFQUdwQjtFQUNFLDJCQUEyQixFQUFBO0VBRzdCO0VBQ0UseUJBQXlCLEVBQUE7RUFHM0I7RUFDRSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL251dHJpdGlvbi9tYWNyby9tYWNyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWNyb3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICBzdHJvbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG5cclxuICAubG9nbyB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICAudG9wdmFsIHtcclxuICAgICAgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgICAgIH1cclxuICAgICAgcGFkZGluZzogMCAwIDEwcHggMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIC5jb2wge1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbi5jaGFydC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLnBpZS1jaGFydCB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiAzM3ZoO1xyXG4gIH1cclxuICAuY2lyY2xlIHtcclxuICAgIHdpZHRoOiAxMjVweDtcclxuICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuY2FyZHMge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIGJvcmRlcjogNXB4IHNvbGlkICNmNWY2ZjU7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG5cclxuICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDAgMCAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC52YWx1ZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ub3RlIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuM2VtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnByb3RlaW4taGVhZGVyIHtcclxuICBjb2xvcjogdmFyKC0tcHJvdGVpbi1jb2xvcik7XHJcbn1cclxuXHJcbi5jYXJiLWhlYWRlciB7XHJcbiAgY29sb3I6IHZhcigtLWNhcmJzLWNvbG9yKTtcclxufVxyXG5cclxuLmZhdC1oZWFkZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1mYXQtY29sb3IpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/nutrition/macro/macro.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/nutrition/macro/macro.component.ts ***!
  \**********************************************************/
/*! exports provided: MacroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroComponent", function() { return MacroComponent; });
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

var MacroComponent = /** @class */ (function () {
    function MacroComponent() {
        this.cals = {
            value: 0
        };
        this.protein = {
            value: 0,
            percentage: 0
        };
        this.fat = {
            value: 0,
            percentage: 0
        };
        this.carbs = {
            value: 0,
            percentage: 0
        };
    }
    Object.defineProperty(MacroComponent.prototype, "bmr", {
        set: function (result) {
            this.protein.value = result.protein;
            this.protein.percentage = result.percentProtein;
            this.carbs.value = result.carbs;
            this.carbs.percentage = result.percentCarbs;
            this.fat.value = result.fats;
            this.fat.percentage = result.percentFats;
            this.cals.value = result.calories;
        },
        enumerable: true,
        configurable: true
    });
    MacroComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MacroComponent.prototype, "bmr", null);
    MacroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-macro',
            template: __webpack_require__(/*! ./macro.component.html */ "./src/app/pages/nutrition/macro/macro.component.html"),
            styles: [__webpack_require__(/*! ./macro.component.scss */ "./src/app/pages/nutrition/macro/macro.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MacroComponent);
    return MacroComponent;
}());



/***/ }),

/***/ "./src/app/pages/nutrition/meal-info/meal-info.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/nutrition/meal-info/meal-info.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\" (click)=\"close()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Nutrition Help</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content padding>\r\n  <h3>Protein</h3>\r\n  <p>Protein plays a vital roll in any fitness goal.  In this video, we talk about the macronutrient, protein, the food sources where you can find protein, and the importance of having protein in your nutrition plan.</p>\r\n  <iframe src=\"https://player.vimeo.com/video/308613026\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\r\n\r\n  <h3>Carbs & Fat</h3>\r\n  <p>Do carbs make you gain weight? Does fat makes you fat? In this video, we talk about the macronutrients carbohydrates and fats. These micronutrients are the fuel sources within the body. We discuss food sources where you’ll find either carbohydrates or fats and why you need them.</p>\r\n  <iframe src=\"https://player.vimeo.com/video/308613006\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\r\n\r\n  <h3>Calories</h3>\r\n  <p>In this video, we talk about calories. What exactly are calories, how many calories make up 1 gram of each macronutrient (protein, carbohydrate, and fat) and ways we burn calories.</p>\r\n  <iframe src=\"https://player.vimeo.com/video/308613020\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/nutrition/meal-info/meal-info.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/nutrition/meal-info/meal-info.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  font-size: 14px; }\n\nh3 {\n  font-family: var(--ion-1p-font-dominant);\n  padding-left: .5em;\n  font-weight: bold;\n  text-transform: uppercase;\n  border-bottom: 2px solid var(--ion-1p-teal);\n  padding-bottom: .1em; }\n\np {\n  text-align: justify;\n  line-height: 1.15em;\n  padding: 1em; }\n\np:nth-child(even) {\n  background: var(--ion-1p-light); }\n\niframe {\n  width: 100%;\n  margin-bottom: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbnV0cml0aW9uL21lYWwtaW5mby9FOlxcaW9uaWNcXFZlcnZlQ29tbWVyY2VcXE5ld0RldlxcbXRzdC1hcHAvc3JjXFxhcHBcXHBhZ2VzXFxudXRyaXRpb25cXG1lYWwtaW5mb1xcbWVhbC1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QiwyQ0FBMkM7RUFDM0Msb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSwrQkFBK0IsRUFBQTs7QUFHakM7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9udXRyaXRpb24vbWVhbC1pbmZvL21lYWwtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbmgzIHtcclxuICBmb250LWZhbWlseTogdmFyKC0taW9uLTFwLWZvbnQtZG9taW5hbnQpO1xyXG4gIHBhZGRpbmctbGVmdDogLjVlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pb24tMXAtdGVhbCk7XHJcbiAgcGFkZGluZy1ib3R0b206IC4xZW07XHJcbn1cclxuXHJcbnAge1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTVlbTtcclxuICBwYWRkaW5nOiAxZW07XHJcbn1cclxuXHJcbnA6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tMXAtbGlnaHQpO1xyXG59XHJcblxyXG5pZnJhbWUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/nutrition/meal-info/meal-info.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/nutrition/meal-info/meal-info.component.ts ***!
  \******************************************************************/
/*! exports provided: MealInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealInfoComponent", function() { return MealInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MealInfoComponent = /** @class */ (function () {
    function MealInfoComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    MealInfoComponent.prototype.ngOnInit = function () {
    };
    MealInfoComponent.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    MealInfoComponent.prototype.backButtonHandler = function ($event) {
        $event.preventDefault();
        this.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:backbutton', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MealInfoComponent.prototype, "backButtonHandler", null);
    MealInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meal-info',
            template: __webpack_require__(/*! ./meal-info.component.html */ "./src/app/pages/nutrition/meal-info/meal-info.component.html"),
            styles: [__webpack_require__(/*! ./meal-info.component.scss */ "./src/app/pages/nutrition/meal-info/meal-info.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], MealInfoComponent);
    return MealInfoComponent;
}());



/***/ }),

/***/ "./src/app/pages/nutrition/nutrition.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/nutrition/nutrition.module.ts ***!
  \*****************************************************/
/*! exports provided: NutritionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionPageModule", function() { return NutritionPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nutrition_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nutrition.page */ "./src/app/pages/nutrition/nutrition.page.ts");
/* harmony import */ var _pick_item_pick_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pick-item/pick-item.component */ "./src/app/pages/nutrition/pick-item/pick-item.component.ts");
/* harmony import */ var _meal_info_meal_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meal-info/meal-info.component */ "./src/app/pages/nutrition/meal-info/meal-info.component.ts");
/* harmony import */ var _macro_macro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./macro/macro.component */ "./src/app/pages/nutrition/macro/macro.component.ts");
/* harmony import */ var _components_pie_chart_pie_chart_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/pie-chart/pie-chart.module */ "./src/app/components/pie-chart/pie-chart.module.ts");
/* harmony import */ var _portion_control_portion_control_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portion-control/portion-control.component */ "./src/app/pages/nutrition/portion-control/portion-control.component.ts");
/* harmony import */ var _calorie_counting_calorie_counting_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./calorie-counting/calorie-counting.component */ "./src/app/pages/nutrition/calorie-counting/calorie-counting.component.ts");
/* harmony import */ var _pipes_safe_url_safe_url_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pipes/safe-url/safe-url.module */ "./src/app/pipes/safe-url/safe-url.module.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _guards_android_back_button_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../guards/android-back-button.guard */ "./src/app/guards/android-back-button.guard.ts");
/* harmony import */ var _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/side-menu/side-menu.module */ "./src/app/components/side-menu/side-menu.module.ts");
/* harmony import */ var _components_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/calendar/calendar.module */ "./src/app/components/calendar/calendar.module.ts");
/* harmony import */ var _food_guide_food_guide_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./food-guide/food-guide.component */ "./src/app/pages/nutrition/food-guide/food-guide.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    {
        path: '',
        component: _nutrition_page__WEBPACK_IMPORTED_MODULE_5__["NutritionPage"],
        canDeactivate: [_guards_android_back_button_guard__WEBPACK_IMPORTED_MODULE_14__["AndroidBackButtonGuard"]]
    }
];
var NutritionPageModule = /** @class */ (function () {
    function NutritionPageModule() {
    }
    NutritionPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_16__["CalendarModule"],
                _components_pie_chart_pie_chart_module__WEBPACK_IMPORTED_MODULE_9__["PieChartModule"],
                _pipes_safe_url_safe_url_module__WEBPACK_IMPORTED_MODULE_12__["SafeUrlModule"],
                _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_15__["SideMenuModule"]
            ],
            declarations: [_nutrition_page__WEBPACK_IMPORTED_MODULE_5__["NutritionPage"], _pick_item_pick_item_component__WEBPACK_IMPORTED_MODULE_6__["PickItemComponent"], _macro_macro_component__WEBPACK_IMPORTED_MODULE_8__["MacroComponent"], _meal_info_meal_info_component__WEBPACK_IMPORTED_MODULE_7__["MealInfoComponent"],
                _portion_control_portion_control_component__WEBPACK_IMPORTED_MODULE_10__["PortionControlComponent"], _calorie_counting_calorie_counting_component__WEBPACK_IMPORTED_MODULE_11__["CalorieCountingComponent"], _food_guide_food_guide_component__WEBPACK_IMPORTED_MODULE_17__["FoodGuideComponent"]],
            entryComponents: [_pick_item_pick_item_component__WEBPACK_IMPORTED_MODULE_6__["PickItemComponent"], _meal_info_meal_info_component__WEBPACK_IMPORTED_MODULE_7__["MealInfoComponent"], _food_guide_food_guide_component__WEBPACK_IMPORTED_MODULE_17__["FoodGuideComponent"]],
            providers: [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__["InAppBrowser"]]
        })
    ], NutritionPageModule);
    return NutritionPageModule;
}());



/***/ }),

/***/ "./src/app/pages/nutrition/nutrition.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/nutrition/nutrition.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <app-menu-button></app-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" (click)=\"mealInfo()\">\r\n      <ion-icon color=\"primary\" name=\"help\" size=\"large\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>My Nutrition</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content *ngIf=\"transphormer\">\r\n  <app-calendar [minDate]=\"minDate\" [format]=\"'dddd, M/D'\" (dateChange)=\"onDateChange($event)\"></app-calendar>\r\n  <ion-card *ngIf=\"latestWeight && (getNutritionType() === 'Calorie / Macro counting' || getNutritionType() === 'Macro meal plan')\">\r\n    <ion-card-header (click)=\"fullHeight = !fullHeight\">\r\n      <div class=\"flex\">\r\n        <div class=\"title\">My Macros</div>\r\n        <div>\r\n        <ion-icon [name]=\"fullHeight ? 'arrow-dropdown' : 'arrow-dropright'\"></ion-icon>\r\n        </div>\r\n      </div>\r\n    </ion-card-header>\r\n    <ion-card-content *ngIf=\"fullHeight\" class=\"full-height\">\r\n      <app-macro [bmr]=\"bmr\" *ngIf=\"bmr\"></app-macro>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <div>\r\n    <ion-list *ngIf=\"latestWeight\">\r\n      <app-portion-control\r\n              [showAmounts]=\"shouldShowAmounts\"\r\n              [activeParents]=\"activeParents\"\r\n              (pickedItem)=\"pickItem($event)\"\r\n              (saveNutrition)=\"updateNutritionValue()\"\r\n              *ngIf=\"getNutritionType() === 'Portion control' || getNutritionType() === 'Macro meal plan'\"\r\n              [showPdf]=\"getNutritionType() === 'Portion control'\"\r\n      ></app-portion-control>\r\n        <app-calorie-counting\r\n        [activeParents]=\"activeParents\"\r\n        *ngIf=\"getNutritionType() === 'Calorie / Macro counting'\"\r\n        (contentUpdated)=\"updateMacroCounting($event)\"\r\n      >\r\n\r\n      </app-calorie-counting>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/nutrition/nutrition.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/nutrition/nutrition.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list-header {\n  --background: var(--ion-color-header); }\n\nion-item {\n  padding: 2px 0; }\n\n.small {\n  font-size: 12px; }\n\nion-card {\n  --color: var(--ion-color-brand-black);\n  border-color: #ccc; }\n\n.title {\n  text-transform: uppercase; }\n\n.flex {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n.no-height {\n  max-height: 0;\n  transition: ease all 0.3s; }\n\n.full-height {\n  max-height: 1000px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbnV0cml0aW9uL0U6XFxpb25pY1xcVmVydmVDb21tZXJjZVxcTmV3RGV2XFxtdHN0LWFwcC9zcmNcXGFwcFxccGFnZXNcXG51dHJpdGlvblxcbnV0cml0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFhLEVBQUE7O0FBR2Y7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHFDQUFRO0VBQ1Isa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTs7QUFRaEM7RUFDRSxhQUFhO0VBQ2IseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9udXRyaXRpb24vbnV0cml0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0LWhlYWRlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItaGVhZGVyKTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIHBhZGRpbmc6IDJweCAwO1xyXG59XHJcblxyXG4uc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1icmFuZC1ibGFjayk7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uYWNjb3JkaWFuLWJ1dHRvbiB7XHJcbiAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy9ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5uby1oZWlnaHQge1xyXG4gIG1heC1oZWlnaHQ6IDA7XHJcbiAgdHJhbnNpdGlvbjogZWFzZSBhbGwgMC4zcztcclxufVxyXG5cclxuLmZ1bGwtaGVpZ2h0IHtcclxuICBtYXgtaGVpZ2h0OiAxMDAwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/nutrition/nutrition.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/nutrition/nutrition.page.ts ***!
  \***************************************************/
/*! exports provided: NutritionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionPage", function() { return NutritionPage; });
/* harmony import */ var _services_weights_weights_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/weights/weights.service */ "./src/app/services/weights/weights.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pick_item_pick_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pick-item/pick-item.component */ "./src/app/pages/nutrition/pick-item/pick-item.component.ts");
/* harmony import */ var _meal_info_meal_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meal-info/meal-info.component */ "./src/app/pages/nutrition/meal-info/meal-info.component.ts");
/* harmony import */ var _services_nutrition_nutrition_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/nutrition/nutrition.service */ "./src/app/services/nutrition/nutrition.service.ts");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _nutrition_calculator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nutrition-calculator */ "./src/app/pages/nutrition/nutrition-calculator.ts");
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/analytics/analytics.service */ "./src/app/services/analytics/analytics.service.ts");
/* harmony import */ var _services_analytics_analytic_events_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/analytics/analytic-events.enum */ "./src/app/services/analytics/analytic-events.enum.ts");
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











var NutritionPage = /** @class */ (function () {
    function NutritionPage(modal, loadingCtrl, nutritionService, toastCtrl, errorService, weightService, analyticService) {
        this.modal = modal;
        this.loadingCtrl = loadingCtrl;
        this.nutritionService = nutritionService;
        this.toastCtrl = toastCtrl;
        this.errorService = errorService;
        this.weightService = weightService;
        this.analyticService = analyticService;
        this.canLeaveAndroidBack = true;
        this.activeParents = [];
        this.today = moment__WEBPACK_IMPORTED_MODULE_3__();
        this.nutritionDays = {};
        this.fullHeight = true;
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_3__(JSON.parse(window.localStorage.getItem('transphormer')).created_at);
    }
    NutritionPage.prototype.ngOnInit = function () {
        this.setupNutritionItems();
        this.setupNutritionDays();
        this.setupActiveDate();
    };
    Object.defineProperty(NutritionPage.prototype, "shouldShowAmounts", {
        get: function () {
            return this.getNutritionType() === 'Macro meal plan';
        },
        enumerable: true,
        configurable: true
    });
    NutritionPage.prototype.pickItem = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            var myModal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.canLeaveAndroidBack = false;
                        return [4 /*yield*/, this.modal.create({
                                component: _pick_item_pick_item_component__WEBPACK_IMPORTED_MODULE_4__["PickItemComponent"],
                                backdropDismiss: false,
                                componentProps: {
                                    showAmounts: this.shouldShowAmounts,
                                    calculator: this.calculator,
                                    nutritionItems: this.nutritionItems.filter(function (item) { return item.type === category.type; }),
                                    headerTitle: category.name,
                                    checkedNutritionId: category.selectedNutrition
                                        ? category.selectedNutrition.name
                                        : null,
                                    weight: this.latestWeight.weight,
                                    category: category,
                                },
                            })];
                    case 1:
                        myModal = _a.sent();
                        return [4 /*yield*/, myModal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, myModal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        this.canLeaveAndroidBack = true;
                        if (data) {
                            category.selectedNutrition = data;
                            if (this.shouldShowAmounts) {
                                category.selectedNutrition.calculatedQuantity = this.calculator.nutritionValue(category.type, category.selectedNutrition.name);
                            }
                        }
                        else if (data === null) {
                            category.selectedNutrition = null;
                        }
                        this.updateNutritionValue();
                        return [2 /*return*/];
                }
            });
        });
    };
    NutritionPage.prototype.updateNutritionValue = function () {
        var data = {
            type: this.getNutritionType(),
            value: this.nutritionDays
        };
        window.localStorage.setItem('completeNutrition', JSON.stringify(data));
        this.analyticService.logEvent(_services_analytics_analytic_events_enum__WEBPACK_IMPORTED_MODULE_10__["AnalyticEvents"].LoggingNutrition);
    };
    NutritionPage.prototype.mealInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mealInfoModal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.canLeaveAndroidBack = false;
                        return [4 /*yield*/, this.modal.create({
                                component: _meal_info_meal_info_component__WEBPACK_IMPORTED_MODULE_5__["MealInfoComponent"],
                                backdropDismiss: false,
                            })];
                    case 1:
                        mealInfoModal = _a.sent();
                        return [4 /*yield*/, mealInfoModal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, mealInfoModal.onDidDismiss()];
                    case 3:
                        _a.sent();
                        this.canLeaveAndroidBack = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    NutritionPage.prototype.setupNutritionItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, latestWeight, _a, _b, e_1, toast;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Please wait...',
                        })];
                    case 1:
                        loader = _c.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 6, 9, 10]);
                        latestWeight = this.weightService.latestWeight();
                        _a = this;
                        return [4 /*yield*/, this.nutritionService.getNutritionItems()];
                    case 4:
                        _a.nutritionItems = (_c.sent());
                        _b = this;
                        return [4 /*yield*/, latestWeight];
                    case 5:
                        _b.latestWeight = (_c.sent());
                        this.setupCalculator();
                        return [3 /*break*/, 10];
                    case 6:
                        e_1 = _c.sent();
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: this.errorService.firstError(e_1),
                                duration: 3000,
                            })];
                    case 7:
                        toast = _c.sent();
                        return [4 /*yield*/, toast.present()];
                    case 8:
                        _c.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    NutritionPage.prototype.setupCalculator = function () {
        this.calculator = new _nutrition_calculator__WEBPACK_IMPORTED_MODULE_8__["NutritionCalculator"](this.transphormer, this.latestWeight.weight, this.transphormer.meals_per_day);
        this.calculateBmr();
    };
    NutritionPage.prototype.getParents = function () {
        if (this.getNutritionType() === 'Portion control') {
            return [
                {
                    name: 'Breakfast',
                    type: 'breakfast',
                    categories: [
                        {
                            name: 'Protein',
                            type: 'protein',
                            selectedNutrition: null,
                        },
                        {
                            name: 'Carb',
                            type: 'carb',
                            selectedNutrition: null,
                        },
                        {
                            name: 'Veggie',
                            type: 'veggie',
                            selectedNutrition: null,
                        },
                    ],
                },
                {
                    name: 'Lunch',
                    type: 'lunch',
                    categories: [
                        {
                            name: 'Protein',
                            type: 'protein',
                            selectedNutrition: null,
                        },
                        {
                            name: 'Carb',
                            type: 'carb',
                            selectedNutrition: null,
                        },
                        {
                            name: 'Veggie',
                            type: 'veggie',
                            selectedNutrition: null,
                        },
                    ],
                },
                {
                    name: 'Dinner',
                    type: 'dinner',
                    categories: [
                        {
                            name: 'Protein',
                            type: 'protein',
                            selectedNutrition: null,
                        },
                        {
                            name: 'Carb',
                            type: 'carb',
                            selectedNutrition: null,
                        },
                        {
                            name: 'Veggie',
                            type: 'veggie',
                            selectedNutrition: null,
                        },
                    ],
                },
                {
                    name: 'Supplements',
                    type: 'supplements',
                    categories: [
                        {
                            name: 'Ignition',
                            type: 'ignition',
                            selectedNutrition: null,
                        },
                        {
                            name: 'Phormula-1',
                            type: 'supplement',
                            selectedNutrition: null,
                        },
                    ],
                },
            ];
        }
        else if (this.getNutritionType() === 'Macro meal plan') {
            var plan = [];
            var mealCounter = 1;
            plan.push({
                name: "Meal " + mealCounter,
                type: 'breakfast',
                categories: [
                    {
                        name: 'Protein',
                        type: 'protein',
                        selectedNutrition: null,
                    },
                    {
                        name: 'Carb',
                        type: 'carb',
                        selectedNutrition: null,
                    },
                    {
                        name: 'Veggie',
                        type: 'veggie',
                        selectedNutrition: null,
                    },
                ],
            });
            mealCounter++;
            if (this.transphormer.meals_per_day >= 4) {
                plan.push({
                    name: "Meal " + mealCounter,
                    type: 'snack',
                    categories: [
                        {
                            name: 'Protein',
                            type: 'protein',
                            selectedNutrition: null,
                        },
                        {
                            name: 'Carb',
                            type: 'carb',
                            selectedNutrition: null,
                        },
                        {
                            name: 'Veggie',
                            type: 'veggie',
                            selectedNutrition: null,
                        },
                    ],
                });
                mealCounter++;
            }
            plan.push({
                name: "Meal " + mealCounter,
                type: 'lunch',
                categories: [
                    {
                        name: 'Protein',
                        type: 'protein',
                        selectedNutrition: null,
                    },
                    {
                        name: 'Carb',
                        type: 'carb',
                        selectedNutrition: null,
                    },
                    {
                        name: 'Veggie',
                        type: 'veggie',
                        selectedNutrition: null,
                    },
                ],
            });
            mealCounter++;
            if (this.transphormer.meals_per_day === 5) {
                plan.push({
                    name: "Meal " + mealCounter,
                    type: 'snack',
                    categories: [
                        {
                            name: 'Protein',
                            type: 'protein',
                            selectedNutrition: null,
                        },
                        {
                            name: 'Carb',
                            type: 'carb',
                            selectedNutrition: null,
                        },
                        {
                            name: 'Veggie',
                            type: 'veggie',
                            selectedNutrition: null,
                        },
                    ],
                });
                mealCounter++;
            }
            plan.push({
                name: "Meal " + mealCounter,
                type: 'dinner',
                categories: [
                    {
                        name: 'Protein',
                        type: 'protein',
                        selectedNutrition: null,
                    },
                    {
                        name: 'Carb',
                        type: 'carb',
                        selectedNutrition: null,
                    },
                    {
                        name: 'Veggie',
                        type: 'veggie',
                        selectedNutrition: null,
                    },
                ],
            });
            mealCounter++;
            plan.push({
                name: "Meal " + mealCounter,
                type: 'supplements',
                categories: [
                    {
                        name: 'Ignition',
                        type: 'ignition',
                        selectedNutrition: null,
                    },
                    {
                        name: 'Phormula-1',
                        type: 'supplement',
                        selectedNutrition: null,
                    },
                ],
            });
            return plan;
        }
        else {
            return [
                {
                    name: 'Meal 1',
                    type: 'breakfast',
                    categories: [],
                    food: [{
                            name: '',
                            categories: [
                                {
                                    name: 'Protein',
                                    type: 'protein',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'protein',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Carb',
                                    type: 'carb',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'carb',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Veggie',
                                    type: 'veggie',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'veggie',
                                        quantity: null,
                                    },
                                }
                            ]
                        }, {
                            name: '',
                            categories: [
                                {
                                    name: 'Protein',
                                    type: 'protein',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'protein',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Carb',
                                    type: 'carb',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'carb',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Veggie',
                                    type: 'veggie',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'veggie',
                                        quantity: null,
                                    },
                                }
                            ]
                        }, {
                            name: '',
                            categories: [
                                {
                                    name: 'Protein',
                                    type: 'protein',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'protein',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Carb',
                                    type: 'carb',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'carb',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Veggie',
                                    type: 'veggie',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'veggie',
                                        quantity: null,
                                    },
                                }
                            ]
                        }]
                },
                {
                    name: 'Meal 2',
                    type: 'snack',
                    categories: [],
                    food: [{
                            name: '',
                            categories: [
                                {
                                    name: 'Protein',
                                    type: 'protein',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'protein',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Carb',
                                    type: 'carb',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'carb',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Veggie',
                                    type: 'veggie',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'veggie',
                                        quantity: null,
                                    },
                                }
                            ]
                        }, {
                            name: '',
                            categories: [
                                {
                                    name: 'Protein',
                                    type: 'protein',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'protein',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Carb',
                                    type: 'carb',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'carb',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Veggie',
                                    type: 'veggie',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'veggie',
                                        quantity: null,
                                    },
                                }
                            ]
                        }, {
                            name: '',
                            categories: [
                                {
                                    name: 'Protein',
                                    type: 'protein',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'protein',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Carb',
                                    type: 'carb',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'carb',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Veggie',
                                    type: 'veggie',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'veggie',
                                        quantity: null,
                                    },
                                }
                            ]
                        }]
                },
                {
                    name: 'Meal 3',
                    type: 'lunch',
                    categories: [],
                    food: [{
                            name: '',
                            categories: [
                                {
                                    name: 'Protein',
                                    type: 'protein',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'protein',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Carb',
                                    type: 'carb',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'carb',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Veggie',
                                    type: 'veggie',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'veggie',
                                        quantity: null,
                                    },
                                }
                            ]
                        }, {
                            name: '',
                            categories: [
                                {
                                    name: 'Protein',
                                    type: 'protein',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'protein',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Carb',
                                    type: 'carb',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'carb',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Veggie',
                                    type: 'veggie',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'veggie',
                                        quantity: null,
                                    },
                                }
                            ]
                        }, {
                            name: '',
                            categories: [
                                {
                                    name: 'Protein',
                                    type: 'protein',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'protein',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Carb',
                                    type: 'carb',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'carb',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Veggie',
                                    type: 'veggie',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'veggie',
                                        quantity: null,
                                    },
                                }
                            ]
                        }]
                },
                {
                    name: 'Meal 4',
                    type: 'snack',
                    categories: [],
                    food: [{
                            name: '',
                            categories: [
                                {
                                    name: 'Protein',
                                    type: 'protein',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'protein',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Carb',
                                    type: 'carb',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'carb',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Veggie',
                                    type: 'veggie',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'veggie',
                                        quantity: null,
                                    },
                                }
                            ]
                        }, {
                            name: '',
                            categories: [
                                {
                                    name: 'Protein',
                                    type: 'protein',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'protein',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Carb',
                                    type: 'carb',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'carb',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Veggie',
                                    type: 'veggie',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'veggie',
                                        quantity: null,
                                    },
                                }
                            ]
                        }, {
                            name: '',
                            categories: [
                                {
                                    name: 'Protein',
                                    type: 'protein',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'protein',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Carb',
                                    type: 'carb',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'carb',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Veggie',
                                    type: 'veggie',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'veggie',
                                        quantity: null,
                                    },
                                }
                            ]
                        }]
                },
                {
                    name: 'Meal 5',
                    type: 'dinner',
                    categories: [],
                    food: [{
                            name: '',
                            categories: [
                                {
                                    name: 'Protein',
                                    type: 'protein',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'protein',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Carb',
                                    type: 'carb',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'carb',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Veggie',
                                    type: 'veggie',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'veggie',
                                        quantity: null,
                                    },
                                }
                            ]
                        }, {
                            name: '',
                            categories: [
                                {
                                    name: 'Protein',
                                    type: 'protein',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'protein',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Carb',
                                    type: 'carb',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'carb',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Veggie',
                                    type: 'veggie',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'veggie',
                                        quantity: null,
                                    },
                                }
                            ]
                        }, {
                            name: '',
                            categories: [
                                {
                                    name: 'Protein',
                                    type: 'protein',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'protein',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Carb',
                                    type: 'carb',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'carb',
                                        quantity: null,
                                    },
                                },
                                {
                                    name: 'Veggie',
                                    type: 'veggie',
                                    selectedNutrition: {
                                        name: 'Value',
                                        type: 'veggie',
                                        quantity: null,
                                    },
                                }
                            ]
                        }]
                },
            ];
        }
    };
    Object.defineProperty(NutritionPage.prototype, "transphormer", {
        get: function () {
            return JSON.parse(window.localStorage.getItem('transphormer'));
        },
        enumerable: true,
        configurable: true
    });
    NutritionPage.prototype.setupNutritionDays = function () {
        var nutrition = JSON.parse(window.localStorage.getItem('completeNutrition'));
        if (nutrition) {
            if (nutrition.type === this.getNutritionType()) {
                this.nutritionDays = nutrition.value;
            }
            else {
                var today = this.today.format('YYYY-MM-DD');
                this.nutritionDays[today] = this.getParents();
            }
        }
        else {
            var today = this.today.format('YYYY-MM-DD');
            this.nutritionDays[today] = this.getParents();
        }
    };
    NutritionPage.prototype.setupActiveDate = function () {
        this.activeDate = this.today.format('YYYY-MM-DD');
        if (!this.nutritionDays.hasOwnProperty(this.activeDate)) {
            this.nutritionDays[this.activeDate] = this.getParents();
        }
        this.activeParents = this.nutritionDays[this.activeDate];
    };
    /**
     * Handler to check date change events from week tab
     *
     * @param newDate
     */
    NutritionPage.prototype.onDateChange = function (newDate) {
        var date = moment__WEBPACK_IMPORTED_MODULE_3__(newDate);
        this.activeDate = date.format('YYYY-MM-DD');
        if (!this.nutritionDays.hasOwnProperty(this.activeDate)) {
            this.nutritionDays[this.activeDate] = this.getParents();
        }
        this.activeParents = this.nutritionDays[this.activeDate];
    };
    NutritionPage.prototype.calculateBmr = function () {
        this.bmr = this.calculator.getMacros();
    };
    NutritionPage.prototype.updateMacroCounting = function (value) {
        this.activeParents = value;
        this.nutritionDays[this.activeDate] = this.activeParents;
        this.updateNutritionValue();
    };
    NutritionPage.prototype.getNutritionType = function () {
        if (this.transphormer.is_paid_user) {
            return this.transphormer.likely_to_do;
        }
        if (this.transphormer.likely_to_do === 'Calorie / Macro counting') {
            return 'Portion control';
        }
        return this.transphormer.likely_to_do;
    };
    NutritionPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nutrition',
            template: __webpack_require__(/*! ./nutrition.page.html */ "./src/app/pages/nutrition/nutrition.page.html"),
            styles: [__webpack_require__(/*! ./nutrition.page.scss */ "./src/app/pages/nutrition/nutrition.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _services_nutrition_nutrition_service__WEBPACK_IMPORTED_MODULE_6__["NutritionService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_7__["ErrorsService"],
            _services_weights_weights_service__WEBPACK_IMPORTED_MODULE_0__["WeightsService"],
            _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_9__["AnalyticsService"]])
    ], NutritionPage);
    return NutritionPage;
}());



/***/ }),

/***/ "./src/app/pages/nutrition/pick-item/pick-item.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/nutrition/pick-item/pick-item.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\" (click)=\"close()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Pick a {{headerTitle}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item (click)=\"removeSelection()\">\r\n      <ion-label>None</ion-label>\r\n      <ion-icon *ngIf=\"checkedNutritionId === null\" name=\"checkmark-circle\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item (click)=\"selectItem(item)\" *ngFor=\"let item of nutritionItems\">\r\n      <ion-label> {{item.name}}</ion-label>\r\n      <p *ngIf=\"showAmounts\">{{nutritionValue(item.name)}} {{item.unit}}</p>\r\n      <ion-icon *ngIf=\"checkedNutritionId === item.id\" name=\"checkmark-circle\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/nutrition/pick-item/pick-item.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/nutrition/pick-item/pick-item.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-label {\n  font-size: 14px !important; }\n\np {\n  font-size: 12px; }\n\nion-icon {\n  font-size: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbnV0cml0aW9uL3BpY2staXRlbS9FOlxcaW9uaWNcXFZlcnZlQ29tbWVyY2VcXE5ld0RldlxcbXRzdC1hcHAvc3JjXFxhcHBcXHBhZ2VzXFxudXRyaXRpb25cXHBpY2staXRlbVxccGljay1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL251dHJpdGlvbi9waWNrLWl0ZW0vcGljay1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/nutrition/pick-item/pick-item.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/nutrition/pick-item/pick-item.component.ts ***!
  \******************************************************************/
/*! exports provided: PickItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickItemComponent", function() { return PickItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nutrition_calculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nutrition-calculator */ "./src/app/pages/nutrition/nutrition-calculator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PickItemComponent = /** @class */ (function () {
    function PickItemComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.nutritionItems = [];
        this.showAmounts = true;
        this.checkedNutritionId = null;
        this.headerTitle = '';
        this.weight = 0;
        this.numberOfMeals = 6;
    }
    PickItemComponent.prototype.ngOnInit = function () {
    };
    PickItemComponent.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    PickItemComponent.prototype.selectItem = function (item) {
        this.modalCtrl.dismiss(item);
    };
    PickItemComponent.prototype.removeSelection = function () {
        this.modalCtrl.dismiss(null);
    };
    Object.defineProperty(PickItemComponent.prototype, "transphormer", {
        get: function () {
            return JSON.parse(window.localStorage.getItem('transphormer'));
        },
        enumerable: true,
        configurable: true
    });
    PickItemComponent.prototype.nutritionValue = function (name) {
        return this.calculator.nutritionValue(this.category.type, name);
    };
    PickItemComponent.prototype.backButtonHandler = function ($event) {
        $event.preventDefault();
        this.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PickItemComponent.prototype, "nutritionItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PickItemComponent.prototype, "showAmounts", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _nutrition_calculator__WEBPACK_IMPORTED_MODULE_2__["NutritionCalculator"])
    ], PickItemComponent.prototype, "calculator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PickItemComponent.prototype, "checkedNutritionId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PickItemComponent.prototype, "headerTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PickItemComponent.prototype, "weight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PickItemComponent.prototype, "category", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PickItemComponent.prototype, "numberOfMeals", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:backbutton', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PickItemComponent.prototype, "backButtonHandler", null);
    PickItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pick-item',
            template: __webpack_require__(/*! ./pick-item.component.html */ "./src/app/pages/nutrition/pick-item/pick-item.component.html"),
            styles: [__webpack_require__(/*! ./pick-item.component.scss */ "./src/app/pages/nutrition/pick-item/pick-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], PickItemComponent);
    return PickItemComponent;
}());



/***/ }),

/***/ "./src/app/pages/nutrition/portion-control/portion-control.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/nutrition/portion-control/portion-control.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item text-wrap padding-top *ngIf=\"shouldShowHelp()\">\r\n  <div>This is a portion control diet plan. For maximum results, at each meal choose one protein (palm sized serving), one carb (fist sized serving), and one veggie (fist size serving). The Palm, Fist, Fist plan is easy and extremely effective!\r\n  <ng-container *ngIf=\"!getUser().is_paid_user\"><br/><br/>\r\n    For customized meal plans or macro-counting option click <a (click)=\"goTo('subscription')\">here</a>.\r\n  </ng-container>\r\n    <div text-center padding-vertical><ion-button (click)=\"hideHelp()\">Hide this</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-item>\r\n<ion-item text-wrap *ngIf=\"portionControlHelpHidden()\">\r\n  <ion-label>Portion control help</ion-label>\r\n    <div slot=\"end\" text-center padding-vertical><ion-button (click)=\"showHelp()\">Show</ion-button>\r\n    </div>\r\n</ion-item>\r\n<ion-list-header *ngIf=\"showPdf\">\r\n  Recommended Food Guide\r\n</ion-list-header>\r\n<ion-item *ngIf=\"showPdf\">\r\n  <ion-label>Guide</ion-label>\r\n  <ion-button size=\"small\" (click)=\"openPdf()\">View</ion-button>\r\n</ion-item>\r\n<ng-container *ngFor=\"let parent of parents\">\r\n  <ion-list-header>{{parent.name}}</ion-list-header>\r\n  <ion-item *ngFor=\"let category of parent.categories; let last = last\" [lines]=\"last ? 'none' : 'full'\">\r\n    <ng-container *ngIf=\"category.type !== 'supplement' && category.type !== 'ignition'\">\r\n      <ion-label class=\"unselected\" *ngIf=\"!category.selectedNutrition\">{{ category.name }}</ion-label>\r\n      <ion-label class=\"dark\"\r\n                 *ngIf=\"category.selectedNutrition\">{{ category.selectedNutrition.name }}\r\n        <span *ngIf=\"showAmounts\">({{ category.selectedNutrition.calculatedQuantity }} {{ category.selectedNutrition.unit }})</span>\r\n      </ion-label>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"category.type === 'supplement' || category.type === 'ignition'\">\r\n      <ion-label>{{ category.name }}</ion-label>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"category.type !== 'supplement' && category.type !== 'ignition'\">\r\n      <ion-button size=\"small\" *ngIf=\"category.selectedNutrition === null\"\r\n                  (click)=\"pickItem(category)\">Add\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button size=\"medium\" *ngIf=\"category.selectedNutrition !== null\" fill=\"clear\"\r\n                  (click)=\"pickItem(category)\">\r\n        <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n      </ion-button>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"category.type === 'supplement' || category.type === 'ignition'\">\r\n      <ion-checkbox [(ngModel)]=\"category.selectedNutrition\"\r\n                    (ionChange)=\"updateNutritionValue()\"></ion-checkbox>\r\n    </ng-container>\r\n  </ion-item>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/pages/nutrition/portion-control/portion-control.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/nutrition/portion-control/portion-control.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list-header {\n  --background: var(--ion-color-header); }\n\nion-item {\n  padding: 2px 0; }\n\nion-label.unselected {\n  --color: var(--ion-1p-gray); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbnV0cml0aW9uL3BvcnRpb24tY29udHJvbC9FOlxcaW9uaWNcXFZlcnZlQ29tbWVyY2VcXE5ld0RldlxcbXRzdC1hcHAvc3JjXFxhcHBcXHBhZ2VzXFxudXRyaXRpb25cXHBvcnRpb24tY29udHJvbFxccG9ydGlvbi1jb250cm9sLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQWEsRUFBQTs7QUFHZjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSwyQkFBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbnV0cml0aW9uL3BvcnRpb24tY29udHJvbC9wb3J0aW9uLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdC1oZWFkZXIge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWhlYWRlcik7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICBwYWRkaW5nOiAycHggMDtcclxufVxyXG5cclxuaW9uLWxhYmVsLnVuc2VsZWN0ZWQge1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi0xcC1ncmF5KTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/nutrition/portion-control/portion-control.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/nutrition/portion-control/portion-control.component.ts ***!
  \******************************************************************************/
/*! exports provided: PortionControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortionControlComponent", function() { return PortionControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _food_guide_food_guide_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../food-guide/food-guide.component */ "./src/app/pages/nutrition/food-guide/food-guide.component.ts");
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




var PortionControlComponent = /** @class */ (function () {
    function PortionControlComponent(iab, navCtrl, modalCtrl) {
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.showAmounts = true;
        this.saveNutrition = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pickedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showPdf = false;
        this.parents = [];
    }
    Object.defineProperty(PortionControlComponent.prototype, "activeParents", {
        set: function (value) {
            this.parents = value;
        },
        enumerable: true,
        configurable: true
    });
    PortionControlComponent.prototype.updateNutritionValue = function () {
        this.saveNutrition.emit(this.parents);
    };
    PortionControlComponent.prototype.pickItem = function (category) {
        this.pickedItem.emit(category);
    };
    PortionControlComponent.prototype.getUser = function () {
        return JSON.parse(window.localStorage.getItem('transphormer'));
    };
    PortionControlComponent.prototype.shouldShowHelp = function () {
        return (this.getUser().likely_to_do !== 'Macro meal plan')
            && ((localStorage.getItem('hidePortionControlHelp') || '0') === '0');
    };
    PortionControlComponent.prototype.portionControlHelpHidden = function () {
        return (this.getUser().likely_to_do !== 'Macro meal plan')
            && ((localStorage.getItem('hidePortionControlHelp') || '0') !== '0');
    };
    PortionControlComponent.prototype.hideHelp = function () {
        localStorage.setItem('hidePortionControlHelp', '1');
    };
    PortionControlComponent.prototype.showHelp = function () {
        localStorage.setItem('hidePortionControlHelp', '0');
    };
    PortionControlComponent.prototype.goTo = function (url) {
        this.navCtrl.navigateRoot(url);
    };
    PortionControlComponent.prototype.openPdf = function () {
        return __awaiter(this, void 0, void 0, function () {
            var foodGuideModal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _food_guide_food_guide_component__WEBPACK_IMPORTED_MODULE_3__["FoodGuideComponent"]
                        })];
                    case 1:
                        foodGuideModal = _a.sent();
                        return [4 /*yield*/, foodGuideModal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], PortionControlComponent.prototype, "activeParents", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PortionControlComponent.prototype, "showAmounts", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PortionControlComponent.prototype, "saveNutrition", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PortionControlComponent.prototype, "pickedItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PortionControlComponent.prototype, "showPdf", void 0);
    PortionControlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portion-control',
            template: __webpack_require__(/*! ./portion-control.component.html */ "./src/app/pages/nutrition/portion-control/portion-control.component.html"),
            styles: [__webpack_require__(/*! ./portion-control.component.scss */ "./src/app/pages/nutrition/portion-control/portion-control.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_1__["InAppBrowser"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], PortionControlComponent);
    return PortionControlComponent;
}());



/***/ }),

/***/ "./src/app/services/nutrition/nutrition.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/nutrition/nutrition.service.ts ***!
  \*********************************************************/
/*! exports provided: NutritionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionService", function() { return NutritionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.service */ "./src/app/services/base/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pages_nutrition_nutrition_values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/nutrition/nutrition-values */ "./src/app/pages/nutrition/nutrition-values.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
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






var NutritionService = /** @class */ (function (_super) {
    __extends(NutritionService, _super);
    function NutritionService(http, platform) {
        var _this = _super.call(this, http, platform) || this;
        _this.http = http;
        _this.platform = platform;
        NutritionService_1.SET_PLATFORM(platform);
        return _this;
    }
    NutritionService_1 = NutritionService;
    NutritionService.prototype.getNutritionItems = function () {
        var result = [];
        for (var type in _pages_nutrition_nutrition_values__WEBPACK_IMPORTED_MODULE_4__["choices"]) {
            if (_pages_nutrition_nutrition_values__WEBPACK_IMPORTED_MODULE_4__["choices"][type] instanceof Array) {
                var options = _pages_nutrition_nutrition_values__WEBPACK_IMPORTED_MODULE_4__["choices"][type];
                for (var i = 0; i < options.length; i++) {
                    result.push({ type: type, name: options[i].name, unit: options[i].unit });
                }
            }
        }
        return Promise.resolve(result)
            .catch(NutritionService_1.HandleError);
    };
    NutritionService.prototype.getMacroCountingInfo = function (date) {
        var mDate = moment__WEBPACK_IMPORTED_MODULE_5__(date);
        return this.http.get(NutritionService_1.Url("nutritions/macro-counting/" + mDate.format('YYYY-MM-DD')), NutritionService_1.BaseOptions())
            .toPromise()
            .then(function (macroInfo) {
            macroInfo.track_date = moment__WEBPACK_IMPORTED_MODULE_5__(macroInfo.track_date);
            return macroInfo;
        })
            .catch(NutritionService_1.HandleError);
    };
    NutritionService.prototype.storeMacroCountingInfo = function (date, water) {
        date = (!(date instanceof moment__WEBPACK_IMPORTED_MODULE_5__) ? moment__WEBPACK_IMPORTED_MODULE_5__(date) : date);
        var data = {
            date: date.format('YYYY-MM-DD'),
            water: water
        };
        return this.http.post(NutritionService_1.Url('nutritions/macro-counting'), data, NutritionService_1.BaseOptions())
            .toPromise()
            .catch(NutritionService_1.HandleError);
    };
    NutritionService.prototype.patchMacroCountingInfo = function (id, date, water) {
        date = (!(date instanceof moment__WEBPACK_IMPORTED_MODULE_5__) ? moment__WEBPACK_IMPORTED_MODULE_5__(date) : date);
        var data = {
            date: date.format('YYYY-MM-DD'),
            water: water
        };
        return this.http.put(NutritionService_1.Url("nutritions/macro-counting/" + id), data, NutritionService_1.BaseOptions())
            .toPromise()
            .catch(NutritionService_1.HandleError);
    };
    NutritionService.prototype.updateMacroCountingInfo = function (macroInfo) {
        if (macroInfo.id) {
            return this.patchMacroCountingInfo(macroInfo.id, macroInfo.track_date, macroInfo.water_amount);
        }
        else {
            return this.storeMacroCountingInfo(macroInfo.track_date, macroInfo.water_amount);
        }
    };
    var NutritionService_1;
    NutritionService = NutritionService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], NutritionService);
    return NutritionService;
}(_base_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



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
//# sourceMappingURL=pages-nutrition-nutrition-module.js.map