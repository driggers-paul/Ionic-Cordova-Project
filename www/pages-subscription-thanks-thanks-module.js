(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-subscription-thanks-thanks-module"],{

/***/ "./src/app/pages/subscription/thanks/thanks.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/subscription/thanks/thanks.module.ts ***!
  \************************************************************/
/*! exports provided: ThanksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksPageModule", function() { return ThanksPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _thanks_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thanks.page */ "./src/app/pages/subscription/thanks/thanks.page.ts");
/* harmony import */ var _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/side-menu/side-menu.module */ "./src/app/components/side-menu/side-menu.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _thanks_page__WEBPACK_IMPORTED_MODULE_5__["ThanksPage"]
    }
];
var ThanksPageModule = /** @class */ (function () {
    function ThanksPageModule() {
    }
    ThanksPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_6__["SideMenuModule"]
            ],
            declarations: [_thanks_page__WEBPACK_IMPORTED_MODULE_5__["ThanksPage"]]
        })
    ], ThanksPageModule);
    return ThanksPageModule;
}());



/***/ }),

/***/ "./src/app/pages/subscription/thanks/thanks.page.html":
/*!************************************************************!*\
  !*** ./src/app/pages/subscription/thanks/thanks.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <app-menu-button></app-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Thank you</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <div class=\"thumbnail\">\r\n    <img\r\n      src=\"https://vignette.wikia.nocookie.net/castle-clash/images/4/4e/Celebration.png/revision/latest?cb=20170824172947\"\r\n      alt=\"\">\r\n  </div>\r\n  <ion-list>\r\n    <ion-item lines=\"none\">\r\n      <p>You have a Premium subscription. Awesome!</p>\r\n    </ion-item>\r\n    <ion-item>\r\n      <p>You can change your Workout and Nutrition preferences in My Profile.</p>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <div class=\"button global-margin-top-25\">\r\n    <ion-button color=\"primary\" expand=\"full\" routerDirection=\"root\" routerLink=\"/profile-page\">Update my Profile</ion-button>\r\n  </div>\r\n  <div class=\"button global-margin-top-25\">\r\n    <ion-button color=\"primary\" expand=\"full\" routerDirection=\"root\" routerLink=\"/messages\">Message my Advisor</ion-button>\r\n  </div>\r\n  <div class=\"button global-margin-top-25\">\r\n    <ion-button color=\"secondary\" expand=\"full\" routerDirection=\"root\" routerLink=\"/dashboard\">Back to Dashboard</ion-button>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/subscription/thanks/thanks.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/subscription/thanks/thanks.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thumbnail {\n  height: 100px;\n  width: 100px;\n  display: block;\n  margin: 30px auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3Vic2NyaXB0aW9uL3RoYW5rcy9FOlxcaW9uaWNcXFZlcnZlQ29tbWVyY2VcXE5ld0RldlxcbXRzdC1hcHAvc3JjXFxhcHBcXHBhZ2VzXFxzdWJzY3JpcHRpb25cXHRoYW5rc1xcdGhhbmtzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3Vic2NyaXB0aW9uL3RoYW5rcy90aGFua3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRodW1ibmFpbCB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/subscription/thanks/thanks.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/subscription/thanks/thanks.page.ts ***!
  \**********************************************************/
/*! exports provided: ThanksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksPage", function() { return ThanksPage; });
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


var ThanksPage = /** @class */ (function () {
    function ThanksPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ThanksPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thanks',
            template: __webpack_require__(/*! ./thanks.page.html */ "./src/app/pages/subscription/thanks/thanks.page.html"),
            styles: [__webpack_require__(/*! ./thanks.page.scss */ "./src/app/pages/subscription/thanks/thanks.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], ThanksPage);
    return ThanksPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-subscription-thanks-thanks-module.js.map