const projectsContainer = document.querySelector('.projects__list');
const projectForm = document.querySelector('.projects__form');
const projectInput = document.querySelector('.projects__form__input')
const tasksContainer = document.querySelector('.todos')
const projectTitle = document.querySelector('.todos__title')
const pendingTasksCount = document.querySelector('.todos__count');

const projectsKey = 'myProjects';
const selectedProjectIdKey = 'mySelectedProjectId';
let projects = JSON.parse(localStorage.getItem(projectsKey)) || [{id: Date.now().toString(), name: "General", tasks: []}];
let selectedProjectId = localStorage.getItem(selectedProjectIdKey);

// Utility Functions
function Project (name) {
  return { id: Date.now().toString(), name: name, tasks: [] };
}

function renderProjects() {
  projects.forEach(project => {
    const projectItem = document.createElement('li');
    projectItem.classList.add('projects__item');
    projectItem.setAttribute('id', `1`);
    projectItem.innerText = project.name;
    projectsContainer.appendChild(projectItem);
  })
}

function removeElements(parentElement) {
  while(parentElement.lastChild){
    parentElement.removeChild(parentElement.lastChild);
  }
}

function save() {
  localStorage.setItem(projectsKey, JSON.stringify(projects));
  localStorage.setItem(selectedProjectIdKey, selectedProjectId);
}

// Event Listeners
formProject.addEventListener('submit',(e) => {
  e.preventDefault();
  const newProjectvalue = projectInput.value;
  if (newProjectvalue === null || newProjectvalue === '') return;
  const newProject = Project(newProjectvalue);
  projects.push(newProject);
  save();
  projectInput.value = null;
  removeElements(projectsContainer);
  renderProjects();
})

projectsContainer.addEventListener('click', (e) => {
  if(e.target.tagName === 'LI'){
    removeActiveClass(projectsContainer);
    e.target.classList.add('projects__item--active');
    tasksContainer.classList.remove('hide')
    removeElements(projectTitleContainer)
    renderTasks(e.target);
  }
})

function renderTasks(element) {
  const tasksTitle = document.createElement('h2');
  const tasksCount = document.createElement('p');
  tasksTitle.innerText = element.innerText;
  tasksTitle.classList.add("todos__title");
  tasksCount.innerText = "3 tasks pending";
  tasksCount.classList.add("todos__count")
  projectTitleContainer.append(tasksTitle,tasksCount)
}

renderProjects();
