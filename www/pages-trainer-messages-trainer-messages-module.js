(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-trainer-messages-trainer-messages-module"],{

/***/ "./src/app/pages/trainer-messages/trainer-messages.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/trainer-messages/trainer-messages.module.ts ***!
  \*******************************************************************/
/*! exports provided: TrainerMessagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerMessagesPageModule", function() { return TrainerMessagesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _trainer_messages_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trainer-messages.page */ "./src/app/pages/trainer-messages/trainer-messages.page.ts");
/* harmony import */ var _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/side-menu/side-menu.module */ "./src/app/components/side-menu/side-menu.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _trainer_messages_page__WEBPACK_IMPORTED_MODULE_5__["TrainerMessagesPage"]
    }
];
var TrainerMessagesPageModule = /** @class */ (function () {
    function TrainerMessagesPageModule() {
    }
    TrainerMessagesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_6__["SideMenuModule"]
            ],
            declarations: [_trainer_messages_page__WEBPACK_IMPORTED_MODULE_5__["TrainerMessagesPage"]]
        })
    ], TrainerMessagesPageModule);
    return TrainerMessagesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/trainer-messages/trainer-messages.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/trainer-messages/trainer-messages.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <app-menu-button></app-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>My Advisor Messages</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"toggleUnread()\"><ion-icon slot=\"icon-only\"\r\n              color=\"primary\"\r\n              [name]=\"this.unreadOnly ? 'mail-unread' : 'mail'\"\r\n              size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item *ngIf=\"conversations.length === 0\" lines=\"none\">\r\n      <ion-label text-center>No messages.</ion-label>\r\n    </ion-item>\r\n    <ion-item *ngFor=\"let convo of conversations\" (click)=\"goToMessages(convo.transphormer.id)\" [ngClass]=\"{ 'read': +convo.unread_count === 0, 'unread': +convo.unread_count !== 0}\">\r\n      <ion-icon large slot=\"start\" [name]=\"(convo.unread_count === 0 ? 'mail' : 'mail-unread')\"></ion-icon>\r\n      <ion-label>\r\n        <ion-text>{{ convo.transphormer.display_name }}</ion-text>\r\n        <p><ion-icon size=\"small\" name=\"share-alt\" *ngIf=\"convo.i_sent_last_message\"></ion-icon> {{ convo.last_message_received.message }}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item text-center=\"\">\r\n      <div class=\"tb-logo\"></div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/trainer-messages/trainer-messages.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/trainer-messages/trainer-messages.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item.unread ion-icon {\n  color: var(--ion-color-primary); }\n\nion-item.read ion-icon {\n  color: var(--ion-color-dark); }\n\n.tb-logo {\n  background-image: url('firstPhormLogo.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  margin: 0 auto;\n  font-size: 32px;\n  width: 2em;\n  height: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJhaW5lci1tZXNzYWdlcy9FOlxcaW9uaWNcXFZlcnZlQ29tbWVyY2VcXE5ld0RldlxcbXRzdC1hcHAvc3JjXFxhcHBcXHBhZ2VzXFx0cmFpbmVyLW1lc3NhZ2VzXFx0cmFpbmVyLW1lc3NhZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdNLCtCQUErQixFQUFBOztBQUhyQztFQVFNLDRCQUE0QixFQUFBOztBQUtsQztFQUNFLDJDQUFnRTtFQUNoRSwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90cmFpbmVyLW1lc3NhZ2VzL3RyYWluZXItbWVzc2FnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gICYudW5yZWFkIHtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxuICB9XHJcbiAgJi5yZWFkIHtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50Yi1sb2dvIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pY29uL2ZpcnN0UGhvcm1Mb2dvLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgd2lkdGg6IDJlbTtcclxuICBoZWlnaHQ6IDJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/trainer-messages/trainer-messages.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/trainer-messages/trainer-messages.page.ts ***!
  \*****************************************************************/
/*! exports provided: TrainerMessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerMessagesPage", function() { return TrainerMessagesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/message/message.service */ "./src/app/services/message/message.service.ts");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/toast-service/toast-service.service */ "./src/app/services/toast-service/toast-service.service.ts");
/* harmony import */ var _services_global_emitter_global_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/global-emitter/global-emitter.service */ "./src/app/services/global-emitter/global-emitter.service.ts");
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/analytics/analytics.service */ "./src/app/services/analytics/analytics.service.ts");
/* harmony import */ var _services_analytics_analytic_events_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/analytics/analytic-events.enum */ "./src/app/services/analytics/analytic-events.enum.ts");
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








