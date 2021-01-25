/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import moment from 'moment';

const TodoModal = (props) => {
  // get the props
  const {
    todoInfo,
    index,
    todoFunctions,
  } = props;
  // deconstruct todoFunctions
  const {
    saveNewTodo, saveEditTodo, deleteTodo, discardModal,
  } = todoFunctions;

  const { title = 'Todo', desc = 'Description', dueDate = new Date() } = todoInfo;

  const [newTodo, setNewTodo] = useState({ title, desc, dueDate: moment(dueDate).format('YYYY-MM-DD') });

  // input values are saved in a state
  // change them through firing an event on changing the input
  const handleInput = (event) => {
    const { value, name } = event.target;
    setNewTodo({ ...newTodo, [name]: value });
  };

  const handleSubmit = () => {
    if (saveNewTodo) {
      saveNewTodo({ ...newTodo, dueDate: moment(dueDate) });
      return;
    }
    saveEditTodo(index, { ...newTodo, dueDate: moment(newTodo.dueDate) });
  };

  const handleDelete = (event) => {
    // I honestly don't know what this does
    event.preventDefault();
    deleteTodo(index);
  };

  return (
    <div className="modal__content">
      <div className="modal__header">Todo</div>
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
        <button type="submit" className="btn modal__submit" onClick={handleSubmit}>Submit</button>
        <button type="button" className="btn modal__discard" onClick={discardModal}>Discard</button>
        { deleteTodo
          ? <button type="button" className="btn modal__delete" onClick={handleDelete}>Delete</button>
          : null}
      </div>
    </div>
  );
};

export default TodoModal;
