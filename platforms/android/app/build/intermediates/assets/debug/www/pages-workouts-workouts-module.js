(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-workouts-workouts-module"],{

/***/ "./src/app/pages/workouts/add-note/add-note.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/workouts/add-note/add-note.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Add a note</ion-title>\r\n    <ion-button slot=\"end\" fill=\"clear\" (click)=\"close()\">\r\n      <ion-icon name=\"close\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"global-input\">\r\n    <ion-item>\r\n      <ion-textarea autocapitalize=\"on\" rows=\"6\" cols=\"20\" placeholder=\"Add a note...\" [value]=\"notes\" (input)=\"notes=$event.target.value\"></ion-textarea>\r\n    </ion-item>\r\n    <ion-button expand=\"full\" fill=\"outline\"  size=\"small\" (click)=\"closeWithNotes()\">Submit</ion-button>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/workouts/add-note/add-note.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/workouts/add-note/add-note.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --padding-start: 0;\n  --border-width: 0 0 0 0;\n  --border-style: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd29ya291dHMvYWRkLW5vdGUvRTpcXGlvbmljXFxWZXJ2ZUNvbW1lcmNlXFxOZXdEZXZcXG10c3QtYXBwL3NyY1xcYXBwXFxwYWdlc1xcd29ya291dHNcXGFkZC1ub3RlXFxhZGQtbm90ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFnQjtFQUNoQix1QkFBZTtFQUNmLG9CQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93b3Jrb3V0cy9hZGQtbm90ZS9hZGQtbm90ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XHJcbiAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/workouts/add-note/add-note.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/workouts/add-note/add-note.component.ts ***!
  \***************************************************************/
/*! exports provided: AddNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNoteComponent", function() { return AddNoteComponent; });
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


var AddNoteComponent = /** @class */ (function () {
    function AddNoteComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.notes = '';
    }
    AddNoteComponent.prototype.ngOnInit = function () {
    };
    AddNoteComponent.prototype.close = function () {
        this.modalCtrl.dismiss(null);
    };
    AddNoteComponent.prototype.closeWithNotes = function () {
        this.modalCtrl.dismiss(this.notes);
    };
    AddNoteComponent.prototype.backButtonHandler = function ($event) {
        $event.preventDefault();
        this.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddNoteComponent.prototype, "notes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:backbutton', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AddNoteComponent.prototype, "backButtonHandler", null);
    AddNoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-note',
            template: __webpack_require__(/*! ./add-note.component.html */ "./src/app/pages/workouts/add-note/add-note.component.html"),
            styles: [__webpack_require__(/*! ./add-note.component.scss */ "./src/app/pages/workouts/add-note/add-note.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], AddNoteComponent);
    return AddNoteComponent;
}());



/***/ }),

/***/ "./src/app/pages/workouts/tracker/tracker.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/workouts/tracker/tracker.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\" (click)=\"closeModal()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ exercise.name }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"sets\" padding>\r\n    <ion-grid class=\"form\">\r\n      <ion-row class=\"header\" justify-content-end>\r\n        <ion-col size=\"2\">Set</ion-col>\r\n        <ion-col size=\"3\" *ngIf=\"exercise.record_type === 2\">\r\n          <span class=\"form-header\">Reps</span>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <span class=\"form-header\">Weight</span>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-grid class=\"form\">\r\n      <ion-row *ngFor=\"let reps of workoutData; let i = index;\" justify-content-end>\r\n        <ion-col size=\"2\">\r\n          <p class=\"serial\">{{ i + 1 }}</p>\r\n        </ion-col>\r\n        <ion-col size=\"3\" *ngIf=\"exercise.record_type === 2\">\r\n          <input type=\"number\" tabindex=\"{{i*5}}\" [value]=\"reps.reps\" (input)=\"reps.reps=$event.target.value\">\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <input type=\"number\" tabindex=\"{{(i*5) + 1}}\" [value]=\"reps.weight\" (input)=\"reps.weight=$event.target.value\">\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row margin-top justify-content-center>\r\n        <ion-col col-12 margin-top justify-content-center text-center>\r\n          <ion-button (click)=\"updateAndClose()\" fill=\"outline\" expand=\"full\">Save Exercise Info</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <p class=\"description\" padding>Use this page to track the weight, reps, or time you use for each exercise.</p>\r\n  <div class=\"horizontal-line\"></div>\r\n  <app-workout-history [exerciseGroupId]=\"exercise.id\" [exerciseId]=\"exercise.exercise_id\"></app-workout-history>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/workouts/tracker/tracker.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/workouts/tracker/tracker.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-row {\n  align-items: center;\n  padding: 2px 0; }\n\nion-col {\n  height: 30px;\n  display: flex;\n  align-items: center; }\n\n.header {\n  font-weight: bold; }\n\n.serial {\n  width: 30px;\n  height: 30px;\n  font-size: 14px;\n  text-align: center;\n  border-bottom: 4px solid var(--ion-1p-blue-primary);\n  font-weight: bold;\n  line-height: 30px; }\n\ninput {\n  background: var(--ion-color-primary-contrast);\n  padding: 0 4px;\n  width: 100%;\n  height: 30px;\n  border: 0;\n  border-bottom: 4px solid var(--ion-color-medium); }\n\ninput:focus {\n  outline: none;\n  border-bottom: 4px solid var(--ion-color-primary); }\n\np.description {\n  color: var(--ion-1p-darker);\n  font-size: 1em; }\n\n.horizontal-line {\n  border-top: 2px solid #E5F7FD; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd29ya291dHMvdHJhY2tlci9FOlxcaW9uaWNcXFZlcnZlQ29tbWVyY2VcXE5ld0RldlxcbXRzdC1hcHAvc3JjXFxhcHBcXHBhZ2VzXFx3b3Jrb3V0c1xcdHJhY2tlclxcdHJhY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbURBQW1EO0VBQ25ELGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSw2Q0FBNkM7RUFDN0MsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULGdEQUFnRCxFQUFBOztBQUdsRDtFQUNFLGFBQWE7RUFDYixpREFBaUQsRUFBQTs7QUFHbkQ7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYyxFQUFBOztBQUdoQjtFQUNFLDZCQUE2QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd29ya291dHMvdHJhY2tlci90cmFja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXJvdyB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycHggMDtcclxufVxyXG5cclxuaW9uLWNvbCB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zZXJpYWwge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1pb24tMXAtYmx1ZS1wcmltYXJ5KTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcclxuICBwYWRkaW5nOiAwIDRweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxucC5kZXNjcmlwdGlvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi0xcC1kYXJrZXIpO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1saW5lIHtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgI0U1RjdGRDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/workouts/tracker/tracker.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/workouts/tracker/tracker.component.ts ***!
  \*************************************************************/
/*! exports provided: TrackerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerComponent", function() { return TrackerComponent; });
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


var TrackerComponent = /** @class */ (function () {
    function TrackerComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    TrackerComponent.prototype.updateAndClose = function () {
        this.modalCtrl.dismiss(this.workoutData);
    };
    TrackerComponent.prototype.closeModal = function () {
        this.modalCtrl.dismiss(null);
    };
    TrackerComponent.prototype.backButtonHandler = function ($event) {
        $event.preventDefault();
        this.closeModal();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TrackerComponent.prototype, "workoutData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrackerComponent.prototype, "exercise", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:backbutton', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TrackerComponent.prototype, "backButtonHandler", null);
    TrackerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tracker',
            template: __webpack_require__(/*! ./tracker.component.html */ "./src/app/pages/workouts/tracker/tracker.component.html"),
            styles: [__webpack_require__(/*! ./tracker.component.scss */ "./src/app/pages/workouts/tracker/tracker.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], TrackerComponent);
    return TrackerComponent;
}());



/***/ }),

/***/ "./src/app/pages/workouts/workout-history/workout-history.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/workouts/workout-history/workout-history.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Heading-->\r\n<div class=\"row heading\">\r\n  <div class=\"col\"></div>\r\n  <div class=\"col\"># Of Reps</div>\r\n  <div class=\"col\">Weight</div>\r\n</div>\r\n<!--end Heading-->\r\n<!--Skeleton text for loading-->\r\n<ng-container *ngIf=\"!loaded\">\r\n  <div class=\"row content\">\r\n    <div class=\"col\"><ion-skeleton-text animated></ion-skeleton-text></div>\r\n    <div class=\"col\"><ion-skeleton-text animated></ion-skeleton-text></div>\r\n    <div class=\"col\"><ion-skeleton-text animated></ion-skeleton-text></div>\r\n  </div>\r\n  <div class=\"row content\">\r\n    <div class=\"col\"><ion-skeleton-text animated></ion-skeleton-text></div>\r\n    <div class=\"col\"><ion-skeleton-text animated></ion-skeleton-text></div>\r\n    <div class=\"col\"><ion-skeleton-text animated></ion-skeleton-text></div>\r\n  </div>\r\n  <div class=\"row content\">\r\n    <div class=\"col\"><ion-skeleton-text animated></ion-skeleton-text></div>\r\n    <div class=\"col\"><ion-skeleton-text animated></ion-skeleton-text></div>\r\n    <div class=\"col\"><ion-skeleton-text animated></ion-skeleton-text></div>\r\n  </div>\r\n</ng-container>\r\n<!--end Skeleton text-->\r\n<!--Main content-->\r\n<ng-container *ngIf=\"loaded\">\r\n  <ng-container *ngFor=\"let log of historyLogs\">\r\n    <div class=\"row content\" *ngFor=\"let history of log.workout_session_exercises; let i = index;\">\r\n      <div class=\"col\">{{ i === 0 ? log.workout_date.format('MMMM D') : '' }}</div>\r\n      <div class=\"col\">{{ history.reps }}</div>\r\n      <div class=\"col\">{{ history.weight }} lbs</div>\r\n    </div>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"historyLogs.length === 0\">\r\n    <div class=\"row content\">\r\n      <div class=\"col no-history\">\r\n        No logs added\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n</ng-container>\r\n<!--end Main content-->\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/workouts/workout-history/workout-history.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/workouts/workout-history/workout-history.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  display: flex;\n  padding: 10px; }\n  .row .col {\n    text-align: center;\n    font-weight: 600; }\n  .row .col:nth-child(1) {\n      width: 50%; }\n  .row .col:nth-child(2) {\n      width: 25%; }\n  .row .col:nth-child(3) {\n      width: 25%; }\n  .heading {\n  text-transform: uppercase; }\n  .content .col {\n  font-size: 15px;\n  color: rgba(0, 0, 0, 0.6);\n  padding: 10px; }\n  .content .col:nth-child(1) {\n    text-align: left; }\n  .content .col.no-history {\n    width: 100%;\n    text-align: center; }\n  .content:nth-child(odd) {\n  background: rgba(0, 0, 0, 0.05); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd29ya291dHMvd29ya291dC1oaXN0b3J5L0U6XFxpb25pY1xcVmVydmVDb21tZXJjZVxcTmV3RGV2XFxtdHN0LWFwcC9zcmNcXGFwcFxccGFnZXNcXHdvcmtvdXRzXFx3b3Jrb3V0LWhpc3RvcnlcXHdvcmtvdXQtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhLEVBQUE7RUFGZjtJQUtJLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTtFQU5wQjtNQVNNLFVBQVUsRUFBQTtFQVRoQjtNQWFNLFVBQVUsRUFBQTtFQWJoQjtNQWlCTSxVQUFVLEVBQUE7RUFLaEI7RUFDRSx5QkFBeUIsRUFBQTtFQUczQjtFQUdJLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsYUFBYSxFQUFBO0VBTGpCO0lBUU0sZ0JBQWdCLEVBQUE7RUFSdEI7SUFZTSxXQUFXO0lBQ1gsa0JBQWtCLEVBQUE7RUFieEI7RUFrQkksK0JBQStCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93b3Jrb3V0cy93b3Jrb3V0LWhpc3Rvcnkvd29ya291dC1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAuY29sIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgd2lkdGg6IDI1JTtcclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG5cclxuICAuY29sIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAmLm5vLWhpc3Rvcnkge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/workouts/workout-history/workout-history.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/workouts/workout-history/workout-history.component.ts ***!
  \*****************************************************************************/
/*! exports provided: WorkoutHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutHistoryComponent", function() { return WorkoutHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_workouts_workouts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/workouts/workouts.service */ "./src/app/services/workouts/workouts.service.ts");
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



var WorkoutHistoryComponent = /** @class */ (function () {
    function WorkoutHistoryComponent(modalCtrl, workoutService) {
        this.modalCtrl = modalCtrl;
        this.workoutService = workoutService;
        this.loaded = false;
        this.historyLogs = [];
    }
    WorkoutHistoryComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.workoutService.exerciseHistory(this.exerciseId, this.exerciseGroupId)];
                    case 1:
                        _a.historyLogs = (_b.sent());
                        this.loaded = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkoutHistoryComponent.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    WorkoutHistoryComponent.prototype.backButtonHandler = function ($event) {
        $event.preventDefault();
        this.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], WorkoutHistoryComponent.prototype, "exerciseGroupId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], WorkoutHistoryComponent.prototype, "exerciseId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:backbutton', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WorkoutHistoryComponent.prototype, "backButtonHandler", null);
    WorkoutHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workout-history',
            template: __webpack_require__(/*! ./workout-history.component.html */ "./src/app/pages/workouts/workout-history/workout-history.component.html"),
            styles: [__webpack_require__(/*! ./workout-history.component.scss */ "./src/app/pages/workouts/workout-history/workout-history.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"], _services_workouts_workouts_service__WEBPACK_IMPORTED_MODULE_2__["WorkoutsService"]])
    ], WorkoutHistoryComponent);
    return WorkoutHistoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/workouts/workouts-info/workouts-info.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/workouts/workouts-info/workouts-info.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\" (click)=\"close()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Workout info</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content padding>\r\n  <section class=\"content\">\r\n    <h3 class=\"heading\">\r\n      <b>Warm Up:</b> A warm-up serves two major purposes---to enhance your workout and prevent injury. Consequently, a\r\n      warm-up\r\n      is both physical and mental. You want to get the blood flowing which in turn will increase your core temperature.\r\n      As you do this the goal will be to \"prime\" your body and muscles to move with greater range of motion.\r\n    </h3>\r\n    <ul>\r\n      <li>\r\n        A good goal is that your warm up should make you physically feel warm and even starting to break a sweat. A\r\n        good\r\n        common practice is to hop on your favorite piece of cardio equipment for 5 minutes. Slowly increasing your\r\n        effort\r\n        of that time frame working into a moderate to challenging effort.\r\n      </li>\r\n\r\n      <li>\r\n        Here is a simple, full body warm up. Proceed through the following 2 or more times. This is NOT a race or for\r\n        time. Focus on good movement patterns and proper range of motion.\r\n      </li>\r\n      <ul>\r\n        <li>\r\n          20 seconds High Knees\r\n        </li>\r\n        <li>\r\n          20 Seconds Butt Kicks\r\n        </li>\r\n        <li>\r\n          20 Seconds Arm Circles (Forward Rotation)\r\n        </li>\r\n        <li>\r\n          20 Seconds Arm Circles (Backwards Rotation\r\n        </li>\r\n        <li>\r\n          10 Air squats\r\n        </li>\r\n        <li>\r\n          10 Push Ups\r\n        </li>\r\n        <li>\r\n          10 spider-man steps (5 each Leg)\r\n        </li>\r\n        <li>\r\n          10 Burpees\r\n        </li>\r\n        <li>\r\n          10 Lunges (5 each leg)\r\n        </li>\r\n        <li>\r\n          10 High Kicks (5 Each Leg)\r\n        </li>\r\n      </ul>\r\n      <li>\r\n        As You start the actual workout, make sure to warm up the movement you are going to do. For example: Before\r\n        starting your 3 sets of Back Squats, do a warm up set of Back Squats using very little or no weight for 20 to\r\n        30\r\n        reps. Then do your working sets of Back Squats and move on to Leg Press. Before beginning the sets of Leg\r\n        Press,\r\n        perform a warm up set with very little to no weight for 20-30 reps. Then begin your 4 sets of Leg Press. When\r\n        Finished move on to the next exercise, performing a warm up set before, and repeat this for each exercise.\r\n      </li>\r\n    </ul>\r\n    <h3 class=\"heading\">\r\n      <b>Cool-Down:</b> A cool down is an essential part of your workout. A cool down typically last for 3-12 minutes. The\r\n      purpose of a quality cool down after your workout is to allow your heart rate and breathing to return to normal,\r\n      decrease potential joint or muscle soreness, and set your body up for a great workout next time.\r\n    </h3>\r\n    <ul>\r\n      <li>\r\n        Your cool down will be based off the type of workout you preformed and the muscle you work. A good general cool\r\n        down would be using jogging, walking, or using your favorite piece of cardio equipment for 2-3 minutes at a\r\n        brisk\r\n        to moderate pace. Reducing the effort every 30-45 seconds to where you find yourself \"walking\" or at a casual\r\n        pace on the equipment.\r\n      </li>\r\n      <li>\r\n        Follow this up with a series of basic stretches. Hold the following stretches for 20-30 seconds. Repeat this\r\n        list\r\n        as desired.\r\n      </li>\r\n      <li>\r\n        Standing Quad Stretch (Each Leg)\r\n      </li>\r\n      <li>\r\n        Side Bend (Each Side)\r\n      </li>\r\n      <li>\r\n        Cat/Cow (rotate for 20-30 seconds, brief pause in each position)\r\n      </li>\r\n      <li>\r\n        Childs Pose\r\n      </li>\r\n      <li>\r\n        Seated Hamstring\r\n      </li>\r\n      <li>\r\n        Butterfly\r\n      </li>\r\n      <li>\r\n        Twisting Glute Stretch\r\n      </li>\r\n      <li>\r\n        Overhead Triceps and Shoulder Stretch (Each Arm)\r\n      </li>\r\n      <li>\r\n        Cross-Body Shoulder Stretch (Each Arm)\r\n      </li>\r\n    </ul>\r\n  </section>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/workouts/workouts-info/workouts-info.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/workouts/workouts-info/workouts-info.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding: 20px 0; }\n  .content .heading {\n    font-size: 16px;\n    line-height: 20px;\n    padding: 10px 0; }\n  .content ul {\n    font-size: 14px;\n    margin: 5px 0;\n    padding-left: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd29ya291dHMvd29ya291dHMtaW5mby9FOlxcaW9uaWNcXFZlcnZlQ29tbWVyY2VcXE5ld0RldlxcbXRzdC1hcHAvc3JjXFxhcHBcXHBhZ2VzXFx3b3Jrb3V0c1xcd29ya291dHMtaW5mb1xcd29ya291dHMtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWUsRUFBQTtFQURqQjtJQUlJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZSxFQUFBO0VBTm5CO0lBVUksZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dvcmtvdXRzL3dvcmtvdXRzLWluZm8vd29ya291dHMtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcblxyXG4gIC5oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/workouts/workouts-info/workouts-info.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/workouts/workouts-info/workouts-info.component.ts ***!
  \*************************************************************************/
