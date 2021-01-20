import React from 'react';
import moment from 'moment';

const Todo = (props) => {
  const {
    todo, editTodo, index, saveEditTodo,
  } = props;
  const {
    active, title, desc, dueDate,
  } = todo;

  const handleTodoClick = (event) => {
    event.preventDefault();
    editTodo(index);
  };

  const toggleActive = (event) => {
    event.preventDefault();
    saveEditTodo(index, {
      active: !active, title, desc, dueDate,
    });
  };

  let todoClasses;
  let checkbox;

  if (!active) {
    todoClasses = 'todo todo--done';
    checkbox = (
      <div
        className="todo__check  todo__check--checked"
        onClick={toggleActive}
        onKeyDown={toggleActive}
        tabIndex="0"
        role="checkbox"
        aria-checked="true"
        aria-label="Toggle Todo"
        checked
      >
        🗸
      </div>

    );
  } else {
    todoClasses = 'todo';
    checkbox = (
      <div
        className="todo__check"
        onClick={toggleActive}
        onKeyDown={toggleActive}
        tabIndex="0"
        role="checkbox"
        aria-checked="false"
        aria-label="Toggle Todo"
      />
    );
    // eslint-disable-next-line quotes
  }

  return (
    <div
      className={todoClasses}
      role="button"
      tabIndex="0"
      aria-hidden="true"
    >
      {checkbox}
      <span
        onClick={handleTodoClick}
        role="button"
        aria-hidden="true"
        className="todo__title"
      >
        {title}
      </span>
      <span
        onClick={handleTodoClick}
        role="button"
        aria-hidden="true"
        className="todo__description"
      >
        {desc}
      </span>
      <span
        onClick={handleTodoClick}
        role="button"
        aria-hidden="true"
        className="todo__due-date"
      >
        {moment(dueDate).format('YYYY-MM-DD')}
      </span>
    </div>
  );
};

export default Todo;
