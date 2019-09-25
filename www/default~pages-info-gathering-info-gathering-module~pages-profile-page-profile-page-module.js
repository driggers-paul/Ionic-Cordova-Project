(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-info-gathering-info-gathering-module~pages-profile-page-profile-page-module"],{

/***/ "./src/app/components/height/height.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/height/height.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"height-container\" (click)=\"openPicker()\">\r\n  <ion-input disabled=\"true\" [value]=\"heightValue\"></ion-input>\r\n  <span class=\"input-container\"></span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/height/height.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/height/height.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".height-container {\n  position: relative; }\n  .height-container ion-input {\n    position: relative;\n    z-index: 1;\n    border-bottom: none; }\n  .height-container .input-container {\n    position: absolute;\n    top: -10px;\n    width: 100%;\n    height: 57px;\n    z-index: 10; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWlnaHQvRTpcXGlvbmljXFxWZXJ2ZUNvbW1lcmNlXFxOZXdEZXZcXG10c3QtYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWlnaHRcXGhlaWdodC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQixFQUFBO0VBRHBCO0lBR0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixtQkFBbUIsRUFBQTtFQUx2QjtJQVFJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlaWdodC9oZWlnaHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVpZ2h0LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICB9XHJcbiAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU3cHg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/height/height.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/height/height.component.ts ***!
  \*******************************************************/
/*! exports provided: HeightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeightComponent", function() { return HeightComponent; });
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


var HeightComponent = /** @class */ (function () {
    function HeightComponent(pickerCtrl) {
        this.pickerCtrl = pickerCtrl;
        this.height = 0;
        this.heightChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HeightComponent.prototype.getOptions = function () {
        var feetOptions = [
            {
                text: '3\'',
                value: 3,
            },
            {
                text: '4\'',
                value: 4,
            },
            {
                text: '5\'',
                value: 5,
            },
            {
                text: '6\'',
                value: 6,
            },
            {
                text: '7\'',
                value: 7,
            },
        ];
        var inchOptions = [
            {
                text: '0"',
                value: 0,
            },
            {
                text: '1"',
                value: 1,
            },
            {
                text: '2"',
                value: 2,
            },
            {
                text: '3"',
                value: 3,
            },
            {
                text: '4"',
                value: 4,
            },
            {
                text: '5"',
                value: 5,
            },
            {
                text: '6"',
                value: 6,
            },
            {
                text: '7"',
                value: 7,
            },
            {
                text: '8"',
                value: 8,
            },
            {
                text: '9"',
                value: 9,
            },
            {
                text: '10"',
                value: 10,
            },
            {
                text: '11"',
                value: 11,
            },
        ];
        return { feetOptions: feetOptions, inchOptions: inchOptions };
    };
    HeightComponent.prototype.ngOnInit = function () { };
    HeightComponent.prototype.openPicker = function () {
        return __awaiter(this, void 0, void 0, function () {
            var height, _a, feetOptions, inchOptions, picker;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        height = this.heightInFeet;
                        _a = this.getOptions(), feetOptions = _a.feetOptions, inchOptions = _a.inchOptions;
                        return [4 /*yield*/, this.pickerCtrl.create({
                                buttons: [
                                    {
                                        text: 'Update',
                                        handler: function (e) {
                                            _this.heightChange.emit(_this.feetToInches(e.feet.value, e.inches.value));
                                            picker.remove();
                                        },
                                    },
                                    {
                                        text: 'Cancel',
                                    },
                                ],
                                columns: [
                                    {
                                        name: 'feet',
                                        selectedIndex: this.getSelectedIndex(height.feet, feetOptions) || 0,
                                        options: feetOptions,
                                    },
                                    {
                                        name: 'inches',
                                        selectedIndex: this.getSelectedIndex(height.inches, inchOptions) || 0,
                                        options: inchOptions,
                                    },
                                ],
                            })];
                    case 1:
                        picker = _b.sent();
                        return [4 /*yield*/, picker.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(HeightComponent.prototype, "heightInFeet", {
        get: function () {
            var feet = Math.floor(this.height / 12);
            var inches = this.height % 12;
            return { feet: feet, inches: inches };
        },
        enumerable: true,
        configurable: true
    });
    HeightComponent.prototype.getSelectedIndex = function (value, list) {
        return list.findIndex(function (option) { return option.value === value; });
    };
    HeightComponent.prototype.feetToInches = function (feet, inches) {
        feet = feet * 12;
        return feet + inches;
    };
    Object.defineProperty(HeightComponent.prototype, "heightValue", {
        get: function () {
            return this.heightInFeet.feet + "' " + this.heightInFeet.inches + "\"";
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeightComponent.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], HeightComponent.prototype, "heightChange", void 0);
    HeightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-height',
            template: __webpack_require__(/*! ./height.component.html */ "./src/app/components/height/height.component.html"),
            styles: [__webpack_require__(/*! ./height.component.scss */ "./src/app/components/height/height.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PickerController"]])
    ], HeightComponent);
    return HeightComponent;
}());



/***/ }),

/***/ "./src/app/components/height/height.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/height/height.module.ts ***!
  \****************************************************/
/*! exports provided: HeightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeightModule", function() { return HeightModule; });
/* harmony import */ var _height_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./height.component */ "./src/app/components/height/height.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HeightModule = /** @class */ (function () {
    function HeightModule() {
    }
    HeightModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_height_component__WEBPACK_IMPORTED_MODULE_0__["HeightComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"]],
            exports: [_height_component__WEBPACK_IMPORTED_MODULE_0__["HeightComponent"]],
        })
    ], HeightModule);
    return HeightModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-info-gathering-info-gathering-module~pages-profile-page-profile-page-module.js.map