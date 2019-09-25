(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-subscription-subscription-module"],{

/***/ "./src/app/pages/subscription/subscription.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/subscription/subscription.module.ts ***!
  \***********************************************************/
/*! exports provided: SubscriptionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPageModule", function() { return SubscriptionPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _subscription_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscription.page */ "./src/app/pages/subscription/subscription.page.ts");
/* harmony import */ var _components_logo_logo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/logo/logo.module */ "./src/app/components/logo/logo.module.ts");
/* harmony import */ var _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/side-menu/side-menu.module */ "./src/app/components/side-menu/side-menu.module.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/in-app-purchase-2/ngx */ "./node_modules/@ionic-native/in-app-purchase-2/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { InAppPurchase } from '@ionic-native/in-app-purchase/ngx';



var routes = [
    {
        path: '',
        component: _subscription_page__WEBPACK_IMPORTED_MODULE_5__["SubscriptionPage"]
    }
];
var SubscriptionPageModule = /** @class */ (function () {
    function SubscriptionPageModule() {
    }
    SubscriptionPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_logo_logo_module__WEBPACK_IMPORTED_MODULE_6__["LogoModule"],
                _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_7__["SideMenuModule"]
            ],
            declarations: [_subscription_page__WEBPACK_IMPORTED_MODULE_5__["SubscriptionPage"]],
            providers: [
                _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppPurchase2"],
                _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]
            ]
        })
    ], SubscriptionPageModule);
    return SubscriptionPageModule;
}());



/***/ }),

