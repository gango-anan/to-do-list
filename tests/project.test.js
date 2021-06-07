const { Project } = require('../src/project');

test('it creates a project object', () => {
  const newpojrct = Project('name');
  expect(typeof newpojrct).toBe('object');
});

test('it creates a project object with a name attribute', () => {
  const newpojrct = Project('Project-one');
  expect(newpojrct.name).toEqual('Project-one');
});

test('it creates a new project object in memory', () => {
  const projectOne = Project('name');
  const projectTwo = Project('name');
  expect(projectOne).not.toBe(projectTwo);
});
