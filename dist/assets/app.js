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

/***/ "./src/scripts/utilities/NavigationToggle.js":
/*!***************************************************!*\
  !*** ./src/scripts/utilities/NavigationToggle.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NavigationToggle; }
/* harmony export */ });

class NavigationToggle {
  // Constructor always gets called, pass initial params here
  constructor(_elem) {
    this.elem = _elem;
    this.config = JSON.parse(_elem.dataset.config);
    this.trigger = '';
    this.target = '';
    this.activeClass = this.config.activeClass;
    this.isOpen = false;
    this.initialize();
  }

  initialize() {
    this.isOpen = this.config.initialState && !this.config.initialState === 'open';
    this.trigger = this.elem.querySelector(this.config.trigger);
    this.target = this.elem.querySelector(this.config.target);
    this.addEvents();
  }

  addEvents() {
    this.trigger.onclick = e => this.toggleElement(e);
  }

  toggleElement() {
    if (this.isOpen) {
      this.closeElement();
    } else {
      this.openElement();
    }
  }

  openElement() {
    this.trigger.classList.add('is-open');
    this.target.classList.add('is-open');
    this.trigger.ariaExpanded = true;
    this.isOpen = true;
  }

  closeElement() {
    this.trigger.classList.remove('is-open');
    this.target.classList.remove('is-open');
    this.trigger.ariaExpanded = false;
    this.isOpen = false;
  }
}

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
  !*** ./src/scripts/app.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../styles/app.scss */ "./src/styles/app.scss");
/* harmony import */ var _utilities_NavigationToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/NavigationToggle */ "./src/scripts/utilities/NavigationToggle.js");





const navigationToggles = document.querySelectorAll('[data-module="NavigationToggle"]');

for (let navigationToggle of navigationToggles) {
  navigationToggle = new _utilities_NavigationToggle__WEBPACK_IMPORTED_MODULE_1__["default"](navigationToggle);
}
}();
/******/ })()
;
//# sourceMappingURL=app.js.map