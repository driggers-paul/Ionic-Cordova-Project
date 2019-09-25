(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-messages-chat-messages-module"],{

/***/ "./src/app/pages/chat-messages/chat-messages.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/chat-messages/chat-messages.module.ts ***!
  \*************************************************************/
/*! exports provided: ChatMessagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessagesPageModule", function() { return ChatMessagesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_messages_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-messages.page */ "./src/app/pages/chat-messages/chat-messages.page.ts");
/* harmony import */ var _directives_autoresize_autoresize_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/autoresize/autoresize.module */ "./src/app/directives/autoresize/autoresize.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _chat_messages_page__WEBPACK_IMPORTED_MODULE_5__["ChatMessagesPage"]
    }
];
var ChatMessagesPageModule = /** @class */ (function () {
    function ChatMessagesPageModule() {
    }
    ChatMessagesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _directives_autoresize_autoresize_module__WEBPACK_IMPORTED_MODULE_6__["AutoresizeModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [_chat_messages_page__WEBPACK_IMPORTED_MODULE_5__["ChatMessagesPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ChatMessagesPageModule);
    return ChatMessagesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/chat-messages/chat-messages.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/chat-messages/chat-messages.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/trainer-messages\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Messages w/ {{ name }}</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n          <ion-button (click)=\"viewTransphormer()\"><ion-icon slot=\"icon-only\"\r\n                                                         color=\"primary\"\r\n                                                         name=\"search\"\r\n                                                         size=\"large\"></ion-icon>\r\n          </ion-button>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<div id=\"messaging-page\">\r\n  <ion-content #messageContent class=\"message-listing\">\r\n    <ion-item-sliding class=\"chat-wrapper\" *ngFor=\"let message of messages\" [class.chat-wrapper-receiver]=\"message.from_id === user.id\">\r\n      <ion-item [lines]=\"'none'\" >\r\n<div class=\"msg-block\" [class.chat-receiver]=\"message.from_id !== user.id\" [class.chat-sender]=\"message.from_id === user.id\">\r\n          <p class=\"text\" [innerHTML]=\"message.message\"></p>\r\n          <div class=\"time\">{{ message.from_id === user.id ? 'Sent' : 'Received' }} {{ time(message.created_at) }}</div>\r\n        </div>\r\n      </ion-item>\r\n    </ion-item-sliding>\r\n  </ion-content>\r\n\r\n  <div class=\"messaging\">\r\n    <form [formGroup]=\"messageForm\" (ngSubmit)=\"sendMessage()\">\r\n      <div id=\"message-entry\">\r\n        <ion-textarea autocapitalize=\"on\" appAutoresize (resize)=\"scrollBottom()\" formControlName=\"message\" placeholder=\"Message\"></ion-textarea>\r\n        <ion-button type=\"submit\" fill=\"clear\" [disabled]=\"messageForm.invalid\">\r\n          <ion-icon name=\"send\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/chat-messages/chat-messages.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/chat-messages/chat-messages.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list, .message-listing {\n  padding: 5px 0;\n  flex: 1;\n  overflow-y: scroll;\n  display: flex;\n  flex-direction: column; }\n\n.text {\n  font-size: 12px;\n  white-space: pre-line; }\n\n.chat-wrapper {\n  width: 100%;\n  margin: 15px 0; }\n\n.chat-wrapper ion-item {\n    --border-width: 0 !important; }\n\n.chat-wrapper .text {\n    padding-bottom: 5px;\n    margin: 5px;\n    font-size: 13pt; }\n\n.msg-block {\n  padding: 5px 10px;\n  margin-bottom: 10px; }\n\n.chat-sender {\n  background-color: #d3d3d3;\n  margin-left: auto; }\n\n.chat-sender .text {\n    text-align: right; }\n\n.chat-sender .time {\n    font-size: 10pt;\n    text-align: right; }\n\n.chat-receiver {\n  background-color: #aed8e6;\n  margin-right: auto; }\n\n.chat-receiver .text {\n    text-align: left; }\n\n.chat-receiver .time {\n    font-size: 10pt;\n    text-align: left; }\n\n.messaging {\n  min-height: 45px;\n  width: 100vw;\n  background: #000; }\n\n.danger {\n  color: var(--ion-color-danger); }\n\n#messaging-page {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n#message-entry {\n  padding: 5px;\n  display: flex;\n  width: 100vw;\n  flex-direction: row;\n  align-items: flex-end; }\n\n#message-entry ion-textarea {\n    border: 1px solid #cccccc;\n    background: #fff;\n    height: 36px;\n    min-height: 36px;\n    --padding-top: 5px;\n    --padding-end: 5px;\n    --padding-bottom: 5px; }\n\n#message-entry ion-button {\n    margin: 0;\n    --padding-start: 8px;\n    --padding-end: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC1tZXNzYWdlcy9FOlxcaW9uaWNcXFZlcnZlQ29tbWVyY2VcXE5ld0RldlxcbXRzdC1hcHAvc3JjXFxhcHBcXHBhZ2VzXFxjaGF0LW1lc3NhZ2VzXFxjaGF0LW1lc3NhZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxlQUFlO0VBQ2YscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFGaEI7SUFLSSw0QkFBZSxFQUFBOztBQUxuQjtJQVNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZSxFQUFBOztBQUluQjtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUE7O0FBRm5CO0lBS0ksaUJBQWlCLEVBQUE7O0FBTHJCO0lBU0ksZUFBZTtJQUNmLGlCQUFpQixFQUFBOztBQUlyQjtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFGcEI7SUFLSSxnQkFBZ0IsRUFBQTs7QUFMcEI7SUFTSSxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUIsRUFBQTs7QUFMdkI7SUFPSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWM7SUFDZCxrQkFBYztJQUNkLHFCQUFpQixFQUFBOztBQWJyQjtJQWdCSSxTQUFTO0lBQ1Qsb0JBQWdCO0lBQ2hCLGtCQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGF0LW1lc3NhZ2VzL2NoYXQtbWVzc2FnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3QsIC5tZXNzYWdlLWxpc3Rpbmcge1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG4gIGZsZXg6IDE7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbn1cclxuXHJcbi5jaGF0LXdyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRleHQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B0O1xyXG4gIH1cclxufVxyXG5cclxuLm1zZy1ibG9jayB7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmNoYXQtc2VuZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxuICAudGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcblxyXG4gIC50aW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuLmNoYXQtcmVjZWl2ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZWQ4ZTY7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxuICAudGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLnRpbWUge1xyXG4gICAgZm9udC1zaXplOiAxMHB0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbn1cclxuXHJcbi5tZXNzYWdpbmcge1xyXG4gIG1pbi1oZWlnaHQ6IDQ1cHg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbn1cclxuXHJcbi5kYW5nZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxufVxyXG5cclxuI21lc3NhZ2luZy1wYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jbWVzc2FnZS1lbnRyeSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGlvbi10ZXh0YXJlYSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIG1pbi1oZWlnaHQ6IDM2cHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAycHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/chat-messages/chat-messages.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/chat-messages/chat-messages.page.ts ***!
  \***********************************************************/
/*! exports provided: ChatMessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessagesPage", function() { return ChatMessagesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _services_message_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/message/message.service */ "./src/app/services/message/message.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_global_emitter_global_emitter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/global-emitter/global-emitter.service */ "./src/app/services/global-emitter/global-emitter.service.ts");
/* harmony import */ var _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/toast-service/toast-service.service */ "./src/app/services/toast-service/toast-service.service.ts");
/* harmony import */ var _services_authenticated_pusher_authenticated_pusher_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/authenticated-pusher/authenticated-pusher.service */ "./src/app/services/authenticated-pusher/authenticated-pusher.service.ts");
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










