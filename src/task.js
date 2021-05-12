const Task = (name, description, dueDate, priority) => {
  return { id: `task-${Date.now().toString()}`, name, description, dueDate, priority, completed: false };
};

export { Task as default };