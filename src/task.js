const Task = (name, description, dueDate, priority) => ({
  id: `task-${Date.now().toString()}`, name, description, dueDate, priority, completed: false,
});

const sortTasks = (taskList) => {
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

const checkEmptyInput = (entryOne, entryTwo, entryThree, entryFour) => {
  if (entryOne === null || entryOne === '') return;
  if (entryTwo === null || entryTwo === '') return;
  if (entryThree === null || entryThree === '') return;
  if (entryFour === null || entryFour === '') return;
}

export { Task, sortTasks, checkEmptyInput };