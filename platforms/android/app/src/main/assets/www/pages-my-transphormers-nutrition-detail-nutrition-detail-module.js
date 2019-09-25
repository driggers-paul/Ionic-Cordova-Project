(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-transphormers-nutrition-detail-nutrition-detail-module"],{

/***/ "./src/app/pages/my-transphormers/nutrition-detail/nutrition-detail.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/my-transphormers/nutrition-detail/nutrition-detail.module.ts ***!
  \************************************************************************************/
/*! exports provided: NutritionDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionDetailPageModule", function() { return NutritionDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nutrition_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nutrition-detail.page */ "./src/app/pages/my-transphormers/nutrition-detail/nutrition-detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _nutrition_detail_page__WEBPACK_IMPORTED_MODULE_5__["NutritionDetailPage"]
    }
];
var NutritionDetailPageModule = /** @class */ (function () {
    function NutritionDetailPageModule() {
    }
    NutritionDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_nutrition_detail_page__WEBPACK_IMPORTED_MODULE_5__["NutritionDetailPage"]]
        })
    ], NutritionDetailPageModule);
    return NutritionDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/my-transphormers/nutrition-detail/nutrition-detail.page.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/my-transphormers/nutrition-detail/nutrition-detail.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [defaultHref]=\"backHref\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Nutrition Details</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<div class=\"content\">\r\n    <div class=\"header\">\r\n        <div>Date</div>\r\n        <div>Cals</div>\r\n        <div>Protein</div>\r\n        <div>Carbs</div>\r\n        <div>Fats</div>\r\n    </div>\r\n    <div class=\"listing\" *ngIf=\"dayData.length > 0\">\r\n        <div (click)=\"expandDate(macro)\" [ngClass]=\"{even: i%2 === 0, odd: i%2 === 1, expanded: this.expansions[macro.track_date]}\" class=\"day\" *ngFor=\"let macro of sortedFood; let i = index;\">\r\n            <div class=\"data\" *ngIf=\"macro.calories !== 0\">\r\n                <div class=\"date\">{{ macro.short_date }}</div>\r\n                <div class=\"calories\">{{ macro.calories }}</div>\r\n                <div class=\"protein\">{{ macro.protein }}</div>\r\n                <div class=\"carbs\">{{ macro.carbs }}</div>\r\n                <div class=\"fats\">{{ macro.fats}}</div>\r\n            </div>\r\n            <div class=\"data empty\" *ngIf=\"macro.calories === 0\">\r\n                <div class=\"date\">{{ macro.short_date }}</div>\r\n                <div class=\"message\" text-center>No data.</div>\r\n            </div>\r\n            <div *ngIf=\"this.expansions[macro.track_date]\" class=\"meals\">\r\n                <div *ngFor=\"let meal of macro.meals; let j = index;\">\r\n                    <div class=\"meal\">\r\n                        <div class=\"data\" [ngClass]=\"{even: j%2 === 0, odd: j%2 === 1}\">\r\n                            <div class=\"meal-number\">M #{{ meal.meal }}</div>\r\n                            <div class=\"calories\">{{ meal.calories }}</div>\r\n                            <div class=\"protein\">{{ meal.protein }}</div>\r\n                            <div class=\"carbs\">{{ meal.carbs }}</div>\r\n                            <div class=\"fats\">{{ meal.fats}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div text-center=\"\">\r\n            <small>Tap on any line to get daily breakdowns.</small>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"dayData.length === 0\" class=\"centered\">\r\n        No nutrition data available for the last 2 weeks.\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/my-transphormers/nutrition-detail/nutrition-detail.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/my-transphormers/nutrition-detail/nutrition-detail.page.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  display: flex;\n  flex-direction: column;\n  font-size: larger;\n  height: calc(100vh - 44px); }\n\n.plt-android .content {\n  height: calc(100vh - 74px); }\n\n.listing {\n  flex: 1;\n  overflow-y: scroll; }\n\n.expanded > .data {\n  background: #444;\n  color: white; }\n\n.day.even {\n  background: #efefef; }\n\n.day.even .meals {\n    margin-bottom: 24px; }\n\n.day.even .meals .even {\n      background: #f3f3f3; }\n\n.day.even .meals .odd {\n      background: #fafafa; }\n\n.day.odd {\n  background: #ddd; }\n\n.day.odd .meals {\n    margin-bottom: 8px; }\n\n.day.odd .meals .even {\n      background: #fafafa; }\n\n.day.odd .meals .odd {\n      background: #fff; }\n\n.day .meals .data {\n  font-weight: bold;\n  padding: .25em 0;\n  font-size: large; }\n\n.day .data {\n  padding: .5em 0;\n  display: flex;\n  flex-direction: row;\n  font-weight: 900; }\n\n.day .data .message {\n    width: 80%;\n    font-weight: 100;\n    color: #aaa; }\n\n.day .data div {\n    width: 20%;\n    text-align: center;\n    margin: 4px 0; }\n\n.header {\n  display: flex; }\n\n.header div {\n    background: var(--ion-1p-blue-darker);\n    color: white;\n    width: 20%;\n    text-align: center;\n    padding: 4px 0;\n    font-weight: 900; }\n\n.centered {\n  text-align: center;\n  padding: 4em 1em; }\n\n.calories {\n  color: var(--ion-1p-calorie-color); }\n\n.carbs {\n  color: var(--ion-1p-carb-color); }\n\n.protein {\n  color: var(--ion-1p-protein-color); }\n\n.fats {\n  color: var(--ion-1p-fat-color); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktdHJhbnNwaG9ybWVycy9udXRyaXRpb24tZGV0YWlsL0U6XFxpb25pY1xcVmVydmVDb21tZXJjZVxcTmV3RGV2XFxtdHN0LWFwcC9zcmNcXGFwcFxccGFnZXNcXG15LXRyYW5zcGhvcm1lcnNcXG51dHJpdGlvbi1kZXRhaWxcXG51dHJpdGlvbi1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0UsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0UsT0FBTztFQUNQLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBR2Q7RUFjSSxtQkFBbUIsRUFBQTs7QUFkdkI7SUFHTSxtQkFBbUIsRUFBQTs7QUFIekI7TUFNUSxtQkFBbUIsRUFBQTs7QUFOM0I7TUFVUSxtQkFBbUIsRUFBQTs7QUFWM0I7RUFrQkksZ0JBQWdCLEVBQUE7O0FBbEJwQjtJQW9CTSxrQkFBa0IsRUFBQTs7QUFwQnhCO01BdUJRLG1CQUFtQixFQUFBOztBQXZCM0I7TUEyQlEsZ0JBQWdCLEVBQUE7O0FBM0J4QjtFQWtDTSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQXBDdEI7RUF5Q0ksZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBNUNwQjtJQStDTSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFdBQVcsRUFBQTs7QUFqRGpCO0lBb0RNLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYSxFQUFBOztBQUtuQjtFQUNFLGFBQWEsRUFBQTs7QUFEZjtJQUlJLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLCtCQUErQixFQUFBOztBQUdqQztFQUNFLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbXktdHJhbnNwaG9ybWVycy9udXRyaXRpb24tZGV0YWlsL251dHJpdGlvbi1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0NHB4KTtcclxufVxyXG5cclxuLnBsdC1hbmRyb2lkIC5jb250ZW50IHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NHB4KTtcclxufVxyXG5cclxuLmxpc3Rpbmcge1xyXG4gIGZsZXg6IDE7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4uZXhwYW5kZWQgPiAuZGF0YSB7XHJcbiAgYmFja2dyb3VuZDogIzQ0NDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5kYXkge1xyXG4gICYuZXZlbiB7XHJcbiAgICAubWVhbHMge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG5cclxuICAgICAgLmV2ZW4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5vZGQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gIH1cclxuXHJcbiAgJi5vZGQge1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgIC5tZWFscyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuXHJcbiAgICAgIC5ldmVuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAub2RkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWVhbHMge1xyXG4gICAgLmRhdGEge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgcGFkZGluZzogLjI1ZW0gMDtcclxuICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kYXRhIHtcclxuICAgIHBhZGRpbmc6IC41ZW0gMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuXHJcbiAgICAubWVzc2FnZSB7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgfVxyXG4gICAgZGl2IHtcclxuICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDRweCAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgZGl2IHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi0xcC1ibHVlLWRhcmtlcik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNHB4IDA7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gIH1cclxufVxyXG5cclxuLmNlbnRlcmVkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNGVtIDFlbTtcclxufVxyXG5cclxuLmNhbG9yaWVzIHtcclxuICBjb2xvcjogdmFyKC0taW9uLTFwLWNhbG9yaWUtY29sb3IpO1xyXG59XHJcblxyXG4uY2FyYnMge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tMXAtY2FyYi1jb2xvcik7XHJcbn1cclxuXHJcbi5wcm90ZWluIHtcclxuICBjb2xvcjogdmFyKC0taW9uLTFwLXByb3RlaW4tY29sb3IpO1xyXG59XHJcblxyXG4uZmF0cyB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi0xcC1mYXQtY29sb3IpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/my-transphormers/nutrition-detail/nutrition-detail.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/my-transphormers/nutrition-detail/nutrition-detail.page.ts ***!
  \**********************************************************************************/
