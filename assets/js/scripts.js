/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/Accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/Accordion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Accordion = /*#__PURE__*/function () {\n  // 1. describe and create/initiate our object\n  function Accordion(accordionElement) {\n    _classCallCheck(this, Accordion);\n\n    // this.accordion = document.querySelector(`.${accordionClass}`);\n    this.accordion = accordionElement;\n    this.currentTab = null;\n    this.accordionClosed = false;\n    this.accordionActive = false;\n\n    if (this.accordion) {\n      this.accordionBtns = Array.from(this.accordion.querySelectorAll(\".jsAccordionBtn\"));\n      this.accordionContents = Array.from(this.accordion.querySelectorAll(\".jsAccordionContent\"));\n\n      if (this.accordionBtns.length && this.accordionContents.length) {\n        this.events();\n      }\n    }\n  } // 2. events\n\n\n  _createClass(Accordion, [{\n    key: \"events\",\n    value: function events() {\n      window.addEventListener(\"DOMContentLoaded\", this.prepareAccordion.bind(this), {\n        once: true\n      });\n      window.addEventListener(\"resize\", this.maintainContentHeight.bind(this));\n      this.accordion.addEventListener(\"click\", this.handleAccordionClick.bind(this));\n    } // 3. methods (function, action...)\n\n  }, {\n    key: \"prepareAccordion\",\n    value: function prepareAccordion() {\n      this.accordionBtns.map(function (btn, idx) {\n        btn.classList.remove(\"is-hidden\");\n        btn.removeAttribute(\"aria-hidden\");\n        btn.setAttribute(\"aria-expanded\", \"false\");\n      });\n      this.accordionContents.map(function (content, idx) {\n        content.setAttribute(\"aria-hidden\", \"true\");\n        content.style.height = 0;\n      });\n      this.currentTab = null;\n      this.accordionClosed = true;\n      this.accordionActive = true;\n    }\n  }, {\n    key: \"maintainContentHeight\",\n    value: function maintainContentHeight() {\n      if (!this.accordionActive || this.accordionClosed) return;\n      var innerHeight = this.currentTab.firstElementChild.getBoundingClientRect().height;\n      this.currentTab.style.height = innerHeight + \"px\";\n    }\n  }, {\n    key: \"closeAllItems\",\n    value: function closeAllItems() {\n      this.accordionBtns.forEach(function (btn) {\n        return btn.setAttribute(\"aria-expanded\", \"false\");\n      });\n      this.accordionContents.forEach(function (content) {\n        content.setAttribute(\"aria-hidden\", \"true\");\n        content.style.height = 0;\n      });\n      this.accordionClosed = true;\n    }\n  }, {\n    key: \"handleAccordionClick\",\n    value: function handleAccordionClick(e) {\n      var clickedElement = e.target.closest(\".jsAccordionBtn\");\n\n      if (!clickedElement) {\n        return;\n      }\n\n      var itemToOpen = clickedElement.nextElementSibling;\n      var height = itemToOpen.scrollHeight;\n\n      if (itemToOpen.style.height === \"0px\" || itemToOpen.style.height === \"\") {\n        this.closeAllItems();\n        itemToOpen.style.height = height + \"px\";\n        clickedElement.setAttribute(\"aria-expanded\", \"true\");\n        itemToOpen.setAttribute(\"aria-hidden\", \"false\");\n        this.currentTab = itemToOpen;\n        this.accordionClosed = false;\n      } else {\n        this.closeAllItems();\n      }\n    }\n  }]);\n\n  return Accordion;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);\n\n//# sourceURL=webpack://wpautomategulp/./src/js/modules/Accordion.js?");

/***/ }),

