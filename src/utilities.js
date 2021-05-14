const removeElements = (parent) => {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
};

const displayElement = (element) => {
  element.style.display = '';
};

const removeDisplay = (element) => {
  element.style.display = 'none';
};

export {
  removeElements, displayElement, removeDisplay,
};