(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-custom-food-template-custom-food-template-module"],{

/***/ "./src/app/guards/android-back-button.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/guards/android-back-button.guard.ts ***!
  \*****************************************************/
/*! exports provided: AndroidBackButtonGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndroidBackButtonGuard", function() { return AndroidBackButtonGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AndroidBackButtonGuard = /** @class */ (function () {
    function AndroidBackButtonGuard() {
    }
    AndroidBackButtonGuard.prototype.canDeactivate = function (component, next, state) {
        var result = component.canLeaveAndroidBack;
        component.canLeaveAndroidBack = true;
        return result;
    };
    AndroidBackButtonGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], AndroidBackButtonGuard);
    return AndroidBackButtonGuard;
}());



/***/ }),

/***/ "./src/app/pages/custom-food-template/add-modal/add-modal.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/custom-food-template/add-modal/add-modal.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\r\n  <h5 class=\"title\">\r\n    Add Food\r\n    <ion-button float-right size=\"small\" fill=\"clear\" class=\"close\" (click)=\"closeModal()\">\r\n      <ion-icon name=\"close\" mode=\"md\"></ion-icon>\r\n    </ion-button>\r\n  </h5>\r\n  <app-custom-food [isCustom]=\"true\"\r\n                   [showMealSelect]=\"false\"\r\n                   [isConsumable]=\"false\"\r\n                   (cancel)=\"closeModal()\"\r\n                   (foodItemCreated)=\"storeCustomFood($event)\"\r\n  ></app-custom-food>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/pages/custom-food-template/add-modal/add-modal.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/custom-food-template/add-modal/add-modal.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  padding: 40px 15px 15px; }\n  .header .close {\n    color: #999;\n    position: absolute;\n    top: 25px;\n    right: 10px;\n    font-size: 20px; }\n  .header .title {\n    text-align: center;\n    text-transform: uppercase;\n    align-self: center;\n    font-weight: 900; }\n  .add-food {\n  padding: 0 12px;\n  font-weight: 900; }\n  .add-food .search {\n    display: flex;\n    align-items: center; }\n  .add-food .get-started {\n    text-align: center;\n    margin-top: 150px;\n    color: #999; }\n  .add-food .get-started .title {\n      text-transform: uppercase;\n      color: #555; }\n  .add-food .get-started span {\n      font-size: 12px;\n      padding: 10px; }\n  .add-food ion-searchbar {\n    --background: #262626;\n    --placeholder-color: #fff;\n    height: 40px;\n    border-radius: 0;\n    caret-color: #ffffff;\n    color: #ffffff; }\n  .add-food ion-searchbar.searching {\n      --background: #ffffff;\n      caret-color: #000000;\n      color: #000000; }\n  .add-food ion-input {\n    --background: #f4f4f4;\n    text-align: center;\n    font-weight: 900; }\n  .add-food ion-label {\n    font-size: 14px;\n    font-weight: 900; }\n  .edit-food {\n  padding: 10px;\n  height: calc(500px - 75px);\n  overflow-y: scroll; }\n  .edit-food::-webkit-scrollbar {\n    -webkit-appearance: none;\n    width: 7px; }\n  .edit-food::-webkit-scrollbar-thumb {\n    border-radius: 4px;\n    background-color: rgba(0, 0, 0, 0.5);\n    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5); }\n  .edit-food .macros .category {\n    text-align: center;\n    margin: 0 5px; }\n  .edit-food .macros .category span {\n      font-size: 10px;\n      text-transform: uppercase; }\n  .edit-food .select {\n    padding: 5px 12px; }\n  .edit-food ion-select {\n    background: #f4f4f4;\n    text-align: center; }\n  .edit-food .meal ion-button {\n    padding: 2px;\n    color: #999;\n    font-size: 20px;\n    --background: #f4f4f4; }\n  .edit-food .meal .active {\n    --background: #000;\n    color: #fff; }\n  .edit-food .food-name {\n    font-weight: 500; }\n  .edit-food .bottom-btn {\n    margin-top: 10px;\n    position: absolute;\n    width: 90%;\n    bottom: 10px; }\n  .edit-food .bottom-btn ion-button {\n      text-transform: uppercase;\n      font-size: 14px; }\n  .inline {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  .search-listing ul {\n  margin: 0 10px;\n  box-shadow: 1px 1px 5px 4px #e3e3e3;\n  list-style: none;\n  height: 35vh;\n  overflow: hidden;\n  overflow-y: scroll;\n  padding: 25px;\n  padding-top: 10px; }\n  .search-listing li {\n  font-weight: 900;\n  padding: 5px 0;\n  color: #4c4c4c;\n  text-transform: capitalize; }\n  .search-listing li.meal-template ion-icon {\n    color: var(--ion-color-brand);\n    font-size: 30px;\n    float: right;\n    position: relative;\n    left: 20px; }\n  .search-listing li .category {\n    font-weight: 100;\n    font-size: 12px;\n    display: block; }\n  .around-this-time {\n  padding: 20px 10px; }\n  .around-this-time .title {\n    text-transform: uppercase;\n    font-size: 14px;\n    color: #b2b2b2; }\n  .around-this-time ul {\n    list-style: none;\n    margin: 0;\n    padding: 10px 0; }\n  .around-this-time li {\n    margin: 10px 0; }\n  .around-this-time li .food-name {\n      font-size: 14px;\n      font-weight: bold;\n      text-transform: capitalize; }\n  .around-this-time li .food-quantity {\n      font-weight: 100;\n      font-size: 12px;\n      padding: 2px 0; }\n  .around-this-time li.meal-template > span {\n      display: block; }\n  .around-this-time li.meal-template ion-icon {\n      float: right;\n      color: var(--ion-color-brand);\n      font-size: 30px; }\n  .around-this-time button .title {\n    color: #1fb2d2; }\n  button {\n  background: #f2f2f2;\n  height: 56px;\n  width: 100%; }\n  button .title {\n    font-size: 14px;\n    color: #1ba9cc;\n    font-weight: 900; }\n  button .tag {\n    font-weight: 100;\n    font-size: 12px;\n    padding: 3px 0;\n    line-height: 20px; }\n  .other-listing {\n  height: calc(500px - 160px);\n  overflow-y: scroll; }\n  @media (max-width: 1024px) {\n  .other-listing {\n    height: calc(600px - 160px); }\n  .edit-food {\n    height: calc(600px - 75px);\n    overflow-y: scroll; } }\n  @media (max-width: 415px) {\n  .other-listing {\n    height: calc(100vh - 160px); }\n  .edit-food {\n    height: calc(100vh - 75px);\n    overflow-y: scroll; } }\n  @media (max-width: 320px) {\n  .edit-food {\n    height: calc(100vh - 75px);\n    overflow-y: scroll; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdG9tLWZvb2QtdGVtcGxhdGUvYWRkLW1vZGFsL0U6XFxpb25pY1xcVmVydmVDb21tZXJjZVxcTmV3RGV2XFxtdHN0LWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbnV0cml0aW9uXFxhZGQtZm9vZFxcYWRkLWZvb2QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUIsRUFBQTtFQUR6QjtJQUlJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxlQUFlLEVBQUE7RUFSbkI7SUFZSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTtFQUlwQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtFQUZsQjtJQUtJLGFBQWE7SUFDYixtQkFBbUIsRUFBQTtFQU52QjtJQVVJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVyxFQUFBO0VBWmY7TUFlTSx5QkFBeUI7TUFDekIsV0FBVyxFQUFBO0VBaEJqQjtNQW9CTSxlQUFlO01BQ2YsYUFBYSxFQUFBO0VBckJuQjtJQTBCSSxxQkFBYTtJQUNiLHlCQUFvQjtJQUNwQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixjQUFjLEVBQUE7RUEvQmxCO01Ba0NNLHFCQUFhO01BQ2Isb0JBQW9CO01BQ3BCLGNBQWMsRUFBQTtFQXBDcEI7SUF5Q0kscUJBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUE7RUEzQ3BCO0lBK0NJLGVBQWU7SUFDZixnQkFBZ0IsRUFBQTtFQUlwQjtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsa0JBQWtCLEVBQUE7RUFIcEI7SUFPSSx3QkFBd0I7SUFDeEIsVUFBVSxFQUFBO0VBUmQ7SUFXSSxrQkFBa0I7SUFDbEIsb0NBQWdDO0lBQ2hDLG9EQUFnRCxFQUFBO0VBYnBEO0lBa0JNLGtCQUFrQjtJQUNsQixhQUFhLEVBQUE7RUFuQm5CO01Bc0JRLGVBQWU7TUFDZix5QkFBeUIsRUFBQTtFQXZCakM7SUE2QkksaUJBQWlCLEVBQUE7RUE3QnJCO0lBaUNJLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQTtFQWxDdEI7SUF1Q00sWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQWEsRUFBQTtFQTFDbkI7SUE4Q00sa0JBQWE7SUFDYixXQUFXLEVBQUE7RUEvQ2pCO0lBb0RJLGdCQUFnQixFQUFBO0VBcERwQjtJQXdESSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZLEVBQUE7RUEzRGhCO01BOERNLHlCQUF5QjtNQUN6QixlQUFlLEVBQUE7RUFLckI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQixFQUFBO0VBR3JCO0VBRUksY0FBYztFQUNkLG1DQUFtQztFQUNuQyxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlCQUFpQixFQUFBO0VBVHJCO0VBYUksZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsMEJBQTBCLEVBQUE7RUFoQjlCO0lBbUJNLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVLEVBQUE7RUF2QmhCO0lBMkJNLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYyxFQUFBO0VBS3BCO0VBQ0Usa0JBQWtCLEVBQUE7RUFEcEI7SUFJSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGNBQWMsRUFBQTtFQU5sQjtJQVVJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsZUFBZSxFQUFBO0VBWm5CO0lBZ0JJLGNBQWMsRUFBQTtFQWhCbEI7TUFtQk0sZUFBZTtNQUNmLGlCQUFpQjtNQUNqQiwwQkFBMEIsRUFBQTtFQXJCaEM7TUF5Qk0sZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixjQUFjLEVBQUE7RUEzQnBCO01BZ0NRLGNBQWMsRUFBQTtFQWhDdEI7TUFvQ1EsWUFBWTtNQUNaLDZCQUE2QjtNQUM3QixlQUFlLEVBQUE7RUF0Q3ZCO0lBNENJLGNBQWMsRUFBQTtFQUlsQjtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVyxFQUFBO0VBSGI7SUFNSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQixFQUFBO0VBUnBCO0lBWUksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCLEVBQUE7RUFJckI7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCLEVBQUE7RUFHcEI7RUFDRTtJQUNFLDJCQUEyQixFQUFBO0VBRzdCO0lBQ0UsMEJBQTBCO0lBQzFCLGtCQUFrQixFQUFBLEVBQ25CO0VBR0g7RUFDRTtJQUNFLDJCQUEyQixFQUFBO0VBRzdCO0lBQ0UsMEJBQTBCO0lBQzFCLGtCQUFrQixFQUFBLEVBQ25CO0VBR0g7RUFFRTtJQUNFLDBCQUEwQjtJQUMxQixrQkFBa0IsRUFBQSxFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbS1mb29kLXRlbXBsYXRlL2FkZC1tb2RhbC9hZGQtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBwYWRkaW5nOiA0MHB4IDE1cHggMTVweDtcclxuXHJcbiAgLmNsb3NlIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNXB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgfVxyXG59XHJcblxyXG4uYWRkLWZvb2Qge1xyXG4gIHBhZGRpbmc6IDAgMTJweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG5cclxuICAuc2VhcmNoIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmdldC1zdGFydGVkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgY29sb3I6ICM5OTk7XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgY29sb3I6ICM1NTU7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjYyNjI2O1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2ZmZjtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBjYXJldC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjZmZmZmZmOztcclxuXHJcbiAgICAmLnNlYXJjaGluZyB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgY2FyZXQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWlucHV0IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgfVxyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICB9XHJcbn1cclxuXHJcbi5lZGl0LWZvb2Qge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDUwMHB4IC0gNzVweCk7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxuICAvLyBmb3JjZSBzaG93aW5nIHNjcm9sbCBiYXIgdG8gZGljdGF0ZSB0aGF0IHBhZ2UgaGFzIHNjcm9sbGFibGUgY29udGVudFxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHdpZHRoOiA3cHg7XHJcbiAgfVxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xyXG4gIH1cclxuXHJcbiAgLm1hY3JvcyB7XHJcbiAgICAuY2F0ZWdvcnkge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMCA1cHg7XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlbGVjdCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICB9XHJcblxyXG4gIGlvbi1zZWxlY3Qge1xyXG4gICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5tZWFsIHtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb29kLW5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gIC5ib3R0b20tYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaW5saW5lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2VhcmNoLWxpc3Rpbmcge1xyXG4gIHVsIHtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggNHB4ICNlM2UzZTM7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgaGVpZ2h0OiAzNXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIGxpIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIGNvbG9yOiAjNGM0YzRjO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblxyXG4gICAgJi5tZWFsLXRlbXBsYXRlIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1icmFuZCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hcm91bmQtdGhpcy10aW1lIHtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNiMmIyYjI7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gIH1cclxuXHJcbiAgbGkge1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcblxyXG4gICAgLmZvb2QtbmFtZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb29kLXF1YW50aXR5IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBwYWRkaW5nOiAycHggMDtcclxuICAgIH1cclxuXHJcbiAgICAmLm1lYWwtdGVtcGxhdGUge1xyXG4gICAgICA+IHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYnJhbmQpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnV0dG9uIC50aXRsZSB7XHJcbiAgICBjb2xvcjogIzFmYjJkMjtcclxuICB9XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzFiYTljYztcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgfVxyXG5cclxuICAudGFnIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAzcHggMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm90aGVyLWxpc3Rpbmcge1xyXG4gIGhlaWdodDogY2FsYyg1MDBweCAtIDE2MHB4KTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAub3RoZXItbGlzdGluZyB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoNjAwcHggLSAxNjBweCk7XHJcbiAgfVxyXG5cclxuICAuZWRpdC1mb29kIHtcclxuICAgIGhlaWdodDogY2FsYyg2MDBweCAtIDc1cHgpO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQxNXB4KSB7XHJcbiAgLm90aGVyLWxpc3Rpbmcge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHgpO1xyXG4gIH1cclxuXHJcbiAgLmVkaXQtZm9vZCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NXB4KTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG5cclxuICAuZWRpdC1mb29kIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDc1cHgpO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/custom-food-template/add-modal/add-modal.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/custom-food-template/add-modal/add-modal.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModalComponent", function() { return AddModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_custom_food_template_custom_food_template_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/custom-food-template/custom-food-template.service */ "./src/app/services/custom-food-template/custom-food-template.service.ts");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/toast-service/toast-service.service */ "./src/app/services/toast-service/toast-service.service.ts");
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





