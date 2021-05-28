exports.Project = (name) => ({ id: Date.now().toString(), name, tasks: [] });

// export { Project as default };