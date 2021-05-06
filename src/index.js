const projectsContainer = document.querySelector('.projects__list');
const formProject = document.querySelector('.projects__form');
const projectInput = document.querySelector('.projects__form__input')

const projectsKey = 'myProjects';
let projects = JSON.parse(localStorage.getItem('myProjects')) || [{name:"General",tasks: []}];

// Utility Functions
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

function Project (name, tasks =[]) {
    this.name = name
    this.tasks = tasks
}

// Event Listeners
formProject.addEventListener('submit',(e) => {
  e.preventDefault();
  const newProjectvalue = projectInput.value;
  const newProject = new Project(newProjectvalue);
  projects.push(newProject);
  localStorage.setItem('myProjects', JSON.stringify(projects));
  projectInput.value = null;
  removeElements(projectsContainer);
  renderProjects();
})

renderProjects();