/***/ "./src/js/modules/PageScroll.js":
/*!**************************************!*\
  !*** ./src/js/modules/PageScroll.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* eslint-disable no-undef */\n\n\nvar PageScroll = /*#__PURE__*/function () {\n  // 1. describe and create/initiate our object\n  function PageScroll() {\n    _classCallCheck(this, PageScroll);\n\n    this.scrollPage = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"a.jsPageScroll\");\n    this.events();\n  } // 2. events\n\n\n  _createClass(PageScroll, [{\n    key: \"events\",\n    value: function events() {\n      if (this.scrollPage.length > 0) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.scrollPage).click(this.handleScrollPage.bind(this));\n      }\n    } // 3. methods (function, action...)\n\n  }, {\n    key: \"handleScrollPage\",\n    value: function handleScrollPage(e) {\n      e.preventDefault();\n      var searchSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"\".concat(e.target.closest(\".jsPageScroll\").hash));\n      if (!searchSection) return;\n      var searchSectionPosition = jquery__WEBPACK_IMPORTED_MODULE_0___default()(searchSection).offset().top - 105;\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"html, body\").animate({\n        scrollTop: searchSectionPosition\n      }, \"slow\");\n      return false;\n    }\n  }]);\n\n  return PageScroll;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageScroll);\n\n//# sourceURL=webpack://wpautomategulp/./src/js/modules/PageScroll.js?");

/***/ }),

/***/ "./src/js/modules/Tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/Tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Tabs = /*#__PURE__*/function () {\n  // 1. describe and create/initiate our object\n  function Tabs(tabsClass) {\n    _classCallCheck(this, Tabs);\n\n    this.tabs = document.querySelector(\".\".concat(tabsClass));\n\n    if (this.tabs) {\n      this.tabButtons = this.tabs.querySelectorAll('[role=\"tab\"]');\n      this.tabPanels = Array.from(this.tabs.querySelectorAll('[role=\"tabpanel\"]'));\n      this.events();\n    }\n  } // 2. events\n\n\n  _createClass(Tabs, [{\n    key: \"events\",\n    value: function events() {\n      var _this = this;\n\n      this.tabButtons.forEach(function (button) {\n        return button.addEventListener(\"click\", _this.handleTabClick.bind(_this));\n      });\n    } // 3. methods (function, action...)\n\n  }, {\n    key: \"handleTabClick\",\n    value: function handleTabClick(event) {\n      // hide all tab panels\n      this.tabPanels.forEach(function (panel) {\n        panel.hidden = true;\n      }); // mark all tabs as unselected\n\n      this.tabButtons.forEach(function (tab) {\n        // tab.ariaSelected = false;\n        tab.setAttribute(\"aria-selected\", false);\n      }); // mark the clicked tab as selected\n\n      event.currentTarget.setAttribute(\"aria-selected\", true); // find the associated tabPanel and show it!\n\n      var id = event.currentTarget.id; // METHOD 2 - find in the array of tabPanels\n      // console.log(this.tabPanels);\n\n      var tabPanel = this.tabPanels.find(function (panel) {\n        return panel.getAttribute(\"aria-labelledby\") === id;\n      });\n      tabPanel.hidden = false;\n    }\n  }]);\n\n  return Tabs;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);\n\n//# sourceURL=webpack://wpautomategulp/./src/js/modules/Tabs.js?");

/***/ }),

/***/ "./src/js/scripts.js":
/*!***************************!*\
  !*** ./src/js/scripts.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_PageScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/PageScroll */ \"./src/js/modules/PageScroll.js\");\n/* harmony import */ var _modules_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Tabs */ \"./src/js/modules/Tabs.js\");\n/* harmony import */ var _modules_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Accordion */ \"./src/js/modules/Accordion.js\");\n/* eslint-disable no-unused-vars */\n\n/**\n * Import 3rd party packages\n */\n\n/**\n * Import modules / classes\n */\n\n\n // query single DOM element\n\nwindow.$ = document.querySelector.bind(document); // query multiple DOM elements\n\nwindow.$$ = document.querySelectorAll.bind(document); // add event listener - single element / multiple elements array\n\nNode.prototype.on = window.on = function (name, fn) {\n  this.addEventListener(name, fn);\n};\n\nNodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {\n  Array.prototype.slice.call(this).forEach(function (elem, i) {\n    elem.on(name, fn);\n  });\n};\n/**\n * Instantiate a new object using imported modules/classes\n */\n\n\nvar myPageScroll = new _modules_PageScroll__WEBPACK_IMPORTED_MODULE_0__.default();\n\n//# sourceURL=webpack://wpautomategulp/./src/js/scripts.js?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = jQuery;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/scripts.js");
/******/ 	
/******/ })()
;