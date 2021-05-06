/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const projectsContainer = document.querySelector('.projects__list');\r\n\r\nlet projects = ['General', 'Coding', 'Movie Night'];\r\n\r\n// Utility Functions\r\nfunction renderProjects() {\r\n  projects.forEach(project => {\r\n    const projectItem = document.createElement('li');\r\n    projectItem.classList.add('projects__item');\r\n    projectItem.setAttribute('id', `1`);\r\n    projectItem.innerText = project;\r\n    projectsContainer.appendChild(projectItem);\r\n  })\r\n}\r\n\r\n\r\n// Event Listeners\r\n\r\n\r\n\r\n\r\nrenderProjects();\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;