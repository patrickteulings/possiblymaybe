/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/components/Hero.ts":
/*!****************************************!*\
  !*** ./src/scripts/components/Hero.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_ImageLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/ImageLoader */ "./src/scripts/utilities/ImageLoader.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

var Hero = /** @class */ (function () {
    function Hero(_elem) {
        console.log(_elem);
        this.elem = _elem;
        this.config = JSON.parse(this.elem.dataset.config);
        this.imagePath = this.config.imagePath;
        this.loadBar = document.querySelector('.js-hero-loader__progress');
        this.loadContainer = document.querySelector('.js-hero-loader');
        this.imageContainer = document.querySelector('.js-hero-loader__image-wrapper');
        this.image = this.elem.querySelector('.js-hero-loader__image');
        this.loadImage();
    }
    Hero.prototype.handleProgress = function (e) {
        var _a = e.detail, received = _a.received, length = _a.length, loading = _a.loading;
        var scope = e.scope;
        console.log('dd');
        scope.setProgressbarValue(e.detail);
    };
    Hero.prototype.handleLoaded = function (e) {
        var scope = e.scope;
        scope.setProgressbarValue(e.detail);
        scope.hideLoader(e);
    };
    Hero.prototype.hideLoader = function (e) {
        var _this = this;
        setTimeout(function () {
            _this.loadContainer.classList.add('is-loaded');
        }, 500);
        setTimeout(function () {
            _this.imageContainer.classList.add('is-loaded');
        }, 1000);
    };
    Hero.prototype.setProgressbarValue = function (payload) {
        var received = payload.received, length = payload.length, loading = payload.loading;
        var progress = ((received / length) * 100).toFixed(2);
        this.loadBar.style.width = "".concat(progress, "%");
    };
    Hero.prototype.loadImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadImage, theBlob, elem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loadImage = new _utilities_ImageLoader__WEBPACK_IMPORTED_MODULE_0__["default"](this.imagePath, this.handleProgress, this.handleLoaded, this).loadImage;
                        return [4 /*yield*/, loadImage(this.imagePath)];
                    case 1:
                        theBlob = _a.sent();
                        elem = document.querySelector('.the_image');
                        this.image.src = theBlob;
                        return [2 /*return*/];
                }
            });
        });
    };
    return Hero;
}());
/* harmony default export */ __webpack_exports__["default"] = (Hero);


/***/ }),

/***/ "./src/scripts/components/HomepageHero.ts":
/*!************************************************!*\
  !*** ./src/scripts/components/HomepageHero.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepageHero": function() { return /* binding */ HomepageHero; }
/* harmony export */ });
var HomepageHero = function (_elem) {
    console.log(_elem);
    var containerEl = document.querySelector('.animated-text--container');
    var textElements = containerEl.getElementsByTagName('span');
    var animInterval = 0;
    var count = 0;
    // const config = JSON.parse(this.elem.dataset.config)
    // const imagePath = this.config.imagePath
    // const loadBar = document.querySelector('.hero--portfolio-item-loader__progress')
    // const loadContainer = document.querySelector('.hero--portfolio-item-loader')
    // const imageContainer = document.querySelector('.hero--portfolio-item__image')
    // const image = this.elem.querySelector('.the_image')
    var setActiveItem = function (index) {
        console.log(index);
        containerEl.style.transform = "translateY(".concat(index * 100, "px)");
        console.log(textElements, textElements[index]);
        for (var _i = 0, textElements_1 = textElements; _i < textElements_1.length; _i++) {
            var item = textElements_1[_i];
            item.classList.remove('active');
        }
        textElements[index].classList.add('active');
        count = (count > 2) ? 0 : count + 1;
    };
    var initialize = function () {
        console.log('hi there', containerEl);
        animInterval = setInterval(function () {
            setActiveItem(count);
        }, 2000);
    };
    return {
        initialize: initialize
    };
};



/***/ }),