var ChatMessagesPage = /** @class */ (function () {
    function ChatMessagesPage(errorService, navCtrl, messageService, toastSvc, loadingCtrl, router, globalEmitter, toastService, messageChannel) {
        this.errorService = errorService;
        this.navCtrl = navCtrl;
        this.messageService = messageService;
        this.toastSvc = toastSvc;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.globalEmitter = globalEmitter;
        this.toastService = toastService;
        this.messageChannel = messageChannel;
        this.messages = [];
        this.groupName = null;
    }
    ChatMessagesPage.prototype.ngOnDestroy = function () {
        if (this.messageStream) {
            this.messageStream.unsubscribe();
        }
        this.messageChannel.closeChannel("private-message-channel." + this.toId + "." + this.user.id);
        this.messageChannel.closeEvent('message.received');
    };
    ChatMessagesPage.prototype.ngOnInit = function () {
        this.name = '?';
        this.toId = parseFloat(this.router.snapshot.paramMap.get('id'));
        this.groupName = this.router.snapshot.paramMap.get('groupName');
        if (!this.groupName) {
            this.groupName = null;
        }
        this.messageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
        });
        this.getMessages();
    };
    ChatMessagesPage.prototype.getMessages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, _a, message, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Please wait ...',
                        })];
                    case 1:
                        loader = _b.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 6, 7, 8]);
                        if (!(this.groupName === null)) return [3 /*break*/, 5];
                        _a = this;
                        return [4 /*yield*/, this.messageService.messages(this.toId)];
                    case 4:
                        _a.messages = (_b.sent()).sort(function (a, b) { return moment__WEBPACK_IMPORTED_MODULE_6__(a.created_at).isBefore(moment__WEBPACK_IMPORTED_MODULE_6__(b.created_at)) ? -1 : 1; });
                        this.setupMessageStream();
                        _b.label = 5;
                    case 5:
                        if (this.messages.length > 0) {
                            message = this.messages[0];
                            if (message.from_id === this.toId) {
                                this.name = message.message_from.display_name;
                            }
                            else {
                                this.name = message.message_to.display_name;
                            }
                        }
                        this.markMessagesAsRead();
                        return [3 /*break*/, 8];
                    case 6:
                        e_1 = _b.sent();
                        this.toastSvc.flash(this.errorService.firstError(e_1));
                        return [3 /*break*/, 8];
                    case 7:
                        loader.dismiss();
                        this.scrollBottom();
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    ChatMessagesPage.prototype.sendMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, message, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Please wait ...',
                        })];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 8, 9, 10]);
                        message = void 0;
                        if (!(this.groupName === null)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.messageService.sendMessage(this.toId, this.messageForm.get('message').value)];
                    case 4:
                        message = ((_a.sent()));
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.messageService.sendGroupMessage(this.groupName, this.messageForm.get('message').value)];
                    case 6:
                        message = ((_a.sent()));
                        _a.label = 7;
                    case 7:
                        this.messages.push(message);
                        this.messageForm.reset();
                        this.scrollBottom();
                        return [3 /*break*/, 10];
                    case 8:
                        e_2 = _a.sent();
                        this.toastSvc.flash(this.errorService.firstError(e_2));
                        return [3 /*break*/, 10];
                    case 9:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(ChatMessagesPage.prototype, "user", {
        get: function () {
            return JSON.parse(window.localStorage.getItem('transphormer'));
        },
        enumerable: true,
        configurable: true
    });
    ChatMessagesPage.prototype.setupMessageStream = function () {
        var _this = this;
        this.messageChannel.openChannel("private-message-channel." + this.toId + "." + this.user.id);
        this.messageStream = this.messageChannel.openEvent('message.received')
            .subscribe(function (data) {
            _this.setupLatestMessages([data.message]);
        });
    };
    ChatMessagesPage.prototype.setupLatestMessages = function (messages) {
        var hasLatestMessage = false;
        var _loop_1 = function (message) {
            if (!this_1.messages.find(function (existingMessage) { return existingMessage.id === message.id; })) {
                this_1.messages.push(message);
                hasLatestMessage = true;
            }
        };
        var this_1 = this;
        for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
            var message = messages_1[_i];
            _loop_1(message);
        }
        if (hasLatestMessage) {
            this.messages = this.sortMessages();
            this.scrollBottom();
            this.markMessagesAsRead();
        }
    };
    ChatMessagesPage.prototype.scrollBottom = function () {
        var _this = this;
        window.setTimeout(function () { _this.messageContent.scrollToBottom(); }, 300);
    };
    ChatMessagesPage.prototype.viewTransphormer = function () {
        this.navCtrl.navigateForward("details/" + this.toId);
    };
    ChatMessagesPage.prototype.time = function (created_at) {
        return moment__WEBPACK_IMPORTED_MODULE_6__["utc"](created_at)
            .local()
            .format('M/D/YYYY @ h:mm a');
    };
    ChatMessagesPage.prototype.sortMessages = function () {
        return this.messages.sort(function (a, b) { return moment__WEBPACK_IMPORTED_MODULE_6__(a.created_at).isBefore(moment__WEBPACK_IMPORTED_MODULE_6__(b.created_at)) ? -1 : 1; });
    };
    ChatMessagesPage.prototype.markMessagesAsRead = function () {
        return __awaiter(this, void 0, void 0, function () {
            var unreadMessages, result_1, e_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        unreadMessages = this.messages.filter(function (message) { return message.from_id !== _this.user.id && !message.read_at; });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        if (!(unreadMessages.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.messageService.markMessagesAsRead(unreadMessages.map(function (message) { return message.id; }))];
                    case 2:
                        result_1 = _a.sent();
                        unreadMessages.forEach(function (message) {
                            message.read_at = result_1.read_at;
                        });
                        this.globalEmitter.emit(_services_global_emitter_global_emitter_service__WEBPACK_IMPORTED_MODULE_7__["GlobalEvents"].AdvisorMessageRead, { messages: unreadMessages, transphormerId: unreadMessages[0].from_id });
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        e_3 = _a.sent();
                        this.toastService.flash('Unable to mark messages as read.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('messageContent'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
    ], ChatMessagesPage.prototype, "messageContent", void 0);
    ChatMessagesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-messages',
            template: __webpack_require__(/*! ./chat-messages.page.html */ "./src/app/pages/chat-messages/chat-messages.page.html"),
            styles: [__webpack_require__(/*! ./chat-messages.page.scss */ "./src/app/pages/chat-messages/chat-messages.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_errors_errors_service__WEBPACK_IMPORTED_MODULE_1__["ErrorsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _services_message_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_global_emitter_global_emitter_service__WEBPACK_IMPORTED_MODULE_7__["GlobalEmitterService"],
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
            _services_authenticated_pusher_authenticated_pusher_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticatedPusherService"]])
    ], ChatMessagesPage);
    return ChatMessagesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-chat-messages-chat-messages-module.js.map