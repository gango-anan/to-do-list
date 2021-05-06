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

eval("const projectsContainer = document.querySelector('.projects__list');\nconst formProject = document.querySelector('.projects__form');\nconst projectInput = document.querySelector('.projects__form__input')\n\nlet projects = [{name:\"General\",tasks: []}];\n\n// Utility Functions\nfunction renderProjects() {\n  projects.forEach(project => {\n    const projectItem = document.createElement('li');\n    projectItem.classList.add('projects__item');\n    projectItem.setAttribute('id', `1`);\n    projectItem.innerText = project.name;\n    projectsContainer.appendChild(projectItem);\n  })\n}\n\nfunction Project (name, tasks =[]) {\n    this.name = name\n    this.tasks = tasks\n}\n\n\n\nfunction createProject (){\n  \n}\n\n// Event Listeners\n\nformProject.addEventListener('submit',(e) => {\n  e.preventDefault()\n  const newProjectvalue = projectInput.value;\n  const newProject = new Project(newProjectvalue)\n  projects.push(newProject)\n  renderProjects()\n})\n\n\n\n\n\nrenderProjects();\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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