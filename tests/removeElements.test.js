const { removeElements } = require('../src/utilities');

test('it should remove all child elements', () => {
  const container = document.createElement('div');
  container.appendChild(document.createElement('h1'));
  container.appendChild(document.createElement('p'));
  container.appendChild(document.createElement('a'));
  removeElements(container);
  expect(container.childNodes.length).toEqual(0);
});

test("it can't remove child nodes of another element", () => {
  const container1 = document.createElement('div');
  container1.appendChild(document.createElement('h1'));
  container1.appendChild(document.createElement('p'));
  const container2 = document.createElement('div');
  container2.appendChild(document.createElement('h1'));
  container2.appendChild(document.createElement('p'));
  removeElements(container2);
  expect(container1.childNodes.length).toEqual(2);
});