var AddModalComponent = /** @class */ (function () {
    function AddModalComponent(modal, customFoodTemplateService, loadingCtrl, errorService, toastService) {
        this.modal = modal;
        this.customFoodTemplateService = customFoodTemplateService;
        this.loadingCtrl = loadingCtrl;
        this.errorService = errorService;
        this.toastService = toastService;
    }
    AddModalComponent.prototype.ngOnInit = function () {
    };
    AddModalComponent.prototype.closeModal = function () {
        this.modal.dismiss();
    };
    AddModalComponent.prototype.storeCustomFood = function (foodItem) {
        return __awaiter(this, void 0, void 0, function () {
            var loader, foodTemplate, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
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
                        return [4 /*yield*/, this.customFoodTemplateService.storeCustomFood(foodItem)];
                    case 4:
                        foodTemplate = _a.sent();
                        this.modal.dismiss(foodTemplate);
                        return [3 /*break*/, 7];
                    case 5:
                        e_1 = _a.sent();
                        this.toastService.flash(this.errorService.firstError(e_1));
                        return [3 /*break*/, 7];
                    case 6:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AddModalComponent.prototype.backButtonHandler = function ($event) {
        $event.preventDefault();
        this.closeModal();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:backbutton', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AddModalComponent.prototype, "backButtonHandler", null);
    AddModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-modal',
            template: __webpack_require__(/*! ./add-modal.component.html */ "./src/app/pages/custom-food-template/add-modal/add-modal.component.html"),
            styles: [__webpack_require__(/*! ./add-modal.component.scss */ "./src/app/pages/custom-food-template/add-modal/add-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _services_custom_food_template_custom_food_template_service__WEBPACK_IMPORTED_MODULE_2__["CustomFoodTemplateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_3__["ErrorsService"],
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]])
    ], AddModalComponent);
    return AddModalComponent;
}());



/***/ }),

