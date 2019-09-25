(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-account-settings-account-settings-module~pages-dashboard-dashboard-module"],{

/***/ "./src/app/services/account/account.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/account/account.service.ts ***!
  \*****************************************************/
/*! exports provided: NotificationValues, AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationValues", function() { return NotificationValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base.service */ "./src/app/services/base/base.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _firebase_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase/firebase.service */ "./src/app/services/firebase/firebase.service.ts");
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






var NotificationValues;
(function (NotificationValues) {
    NotificationValues[NotificationValues["WORKOUT_REMINDER"] = 1] = "WORKOUT_REMINDER";
    NotificationValues[NotificationValues["WEIGHT_REMINDER"] = 2] = "WEIGHT_REMINDER";
    NotificationValues[NotificationValues["PHOTO_REMINDER"] = 3] = "PHOTO_REMINDER";
})(NotificationValues || (NotificationValues = {}));
var AccountService = /** @class */ (function (_super) {
    __extends(AccountService, _super);
    function AccountService(http, platform, localNotification, firebase) {
        var _this = _super.call(this, http, platform) || this;
        _this.http = http;
        _this.platform = platform;
        _this.localNotification = localNotification;
        _this.firebase = firebase;
        AccountService_1.SET_PLATFORM(platform);
        return _this;
    }
    AccountService_1 = AccountService;
    AccountService.prototype.getAccountSetting = function () {
        return this.http
            .get(AccountService_1.Url('account/show'), AccountService_1.BaseOptions(true, true))
            .toPromise()
            .catch(AccountService_1.HandleError);
    };
    AccountService.prototype.updateAccountSetting = function (data) {
        return this.http
            .post(AccountService_1.Url('account/update'), data, AccountService_1.BaseOptions())
            .toPromise()
            .catch(AccountService_1.HandleError);
    };
    AccountService.prototype.setWorkoutReminder = function (toRemind, hour, minute) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('cordova')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.localNotification.clear(NotificationValues.WORKOUT_REMINDER)];
                    case 1:
                        _a.sent();
                        if (toRemind) {
                            this.localNotification.schedule({
                                id: NotificationValues.WORKOUT_REMINDER,
                                title: 'Workout Reminder',
                                text: 'Time to do some work! #DuesPaid',
                                foreground: true,
                                trigger: {
                                    every: {
                                        minute: minute,
                                        hour: hour,
                                    },
                                    count: 10
                                }
                            });
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, true];
                }
            });
        });
    };
    AccountService.prototype.setPhotoReminder = function (toRemind, weeks) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('cordova')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.localNotification.clear(NotificationValues.PHOTO_REMINDER)];
                    case 1:
                        _a.sent();
                        if (toRemind) {
                            this.localNotification.schedule({
                                id: NotificationValues.PHOTO_REMINDER,
                                title: 'Picture Reminder',
                                text: 'Don’t forget to take this week’s progress pictures!',
                                foreground: true,
                                trigger: {
                                    every: {
                                        hour: 7,
                                        minute: 0,
                                        weekday: 5 /* Friday */
                                    },
                                    count: 10
                                }
                            });
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, true];
                }
            });
        });
    };
    AccountService.prototype.setWeighInReminder = function (toRemind, weeks) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('cordova')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.localNotification.clear(NotificationValues.WEIGHT_REMINDER)];
                    case 1:
                        _a.sent();
                        if (toRemind) {
                            this.localNotification.schedule({
                                id: NotificationValues.WEIGHT_REMINDER,
                                title: 'Weigh In Reminder',
                                text: 'Hop on the scale and then enter your progress in the app!',
                                foreground: true,
                                trigger: {
                                    every: {
                                        hour: 7,
                                        minute: 0,
                                        weekday: 3 /* Wednesday */
                                    },
                                    count: 10
                                }
                            });
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, true];
                }
            });
        });
    };
    AccountService.prototype.subscribeToLiveStream = function (subscribe) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (subscribe) {
                    this.firebase.subscribeToLivestreamNotification();
                }
                else {
                    this.firebase.unsubscribeToLivestreamNotification();
                }
                return [2 /*return*/];
            });
        });
    };
    var AccountService_1;
    AccountService = AccountService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__["LocalNotifications"],
            _firebase_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]])
    ], AccountService);
    return AccountService;
}(_base_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ })

}]);
//# sourceMappingURL=default~pages-account-settings-account-settings-module~pages-dashboard-dashboard-module.js.map