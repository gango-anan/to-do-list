const checkEmptyInput = (entryOne, entryTwo, entryThree, entryFour) => {
  if (entryOne === null || entryOne === '') return;
  if (entryTwo === null || entryTwo === '') return;
  if (entryThree === null || entryThree === '') return;
  if (entryFour === null || entryFour === '') return;
};

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

export { checkEmptyInput, removeElements, displayElement, removeDisplay  };