var TrainerMessagesPage = /** @class */ (function () {
    function TrainerMessagesPage(errorService, toastSvc, loadingCtrl, messageService, globalEmitter, navCtrl, analyticService) {
        this.errorService = errorService;
        this.toastSvc = toastSvc;
        this.loadingCtrl = loadingCtrl;
        this.messageService = messageService;
        this.globalEmitter = globalEmitter;
        this.navCtrl = navCtrl;
        this.analyticService = analyticService;
        this._conversations = [];
        this.conversations = [];
        this.unreadOnly = false;
    }
    TrainerMessagesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loadConversations();
        this._amr = this.globalEmitter.listen(_services_global_emitter_global_emitter_service__WEBPACK_IMPORTED_MODULE_5__["GlobalEvents"].AdvisorMessageRead).subscribe(function (next) {
            _this.markConvoRead(next.data.transphormerId);
        });
    };
    TrainerMessagesPage.prototype.toggleUnread = function () {
        this.unreadOnly = !this.unreadOnly;
        this.recalculateConversations();
    };
    TrainerMessagesPage.prototype.recalculateConversations = function () {
        var unsorted;
        if (this.unreadOnly) {
            unsorted = this._conversations.filter(function (item) {
                return item.unread_count !== 0;
            });
        }
        else {
            unsorted = this._conversations;
        }
        if (unsorted.length > 0 && unsorted[0].last_message_received) {
            unsorted.sort(function (a, b) {
                if (a.last_message_received === b.last_message_received) {
                    return 0;
                }
                return a.last_message_received > b.last_message_received ? 1 : -1;
            });
        }
        this.conversations = unsorted;
    };
    TrainerMessagesPage.prototype.markConvoRead = function (transphormerId) {
        var convoIndex = this._conversations
            .findIndex(function (conversation) { return conversation.transphormer.id === transphormerId; });
        var convo = this._conversations[convoIndex];
        convo.unread_count = 0;
        this._conversations.splice(convoIndex, 1, convo);
    };
    TrainerMessagesPage.prototype.ngOnDestroy = function () {
        this._amr.unsubscribe();
    };
    TrainerMessagesPage.prototype.loadConversations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Loading messages...',
                        })];
                    case 1:
                        loader = _b.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, 6, 7]);
                        _a = this;
                        return [4 /*yield*/, this.messageService.advisorConversations()];
                    case 4:
                        _a._conversations = (_b.sent());
                        this.analyticService.logEvent(_services_analytics_analytic_events_enum__WEBPACK_IMPORTED_MODULE_7__["AnalyticEvents"].MessagingWithTrainer, {});
                        this.recalculateConversations();
                        return [3 /*break*/, 7];
                    case 5:
                        e_1 = _b.sent();
                        this.toastSvc.flash(this.errorService.firstError(e_1));
                        return [3 /*break*/, 7];
                    case 6:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    TrainerMessagesPage.prototype.goToMessages = function (id) {
        this.navCtrl.navigateForward("chat-messages/" + id);
    };
    TrainerMessagesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trainer-messages',
            template: __webpack_require__(/*! ./trainer-messages.page.html */ "./src/app/pages/trainer-messages/trainer-messages.page.html"),
            styles: [__webpack_require__(/*! ./trainer-messages.page.scss */ "./src/app/pages/trainer-messages/trainer-messages.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_errors_errors_service__WEBPACK_IMPORTED_MODULE_2__["ErrorsService"],
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _services_message_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"],
            _services_global_emitter_global_emitter_service__WEBPACK_IMPORTED_MODULE_5__["GlobalEmitterService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_6__["AnalyticsService"]])
    ], TrainerMessagesPage);
    return TrainerMessagesPage;
}());



/***/ }),

/***/ "./src/app/services/analytics/analytic-events.enum.ts":
/*!************************************************************!*\
  !*** ./src/app/services/analytics/analytic-events.enum.ts ***!
  \************************************************************/
