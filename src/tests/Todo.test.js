// eslint-disable-next-line import/no-extraneous-dependencies
import { test, expect } from '@jest/globals';
import Todo from '../js/Todo';

test('Todo can be created', () => {
  const testTodo = new Todo();
  expect(testTodo).toBeDefined();
});

test('Todo has all required props', () => {
  const todo = new Todo();
  expect(todo.active).toBeDefined();
  expect(todo.title).toBeDefined();
  expect(todo.desc).toBeDefined();
  expect(todo.dueDate).toBeDefined();
});

test('Todo can set default values', () => {
  const todo = new Todo();
  expect(todo.active).toEqual(true);
  expect(todo.title).toEqual('New Todo');
  expect(todo.desc).toEqual('Todo Description');
  expect(todo.dueDate).toBe(new Date().toLocaleDateString());
});

test('Todo can set non-default values', () => {
  const args = {
    active: false, title: 'testTitle', desc: 'testDESC123!', dueDate: new Date(2004, 1, 20),
  };
  const todo = new Todo(args);
  expect(todo.active).toEqual(false);
  expect(todo.title).toEqual('testTitle');
  expect(todo.desc).toEqual('testDESC123!');
  expect(todo.dueDate).toEqual(new Date(2004, 1, 20).toLocaleDateString());
});