/*! exports provided: NutritionDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionDetailPage", function() { return NutritionDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_trainer_transphormer_trainer_transphormer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/trainer-transphormer/trainer-transphormer.service */ "./src/app/services/trainer-transphormer/trainer-transphormer.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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




var NutritionDetailPage = /** @class */ (function () {
    function NutritionDetailPage(trainerTransphormerService, transphormerService, route) {
        this.trainerTransphormerService = trainerTransphormerService;
        this.transphormerService = transphormerService;
        this.route = route;
        this.dayData = [];
        this.expansions = [];
    }
    NutritionDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (pmap) { return _this.loadTransphormer(pmap.get('id')); });
    };
    NutritionDetailPage.prototype.loadTransphormer = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.transphormerService.transphormer(+id)];
                    case 1:
                        _a.transphormer = (_b.sent());
                        this.loadDefaultNutritionData();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(NutritionDetailPage.prototype, "backHref", {
        get: function () {
            return this.transphormer ? "/details/" + this.transphormer.id : '/my-transphormers';
        },
        enumerable: true,
        configurable: true
    });
    NutritionDetailPage.prototype.loadDefaultNutritionData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var end, start;
            var _this = this;
            return __generator(this, function (_a) {
                end = moment__WEBPACK_IMPORTED_MODULE_3__();
                start = moment__WEBPACK_IMPORTED_MODULE_3__().subtract(14, 'day');
                return [2 /*return*/, this.trainerTransphormerService.trackedItems(this.transphormer.id, start.format('YYYY-MM-DD'), end.format('YYYY-MM-DD'))
                        .then(function (result) {
                        result.forEach(function (day) {
                            var dayInfo = _this.processDay(day);
                            _this.dayData.push(dayInfo);
                        });
                    })];
            });
        });
    };
    NutritionDetailPage.prototype.expandDate = function (macro) {
        if (macro.calories === 0) {
            return;
        }
        var date = macro.track_date;
        this.expansions[date] = (this.expansions[date] ? !this.expansions[date] : true);
    };
    NutritionDetailPage.prototype.sumMacro = function (macro, day, meal) {
        return Math.round(day.tracked_items.reduce(function (a, v) { return !meal ? a + v[macro] : (v.meal !== meal ? a : (a + v[macro])); }, 0));
    };
    NutritionDetailPage.prototype.sumAll = function (day, meal) {
        var _this = this;
        var val = {};
        var items = ['calories', 'fats', 'protein', 'carbs'];
        items.forEach(function (i) {
            val[i] = _this.sumMacro(i, day, meal);
        });
        return val;
    };
    NutritionDetailPage.prototype.processDay = function (day) {
        var _this = this;
        var mealNumbers = [];
        var meals = [];
        day.tracked_items.forEach(function (item) {
            if (mealNumbers.indexOf(item.meal) === -1) {
                mealNumbers.push(item.meal);
            }
        });
        mealNumbers.forEach(function (number) {
            meals.push(__assign({ meal: number }, _this.sumAll(day, number)));
        });
        return __assign({ track_date: day.track_date, short_date: moment__WEBPACK_IMPORTED_MODULE_3__(day.track_date).format('M/D') }, this.sumAll(day), { meals: meals });
    };
    Object.defineProperty(NutritionDetailPage.prototype, "sortedFood", {
        get: function () {
            return this.dayData.sort(function (a, b) { return a.track_date < b.track_date ? 1 : -1; });
        },
        enumerable: true,
        configurable: true
    });
    NutritionDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nutrition-detail',
            template: __webpack_require__(/*! ./nutrition-detail.page.html */ "./src/app/pages/my-transphormers/nutrition-detail/nutrition-detail.page.html"),
            styles: [__webpack_require__(/*! ./nutrition-detail.page.scss */ "./src/app/pages/my-transphormers/nutrition-detail/nutrition-detail.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_trainer_transphormer_trainer_transphormer_service__WEBPACK_IMPORTED_MODULE_2__["TrainerTransphormerService"],
            _services_trainer_transphormer_trainer_transphormer_service__WEBPACK_IMPORTED_MODULE_2__["TrainerTransphormerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NutritionDetailPage);
    return NutritionDetailPage;
}());



/***/ }),