/*! exports provided: AnalyticEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticEvents", function() { return AnalyticEvents; });
var AnalyticEvents;
(function (AnalyticEvents) {
    AnalyticEvents["ViewingWorkouts"] = "viewing_workouts";
    AnalyticEvents["AddingWeightIn"] = "adding_weigh_in";
    AnalyticEvents["LoggingNutrition"] = "logging_nutrition";
    AnalyticEvents["MessagingWithTrainer"] = "messaging_with_trainer";
    AnalyticEvents["WatchingLiveStream"] = "watching_live_stream";
    AnalyticEvents["HelpView"] = "help_view";
    AnalyticEvents["WorkoutHelp"] = "workout_help";
    AnalyticEvents["SearchingAdvisor"] = "searching_advisor";
    AnalyticEvents["DroppingAdvisor"] = "dropping_advisor";
    AnalyticEvents["TakingPhotos"] = "taking_photos";
    AnalyticEvents["ViewingAnnouncements"] = "viewing_announcements";
    AnalyticEvents["UpdatingProfile"] = "updating_profile";
    AnalyticEvents["ChangingConfiguration"] = "changing_configuration";
})(AnalyticEvents || (AnalyticEvents = {}));


/***/ }),

/***/ "./src/app/services/errors/errors.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/errors/errors.service.ts ***!
  \***************************************************/
/*! exports provided: ErrorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsService", function() { return ErrorsService; });
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

var ErrorsService = /** @class */ (function () {
    function ErrorsService() {
    }
    // noinspection JSMethodCanBeStatic
    ErrorsService.prototype.stateColor = function (item) {
        if (item.invalid && !item.dirty) {
            return 'dark';
        }
        else if (item.invalid) {
            return 'danger';
        }
        else {
            return 'dark';
        }
    };
    // noinspection JSMethodCanBeStatic
    /**
     * Returns the first error key with first value in the error object
     * @param errors
     * @return string
     */
    ErrorsService.prototype.firstError = function (errors) {
        if (!this.checkIsCorrectStructure(errors)) {
            return '';
        }
        var keys = Object.keys(errors.list);
        return errors.list[keys[0]][0];
    };
    // noinspection JSMethodCanBeStatic
    /**
     * Returns the errors for the key
     * @param key
     * @param errors
     */
    ErrorsService.prototype.errorForKey = function (key, errors) {
        if (!this.checkIsCorrectStructure(errors)) {
            return [];
        }
        if (errors.list.hasOwnProperty(key)) {
            return errors.list[key];
        }
        return [];
    };
    // noinspection JSMethodCanBeStatic
    /**
     * Returns the first error value for the given key
     * @param key
     * @param errors
     */
    ErrorsService.prototype.firstErrorForKey = function (key, errors) {
        if (!this.checkIsCorrectStructure(errors)) {
            return '';
        }
        if (errors.list.hasOwnProperty(key)) {
            if (errors.list[key].length > 0) {
                return errors.list[key][0];
            }
        }
        return '';
    };
    // noinspection JSMethodCanBeStatic
    /**
     * Checks whether the given key has any errors
     * @param key
     * @param errors
     */
    ErrorsService.prototype.keyHasError = function (key, errors) {
        if (!this.checkIsCorrectStructure(errors)) {
            return false;
        }
        if (errors.list.hasOwnProperty(key)) {
            return errors.list[key].length > 0;
        }
        return false;
    };
    // noinspection JSMethodCanBeStatic
    /**
     * Checks whether the given key has any errors
     * @param errors
     */
    ErrorsService.prototype.hasError = function (errors) {
        if (!this.checkIsCorrectStructure(errors)) {
            return false;
        }
        for (var key in errors.list) {
            if (errors.list[key].length > 0) {
                return true;
            }
        }
        return false;
    };
    /**
     * Returns the error status value
     * @param errors
     */
    ErrorsService.prototype.status = function (errors) {
        if (!this.checkIsCorrectStructure(errors)) {
            return -1;
        }
        return errors.status;
    };
    ErrorsService.prototype.checkIsCorrectStructure = function (error, throwException) {
        if (throwException === void 0) { throwException = true; }
        var isCorrect = !(!error.hasOwnProperty('status') || !error.hasOwnProperty('list'));
        if (throwException && isCorrect === false) {
            throw error;
        }
        return isCorrect;
    };
    ErrorsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ErrorsService);
    return ErrorsService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-trainer-messages-trainer-messages-module.js.map