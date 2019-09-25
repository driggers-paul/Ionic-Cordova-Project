(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-live-stream-live-stream-module"],{

/***/ "./src/app/directives/autoresize/autoresize.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/directives/autoresize/autoresize.directive.ts ***!
  \***************************************************************/
/*! exports provided: AutoresizeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoresizeDirective", function() { return AutoresizeDirective; });
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

var AutoresizeDirective = /** @class */ (function () {
    function AutoresizeDirective(element) {
        this.element = element;
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.maxHeight = ((window.screen.height) / 4).toFixed(0);
    }
    AutoresizeDirective.prototype.change = function () {
        this.adjust(this.element.nativeElement.lastChild);
    };
    AutoresizeDirective.prototype.adjust = function (textArea) {
        // This is a bit of a hack. Since the internal element doesn't have an ID,
        // I'm just assuming that the lastChild is the actual shadow <textarea>.
        // Anyway, the way that this works is fairly simple...
        // Grab the "real" input.
        // Set the input to 1 row high and then set the style height to auto. This
        // is required to get the height of the textarea to decrease when text is
        // removed.
        textArea.rows = 1;
        textArea.style.height = 'auto';
        // Grab the height of the shadow input's scroll-area.
        var newHeight = textArea.scrollHeight;
        // If it's bigger than 1/4 of the screen (see constructor), then limit it.
        if (textArea.scrollHeight > this.maxHeight) {
            newHeight = this.maxHeight;
        }
        var currentHeight = textArea.clientHeight;
        // Set the height of both the shadow element and this element. This must
        // be done, otherwise the shadow element will remain at a 1 row-size.
        textArea.style.height = newHeight + 'px';
        textArea.parentNode.style.height = newHeight + 'px';
        if (newHeight + 'px' !== currentHeight) {
            this.resize.emit();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AutoresizeDirective.prototype, "resize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('ionChange'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AutoresizeDirective.prototype, "change", null);
    AutoresizeDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'ion-textarea[appAutoresize]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AutoresizeDirective);
    return AutoresizeDirective;
}());



/***/ }),

/***/ "./src/app/directives/autoresize/autoresize.module.ts":
/*!************************************************************!*\
  !*** ./src/app/directives/autoresize/autoresize.module.ts ***!
  \************************************************************/
/*! exports provided: AutoresizeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoresizeModule", function() { return AutoresizeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _autoresize_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autoresize.directive */ "./src/app/directives/autoresize/autoresize.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AutoresizeModule = /** @class */ (function () {
    function AutoresizeModule() {
    }
    AutoresizeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_autoresize_directive__WEBPACK_IMPORTED_MODULE_2__["AutoresizeDirective"]],
            exports: [_autoresize_directive__WEBPACK_IMPORTED_MODULE_2__["AutoresizeDirective"]],
        })
    ], AutoresizeModule);
    return AutoresizeModule;
}());



/***/ }),

/***/ "./src/app/pages/live-stream/live-stream.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/live-stream/live-stream.module.ts ***!
  \*********************************************************/
/*! exports provided: LiveStreamPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveStreamPageModule", function() { return LiveStreamPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _live_stream_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./live-stream.page */ "./src/app/pages/live-stream/live-stream.page.ts");
/* harmony import */ var _directives_autoresize_autoresize_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/autoresize/autoresize.module */ "./src/app/directives/autoresize/autoresize.module.ts");
/* harmony import */ var _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/side-menu/side-menu.module */ "./src/app/components/side-menu/side-menu.module.ts");
/* harmony import */ var _components_common_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/common-components.module */ "./src/app/components/common-components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _live_stream_page__WEBPACK_IMPORTED_MODULE_5__["LiveStreamPage"]
    }
];
var LiveStreamPageModule = /** @class */ (function () {
    function LiveStreamPageModule() {
    }
    LiveStreamPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _directives_autoresize_autoresize_module__WEBPACK_IMPORTED_MODULE_6__["AutoresizeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_7__["SideMenuModule"],
                _components_common_components_module__WEBPACK_IMPORTED_MODULE_8__["AppComponentsModule"]
            ],
            declarations: [_live_stream_page__WEBPACK_IMPORTED_MODULE_5__["LiveStreamPage"]]
        })
    ], LiveStreamPageModule);
    return LiveStreamPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-live-stream-live-stream-module.js.map