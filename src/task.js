exports.Task = (name, description, dueDate, priority) => ({
  id: `task-${Date.now().toString()}`, name, description, dueDate, priority, completed: false,
});

exports.sortTasks = (taskList) => {
  taskList.sort((a, b) => {
    const priorityA = a.priority;
    const priorityB = b.priority;
    if (priorityA < priorityB) {
      return -1;
    }
    if (priorityA > priorityB) {
      return 1;
    }

    return 0;
  });
};
