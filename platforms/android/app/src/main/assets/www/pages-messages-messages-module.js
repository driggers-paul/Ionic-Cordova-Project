(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-messages-messages-module"],{

/***/ "./src/app/pages/messages/messages.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/messages/messages.module.ts ***!
  \***************************************************/
/*! exports provided: MessagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages.page */ "./src/app/pages/messages/messages.page.ts");
/* harmony import */ var _directives_autoresize_autoresize_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/autoresize/autoresize.module */ "./src/app/directives/autoresize/autoresize.module.ts");
/* harmony import */ var _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/side-menu/side-menu.module */ "./src/app/components/side-menu/side-menu.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_5__["MessagesPage"]
    }
];
var MessagesPageModule = /** @class */ (function () {
    function MessagesPageModule() {
    }
    MessagesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _directives_autoresize_autoresize_module__WEBPACK_IMPORTED_MODULE_6__["AutoresizeModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_7__["SideMenuModule"]
            ],
            declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_5__["MessagesPage"]]
        })
    ], MessagesPageModule);
    return MessagesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/messages/messages.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/messages/messages.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <app-menu-button></app-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" *ngIf=\"hasTrainer && canMessage\">\r\n      <ion-button (click)=\"trainerActionSheet()\" color=\"primary\" fill=\"clear\">\r\n        <ion-icon name=\"cog\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Advisor Messages</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"checkComplete && !hasTrainer\" padding>\r\n  <p>You don't currently have a Advisor.</p>\r\n  <p>Once you get an Advisor, your messages will show up here.</p>\r\n\r\n  <div class=\"button global-margin-top-25\">\r\n    <ion-button color=\"primary\" expand=\"full\" routerDirection=\"root\" routerLink=\"/trainer-requests\">Request an Advisor</ion-button>\r\n  </div>\r\n</ion-content>\r\n\r\n<div id=\"messaging-page\" *ngIf=\"checkComplete && hasTrainer\">\r\n  <ion-content class=\"message-listing\" *ngIf=\"canMessage\" #messageContent>\r\n    <div class=\"chat-wrapper\" *ngFor=\"let message of messages\" [class.chat-wrapper-receiver]=\"message.from_id === user.id\">\r\n      <div class=\"msg-block\" [class.chat-receiver]=\"message.from_id !== user.id\" [class.chat-sender]=\"message.from_id === user.id\">\r\n        <p class=\"text\" [innerHTML]=\"message.message\"></p>\r\n        <div class=\"time\">{{ time(message.created_at) }}</div>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n\r\n  <div class=\"messaging\" *ngIf=\"canMessage\">\r\n    <form [formGroup]=\"messageForm\" (ngSubmit)=\"sendMessage()\">\r\n      <div id=\"message-entry\">\r\n        <ion-textarea autocapitalize=\"on\" appAutoresize (resize)=\"scrollBottom()\" formControlName=\"message\" placeholder=\"Message\"></ion-textarea>\r\n        <ion-button type=\"submit\" fill=\"clear\" [disabled]=\"messageForm.invalid\">\r\n          <ion-icon name=\"send\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/messages/messages.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/messages/messages.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list, .message-listing {\n  padding: 5px 0;\n  flex: 1;\n  overflow-y: scroll;\n  display: flex;\n  margin: 0 5vw;\n  flex-direction: column; }\n\n.text {\n  font-size: 12px;\n  white-space: pre-line; }\n\n.chat-wrapper {\n  margin: 15px 5vw; }\n\n.chat-wrapper ion-item {\n    --border-width: 0 !important; }\n\n.chat-wrapper .text {\n    padding-bottom: 5px;\n    margin: 5px;\n    font-size: 13pt; }\n\n.msg-block {\n  padding: 5px 10px;\n  margin-bottom: 10px; }\n\n.chat-sender {\n  background-color: #d3d3d3;\n  margin-left: 5vw; }\n\n.chat-sender .text {\n    text-align: right; }\n\n.chat-sender .time {\n    font-size: 10pt;\n    text-align: right; }\n\n.chat-receiver {\n  background-color: #aed8e6;\n  margin-right: 5vw; }\n\n.chat-receiver .text {\n    text-align: left; }\n\n.chat-receiver .time {\n    font-size: 10pt;\n    text-align: left; }\n\n.messaging {\n  min-height: 45px;\n  width: 100vw;\n  background: #000; }\n\n.danger {\n  color: var(--ion-color-danger); }\n\n#messaging-page {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n#message-entry {\n  padding: 5px;\n  display: flex;\n  width: 100vw;\n  flex-direction: row;\n  align-items: flex-end; }\n\n#message-entry ion-textarea {\n    background: #fff;\n    height: 32px;\n    line-height: 22px;\n    min-height: 32px;\n    --padding-top: 5px;\n    --padding-start: 5px;\n    --padding-end: 5px;\n    --padding-bottom: 5px; }\n\n#message-entry ion-button {\n    height: auto;\n    margin: 0;\n    --padding-start: 8px;\n    --padding-end: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVzc2FnZXMvRTpcXGlvbmljXFxWZXJ2ZUNvbW1lcmNlXFxOZXdEZXZcXG10c3QtYXBwL3NyY1xcYXBwXFxwYWdlc1xcbWVzc2FnZXNcXG1lc3NhZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGdCQUFnQixFQUFBOztBQURsQjtJQUlJLDRCQUFlLEVBQUE7O0FBSm5CO0lBUUksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlLEVBQUE7O0FBSW5CO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0IsRUFBQTs7QUFGbEI7SUFLSSxpQkFBaUIsRUFBQTs7QUFMckI7SUFTSSxlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBOztBQUZuQjtJQUtJLGdCQUFnQixFQUFBOztBQUxwQjtJQVNJLGVBQWU7SUFDZixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQixFQUFBOztBQUx2QjtJQU9JLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBYztJQUNkLG9CQUFnQjtJQUNoQixrQkFBYztJQUNkLHFCQUFpQixFQUFBOztBQWRyQjtJQWlCSSxZQUFZO0lBQ1osU0FBUztJQUNULG9CQUFnQjtJQUNoQixrQkFBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVzc2FnZXMvbWVzc2FnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3QsIC5tZXNzYWdlLWxpc3Rpbmcge1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG4gIGZsZXg6IDE7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAwIDV2dztcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxufVxyXG5cclxuLmNoYXQtd3JhcHBlciB7XHJcbiAgbWFyZ2luOiAxNXB4IDV2dztcclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTNwdDtcclxuICB9XHJcbn1cclxuXHJcbi5tc2ctYmxvY2sge1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jaGF0LXNlbmRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMztcclxuICBtYXJnaW4tbGVmdDogNXZ3O1xyXG5cclxuICAudGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcblxyXG4gIC50aW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuLmNoYXQtcmVjZWl2ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZWQ4ZTY7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1dnc7XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAudGltZSB7XHJcbiAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuLm1lc3NhZ2luZyB7XHJcbiAgbWluLWhlaWdodDogNDVweDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxufVxyXG5cclxuLmRhbmdlciB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG59XHJcblxyXG4jbWVzc2FnaW5nLXBhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNtZXNzYWdlLWVudHJ5IHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgaW9uLXRleHRhcmVhIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMycHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDVweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDVweDtcclxuICB9XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDJweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/messages/messages.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/messages/messages.page.ts ***!
  \*************************************************/