/*! exports provided: WorkoutsInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutsInfoComponent", function() { return WorkoutsInfoComponent; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkoutsInfoComponent = /** @class */ (function () {
    function WorkoutsInfoComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    WorkoutsInfoComponent.prototype.ngOnInit = function () {
    };
    WorkoutsInfoComponent.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    WorkoutsInfoComponent.prototype.backButtonHandler = function ($event) {
        $event.preventDefault();
        this.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:backbutton', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WorkoutsInfoComponent.prototype, "backButtonHandler", null);
    WorkoutsInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-workouts-info',
            template: __webpack_require__(/*! ./workouts-info.component.html */ "./src/app/pages/workouts/workouts-info/workouts-info.component.html"),
            styles: [__webpack_require__(/*! ./workouts-info.component.scss */ "./src/app/pages/workouts/workouts-info/workouts-info.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"]])
    ], WorkoutsInfoComponent);
    return WorkoutsInfoComponent;
}());



/***/ }),

/***/ "./src/app/pages/workouts/workouts.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/workouts/workouts.module.ts ***!
  \***************************************************/
/*! exports provided: WorkoutsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutsPageModule", function() { return WorkoutsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _workouts_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workouts.page */ "./src/app/pages/workouts/workouts.page.ts");
/* harmony import */ var _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tracker/tracker.component */ "./src/app/pages/workouts/tracker/tracker.component.ts");
/* harmony import */ var _add_note_add_note_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-note/add-note.component */ "./src/app/pages/workouts/add-note/add-note.component.ts");
/* harmony import */ var _workout_history_workout_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./workout-history/workout-history.component */ "./src/app/pages/workouts/workout-history/workout-history.component.ts");
/* harmony import */ var _components_bottom_menu_bottom_menu_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/bottom-menu/bottom-menu.module */ "./src/app/components/bottom-menu/bottom-menu.module.ts");
/* harmony import */ var _workouts_info_workouts_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./workouts-info/workouts-info.component */ "./src/app/pages/workouts/workouts-info/workouts-info.component.ts");
/* harmony import */ var _components_logo_logo_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/logo/logo.module */ "./src/app/components/logo/logo.module.ts");
/* harmony import */ var _guards_android_back_button_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../guards/android-back-button.guard */ "./src/app/guards/android-back-button.guard.ts");
/* harmony import */ var _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/side-menu/side-menu.module */ "./src/app/components/side-menu/side-menu.module.ts");
/* harmony import */ var _components_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/calendar/calendar.module */ "./src/app/components/calendar/calendar.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: '',
        component: _workouts_page__WEBPACK_IMPORTED_MODULE_5__["WorkoutsPage"],
        canDeactivate: [_guards_android_back_button_guard__WEBPACK_IMPORTED_MODULE_12__["AndroidBackButtonGuard"]]
    }
];
var WorkoutsPageModule = /** @class */ (function () {
    function WorkoutsPageModule() {
    }
    WorkoutsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _components_logo_logo_module__WEBPACK_IMPORTED_MODULE_11__["LogoModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_14__["CalendarModule"],
                _components_bottom_menu_bottom_menu_module__WEBPACK_IMPORTED_MODULE_9__["BottomMenuModule"],
                _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_13__["SideMenuModule"]
            ],
            declarations: [_workouts_page__WEBPACK_IMPORTED_MODULE_5__["WorkoutsPage"], _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_6__["TrackerComponent"], _add_note_add_note_component__WEBPACK_IMPORTED_MODULE_7__["AddNoteComponent"], _workout_history_workout_history_component__WEBPACK_IMPORTED_MODULE_8__["WorkoutHistoryComponent"], _workouts_info_workouts_info_component__WEBPACK_IMPORTED_MODULE_10__["WorkoutsInfoComponent"]],
            entryComponents: [_tracker_tracker_component__WEBPACK_IMPORTED_MODULE_6__["TrackerComponent"], _add_note_add_note_component__WEBPACK_IMPORTED_MODULE_7__["AddNoteComponent"], _workout_history_workout_history_component__WEBPACK_IMPORTED_MODULE_8__["WorkoutHistoryComponent"],
                _workouts_info_workouts_info_component__WEBPACK_IMPORTED_MODULE_10__["WorkoutsInfoComponent"]]
        })
    ], WorkoutsPageModule);
    return WorkoutsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/workouts/workouts.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/workouts/workouts.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <app-menu-button></app-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" (click)=\"workoutsInfo()\">\r\n      <ion-icon color=\"primary\" name=\"help\" size=\"large\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>My Workout</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<app-calendar [minDate]=\"minDate\" [dateTime]=\"actingDate\" [format]=\"'dddd, M/D'\" (dateChange)=\"onDateChange($event)\"></app-calendar>\r\n<ion-content>\r\n  <section class=\"exercises\" *ngIf=\"workoutSession\">\r\n    <!-- Workout name -->\r\n    <div class=\"workout-name\" *ngIf=\"!workoutSession.completed\">\r\n      {{ workoutSession.workout.name }}\r\n    </div>\r\n    <div class=\"workout-name completed\" *ngIf=\"workoutSession.completed\">\r\n        <ion-icon color=\"success\" size=\"small\" name=\"checkmark\"></ion-icon> <span>Workout Completed</span>\r\n    </div>\r\n    <div class=\"rest-day\" *ngIf=\"workoutSession.workout.is_rest_day === 1\">\r\n      <h3>Rest Day</h3>\r\n      <p>Go for a walk. Take a break.</p>\r\n      <p><app-logo></app-logo></p>\r\n    </div>\r\n    <ion-list>\r\n      <ion-item-group *ngFor=\"let group of workoutSession.workout.exercise_groups\">\r\n        <ion-item-divider>\r\n          <ion-label slot=\"start\">{{group.name || 'Workout'}}</ion-label>\r\n          <ion-label slot=\"end\" *ngIf=\"group.group_time > 0\">{{ minSec(group.group_time) }}</ion-label>\r\n        </ion-item-divider>\r\n        <ion-item class=\"instructions\" *ngIf=\"group.instructions\">\r\n          <ion-label text-wrap>{{ group.instructions }}</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"repeat-instructions\" *ngIf=\"group.repeat === 2\">\r\n          <ion-label>Repeat {{ group.total_sets }}x</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"repeat-instructions\" *ngIf=\"group.repeat === 3\">\r\n          <ion-label>Repeat for {{ group.group_time }}</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"repeat-instructions\" *ngIf=\"group.repeat === 4\">\r\n          <ion-label>Repeat {{ group.total_sets }}x or for {{ group.group_time }}</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"exercise\" *ngFor=\"let exercise of group.exercises\">\r\n          <ion-label text-wrap>\r\n            <span class=\"name\">{{ exercise.name }}</span>\r\n            <p class=\"instructions\">{{ exercise.instructions }}</p>\r\n            <p class=\"last-exercise-info\" *ngIf=\"showStatsIcon(exercise) && exercise.last_exercise_records\">{{ exercise.last_exercise_records }}</p>\r\n          </ion-label>\r\n          <div slot=\"end\">\r\n            <ion-button fill=\"clear\" (click)=\"openTrackingModal(exercise)\" *ngIf=\"showStatsIcon(exercise)\">\r\n              <ion-icon slot=\"icon-only\" color=\"medium\" name=\"stats\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" routerLink=\"/exercises/{{exercise.exercise.id}}\">\r\n              <ion-icon slot=\"icon-only\" color=\"medium\" name=\"information-circle-outline\"></ion-icon>\r\n            </ion-button>\r\n          </div>\r\n        </ion-item>\r\n      </ion-item-group>\r\n      <ion-item-group>\r\n        <ion-item *ngIf=\"!workoutSession.completed\">\r\n          <ion-button class=\"centered full-width\" size=\"default\" type=\"button\" color=\"success\" fill=\"outline\" expand=\"full\" (click)=\"complete()\">\r\n            <ion-icon color=\"success\" slot=\"start\" name=\"checkmark\"></ion-icon>\r\n            Mark Complete\r\n          </ion-button>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"workoutSession.completed\">\r\n          <ion-button class=\"centered full-width\" size=\"default\" type=\"button\" color=\"success\" fill=\"solid\" expand=\"full\" (click)=\"complete()\">\r\n            <ion-icon color=\"light\" slot=\"start\" name=\"checkmark\"></ion-icon>\r\n            Completed\r\n          </ion-button>\r\n        </ion-item>\r\n      </ion-item-group>\r\n      <ion-item-group>\r\n        <ion-item *ngIf=\"!workoutSession.notes.notes\">\r\n          <ion-button class=\"centered\" type=\"button\" fill=\"clear\" expand=\"full\" (click)=\"openAddNote()\">\r\n            <ion-icon name=\"add\" slot=\"start\"></ion-icon>\r\n            Add Workout Notes\r\n          </ion-button>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"workoutSession.notes.notes\" class=\"workout-name\" (click)=\"openAddNote()\">\r\n          <ion-label>Your Workout Notes</ion-label>\r\n          <ion-icon float-right color=\"primary\" name=\"create\"></ion-icon>\r\n        </ion-item>\r\n        <ion-item class=\"instructions\" *ngIf=\"workoutSession.notes.notes\">\r\n          <ion-label>\r\n            {{ workoutSession.notes.notes }}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-item-group>\r\n    </ion-list>\r\n  </section>\r\n  <section class=\"exercises empty\" *ngIf=\"workoutSession === null\">\r\n    You did not log a workout.\r\n  </section>\r\n</ion-content>\r\n<app-bottom-menu [user]=\"transphormer\"></app-bottom-menu>\r\n"