/***/ "./src/app/pages/subscription/subscription.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/subscription/subscription.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <app-menu-button></app-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Go Premium</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"premium-header-container\">\r\n        <div class=\"premium-header-black\"></div>\r\n        <div class=\"premium-header\">\r\n            <div class=\"premium-header-box\">\r\n                <div class=\"premium-logo\">\r\n                    <img id=\"logo\"\r\n                         src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTIuMjkgMjQ5LjEyIj48dGl0bGU+QXNzZXQgMTwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBkPSJNMCwwSDE1MVYxOTEuMDhIMFpNNC44NCwxODYuMkgxNDYuMTlWNC44N0g0Ljg0WiIvPjxwYXRoIGQ9Ik0xMzUuMzYsMjM4LjI0aC00Ljgzdi0xLjE4YzAtNC44OC4wNi05Ljc3LDAtMTQuNjVhMTMuODgsMTMuODgsMCwwLDAtLjcyLTQuMzksNC45Miw0LjkyLDAsMCwwLTYuODYtMi44Niw2LjIzLDYuMjMsMCwwLDAtMy45Miw0LjY2LDI2Ljc3LDI2Ljc3LDAsMCwwLS41NCw0LjcxYy0uMDcsNC4yLDAsOC40LDAsMTIuNnYxLjFoLTQuNzVWMjExLjc2aDQuMTNjMCwxLjEyLDAsMi4yNSwwLDMuMzhhMi43OSwyLjc5LDAsMCwwLC4yNi43NSwyLjkzLDIuOTMsMCwwLDAsLjYyLS41Myw5LjQ2LDkuNDYsMCwwLDEsMTAuNzYtMy45Miw3LjA1LDcuMDUsMCwwLDEsNC4yNSwzLjVsLjQzLjc2czAsMCwuMjIuMTNjLjY2LS43LDEuMzMtMS40NSwyLTIuMTdhOS4xNiw5LjE2LDAsMCwxLDE0LjUyLDIuMjUsMTIuNzIsMTIuNzIsMCwwLDEsMS4zMyw1LjY2Yy4wNSw1LjQ0LDAsMTAuODcsMCwxNi4zMWEzLDMsMCwwLDEtLjA3LjM1aC00Ljc3di0xYzAtNC44NS4wNi05LjcsMC0xNC41NWExNC4yMSwxNC4yMSwwLDAsMC0uNzgtNC40OCw1LjE4LDUuMTgsMCwwLDAtOC0yLjQzLDcuMTQsNy4xNCwwLDAsMC0zLjI0LDYuMTJ2MTYuMzlaIi8+PHBhdGggZD0iTTYuNTgsMjM0LjgzdjE0LjI5SDEuNzZjLS4zMS0xMi40NS4zNy0yNC45MS0uMzgtMzcuNEg1Ljk0djMuODRjLjIyLS4xMy4zNC0uMTYuNC0uMjQsMi44NS0zLjYzLDYuNzMtNC42OCwxMS4wNy00LjA4czcuMjcsMy4zNiw4LjcyLDcuNDZhMTYuODMsMTYuODMsMCwwLDEtLjkxLDEzLjkxLDExLjIsMTEuMiwwLDAsMS0xNC44OSw1LjE2LDExLjQsMTEuNCwwLDAsMS0yLTEuMjdDNy43OCwyMzYuMDUsNy4yOCwyMzUuNDksNi41OCwyMzQuODNabTAtOS44N2guMDZhMTguNzMsMTguNzMsMCwwLDAsLjA2LDQuMzcsNy4zNyw3LjM3LDAsMCwwLDYuMSw1Ljg0QTcuNDksNy40OSwwLDAsMCwyMC44OSwyMzFhMTMuMTYsMTMuMTYsMCwwLDAsLjYzLTEwLjYyQTEwLDEwLDAsMCwwLDE5LDIxNi42NWE2LjYzLDYuNjMsMCwwLDAtNy42OS0xLjM0Yy0yLjgyLDEuMzYtNC43NCwzLjUyLTQuNzIsNi45MUM2LjU5LDIyMy4xMyw2LjU4LDIyNCw2LjU4LDIyNVoiLz48cGF0aCBkPSJNMzgsMjM4LjIzSDMzLjI1VjE5OS4wNUgzOHYxNi4zNmExNC4zOCwxNC4zOCwwLDAsMSwxLjktMi4xNywxMC4yMiwxMC4yMiwwLDAsMSwxMC42Ny0xLjM0YzMuNTQsMS40Niw0LjgyLDQuNTIsNSw4LjA4LjI5LDYsLjQzLDEyLC42MywxOGEyLjQ0LDIuNDQsMCwwLDEtLjA2LjI3SDUwLjc3YzAtLjMxLDAtLjY1LDAtMSwwLTQuNzEsMC05LjQzLDAtMTQuMTVhMTguODIsMTguODIsMCwwLDAtLjM5LTQsNS41Myw1LjUzLDAsMCwwLTcuNzEtNCw4LjU2LDguNTYsMCwwLDAtNC4zOSw0LjEyLDIuNSwyLjUsMCwwLDAtLjE5LDEuMTNjMCw1LjU3LDAsMTEuMTQsMCwxNi43WiIvPjxwYXRoIGQ9Ik02MS40NSwyMjQuNzhhNDQuMzMsNDQuMzMsMCwwLDEsLjc5LTQuNDksMTIuMDksMTIuMDksMCwwLDEsMTEuNDgtOS4xMiwxNy44MSwxNy44MSwwLDAsMSw1Ljg2LjY4LDExLjI2LDExLjI2LDAsMCwxLDguMDYsOC41M2MxLjMxLDUuMzkuNjUsMTAuNTMtMy4zOSwxNC42M3MtOC44NCw0Ljg5LTE0LjA2LDMtNy44Ni01Ljk1LTguNTEtMTEuMzdjLS4wNy0uNjEtLjA3LTEuMjMtLjEtMS44NVpNNjcsMjI1YTEzLjM2LDEzLjM2LDAsMCwwLDEuMDgsNS41M2MxLjM1LDIuOTUsMy41NSw0LjcyLDYuOSw0LjY4czUuNTUtMS44OCw2Ljc2LTQuODdhMTQuNDksMTQuNDksMCwwLDAtLjA2LTExLjE0LDYuNzcsNi43NywwLDAsMC02LjU4LTQuNTEsNyw3LDAsMCwwLTYuNzcsNC4wOEExMy43MywxMy43MywwLDAsMCw2NywyMjVaIi8+PHBhdGggZD0iTTk5LjA5LDIzOC4yM2gtNC44VjIxMS43NGg0LjEzVjIxNmMxLjkyLTMuNzgsNS01LjA5LDkuMDgtNC44MnY0LjE5aC0xLjYxYTcsNywwLDAsMC02LjgsNi44OGMwLDUsMCwxMCwwLDE0LjkzWiIvPjxwYXRoIGQ9Ik04Ny41NiwzMi42MlYxNjguMDlINjYuNDZWNjAuNDdsLTE3LjM2LDE1TDM1Ljc3LDYyLjEzbDUuODgtNS4yNVE1NC44Myw0NS4xMiw2OCwzMy4zNWEyLjcxLDIuNzEsMCwwLDEsMi0uNzVjNS40NywwLDEwLjk0LDAsMTYuNDEsMFoiLz48cGF0aCBkPSJNOTMuMTgsNDkuNTljMSwuMTYsMiwuMjgsMywuNDkuMjMuMDUuNDMuMzguNTguNjFhNiw2LDAsMCwwLC42MiwxLjA4YzEsMSw0LjA4LDEuMSw1LjE4LjI3YTEuNzUsMS43NSwwLDAsMC0uMTYtM2MtMS4xMy0uNTUtMi4zNy0uODktMy41NC0xLjM4QTIyLjM4LDIyLjM4LDAsMCwxLDk1LjIsNDZjLTIuMTQtMS4zOS0yLjA5LTMuODMuMi01YTEwLjc5LDEwLjc5LDAsMCwxLDEwLC4wOUEyLjc0LDIuNzQsMCwwLDEsMTA3LDQzLjQ4bC0zLjQ3LjY0YTMuNjMsMy42MywwLDAsMC01LjM4LTEuOTQsMS4yOCwxLjI4LDAsMCwwLDAsMi4zOCwxOC40MywxOC40MywwLDAsMCwyLjUsMS4wN2MxLjM5LjU2LDIuODMsMSw0LjE3LDEuNjVzMi4zMSwxLjUyLDIuMiwzLjE1YTMuNTMsMy41MywwLDAsMS0yLjU4LDMuMjMsMTMuMTIsMTMuMTIsMCwwLDEtOC40NC4yMkEzLjczLDMuNzMsMCwwLDEsOTMuMTgsNDkuNTlaIi8+PHBhdGggZD0iTTExOS42Miw0MS43MWgtNC4xOXY4LjQ0YzAsMS42Ny41MiwyLjI0LDIuMTcsMi4zOC42NCwwLDEuMjkuMDYsMiwuMDl2MS43N2MtMi4xNCwwLTQuMzEuMy02LjM3LS42NmEyLjMzLDIuMzMsMCwwLDEtMS40OC0yLjM4Yy4wNi0yLjgzLDAtNS42NywwLTguNVY0MS43NGgtMi45M1YzOS44OGgyLjg1YzAtLjM1LjA3LS42LjA3LS44NiwwLTEuNTcsMC0xLjU3LDEuNTYtMi4wOWwyLjA3LS42NnYzLjU3aDQuMjFaIi8+PC9nPjwvZz48L3N2Zz4=\"/>\r\n                </div>\r\n                <h2 class=\"premium-header-text\">make it premium to make it personal!</h2>\r\n                <div class=\"premium-header-subtext\">Get better results with Premium:</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"premium-content\">\r\n        <div class=\"premium-feature\">\r\n            <div class=\"premium-feature-icon coach-access\">\r\n                <img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjE0LjI5IDIxNC4yOSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ye2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTN7b3BhY2l0eTowLjE0O21peC1ibGVuZC1tb2RlOm11bHRpcGx5O30uY2xzLTR7ZmlsbDojZmZmO308L3N0eWxlPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB4MT0iMTA3LjE1IiB4Mj0iMTA3LjE1IiB5Mj0iMjE0LjI5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDBhNmNlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA4NWNlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHRpdGxlPkFzc2V0IDk8L3RpdGxlPjxnIGNsYXNzPSJjbHMtMSI+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik03OC41OCwxNDQuMjVjLTEuODMsMS45NC0zLjgxLDMuMzgtNi40MywzLjY4YTkuMTEsOS4xMSwwLDAsMS0xMC4zOC05Yy0uMDYtNC42LDAtOS4yMSwwLTEzLjgxLDAtMS0uMjktMS4zNi0xLjI1LTEuNjgtMTQuNzItNC45My0yMy44OC0xNS0yNi0zMC4zNy0xLjI1LTktMS42OS0xOC4zNywxLjg1LTI3LjExLDYtMTQuODUsMTcuMTItMjMuMjUsMzMuMTktMjQsMTItLjUzLDI0LS4zOSwzNi4wNSwwLDE2LjM1LjU0LDMwLjY3LDEzLjA3LDMzLjc3LDI5LjE3Ljc1LDMuOS44LDcuOTQsMS4yLDEyLjIzaDMuODlBMzYuMTYsMzYuMTYsMCwwLDEsMTY5LDkyLjQ1YzcuODMsNi44NSwxMi4yMiwxNS41MSwxMi42NSwyNS45NC4yNyw2LjYzLjc4LDEzLjM0LS45NCwxOS44OC0zLjUsMTMuMjYtMTEuODIsMjIuMTEtMjQuOCwyNi40OGEyLjMsMi4zLDAsMCwwLTEuOSwyLjcyYy4wOSw0LjIyLDAsOC40NCwwLDEyLjY3YTkuMjEsOS4yMSwwLDAsMS0xNS44OSw2LjU5cS05LjUxLTkuNDUtMTguOTQtMTlhMy44MSwzLjgxLDAsMCwwLTMuMTItMS4zYy02LjE3LjI2LTEyLjIxLS4zNy0xNy45NS0yLjg5YTM3LDM3LDAsMCwxLTE4Ljg4LTE4Qzc5LjA5LDE0NS4xOSw3OC44NiwxNDQuNzgsNzguNTgsMTQ0LjI1Wm0tNy43LTUuODkuNzIuNThhNi45MSw2LjkxLDAsMCwxLC44Ny0xLjU2YzYuNzItNi43NSwxMy40OC0xMy40NywyMC4xOC0yMC4yNEE0LjEyLDQuMTIsMCwwLDEsOTYsMTE1LjcxYzIuNjUuMTEsNS4zMS4wNSw4LDAsMTIuNjMtLjIxLDI0LTkuMjksMjYuMjYtMjEuNzNhNzkuMjEsNzkuMjEsMCwwLDAsLjY3LTE3LjI5Yy0uNjEtMTQtMTIuODUtMjUuNTUtMjYuNzktMjUuNjZRODcuMDcsNTAuOTIsNzAsNTFDNTcsNTEuMTUsNDUuMiw2MS41Myw0My42Miw3NC40MWExMDkuNzIsMTA5LjcyLDAsMCwwLS4zOCwxMy45NEEyNy41MiwyNy41MiwwLDAsMCw2NS40LDExNS4xNGMxLjc4LjM2LDMuNi41Myw1LjQ4Ljc5Wm03NC4wOSwxOSwxLjI0LS4wOGMxMi43My0uNywyMy4zNy05LjUxLDI1LjctMjIsLjk0LTUsLjgtMTAuMzUuNjUtMTUuNTItLjM1LTExLjI3LTUuODMtMTkuNDQtMTUuODYtMjQuNTQtNC43Ny0yLjQyLTkuOTMtMi44LTE1LjE4LTIuNjYtMS4xNCwwLTEuNi4yNS0xLjg2LDEuNTNxLTQuNCwyMi0yNS43MywyOS4yNWMtNC43NCwxLjU5LTkuNjcsMS42LTE0LjYxLDEuNmEzLjc1LDMuNzUsMCwwLDAtMi4zNywxYy0zLjQ3LDMuMzQtNi44Myw2LjgtMTAuMjcsMTAuMTdhMS43NCwxLjc0LDAsMCwwLS41MiwyLjEyYzMuNTcsOS43OSwxMC4yOSwxNi4yNiwyMC41MiwxOC4zNyw0LjM5LjkxLDksLjU4LDEzLjU3LjcyYTMuMzQsMy4zNCwwLDAsMSwyLjU0LDFxMTAuMjQsMTAuMzEsMjAuNTUsMjAuNTZjLjQzLjQzLjg5LjgzLDEuNjMsMS41MloiLz48L2c+PC9nPjwvZz48L3N2Zz4=\" />\r\n            </div>\r\n            <div class=\"premium-feature-text\">\r\n                <div class=\"premium-feature-title\">Direct Access To Your Own Transphormation Advisor</div>\r\n                <div class=\"premium-feature-description\">\r\n                    <ul>\r\n                        <li>In app messaging with your Advisor</li>\r\n                        <li>They can view and help adjust your plan</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"premium-feature\">\r\n            <div class=\"premium-feature-icon meal-plan\">\r\n                <img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTk5IDE3OCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ye29wYWNpdHk6MC4xNDttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ze2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkFzc2V0IDg8L3RpdGxlPjxnIGNsYXNzPSJjbHMtMSI+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xNTkuMTYsMTQuMTVsNC4wNiwyLjY0Yy0xLjE1LDEuMjgtMi4wNSwyLjMzLTMsMy4zMy02LjUsNi43NS0xMywxMy40Ny0xOS41MSwyMC4yNS0xLjI5LDEuMzUtMi44OSwyLjg2LTEuMDcsNC44N2EyLjkxLDIuOTEsMCwwLDAsMi4xNywxLjE0LDUuMjgsNS4yOCwwLDAsMCwzLjA5LTEuNTdxNS41OC00LjcxLDExLjEzLTkuNDNjNC43Ni00LDkuNTMtOC4wNSwxNC4yMS0xMiw1LDMuOTEsNSwzLjk0LDEuNDUsOC4xNC01LjkzLDctMTEuOSwxMy44Ni0xNy43OCwyMC44NS0xLjM3LDEuNjItMy43MSwzLjM4LTEuMyw1LjcyYTMsMywwLDAsMCwyLjA1LDFjMS4zNywwLDIuNTEtMS4zNywzLjYyLTIuNDIsNi4yOC02LDEyLjQ4LTEyLDE4LjgzLTE3LjksMi4zNi0yLjE5LDMuNDItMy40Niw0LjMtMy40NnMxLjYzLDEuMzYsMy40LDQuNDd2My41NmMtNi40MSwxMS4xNi0xNS40NywyMC0yNS4xNywyOC4xNi00LjUxLDMuNzktOS41NCw2LTE1LDZhMjIsMjIsMCwwLDEtNy41NC0xLjM5LDQuNDQsNC40NCwwLDAsMC0xLjQ5LS4yOWMtMS40MSwwLTIuMzMuOTEtMy4zNiwyUTExMyw5OC4xLDkzLjczLDExOC4zMXEtMjAuMTIsMjEuMTMtNDAuMjIsNDIuMjZjLTEsMS4xLTIuMiwyLjA5LTMuMywzLjEySDQ4LjA4Yy00LjMyLTEuODQtOC4wNy00LjMzLTEwLjM0LTguNjUtMi4xNi00LjEtMi4xLTUuMiwxLjIzLTguMzZRNjguMzEsMTE4LjksOTcuNjksOTEuMTZjOC4xLTcuNjcsMTYuMTYtMTUuMzgsMjQuMzMtMjMsMS43Mi0xLjYsMi4xNS0yLjkxLDEuMTgtNS4yLTMuMTktNy41MS0yLjEyLTE0LjgsMi42Ni0yMS4xOUExMjguMjcsMTI4LjI3LDAsMCwxLDE1MiwxNi4yOWE0MC4yOCw0MC4yOCwwLDAsMSwzLjU4LTIuMTRoMy41Nm0wLTdIMTU1LjZhNy4wOCw3LjA4LDAsMCwwLTMuNTYsMWMtLjMxLjE5LS42NC4zNy0xLC41NWEyNS43OCwyNS43OCwwLDAsMC0zLjI0LDJjLTExLjM4LDguNTMtMjAuNCwxNy4zNC0yNy41NywyNi45MS02LDgtNy40NSwxNy4zOC00LjE0LDI2LjUyLTUuMzUsNS0xMC43MiwxMC4wOC0xNS45MSwxNWwtNy4zMyw2Ljk0TDcyLjU1LDEwNS4zcS0xOS4yLDE4LjE0LTM4LjM5LDM2LjNjLTIuMDYsMi00LjMsNC4zNC00LjgsOC0uNDYsMy4zNi44Myw2LjE1LDIuMTgsOC43MywzLjYxLDYuODgsOS42LDEwLjA1LDEzLjc4LDExLjg0YTcuMDYsNy4wNiwwLDAsMCwyLjc2LjU2aDIuMTNhNyw3LDAsMCwwLDQuOC0xLjljLjMyLS4zMS42NS0uNjEsMS0uOTEuODQtLjc2LDEuNzEtMS41NiwyLjU4LTIuNDhxMTIuODMtMTMuNDYsMjUuNjQtMjYuOTNMOTguOCwxMjMuMTNsMTIuNjktMTMuMzJxMTIuNTgtMTMuMjIsMjUuMTYtMjYuNDVhMjguNjUsMjguNjUsMCwwLDAsOCwxLjE3YzYuOSwwLDEzLjQ2LTIuNTgsMTkuNS03LjY2LDkuMDgtNy42MywxOS4zNS0xNy4xNywyNi43NC0zMGE3LDcsMCwwLDAsLjkzLTMuNDhWMzkuNzlhNyw3LDAsMCwwLS45Mi0zLjQ2bC0uMjgtLjVjLTIuMS0zLjY5LTQuMjYtNy41MS05LjItNy41MWgtLjIzYTguMjgsOC4yOCwwLDAsMCwwLTEuNTdjLS40MS00LjA1LTMuMTUtNi4xOC02LjYxLTguODlhNyw3LDAsMCwwLTQuMzEtMS40OGgwYzAtLjE3LDAtLjM0LS4wNS0uNTFhNyw3LDAsMCwwLTMuMTMtNWwtMi4zMS0xLjVMMTYzLDguMjhhNyw3LDAsMCwwLTMuODEtMS4xM1oiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0zMS4wOCwyMC4wN2EyNy4yLDI3LjIsMCwwLDEsNS4xMi41MmMxMi45NCwyLjQ3LDIzLjcxLDguNDksMzEuNjcsMTkuMjMsNS41LDcuNDEsNywxNS4zLDMuNywyNC4wOWE0Ljg0LDQuODQsMCwwLDAsMS4wOCw0LjE1YzUuNTQsNS41MSwxMS4yOSwxMC44MiwxNywxNi4xNWEyNS45NCwyNS45NCwwLDAsMCwyLjgsMkM4OSw5MCw4Ni4wOSw5My4xMyw4My4xMyw5Ni4xOWEyLjI5LDIuMjksMCwwLDEtMS42MS44NWMtLjk0LDAtMS43NC0uODYtMi41Mi0xLjY3LTUuMjUtNS40OC0xMC41Ny0xMC44OC0xNS43Mi0xNi40NkE0Ljc1LDQuNzUsMCwwLDAsNTkuNzMsNzdhNi4yMSw2LjIxLDAsMCwwLTIuMzEuNTJBMjIuNjQsMjIuNjQsMCwwLDEsNDksNzkuMjFhMjMuODUsMjMuODUsMCwwLDEtMTMuMjItNC4zQzIzLjg1LDY3LDE3LjE5LDU1LjY5LDE0LjU4LDQxLjc5Yy0uMTctLjkxLS40NS0xLjgxLS42OS0yLjcxVjM0LjhjLjg2LTIuMTcsMS40My00LjUyLDIuNjMtNi40OWExNiwxNiwwLDAsMSwxNC41Ni04LjI0bTAtN2gwYTIzLDIzLDAsMCwwLTIwLjU0LDExLjZBMjksMjksMCwwLDAsOCwzMC40M2MtLjIyLjY1LS40MywxLjI2LS42NSwxLjhhNy4wNyw3LjA3LDAsMCwwLS40OSwyLjU3djQuMjhhNy4yNiw3LjI2LDAsMCwwLC4yMiwxLjczYy4wOS4zMi4xNy42NS4yNiwxLC4xNC40OS4yNywxLC4zMywxLjMsMy4wOCwxNi4zOSwxMS4yNCwyOS4wNiwyNC4yNCwzNy42NkEzMC43NCwzMC43NCwwLDAsMCw0OSw4Ni4yMWEyOS4zNCwyOS4zNCwwLDAsMCw5Ljg2LTEuNzVjMy40NiwzLjczLDcsNy40MSwxMC40NiwxMXEyLjMxLDIuMzgsNC42MSw0Ljc4bDAsLjA1YzEuMTcsMS4yMywzLjYxLDMuNzgsNy41MiwzLjc4YTkuMTEsOS4xMSwwLDAsMCw2LjY1LTNjMi4wOS0yLjE3LDQuMTYtNC4zOSw2LjM1LTYuNzRMOTcuNTgsOTFhNyw3LDAsMCwwLTEtMTAuNDdjLS4yNy0uMi0uNTktLjQxLS45NC0uNjRhMTAuNzUsMTAuNzUsMCwwLDEtMS4xNy0uODNMOTIuNiw3Ny4zN0M4OCw3My4xMyw4My4zMyw2OC43NSw3OC44Myw2NC4zMmMzLjEyLTEwLDEuMzMtMTkuNjgtNS4zNC0yOC42Ny04LjYyLTExLjY0LTIwLjczLTE5LTM2LTIxLjk0YTM0LjI2LDM0LjI2LDAsMCwwLTYuNDQtLjY0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTExMy40OSwxMDcuNTZhMy4xMiwzLjEyLDAsMCwxLDIuMDcsMS4wNnEyMC4zOCwxOS4zNCw0MC44NCwzOC42YTUuMDcsNS4wNywwLDAsMSwxLjE4LDYuNDQsMTkuMzksMTkuMzksMCwwLDEtMTAuNTIsMTBoLTEuNDNjLTItMS40Ny00LjItMi42OS01Ljg4LTQuNDQtMTItMTIuNDktMjMuODEtMjUuMTMtMzUuNzktMzcuNjItMS45MS0yLTItMy4yNy4wNy01LjE2YTg5LjYzLDg5LjYzLDAsMCwwLDcuMTEtNy40NywzLjM4LDMuMzgsMCwwLDEsMi4zNS0xLjQ0bTAtN2gwYTEwLDEwLDAsMCwwLTcuNiwzLjgxLDg1LjY3LDg1LjY3LDAsMCwxLTYuNTUsNi45LDEwLjYyLDEwLjYyLDAsMCwwLTMuODQsNy40MWMtLjE1LDQuMSwyLjUzLDYuODgsMy40LDcuOCw2LDYuMjEsMTIsMTIuNTYsMTcuODEsMTguN3MxMiwxMi42MywxOCwxOC45MWEzMC4zOSwzMC4zOSwwLDAsMCw1LjA4LDRjLjYuNDEsMS4xNy43OSwxLjY3LDEuMTdhNyw3LDAsMCwwLDQuMTgsMS4zOGgxLjQzYTcuMDgsNy4wOCwwLDAsMCwyLjYxLS41LDI2LjI5LDI2LjI5LDAsMCwwLDE0LjIyLTEzLjUsMTIuMDcsMTIuMDcsMCwwLDAtMi42OS0xNC41NmwtMi40NS0yLjMxYy0xMi41OS0xMS44OC0yNS42LTI0LjE2LTM4LjM3LTM2LjI4YTkuODYsOS44NiwwLDAsMC02Ljg5LTNaIi8+PC9nPjwvZz48L2c+PC9zdmc+\" />\r\n            </div>\r\n            <div class=\"premium-feature-text\">\r\n                <div class=\"premium-feature-title\">Macro Counting or Meal Plan Based On Your Goals</div>\r\n                <div class=\"premium-feature-description\">\r\n                    <ul>\r\n                        <li>Personalized</li>\r\n                        <li>Select and track food to stay on your plan</li>\r\n                        <li>Meal plan automatically adjusts as you progress</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"premium-feature\">\r\n            <div class=\"premium-feature-icon multiple-workouts\">\r\n                <img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjEyIDEyMCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ye29wYWNpdHk6MC4xNDttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ze2ZpbGw6I2ZmZjtzdHJva2U6I2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+QXNzZXQgNzwvdGl0bGU+PGcgY2xhc3M9ImNscy0xIj48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTQ3LjgzLDIzLjYzYy4xMy0xLjI2LjIxLTIuMjguMzQtMy4yOUExMy43OCwxMy43OCwwLDAsMSw2MS44NCw4LjIzYzcsMCwxMy4xLDUsMTMuNjIsMTIuMDZzLjI0LDE0LjEuMzEsMjEuMTZjMCwxLDAsMiwwLDMuMTdIMTM2VjQxLjc3YzAtNi41LS4wOS0xMywwLTE5LjUxLjE1LTcsNC40OC0xMi4yNiwxMS0xMy42OUExMy40OSwxMy40OSwwLDAsMSwxNjIuMjYsMTZjMSwyLjI1LDEuMzMsNC44MywyLDcuMzRhMzUsMzUsMCwwLDEsNC44LTIuMTIsMTMuODMsMTMuODMsMCwwLDEsMTcuNjcsMTMuMTFjLjEsMy4zOSwwLDYuNzgsMCwxMC40NCwzLjU2LDAsNi44NywwLDEwLjE4LDAsNSwwLDcuMTgsMi4xOSw3LjIsN3EwLDguMzIsMCwxNi42NWMwLDQuNzMtMi4yOSw2LjkxLTcuMDcsNi45NGwtOS41MSwwYTQuMyw0LjMsMCwwLDAtLjc5LjI3YzAsMy4xNywwLDYuNDcsMCw5Ljc3YTEzLjksMTMuOSwwLDAsMS0xMS42OCwxMy44NiwxMy40NywxMy40NywwLDAsMS05LjE2LTEuN2MtLjYtLjM0LTEuMTktLjctMS44Ni0xLjA5YTQ2Ljc3LDQ2Ljc3LDAsMCwxLS44Myw1LjMsMTMuODIsMTMuODIsMCwwLDEtMTQuMzksMTAuMDZjLTYuNDQtLjQ4LTEyLTUuNDQtMTIuNTItMTJzLS4yMy0xMy0uMy0xOS40OWMwLTEuNTgsMC0zLjE2LDAtNC45SDc1LjkyYzAsLjgxLS4xNCwxLjY0LS4xNCwyLjQ4LDAsNi41OC4wNywxMy4xNiwwLDE5Ljc0LS4wOSw1LjgtMi42NSwxMC4yNi04LDEyLjc5YTEzLjE5LDEzLjE5LDAsMCwxLTE0LjM0LTEuNTMsMTMsMTMsMCwwLDEtNS4yNC05Yy0uMTQtMS4wOS0uMjQtMi4xOC0uMzgtMy41bC0xLjcsMUExMy44NywxMy44NywwLDAsMSwyNS4wNSw4NS43OGMtLjA5LTMuMzIsMC02LjY1LDAtMTAuMzctMy4yNywwLTYuNDEsMC05LjU0LDAtNS44OSwwLTcuODQtMS45NC03Ljg1LTcuODQsMC01LjMxLDAtMTAuNjMsMC0xNS45NCwwLTQuNjUsMi4yNi02LjgyLDYuODktNi44NiwzLjM5LDAsNi43OCwwLDEwLjQ3LDBhNzIuMTIsNzIuMTIsMCwwLDAsMC03LjUyQzIzLjY0LDI0LjQ0LDM2LjQ1LDE2LDQ3LjgzLDIzLjYzWm00LjgyLDM2LjU4aC4yMWMwLDEuODIsMCwzLjY1LDAsNS40Ny0uMDYsMTAuNTQtLjE3LDIxLjA4LS4xOCwzMS42MywwLDQuNzQsMi4yOSw4LjA4LDYuMjEsOS40Myw2LjQ2LDIuMjEsMTIuMTgtMi40NSwxMi4xOS0xMHEwLTM2LjUxLDAtNzNhMTcsMTcsMCwwLDAtLjM2LTMuNzcsOSw5LDAsMCwwLTExLjU3LTYuNTVjLTQuMTUsMS4zMS02LjQ1LDQuNjctNi40Nyw5LjcyQzUyLjYzLDM1LjQ4LDUyLjY1LDQ3Ljg0LDUyLjY1LDYwLjIxWm04OC0uMTJjMCwxMi4yMSwwLDI0LjQyLDAsMzYuNjNhMTQuNjMsMTQuNjMsMCwwLDAsLjcsNC42Niw5LDksMCwwLDAsOS44NCw1Ljc4LDkuMTIsOS4xMiwwLDAsMCw3LjgtOS4xM2MuMS00LjkxLS4xNC05LjgyLS4xNS0xNC43M3EwLTIwLjEsMC00MC4yYzAtNi43NC4yMS0xMy40Ny4xOS0yMC4yMSwwLTYuMS00LjEyLTEwLjE4LTkuNzItOS45Mi01LjA4LjIzLTguNjcsNC4zLTguNjgsMTBDMTQwLjY3LDM1LjM1LDE0MC43LDQ3LjcyLDE0MC43LDYwLjA5Wk03NS45LDcwLjU5aDU5Ljk0di0yMUg3NS45Wm0tMjgtMTAuNDJjMC04LjQ5LjA3LTE3LS4wNi0yNS40NWExMS4wNSwxMS4wNSwwLDAsMC0xLjMzLTUuMTUsOC42NSw4LjY1LDAsMCwwLTkuODctMy44OSw4LjkzLDguOTMsMCwwLDAtNi44NSw4LjlxLS4wOSwyNS40NiwwLDUwLjlBOS4xLDkuMSwwLDEsMCw0OCw4NS4zOEM0Ny43MSw3Nyw0Ny44OSw2OC41Nyw0Ny44OSw2MC4xN1ptMTE2LS4zaDBjMCw4LjU2LDAsMTcuMTMsMCwyNS42OWExMC41NCwxMC41NCwwLDAsMCwuNzgsNC4xMyw5LDksMCwwLDAsMTAuMDcsNUE5LjE3LDkuMTcsMCwwLDAsMTgyLDg1LjU0Yy4wOC03LjY5LDAtMTUuMzksMC0yMy4wOCwwLTkuMjcuMDUtMTguNTUsMC0yNy44MmE5LjA5LDkuMDksMCwxLDAtMTguMTgsMEMxNjQuMDcsNDMuMDYsMTYzLjksNTEuNDcsMTYzLjksNTkuODdabS0xMzktMTAuNDFjLTMuNzYsMC03LjM4LS4wOC0xMSwuMDktLjU2LDAtMS41MiwxLjItMS41MywxLjg2LS4xMiw1Ljc4LS4xNCwxMS41NywwLDE3LjM1YTIuNjYsMi42NiwwLDAsMCwxLjc3LDEuODhjMy41My4xOCw3LjA4LjA4LDEwLjc1LjA4Wm0xNjIsMjEuMjdjMy43NSwwLDcuMzEuMDksMTAuODYtLjA4YTIuNDcsMi40NywwLDAsMCwxLjY4LTEuNzJxLjE5LTguNzksMC0xNy41OWEyLjQ2LDIuNDYsMCwwLDAtMS42LTEuOGMtMy42MS0uMTctNy4yMi0uMDktMTAuOTUtLjA5WiIvPjwvZz48L2c+PC9nPjwvc3ZnPg==\" />\r\n            </div>\r\n            <div class=\"premium-feature-text\">\r\n                <div class=\"premium-feature-title\">Multiple Workout Options</div>\r\n                <div class=\"premium-feature-description\">\r\n                    <ul>\r\n                        <li>Choose from different styles and \u0003intensities of daily workouts</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"premium-feature\">\r\n            <div class=\"premium-feature-icon live-stream\">\r\n                <img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTg5IDE2OSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ye29wYWNpdHk6MC4xNDttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ze2ZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjZweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkFzc2V0IDQ8L3RpdGxlPjxnIGNsYXNzPSJjbHMtMSI+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik05NC4zMSwxNTguNTNINzcuNzhjLTEuMzIsMC0xLjYyLS4zNC0xLjM5LTEuNjZxMS44NS0xMSwzLjcxLTIyYzEtNS45MSwyLTExLjgyLDMtMTcuNzIsMS40Mi04LjM3LDIuODctMTYuNzQsNC4yOS0yNS4xMS42LTMuNTMsMS4xNS03LjA3LDEuNzUtMTAuNi4xLS41Ni0uMTQtLjcyLS41Ni0uOTJBMTQuMDgsMTQuMDgsMCwwLDEsODAuMyw2OS44OWExNC4zMywxNC4zMywwLDEsMSwyOC4xNy4zMSwxMy42MiwxMy42MiwwLDAsMS03Ljc1LDEwQTEuMzUsMS4zNSwwLDAsMCw5OS44Myw4MmMxLjQzLDguMTcsMi43OCwxNi4zNiw0LjE1LDI0LjU0cTIsMTIsNCwyNCwyLjIyLDEzLjI0LDQuNDIsMjYuNDhjLjE5LDEuMTctLjE1LDEuNTktMS4zMSwxLjU5TDk2LDE1OC41NEg5NC4zMVoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xNDUuNTcsMTlsOS4zMS05LjJjMzEsMjkuNTYsMzMsODMuNTMuMjgsMTE1LjQ4TDE0NS44LDExNmMxMy0xMy41NCwxOS44Ny0yOS42OSwxOS44MS00OC41M1MxNTguNjMsMzIuNTQsMTQ1LjU3LDE5WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTMzLjcyLDkuNTEsNDMsMTguODhDMzAsMzIuMzUsMjMuMTgsNDguNTEsMjMuMjIsNjcuMzhzNywzNC45NCwyMCw0OC40N2wtOS4zLDkuMjNDNC4yOSw5Ni44NC0uMyw0My41OSwzMy43Miw5LjUxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTEzOC41NCwxMDguNzhsLTkuNDQtOS40MmM4LjU1LTguODksMTMtMTkuNSwxMy0zMS44N3MtNC41Ny0yMy0xMy4xMi0zMS44MWw5LjM1LTkuMzdhNTcuMDcsNTcuMDcsMCwwLDEsMTYuNywzNUMxNTYuOTEsNzkuNjEsMTUxLjIxLDk1LjQxLDEzOC41NCwxMDguNzhaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNNTAuNDYsMjYuMTNsOS4zMiw5LjM2QzUxLjI1LDQ0LjM2LDQ2LjcsNTQuOTQsNDYuNzIsNjcuMzJzNC41MywyMywxMywzMS44NGwtOS4zMSw5LjI4QzI4LDg2LjYzLDI3LjQ3LDQ4LjY3LDUwLjQ2LDI2LjEzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTY2LjY2LDQyLjIybDkuMTQsOS41YTIyLDIyLDAsMCwwLTYuMzcsMTUuNzEsMjIuMywyMi4zLDAsMCwwLDYuNDYsMTUuNzRsLTkuMjcsOS4yOEM1Mi4yMiw3OC42OCw1My4xNiw1NSw2Ni42Niw0Mi4yMloiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xMTMsNTEuNzJsOS4yMy05LjI3YzEzLDEyLDE0Ljg3LDM1Ljg1LjE1LDUwLjA5bC05LjI3LTkuMzJBMjIuNTcsMjIuNTcsMCwwLDAsMTEzLDUxLjcyWiIvPjwvZz48L2c+PC9nPjwvc3ZnPg==\" />\r\n            </div>\r\n            <div class=\"premium-feature-text\">\r\n                <div class=\"premium-feature-title\">Daily Live Streams</div>\r\n                <div class=\"premium-feature-description\">\r\n                    <ul>\r\n                        <li>Interact live with top 1st Phorm advisors and registered dietitians</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"premium-feature\">\r\n            <div class=\"premium-feature-icon exclusive-content\">\r\n                <img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTQ0IDE1MiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ye29wYWNpdHk6MC4xNDttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ze2ZpbGw6I2ZmZjt9LmNscy00e2ZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MC41cHg7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Bc3NldCAzPC90aXRsZT48ZyBjbGFzcz0iY2xzLTEiPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNNzIuMjMsMzQuNzFjLjg2LS41MiwxLjcxLTEsMi41MS0xLjUzLDcuOS01LjQyLDE2LjU0LTYuNTIsMjUuNzItNC4zNCwyLjkzLjY5LDUuOCwxLjY3LDguNzQsMi4yM2ExMDMuNiwxMDMuNiwwLDAsMCwxMS42LDEuN2MzLjg1LjI4LDcuNzMsMCwxMS42LjA4YTMuOTMsMy45MywwLDAsMSw0LjA4LDQuMjhxLS4zMSwyMS40My0uNjUsNDIuODYtLjM3LDI3LjUzLS43Miw1NS4wNmMtLjA1LDMuNTctMS4zMSw0LjY0LTQuOTEsNC44NC0xMS4xNi42MS0yMi4wOS0xLTMzLTMuMjQtOS0xLjg2LTE2LjY4LjU2LTIzLjMyLDYuNzctMi4yNCwyLjEtNC4zOCwxLjkyLTYuNDMtLjQxbC0xLTEuMThjLTYuMTItNi45Mi0xNC03Ljg3LTIyLjE0LTUuNDdhMTAwLjI3LDEwMC4yNywwLDAsMS0yMywzLjU0Yy0zLjIuMTctNi40Mi4xMy05LjYzLjExLTIuNjgsMC00LjEtMS40Ny00LjExLTQuMTdxMC00OS4wNywwLTk4LjE0YzAtMi44OCwxLjQ0LTQuMjcsNC40MS00LjI5LDQuMzMsMCw4LjY1LDAsMTMsMGE0LjYxLDQuNjEsMCwwLDAsLjY3LS4xOHYtMmMwLTYuMzYsMC0xMi43MiwwLTE5LjA4LDAtMy4zMywxLjY5LTQuOTMsNS00LjMzLDUuMjEsMSwxMC40MiwyLDE1LjU0LDMuM0EzMi41MiwzMi41MiwwLDAsMSw2NSwyNC4zM0M2Ny40MSwyNy43NSw2OS43OSwzMS4xOSw3Mi4yMywzNC43MVptNTYuNTUsNS43N2ExMy42MSwxMy42MSwwLDAsMC0xLjM4LS4wOCw3MSw3MSwwLDAsMS0yNy4xLTMuNTdjLTguNzgtMy0xNi43Ny0xLjM0LTI0LDQuM2EuNjIuNjIsMCwwLDEtLjE3LjExLDIuMzksMi4zOSwwLDAsMC0xLjMzLDIuNTVxLjA2LDQzLjY4LDAsODcuMzRjMCwuNjIuMDYsMS4yNC4xLDIsLjQ4LS4yNC43Ny0uMzYsMS0uNTJhMjguNjEsMjguNjEsMCwwLDEsMTkuODUtMy43N2M2LjIxLDEsMTIuMzgsMi4yOSwxOC42MiwzLDQuMy40Nyw4LjY5LjA5LDEzLjE4LjA5QzEyOCwxMDEuNTIsMTI4LjM5LDcxLjEyLDEyOC43OCw0MC40OFpNNjYuOTQsMTI1LjE1YzAtLjM3LjA2LS43NC4wNi0xLjExcTAtNDAuODIsMC04MS42MmE0LjI0LDQuMjQsMCwwLDAtLjU0LTIuMjNjLTIuOTItNC40Mi01Ljc0LTguOTMtOC45My0xMy4xNS02LjA1LTgtMTUuMjEtOS40NS0yNC4zLTExLjMxdjkwLjczQzQ2LjE0LDEwOS42NSw1OC40MSwxMTMuODUsNjYuOTQsMTI1LjE1Wm0tNTEuNzksNy4zOWM4LjM1LS4yOCwxNi41My0uMTYsMjQuMzUtMi43Miw2LTEuOTUsMTItMiwxOC4wNy0xLjQzLjUzLjA1LDEuMDcuMDgsMS42LjEybC4zNS0uNjRjLTMtMi4zOS01Ljc3LTUuMTQtOS03LjA4QTYyLjE5LDYyLjE5LDAsMCwwLDMwLDExMy42Yy0zLjYtLjY4LTQuNDItMS42NC00LjQyLTUuMjVWNDEuMTFIMTUuMTVaIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNNzIuMjMsMzQuNzFjLjg2LS41MiwxLjcxLTEsMi41MS0xLjUzLDcuOS01LjQyLDE2LjU0LTYuNTIsMjUuNzItNC4zNCwyLjkzLjY5LDUuOCwxLjY3LDguNzQsMi4yM2ExMDMuNiwxMDMuNiwwLDAsMCwxMS42LDEuN2MzLjg1LjI4LDcuNzMsMCwxMS42LjA4YTMuOTMsMy45MywwLDAsMSw0LjA4LDQuMjhxLS4zMSwyMS40My0uNjUsNDIuODYtLjM3LDI3LjUzLS43Miw1NS4wNmMtLjA1LDMuNTctMS4zMSw0LjY0LTQuOTEsNC44NC0xMS4xNi42MS0yMi4wOS0xLTMzLTMuMjQtOS0xLjg2LTE2LjY4LjU2LTIzLjMyLDYuNzctMi4yNCwyLjEtNC4zOCwxLjkyLTYuNDMtLjQxbC0xLTEuMThjLTYuMTItNi45Mi0xNC03Ljg3LTIyLjE0LTUuNDdhMTAwLjI3LDEwMC4yNywwLDAsMS0yMywzLjU0Yy0zLjIuMTctNi40Mi4xMy05LjYzLjExLTIuNjgsMC00LjEtMS40Ny00LjExLTQuMTdxMC00OS4wNywwLTk4LjE0YzAtMi44OCwxLjQ0LTQuMjcsNC40MS00LjI5LDQuMzMsMCw4LjY1LDAsMTMsMGE0LjYxLDQuNjEsMCwwLDAsLjY3LS4xOHYtMmMwLTYuMzYsMC0xMi43MiwwLTE5LjA4LDAtMy4zMywxLjY5LTQuOTMsNS00LjMzLDUuMjEsMSwxMC40MiwyLDE1LjU0LDMuM0EzMi41MiwzMi41MiwwLDAsMSw2NSwyNC4zM0M2Ny40MSwyNy43NSw2OS43OSwzMS4xOSw3Mi4yMywzNC43MVptNTYuNTUsNS43N2ExMy42MSwxMy42MSwwLDAsMC0xLjM4LS4wOCw3MSw3MSwwLDAsMS0yNy4xLTMuNTdjLTguNzgtMy0xNi43Ny0xLjM0LTI0LDQuM2EuNjIuNjIsMCwwLDEtLjE3LjExLDIuMzksMi4zOSwwLDAsMC0xLjMzLDIuNTVxLjA2LDQzLjY4LDAsODcuMzRjMCwuNjIuMDYsMS4yNC4xLDIsLjQ4LS4yNC43Ny0uMzYsMS0uNTJhMjguNjEsMjguNjEsMCwwLDEsMTkuODUtMy43N2M2LjIxLDEsMTIuMzgsMi4yOSwxOC42MiwzLDQuMy40Nyw4LjY5LjA5LDEzLjE4LjA5QzEyOCwxMDEuNTIsMTI4LjM5LDcxLjEyLDEyOC43OCw0MC40OFpNNjYuOTQsMTI1LjE1YzAtLjM3LjA2LS43NC4wNi0xLjExcTAtNDAuODIsMC04MS42MmE0LjI0LDQuMjQsMCwwLDAtLjU0LTIuMjNjLTIuOTItNC40Mi01Ljc0LTguOTMtOC45My0xMy4xNS02LjA1LTgtMTUuMjEtOS40NS0yNC4zLTExLjMxdjkwLjczQzQ2LjE0LDEwOS42NSw1OC40MSwxMTMuODUsNjYuOTQsMTI1LjE1Wm0tNTEuNzksNy4zOWM4LjM1LS4yOCwxNi41My0uMTYsMjQuMzUtMi43Miw2LTEuOTUsMTItMiwxOC4wNy0xLjQzLjUzLjA1LDEuMDcuMDgsMS42LjEybC4zNS0uNjRjLTMtMi4zOS01Ljc3LTUuMTQtOS03LjA4QTYyLjE5LDYyLjE5LDAsMCwwLDMwLDExMy42Yy0zLjYtLjY4LTQuNDItMS42NC00LjQyLTUuMjVWNDEuMTFIMTUuMTVaIi8+PC9nPjwvZz48L2c+PC9zdmc+\" />\r\n            </div>\r\n            <div class=\"premium-feature-text\">\r\n                <div class=\"premium-feature-title\">Exclusive Content and Education</div>\r\n                <div class=\"premium-feature-description\">\r\n                    <ul>\r\n                        <li>Unlock information that will help you \u0003maximize results</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"fine-print\">\r\n            <ul>\r\n                <li>The subscription length is 1 year for USD $47.99, 3 months for $14.99, or 1 month for $5.99. All prices are in U.S. dollars.</li>\r\n                <li *ngIf=\"isIos\">For iOS purchases, payment will be charged to your iTunes Account when the 1 month trial period ends.</li>\r\n                <li *ngIf=\"isAndroid\">For Android purchases, payment will be charged to your Google Play Account when the 30-day trial ends.</li>\r\n                <li>The subscription automatically renews unless auto-renew is turned off at least 24-hours before the end of the current period.</li>\r\n                <li>Any unused portion of a free trial period, if offered, will be forfeited when the user purchases a subscription to that service, where applicable.</li>\r\n                <li>Your account will be charged for renewal within 24-hours prior to the end of the current period.</li>\r\n                <li>Subscriptions may be managed via Account Settings after purchase.</li>\r\n                <li>Read our <a href=\"#\" (click)=\"openUrl('https://mytransphormationstartstoday.com/privacy-policy/', $event)\">Privacy Policy</a> and\r\n                    <a href=\"#\" (click)=\"openUrl('https://mytransphormationstartstoday.com/terms-conditions/', $event)\">Terms &amp; Conditions</a>.\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n        <div padding class=\"button global-margin-top-25\" *ngIf=\"isMobile\">\r\n            <div class=\"wob\">\r\n                <span>Choose a subscription:</span>\r\n            </div>\r\n            <div text-center class=\"promo\">Your first 30 days are <strong>FREE</strong>!</div>\r\n            <ion-button margin-top strong=\"true\" (click)=\"handleSubscription('yearly')\" expand=\"full\">\r\n                1 Year for $47.99<br/>($3.99/mo)\r\n            </ion-button>\r\n            <ion-button margin-top strong=\"true\" (click)=\"handleSubscription('quarterly')\" expand=\"full\">\r\n                3 Months for $14.99<br/>($4.99/mo)\r\n            </ion-button>\r\n            <ion-button margin-top strong=\"true\" (click)=\"handleSubscription('monthly')\" expand=\"full\">\r\n                1 Month<br/>($5.99/mo)\r\n            </ion-button>\r\n            <div text-center padding-top *ngIf=\"showExtra\">or...</div>\r\n            <ion-button *ngIf=\"showExtra\" margin-top strong=\"true\" color=\"secondary\" (click)=\"close()\" expand=\"full\">\r\n                Skip Premium for now...\r\n            </ion-button>\r\n        </div>\r\n\r\n        <div class=\"iconsBox\" *ngIf=\"!isMobile\">\r\n            <ion-button type=\"button\">\r\n                <ion-icon name=\"logo-android\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button type=\"button\">\r\n                <ion-icon name=\"logo-apple\"></ion-icon>\r\n            </ion-button>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/subscription/subscription.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/subscription/subscription.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".premium-header-container {\n  positive: relative; }\n  .premium-header-container .premium-logo {\n    background: #fff;\n    width: 16vw;\n    max-width: 60px;\n    padding: 4px;\n    left: 42vw; }\n  .premium-header-container .premium-header-black {\n    height: 10vh;\n    background: #000; }\n  .premium-header-container .premium-header-box {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.15);\n    background-image: linear-gradient(to bottom, #000, #000 18%, #ffffff 18%);\n    padding: 4px;\n    margin: -10vh 32vw 4vh; }\n  .premium-header-container .premium-header-text {\n    text-transform: uppercase;\n    font-family: var(--ion-1p-font-dominant);\n    text-align: center; }\n  .premium-header-container .premium-header-subtext {\n    text-align: center;\n    font-weight: bold;\n    color: var(--ion-1p-blue-primary); }\n  .premium-feature {\n  margin: 1em;\n  background: #fff;\n  padding: 12px;\n  display: flex; }\n  .premium-feature .premium-feature-icon {\n    display: flex;\n    flex-shrink: 0;\n    align-content: center;\n    justify-content: center;\n    width: 48px;\n    height: 48px;\n    padding: 4px;\n    border-radius: 50%;\n    background-image: linear-gradient(to bottom, #00A6CE, #0085CE); }\n  .premium-feature .premium-feature-icon.coach-access {\n      padding: 2px; }\n  .premium-feature .premium-feature-icon.meal-plan {\n      padding: 6px; }\n  .premium-feature .premium-feature-icon.live-stream {\n      padding-top: 8px; }\n  .premium-feature .premium-feature-icon.exclusive-content {\n      padding: 10px; }\n  .premium-feature .premium-feature-text {\n    margin-left: 1em; }\n  .premium-feature .premium-feature-title {\n    font-size: var(--app-header-h5-size); }\n  .premium-feature .premium-feature-description ul {\n    list-style-type: none;\n    padding-left: 0;\n    margin: 4px 0;\n    color: var(--ion-1p-blue-primary); }\n  .premium-feature .premium-feature-description li:before {\n    content: \"-\";\n    text-indent: -5px; }\n  .fine-print {\n  color: #fff;\n  padding-right: 16px; }\n  ion-content {\n  --background: var(--ion-1p-blue-primary); }\n  div.button {\n  --ion-color-primary: white;\n  --ion-color-primary-contrast: black; }\n  .wob {\n  display: flex; }\n  .wob span {\n    font-size: var(--app-header-h4-size);\n    margin: 0 auto;\n    font-family: var(--ion-1p-font-dominant);\n    text-transform: uppercase;\n    color: #fff;\n    background: #000;\n    padding: 4px 5px; }\n  p, li {\n  font-size: 14px; }\n  p a, li a {\n    color: var(--ion-1p-darker); }\n  .promo {\n  font-size: 1.5rem; }\n  .iconsBox {\n  display: flex;\n  justify-content: space-around;\n  align-items: center; }\n  .iconsBox ion-button {\n    --width: 150px;\n    --height: 48px;\n    width: 150px;\n    height: 48px; }\n  .iconsBox ion-icon {\n    font-size: 30px;\n    padding: 10px 0; }\n  @media screen and (max-width: 768px) {\n  .premium-header-container .premium-logo {\n    width: 16vw;\n    max-width: none; }\n  .premium-header-container .premium-header-box {\n    margin: -10vh 14vw 4vh; }\n  p, li {\n    font-size: 12px; }\n  .iconsBox ion-button {\n    --width: 100px;\n    --height: 40px;\n    width: 100px;\n    height: 40px; } }\n  h2 {\n  font-size: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3Vic2NyaXB0aW9uL0U6XFxpb25pY1xcVmVydmVDb21tZXJjZVxcTmV3RGV2XFxtdHN0LWFwcC9zcmNcXGFwcFxccGFnZXNcXHN1YnNjcmlwdGlvblxcc3Vic2NyaXB0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQixFQUFBO0VBRHBCO0lBSUksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVUsRUFBQTtFQVJkO0lBV0ksWUFBWTtJQUNaLGdCQUFnQixFQUFBO0VBWnBCO0lBZ0JJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLCtDQUErQztJQUMvQyx5RUFLQztJQUNELFlBQVk7SUFDWixzQkFBc0IsRUFBQTtFQTNCMUI7SUE4QkkseUJBQXlCO0lBQ3pCLHdDQUF3QztJQUN4QyxrQkFBa0IsRUFBQTtFQWhDdEI7SUFtQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQ0FBaUMsRUFBQTtFQUlyQztFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGFBQWEsRUFBQTtFQUpmO0lBTUksYUFBYTtJQUNiLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLFdBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw4REFBOEQsRUFBQTtFQWRsRTtNQWdCTSxZQUFZLEVBQUE7RUFoQmxCO01BbUJNLFlBQVksRUFBQTtFQW5CbEI7TUF1Qk0sZ0JBQWdCLEVBQUE7RUF2QnRCO01BMEJNLGFBQWEsRUFBQTtFQTFCbkI7SUErQkksZ0JBQWdCLEVBQUE7RUEvQnBCO0lBa0NJLG9DQUFvQyxFQUFBO0VBbEN4QztJQXVDTSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGFBQWE7SUFDYixpQ0FBaUMsRUFBQTtFQTFDdkM7SUE2Q00sWUFBWTtJQUNaLGlCQUFpQixFQUFBO0VBS3ZCO0VBQ0UsV0FBVztFQUNYLG1CQUFtQixFQUFBO0VBR3JCO0VBQ0Usd0NBQWEsRUFBQTtFQUdmO0VBQ0UsMEJBQW9CO0VBQ3BCLG1DQUE2QixFQUFBO0VBRy9CO0VBQ0UsYUFBYSxFQUFBO0VBRGY7SUFHSSxvQ0FBb0M7SUFDcEMsY0FBYztJQUNkLHdDQUF3QztJQUN4Qyx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtFQUlwQjtFQUNFLGVBQWUsRUFBQTtFQURqQjtJQUdJLDJCQUEyQixFQUFBO0VBSS9CO0VBQ0UsaUJBQWlCLEVBQUE7RUFHbkI7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQixFQUFBO0VBSHJCO0lBTUksY0FBUTtJQUNSLGNBQVM7SUFDVCxZQUFZO0lBQ1osWUFBWSxFQUFBO0VBVGhCO0lBYUksZUFBZTtJQUNmLGVBQWUsRUFBQTtFQUluQjtFQUVFO0lBRUksV0FBVztJQUNYLGVBQWUsRUFBQTtFQUhuQjtJQU1JLHNCQUFzQixFQUFBO0VBSTFCO0lBQ0UsZUFBZSxFQUFBO0VBR2pCO0lBRUksY0FBUTtJQUNSLGNBQVM7SUFDVCxZQUFZO0lBQ1osWUFBWSxFQUFBLEVBQ2I7RUFJTDtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1YnNjcmlwdGlvbi9zdWJzY3JpcHRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZW1pdW0taGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpdmU6IHJlbGF0aXZlO1xyXG5cclxuICAucHJlbWl1bS1sb2dvIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB3aWR0aDogMTZ2dztcclxuICAgIG1heC13aWR0aDogNjBweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGxlZnQ6IDQydnc7XHJcbiAgfVxyXG4gIC5wcmVtaXVtLWhlYWRlci1ibGFjayB7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIH1cclxuXHJcbiAgLnByZW1pdW0taGVhZGVyLWJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAgICAgICB0byBib3R0b20sXHJcbiAgICAgICAgICAgICAgICAgICAgIzAwMCxcclxuICAgICAgICAgICAgICAgICAgICAjMDAwIDE4JSxcclxuICAgICAgICAgICAgICAgICAgICAjZmZmZmZmIDE4JVxyXG4gICAgKTtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIG1hcmdpbjogLTEwdmggMzJ2dyA0dmg7XHJcbiAgfVxyXG4gIC5wcmVtaXVtLWhlYWRlci10ZXh0IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0taW9uLTFwLWZvbnQtZG9taW5hbnQpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAucHJlbWl1bS1oZWFkZXItc3VidGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tMXAtYmx1ZS1wcmltYXJ5KTtcclxuICB9XHJcbn1cclxuXHJcbi5wcmVtaXVtLWZlYXR1cmUge1xyXG4gIG1hcmdpbjogMWVtO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC5wcmVtaXVtLWZlYXR1cmUtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOjQ4cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDBBNkNFLCAjMDA4NUNFKTtcclxuICAgICYuY29hY2gtYWNjZXNzIHtcclxuICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgfVxyXG4gICAgJi5tZWFsLXBsYW57XHJcbiAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgIH1cclxuICAgIC8vJi5tdWx0aXBsZS13b3Jrb3V0cyB7fVxyXG4gICAgJi5saXZlLXN0cmVhbSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICB9XHJcbiAgICAmLmV4Y2x1c2l2ZS1jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcmVtaXVtLWZlYXR1cmUtdGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIH1cclxuICAucHJlbWl1bS1mZWF0dXJlLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYXBwLWhlYWRlci1oNS1zaXplKTtcclxuXHJcbiAgfVxyXG4gIC5wcmVtaXVtLWZlYXR1cmUtZGVzY3JpcHRpb24ge1xyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgbWFyZ2luOiA0cHggMDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi0xcC1ibHVlLXByaW1hcnkpO1xyXG4gICAgfVxyXG4gICAgbGk6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCItXCI7XHJcbiAgICAgIHRleHQtaW5kZW50OiAtNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZpbmUtcHJpbnQge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi0xcC1ibHVlLXByaW1hcnkpO1xyXG59XHJcblxyXG5kaXYuYnV0dG9uIHtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5OiB3aGl0ZTtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiBibGFjaztcclxufVxyXG5cclxuLndvYiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYXBwLWhlYWRlci1oNC1zaXplKTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi0xcC1mb250LWRvbWluYW50KTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBwYWRkaW5nOiA0cHggNXB4O1xyXG4gIH1cclxufVxyXG5cclxucCwgbGkge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBhIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tMXAtZGFya2VyKTtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9tbyB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5pY29uc0JveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIC0td2lkdGg6IDE1MHB4O1xyXG4gICAgLS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgfVxyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAucHJlbWl1bS1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIC5wcmVtaXVtLWxvZ28ge1xyXG4gICAgICB3aWR0aDogMTZ2dztcclxuICAgICAgbWF4LXdpZHRoOiBub25lO1xyXG4gICAgfVxyXG4gICAgLnByZW1pdW0taGVhZGVyLWJveCB7XHJcbiAgICAgIG1hcmdpbjogLTEwdmggMTR2dyA0dmg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwLCBsaSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuaWNvbnNCb3gge1xyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIC0td2lkdGg6IDEwMHB4O1xyXG4gICAgICAtLWhlaWdodDogNDBweDtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/subscription/subscription.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/subscription/subscription.page.ts ***!
  \*********************************************************/
/*! exports provided: SubscriptionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPage", function() { return SubscriptionPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/toast-service/toast-service.service */ "./src/app/services/toast-service/toast-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../rollbar */ "./src/app/rollbar.ts");
/* harmony import */ var rollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rollbar */ "./node_modules/rollbar/dist/rollbar.umd.min.js");
/* harmony import */ var rollbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rollbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_in_app_purchase_in_app_purchase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/in-app-purchase/in-app-purchase.service */ "./src/app/services/in-app-purchase/in-app-purchase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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








