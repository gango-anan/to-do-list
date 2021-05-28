const { Task } = require('../src/task');

test('it creates a task object', () => {
  const newtask = Task('name', 'description', 'dueDate', 'priority');
  expect(typeof newtask).toBe('object');
});