/***/ "./src/scripts/utilities/ImageLoader.ts":
/*!**********************************************!*\
  !*** ./src/scripts/utilities/ImageLoader.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ImageLoader; }
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
function ImageLoader(rootUrl, _progressCallback, _finishedCallback, _scope) {
    var _this = this;
    var results = null;
    var error = null;
    var loading = true;
    var chunks = [];
    var scope = _scope;
    var progressCallBack = _progressCallback;
    var finishedCallback = _finishedCallback;
    // let controller = null; // We will get to this variable in a second
    var loadImage = function (path, options) { return __awaiter(_this, void 0, void 0, function () {
        var response, bb, objectURL, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, 6, 7]);
                    return [4 /*yield*/, fetch(path, __assign({}, options))];
                case 1:
                    response = _a.sent();
                    if (!(response.status >= 200 && response.status < 300)) return [3 /*break*/, 3];
                    return [4 /*yield*/, readBodyResponse(response)];
                case 2:
                    results = _a.sent();
                    bb = new Blob([new Uint8Array(results)]);
                    objectURL = URL.createObjectURL(bb);
                    console.log(objectURL);
                    return [2 /*return*/, objectURL];
                case 3: throw new Error('error', response.statusText);
                case 4: return [3 /*break*/, 7];
                case 5:
                    err_1 = _a.sent();
                    error = err_1;
                    results = null;
                    return [2 /*return*/, error];
                case 6:
                    loading = false;
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    var readBodyResponse = function (response) { return __awaiter(_this, void 0, void 0, function () {
        var reader, length, received, _a, done, value, payload, body, position, _i, chunks_1, chunk;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    reader = response.body.getReader();
                    length = +response.headers.get('content-length');
                    received = 0;
                    _b.label = 1;
                case 1:
                    if (!loading) return [3 /*break*/, 3];
                    return [4 /*yield*/, reader.read()];
                case 2:
                    _a = _b.sent(), done = _a.done, value = _a.value;
                    payload = { detail: { received: received, length: length, loading: loading, rootUrl: rootUrl }, scope: scope };
                    if (done) {
                        // Finish loading
                        loading = false;
                        // Fired when reading the response body finishes
                        finishedCallback(payload);
                    }
                    else {
                        // Push values to the chunk array
                        chunks.push(value);
                        received += value.length;
                        // Fired on each .read() - progress tick
                        progressCallBack(payload, scope);
                    }
                    return [3 /*break*/, 1];
                case 3:
                    body = new Uint8Array(received);
                    position = 0;
                    // Order the chunks by their respective position
                    for (_i = 0, chunks_1 = chunks; _i < chunks_1.length; _i++) {
                        chunk = chunks_1[_i];
                        body.set(chunk, position);
                        position += chunk.length;
                    }
                    // Decode the response and return it
                    return [2 /*return*/, body];
            }
        });
    }); };
    return { loadImage: loadImage };
}


/***/ }),

/***/ "./src/scripts/utilities/InstaExtention.ts":
/*!*************************************************!*\
  !*** ./src/scripts/utilities/InstaExtention.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/**
 * Extending the SBI Instagram feed plugin
 */
var InstaFeedExtended = /** @class */ (function () {
    function InstaFeedExtended(_elem) {
        this.feedEl = _elem;
        this.imageContainers = this.feedEl.querySelectorAll('.sbi_item');
        this.initialize();
    }
    InstaFeedExtended.prototype.initialize = function () {
        if (!this.imageContainers.length)
            return;
        for (var _i = 0, _a = this.imageContainers; _i < _a.length; _i++) {
            var el = _a[_i];
            var img = el.getElementsByTagName('img')[0];
            var alt = img.getAttribute('alt');
            var captionElement = document.createElement('div');
            captionElement.className = 'sbi_caption';
            captionElement.innerHTML = alt;
            el.appendChild(captionElement);
            console.log(alt, alt);
        }
    };
    return InstaFeedExtended;
}());
/* harmony default export */ __webpack_exports__["default"] = (InstaFeedExtended);


/***/ }),

