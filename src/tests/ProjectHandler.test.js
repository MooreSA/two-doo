// eslint-disable-next-line import/no-extraneous-dependencies
import { test, expect } from '@jest/globals';
import Todo from '../js/Todo';
import Project from '../js/Project';
import ProjectHandler from '../js/ProjectHandler';

test('Project Handler Exists', () => {
  const testHandler = new ProjectHandler();
  expect(testHandler).toBeDefined();
});

test('Project Handler has a projects property', () => {
  const testHandler = new ProjectHandler();
  expect(testHandler.projects).toBeDefined();
});

test('Project Handler initalises with one empty Project', () => {
  const testHandler = new ProjectHandler();
  expect(testHandler.projects.length).toBeDefined();
  expect(testHandler.projects.length).toBe(1);
});

test('Project Handler can add a new project w/ no params', () => {
  const testHandler = new ProjectHandler();
  testHandler.appendProject();
  expect(testHandler.projects.length).toBe(2);
  expect(testHandler.projects[1]).toEqual(new Project());
});

test('Project Handler can add a new non-default project', () => {
  let testHandler = new ProjectHandler();
  const testProject = new Project({ title: 'testTitle', desc: 'testDesc' });
  testHandler = testHandler.appendProject(testProject);
  expect(testHandler.projects[1]).toEqual(
    new Project({ title: 'testTitle', desc: 'testDesc' }),
  );
});

test('Project Handler can delete a project', () => {
  let testHandler = new ProjectHandler();
  const testProject = new Project({ title: 'test!' });
  testHandler = testHandler.appendProject(testProject);
  testHandler = testHandler.deleteProject(0);
  expect(testHandler.projects.length).toBe(1);
  expect(testHandler.projects[0]).toEqual(
    new Project({ title: 'test!' }),
  );
});

test('Project Handler can add a todo to an existing project', () => {
  let testHandler = new ProjectHandler();
  const testTodo = new Todo({ title: 'test' });
  testHandler = testHandler.addTodo(0, testTodo);
  expect(testHandler.projects[0].todos[0]).toEqual(
    new Todo({ title: 'test' }),
  );
});

test('Project Handler can remove a todo from a project', () => {
  let testHandler = new ProjectHandler();
  testHandler = testHandler.addTodo(0);
  expect(testHandler.projects[0].todos.length).toBe(1);
  testHandler = testHandler.removeTodo(0, 0);
  expect(testHandler.projects[0].todos.length).toBe(0);
});

test('PH can edit a todo', () => {
  let testHandler = new ProjectHandler();
  testHandler = testHandler.addTodo(0, new Todo());
  expect(testHandler.projects[0].todos[0]).toEqual(new Todo());
  expect(testHandler.projects[0].todos[0]).toBeDefined();
  const testTodo = new Todo({ title: 'test!' });
  testHandler.editTodo(0, 0, testTodo);
  expect(testHandler.projects[0].todos[0]).toEqual(testTodo);
});

test('Project Handler can edit project details', () => {
  let testHandler = new ProjectHandler();
  testHandler = testHandler.editProject(0, { title: 'testTitle', desc: 'testDesc' });
  expect(testHandler.projects[0].title).toBe('testTitle');
  expect(testHandler.projects[0].desc).toBe('testDesc');
});
