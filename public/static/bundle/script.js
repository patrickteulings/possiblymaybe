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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hero": function() { return /* binding */ Hero; }
/* harmony export */ });
/* harmony import */ var _utilities_ImageLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/ImageLoader */ "./src/scripts/utilities/ImageLoader.ts");

class Hero {
    constructor(_elem) {
        console.log(_elem);
        this.elem = _elem;
        this.data = _elem.dataset;
        this.config = JSON.parse(this.data.config);
        this.imagePath = this.config.imagePath;
        this.loadBar = document.querySelector('.js-hero-loader__progress');
        this.loadContainer = document.querySelector('.js-hero-loader');
        this.imageContainer = document.querySelector('.js-hero-loader__image-wrapper');
        this.image = this.elem.querySelector('.js-hero-loader__image');
        this.loadImage();
    }
    handleProgress(e) {
        const { received, length, loading } = e.detail;
        const { scope } = e;
        console.log('dd');
        scope.setProgressbarValue(e.detail);
    }
    handleLoaded(e) {
        const { scope } = e;
        scope.setProgressbarValue(e.detail);
        scope.hideLoader(e);
    }
    hideLoader(e) {
        setTimeout(() => {
            this.loadContainer.classList.add('is-loaded');
        }, 500);
        setTimeout(() => {
            this.imageContainer.classList.add('is-loaded');
        }, 1000);
    }
    setProgressbarValue(payload) {
        const { received, length, loading } = payload;
        const progress = ((received / length) * 100).toFixed(2);
        this.loadBar.style.width = `${progress}%`;
    }
    async loadImage() {
        const { loadImage } = new _utilities_ImageLoader__WEBPACK_IMPORTED_MODULE_0__["default"](this.imagePath, this.handleProgress, this.handleLoaded, this);
        const theBlob = await loadImage(this.imagePath);
        const elem = document.querySelector('.the_image');
        this.image.src = theBlob;
    }
}



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
const HomepageHero = (_elem) => {
    const containerEl = document.querySelector('.animated-text--container');
    const textElements = containerEl.getElementsByTagName('span');
    let animInterval;
    let count = 0;
    if (!containerEl)
        return;
    // const config = JSON.parse(this.elem.dataset.config);
    // const imagePath = this.config.imagePath
    // const loadBar = document.querySelector('.hero--portfolio-item-loader__progress')
    // const loadContainer = document.querySelector('.hero--portfolio-item-loader')
    // const imageContainer = document.querySelector('.hero--portfolio-item__image')
    // const image = this.elem.querySelector('.the_image'
    const setActiveItem = (index) => {
        containerEl.style.transform = `translateY(${index * 100}px)`;
        for (const item of textElements) {
            item.classList.remove('active');
        }
        textElements[index].classList.add('active');
        count = (count > 2) ? 0 : count + 1;
    };
    const initialize = () => {
        console.log('hii there', containerEl);
        animInterval = setInterval(() => {
            setActiveItem(count);
        }, 2000);
    };
    return {
        initialize
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
function ImageLoader(rootUrl, _progressCallback, _finishedCallback, _scope) {
    let results = null;
    let error = null;
    let loading = true;
    const chunks = [];
    const scope = _scope;
    const progressCallBack = _progressCallback;
    const finishedCallback = _finishedCallback;
    // let controller = null; // We will get to this variable in a secondd
    const loadImage = async (path, options) => {
        try {
            const response = await fetch(path, { ...options });
            if (response.status >= 200 && response.status < 300) {
                results = await readBodyResponse(response);
                const bb = new Blob([new Uint8Array(results)]);
                const objectURL = URL.createObjectURL(bb);
                console.log(objectURL);
                return objectURL;
            }
            else {
                throw new Error('error');
            }
        }
        catch (err) {
            error = err;
            results = null;
            return error;
        }
        finally {
            loading = false;
        }
    };
    const readBodyResponse = async (response) => {
        const reader = response.body.getReader();
        const length = +response.headers.get('content-length');
        // Declare received as 0 initially
        let received = 0;
        // Loop through the response stream and extract data chunks
        while (loading) {
            const { done, value } = await reader.read();
            const payload = { detail: { received, length, loading, rootUrl }, scope };
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
        }
        // Concat the chinks into a single array
        const body = new Uint8Array(received);
        let position = 0;
        // Order the chunks by their respective position
        for (const chunk of chunks) {
            body.set(chunk, position);
            position += chunk.length;
        }
        // Decode the response and return it
        return body;
    };
    return { loadImage };
}


/***/ }),

/***/ "./src/scripts/utilities/InstaExtention.ts":
/*!*************************************************!*\
  !*** ./src/scripts/utilities/InstaExtention.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstaFeedExtended": function() { return /* binding */ InstaFeedExtended; }
/* harmony export */ });
/**
 * Extending the SBI Instagram feed plugin
 */
class InstaFeedExtended {
    constructor(_elem) {
        this.feedEl = _elem;
        this.imageContainers = this.feedEl.querySelectorAll('.sbi_item');
        this.initialize();
    }
    initialize() {
        if (!this.imageContainers.length)
            return;
        for (const el of this.imageContainers) {
            const img = el.getElementsByTagName('img')[0];
            const alt = img.getAttribute('alt');
            const captionElement = document.createElement('div');
            captionElement.className = 'sbi_caption';
            captionElement.innerHTML = (alt) ? alt : '';
            el.appendChild(captionElement);
        }
    }
}



/***/ }),