/***/ "./src/scripts/utilities/Intersection.ts":
/*!***********************************************!*\
  !*** ./src/scripts/utilities/Intersection.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var IntersectTest = /** @class */ (function () {
    // Constructor always gets called, pass initial params here
    function IntersectTest(_elem) {
        this.elem = _elem || '';
        this.initialize();
    }
    IntersectTest.prototype.initialize = function () {
        var observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                // const ratio = entry.intersectionRatio
                // entry.target.dataset.test = ratio
                // console.log(ratio)
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-intersected');
                }
                else {
                    // entry.target.classList.remove('is-intersected')
                }
            });
        }, { rootMargin: '-20px 0px 50px 0px' });
        var el = document.querySelectorAll('.portfolio-item__image');
        el.forEach(function (item) {
            observer.observe(item);
        });
        var navObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                var ratio = entry.intersectionRatio;
                entry.target.dataset.test = ratio;
                if (entry.isIntersecting) {
                    setTimeout(function () {
                        entry.target.classList.add('make-visible');
                    }, 1000);
                    // entry.target.src = entry.target.dataset.src
                    // observer.unobserve(entry.target)
                }
                else {
                    // entry.target.classList.remove('make-visible')
                }
            });
        }, { rootMargin: '0px 0px 50px 0px' });
        var navEl = document.querySelector('.hero');
        if (!navEl.classList.contains('hero--about')) {
            navObserver.observe(navEl);
        }
        /**
         * WORK OVERVIEW PAGE
         */
        var workObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var ratio = entry.intersectionRatio;
                entry.target.dataset.test = ratio;
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    // entry.target.src = entry.target.dataset.src
                    // observer.unobserve(entry.target)
                }
                else {
                    entry.target.classList.remove('in-view');
                }
            });
        }, { rootMargin: '0% 0px 0% 0px' });
        var workEl = document.querySelectorAll('.work-card--wrapper');
        workEl.forEach(function (item) {
            console.log('item', item);
            workObserver.observe(item);
        });
        console.log(workObserver);
        /**
         * ABOUT PAGE
         */
        var aboutObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var ratio = entry.intersectionRatio;
                entry.target.dataset.test = ratio;
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    // entry.target.src = entry.target.dataset.src
                    // observer.unobserve(entry.target)
                }
                else {
                    entry.target.classList.remove('in-view');
                }
            });
        }, { rootMargin: '0% 0px 0% 0px' });
        var aboutEl = document.querySelectorAll('.card--about');
        aboutEl.forEach(function (item) {
            aboutObserver.observe(item);
        });
        // console.log(workObserver)
    };
    return IntersectTest;
}());
/* harmony default export */ __webpack_exports__["default"] = (IntersectTest);


/***/ }),

/***/ "./src/scripts/utilities/Italic.ts":
/*!*****************************************!*\
  !*** ./src/scripts/utilities/Italic.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var Italic = /** @class */ (function () {
    function Italic(_elem) {
        this.elem = _elem;
        this.italicElements = this.elem.getElementsByTagName('span');
        this.setItalic();
    }
    Italic.prototype.setItalic = function () {
        for (var _i = 0, _a = this.italicElements; _i < _a.length; _i++) {
            var item = _a[_i];
            item.style.fontStyle = 'italic';
        }
    };
    return Italic;
}());
/* harmony default export */ __webpack_exports__["default"] = (Italic);


/***/ }),

/***/ "./src/scripts/utilities/NavigationToggle.ts":
/*!***************************************************!*\
  !*** ./src/scripts/utilities/NavigationToggle.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationToggle": function() { return /* binding */ NavigationToggle; }
/* harmony export */ });
var _this = undefined;
{
    dataset: DOMStringMap;
}
config: any,
    trigger;
HTMLElement | '',
    target;
HTMLElement | '',
    activeClass;
HTMLElement | '',
    isOpen;
Boolean,
    test;
