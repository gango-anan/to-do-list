const Project = (name) => {
  return { id: Date.now().toString(), name, tasks: [] };
};

export { Project as default };