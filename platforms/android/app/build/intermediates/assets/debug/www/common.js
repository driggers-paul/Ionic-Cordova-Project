(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/chunk-353a032e.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/chunk-353a032e.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var _this = undefined;

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var router;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
            router = document.querySelector('ion-router');
            if (router) {
                if (ev != null) {
                    ev.preventDefault();
                }
                return [2 /*return*/, router.push(url, direction)];
            }
        }
        return [2 /*return*/, false];
    });
}); };



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/chunk-4e92c885.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/chunk-4e92c885.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
var hapticSelection = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
var hapticSelectionStart = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
var hapticSelectionChanged = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
var hapticSelectionEnd = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/chunk-c90aaa66.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/chunk-c90aaa66.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, d, e, f, h, i, n, p, r */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return debounceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findItemLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hasShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isEndSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return pointerCoord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return renderHiddenInput; });
var rIC = function (callback) {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    }
    else {
        setTimeout(callback, 32);
    }
};
var hasShadowDom = function (el) {
    return !!el.shadowRoot && !!el.attachShadow;
};
var findItemLabel = function (componentEl) {
    var itemEl = componentEl.closest('ion-item');
    if (itemEl) {
        return itemEl.querySelector('ion-label');
    }
    return null;
};
var renderHiddenInput = function (always, container, name, value, disabled) {
    if (always || hasShadowDom(container)) {
        var input = container.querySelector('input.aux-input');
        if (!input) {
            input = container.ownerDocument.createElement('input');
            input.type = 'hidden';
            input.classList.add('aux-input');
            container.appendChild(input);
        }
        input.disabled = disabled;
        input.name = name;
        input.value = value || '';
    }
};
var clamp = function (min, n, max) {
    return Math.max(min, Math.min(n, max));
};
var assert = function (actual, reason) {
    if (!actual) {
        var message = 'ASSERT: ' + reason;
        console.error(message);
        debugger; // tslint:disable-line
        throw new Error(message);
    }
};
var now = function (ev) {
    return ev.timeStamp || Date.now();
};
var pointerCoord = function (ev) {
    // get X coordinates for either a mouse click
    // or a touch depending on the given event
    if (ev) {
        var changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            var touch = changedTouches[0];
            return { x: touch.clientX, y: touch.clientY };
        }
        if (ev.pageX !== undefined) {
            return { x: ev.pageX, y: ev.pageY };
        }
    }
    return { x: 0, y: 0 };
};
/**
 * @hidden
 * Given a side, return if it should be on the end
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 */
var isEndSide = function (side) {
    var isRTL = document.dir === 'rtl';
    switch (side) {
        case 'start': return isRTL;
        case 'end': return !isRTL;
        default:
            throw new Error("\"" + side + "\" is not a valid value for [side]. Use \"start\" or \"end\" instead.");
    }
};
var debounceEvent = function (event, wait) {
    var original = event._original || event;
    return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait)
    };
};
var debounce = function (func, wait) {
    if (wait === void 0) { wait = 0; }
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout.apply(void 0, [func, wait].concat(args));
    };
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/chunk-cae2ca23.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/chunk-cae2ca23.js ***!
  \*****************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
var sanitizeDOMString = function (untrustedString) {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        var documentFragment_1 = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment_1.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment_1.querySelectorAll(blockedTag);
            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                var element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment_1.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                var childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        var documentFragmentChildren = getElementChildren(documentFragment_1);
        /* tslint:disable-next-line */
        for (var childIndex = 0; childIndex < documentFragmentChildren.length; childIndex++) {
            sanitizeElement(documentFragmentChildren[childIndex]);
        }
        // Append document fragment to div
        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment_1);
        // First child is always the div we did our work in
        var getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
var sanitizeElement = function (element) {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes[i];
        var attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        var attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    var childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (var i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
var getElementChildren = function (element) {
    return (element.children != null) ? element.children : element.childNodes;
};
var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];



/***/ }),

