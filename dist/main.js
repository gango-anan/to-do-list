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

eval("const projectsContainer = document.querySelector('.projects__list');\nconst formProject = document.querySelector('.projects__form');\nconst projectInput = document.querySelector('.projects__form__input')\nconst tasksContainer = document.querySelector('.todos')\nconst projectTitleContainer = document.querySelector('.todos__header')\n\nconst projectsKey = 'myProjects';\nlet projects = JSON.parse(localStorage.getItem('myProjects')) || [{name:\"General\",tasks: []}];\n\n// Utility Functions\nfunction renderProjects() {\n  projects.forEach(project => {\n    const projectItem = document.createElement('li');\n    projectItem.classList.add('projects__item');\n    projectItem.setAttribute('id', `1`);\n    projectItem.innerText = project.name;\n    projectsContainer.appendChild(projectItem);\n  })\n}\n\nfunction removeElements(parentElement) {\n  while(parentElement.lastChild){\n    parentElement.removeChild(parentElement.lastChild);\n  }\n}\n\nfunction Project (name, tasks =[]) {\n    this.name = name\n    this.tasks = tasks\n}\n\nfunction removeActiveClass(parentElement) {\n  parentElement.childNodes.forEach(element => {\n    element.classList.remove('projects__item--active');\n  })\n}\n\n// Event Listeners\nformProject.addEventListener('submit',(e) => {\n  e.preventDefault();\n  const newProjectvalue = projectInput.value;\n  const newProject = new Project(newProjectvalue);\n  projects.push(newProject);\n  localStorage.setItem('myProjects', JSON.stringify(projects));\n  projectInput.value = null;\n  removeElements(projectsContainer);\n  renderProjects();\n})\n\nprojectsContainer.addEventListener('click', (e) => {\n  if(e.target.tagName === 'LI'){\n    removeActiveClass(projectsContainer);\n    e.target.classList.add('projects__item--active');\n    tasksContainer.classList.remove('hide')\n    removeElements(projectTitleContainer)\n    renderTasks(e.target);\n  }\n})\n\nfunction renderTasks(element) {\n  const tasksTitle = document.createElement('h2');\n  const tasksCount = document.createElement('p');\n  tasksTitle.innerText = element.innerText;\n  tasksTitle.classList.add(\"todos__title\");\n  tasksCount.innerText = \"3 tasks pending\";\n  tasksCount.classList.add(\"todos__count\")\n  projectTitleContainer.append(tasksTitle,tasksCount)\n}\n\nrenderProjects();\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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