/*! exports provided: MessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPage", function() { return MessagesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var _services_trainer_transphormer_link_trainer_transphormer_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/trainer-transphormer-link/trainer-transphormer-link.service */ "./src/app/services/trainer-transphormer-link/trainer-transphormer-link.service.ts");
/* harmony import */ var _services_message_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/message/message.service */ "./src/app/services/message/message.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/toast-service/toast-service.service */ "./src/app/services/toast-service/toast-service.service.ts");
/* harmony import */ var _services_global_emitter_global_emitter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/global-emitter/global-emitter.service */ "./src/app/services/global-emitter/global-emitter.service.ts");
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










var MessagesPage = /** @class */ (function () {
    function MessagesPage(toastSvc, loadingCtrl, linkService, errorService, messageService, actionSheetCtrl, navCtrl, toastService, globalEmitter, messageChannel) {
        this.toastSvc = toastSvc;
        this.loadingCtrl = loadingCtrl;
        this.linkService = linkService;
        this.errorService = errorService;
        this.messageService = messageService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.toastService = toastService;
        this.globalEmitter = globalEmitter;
        this.messageChannel = messageChannel;
        this.application = null;
        this.hasTrainer = false;
        this.checkComplete = false;
        this.canMessage = false;
        this.messages = [];
    }
    MessagesPage.prototype.ngOnDestroy = function () {
        if (this.messageStream) {
            this.messageStream.unsubscribe();
            this.messageChannel.closeChannel("private-message-channel." + this.application.trainer.transphormer_id + "." + this.user.id);
            this.messageChannel.closeEvent('message.received');
        }
    };
    MessagesPage.prototype.ngOnInit = function () {
        this.checkApplicationStatus();
        this.messageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
        });
    };
    MessagesPage.prototype.checkApplicationStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, _a, e_1;
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
                        _b.trys.push([3, 7, 8, 9]);
                        _a = this;
                        return [4 /*yield*/, this.linkService.requestStatus()];
                    case 4:
                        _a.application = (_b.sent());
                        this.hasTrainer = true;
                        if (!(this.application.status === 'accepted')) return [3 /*break*/, 6];
                        this.canMessage = true;
                        return [4 /*yield*/, this.setupMessages()];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1 = _b.sent();
                        if (e_1.status !== 404) {
                            this.toastSvc.flash(this.errorService.firstError(e_1));
                        }
                        return [3 /*break*/, 9];
                    case 8:
                        loader.dismiss();
                        this.checkComplete = true;
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    MessagesPage.prototype.setupMessages = function (showLoader) {
        if (showLoader === void 0) { showLoader = false; }
        return __awaiter(this, void 0, void 0, function () {
            var loader, _a, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.application) return [3 /*break*/, 1];
                        this.hasTrainer = false;
                        return [3 /*break*/, 10];
                    case 1:
                        if (!showLoader) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Please wait ...',
                            })];
                    case 2:
                        loader = _b.sent();
                        return [4 /*yield*/, loader.present()];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 6, 7, 10]);
                        _a = this;
                        return [4 /*yield*/, this.messageService.messages(this.application.trainer.transphormer.id)];
                    case 5:
                        _a.messages = ((_b.sent()));
                        this.messages = this.sortMessages();
                        this.setupMessageStream();
                        this.markMessagesAsRead();
                        this.scrollBottom();
                        return [3 /*break*/, 10];
                    case 6:
                        e_2 = _b.sent();
                        this.toastSvc.flash(this.errorService.firstError(e_2));
                        return [3 /*break*/, 10];
                    case 7:
                        if (!showLoader) return [3 /*break*/, 9];
                        return [4 /*yield*/, loader.dismiss()];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9: return [7 /*endfinally*/];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(MessagesPage.prototype, "user", {
        get: function () {
            return JSON.parse(window.localStorage.getItem('transphormer'));
        },
        enumerable: true,
        configurable: true
    });
    MessagesPage.prototype.sendMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, message, e_3;
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
                        _a.trys.push([3, 5, 6, 7]);
                        return [4 /*yield*/, this.messageService.sendMessage(this.application.trainer.transphormer.id, this.messageForm.get('message').value)];
                    case 4:
                        message = ((_a.sent()));
                        this.messages.push(message);
                        this.messageForm.reset();
                        this.scrollBottom();
                        return [3 /*break*/, 7];
                    case 5:
                        e_3 = _a.sent();
                        this.toastSvc.flash(this.errorService.firstError(e_3));
                        return [3 /*break*/, 7];
                    case 6:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    MessagesPage.prototype.setupMessageStream = function () {
        var _this = this;
        this.messageChannel.openChannel("private-message-channel." + this.application.trainer.transphormer_id + "." + this.user.id);
        this.messageStream = this.messageChannel.openEvent('message.received')
            .subscribe(function (data) {
            _this.setupLatestMessages([data.message]);
        });
    };
    MessagesPage.prototype.setupLatestMessages = function (messages) {
        var hasNewMessage = false;
        var _loop_1 = function (message) {
            if (!this_1.messages.find(function (existingMessage) { return existingMessage.id === message.id; })) {
                this_1.messages.push(message);
                hasNewMessage = true;
            }
        };
        var this_1 = this;
        for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
            var message = messages_1[_i];
            _loop_1(message);
        }
        if (hasNewMessage) {
            this.messages = this.sortMessages();
            this.scrollBottom();
            this.markMessagesAsRead();
        }
    };
    MessagesPage.prototype.time = function (created_at) {
        return moment__WEBPACK_IMPORTED_MODULE_6__["utc"](created_at)
            .local()
            .format('h:mm a');
    };
    MessagesPage.prototype.trainerActionSheet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            buttons: [
                                {
                                    text: 'Remove Advisor',
                                    icon: 'trash',
                                    cssClass: 'danger',
                                    handler: function () {
                                        _this.removeTrainer();
                                    },
                                },
                                {
                                    text: 'View Advisor details',
                                    icon: 'eye',
                                    handler: function () {
                                        _this.navCtrl.navigateForward("/trainer-detail/" + _this.application.trainer.transphormer_id);
                                    },
                                },
                                {
                                    text: 'Cancel',
                                },
                            ],
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessagesPage.prototype.removeTrainer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, e_4;
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
                        _a.trys.push([3, 5, 6, 7]);
                        return [4 /*yield*/, this.linkService.destroyLink(this.application.id)];
                    case 4:
                        _a.sent();
                        this.hasTrainer = false;
                        this.canMessage = false;
                        return [3 /*break*/, 7];
                    case 5:
                        e_4 = _a.sent();
                        this.toastSvc.flash(this.errorService.firstError(e_4));
                        return [3 /*break*/, 7];
                    case 6:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    MessagesPage.prototype.scrollBottom = function () {
        var _this = this;
        window.setTimeout(function () { return _this.messageContent.scrollToBottom(); }, 100);
    };
    MessagesPage.prototype.sortMessages = function () {
        return this.messages.sort(function (a, b) { return moment__WEBPACK_IMPORTED_MODULE_6__(a.created_at).isBefore(moment__WEBPACK_IMPORTED_MODULE_6__(b.created_at)) ? -1 : 1; });
    };
    MessagesPage.prototype.markMessagesAsRead = function () {
        return __awaiter(this, void 0, void 0, function () {
            var unreadMessages, result_1, e_5;
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
                        _a.label = 3;
                    case 3:
                        this.globalEmitter.emit(_services_global_emitter_global_emitter_service__WEBPACK_IMPORTED_MODULE_8__["GlobalEvents"].TransphormerMessageRead);
                        return [3 /*break*/, 5];
                    case 4:
                        e_5 = _a.sent();
                        this.toastService.flash('Unable to mark messages as read');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('messageContent'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"])
    ], MessagesPage.prototype, "messageContent", void 0);
    MessagesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.page.html */ "./src/app/pages/messages/messages.page.html"),
            styles: [__webpack_require__(/*! ./messages.page.scss */ "./src/app/pages/messages/messages.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _services_trainer_transphormer_link_trainer_transphormer_link_service__WEBPACK_IMPORTED_MODULE_3__["TrainerTransphormerLinkService"],
            _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_2__["ErrorsService"],
            _services_message_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
            _services_global_emitter_global_emitter_service__WEBPACK_IMPORTED_MODULE_8__["GlobalEmitterService"],
            _services_authenticated_pusher_authenticated_pusher_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticatedPusherService"]])
    ], MessagesPage);
    return MessagesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-messages-messages-module.js.map