/***/ "./src/app/pages/custom-food-template/custom-food-template.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/custom-food-template/custom-food-template.module.ts ***!
  \***************************************************************************/
/*! exports provided: CustomFoodTemplatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFoodTemplatePageModule", function() { return CustomFoodTemplatePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _custom_food_template_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-food-template.page */ "./src/app/pages/custom-food-template/custom-food-template.page.ts");
/* harmony import */ var _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/side-menu/side-menu.module */ "./src/app/components/side-menu/side-menu.module.ts");
/* harmony import */ var _add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-modal/add-modal.component */ "./src/app/pages/custom-food-template/add-modal/add-modal.component.ts");
/* harmony import */ var _components_nutrition_nutrition_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/nutrition/nutrition.module */ "./src/app/components/nutrition/nutrition.module.ts");
/* harmony import */ var _edit_food_edit_food_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-food/edit-food.component */ "./src/app/pages/custom-food-template/edit-food/edit-food.component.ts");
/* harmony import */ var _guards_android_back_button_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../guards/android-back-button.guard */ "./src/app/guards/android-back-button.guard.ts");
/* harmony import */ var _edit_meal_edit_meal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-meal/edit-meal.component */ "./src/app/pages/custom-food-template/edit-meal/edit-meal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: _custom_food_template_page__WEBPACK_IMPORTED_MODULE_5__["CustomFoodTemplatePage"],
        canDeactivate: [_guards_android_back_button_guard__WEBPACK_IMPORTED_MODULE_10__["AndroidBackButtonGuard"]]
    }
];
var CustomFoodTemplatePageModule = /** @class */ (function () {
    function CustomFoodTemplatePageModule() {
    }
    CustomFoodTemplatePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_6__["SideMenuModule"],
                _components_nutrition_nutrition_module__WEBPACK_IMPORTED_MODULE_8__["NutritionModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [_custom_food_template_page__WEBPACK_IMPORTED_MODULE_5__["CustomFoodTemplatePage"], _add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_7__["AddModalComponent"], _edit_food_edit_food_component__WEBPACK_IMPORTED_MODULE_9__["EditFoodComponent"], _edit_meal_edit_meal_component__WEBPACK_IMPORTED_MODULE_11__["EditMealComponent"]],
            entryComponents: [_add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_7__["AddModalComponent"], _edit_food_edit_food_component__WEBPACK_IMPORTED_MODULE_9__["EditFoodComponent"], _edit_meal_edit_meal_component__WEBPACK_IMPORTED_MODULE_11__["EditMealComponent"]]
        })
    ], CustomFoodTemplatePageModule);
    return CustomFoodTemplatePageModule;
}());



