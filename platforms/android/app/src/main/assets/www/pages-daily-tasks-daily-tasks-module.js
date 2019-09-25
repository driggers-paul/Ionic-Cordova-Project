(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-daily-tasks-daily-tasks-module"],{

/***/ "./src/app/pages/daily-tasks/daily-tasks.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/daily-tasks/daily-tasks.module.ts ***!
  \*********************************************************/
/*! exports provided: DailyTasksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyTasksPageModule", function() { return DailyTasksPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _daily_tasks_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./daily-tasks.page */ "./src/app/pages/daily-tasks/daily-tasks.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _daily_tasks_page__WEBPACK_IMPORTED_MODULE_5__["DailyTasksPage"]
    }
];
var DailyTasksPageModule = /** @class */ (function () {
    function DailyTasksPageModule() {
    }
    DailyTasksPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_daily_tasks_page__WEBPACK_IMPORTED_MODULE_5__["DailyTasksPage"]]
        })
    ], DailyTasksPageModule);
    return DailyTasksPageModule;
}());



/***/ }),

/***/ "./src/app/pages/daily-tasks/daily-tasks.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/daily-tasks/daily-tasks.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button default-href=\"training-program\" text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Friday - Chest</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <section class=\"exercise\">\r\n    <div class=\"sets\">\r\n      <span class=\"heading\">Warm Up</span>\r\n      <ion-grid class=\"form\">\r\n        <ion-row>\r\n          <ion-col size=\"3\">\r\n            <span class=\"header\">Set</span>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <span class=\"header\">Time</span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-grid class=\"form\">\r\n        <ion-row>\r\n          <ion-col size=\"3\">\r\n            <p class=\"serial\">1</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <div class=\"icon\">\r\n            <ion-icon color=\"success\" ios=\"ios-checkmark\" md=\"md-checkmark\"></ion-icon>\r\n          </div>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n\r\n    <div class=\"sets\">\r\n      <span class=\"heading\">Standing EZ Bar Curl</span>\r\n      <ion-grid class=\"form\">\r\n        <ion-row>\r\n          <ion-col size=\"3\">\r\n            <span class=\"header\">Set</span>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <span class=\"header\">Weight</span>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <span class=\"header\">Reps</span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-grid class=\"form\">\r\n        <ion-row>\r\n          <ion-col size=\"3\">\r\n            <p class=\"serial\">1</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <div class=\"icon\">\r\n            <ion-icon color=\"success\" ios=\"ios-checkmark\" md=\"md-checkmark\"></ion-icon>\r\n          </div>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-grid class=\"form\">\r\n        <ion-row>\r\n          <ion-col size=\"3\">\r\n            <p class=\"serial\">2</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <div class=\"icon\">\r\n            <ion-icon color=\"success\" ios=\"ios-checkmark\" md=\"md-checkmark\"></ion-icon>\r\n          </div>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-grid class=\"form\">\r\n        <ion-row>\r\n          <ion-col size=\"3\">\r\n            <p class=\"serial\">3</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <div class=\"icon\">\r\n            <ion-icon color=\"success\" ios=\"ios-checkmark\" md=\"md-checkmark\"></ion-icon>\r\n          </div>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <div class=\"sets\">\r\n      <span class=\"heading\">Standing EZ Bar Curl</span>\r\n      <ion-grid class=\"form\">\r\n        <ion-row>\r\n          <ion-col size=\"3\">\r\n            <span class=\"header\">Set</span>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <span class=\"header\">Weight</span>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <span class=\"header\">Reps</span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-grid class=\"form\">\r\n        <ion-row>\r\n          <ion-col size=\"3\">\r\n            <p class=\"serial\">1</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <div class=\"icon\">\r\n            <ion-icon color=\"success\" ios=\"ios-checkmark\" md=\"md-checkmark\"></ion-icon>\r\n          </div>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-grid class=\"form\">\r\n        <ion-row>\r\n          <ion-col size=\"3\">\r\n            <p class=\"serial\">2</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <div class=\"icon\">\r\n            <ion-icon color=\"success\" ios=\"ios-checkmark\" md=\"md-checkmark\"></ion-icon>\r\n          </div>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-grid class=\"form\">\r\n        <ion-row>\r\n          <ion-col size=\"3\">\r\n            <p class=\"serial\">3</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <div class=\"icon\">\r\n            <ion-icon color=\"success\" ios=\"ios-checkmark\" md=\"md-checkmark\"></ion-icon>\r\n          </div>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <div class=\"sets\">\r\n      <span class=\"heading\">Standing EZ Bar Curl</span>\r\n      <ion-grid class=\"form\">\r\n        <ion-row>\r\n          <ion-col size=\"3\">\r\n            <span class=\"header\">Set</span>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <span class=\"header\">Weight</span>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <span class=\"header\">Reps</span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-grid class=\"form\">\r\n        <ion-row>\r\n          <ion-col size=\"3\">\r\n            <p class=\"serial\">1</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <div class=\"icon\">\r\n            <ion-icon color=\"success\" ios=\"ios-checkmark\" md=\"md-checkmark\"></ion-icon>\r\n          </div>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-grid class=\"form\">\r\n        <ion-row>\r\n          <ion-col size=\"3\">\r\n            <p class=\"serial\">2</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <div class=\"icon\">\r\n            <ion-icon color=\"success\" ios=\"ios-checkmark\" md=\"md-checkmark\"></ion-icon>\r\n          </div>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-grid class=\"form\">\r\n        <ion-row>\r\n          <ion-col size=\"3\">\r\n            <p class=\"serial\">3</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <div class=\"icon\">\r\n            <ion-icon color=\"success\" ios=\"ios-checkmark\" md=\"md-checkmark\"></ion-icon>\r\n          </div>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <div class=\"sets\">\r\n      <span class=\"heading\">Standing EZ Bar Curl</span>\r\n      <ion-grid class=\"form\">\r\n        <ion-row>\r\n          <ion-col size=\"3\">\r\n            <span class=\"header\">Set</span>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <span class=\"header\">Weight</span>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <span class=\"header\">Reps</span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-grid class=\"form\">\r\n        <ion-row>\r\n          <ion-col size=\"3\">\r\n            <p class=\"serial\">1</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <div class=\"icon\">\r\n            <ion-icon color=\"success\" ios=\"ios-checkmark\" md=\"md-checkmark\"></ion-icon>\r\n          </div>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-grid class=\"form\">\r\n        <ion-row>\r\n          <ion-col size=\"3\">\r\n            <p class=\"serial\">2</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <div class=\"icon\">\r\n            <ion-icon color=\"success\" ios=\"ios-checkmark\" md=\"md-checkmark\"></ion-icon>\r\n          </div>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-grid class=\"form\">\r\n        <ion-row>\r\n          <ion-col size=\"3\">\r\n            <p class=\"serial\">3</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <div class=\"icon\">\r\n            <ion-icon color=\"success\" ios=\"ios-checkmark\" md=\"md-checkmark\"></ion-icon>\r\n          </div>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n\r\n    <div class=\"sets\">\r\n      <span class=\"heading\">Warm Up</span>\r\n      <ion-grid class=\"form\">\r\n        <ion-row>\r\n          <ion-col size=\"3\">\r\n            <span class=\"header\">Set</span>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <span class=\"header\">Time</span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-grid class=\"form\">\r\n        <ion-row>\r\n          <ion-col size=\"3\">\r\n            <p class=\"serial\">1</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <input type=\"number\">\r\n          </ion-col>\r\n          <div class=\"icon\">\r\n            <ion-icon color=\"success\" ios=\"ios-checkmark\" md=\"md-checkmark\"></ion-icon>\r\n          </div>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </section>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/daily-tasks/daily-tasks.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/daily-tasks/daily-tasks.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  background-color: #f7f9fc; }\n\nion-icon {\n  color: var(--ion-color-icon);\n  font-size: var(--app-paragraph-size); }\n\nion-row {\n  align-items: center; }\n\nion-col {\n  height: 30px;\n  display: flex;\n  align-items: center; }\n\n.hide {\n  display: none; }\n\n.inline {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center; }\n\n.exercise .sets {\n  padding-bottom: 20px; }\n\n.exercise .heading {\n  font-size: 14px;\n  padding-left: 10px; }\n\n.exercise .header {\n  font-weight: bold;\n  padding: 10px 0;\n  padding-right: 30px;\n  text-transform: capitalize; }\n\n.exercise .serial {\n  width: 25px;\n  height: 25px;\n  font-size: 12px;\n  text-align: center;\n  background-color: #d5dde8;\n  border-radius: 50%;\n  font-weight: bold;\n  line-height: 25px; }\n\n.exercise input {\n  border: 1px solid var(--ion-color-brand-black);\n  background: var(--ion-color-primary-contrast);\n  border-radius: 4px;\n  padding: 0 4px;\n  width: 100%;\n  height: 30px; }\n\n.exercise input:focus {\n  outline: none;\n  border: 2px solid var(--ion-color-primary); }\n\n.exercise .icon {\n  position: absolute;\n  right: 15px; }\n\n.exercise .icon ion-icon {\n    font-size: 36px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFpbHktdGFza3MvRTpcXGlvbmljXFxWZXJ2ZUNvbW1lcmNlXFxOZXdEZXZcXG10c3QtYXBwL3NyY1xcYXBwXFxwYWdlc1xcZGFpbHktdGFza3NcXGRhaWx5LXRhc2tzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLDRCQUE0QjtFQUM1QixvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CLEVBQUE7O0FBR3JCO0VBRUksb0JBQW9CLEVBQUE7O0FBRnhCO0VBTUksZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQVB0QjtFQVdJLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDBCQUEwQixFQUFBOztBQWQ5QjtFQWtCSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBekJyQjtFQTZCSSw4Q0FBOEM7RUFDOUMsNkNBQTZDO0VBQzdDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFsQ2hCO0VBc0NJLGFBQWE7RUFDYiwwQ0FBMEMsRUFBQTs7QUF2QzlDO0VBMkNJLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBNUNmO0lBK0NNLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhaWx5LXRhc2tzL2RhaWx5LXRhc2tzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOWZjO1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1pY29uKTtcclxuICBmb250LXNpemU6IHZhcigtLWFwcC1wYXJhZ3JhcGgtc2l6ZSk7XHJcbn1cclxuXHJcbmlvbi1yb3cge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1jb2wge1xyXG4gIGhlaWdodDogMzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oaWRlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uaW5saW5lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZXhlcmNpc2Uge1xyXG4gIC5zZXRzIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcblxyXG4gIC5zZXJpYWwge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkZGU4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1icmFuZC1ibGFjayk7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcblxyXG4gIC5pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/daily-tasks/daily-tasks.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/daily-tasks/daily-tasks.page.ts ***!
  \*******************************************************/
/*! exports provided: DailyTasksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyTasksPage", function() { return DailyTasksPage; });
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

var DailyTasksPage = /** @class */ (function () {
    function DailyTasksPage() {
    }
    DailyTasksPage.prototype.ngOnInit = function () {
    };
    DailyTasksPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-daily-tasks',
            template: __webpack_require__(/*! ./daily-tasks.page.html */ "./src/app/pages/daily-tasks/daily-tasks.page.html"),
            styles: [__webpack_require__(/*! ./daily-tasks.page.scss */ "./src/app/pages/daily-tasks/daily-tasks.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DailyTasksPage);
    return DailyTasksPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-daily-tasks-daily-tasks-module.js.map