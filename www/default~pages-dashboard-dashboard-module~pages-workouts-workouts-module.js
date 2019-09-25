(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-dashboard-dashboard-module~pages-workouts-workouts-module"],{

/***/ "./src/app/components/bottom-menu/bottom-menu.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/bottom-menu/bottom-menu.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-footer>\r\n  <ion-toolbar>\r\n    <div class=\"bottom-menu inline\">\r\n      <div class=\"inline-column\">\r\n        <ion-button fill=\"clear\" (click)=\"goToDashboard()\">\r\n          <ion-icon name=\"speedometer\"></ion-icon>\r\n        </ion-button>\r\n        <div class=\"caption\">Dashboard</div>\r\n      </div>\r\n      <div class=\"inline-column\">\r\n        <ion-button fill=\"clear\" (click)=\"goToWorkouts()\">\r\n          <ion-icon name=\"walk\"></ion-icon>\r\n        </ion-button>\r\n        <div class=\"caption\">Workouts</div>\r\n      </div>\r\n      <div class=\"inline-column\">\r\n        <ion-button fill=\"clear\" (click)=\"goToNutrition()\">\r\n          <ion-icon src=\"/assets/icon/nutrition.svg\"></ion-icon>\r\n        </ion-button>\r\n        <div class=\"caption\">Nutrition</div>\r\n      </div>\r\n      <div class=\"inline-column\" *ngIf=\"user\">\r\n        <ion-button fill=\"clear\" (click)=\"goToMessages()\">\r\n          <ion-icon name=\"chatboxes\"></ion-icon>\r\n          <ion-badge *ngIf=\"user.is_trainer && advisorHasMessages\" class=\"unread-advisor\" color=\"secondary\">{{ advisorUnreadCount }}</ion-badge>\r\n          <ion-icon name=\"radio-button-on\" class=\"unread-transphormer\" color=\"danger\" mode=\"md\" *ngIf=\"!user.is_trainer && transphormerHasMessages\"></ion-icon>\r\n        </ion-button>\r\n        <div class=\"caption\">Inbox</div>\r\n      </div>\r\n    </div>\r\n\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/bottom-menu/bottom-menu.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/bottom-menu/bottom-menu.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  font-size: 36px; }\n\nion-toolbar {\n  --padding-top: 0;\n  --padding-bottom:0; }\n\n.bottom-menu {\n  background-color: transparent;\n  display: flex;\n  justify-content: space-around;\n  align-items: center; }\n\n.bottom-menu .inline-column {\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    align-items: center; }\n\n.bottom-menu ion-button {\n    height: 40px;\n    --border: none;\n    --padding: 0;\n    margin: 0;\n    --color: var(--ion-color-brand); }\n\n.bottom-menu .caption {\n    color: var(--ion-1p-lightest);\n    text-transform: capitalize;\n    font-size: 12px; }\n\n.unread-advisor {\n  position: absolute;\n  right: 0;\n  top: 1px; }\n\n.unread-transphormer {\n  position: absolute;\n  right: 0;\n  top: 1px;\n  font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib3R0b20tbWVudS9FOlxcaW9uaWNcXFZlcnZlQ29tbWVyY2VcXE5ld0RldlxcbXRzdC1hcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGJvdHRvbS1tZW51XFxib3R0b20tbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxnQkFBYztFQUNkLGtCQUFpQixFQUFBOztBQUduQjtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQixFQUFBOztBQUpyQjtJQU9JLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG1CQUFtQixFQUFBOztBQVZ2QjtJQWNJLFlBQVk7SUFDWixjQUFTO0lBQ1QsWUFBVTtJQUNWLFNBQVM7SUFDVCwrQkFBUSxFQUFBOztBQWxCWjtJQXNCSSw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLGVBQWUsRUFBQTs7QUFJbkI7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFFBQVEsRUFBQTs7QUFHVjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUTtFQUNSLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm90dG9tLW1lbnUvYm90dG9tLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1wYWRkaW5nLXRvcDogMDtcclxuICAtLXBhZGRpbmctYm90dG9tOjA7XHJcbn1cclxuXHJcbi5ib3R0b20tbWVudSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAuaW5saW5lLWNvbHVtbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC0tYm9yZGVyOiBub25lO1xyXG4gICAgLS1wYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWJyYW5kKTtcclxuICB9XHJcblxyXG4gIC5jYXB0aW9uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tMXAtbGlnaHRlc3QpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG59XHJcblxyXG4udW5yZWFkLWFkdmlzb3Ige1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDFweDtcclxufVxyXG5cclxuLnVucmVhZC10cmFuc3Bob3JtZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDFweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/bottom-menu/bottom-menu.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/bottom-menu/bottom-menu.component.ts ***!
  \*****************************************************************/
/*! exports provided: BottomMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomMenuComponent", function() { return BottomMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_global_emitter_global_emitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global-emitter/global-emitter.service */ "./src/app/services/global-emitter/global-emitter.service.ts");
/* harmony import */ var _services_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/message/message.service */ "./src/app/services/message/message.service.ts");
/* harmony import */ var _side_menu_side_menu_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../side-menu/side-menu-handler */ "./src/app/components/side-menu/side-menu-handler.ts");
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