/***/ }),

/***/ "./src/app/pages/custom-food-template/custom-food-template.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/custom-food-template/custom-food-template.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <app-menu-button></app-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>My Foods</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <button class=\"logo-button\" ion-button right>\r\n        <div class=\"tb-logo\"></div>\r\n      </button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-button color=\"primary\" expand=\"full\" fill=\"outline\" (click)=\"openAddCustomFoodModal()\"><ion-icon slot=\"start\" name=\"add\"></ion-icon> Add New Food</ion-button>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let listItem of list\">\r\n      <ng-container [ngSwitch]=\"listItem.type\">\r\n        <ng-container *ngSwitchCase=\"'custom-food'\">\r\n          <ion-label>{{ listItem.item.name }}</ion-label>\r\n          <ion-button fill=\"clear\" (click)=\"openEditFoodModal(listItem.item)\">\r\n            <ion-icon name=\"create\" mode=\"md\" float-right></ion-icon>\r\n          </ion-button>\r\n          <ion-button fill=\"clear\" color=\"danger\" (click)=\"removeTemplate(listItem.type, listItem.item)\">\r\n            <ion-icon name=\"trash\"></ion-icon>\r\n          </ion-button>\r\n        </ng-container>\r\n      </ng-container>\r\n      <ng-container [ngSwitch]=\"listItem.type\">\r\n        <ng-container *ngSwitchCase=\"'meal'\">\r\n          <ion-label>\r\n            <ion-icon name=\"restaurant\"></ion-icon>\r\n            {{ listItem.item.name }}\r\n          </ion-label>\r\n          <ion-button fill=\"clear\" (click)=\"openEditMealModal(listItem.item)\">\r\n            <ion-icon name=\"create\" mode=\"md\" float-right></ion-icon>\r\n          </ion-button>\r\n          <ion-button fill=\"clear\" color=\"danger\" (click)=\"removeTemplate(listItem.type, listItem.item)\">\r\n            <ion-icon name=\"trash\"></ion-icon>\r\n          </ion-button>\r\n        </ng-container>\r\n      </ng-container>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/custom-food-template/custom-food-template.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/custom-food-template/custom-food-template.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbS1mb29kLXRlbXBsYXRlL2N1c3RvbS1mb29kLXRlbXBsYXRlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/custom-food-template/custom-food-template.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/custom-food-template/custom-food-template.page.ts ***!
  \*************************************************************************/
/*! exports provided: CustomFoodTemplatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFoodTemplatePage", function() { return CustomFoodTemplatePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-modal/add-modal.component */ "./src/app/pages/custom-food-template/add-modal/add-modal.component.ts");
/* harmony import */ var _services_custom_food_template_custom_food_template_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/custom-food-template/custom-food-template.service */ "./src/app/services/custom-food-template/custom-food-template.service.ts");
/* harmony import */ var _edit_food_edit_food_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-food/edit-food.component */ "./src/app/pages/custom-food-template/edit-food/edit-food.component.ts");
/* harmony import */ var _services_interceptors_caching_request_caching_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/interceptors/caching/request-caching.service */ "./src/app/services/interceptors/caching/request-caching.service.ts");
/* harmony import */ var _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/toast-service/toast-service.service */ "./src/app/services/toast-service/toast-service.service.ts");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _services_meal_templates_meal_templates_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/meal-templates/meal-templates.service */ "./src/app/services/meal-templates/meal-templates.service.ts");
/* harmony import */ var _edit_meal_edit_meal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-meal/edit-meal.component */ "./src/app/pages/custom-food-template/edit-meal/edit-meal.component.ts");
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