/***/ "./src/app/components/chart/chart.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/chart/chart.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chart\">\r\n  <canvas #canvas></canvas>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/chart/chart.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/chart/chart.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "canvas {\n  background-image: url('firstPhormLogo.png');\n  background-repeat: no-repeat;\n  background-size: 40%;\n  background-position: center;\n  background-blend-mode: difference;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFydC9FOlxcaW9uaWNcXFZlcnZlQ29tbWVyY2VcXE5ld0RldlxcbXRzdC1hcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNoYXJ0XFxjaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJDQUFnRTtFQUNoRSw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQixpQ0FBaUM7RUFDakMsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2FudmFzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pY29uL2ZpcnN0UGhvcm1Mb2dvLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA0MCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/chart/chart.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/chart/chart.component.ts ***!
  \*****************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
        this.weights = [];
    }
    ChartComponent.prototype.ngOnInit = function () {
    };
    ChartComponent.prototype.ngOnChanges = function () {
        this.setupChart();
    };
    ChartComponent.prototype.setupChart = function () {
        var labels = this.createLabels();
        var chart = new chart_js__WEBPACK_IMPORTED_MODULE_1__(this.canvas.nativeElement.getContext('2d'), {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                        label: 'Weight Logs',
                        backgroundColor: 'rgba(48, 145, 194, .15)',
                        borderColor: 'rgba(48, 145, 194, .9)',
                        data: this.createWeightLogs()
                    }]
            }
        });
    };
    ChartComponent.prototype.createLabels = function () {
        return this.weights.map(function (weight) { return weight.logged_on.format('M/D/YY'); }).reverse();
    };
    ChartComponent.prototype.createWeightLogs = function () {
        return this.weights.map(function (weight) { return weight.weight; }).reverse();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ChartComponent.prototype, "weights", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChartComponent.prototype, "canvas", void 0);
    ChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__(/*! ./chart.component.html */ "./src/app/components/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.scss */ "./src/app/components/chart/chart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/components/chart/chart.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/chart/chart.module.ts ***!
  \**************************************************/
/*! exports provided: ChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartModule", function() { return ChartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart.component */ "./src/app/components/chart/chart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChartModule = /** @class */ (function () {
    function ChartModule() {
    }
    ChartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_chart_component__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"]],
            exports: [_chart_component__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"]]
        })
    ], ChartModule);
    return ChartModule;
}());



/***/ }),

/***/ "./src/app/pipes/safe-url/safe-url.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pipes/safe-url/safe-url.module.ts ***!
  \***************************************************/
/*! exports provided: SafeUrlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeUrlModule", function() { return SafeUrlModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _safe_url_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./safe-url.pipe */ "./src/app/pipes/safe-url/safe-url.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SafeUrlModule = /** @class */ (function () {
    function SafeUrlModule() {
    }
    SafeUrlModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            declarations: [_safe_url_pipe__WEBPACK_IMPORTED_MODULE_2__["SafeUrlPipe"]],
            exports: [_safe_url_pipe__WEBPACK_IMPORTED_MODULE_2__["SafeUrlPipe"]]
        })
    ], SafeUrlModule);
    return SafeUrlModule;
}());



/***/ }),

/***/ "./src/app/pipes/safe-url/safe-url.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pipes/safe-url/safe-url.pipe.ts ***!
  \*************************************************/
/*! exports provided: SafeUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeUrlPipe", function() { return SafeUrlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeUrlPipe = /** @class */ (function () {
    function SafeUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeUrlPipe.prototype.transform = function (url, args) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafeUrlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safeUrl',
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeUrlPipe);
    return SafeUrlPipe;
}());



/***/ }),

/***/ "./src/app/services/in-app-purchase/in-app-purchase.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/in-app-purchase/in-app-purchase.service.ts ***!
  \*********************************************************************/
