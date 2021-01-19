/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import moment from 'moment';

const TodoModal = (props) => {
  const {
    todoInfo, index, discardTodo, saveNewTodo, saveEditTodo,
  } = props;
  const { title = 'Todo', desc = 'Description', dueDate = new Date() } = todoInfo;
  const [newTodo, setNewTodo] = useState({ title, desc, dueDate: moment(dueDate).format('YYYY-MM-DD') });

  // input values are saved in a state
  // change them through firing an event on changing the input
  const handleInput = (event) => {
    const { value, name } = event.target;
    setNewTodo({ ...newTodo, [name]: value });
  };

  // const saveTodo = () => {
  //   // have to send the raw unformatted date to the Todo class
  //   saveNewTodo({ ...newTodo, dueDate: moment(dueDate) });
  // };

  const handleSubmit = () => {
    if (saveNewTodo) {
      saveNewTodo({ ...newTodo, dueDate: moment(dueDate) });
      return;
    }
    saveEditTodo(index, { ...newTodo, dueDate: moment(newTodo.dueDate) });
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
        <button type="button" className="btn modal__submit" onClick={handleSubmit}>Submit</button>
        <button type="button" className="btn modal__discard" onClick={discardTodo}>Discard</button>
      </div>
    </div>
  );
};

export default TodoModal;