any;
{
    iets: String;
}
;
myNumber: number;
var NavigationToggle = function (_elem) {
    // Constructor always gets called, pass initial params here
    var elem = _elem;
    var test = (_elem.dataset instanceof HTMLElement);
    var config = JSON.parse(test.config);
    var trigger = '';
    var target = '';
    var activeClass = (config.activeClass) ? config.activeClass : '';
    var isOpen = false;
    var initialize = function () {
        isOpen = (_this.config.initialState && !_this.config.initialState === 'open');
        trigger = _this.elem.querySelector(_this.config.trigger);
        _this.target = _this.elem.querySelector(_this.config.target);
        _this.addEvents();
    };
    var addEvents = function () {
        // const image = document.querySelector('.hero--portfolio-item__image')
        _this.trigger.onclick = function (e) { return _this.toggleElement(e); };
        window.addEventListener('keydown', function (e) {
            if (e.key.toLowerCase() === 'escape') {
                _this.closeElement();
            }
        });
        // image.addEventListener('mouseover', () => {
        //   this.handleHover()
        // })
        // image.addEventListener('mouseleave', () => {
        //   this.handleLeave()
        // })
    };
    toggleElement();
    {
        if (_this.isOpen) {
            _this.closeElement();
        }
        else {
            _this.openElement();
        }
    }
    openElement();
    {
        _this.trigger.classList.add('is-open');
        _this.target.classList.add('is-open');
        _this.trigger.ariaExpanded = true;
        _this.isOpen = true;
    }
    closeElement();
    {
        _this.trigger.classList.remove('is-open');
        _this.target.classList.remove('is-open');
        _this.trigger.ariaExpanded = false;
        _this.isOpen = false;
    }
    initialize();
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!****************************!*\
  !*** ./src/scripts/app.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../styles/app.scss */ "./src/styles/app.scss");
/* harmony import */ var _utilities_NavigationToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/NavigationToggle */ "./src/scripts/utilities/NavigationToggle.ts");
/* harmony import */ var _utilities_Intersection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/Intersection */ "./src/scripts/utilities/Intersection.ts");
/* harmony import */ var _utilities_InstaExtention__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities/InstaExtention */ "./src/scripts/utilities/InstaExtention.ts");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Hero */ "./src/scripts/components/Hero.ts");
/* harmony import */ var _components_HomepageHero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/HomepageHero */ "./src/scripts/components/HomepageHero.ts");
/* harmony import */ var _utilities_Italic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilities/Italic */ "./src/scripts/utilities/Italic.ts");







var navigationToggles = document.querySelectorAll('[data-module="NavigationToggle"]');
for (var _i = 0, navigationToggles_1 = navigationToggles; _i < navigationToggles_1.length; _i++) {
    var navigationToggle = navigationToggles_1[_i];
    navigationToggle = new _utilities_NavigationToggle__WEBPACK_IMPORTED_MODULE_1__.NavigationToggle(navigationToggle);
}
/**
 * EXTENDS THE instafeed plugin to add Captions
 */
var instaFeed = document.getElementById('sb_instagram');
if (instaFeed) {
    var instaFeedExtended = new _utilities_InstaExtention__WEBPACK_IMPORTED_MODULE_3__["default"](instaFeed);
    console.log(instaFeedExtended);
}
var el = new _utilities_Intersection__WEBPACK_IMPORTED_MODULE_2__["default"]();
/**
 * PORTFOLIO ITEM HERO
 *
 */
var portfolioHero = (document.querySelector('[data-module="hero"]')) ? new _components_Hero__WEBPACK_IMPORTED_MODULE_4__["default"](document.querySelector('[data-module="hero"]')) : '';
console.log(document.querySelector('[data-module="hero"]'));
/**
 * Italic words in headers
 */
var italicHeaders = document.querySelectorAll('[data-module="italic"]');
for (var _a = 0, italicHeaders_1 = italicHeaders; _a < italicHeaders_1.length; _a++) {
    var item = italicHeaders_1[_a];
    item = new _utilities_Italic__WEBPACK_IMPORTED_MODULE_6__["default"](item);
}
/**
 * HOMEPAGE ANIMATED TEXT
 */
var homepageHero = document.querySelector('.js-homepage-hero');
if (homepageHero) {
    var heroAnimation = new _components_HomepageHero__WEBPACK_IMPORTED_MODULE_5__.HomepageHero(homepageHero);
    heroAnimation.initialize();
}

}();
/******/ })()
;
//# sourceMappingURL=script.js.map