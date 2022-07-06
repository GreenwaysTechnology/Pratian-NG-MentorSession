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

/***/ "./build/doctor/doctor.component.js":
/*!******************************************!*\
  !*** ./build/doctor/doctor.component.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DoctorComponent\": () => (/* binding */ DoctorComponent)\n/* harmony export */ });\nclass DoctorComponent {\r\n    constructor(doctorService) {\r\n        this.doctorService = doctorService;\r\n    }\r\n    init() {\r\n        console.log(this.doctorService.findAll());\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://myts-app/./build/doctor/doctor.component.js?");

/***/ }),

/***/ "./build/doctor/doctor.service.js":
/*!****************************************!*\
  !*** ./build/doctor/doctor.service.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DoctorService\": () => (/* binding */ DoctorService)\n/* harmony export */ });\nclass DoctorService {\r\n    constructor() { }\r\n    //biz api\r\n    findAll() {\r\n        return [\"Subramanian\", \"Geetha\", \"Murugan\", \"Karthik\"];\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://myts-app/./build/doctor/doctor.service.js?");

/***/ }),

/***/ "./build/main.js":
/*!***********************!*\
  !*** ./build/main.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/config */ \"./build/util/config.js\");\n/* harmony import */ var _doctor_doctor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctor/doctor.service */ \"./build/doctor/doctor.service.js\");\n/* harmony import */ var _doctor_doctor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doctor/doctor.component */ \"./build/doctor/doctor.component.js\");\n//main file /entry file\r\n\r\n\r\n\r\nfunction main() {\r\n    console.log(`App Name ${_util_config__WEBPACK_IMPORTED_MODULE_0__.appName}`);\r\n    console.log(`App Version ${_util_config__WEBPACK_IMPORTED_MODULE_0__.version}`);\r\n    console.log(`App Status ${_util_config__WEBPACK_IMPORTED_MODULE_0__.status}`);\r\n    console.log(`App Price ${_util_config__WEBPACK_IMPORTED_MODULE_0__.price}`);\r\n    console.log(`Security ${_util_config__WEBPACK_IMPORTED_MODULE_0__.security.userId} ${_util_config__WEBPACK_IMPORTED_MODULE_0__.security.key}`);\r\n    //Depedency Injection\r\n    let cmp = new _doctor_doctor_component__WEBPACK_IMPORTED_MODULE_2__.DoctorComponent(new _doctor_doctor_service__WEBPACK_IMPORTED_MODULE_1__.DoctorService());\r\n    cmp.init();\r\n}\r\nmain();\r\n\n\n//# sourceURL=webpack://myts-app/./build/main.js?");

/***/ }),

/***/ "./build/util/config.js":
/*!******************************!*\
  !*** ./build/util/config.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appName\": () => (/* binding */ appName),\n/* harmony export */   \"price\": () => (/* binding */ price),\n/* harmony export */   \"security\": () => (/* binding */ security),\n/* harmony export */   \"status\": () => (/* binding */ status),\n/* harmony export */   \"version\": () => (/* binding */ version)\n/* harmony export */ });\n//configuration\r\n//code\r\nconst appName = \"Health Care System\";\r\nconst version = \"1.0.0\";\r\nconst price = 1000;\r\nconst status = true;\r\nconst security = {\r\n    userId: 11,\r\n    key: 'A003331'\r\n};\r\n\n\n//# sourceURL=webpack://myts-app/./build/util/config.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./build/main.js");
/******/ 	
/******/ })()
;