var BottomMenuComponent = /** @class */ (function () {
    function BottomMenuComponent(navCtrl, alertCtrl, globalEmitter, messageService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.globalEmitter = globalEmitter;
        this.messageService = messageService;
        this.advisorUnreadCount = 0;
        this.transphormerHasMessages = false;
        this.advisorHasMessages = false;
        this.globalEmitter.listen(_services_global_emitter_global_emitter_service__WEBPACK_IMPORTED_MODULE_2__["GlobalEvents"].SessionInitialized).subscribe(function () { return _this.checkUnreadNotification(); });
        this.globalEmitter.listen(_services_global_emitter_global_emitter_service__WEBPACK_IMPORTED_MODULE_2__["GlobalEvents"].TransphormerMessageRead).subscribe(function () { return _this.transphormerHasMessages = false; });
        this.globalEmitter.listen(_services_global_emitter_global_emitter_service__WEBPACK_IMPORTED_MODULE_2__["GlobalEvents"].NewTransphormerMessages).subscribe(function () { return _this.checkUnreadNotification(); });
        this.globalEmitter.listen(_services_global_emitter_global_emitter_service__WEBPACK_IMPORTED_MODULE_2__["GlobalEvents"].NewAdvisorMessages).subscribe(function () { return _this.checkUnreadNotification(); });
        this.globalEmitter.listen(_services_global_emitter_global_emitter_service__WEBPACK_IMPORTED_MODULE_2__["GlobalEvents"].AdvisorMessageRead).subscribe(function () { return _this.checkUnreadNotification(); });
    }
    BottomMenuComponent.prototype.ngOnInit = function () {
        _side_menu_side_menu_handler__WEBPACK_IMPORTED_MODULE_4__["SideMenuHandlerEmitter"].getEmitter().emit('navigating');
        this.checkUnreadNotification();
    };
    BottomMenuComponent.prototype.goToDashboard = function () {
        _side_menu_side_menu_handler__WEBPACK_IMPORTED_MODULE_4__["SideMenuHandlerEmitter"].getEmitter().emit('navigating');
        this.navCtrl.navigateRoot('dashboard');
    };
    BottomMenuComponent.prototype.goToWorkouts = function () {
        _side_menu_side_menu_handler__WEBPACK_IMPORTED_MODULE_4__["SideMenuHandlerEmitter"].getEmitter().emit('navigating');
        this.navCtrl.navigateForward('workouts');
    };
    BottomMenuComponent.prototype.goToNutrition = function () {
        _side_menu_side_menu_handler__WEBPACK_IMPORTED_MODULE_4__["SideMenuHandlerEmitter"].getEmitter().emit('navigating');
        if (this.user.likely_to_do === 'Calorie / Macro counting' && this.user.is_paid_user) {
            this.navCtrl.navigateForward('macro');
        }
        else {
            this.navCtrl.navigateForward('nutrition');
        }
    };
    BottomMenuComponent.prototype.premiumAlert = function (feature) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Go Premium?',
                            subHeader: feature + " is available only for Premium subscribers.",
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'danger',
                                },
                                {
                                    text: 'Go Premium',
                                    handler: function () {
                                        _this.navCtrl.navigateRoot('subscription');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [2 /*return*/, alert.present()];
                }
            });
        });
    };
    BottomMenuComponent.prototype.goToMessages = function () {
        if (!this.user.is_paid_user) {
            this.premiumAlert('Advisor messaging');
            return false;
        }
        _side_menu_side_menu_handler__WEBPACK_IMPORTED_MODULE_4__["SideMenuHandlerEmitter"].getEmitter().emit('navigating');
        if (this.user.is_trainer) {
            this.navCtrl.navigateForward('trainer-messages');
        }
        else {
            this.navCtrl.navigateForward('messages');
        }
    };
    BottomMenuComponent.prototype.checkUnreadNotification = function () {
        return __awaiter(this, void 0, void 0, function () {
            var count;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.messageService.unreadMessageCount()];
                    case 1:
                        count = _a.sent();
                        this.transphormerHasMessages = count.unread_transphormer_messages > 0;
                        this.advisorHasMessages = count.unread_advisor_messages > 0;
                        this.advisorUnreadCount = count.unread_advisor_messages >= 100 ? '99+' : count.unread_advisor_messages;
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BottomMenuComponent.prototype, "user", void 0);
    BottomMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bottom-menu',
            template: __webpack_require__(/*! ./bottom-menu.component.html */ "./src/app/components/bottom-menu/bottom-menu.component.html"),
            styles: [__webpack_require__(/*! ./bottom-menu.component.scss */ "./src/app/components/bottom-menu/bottom-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _services_global_emitter_global_emitter_service__WEBPACK_IMPORTED_MODULE_2__["GlobalEmitterService"],
            _services_message_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], BottomMenuComponent);
    return BottomMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/bottom-menu/bottom-menu.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/bottom-menu/bottom-menu.module.ts ***!
  \**************************************************************/
/*! exports provided: BottomMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomMenuModule", function() { return BottomMenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bottom_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bottom-menu.component */ "./src/app/components/bottom-menu/bottom-menu.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BottomMenuModule = /** @class */ (function () {
    function BottomMenuModule() {
    }
    BottomMenuModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
            ],
            declarations: [_bottom_menu_component__WEBPACK_IMPORTED_MODULE_2__["BottomMenuComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            exports: [_bottom_menu_component__WEBPACK_IMPORTED_MODULE_2__["BottomMenuComponent"]]
        })
    ], BottomMenuModule);
    return BottomMenuModule;
}());



