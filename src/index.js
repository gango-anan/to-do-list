const projectsContainer = document.querySelector('.projects__list');
const projectForm = document.querySelector('.projects__form');
const projectInput = document.querySelector('.projects__form__input')
const tasksContainer = document.querySelector('.todos')
const projectTitle = document.querySelector('.todos__title')
const pendingTasksCount = document.querySelector('.todos__count');
const projectDeleteButton = document.querySelector('.projects__delete_button');

const projectsKey = 'myProjects';
const selectedProjectIdKey = 'mySelectedProjectId';
let projects = JSON.parse(localStorage.getItem(projectsKey)) || [{id: Date.now().toString(), name: "General", tasks: []}];
let selectedProjectId = localStorage.getItem(selectedProjectIdKey);

// Utility Functions
function Project (name) {
  return { id: Date.now().toString(), name: name, tasks: [] };
}

function removeElements(parentElement) {
  while(parentElement.lastChild){
    parentElement.removeChild(parentElement.lastChild);
  }
}

function renderProjects() {
  projects.forEach(project => {
    const projectItem = document.createElement('li');
    projectItem.classList.add('projects__item');
    projectItem.setAttribute('id', `${project.id}`);
    if (project.id === selectedProjectId) {
      projectItem.classList.add('projects__item--active');
    }
    projectItem.innerText = project.name;
    projectsContainer.appendChild(projectItem);
  })
}

function renderProjectsAndTasks() {
  removeElements(projectsContainer);
  renderProjects();
  
  if (selectedProjectId === null) {
    tasksContainer.style.display = 'none';
  } else {
    tasksContainer.style.display = '';
    const selectedProject = projects.find(project => project.id === selectedProjectId)
    projectTitle.innerText = selectedProject.name;
    const pendingTasks = selectedProject.tasks.length;
    const pendingTasksDescription = pendingTasks === 1 ? 'task' : 'tasks';
    pendingTasksCount.innerText = `${pendingTasks} ${pendingTasksDescription} pending`;
  }

}

function save() {
  localStorage.setItem(projectsKey, JSON.stringify(projects));
  localStorage.setItem(selectedProjectIdKey, selectedProjectId);
}

function saveRender() {
  save();
  renderProjectsAndTasks();
}
// Event Listeners
projectForm.addEventListener('submit', e => {
  e.preventDefault();
  const newProjectValue = projectInput.value;
  if (newProjectValue === null || newProjectValue === '') return;
  const newProject = Project(newProjectValue);
  projects.push(newProject);
  projectInput.value = null;
  saveRender();
})

projectsContainer.addEventListener('click', e => {
  if(e.target.tagName === 'LI'){
    selectedProjectId = e.target.id;
    saveRender();
  }
})

projectDeleteButton.addEventListener('click', e => {
  projects = projects.filter(project => project.id !== selectedProjectId);
  selectedProjectId = null;
  saveRender();
})

renderProjectsAndTasks();