/***/ "./src/scripts/utilities/Intersection.ts":
/*!***********************************************!*\
  !*** ./src/scripts/utilities/Intersection.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntersectTest": function() { return /* binding */ IntersectTest; }
/* harmony export */ });
class IntersectTest {
    // Constructor always gets called, pass initial params here
    constructor() {
        this.initialize();
    }
    initialize() {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // const ratio = entry.intersectionRatio
                // entry.target.dataset.test = ratioo
                // console.log(ratio)
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-intersected');
                }
                else {
                    // entry.target.classList.remove('is-intersected')
                }
            });
        }, { rootMargin: '-20px 0px 50px 0px' });
        const el = document.querySelectorAll('.portfolio-item__image');
        el.forEach((item) => {
            observer.observe(item);
        });
        const navObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                const tt = entry;
                if (entry.isIntersecting) {
                    setTimeout(() => {
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
        const navEl = document.querySelector('.hero');
        if (!navEl.classList.contains('hero--about')) {
            navObserver.observe(navEl);
        }
        /**
         * WORK OVERVIEW PAGE
         */
        const workObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
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
        const workEl = document.querySelectorAll('.work-card--wrapper');
        workEl.forEach((item) => {
            console.log('item', item);
            workObserver.observe(item);
        });
        console.log(workObserver);
        /**
         * ABOUT PAGE
         */
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
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
        const aboutEl = document.querySelectorAll('.card--about');
        aboutEl.forEach((item) => {
            aboutObserver.observe(item);
        });
        // console.log(workObserver)
    }
}



/***/ }),

/***/ "./src/scripts/utilities/Italic.ts":
/*!*****************************************!*\
  !*** ./src/scripts/utilities/Italic.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Italic": function() { return /* binding */ Italic; }
/* harmony export */ });
class Italic {
    constructor(_elem) {
        this.elem = _elem;
        this.italicElements = this.elem.getElementsByTagName('span');
        this.setItalic();
    }
    setItalic() {
        for (const item of this.italicElements) {
            item.style.fontStyle = 'italic';
        }
    }
}



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
const NavigationToggle = ((_elem) => {
    // Constructor always gets called, pass initial params here
    let elem = _elem;
    //let test = (_elem.dataset instanceof HTMLElement) ? (JSON.parse(_elem.dataset)) ? _elem.dataset.config : {config: {}} : {config: {}}
    let test = _elem.dataset;
    let nogiets = (test.config) ? test.config : '';
    let config = JSON.parse(nogiets);
    let trigger;
    let target;
    let activeClass = (config.activeClass) ? config.activeClass : '';
    let isOpen = false;
    const initialize = () => {
        isOpen = (config.initialState.length >= 0 && config.initialState !== 'open');
        trigger = (elem.querySelector(config.triggerName)) ?? elem;
        target = (elem.querySelector(config.targetName)) ?? elem;
        addEvents();
    };
    const addEvents = () => {
        // const image = document.querySelector('.hero--portfolio-item__image')
        trigger.onclick = (e) => toggleElement(e);
        window.addEventListener('keydown', (e) => {
            if (e.key.toLowerCase() === 'escape') {
                closeElement();
            }
        });
        // image.addEventListener('mouseover', () => {
        //   this.handleHover();
        // })
        // image.addEventListener('mouseleave', () => {
        //   this.handleLeave();
        // })
    };
    const toggleElement = (e) => {
        if (isOpen) {
            closeElement();
        }
        else {
            openElement();
        }
    };
    const openElement = () => {
        trigger.classList.add('is-open');
        target.classList.add('is-open');
        trigger.ariaExpanded = 'true';
        isOpen = true;
    };
    const closeElement = () => {
        trigger.classList.remove('is-open');
        target.classList.remove('is-open');
        trigger.ariaExpanded = 'false';
        isOpen = false;
    };
    initialize();
});



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







const navigationToggles = document.querySelectorAll('[data-module="NavigationToggle"]');
for (let navigationToggle of navigationToggles) {
    let item = (0,_utilities_NavigationToggle__WEBPACK_IMPORTED_MODULE_1__.NavigationToggle)(navigationToggle);
}
/**
 * EXTENDS THE instafeed plugin to add Captions
 */
const instaFeed = document.getElementById('sb_instagram');
if (instaFeed) {
    const instaFeedExtended = new _utilities_InstaExtention__WEBPACK_IMPORTED_MODULE_3__.InstaFeedExtended(instaFeed);
    console.log(instaFeedExtended);
}
const el = new _utilities_Intersection__WEBPACK_IMPORTED_MODULE_2__.IntersectTest();
/**
 * PORTFOLIO ITEM HERO
 *
 */
const portfolioHero = (document.querySelector('[data-module="hero"]')) ? new _components_Hero__WEBPACK_IMPORTED_MODULE_4__.Hero(document.querySelector('[data-module="hero"]')) : '';
console.log(document.querySelector('[data-module="hero"]'));
/**
 * Italic words in headerss
 */
const italicHeaders = document.querySelectorAll('[data-module="italic"]');
for (let item of italicHeaders) {
    let italicItem = new _utilities_Italic__WEBPACK_IMPORTED_MODULE_6__.Italic(item);
}
/**
 * HOMEPAGE ANIMATED TEXTT
 */
const homepageHero = document.querySelector('.js-homepage-hero');
if (homepageHero) {
    const heroAnimation = new _components_HomepageHero__WEBPACK_IMPORTED_MODULE_5__.HomepageHero(homepageHero);
    heroAnimation.initialize();
}

}();
/******/ })()
;
//# sourceMappingURL=script.js.map