var CustomFoodTemplatePage = /** @class */ (function () {
    function CustomFoodTemplatePage(modalCtrl, customFoodTemplateService, loadingCtrl, alertCtrl, cacheService, toastService, errorService, changeDetector, mealTemplateService) {
        this.modalCtrl = modalCtrl;
        this.customFoodTemplateService = customFoodTemplateService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.cacheService = cacheService;
        this.toastService = toastService;
        this.errorService = errorService;
        this.changeDetector = changeDetector;
        this.mealTemplateService = mealTemplateService;
        this.customFoods = [];
        this.mealTemplates = [];
        this.list = [];
        this.canLeaveAndroidBack = true;
    }
    CustomFoodTemplatePage.prototype.ngOnInit = function () {
        this.listFoodTemplates();
    };
    CustomFoodTemplatePage.prototype.openAddCustomFoodModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var addModal, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_2__["AddModalComponent"],
                            backdropDismiss: false
                        })];
                    case 1:
                        addModal = _a.sent();
                        return [4 /*yield*/, addModal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, addModal.onDidDismiss()];
                    case 3:
                        result = _a.sent();
                        if (result.data) {
                            this.customFoods.push(result.data);
                            this.cacheService.clearAll();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomFoodTemplatePage.prototype.listFoodTemplates = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, customFoodRequest, mealTemplateRequest, _a, _b, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Please wait ...'
                        })];
                    case 1:
                        loader = _c.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 6, 7, 8]);
                        customFoodRequest = this.customFoodTemplateService.listCustomFoods();
                        mealTemplateRequest = this.mealTemplateService.all();
                        _a = this;
                        return [4 /*yield*/, customFoodRequest];
                    case 4:
                        _a.customFoods = (_c.sent());
                        _b = this;
                        return [4 /*yield*/, mealTemplateRequest];
                    case 5:
                        _b.mealTemplates = (_c.sent());
                        this.createList();
                        return [3 /*break*/, 8];
                    case 6:
                        e_1 = _c.sent();
                        console.log(e_1);
                        this.toastService.flash(this.errorService.firstError(e_1));
                        return [3 /*break*/, 8];
                    case 7:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    CustomFoodTemplatePage.prototype.openEditFoodModal = function (customFood) {
        return __awaiter(this, void 0, void 0, function () {
            var editModal, result, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _edit_food_edit_food_component__WEBPACK_IMPORTED_MODULE_4__["EditFoodComponent"],
                            componentProps: {
                                customFood: customFood
                            },
                            backdropDismiss: false
                        })];
                    case 1:
                        editModal = _a.sent();
                        return [4 /*yield*/, editModal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, editModal.onDidDismiss()];
                    case 3:
                        result = _a.sent();
                        if (result.data) {
                            index = this.customFoods.findIndex(function (food) { return food.id === customFood.id; });
                            this.customFoods[index] = result.data;
                            this.cacheService.clearAll();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomFoodTemplatePage.prototype.removeTemplate = function (type, template) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Are you sure?',
                            buttons: [{
                                    text: 'Remove',
                                    role: 'success',
                                    cssClass: 'global-danger',
                                    handler: function () {
                                        if (type === 'custom-food') {
                                            _this.destroyTemplate(template);
                                        }
                                        else {
                                            _this.destroyMealTemplate(template);
                                        }
                                    }
                                }, {
                                    text: 'Cancel',
                                    role: 'success',
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomFoodTemplatePage.prototype.destroyTemplate = function (template) {
        return __awaiter(this, void 0, void 0, function () {
            var loader, index, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
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
                        return [4 /*yield*/, this.customFoodTemplateService.deleteCustomFood(template.id)];
                    case 4:
                        _a.sent();
                        index = this.customFoods.findIndex(function (food) { return food.id === template.id; });
                        this.customFoods.splice(index, 1);
                        this.createList();
                        this.cacheService.clearAll();
                        this.changeDetector.detectChanges();
                        return [3 /*break*/, 7];
                    case 5:
                        e_2 = _a.sent();
                        this.toastService.flash(this.errorService.firstError(e_2));
                        console.log(e_2);
                        return [3 /*break*/, 7];
                    case 6:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    CustomFoodTemplatePage.prototype.backButtonHandler = function ($event) {
        $event.preventDefault();
        this.canLeaveAndroidBack = false;
    };
    CustomFoodTemplatePage.prototype.createList = function () {
        this.list = [];
        this.list = this.list.concat(this.customFoods.map(function (item) {
            return { type: 'custom-food', item: item };
        })).concat(this.mealTemplates.map(function (item) {
            return { type: 'meal', item: item };
        }));
        this.list = this.list.sort(function (item1, item2) { return item1.item.name.toUpperCase() >= item2.item.name.toUpperCase() ? 1 : -1; });
    };
    CustomFoodTemplatePage.prototype.destroyMealTemplate = function (template) {
        return __awaiter(this, void 0, void 0, function () {
            var loader, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
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
                        return [4 /*yield*/, this.mealTemplateService.delete(template.id)];
                    case 4:
                        _a.sent();
                        this.mealTemplates.splice(this.mealTemplates.findIndex(function (food) { return food.id === template.id; }), 1);
                        this.createList();
                        this.changeDetector.detectChanges();
                        this.cacheService.clearAll();
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
    CustomFoodTemplatePage.prototype.openEditMealModal = function (meal) {
        return __awaiter(this, void 0, void 0, function () {
            var editModal, result, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _edit_meal_edit_meal_component__WEBPACK_IMPORTED_MODULE_9__["EditMealComponent"],
                            componentProps: {
                                meal: meal
                            },
                            backdropDismiss: false,
                            cssClass: 'meal-template-name-modal'
                        })];
                    case 1:
                        editModal = _a.sent();
                        return [4 /*yield*/, editModal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, editModal.onDidDismiss()];
                    case 3:
                        result = _a.sent();
                        if (result.data) {
                            index = this.mealTemplates.findIndex(function (food) { return food.id === meal.id; });
                            this.mealTemplates[index] = result.data;
                            this.createList();
                            this.cacheService.clearAll();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:backbutton', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CustomFoodTemplatePage.prototype, "backButtonHandler", null);
    CustomFoodTemplatePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-food-template',
            template: __webpack_require__(/*! ./custom-food-template.page.html */ "./src/app/pages/custom-food-template/custom-food-template.page.html"),
            styles: [__webpack_require__(/*! ./custom-food-template.page.scss */ "./src/app/pages/custom-food-template/custom-food-template.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _services_custom_food_template_custom_food_template_service__WEBPACK_IMPORTED_MODULE_3__["CustomFoodTemplateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _services_interceptors_caching_request_caching_service__WEBPACK_IMPORTED_MODULE_5__["RequestCachingService"],
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
            _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_7__["ErrorsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_meal_templates_meal_templates_service__WEBPACK_IMPORTED_MODULE_8__["MealTemplatesService"]])
    ], CustomFoodTemplatePage);
    return CustomFoodTemplatePage;
}());



/***/ }),

/***/ "./src/app/pages/custom-food-template/edit-food/edit-food.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/custom-food-template/edit-food/edit-food.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\r\n  <h5 class=\"title\">\r\n    Edit Food\r\n    <ion-button float-right size=\"small\" fill=\"clear\" class=\"close\" (click)=\"closeModal()\">\r\n      <ion-icon name=\"close\" mode=\"md\"></ion-icon>\r\n    </ion-button>\r\n  </h5>\r\n  <app-custom-food [isCustom]=\"true\"\r\n                   [showMealSelect]=\"false\"\r\n                   [isConsumable]=\"false\"\r\n                   (cancel)=\"closeModal()\"\r\n                   [foodItem]=\"_foodItem\"\r\n                   (foodItemCreated)=\"updateCustomFood($event)\"\r\n  ></app-custom-food>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/pages/custom-food-template/edit-food/edit-food.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/custom-food-template/edit-food/edit-food.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  padding: 40px 15px 15px; }\n  .header .close {\n    color: #999;\n    position: absolute;\n    top: 25px;\n    right: 10px;\n    font-size: 20px; }\n  .header .title {\n    text-align: center;\n    text-transform: uppercase;\n    align-self: center;\n    font-weight: 900; }\n  .add-food {\n  padding: 0 12px;\n  font-weight: 900; }\n  .add-food .search {\n    display: flex;\n    align-items: center; }\n  .add-food .get-started {\n    text-align: center;\n    margin-top: 150px;\n    color: #999; }\n  .add-food .get-started .title {\n      text-transform: uppercase;\n      color: #555; }\n  .add-food .get-started span {\n      font-size: 12px;\n      padding: 10px; }\n  .add-food ion-searchbar {\n    --background: #262626;\n    --placeholder-color: #fff;\n    height: 40px;\n    border-radius: 0;\n    caret-color: #ffffff;\n    color: #ffffff; }\n  .add-food ion-searchbar.searching {\n      --background: #ffffff;\n      caret-color: #000000;\n      color: #000000; }\n  .add-food ion-input {\n    --background: #f4f4f4;\n    text-align: center;\n    font-weight: 900; }\n  .add-food ion-label {\n    font-size: 14px;\n    font-weight: 900; }\n  .edit-food {\n  padding: 10px;\n  height: calc(500px - 75px);\n  overflow-y: scroll; }\n  .edit-food::-webkit-scrollbar {\n    -webkit-appearance: none;\n    width: 7px; }\n  .edit-food::-webkit-scrollbar-thumb {\n    border-radius: 4px;\n    background-color: rgba(0, 0, 0, 0.5);\n    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5); }\n  .edit-food .macros .category {\n    text-align: center;\n    margin: 0 5px; }\n  .edit-food .macros .category span {\n      font-size: 10px;\n      text-transform: uppercase; }\n  .edit-food .select {\n    padding: 5px 12px; }\n  .edit-food ion-select {\n    background: #f4f4f4;\n    text-align: center; }\n  .edit-food .meal ion-button {\n    padding: 2px;\n    color: #999;\n    font-size: 20px;\n    --background: #f4f4f4; }\n  .edit-food .meal .active {\n    --background: #000;\n    color: #fff; }\n  .edit-food .food-name {\n    font-weight: 500; }\n  .edit-food .bottom-btn {\n    margin-top: 10px;\n    position: absolute;\n    width: 90%;\n    bottom: 10px; }\n  .edit-food .bottom-btn ion-button {\n      text-transform: uppercase;\n      font-size: 14px; }\n  .inline {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  .search-listing ul {\n  margin: 0 10px;\n  box-shadow: 1px 1px 5px 4px #e3e3e3;\n  list-style: none;\n  height: 35vh;\n  overflow: hidden;\n  overflow-y: scroll;\n  padding: 25px;\n  padding-top: 10px; }\n  .search-listing li {\n  font-weight: 900;\n  padding: 5px 0;\n  color: #4c4c4c;\n  text-transform: capitalize; }\n  .search-listing li.meal-template ion-icon {\n    color: var(--ion-color-brand);\n    font-size: 30px;\n    float: right;\n    position: relative;\n    left: 20px; }\n  .search-listing li .category {\n    font-weight: 100;\n    font-size: 12px;\n    display: block; }\n  .around-this-time {\n  padding: 20px 10px; }\n  .around-this-time .title {\n    text-transform: uppercase;\n    font-size: 14px;\n    color: #b2b2b2; }\n  .around-this-time ul {\n    list-style: none;\n    margin: 0;\n    padding: 10px 0; }\n  .around-this-time li {\n    margin: 10px 0; }\n  .around-this-time li .food-name {\n      font-size: 14px;\n      font-weight: bold;\n      text-transform: capitalize; }\n  .around-this-time li .food-quantity {\n      font-weight: 100;\n      font-size: 12px;\n      padding: 2px 0; }\n  .around-this-time li.meal-template > span {\n      display: block; }\n  .around-this-time li.meal-template ion-icon {\n      float: right;\n      color: var(--ion-color-brand);\n      font-size: 30px; }\n  .around-this-time button .title {\n    color: #1fb2d2; }\n  button {\n  background: #f2f2f2;\n  height: 56px;\n  width: 100%; }\n  button .title {\n    font-size: 14px;\n    color: #1ba9cc;\n    font-weight: 900; }\n  button .tag {\n    font-weight: 100;\n    font-size: 12px;\n    padding: 3px 0;\n    line-height: 20px; }\n  .other-listing {\n  height: calc(500px - 160px);\n  overflow-y: scroll; }\n  @media (max-width: 1024px) {\n  .other-listing {\n    height: calc(600px - 160px); }\n  .edit-food {\n    height: calc(600px - 75px);\n    overflow-y: scroll; } }\n  @media (max-width: 415px) {\n  .other-listing {\n    height: calc(100vh - 160px); }\n  .edit-food {\n    height: calc(100vh - 75px);\n    overflow-y: scroll; } }\n  @media (max-width: 320px) {\n  .edit-food {\n    height: calc(100vh - 75px);\n    overflow-y: scroll; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdG9tLWZvb2QtdGVtcGxhdGUvZWRpdC1mb29kL0U6XFxpb25pY1xcVmVydmVDb21tZXJjZVxcTmV3RGV2XFxtdHN0LWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbnV0cml0aW9uXFxhZGQtZm9vZFxcYWRkLWZvb2QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUIsRUFBQTtFQUR6QjtJQUlJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxlQUFlLEVBQUE7RUFSbkI7SUFZSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTtFQUlwQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtFQUZsQjtJQUtJLGFBQWE7SUFDYixtQkFBbUIsRUFBQTtFQU52QjtJQVVJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVyxFQUFBO0VBWmY7TUFlTSx5QkFBeUI7TUFDekIsV0FBVyxFQUFBO0VBaEJqQjtNQW9CTSxlQUFlO01BQ2YsYUFBYSxFQUFBO0VBckJuQjtJQTBCSSxxQkFBYTtJQUNiLHlCQUFvQjtJQUNwQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixjQUFjLEVBQUE7RUEvQmxCO01Ba0NNLHFCQUFhO01BQ2Isb0JBQW9CO01BQ3BCLGNBQWMsRUFBQTtFQXBDcEI7SUF5Q0kscUJBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUE7RUEzQ3BCO0lBK0NJLGVBQWU7SUFDZixnQkFBZ0IsRUFBQTtFQUlwQjtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsa0JBQWtCLEVBQUE7RUFIcEI7SUFPSSx3QkFBd0I7SUFDeEIsVUFBVSxFQUFBO0VBUmQ7SUFXSSxrQkFBa0I7SUFDbEIsb0NBQWdDO0lBQ2hDLG9EQUFnRCxFQUFBO0VBYnBEO0lBa0JNLGtCQUFrQjtJQUNsQixhQUFhLEVBQUE7RUFuQm5CO01Bc0JRLGVBQWU7TUFDZix5QkFBeUIsRUFBQTtFQXZCakM7SUE2QkksaUJBQWlCLEVBQUE7RUE3QnJCO0lBaUNJLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQTtFQWxDdEI7SUF1Q00sWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQWEsRUFBQTtFQTFDbkI7SUE4Q00sa0JBQWE7SUFDYixXQUFXLEVBQUE7RUEvQ2pCO0lBb0RJLGdCQUFnQixFQUFBO0VBcERwQjtJQXdESSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZLEVBQUE7RUEzRGhCO01BOERNLHlCQUF5QjtNQUN6QixlQUFlLEVBQUE7RUFLckI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQixFQUFBO0VBR3JCO0VBRUksY0FBYztFQUNkLG1DQUFtQztFQUNuQyxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlCQUFpQixFQUFBO0VBVHJCO0VBYUksZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsMEJBQTBCLEVBQUE7RUFoQjlCO0lBbUJNLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVLEVBQUE7RUF2QmhCO0lBMkJNLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYyxFQUFBO0VBS3BCO0VBQ0Usa0JBQWtCLEVBQUE7RUFEcEI7SUFJSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGNBQWMsRUFBQTtFQU5sQjtJQVVJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsZUFBZSxFQUFBO0VBWm5CO0lBZ0JJLGNBQWMsRUFBQTtFQWhCbEI7TUFtQk0sZUFBZTtNQUNmLGlCQUFpQjtNQUNqQiwwQkFBMEIsRUFBQTtFQXJCaEM7TUF5Qk0sZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixjQUFjLEVBQUE7RUEzQnBCO01BZ0NRLGNBQWMsRUFBQTtFQWhDdEI7TUFvQ1EsWUFBWTtNQUNaLDZCQUE2QjtNQUM3QixlQUFlLEVBQUE7RUF0Q3ZCO0lBNENJLGNBQWMsRUFBQTtFQUlsQjtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVyxFQUFBO0VBSGI7SUFNSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQixFQUFBO0VBUnBCO0lBWUksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCLEVBQUE7RUFJckI7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCLEVBQUE7RUFHcEI7RUFDRTtJQUNFLDJCQUEyQixFQUFBO0VBRzdCO0lBQ0UsMEJBQTBCO0lBQzFCLGtCQUFrQixFQUFBLEVBQ25CO0VBR0g7RUFDRTtJQUNFLDJCQUEyQixFQUFBO0VBRzdCO0lBQ0UsMEJBQTBCO0lBQzFCLGtCQUFrQixFQUFBLEVBQ25CO0VBR0g7RUFFRTtJQUNFLDBCQUEwQjtJQUMxQixrQkFBa0IsRUFBQSxFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbS1mb29kLXRlbXBsYXRlL2VkaXQtZm9vZC9lZGl0LWZvb2QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBwYWRkaW5nOiA0MHB4IDE1cHggMTVweDtcclxuXHJcbiAgLmNsb3NlIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNXB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgfVxyXG59XHJcblxyXG4uYWRkLWZvb2Qge1xyXG4gIHBhZGRpbmc6IDAgMTJweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG5cclxuICAuc2VhcmNoIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmdldC1zdGFydGVkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgY29sb3I6ICM5OTk7XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgY29sb3I6ICM1NTU7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjYyNjI2O1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2ZmZjtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBjYXJldC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjZmZmZmZmOztcclxuXHJcbiAgICAmLnNlYXJjaGluZyB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgY2FyZXQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWlucHV0IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgfVxyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICB9XHJcbn1cclxuXHJcbi5lZGl0LWZvb2Qge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDUwMHB4IC0gNzVweCk7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxuICAvLyBmb3JjZSBzaG93aW5nIHNjcm9sbCBiYXIgdG8gZGljdGF0ZSB0aGF0IHBhZ2UgaGFzIHNjcm9sbGFibGUgY29udGVudFxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHdpZHRoOiA3cHg7XHJcbiAgfVxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xyXG4gIH1cclxuXHJcbiAgLm1hY3JvcyB7XHJcbiAgICAuY2F0ZWdvcnkge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMCA1cHg7XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlbGVjdCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICB9XHJcblxyXG4gIGlvbi1zZWxlY3Qge1xyXG4gICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5tZWFsIHtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb29kLW5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gIC5ib3R0b20tYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaW5saW5lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2VhcmNoLWxpc3Rpbmcge1xyXG4gIHVsIHtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggNHB4ICNlM2UzZTM7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgaGVpZ2h0OiAzNXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIGxpIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIGNvbG9yOiAjNGM0YzRjO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblxyXG4gICAgJi5tZWFsLXRlbXBsYXRlIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1icmFuZCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hcm91bmQtdGhpcy10aW1lIHtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNiMmIyYjI7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gIH1cclxuXHJcbiAgbGkge1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcblxyXG4gICAgLmZvb2QtbmFtZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb29kLXF1YW50aXR5IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBwYWRkaW5nOiAycHggMDtcclxuICAgIH1cclxuXHJcbiAgICAmLm1lYWwtdGVtcGxhdGUge1xyXG4gICAgICA+IHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYnJhbmQpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnV0dG9uIC50aXRsZSB7XHJcbiAgICBjb2xvcjogIzFmYjJkMjtcclxuICB9XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzFiYTljYztcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgfVxyXG5cclxuICAudGFnIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAzcHggMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm90aGVyLWxpc3Rpbmcge1xyXG4gIGhlaWdodDogY2FsYyg1MDBweCAtIDE2MHB4KTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAub3RoZXItbGlzdGluZyB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoNjAwcHggLSAxNjBweCk7XHJcbiAgfVxyXG5cclxuICAuZWRpdC1mb29kIHtcclxuICAgIGhlaWdodDogY2FsYyg2MDBweCAtIDc1cHgpO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQxNXB4KSB7XHJcbiAgLm90aGVyLWxpc3Rpbmcge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHgpO1xyXG4gIH1cclxuXHJcbiAgLmVkaXQtZm9vZCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NXB4KTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG5cclxuICAuZWRpdC1mb29kIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDc1cHgpO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/custom-food-template/edit-food/edit-food.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/custom-food-template/edit-food/edit-food.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditFoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFoodComponent", function() { return EditFoodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_custom_food_template_custom_food_template_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/custom-food-template/custom-food-template.service */ "./src/app/services/custom-food-template/custom-food-template.service.ts");
/* harmony import */ var _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/toast-service/toast-service.service */ "./src/app/services/toast-service/toast-service.service.ts");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
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





var EditFoodComponent = /** @class */ (function () {
    function EditFoodComponent(modal, loadingCtrl, customFoodTemplateService, toastService, errorService) {
        this.modal = modal;
        this.loadingCtrl = loadingCtrl;
        this.customFoodTemplateService = customFoodTemplateService;
        this.toastService = toastService;
        this.errorService = errorService;
    }
    Object.defineProperty(EditFoodComponent.prototype, "customFood", {
        set: function (food) {
            this.customFoodTemplate = food;
            this._foodItem = {
                calories: food.calories,
                fats: food.fats,
                carbs: food.carbs,
                protein: food.protein,
                name: food.name,
                serving_size: {
                    unit: food.serving_unit,
                    amount: food.serving_amount,
                    calories: food.calories,
                    fats: food.fats,
                    carbs: food.carbs,
                    protein: food.protein,
                },
                amount_consumed: {
                    unit: food.serving_unit,
                    amount: 1,
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    EditFoodComponent.prototype.ngOnInit = function () {
    };
    EditFoodComponent.prototype.closeModal = function () {
        this.modal.dismiss();
    };
    EditFoodComponent.prototype.updateCustomFood = function (foodItem) {
        return __awaiter(this, void 0, void 0, function () {
            var loader, food, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
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
                        return [4 /*yield*/, this.customFoodTemplateService
                                .updateCustomFood(this.customFoodTemplate.id, foodItem)];
                    case 4:
                        food = _a.sent();
                        this.modal.dismiss(food);
                        return [3 /*break*/, 7];
                    case 5:
                        e_1 = _a.sent();
                        this.toastService.flash(this.errorService.firstError(e_1));
                        return [3 /*break*/, 7];
                    case 6:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    EditFoodComponent.prototype.backButtonHandler = function ($event) {
        $event.preventDefault();
        this.closeModal();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditFoodComponent.prototype, "customFood", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:backbutton', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], EditFoodComponent.prototype, "backButtonHandler", null);
    EditFoodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-food',
            template: __webpack_require__(/*! ./edit-food.component.html */ "./src/app/pages/custom-food-template/edit-food/edit-food.component.html"),
            styles: [__webpack_require__(/*! ./edit-food.component.scss */ "./src/app/pages/custom-food-template/edit-food/edit-food.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _services_custom_food_template_custom_food_template_service__WEBPACK_IMPORTED_MODULE_2__["CustomFoodTemplateService"],
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"],
            _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_4__["ErrorsService"]])
    ], EditFoodComponent);
    return EditFoodComponent;
}());



/***/ }),

/***/ "./src/app/pages/custom-food-template/edit-meal/edit-meal.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/custom-food-template/edit-meal/edit-meal.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"header\">\r\n  <h5>\r\n    Save As Meal\r\n    <ion-button fill=\"clear\" type=\"icon\" (click)=\"close()\">\r\n      <ion-icon name=\"close\" mode=\"md\"></ion-icon>\r\n    </ion-button>\r\n  </h5>\r\n</section>\r\n<section class=\"body\" padding>\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"updateMeal()\">\r\n    <div class=\"global-input\">\r\n      <ion-label>Meal Name</ion-label>\r\n      <ion-input formControlName=\"name\"></ion-input>\r\n    </div>\r\n  </form>\r\n</section>\r\n<section class=\"footer\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-button type=\"button\" fill=\"clear\" (click)=\"close()\">Close</ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button float-right type=\"submit\" [disabled]=\"form.invalid\" (click)=\"updateMeal()\">Save</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/pages/custom-food-template/edit-meal/edit-meal.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/custom-food-template/edit-meal/edit-meal.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header h5 {\n  text-align: center;\n  padding-top: 20px;\n  text-transform: uppercase;\n  font-weight: 900; }\n\n.header ion-button {\n  position: absolute;\n  top: 5px;\n  right: 0; }\n\n.body {\n  --ion-padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdG9tLWZvb2QtdGVtcGxhdGUvZWRpdC1tZWFsL0U6XFxpb25pY1xcVmVydmVDb21tZXJjZVxcTmV3RGV2XFxtdHN0LWFwcC9zcmNcXGFwcFxccGFnZXNcXGN1c3RvbS1mb29kLXRlbXBsYXRlXFxlZGl0LW1lYWxcXGVkaXQtbWVhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFBOztBQUxwQjtFQVFJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUSxFQUFBOztBQUlaO0VBQ0Usa0JBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbS1mb29kLXRlbXBsYXRlL2VkaXQtbWVhbC9lZGl0LW1lYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBoNSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gIH1cclxuICBpb24tYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgLS1pb24tcGFkZGluZzogNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/custom-food-template/edit-meal/edit-meal.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/custom-food-template/edit-meal/edit-meal.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditMealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMealComponent", function() { return EditMealComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_meal_templates_meal_templates_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/meal-templates/meal-templates.service */ "./src/app/services/meal-templates/meal-templates.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/toast-service/toast-service.service */ "./src/app/services/toast-service/toast-service.service.ts");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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






var EditMealComponent = /** @class */ (function () {
    function EditMealComponent(modalController, loadingController, toastService, errorService, mealTemplateService) {
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.toastService = toastService;
        this.errorService = errorService;
        this.mealTemplateService = mealTemplateService;
    }
    Object.defineProperty(EditMealComponent.prototype, "meal", {
        set: function (meal) {
            this._meal = meal;
            this.setupForm();
            this.form.get('name').setValue(this._meal.name);
        },
        enumerable: true,
        configurable: true
    });
    EditMealComponent.prototype.ngOnInit = function () {
        this.setupForm();
    };
    EditMealComponent.prototype.setupForm = function () {
        if (this.form) {
            return;
        }
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(250)])
        });
    };
    EditMealComponent.prototype.close = function () {
        this.modalController.dismiss();
    };
    EditMealComponent.prototype.updateMeal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, meal, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
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
                        return [4 /*yield*/, this.mealTemplateService.update(this._meal.id, this.form.get('name').value)];
                    case 4:
                        meal = _a.sent();
                        this.toastService.flash('Meal name updated successfully.');
                        this.modalController.dismiss(meal);
                        return [3 /*break*/, 7];
                    case 5:
                        e_1 = _a.sent();
                        this.toastService.flash(this.errorService.firstError(e_1));
                        return [3 /*break*/, 7];
                    case 6:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    EditMealComponent.prototype.backButtonHandler = function ($event) {
        $event.preventDefault();
        this.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditMealComponent.prototype, "meal", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:backbutton', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], EditMealComponent.prototype, "backButtonHandler", null);
    EditMealComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-meal',
            template: __webpack_require__(/*! ./edit-meal.component.html */ "./src/app/pages/custom-food-template/edit-meal/edit-meal.component.html"),
            styles: [__webpack_require__(/*! ./edit-meal.component.scss */ "./src/app/pages/custom-food-template/edit-meal/edit-meal.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"],
            _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_4__["ErrorsService"],
            _services_meal_templates_meal_templates_service__WEBPACK_IMPORTED_MODULE_1__["MealTemplatesService"]])
    ], EditMealComponent);
    return EditMealComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-custom-food-template-custom-food-template-module.js.map