import React from 'react';
import Todo from './Todo';

const Todolist = (props) => {
  const {
    project, addTodo, editTodo, saveEditTodo,
  } = props;
  const { todos } = project;
  return (
    <div className="todolist">
      {todos.map((todo, index) => (
        <Todo
          todo={todo}
          index={index}
          editTodo={editTodo}
          saveEditTodo={saveEditTodo}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        />
      ))}
      <button
        type="button"
        className="btn todolist__add-todo"
        onClick={addTodo}
      >
        Add Todo
      </button>
    </div>
  );
};

export default Todolist;
