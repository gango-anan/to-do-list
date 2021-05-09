const projectsContainer = document.querySelector('.projects__list');
const projectForm = document.querySelector('.projects__form');
const projectInput = document.querySelector('.projects__form__input');
const tasksContainer = document.querySelector('.todos');
const projectTitle = document.querySelector('.todos__title');
const pendingTasksCounter = document.querySelector('.todos__count');
const projectDeleteButton = document.querySelector('.projects__delete_button');
const taskTemplate = document.getElementById('task-template');
const projectTasks = document.querySelector('.all_tasks');
const taskForm = document.querySelector('.todos__form');
const taskFormInput = document.querySelector('.todos__input');

const projectsKey = 'myProjects';
const selectedProjectIdKey = 'mySelectedProjectId';
let projects = JSON.parse(localStorage.getItem(projectsKey)) || [{ id: Date.now().toString(), name: 'General', tasks: [] }];
let selectedProjectId = JSON.parse(localStorage.getItem(selectedProjectIdKey));

// Utility Functions
function Project(name) {
  return { id: Date.now().toString(), name, tasks: [] };
}

function Task(name) {
  return { id: `task-${Date.now().toString()}`, name, completed: false };
}

function removeElements(parentElement) {
  while (parentElement.lastChild) {
    parentElement.removeChild(parentElement.lastChild);
  }
}

function renderProjects() {
  projects.forEach((project) => {
    const projectItem = document.createElement('li');
    projectItem.classList.add('projects__item');
    projectItem.setAttribute('id', `${project.id}`);
    if (project.id === selectedProjectId) {
      projectItem.classList.add('projects__item--active');
    }
    projectItem.innerText = project.name;
    projectsContainer.appendChild(projectItem);
  });
}

function renderTasks(selectedProject) {
  selectedProject.tasks.forEach((task) => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkBox = taskElement.querySelector('.todos__item');
    checkBox.id = task.id;
    checkBox.checked = task.completed;
    const taskLabel = taskElement.querySelector('.todos__label');
    taskLabel.htmlFor = task.id;
    taskLabel.innerText = task.name;
    projectTasks.appendChild(taskElement);
  });
}

function renderPendingTasksCount(selectedProject) {
  const pendingTasksCount = selectedProject.tasks.filter((task) => !task.completed).length;
  const pendingTasksDescription = pendingTasksCount === 1 ? 'task' : 'tasks';
  pendingTasksCounter.innerText = `${pendingTasksCount} ${pendingTasksDescription} pending.`;
}

function renderProjectsAndTasks() {
  removeElements(projectsContainer);
  renderProjects();
  
  if (selectedProjectId === null) {
    tasksContainer.style.display = 'none';
  } else {
    tasksContainer.style.display = '';
    const selectedProject = projects.find((project) => project.id === selectedProjectId);
    projectTitle.innerText = selectedProject.name;
    renderPendingTasksCount(selectedProject);
    removeElements(projectTasks);
    renderTasks(selectedProject);
  }
}

function save() {
  localStorage.setItem(projectsKey, JSON.stringify(projects));
  localStorage.setItem(selectedProjectIdKey, JSON.stringify(selectedProjectId));
}

function saveRender() {
  save();
  renderProjectsAndTasks();
}
// Event Listeners
projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newProjectValue = projectInput.value;
  if (newProjectValue === null || newProjectValue === '') return;
  const newProject = Project(newProjectValue);
  projects.push(newProject);
  projectInput.value = null;
  saveRender();
});

projectsContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    selectedProjectId = e.target.id;
    saveRender();
  }
});

projectDeleteButton.addEventListener('click', () => {
  projects = projects.filter((project) => project.id !== selectedProjectId);
  selectedProjectId = null;
  saveRender();
});

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskName = taskFormInput.value;
  if (taskName === null || taskName === '') return;
  const newTask = Task(taskName);
  taskFormInput.value = null;
  const selectedProject = projects.find((project) => project.id === selectedProjectId);
  selectedProject.tasks.push(newTask);
  saveRender();
});

projectTasks.addEventListener('click', (e) => {
  const activeProject = projects.find((project) => project.id === selectedProjectId);

  if (e.target.tagName === 'INPUT') {
    const selectedTask = activeProject.tasks.find((task) => task.id === e.target.id);
    selectedTask.completed = e.target.checked;
    save();
    renderPendingTasksCount(activeProject);
  } else if (e.target.dataset.id === 'deleteSelectedTask') {
    const activeCheckBox = e.target.parentNode.firstChild.firstChild;
    if (activeCheckBox.checked) {
      activeProject.tasks = activeProject.tasks.filter((task) => !(task.id === activeCheckBox.id));
      saveRender();
    }
  }
});

renderProjectsAndTasks();