/*! exports provided: APPLE_MONTHLY_PRODUCT, APPLE_QUARTERLY_PRODUCT, APPLE_YEARLY_PRODUCT, GOOGLE_MONTHLY_PRODUCT, GOOGLE_QUARTERLY_PRODUCT, GOOGLE_YEARLY_PRODUCT, InAppPurchaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPLE_MONTHLY_PRODUCT", function() { return APPLE_MONTHLY_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPLE_QUARTERLY_PRODUCT", function() { return APPLE_QUARTERLY_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPLE_YEARLY_PRODUCT", function() { return APPLE_YEARLY_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLE_MONTHLY_PRODUCT", function() { return GOOGLE_MONTHLY_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLE_QUARTERLY_PRODUCT", function() { return GOOGLE_QUARTERLY_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLE_YEARLY_PRODUCT", function() { return GOOGLE_YEARLY_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InAppPurchaseService", function() { return InAppPurchaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.service */ "./src/app/services/base/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-purchase-2/ngx */ "./node_modules/@ionic-native/in-app-purchase-2/ngx/index.js");
/* harmony import */ var _onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../onboarding/onboarding.service */ "./src/app/services/onboarding/onboarding.service.ts");
/* harmony import */ var _rollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../rollbar */ "./src/app/rollbar.ts");
/* harmony import */ var rollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rollbar */ "./node_modules/rollbar/dist/rollbar.umd.min.js");
/* harmony import */ var rollbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rollbar__WEBPACK_IMPORTED_MODULE_7__);
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








