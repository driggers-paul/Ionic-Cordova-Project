(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-dashboard-dashboard-module~pages-macro-macro-module"],{

/***/ "./src/app/services/macro-management/macro-management.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/macro-management/macro-management.service.ts ***!
  \***********************************************************************/
/*! exports provided: MacroManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroManagementService", function() { return MacroManagementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nutrition_nutrition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nutrition/nutrition.service */ "./src/app/services/nutrition/nutrition.service.ts");
/* harmony import */ var _weights_weights_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weights/weights.service */ "./src/app/services/weights/weights.service.ts");
/* harmony import */ var _nutrition_calculator_nutrition_calculator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nutrition-calculator/nutrition-calculator.service */ "./src/app/services/nutrition-calculator/nutrition-calculator.service.ts");
/* harmony import */ var _custom_macro_custom_macro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom-macro/custom-macro.service */ "./src/app/services/custom-macro/custom-macro.service.ts");
/* harmony import */ var _pages_nutrition_nutrition_calculator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/nutrition/nutrition-calculator */ "./src/app/pages/nutrition/nutrition-calculator.ts");
/* harmony import */ var _food_items_food_items_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../food-items/food-items.service */ "./src/app/services/food-items/food-items.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
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








var MacroManagementService = /** @class */ (function () {
    function MacroManagementService(nutritionService, nutritionCalculator, customMacroService, weightService, foodItemService) {
        this.nutritionService = nutritionService;
        this.nutritionCalculator = nutritionCalculator;
        this.customMacroService = customMacroService;
        this.weightService = weightService;
        this.foodItemService = foodItemService;
    }
    MacroManagementService.prototype.macros = function (transphormer, forMacroCounting, currentWeight, date) {
        if (currentWeight === void 0) { currentWeight = null; }
        if (date === void 0) { date = null; }
        return __awaiter(this, void 0, void 0, function () {
            var goalValues, bmrValues, meals, weightRequest, _a, weight, latestMacro, macroCounting, macros;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        goalValues = this.defaultGoalValues();
                        bmrValues = this.defaultGoalValues();
                        meals = this.blankMeal();
                        date = date || moment__WEBPACK_IMPORTED_MODULE_7__();
                        weightRequest = currentWeight ? Promise.resolve(currentWeight) : this.weightService.latestWeight();
                        return [4 /*yield*/, Promise.all([
                                weightRequest,
                                this.customMacroService.latestMacro(),
                                this.macroCounting(date)
                            ])];
                    case 1:
                        _a = _b.sent(), weight = _a[0], latestMacro = _a[1], macroCounting = _a[2];
                        macros = null;
                        if (!forMacroCounting) {
                            macros = new _pages_nutrition_nutrition_calculator__WEBPACK_IMPORTED_MODULE_5__["NutritionCalculator"](transphormer, weight.weight).getMacros();
                            return [2 /*return*/, { goalValues: goalValues, macros: macros, meals: meals, macroCounting: macroCounting, weight: weight, bmrValues: bmrValues }];
                        }
                        bmrValues = this.bmrValue(weight, transphormer);
                        goalValues = bmrValues;
                        if (latestMacro) {
                            if (!latestMacro.reset_to_original) {
                                goalValues = latestMacro;
                            }
                        }
                        meals = this.setupMeals(meals, macroCounting);
                        return [2 /*return*/, { goalValues: goalValues, macros: macros, meals: meals, macroCounting: macroCounting, weight: weight, bmrValues: bmrValues }];
                }
            });
        });
    };
    MacroManagementService.prototype.bmrValue = function (weight, transphormer) {
        return this.nutritionCalculator.calculateAdvancedMacros(weight.weight, transphormer.goal_weight, transphormer.activity_level, transphormer.transphormation_goal, transphormer.sex, transphormer.preference_macro_counting);
    };
    MacroManagementService.prototype.blankMeal = function () {
        var meals = [];
        for (var i = 1; i <= 6; i++) {
            meals.push({
                meal_count: i,
                food_items: [],
                active: false
            });
        }
        return meals;
    };
    MacroManagementService.prototype.defaultGoalValues = function () {
        return {
            calories: 0,
            protein: 0,
            fats: 0,
            carbs: 0
        };
    };
    MacroManagementService.prototype.setupMeals = function (meals, macroCounting) {
        var _this = this;
        return meals.map(function (meal) {
            meal.food_items = macroCounting.tracked_items
                .filter(function (trackedItem) { return trackedItem.meal === meal.meal_count; })
                .map(function (trackedItem) { return _this.foodItemService.convertToFoodItem(trackedItem); });
            meal.active = meal.food_items.length > 0;
            return meal;
        });
    };
    MacroManagementService.prototype.macroCounting = function (date) {
        return __awaiter(this, void 0, void 0, function () {
            var macroCounting, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.nutritionService.getMacroCountingInfo(date.toDate())];
                    case 1:
                        macroCounting = (_a.sent());
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        if (e_1.status !== 404) {
                            throw e_1;
                        }
                        macroCounting = {
                            track_date: moment__WEBPACK_IMPORTED_MODULE_7__().format('YYYY-MM-DD'),
                            water_amount: 0,
                            tracked_items: []
                        };
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, macroCounting];
                }
            });
        });
    };
    MacroManagementService.prototype.displayMacros = function (transphormer, macros, meals) {
        return {
            get calories() {
                return calculateCalorieValue('calories');
            },
            get fats() {
                return calculateCalorieValue('fats');
            },
            get protein() {
                return calculateCalorieValue('protein');
            },
            get carbs() {
                return calculateCalorieValue('carbs');
            },
        };
        function calculateCalorieValue(type) {
            if (transphormer.likely_to_do !== 'Calorie / Macro counting') {
                if (macros) {
                    return macros[type].toString();
                }
                return '?';
            }
            if (!meals) {
                return '?';
            }
            return meals.reduce(function (carry, meal) { return carry + meal.food_items
                .reduce(function (typeValue, foodItem) { return typeValue + foodItem[type]; }, 0); }, 0).toFixed(0);
        }
    };
    MacroManagementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_nutrition_nutrition_service__WEBPACK_IMPORTED_MODULE_1__["NutritionService"],
            _nutrition_calculator_nutrition_calculator_service__WEBPACK_IMPORTED_MODULE_3__["NutritionCalculatorService"],
            _custom_macro_custom_macro_service__WEBPACK_IMPORTED_MODULE_4__["CustomMacroService"],
            _weights_weights_service__WEBPACK_IMPORTED_MODULE_2__["WeightsService"],
            _food_items_food_items_service__WEBPACK_IMPORTED_MODULE_6__["FoodItemsService"]])
    ], MacroManagementService);
    return MacroManagementService;
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
//# sourceMappingURL=default~pages-dashboard-dashboard-module~pages-macro-macro-module.js.map