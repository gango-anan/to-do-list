exports.removeElements = (parent) => {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
};
