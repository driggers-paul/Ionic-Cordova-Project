(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-invite-invite-module"],{

/***/ "./src/app/pages/invite/invite.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/invite/invite.module.ts ***!
  \***********************************************/
/*! exports provided: InvitePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitePageModule", function() { return InvitePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _invite_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invite.page */ "./src/app/pages/invite/invite.page.ts");
/* harmony import */ var _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/side-menu/side-menu.module */ "./src/app/components/side-menu/side-menu.module.ts");
/* harmony import */ var _components_logo_logo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/logo/logo.module */ "./src/app/components/logo/logo.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _invite_page__WEBPACK_IMPORTED_MODULE_5__["InvitePage"]
    }
];
var InvitePageModule = /** @class */ (function () {
    function InvitePageModule() {
    }
    InvitePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_6__["SideMenuModule"],
                _components_logo_logo_module__WEBPACK_IMPORTED_MODULE_7__["LogoModule"]
            ],
            declarations: [_invite_page__WEBPACK_IMPORTED_MODULE_5__["InvitePage"]]
        })
    ], InvitePageModule);
    return InvitePageModule;
}());



/***/ }),

/***/ "./src/app/pages/invite/invite.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/invite/invite.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>Invite Transphormers</ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <app-menu-button></app-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <div>\r\n        <app-logo></app-logo>\r\n        <p>Tap the button below to copy your URL to the clipboard.\r\n            Share it on Social media, chat programs, or anywhere else.</p>\r\n        <p>This URL includes your legionnaire ID!</p>\r\n        <div class=\"ion-text-center\">\r\n            <p class=\"email-link\">{{link}}</p>\r\n        </div>\r\n        <div>\r\n            <ion-button expand=\"full\" size=\"large\" class=\"ion-margin-top\" (click)=\"copyLink()\">Copy URL to the Clipboard</ion-button>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/invite/invite.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/invite/invite.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludml0ZS9pbnZpdGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/invite/invite.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/invite/invite.page.ts ***!
  \*********************************************/
/*! exports provided: InvitePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitePage", function() { return InvitePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/toast-service/toast-service.service */ "./src/app/services/toast-service/toast-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_trainer_trainer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/trainer/trainer.service */ "./src/app/services/trainer/trainer.service.ts");
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





var InvitePage = /** @class */ (function () {
    function InvitePage(clipboard, toastSvc, trainerService, platform) {
        var _this = this;
        this.clipboard = clipboard;
        this.toastSvc = toastSvc;
        this.trainerService = trainerService;
        this.platform = platform;
        var transphormer = JSON.parse(window.localStorage.getItem('transphormer'));
        this.trainerService.getTrainerByTransphormerId(transphormer.id)
            .then(function (trainerData) {
            _this.link = trainerData.referral_url;
        });
    }
    InvitePage.prototype.copyLink = function () {
        return __awaiter(this, void 0, void 0, function () {
            var successful, emailLink, range, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        successful = true;
                        if (!!this.platform.is('cordova')) return [3 /*break*/, 1];
                        emailLink = document.querySelector('.email-link');
                        range = document.createRange();
                        range.selectNode(emailLink);
                        window.getSelection().addRange(range);
                        try {
                            // Now that we've selected the anchor text, execute the copy command
                            successful = document.execCommand('copy');
                        }
                        catch (err) {
                            successful = false;
                        }
                        return [3 /*break*/, 4];
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.clipboard.copy(this.link)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        successful = false;
                        return [3 /*break*/, 4];
                    case 4:
                        if (successful) {
                            this.toastSvc.flash('Link copied.');
                        }
                        else {
                            this.toastSvc.flash('Unable to copy link.');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    InvitePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invite',
            template: __webpack_require__(/*! ./invite.page.html */ "./src/app/pages/invite/invite.page.html"),
            styles: [__webpack_require__(/*! ./invite.page.scss */ "./src/app/pages/invite/invite.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_1__["Clipboard"],
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"],
            _services_trainer_trainer_service__WEBPACK_IMPORTED_MODULE_4__["TrainerService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], InvitePage);
    return InvitePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-invite-invite-module.js.map