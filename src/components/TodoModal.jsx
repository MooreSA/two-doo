/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const TodoModal = (props) => {
  const { title = 'New Todo', desc = 'Description', dueDate = new Date() } = props;
  return (
    <div className="todo-modal">
      <div className="todo-modal__content">
        <div className="todo-modal__header">Todo:</div>
        <div className="todo-modal__form">
          <label className="todo-modal__label" htmlFor="todo-title-input">Title:</label>
          <input className="todo-modal__input" type="text" value={title} id="todo-title-input" />
          <label className="todo-modal__label" htmlFor="todo-desc-input">Description:</label>
          <input className="todo-modal__input" type="text" value={desc} id="todo-desc-input" />
          <label className="todo-modal__label" htmlFor="todo-date-input">Due Date:</label>
          <input className="todo-modal__input" type="date" value={dueDate} id="todo-date-input" />
        </div>
        <div className="todo-modal__btns">
          <button type="button" className="btn todo-modal__submit">Submit</button>
          <button type="button" className="btn todo-modal__discard">Discard</button>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