// Apparently you cannot "re-use" a product on Google and I did not want to have to through all of the
// fuss of re-creating each of the products to make everything match. Live and learn, I guess. So each
// platform has it's own set of products.
var APPLE_MONTHLY_PRODUCT = 'com.firstphorm.apps.premium_monthly';
var APPLE_QUARTERLY_PRODUCT = 'com.firstphorm.apps.premium_quarterly';
var APPLE_YEARLY_PRODUCT = 'com.firstphorm.apps.premium_yearly';
var GOOGLE_MONTHLY_PRODUCT = 'com.firstphorm.apps.subscription_monthly';
var GOOGLE_QUARTERLY_PRODUCT = 'com.firstphorm.apps.subscription_quarterly';
var GOOGLE_YEARLY_PRODUCT = 'com.firstphorm.apps.subscription_yearly';
var InAppPurchaseService = /** @class */ (function (_super) {
    __extends(InAppPurchaseService, _super);
    function InAppPurchaseService(http, platform, store, onboardService, rollbar) {
        var _this = _super.call(this, http, platform) || this;
        _this.http = http;
        _this.platform = platform;
        _this.store = store;
        _this.onboardService = onboardService;
        _this.rollbar = rollbar;
        _this.subscriptionUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.products = [];
        _this.approvedState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.verifiedState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.ownedState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        InAppPurchaseService_1.SET_PLATFORM(platform);
        return _this;
    }
    InAppPurchaseService_1 = InAppPurchaseService;
    InAppPurchaseService.prototype.setDebugLevel = function (debugLevel) {
        this.store.verbosity = this.store[debugLevel];
    };
    InAppPurchaseService.prototype.registerProducts = function (products, type) {
        var _this = this;
        this.products = products;
        var iapProducts = products.map(function (product) {
            return { id: product, type: _this.store.PAID_SUBSCRIPTION };
        });
        this.store.register(iapProducts);
        this.listenSubscriptionChange();
        this.store.ready(function () {
            var updatedProducts = _this.store.products.map(function (product) {
                // Additional data
                product.additionalData = {
                    transphormer_id: _this.transphormer().id
                };
                return product;
            });
            _this.ready.emit(updatedProducts);
        });
        this.setupValidationHandling(type);
        this.handlePaymentCompletion();
        this.store.refresh();
    };
    InAppPurchaseService.prototype.listenSubscriptionChange = function () {
        var _this = this;
        this.store.when('subscription').updated(function () {
            for (var _i = 0, _a = _this.products; _i < _a.length; _i++) {
                var product = _a[_i];
                _this.subscriptionUpdated.emit(_this.store.get(product));
            }
        });
    };
    InAppPurchaseService.prototype.subscriptionUpdate = function () {
        return this.subscriptionUpdated.asObservable();
    };
    InAppPurchaseService.prototype.storeReady = function () {
        return this.ready.asObservable();
    };
    InAppPurchaseService.prototype.purchase = function (subscription) {
        return this.store.order(subscription);
    };
    InAppPurchaseService.prototype.handlePaymentCompletion = function () {
        var _this = this;
        var eventStream = this.store.when('subscription');
        eventStream.approved(function (iapProduct) {
            _this.approvedState.emit(iapProduct);
            return iapProduct.verify();
        });
        eventStream.verified(function (iapProduct) {
            _this.verifiedState.emit(iapProduct);
            return iapProduct.finish();
        });
        eventStream.owned(function (iapProduct) {
            _this.ownedState.emit(iapProduct);
        });
    };
    InAppPurchaseService.prototype.platformProducts = function () {
        if (this.platform.is('android')) {
            return {
                monthly: GOOGLE_MONTHLY_PRODUCT,
                quarterly: GOOGLE_QUARTERLY_PRODUCT,
                yearly: GOOGLE_YEARLY_PRODUCT,
            };
        }
        else if (this.platform.is('ios')) {
            return {
                monthly: APPLE_MONTHLY_PRODUCT,
                quarterly: APPLE_QUARTERLY_PRODUCT,
                yearly: APPLE_YEARLY_PRODUCT,
            };
        }
    };
    InAppPurchaseService.prototype.platformProductsArray = function () {
        return Object.values(this.platformProducts());
    };
    InAppPurchaseService.prototype.transphormer = function () {
        return JSON.parse(window.localStorage.getItem('transphormer'));
    };
    InAppPurchaseService.prototype.setupValidationHandling = function (type) {
        var _this = this;
        this.store.validator = function (product, callback) {
            _this.http.post(InAppPurchaseService_1.Url("subscription/validate/" + type), product)
                .subscribe(function () {
                _this.onboardService.fetchOnBoard();
                callback(true, product.transaction);
            }, function (error) {
                callback(false, 'Something went wrong.');
                _this.rollbar.error(_this.rollbar.error(error));
            });
        };
    };
    var InAppPurchaseService_1;
    InAppPurchaseService = InAppPurchaseService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_rollbar__WEBPACK_IMPORTED_MODULE_6__["RollbarService"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppPurchase2"],
            _onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_5__["OnboardingService"],
            rollbar__WEBPACK_IMPORTED_MODULE_7__])
    ], InAppPurchaseService);
    return InAppPurchaseService;
}(_base_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/services/trainer-transphormer-link/trainer-transphormer-link.service.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/services/trainer-transphormer-link/trainer-transphormer-link.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: TrainerTransphormerLinkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerTransphormerLinkService", function() { return TrainerTransphormerLinkService; });
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




var TrainerTransphormerLinkService = /** @class */ (function (_super) {
    __extends(TrainerTransphormerLinkService, _super);
    function TrainerTransphormerLinkService(http, platform) {
        var _this = _super.call(this, http, platform) || this;
        _this.http = http;
        _this.platform = platform;
        TrainerTransphormerLinkService_1.SET_PLATFORM(platform);
        return _this;
    }
    TrainerTransphormerLinkService_1 = TrainerTransphormerLinkService;
    TrainerTransphormerLinkService.prototype.requestStatus = function () {
        var options = TrainerTransphormerLinkService_1.BaseOptions();
        options.params = {
            wants_link: true
        };
        return this.http.get(TrainerTransphormerLinkService_1.Url('trainer-transphormer'), options)
            .toPromise()
            .catch(TrainerTransphormerLinkService_1.HandleError);
    };
    TrainerTransphormerLinkService.prototype.applyLinkingByTransphormer = function (trainer, transphormer) {
        return this.http.post(TrainerTransphormerLinkService_1.Url('trainer-transphormer'), { trainer: trainer, transphormer: transphormer }, TrainerTransphormerLinkService_1.BaseOptions())
            .toPromise()
            .catch(TrainerTransphormerLinkService_1.HandleError);
    };
    TrainerTransphormerLinkService.prototype.destroyLink = function (id) {
        return this.http.delete(TrainerTransphormerLinkService_1.Url("trainer-transphormer/" + id), TrainerTransphormerLinkService_1.BaseOptions())
            .toPromise()
            .catch(TrainerTransphormerLinkService_1.HandleError);
    };
    TrainerTransphormerLinkService.prototype.trainerApplications = function () {
        return this.http.get(TrainerTransphormerLinkService_1.Url('trainer-transphormer'), TrainerTransphormerLinkService_1.BaseOptions())
            .toPromise()
            .catch(TrainerTransphormerLinkService_1.HandleError);
    };
    TrainerTransphormerLinkService.prototype.acceptStatus = function (id) {
        return this.http.post(TrainerTransphormerLinkService_1.Url("trainer-transphormer/" + id + "/accept"), {}, TrainerTransphormerLinkService_1.BaseOptions())
            .toPromise()
            .catch(TrainerTransphormerLinkService_1.HandleError);
    };
    TrainerTransphormerLinkService.prototype.batchAcceptStatus = function (ids) {
        return this.http.post(TrainerTransphormerLinkService_1.Url('trainer-transphormer/bulk/accept'), { ids: ids }, TrainerTransphormerLinkService_1.BaseOptions())
            .toPromise()
            .catch(TrainerTransphormerLinkService_1.HandleError);
    };
    TrainerTransphormerLinkService.prototype.batchDeleteStatus = function (ids) {
        return this.http.post(TrainerTransphormerLinkService_1.Url('trainer-transphormer/bulk'), {
            ids: ids,
            _method: 'delete'
        }, TrainerTransphormerLinkService_1.BaseOptions())
            .toPromise()
            .catch(TrainerTransphormerLinkService_1.HandleError);
    };
    var TrainerTransphormerLinkService_1;
    TrainerTransphormerLinkService = TrainerTransphormerLinkService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], TrainerTransphormerLinkService);
    return TrainerTransphormerLinkService;
}(_base_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/services/trainer/trainer.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/trainer/trainer.service.ts ***!
  \*****************************************************/
/*! exports provided: TrainerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerService", function() { return TrainerService; });
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




var TrainerService = /** @class */ (function (_super) {
    __extends(TrainerService, _super);
    function TrainerService(http, platform) {
        var _this = _super.call(this, http, platform) || this;
        _this.http = http;
        _this.platform = platform;
        TrainerService_1.SET_PLATFORM(platform);
        return _this;
    }
    TrainerService_1 = TrainerService;
    TrainerService.prototype.updateTrainer = function (trainerId, data) {
        return this.http
            .put(TrainerService_1.Url("trainer/" + trainerId), data, TrainerService_1.BaseOptions(true))
            .toPromise()
            .catch(TrainerService_1.HandleError);
    };
    TrainerService.prototype.listTrainers = function (name) {
        var options = TrainerService_1.BaseOptions();
        options.params = { exact_match: encodeURIComponent(name) };
        return this.http.get(TrainerService_1.Url('trainer'), options)
            .toPromise()
            .catch(TrainerService_1.HandleError);
    };
    TrainerService.prototype.showTrainer = function (id) {
        return this.http.get(TrainerService_1.Url("trainer/" + id), TrainerService_1.BaseOptions())
            .toPromise()
            .catch(TrainerService_1.HandleError);
    };
    TrainerService.prototype.getTrainerByTransphormerId = function (id) {
        return this.http.get(TrainerService_1.Url("trainer-for-transphormer/" + id), TrainerService_1.BaseOptions())
            .toPromise()
            .catch(TrainerService_1.HandleError);
    };
    var TrainerService_1;
    TrainerService = TrainerService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], TrainerService);
    return TrainerService;
}(_base_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ })

}]);
//# sourceMappingURL=common.js.map