/***/ }),

/***/ "./src/app/services/workouts/workouts.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/workouts/workouts.service.ts ***!
  \*******************************************************/
/*! exports provided: WorkoutsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutsService", function() { return WorkoutsService; });
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





var WorkoutsService = /** @class */ (function (_super) {
    __extends(WorkoutsService, _super);
    function WorkoutsService(http, platform) {
        var _this = _super.call(this, http, platform) || this;
        _this.http = http;
        _this.platform = platform;
        return _this;
    }
    WorkoutsService_1 = WorkoutsService;
    /**
     * Fetches workout data for the day
     *
     * @param date
     */
    WorkoutsService.prototype.fetchWorkout = function (date) {
        var workoutDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        return this.http.get(WorkoutsService_1.Url("workouts/" + workoutDate), WorkoutsService_1.BaseOptions())
            .toPromise()
            .catch(WorkoutsService_1.HandleError);
    };
    WorkoutsService.prototype.fetchWorkoutSummary = function (_from, _to) {
        var from = _from.getFullYear() + "-" + (_from.getMonth() + 1) + "-" + _from.getDate();
        var toDate = _to.getFullYear() + "-" + (_to.getMonth() + 1) + "-" + _to.getDate();
        var opts = WorkoutsService_1.BaseOptions(true, true, 86400);
        opts.params = { from: from, 'to': toDate };
        return this.http.get(WorkoutsService_1.Url("workouts"), opts)
            .toPromise()
            .catch(WorkoutsService_1.HandleError);
    };
    /**
     * Updates workout data
     *
     * @param workoutSession
     */
    WorkoutsService.prototype.updateWorkoutExercise = function (workoutSession) {
        var id = workoutSession.id, workout_data = workoutSession.workout_data, completed = workoutSession.completed;
        var payload = {
            data: workout_data,
            completed: completed
        };
        return this.http.put(WorkoutsService_1.Url("workouts/" + id), payload, WorkoutsService_1.BaseOptions())
            .toPromise()
            .catch(WorkoutsService_1.HandleError);
    };
    /**
     * Update workout notes content
     *
     *
     * @param workoutSessionId
     * @param notes
     */
    WorkoutsService.prototype.updateWorkoutNote = function (workoutSessionId, notes) {
        var data = {
            notes: notes
        };
        return this.http.post(WorkoutsService_1.Url("workouts/" + workoutSessionId + "/notes"), data, WorkoutsService_1.BaseOptions())
            .toPromise()
            .catch(WorkoutsService_1.HandleError);
    };
    /**
     * Returns list of exercise history logged by transphormer.
     *
     * @param exerciseId
     * @param exerciseGroupId
     */
    WorkoutsService.prototype.exerciseHistory = function (exerciseId, exerciseGroupId) {
        var options = WorkoutsService_1.BaseOptions(true);
        options.params = {
            exercise_id: exerciseId,
            exercise_group_id: exerciseGroupId
        };
        return this.http.get(WorkoutsService_1.Url('workouts/exercise/history'), options)
            .toPromise()
            .then(function (result) { return result.map(function (workoutSession) {
            workoutSession.workout_date = moment__WEBPACK_IMPORTED_MODULE_4__(workoutSession.workout_date);
            return workoutSession;
        }); })
            .catch(WorkoutsService_1.HandleError);
    };
    var WorkoutsService_1;
    WorkoutsService = WorkoutsService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], WorkoutsService);
    return WorkoutsService;
}(_base_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ })

}]);
//# sourceMappingURL=default~pages-dashboard-dashboard-module~pages-workouts-workouts-module.js.map