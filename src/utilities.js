exports.removeElements = (parent) => {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
};

// export { removeElements as default };

// const removeElements = (parent) => {
//   while (parent.lastChild) {
//     parent.removeChild(parent.lastChild);
//   }
// };

// export { removeElements as default };