/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const TodoModal = (props) => {
  const { todoInfo } = props;
  const { title = 'Todo', desc = 'Description', dueDate = new Date() } = todoInfo;
  const [newTodo, setNewTodo] = useState({ title, desc, dueDate });

  const handleInput = (event) => {
    const { value, name } = event.target;
    setNewTodo({ ...newTodo, [name]: value });
  };

  return (
    <div className="modal__content">
      <div className="modal__header">Todo:</div>
      <div className="modal__form">
        <label className="modal__label" htmlFor="todo-title-input">Title:</label>
        <input
          className="modal__input"
          name="title"
          type="text"
          value={newTodo.title}
          id="todo-title-input"
          onChange={handleInput}
        />
        <label className="modal__label" htmlFor="todo-desc-input">Description:</label>
        <input
          className="modal__input"
          name="desc"
          type="text"
          value={newTodo.desc}
          id="todo-desc-input"
          onChange={handleInput}
        />
        <label className="modal__label" htmlFor="todo-date-input">Due Date:</label>
        <input
          className="modal__input"
          name="dueDate"
          type="date"
          value={newTodo.dueDate}
          id="todo-date-input"
          onChange={handleInput}
        />
      </div>
      <div className="modal__btns">
        <button type="button" className="btn modal__submit">Submit</button>
        <button type="button" className="btn modal__discard">Discard</button>
      </div>
    </div>
  );
};

export default TodoModal;
