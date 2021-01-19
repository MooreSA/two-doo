import React from 'react';
import moment from 'moment';

const Todo = (props) => {
  const { todo, editTodo, index } = props;
  const { title, desc, dueDate } = todo;

  const handleTodoClick = () => editTodo(index);

  return (
    <div
      className="todo"
      onClick={handleTodoClick}
      role="button"
      tabIndex="0"
      aria-hidden="true"
    >
      <input className="todo__check" type="checkbox" name="checkbox" value="" />
      <span className="todo__title">{title}</span>
      <span className="todo__description">{desc}</span>
      <span className="todo__due-date">{moment(dueDate).format('YYYY-MM-DD')}</span>
    </div>
  );
};

export default Todo;