/***/ }),

/***/ "./src/app/pages/workouts/workouts.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/workouts/workouts.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f7f9fc; }\n\nion-label {\n  --border-width: 0; }\n\nion-item {\n  --inner-border-width: 0; }\n\nion-icon {\n  color: var(--ion-color-icon);\n  font-size: var(--app-paragraph-size); }\n\nion-item.instructions {\n  color: var(--ion-1p-blue-darker); }\n\n.rest-day {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 60vh;\n  justify-content: center; }\n\n.rest-day h3 {\n    color: var(--ion-1p-darker);\n    font-family: var(--ion-1p-font-dominant);\n    text-transform: uppercase; }\n\n.rest-day p {\n    color: var(--ion-1p-light-bg); }\n\n.extra {\n  justify-content: center;\n  display: flex;\n  margin-bottom: 16px; }\n\n.empty {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%; }\n\nion-item-group:not(:first-child) {\n  margin-top: 8px; }\n\nion-item-divider {\n  --min-height: 32px;\n  --background: var(--ion-color-brand);\n  --color: var(--ion-color-primary-contrast); }\n\nion-item-divider ion-label {\n    margin: 8px 0; }\n\nion-item-divider ion-label[slot=\"start\"] {\n    font-weight: 900;\n    text-transform: uppercase; }\n\nion-item-divider ion-label[slot=\"end\"] {\n    font-weight: normal;\n    margin-right: 16px; }\n\n.workout-name {\n  text-align: center;\n  text-transform: uppercase;\n  color: #999;\n  font-weight: 900;\n  line-height: 3em;\n  font-size: 12px;\n  background: #fff; }\n\n.workout-name.completed {\n    color: var(--ion-color-success);\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n\n.workout-name.completed ion-icon {\n      margin-right: 8px; }\n\nion-item .item-inner {\n  border: 0; }\n\nion-item .item-native {\n  border-width: 4px 0 0 0;\n  border-style: solid;\n  border-color: var(--ion-1p-light-blue); }\n\nion-item.instructions ion-label {\n  font-weight: normal;\n  font-size: 12px; }\n\nion-item.exercise {\n  --border-width: 4px 0 0 0;\n  --border-color: var(--ion-1p-light-blue); }\n\nion-item.exercise ion-label {\n    font-size: 14px; }\n\nion-item.exercise p.instructions {\n    color: var(--ion-color-brand);\n    font-weight: 700; }\n\nion-item.exercise .name {\n    text-transform: uppercase;\n    letter-spacing: -0.3px; }\n\n.repeat-instructions {\n  --min-height: 32px;\n  --background: var(--ion-1p-light-blue); }\n\n.repeat-instructions ion-label {\n    text-align: center;\n    font-size: 13px;\n    margin: 4px 0; }\n\n.exercise div[slot=\"end\"] {\n  margin-left: 16px; }\n\n.exercise div[slot=\"end\"] ion-button {\n    --padding-start: 8px;\n    --padding-end: 8px; }\n\n.last-exercise-info {\n  padding: 6px 0 2px 0;\n  font-style: italic;\n  font-weight: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd29ya291dHMvRTpcXGlvbmljXFxWZXJ2ZUNvbW1lcmNlXFxOZXdEZXZcXG10c3QtYXBwL3NyY1xcYXBwXFxwYWdlc1xcd29ya291dHNcXHdvcmtvdXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFhLEVBQUE7O0FBR2Y7RUFDRSxpQkFBZSxFQUFBOztBQUVqQjtFQUNFLHVCQUFxQixFQUFBOztBQUV2QjtFQUNFLDRCQUE0QjtFQUM1QixvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDRSxnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCLEVBQUE7O0FBTHpCO0lBUUksMkJBQTJCO0lBQzNCLHdDQUF3QztJQUN4Qyx5QkFBeUIsRUFBQTs7QUFWN0I7SUFjSSw2QkFBNkIsRUFBQTs7QUFJakM7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFHZDtFQUVJLGVBQWUsRUFBQTs7QUFJbkI7RUFDRSxrQkFBYTtFQUNiLG9DQUFhO0VBQ2IsMENBQVEsRUFBQTs7QUFIVjtJQUtJLGFBQWEsRUFBQTs7QUFMakI7SUFRSSxnQkFBZ0I7SUFDaEIseUJBQXlCLEVBQUE7O0FBVDdCO0lBWUksbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBOztBQUl0QjtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQVBsQjtJQVNJLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQixFQUFBOztBQVp2QjtNQWNNLGlCQUFpQixFQUFBOztBQUt2QjtFQUVJLFNBQVEsRUFBQTs7QUFGWjtFQUtJLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0NBQXNDLEVBQUE7O0FBUDFDO0VBV00sbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUFackI7RUFnQkkseUJBQWU7RUFDZix3Q0FBZSxFQUFBOztBQWpCbkI7SUFtQk0sZUFBZSxFQUFBOztBQW5CckI7SUFzQk0sNkJBQTZCO0lBQzdCLGdCQUFnQixFQUFBOztBQXZCdEI7SUEwQk0seUJBQXlCO0lBQ3pCLHNCQUFzQixFQUFBOztBQUs1QjtFQUNFLGtCQUFhO0VBQ2Isc0NBQWEsRUFBQTs7QUFGZjtJQUlJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYSxFQUFBOztBQUlqQjtFQUNFLGlCQUFpQixFQUFBOztBQURuQjtJQUdJLG9CQUFnQjtJQUNoQixrQkFBYyxFQUFBOztBQUlsQjtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93b3Jrb3V0cy93b3Jrb3V0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjdmOWZjO1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcclxufVxyXG5pb24taWNvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1pY29uKTtcclxuICBmb250LXNpemU6IHZhcigtLWFwcC1wYXJhZ3JhcGgtc2l6ZSk7XHJcbn1cclxuXHJcbmlvbi1pdGVtLmluc3RydWN0aW9ucyB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi0xcC1ibHVlLWRhcmtlcik7XHJcbn1cclxuXHJcbi5yZXN0LWRheSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogNjB2aDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgaDMge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi0xcC1kYXJrZXIpO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi0xcC1mb250LWRvbWluYW50KTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tMXAtbGlnaHQtYmcpO1xyXG4gIH1cclxufVxyXG5cclxuLmV4dHJhIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5lbXB0eSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaW9uLWl0ZW0tZ3JvdXAge1xyXG4gICY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWl0ZW0tZGl2aWRlciB7XHJcbiAgLS1taW4taGVpZ2h0OiAzMnB4O1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJyYW5kKTtcclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbFtzbG90PVwic3RhcnRcIl0ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbFtzbG90PVwiZW5kXCJdIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ud29ya291dC1uYW1lIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogIzk5OTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAzZW07XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgJi5jb21wbGV0ZWQge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIC5pdGVtLWlubmVyIHtcclxuICAgIGJvcmRlcjowO1xyXG4gIH1cclxuICAuaXRlbS1uYXRpdmUge1xyXG4gICAgYm9yZGVyLXdpZHRoOiA0cHggMCAwIDA7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tMXAtbGlnaHQtYmx1ZSk7XHJcbiAgfVxyXG4gICYuaW5zdHJ1Y3Rpb25zIHtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICB9XHJcbiAgJi5leGVyY2lzZSB7XHJcbiAgICAtLWJvcmRlci13aWR0aDogNHB4IDAgMCAwO1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi0xcC1saWdodC1ibHVlKTtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIHAuaW5zdHJ1Y3Rpb25zIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1icmFuZCk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcbiAgICAubmFtZSB7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucmVwZWF0LWluc3RydWN0aW9ucyB7XHJcbiAgLS1taW4taGVpZ2h0OiAzMnB4O1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLTFwLWxpZ2h0LWJsdWUpO1xyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG4gIH1cclxufVxyXG5cclxuLmV4ZXJjaXNlIGRpdltzbG90PVwiZW5kXCJdIHtcclxuICBtYXJnaW4tbGVmdDogMTZweDtcclxuICBpb24tYnV0dG9uIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmxhc3QtZXhlcmNpc2UtaW5mbyB7XHJcbiAgcGFkZGluZzogNnB4IDAgMnB4IDA7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/workouts/workouts.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/workouts/workouts.page.ts ***!
  \*************************************************/
