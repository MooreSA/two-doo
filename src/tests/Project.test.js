// eslint-disable-next-line import/no-extraneous-dependencies
import { test, expect } from '@jest/globals';
import Project from '../js/Project';
import Todo from '../js/Todo';

test('Project Class Exists', () => {
  const project = new Project();
  expect(project).toBeDefined();
});

test('Project has a todos prop', () => {
  const project = new Project();
  expect(project.todos).toBeDefined();
});

test('Project has a title', () => {
  const project = new Project();
  expect(project.title).toBeDefined();
});

test('Project has a description', () => {
  const project = new Project();
  expect(project.desc).toBeDefined();
});

test('Project initalises with no todos', () => {
  const project = new Project();
  expect(project.todos.length).toBe(0);
});

test('Project can add a todo', () => {
  let project = new Project();
  project = project.addTodo(new Todo());
  expect(project.todos.length).toBe(1);
  expect(project.todos[0]).toEqual(new Todo());
});

test('Project can set a title', () => {
  const project = new Project({ title: 'TestTitle' });
  expect(project.title).toBe('TestTitle');
});

test('Project can set a description', () => {
  const project = new Project({ desc: 'testdesc' });
  expect(project.desc).toBe('testdesc');
});

test('Project can edit a todo', () => {
  let project = new Project();
  const todoArgs = {
    active: false, title: 'testTitle', desc: 'testDESC123!', dueDate: new Date(2004, 1, 20),
  };
  const editTodo = new Todo(todoArgs);
  project = project.addTodo(new Todo());
  project = project.editTodo(0, editTodo);
  expect(project.todos.length).toBe(1);
  expect(project.todos[0]).toEqual(editTodo);
});

test('Project can edit a title', () => {
  let project = new Project();
  project = project.editTitle('This is new!');
  expect(project.title).toBe('This is new!');
});

test('Project can edit a description', () => {
  let project = new Project();
  project = project.editDesc('This is also new!');
  expect(project.desc).toBe('This is also new!');
});

test('Project can edit a todo when it has more than one todo', () => {
  let project = new Project();
  const todoArgs = {
    active: false, title: 'testTitle', desc: 'testDESC123!', dueDate: new Date(2004, 1, 20),
  };
  const testTodo = new Todo(todoArgs);
  project = project.addTodo(new Todo());
  project = project.addTodo(new Todo());
  project = project.addTodo(new Todo());
  project.editTodo(1, testTodo);
  expect(project.todos[1]).toEqual(testTodo);
  expect(project.todos.length).toBe(3);
});

test('Project can remove a todo', () => {
  let project = new Project();
  project = project.addTodo();
  expect(project.todos.length).toBe(1);
  project = project.deleteTodo(0);
  expect(project.todos.length).toBe(0);
});
