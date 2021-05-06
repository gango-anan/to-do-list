const projectsContainer = document.querySelector('.projects__list');

let projects = ['General', 'Coding', 'Movie Night'];

// Utility Functions
function renderProjects() {
  projects.forEach(project => {
    const projectItem = document.createElement('li');
    projectItem.classList.add('projects__item');
    projectItem.setAttribute('id', `1`);
    projectItem.innerText = project;
    projectsContainer.appendChild(projectItem);
  })
}


// Event Listeners




renderProjects();

