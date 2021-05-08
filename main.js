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

eval("const projectsContainer = document.querySelector('.projects__list');\r\nconst projectForm = document.querySelector('.projects__form');\r\nconst projectInput = document.querySelector('.projects__form__input')\r\nconst tasksContainer = document.querySelector('.todos')\r\nconst projectTitle = document.querySelector('.todos__title')\r\nconst pendingTasksCount = document.querySelector('.todos__count');\r\n\r\nconst projectsKey = 'myProjects';\r\nconst selectedProjectIdKey = 'mySelectedProjectId';\r\nlet projects = JSON.parse(localStorage.getItem(projectsKey)) || [{id: Date.now().toString(), name: \"General\", tasks: []}];\r\nlet selectedProjectId = localStorage.getItem(selectedProjectIdKey);\r\n\r\n// Utility Functions\r\nfunction Project (name) {\r\n  return { id: Date.now().toString(), name: name, tasks: [] };\r\n}\r\n\r\nfunction renderProjects() {\r\n  projects.forEach(project => {\r\n    const projectItem = document.createElement('li');\r\n    projectItem.classList.add('projects__item');\r\n    projectItem.setAttribute('id', `1`);\r\n    projectItem.innerText = project.name;\r\n    projectsContainer.appendChild(projectItem);\r\n  })\r\n}\r\n\r\nfunction removeElements(parentElement) {\r\n  while(parentElement.lastChild){\r\n    parentElement.removeChild(parentElement.lastChild);\r\n  }\r\n}\r\n\r\nfunction save() {\r\n  localStorage.setItem(projectsKey, JSON.stringify(projects));\r\n  localStorage.setItem(selectedProjectIdKey, selectedProjectId);\r\n}\r\n\r\n// Event Listeners\r\nformProject.addEventListener('submit',(e) => {\r\n  e.preventDefault();\r\n  const newProjectvalue = projectInput.value;\r\n  if (newProjectvalue === null || newProjectvalue === '') return;\r\n  const newProject = Project(newProjectvalue);\r\n  projects.push(newProject);\r\n  save();\r\n  projectInput.value = null;\r\n  removeElements(projectsContainer);\r\n  renderProjects();\r\n})\r\n\r\nprojectsContainer.addEventListener('click', (e) => {\r\n  if(e.target.tagName === 'LI'){\r\n    removeActiveClass(projectsContainer);\r\n    e.target.classList.add('projects__item--active');\r\n    tasksContainer.classList.remove('hide')\r\n    removeElements(projectTitleContainer)\r\n    renderTasks(e.target);\r\n  }\r\n})\r\n\r\nfunction renderTasks(element) {\r\n  const tasksTitle = document.createElement('h2');\r\n  const tasksCount = document.createElement('p');\r\n  tasksTitle.innerText = element.innerText;\r\n  tasksTitle.classList.add(\"todos__title\");\r\n  tasksCount.innerText = \"3 tasks pending\";\r\n  tasksCount.classList.add(\"todos__count\")\r\n  projectTitleContainer.append(tasksTitle,tasksCount)\r\n}\r\n\r\nrenderProjects();\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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