var SubscriptionPage = /** @class */ (function () {
    function SubscriptionPage(navCtrl, route, purchaseService, platform, loaderCtrl, toastSvc, rollbar, iab) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.route = route;
        this.purchaseService = purchaseService;
        this.platform = platform;
        this.loaderCtrl = loaderCtrl;
        this.toastSvc = toastSvc;
        this.rollbar = rollbar;
        this.iab = iab;
        this.productFetched = false;
        this.products = [];
        this.showExtra = false;
        // handling subscription owned state
        this.purchaseService.ownedState.subscribe(function (product) {
            _this.navCtrl.navigateForward('thanks');
        });
        // handling error on store
        this.purchaseService.store.error(function (err) {
            _this.toastSvc.flash('Something went wrong:' + err.toString());
            _this.rollbar.error(err);
        });
    }
    Object.defineProperty(SubscriptionPage.prototype, "isIos", {
        get: function () {
            return this.platform.is('ios');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubscriptionPage.prototype, "isAndroid", {
        get: function () {
            return this.platform.is('android');
        },
        enumerable: true,
        configurable: true
    });
    SubscriptionPage.prototype.openUrl = function (url, e) {
        e.preventDefault();
        this.iab.create(url, '_system', { location: 'yes' });
    };
    SubscriptionPage.prototype.handleSubscription = function (productId) {
        return __awaiter(this, void 0, void 0, function () {
            var product, loader, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        product = this.purchaseService.platformProducts()[productId];
                        return [4 /*yield*/, this.loaderCtrl.create({
                                message: 'Purchasing...',
                            })];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        result = this.purchaseService.purchase(product);
                        result.then(function () { return loader.dismiss(); });
                        result.error(function (e) {
                            _this.rollbar.error(e);
                            _this.toastSvc.flash('Unable to process payment: ' + e.toString());
                            loader.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SubscriptionPage.prototype.close = function () {
        this.navCtrl.navigateRoot('dashboard');
    };
    SubscriptionPage.prototype.ngOnInit = function () {
        this.showExtra = this.route.snapshot.queryParamMap.get('showExtra') === 'true';
        this.fetchProducts();
    };
    Object.defineProperty(SubscriptionPage.prototype, "isMobile", {
        get: function () {
            return this.platform.is('cordova');
        },
        enumerable: true,
        configurable: true
    });
    SubscriptionPage.prototype.fetchProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var platform;
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.isMobile) {
                    return [2 /*return*/];
                }
                platform = this.isIos ? 'ios' : 'android';
                try {
                    this.purchaseService.registerProducts(this.purchaseService.platformProductsArray(), platform);
                    this.purchaseService.storeReady().subscribe(function (products) {
                        _this.productFetched = true;
                        _this.products = products;
                    });
                }
                catch (e) {
                    this.toastSvc.flash('Could not connect to store.');
                }
                return [2 /*return*/];
            });
        });
    };
    SubscriptionPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subscription',
            template: __webpack_require__(/*! ./subscription.page.html */ "./src/app/pages/subscription/subscription.page.html"),
            styles: [__webpack_require__(/*! ./subscription.page.scss */ "./src/app/pages/subscription/subscription.page.scss")]
        }),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_rollbar__WEBPACK_IMPORTED_MODULE_5__["RollbarService"])),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_in_app_purchase_in_app_purchase_service__WEBPACK_IMPORTED_MODULE_7__["InAppPurchaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"],
            rollbar__WEBPACK_IMPORTED_MODULE_6__,
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"]])
    ], SubscriptionPage);
    return SubscriptionPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-subscription-subscription-module.js.map