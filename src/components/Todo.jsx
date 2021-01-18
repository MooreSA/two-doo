import React from 'react';

const Todo = (props) => {
  const { todo } = props;
  const { title, desc, dueDate } = todo;

  return (
    <div className="todo">
      <input className="todo__check" type="checkbox" name="checkbox" value="" />
      <span className="todo__title">{title}</span>
      <span className="todo__description">{desc}</span>
      <span className="todo__due-date">{dueDate}</span>
    </div>
  );
};

export default Todo;
