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

eval("const projectsContainer = document.querySelector('.projects__list');\r\nconst formProject = document.querySelector('.projects__form');\r\nconst projectInput = document.querySelector('.projects__form__input')\r\n\r\nlet projects = [{name:\"General\",tasks: []}];\r\n\r\n// Utility Functions\r\nfunction renderProjects() {\r\n  projects.forEach(project => {\r\n    const projectItem = document.createElement('li');\r\n    projectItem.classList.add('projects__item');\r\n    projectItem.setAttribute('id', `1`);\r\n    projectItem.innerText = project.name;\r\n    projectsContainer.appendChild(projectItem);\r\n  })\r\n}\r\n\r\nfunction removeElements(parentElement) {\r\n  while(parentElement.lastChild){\r\n    parentElement.removeChild(parentElement.lastChild);\r\n  }\r\n}\r\n\r\nfunction Project (name, tasks =[]) {\r\n    this.name = name\r\n    this.tasks = tasks\r\n}\r\n\r\n\r\n\r\nfunction createProject (){\r\n  \r\n}\r\n\r\n// Event Listeners\r\n\r\nformProject.addEventListener('submit',(e) => {\r\n  e.preventDefault();\r\n  const newProjectvalue = projectInput.value;\r\n  const newProject = new Project(newProjectvalue);\r\n  projects.push(newProject);\r\n  projectInput.value = null;\r\n  removeElements(projectsContainer);\r\n  renderProjects();\r\n})\r\n\r\n\r\n\r\n\r\n\r\nrenderProjects();\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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