(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-custom-food-template-custom-food-template-module~pages-dashboard-dashboard-module~page~9737ce41"],{

/***/ "./src/app/services/custom-macro/custom-macro.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/custom-macro/custom-macro.service.ts ***!
  \***************************************************************/
/*! exports provided: CustomMacroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMacroService", function() { return CustomMacroService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.service */ "./src/app/services/base/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
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





var CustomMacroService = /** @class */ (function (_super) {
    __extends(CustomMacroService, _super);
    function CustomMacroService(http, platform, alertCtrl, navCtrl) {
        var _this = _super.call(this, http, platform) || this;
        _this.http = http;
        _this.platform = platform;
        _this.alertCtrl = alertCtrl;
        _this.navCtrl = navCtrl;
        return _this;
    }
    CustomMacroService_1 = CustomMacroService;
    /**
     * Returns list of previously created macros
     */
    CustomMacroService.prototype.history = function () {
        return this.http.get(CustomMacroService_1.Url('nutritions/custom-macros'), CustomMacroService_1.BaseOptions(true, true))
            .toPromise()
            .then(function (result) { return result.map(function (macro) {
            macro.edit_date = moment__WEBPACK_IMPORTED_MODULE_4__(macro.edit_date);
            return macro;
        }); })
            .catch(CustomMacroService_1.HandleError);
    };
    /**
     * Creates new custom macro record
     *
     * @param reset_to_original
     * @param protein
     * @param carbs
     * @param fats
     * @param date
     */
    CustomMacroService.prototype.create = function (reset_to_original, protein, carbs, fats, date) {
        var data = {
            reset_to_original: reset_to_original,
            carbs: carbs,
            fats: fats,
            protein: protein,
            date: date
        };
        return this.http.post(CustomMacroService_1.Url('nutritions/custom-macros'), data, CustomMacroService_1.BaseOptions())
            .toPromise()
            .then(function (result) {
            result.edit_date = moment__WEBPACK_IMPORTED_MODULE_4__(result.edit_date);
            return result;
        })
            .catch(CustomMacroService_1.HandleError);
    };
    /**
     * Action to update existing custom macro record
     * @param id
     * @param reset_to_original
     * @param protein
     * @param carbs
     * @param fats
     */
    CustomMacroService.prototype.update = function (id, reset_to_original, protein, carbs, fats) {
        var data = {
            reset_to_original: reset_to_original,
            carbs: carbs,
            fats: fats,
            protein: protein
        };
        return this.http.patch(CustomMacroService_1.Url("nutritions/custom-macros/" + id), data, CustomMacroService_1.BaseOptions())
            .toPromise()
            .then(function (result) {
            result.edit_date = moment__WEBPACK_IMPORTED_MODULE_4__(result.edit_date);
            return result;
        })
            .catch(CustomMacroService_1.HandleError);
    };
    /**
     * Returns the latest custom macro
     */
    CustomMacroService.prototype.latestMacro = function () {
        return this.http.get(CustomMacroService_1.Url('nutritions/custom-macros/latest'), CustomMacroService_1.BaseOptions())
            .toPromise()
            .then(function (result) {
            if (result.id) {
                result.edit_date = moment__WEBPACK_IMPORTED_MODULE_4__(result.edit_date);
                return result;
            }
            else {
                return null;
            }
        })
            .catch(CustomMacroService_1.HandleError);
    };
    CustomMacroService.prototype.notifyToUpdateMacro = function (newWeight, comparisionWeight) {
        return __awaiter(this, void 0, void 0, function () {
            var diff, latestMacro, transphormer, alert_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        diff = newWeight - comparisionWeight;
                        if (!(Math.abs(diff) > 10)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.latestMacro()];
                    case 1:
                        latestMacro = _a.sent();
                        latestMacro = latestMacro || { reset_to_original: true };
                        transphormer = JSON.parse(window.localStorage.getItem('transphormer'));
                        if (!(!latestMacro.reset_to_original && transphormer.likely_to_do === 'Calorie / Macro counting')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: 'Update your macro',
                                message: "You have " + (diff > 0 ? 'gained' : 'lost') + " 10 pounds or more. Please update your macro settings.",
                                backdropDismiss: false,
                                buttons: [{
                                        text: 'Cancel',
                                        cssClass: 'global-danger',
                                    }, {
                                        text: 'Update',
                                        handler: function () {
                                            _this.navCtrl.navigateRoot('macro?openCustomMacro=true');
                                        }
                                    }]
                            })];
                    case 2:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    var CustomMacroService_1;
    CustomMacroService = CustomMacroService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], CustomMacroService);
    return CustomMacroService;
}(_base_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/services/food-items/food-items.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/food-items/food-items.service.ts ***!
  \***********************************************************/
/*! exports provided: FoodItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodItemsService", function() { return FoodItemsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.service */ "./src/app/services/base/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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




var FoodItemsService = /** @class */ (function (_super) {
    __extends(FoodItemsService, _super);
    function FoodItemsService(http, platform) {
        var _this = _super.call(this, http, platform) || this;
        _this.http = http;
        _this.platform = platform;
        FoodItemsService_1.SET_PLATFORM(platform);
        return _this;
    }
    FoodItemsService_1 = FoodItemsService;
    FoodItemsService.prototype.createFoodItem = function (nutritionId, meal, isCustom, foodItem, isCustomFoodTemplate) {
        var _this = this;
        if (isCustomFoodTemplate === void 0) { isCustomFoodTemplate = false; }
        var body = this.convertFoodItemToBody(foodItem, meal, isCustom, isCustomFoodTemplate);
        return this.http.post(FoodItemsService_1.Url("nutritions/macro-counting/" + nutritionId + "/tracked-item"), body, FoodItemsService_1.BaseOptions())
            .toPromise()
            .then(function (result) { return _this.convertToFoodItem(result); })
            .catch(FoodItemsService_1.HandleError);
    };
    FoodItemsService.prototype.convertToFoodItem = function (trackedItem) {
        return {
            id: trackedItem.id,
            name: trackedItem.name,
            meal: trackedItem.meal,
            calories: trackedItem.calories,
            carbs: trackedItem.carbs,
            protein: trackedItem.protein,
            fats: trackedItem.fats,
            is_custom: trackedItem.is_custom,
            is_branded_food: trackedItem.is_branded_food,
            nutritioninx_food_name: trackedItem.nutritioninx_food_name,
            nutritioninx_item_id: trackedItem.nutritioninx_item_id,
            is_custom_food_template: trackedItem.is_custom_food_template,
            amount_consumed: {
                unit: trackedItem.consumed_unit,
                amount: trackedItem.consumed_amount,
            },
            serving_size: {
                calories: trackedItem.serving_information.calories,
                carbs: trackedItem.serving_information.carbs,
                protein: trackedItem.serving_information.protein,
                fats: trackedItem.serving_information.fats,
                unit: trackedItem.serving_information.serving_unit,
                amount: trackedItem.serving_information.serving_amount,
            },
            alt_servings: trackedItem.serving_information.alt_servings,
            total_count: trackedItem.total_count || 0
        };
    };
    FoodItemsService.prototype.updateFoodItem = function (foodItemId, nutritionId, meal, isCustom, foodItem, isCustomFoodTemplate) {
        var _this = this;
        if (isCustomFoodTemplate === void 0) { isCustomFoodTemplate = false; }
        var body = this.convertFoodItemToBody(foodItem, meal, isCustom, isCustomFoodTemplate);
        return this.http.put(FoodItemsService_1.Url("nutritions/macro-counting/" + nutritionId + "/tracked-item/" + foodItemId), body, FoodItemsService_1.BaseOptions())
            .toPromise()
            .then(function (result) { return _this.convertToFoodItem(result); })
            .catch(FoodItemsService_1.HandleError);
    };
    FoodItemsService.prototype.deleteFoodItem = function (foodItemId, nutritionDayId) {
        return this.http.delete(FoodItemsService_1.Url("nutritions/macro-counting/" + nutritionDayId + "/tracked-item/" + foodItemId), FoodItemsService_1.BaseOptions())
            .toPromise()
            .catch(FoodItemsService_1.HandleError);
    };
    /**
     * Returns recent food items
     */
    FoodItemsService.prototype.recentFoodItems = function () {
        var _this = this;
        return this.http.get(FoodItemsService_1.Url("nutritions/macro-counting/tracked-item/recent"), FoodItemsService_1.BaseOptions(true, true, 900))
            .toPromise()
            .then(function (result) { return result.map(function (item) { return _this.convertToFoodItem(item); }); })
            .catch(FoodItemsService_1.HandleError);
    };
    /**
     * Returns around this time food items
     */
    FoodItemsService.prototype.aroundTimeFoodItems = function () {
        var _this = this;
        return this.http.get(FoodItemsService_1.Url("nutritions/macro-counting/tracked-item/around-this-time"), FoodItemsService_1.BaseOptions(true, true, 3600))
            .toPromise()
            .then(function (result) { return result.map(function (item) { return _this.convertToFoodItem(item); }); })
            .catch(FoodItemsService_1.HandleError);
    };
    FoodItemsService.prototype.convertFoodItemToBody = function (foodItem, meal, isCustom, isCustomFoodTemplate) {
        if (isCustomFoodTemplate === void 0) { isCustomFoodTemplate = false; }
        return {
            calories: foodItem.calories,
            fats: foodItem.fats,
            carbs: foodItem.carbs,
            protein: foodItem.protein,
            meal: meal,
            is_custom: isCustom,
            name: foodItem.name,
            is_custom_food_template: isCustomFoodTemplate,
            is_branded_food: foodItem.is_branded_food,
            nutritioninx_food_name: foodItem.nutritioninx_food_name,
            nutritioninx_item_id: foodItem.nutritioninx_item_id,
            meal_template_id: foodItem.meal_template_id || null,
            serving_size: {
                calories: foodItem.serving_size.calories,
                fats: foodItem.serving_size.fats,
                carbs: foodItem.serving_size.carbs,
                protein: foodItem.serving_size.protein,
                amount: foodItem.serving_size.amount,
                unit: foodItem.serving_size.unit,
            },
            amount_consumed: {
                amount: foodItem.amount_consumed.amount,
                unit: foodItem.amount_consumed.unit,
            },
            alt_servings: foodItem.alt_servings
        };
    };
    var FoodItemsService_1;
    FoodItemsService = FoodItemsService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], FoodItemsService);
    return FoodItemsService;
}(_base_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ })

}]);
//# sourceMappingURL=default~pages-custom-food-template-custom-food-template-module~pages-dashboard-dashboard-module~page~9737ce41.js.map