/***/ "./src/app/services/trainer-transphormer/trainer-transphormer.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/services/trainer-transphormer/trainer-transphormer.service.ts ***!
  \*******************************************************************************/
/*! exports provided: TrainerTransphormerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerTransphormerService", function() { return TrainerTransphormerService; });
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





var TrainerTransphormerService = /** @class */ (function (_super) {
    __extends(TrainerTransphormerService, _super);
    function TrainerTransphormerService(http, platform) {
        var _this = _super.call(this, http, platform) || this;
        _this.http = http;
        _this.platform = platform;
        TrainerTransphormerService_1.SET_PLATFORM(platform);
        return _this;
    }
    TrainerTransphormerService_1 = TrainerTransphormerService;
    TrainerTransphormerService.prototype.transphormers = function (params, page, perPage) {
        if (params === void 0) { params = null; }
        if (page === void 0) { page = 1; }
        if (perPage === void 0) { perPage = 100; }
        var options = TrainerTransphormerService_1.BaseOptions();
        options.params = params ? Object.assign({}, params) : {};
        options.params.perPage = perPage.toString();
        options.params.page = page.toString();
        return this.http
            .get(TrainerTransphormerService_1.Url('trainer/transphormer'), options)
            .toPromise()
            .catch(TrainerTransphormerService_1.HandleError);
    };
    TrainerTransphormerService.prototype.transphormer = function (id) {
        return this.http
            .get(TrainerTransphormerService_1.Url("trainer/transphormer/" + id), TrainerTransphormerService_1.BaseOptions())
            .toPromise()
            .catch(TrainerTransphormerService_1.HandleError);
    };
    TrainerTransphormerService.prototype.transphormerPhotos = function (transphormerId) {
        return this.http.get(TrainerTransphormerService_1.Url("trainer/transphormer/" + transphormerId + "/camera"), TrainerTransphormerService_1.BaseOptions())
            .toPromise()
            .catch(TrainerTransphormerService_1.HandleError);
    };
    TrainerTransphormerService.prototype.transphormerWeights = function (transphormerId) {
        var _this = this;
        return this.http.get(TrainerTransphormerService_1.Url("trainer/transphormer/" + transphormerId + "/weigh-ins"), TrainerTransphormerService_1.BaseOptions())
            .toPromise()
            .then(function (weights) { return weights.map(function (weight) { return _this.loggedDateConversion(weight); }); })
            .catch(TrainerTransphormerService_1.HandleError);
    };
    TrainerTransphormerService.prototype.trackedItems = function (transphormerId, from, to) {
        var url = "trainer/transphormer/" + transphormerId + "/tracked-items";
        var opts = [];
        if (from) {
            opts.push('from=' + escape(from));
        }
        if (to) {
            opts.push('to=' + escape(to));
        }
        if (opts.length > 0) {
            url += '?' + opts.join('&');
        }
        return this.http.get(TrainerTransphormerService_1.Url(url), TrainerTransphormerService_1.BaseOptions())
            .toPromise()
            .catch(TrainerTransphormerService_1.HandleError);
    };
    /**
     * Converts logged date string value to date value
     * @param weight
     */
    TrainerTransphormerService.prototype.loggedDateConversion = function (weight) {
        weight.logged_on = moment__WEBPACK_IMPORTED_MODULE_3__(weight.logged_on, 'YYYY-MM-DD HH:mm:ss', true);
        return weight;
    };
    var TrainerTransphormerService_1;
    TrainerTransphormerService = TrainerTransphormerService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], TrainerTransphormerService);
    return TrainerTransphormerService;
}(_base_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ })

}]);
//# sourceMappingURL=pages-my-transphormers-nutrition-detail-nutrition-detail-module.js.map