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

eval("const projectsContainer = document.querySelector('.projects__list');\r\nconst projectForm = document.querySelector('.projects__form');\r\nconst projectInput = document.querySelector('.projects__form__input')\r\nconst tasksContainer = document.querySelector('.todos')\r\nconst projectTitle = document.querySelector('.todos__title')\r\nconst pendingTasksCount = document.querySelector('.todos__count');\r\nconst projectDeleteButton = document.querySelector('.projects__delete_button');\r\nconst taskTemplate = document.getElementById('task-template');\r\nconst projectTasks = document.querySelector('todos__tasks');\r\n\r\nconst projectsKey = 'myProjects';\r\nconst selectedProjectIdKey = 'mySelectedProjectId';\r\nlet projects = JSON.parse(localStorage.getItem(projectsKey)) || [{id: Date.now().toString(), name: \"General\", tasks: []}];\r\nlet selectedProjectId = localStorage.getItem(selectedProjectIdKey);\r\n\r\n// Utility Functions\r\nfunction Project (name) {\r\n  return { id: Date.now().toString(), name: name, tasks: [] };\r\n}\r\n\r\nfunction removeElements(parentElement) {\r\n  while(parentElement.lastChild){\r\n    parentElement.removeChild(parentElement.lastChild);\r\n  }\r\n}\r\n\r\nfunction renderProjects() {\r\n  projects.forEach(project => {\r\n    const projectItem = document.createElement('li');\r\n    projectItem.classList.add('projects__item');\r\n    projectItem.setAttribute('id', `${project.id}`);\r\n    if (project.id === selectedProjectId) {\r\n      projectItem.classList.add('projects__item--active');\r\n    }\r\n    projectItem.innerText = project.name;\r\n    projectsContainer.appendChild(projectItem);\r\n  })\r\n}\r\n\r\nfunction renderTasks(selectedProject) {\r\n  selectedProject.forEach(task => {\r\n    const taskElement = document.importNode(taskTemplate.content, true);\r\n    const checkBox = taskElement.querySelector('.todos__item');\r\n    checkBox.id = task.id;\r\n    checkBox.checked = task.completed;\r\n    const taskLabel = taskElement.querySelector('.todos__label');\r\n    taskLabel.htmlFor = task.id;\r\n    taskLabel.innerText = task.name;\r\n    projectTasks.appendChild(taskElement);\r\n  })\r\n}\r\n\r\nfunction renderProjectsAndTasks() {\r\n  removeElements(projectsContainer);\r\n  renderProjects();\r\n  \r\n  if (selectedProjectId === null) {\r\n    tasksContainer.style.display = 'none';\r\n  } else {\r\n    tasksContainer.style.display = '';\r\n    const selectedProject = projects.find(project => project.id === selectedProjectId)\r\n    projectTitle.innerText = selectedProject.name;\r\n    const pendingTasks = selectedProject.tasks.length;\r\n    const pendingTasksDescription = pendingTasks === 1 ? 'task' : 'tasks';\r\n    pendingTasksCount.innerText = `${pendingTasks} ${pendingTasksDescription} pending`;\r\n    removeElements(projectTasks);\r\n    renderTasks(selectedProject);\r\n  }\r\n\r\n}\r\n\r\nfunction save() {\r\n  localStorage.setItem(projectsKey, JSON.stringify(projects));\r\n  localStorage.setItem(selectedProjectIdKey, selectedProjectId);\r\n}\r\n\r\nfunction saveRender() {\r\n  save();\r\n  renderProjectsAndTasks();\r\n}\r\n// Event Listeners\r\nprojectForm.addEventListener('submit', e => {\r\n  e.preventDefault();\r\n  const newProjectValue = projectInput.value;\r\n  if (newProjectValue === null || newProjectValue === '') return;\r\n  const newProject = Project(newProjectValue);\r\n  projects.push(newProject);\r\n  projectInput.value = null;\r\n  saveRender();\r\n})\r\n\r\nprojectsContainer.addEventListener('click', e => {\r\n  if(e.target.tagName === 'LI'){\r\n    selectedProjectId = e.target.id;\r\n    saveRender();\r\n  }\r\n})\r\n\r\nprojectDeleteButton.addEventListener('click', e => {\r\n  projects = projects.filter(project => project.id !== selectedProjectId);\r\n  selectedProjectId = null;\r\n  saveRender();\r\n})\r\n\r\nrenderProjectsAndTasks();\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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