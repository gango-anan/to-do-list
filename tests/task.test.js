const { Task, sortTasks } = require('../src/task');

test('it creates a task object', () => {
  const newtask = Task('name', 'description', 'dueDate', 'priority');
  expect(typeof newtask).toBe('object');
});

test('it should sort tasks based on priority', () => {
  const tasks = [
    {
      id: 'task-1', name: 'task-one', description: 'First Task', dueDate: '01/06/2021', priority: 3, completed: false,
    },
    {
      id: 'task-3', name: 'task-three', description: 'Third Task', dueDate: '01/06/2021', priority: 1, completed: false,
    },
    {
      id: 'task-2', name: 'task-two', description: 'Second Task', dueDate: '05/10/2021', priority: 2, completed: false,
    },
  ];

  const sortedTasks = [
    {
      id: 'task-3', name: 'task-three', description: 'Third Task', dueDate: '01/06/2021', priority: 1, completed: false,
    },
    {
      id: 'task-2', name: 'task-two', description: 'Second Task', dueDate: '05/10/2021', priority: 2, completed: false,
    },
    {
      id: 'task-1', name: 'task-one', description: 'First Task', dueDate: '01/06/2021', priority: 3, completed: false,
    },
  ];

  // Before sorting
  expect(tasks).not.toEqual(sortedTasks);

  // After sorting
  sortTasks(tasks);
  expect(tasks).toEqual(sortedTasks);
});