/*! exports provided: WorkoutsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutsPage", function() { return WorkoutsPage; });
/* harmony import */ var _workouts_info_workouts_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workouts-info/workouts-info.component */ "./src/app/pages/workouts/workouts-info/workouts-info.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tracker/tracker.component */ "./src/app/pages/workouts/tracker/tracker.component.ts");
/* harmony import */ var _add_note_add_note_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-note/add-note.component */ "./src/app/pages/workouts/add-note/add-note.component.ts");
/* harmony import */ var _services_workouts_workouts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/workouts/workouts.service */ "./src/app/services/workouts/workouts.service.ts");
/* harmony import */ var _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/errors/errors.service */ "./src/app/services/errors/errors.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/toast-service/toast-service.service */ "./src/app/services/toast-service/toast-service.service.ts");
/* harmony import */ var _services_interceptors_caching_request_caching_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/interceptors/caching/request-caching.service */ "./src/app/services/interceptors/caching/request-caching.service.ts");
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/analytics/analytics.service */ "./src/app/services/analytics/analytics.service.ts");
/* harmony import */ var _services_analytics_analytic_events_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/analytics/analytic-events.enum */ "./src/app/services/analytics/analytic-events.enum.ts");
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












var WorkoutsPage = /** @class */ (function () {
    function WorkoutsPage(modal, navCtrl, workoutService, loadingCtrl, errorService, toastSvc, cacheService, analyticService) {
        this.modal = modal;
        this.navCtrl = navCtrl;
        this.workoutService = workoutService;
        this.loadingCtrl = loadingCtrl;
        this.errorService = errorService;
        this.toastSvc = toastSvc;
        this.cacheService = cacheService;
        this.analyticService = analyticService;
        this.workoutSession = undefined;
        this.canEdit = true;
        this.canLeaveAndroidBack = true;
        this.transphormer = JSON.parse(window.localStorage.getItem('transphormer'));
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_7__(this.transphormer.created_at);
    }
    WorkoutsPage.prototype.ngOnInit = function () {
        this.actingDate = moment__WEBPACK_IMPORTED_MODULE_7__();
        this.today = moment__WEBPACK_IMPORTED_MODULE_7__();
        return this.initWorkout(this.today.toDate());
    };
    WorkoutsPage.prototype.getTotalSetsForExercise = function (exercise) {
        var number = 0;
        this.workoutSession.workout.exercise_groups.forEach(function (group) {
            var exerciseInstances = group.exercises.filter(function (e) {
                return e.id === exercise.id;
            });
            if (exerciseInstances.length > 0) {
                number += ((group.total_sets || 1) * (exercise.total_sets || 1));
            }
        });
        return number;
    };
    WorkoutsPage.prototype.openTrackingModal = function (exercise) {
        return __awaiter(this, void 0, void 0, function () {
            var exerciseData, trackingModal, trackingResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.canLeaveAndroidBack = false;
                        exerciseData = this.getWorkoutExerciseData(exercise);
                        return [4 /*yield*/, this.modal.create({
                                component: _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_3__["TrackerComponent"],
                                backdropDismiss: false,
                                componentProps: {
                                    workoutData: exerciseData.workout_info,
                                    exercise: exercise,
                                }
                            })];
                    case 1:
                        trackingModal = _a.sent();
                        return [4 /*yield*/, trackingModal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, trackingModal.onDidDismiss()];
                    case 3:
                        trackingResult = _a.sent();
                        this.canLeaveAndroidBack = true;
                        if (trackingResult.data !== null) {
                            exerciseData.logged_on = moment__WEBPACK_IMPORTED_MODULE_7__().format('YYYY-M-D');
                            exerciseData.workout_info = trackingResult.data;
                            this.saveWorkoutExerciseData(exerciseData);
                            return [2 /*return*/, this.updateWorkoutData()];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkoutsPage.prototype.openAddNote = function () {
        return __awaiter(this, void 0, void 0, function () {
            var notesModal, notes, loader, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.canLeaveAndroidBack = false;
                        return [4 /*yield*/, this.modal.create({
                                component: _add_note_add_note_component__WEBPACK_IMPORTED_MODULE_4__["AddNoteComponent"],
                                backdropDismiss: false,
                                componentProps: {
                                    notes: this.workoutSession.notes.notes,
                                },
                            })];
                    case 1:
                        notesModal = _a.sent();
                        return [4 /*yield*/, notesModal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, notesModal.onDidDismiss()];
                    case 3:
                        notes = (_a.sent()).data;
                        this.canLeaveAndroidBack = true;
                        if (notes === null) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Please wait ...',
                            })];
                    case 4:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, this.workoutService.updateWorkoutNote(this.workoutSession.id, notes)];
                    case 7:
                        _a.sent();
                        this.workoutSession.notes.notes = notes;
                        this.toastSvc.flash('Workout notes updated.');
                        return [3 /*break*/, 9];
                    case 8:
                        e_1 = _a.sent();
                        this.toastSvc.flash(this.errorService.firstError(e_1));
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/, loader.dismiss()];
                }
            });
        });
    };
    /**
     * Initializes the workout session
     */
    WorkoutsPage.prototype.initWorkout = function (date) {
        return __awaiter(this, void 0, void 0, function () {
            var loader, _a, e_2;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Getting workout...',
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
                        return [4 /*yield*/, this.workoutService.fetchWorkout(date)];
                    case 4:
                        _a.workoutSession = (_b.sent());
                        if (!this.workoutSession.notes) {
                            this.workoutSession.notes = {
                                notes: '',
                            };
                        }
                        this.workoutSession.workout.exercise_groups = this.workoutSession.workout.exercise_groups.map(function (group) {
                            if (group.group_time === 0 || group.group_time === null) {
                                if (group.repeat === 4 || group.repeat === 3 || (group.repeat === 1 && group.group_time !== null)) {
                                    // Do nothing, the time is correct.
                                }
                                else if (group.repeat === 2 || (group.repeat === 1 && group.group_time === null)) {
                                    group.group_time = group.exercises.reduce(function (accumulator, currentValue) {
                                        if (currentValue.time_period) {
                                            return accumulator + currentValue.time_period;
                                        }
                                        else {
                                            return accumulator;
                                        }
                                    }, 0);
                                }
                                if (group.total_sets !== null) {
                                    group.group_time *= group.total_sets;
                                }
                            }
                            return group;
                        });
                        this.workoutSession.workout_data = this.workoutSession.workout_data || [];
                        this.workoutSession.workout_data = this.workoutSession.workout_data
                            .map(function (workoutData) { return _this.mergeSessionExerciseToWorkoutInfo(workoutData, _this.workoutSession.session_exercises); });
                        this.analyticService.logEvent(_services_analytics_analytic_events_enum__WEBPACK_IMPORTED_MODULE_11__["AnalyticEvents"].ViewingWorkouts, {});
                        return [3 /*break*/, 7];
                    case 5:
                        e_2 = _b.sent();
                        this.toastSvc.flash(this.errorService.firstError(e_2));
                        if (e_2.status === 404) {
                            this.workoutSession = null;
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    WorkoutsPage.prototype.minSec = function (time) {
        if (time === 0 || time === null) {
            return '';
        }
        var min = Math.floor(time / 60);
        var sec = (time % 60).toString();
        if (sec.length === 1) {
            sec = '0' + sec.toString();
        }
        return min + ":" + sec;
    };
    /**
     * Updates the workout data information through the service
     */
    WorkoutsPage.prototype.updateWorkoutData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var workout, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.workoutService.updateWorkoutExercise(this.workoutSession)];
                    case 1:
                        workout = _a.sent();
                        this.workoutSession.session_exercises = workout.session_exercises;
                        this.cacheService.clearKey(_services_workouts_workouts_service__WEBPACK_IMPORTED_MODULE_5__["WorkoutsService"].Url('workouts'), 'GET');
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        this.toastSvc.flash(this.errorService.firstError(e_3));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves the workouts data based on exercise
     * @param exercise
     */
    WorkoutsPage.prototype.getWorkoutExerciseData = function (exercise) {
        var index = this.workoutSession.workout_data.findIndex(function (workoutExercise) {
            return workoutExercise.exercise_id === exercise.exercise.id;
        });
        var exerciseData;
        if (index <= -1) {
            exerciseData = {
                exercise_id: exercise.exercise.id,
                exercise_group_id: exercise.id,
                workout_session_id: this.workoutSession.id,
                workout_info: this.createWorkoutInfo(exercise.record_type, this.getTotalSetsForExercise(exercise)),
                logged_on: moment__WEBPACK_IMPORTED_MODULE_7__().format('YYYY-M-D'),
            };
            this.workoutSession.workout_data.push(exerciseData);
        }
        else {
            exerciseData = this.workoutSession.workout_data[index];
            exerciseData.workout_info = this.createWorkoutInfo(exercise.record_type, this.getTotalSetsForExercise(exercise));
        }
        return this.mergeSessionExerciseToWorkoutInfo(exerciseData, this.workoutSession.session_exercises);
    };
    WorkoutsPage.prototype.complete = function () {
        this.workoutSession.completed = !this.workoutSession.completed;
        return this.updateWorkoutData();
    };
    /**
     * Saves the workout data to the main workoutSession variable
     * @param exerciseData
     */
    WorkoutsPage.prototype.saveWorkoutExerciseData = function (exerciseData) {
        var index = this.workoutSession.workout_data.findIndex(function (workoutExercise) {
            return workoutExercise.exercise_id === exerciseData.exercise_id;
        });
        this.workoutSession.workout_data[index] = exerciseData;
    };
    WorkoutsPage.prototype.createWorkoutInfo = function (recordType, loopCount) {
        if (recordType === 1 && !loopCount) {
            loopCount = 1;
        }
        if (!loopCount) {
            return [];
        }
        var workouts = [];
        for (var i = 1; i <= loopCount; i++) {
            workouts.push({
                weight: null,
                reps: null,
            });
        }
        return workouts;
    };
    WorkoutsPage.prototype.showStatsIcon = function (exercise) {
        return exercise.record_type === 1
            || exercise.record_type === 2;
    };
    WorkoutsPage.prototype.workoutsInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var workoutInfoModal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.analyticService.logEvent(_services_analytics_analytic_events_enum__WEBPACK_IMPORTED_MODULE_11__["AnalyticEvents"].WorkoutHelp, {});
                        this.canLeaveAndroidBack = true;
                        return [4 /*yield*/, this.modal.create({
                                component: _workouts_info_workouts_info_component__WEBPACK_IMPORTED_MODULE_0__["WorkoutsInfoComponent"],
                                backdropDismiss: false,
                            })];
                    case 1:
                        workoutInfoModal = _a.sent();
                        return [4 /*yield*/, workoutInfoModal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, workoutInfoModal.onDidDismiss()];
                    case 3:
                        _a.sent();
                        this.canLeaveAndroidBack = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Handler to check date change events from week tab
     *
     * @param date
     */
    WorkoutsPage.prototype.onDateChange = function (date) {
        this.canEdit = true;
        this.actingDate = moment__WEBPACK_IMPORTED_MODULE_7__(date);
        this.canEdit = (new Date()) < date;
        this.initWorkout(date);
    };
    /**
     * Merge new/existing workout session exercise information to workout info
     * @param exerciseData
     * @param workoutSessionExercises
     */
    WorkoutsPage.prototype.mergeSessionExerciseToWorkoutInfo = function (exerciseData, workoutSessionExercises) {
        var set = 0;
        var workoutSessionExercise = workoutSessionExercises.filter(function (exercise) {
            return exercise.exercise_group_id === exerciseData.exercise_group_id && exercise.exercise_id === exerciseData.exercise_id;
        });
        exerciseData.workout_info = exerciseData.workout_info.map(function (workoutInfo) {
            if (workoutSessionExercise[set]) {
                workoutInfo = {
                    reps: workoutSessionExercise[set].reps,
                    weight: workoutSessionExercise[set].weight,
                };
            }
            set++;
            return workoutInfo;
        });
        return exerciseData;
    };
    WorkoutsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-workouts',
            template: __webpack_require__(/*! ./workouts.page.html */ "./src/app/pages/workouts/workouts.page.html"),
            styles: [__webpack_require__(/*! ./workouts.page.scss */ "./src/app/pages/workouts/workouts.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_workouts_workouts_service__WEBPACK_IMPORTED_MODULE_5__["WorkoutsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _services_errors_errors_service__WEBPACK_IMPORTED_MODULE_6__["ErrorsService"],
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
            _services_interceptors_caching_request_caching_service__WEBPACK_IMPORTED_MODULE_9__["RequestCachingService"],
            _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_10__["AnalyticsService"]])
    ], WorkoutsPage);
    return WorkoutsPage;
}());



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
//# sourceMappingURL=pages-workouts-workouts-module.js.map