/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const ProjectModal = (props) => {
  const { projectInfo } = props;
  const { title = 'Todo List', desc = 'Chores to be done' } = projectInfo;
  const [newProject, setNewProject] = useState({ title, desc });

  const handleInput = (event) => {
    const { value, name } = event.target;
    setNewProject({ ...newProject, [name]: value });
  };

  return (
    <div className="modal__content">
      <div className="modal__header">Project:</div>
      <div className="modal__form">
        <label className="modal__label" htmlFor="project-title-input">Title:</label>
        <input
          className="modal__input"
          type="text"
          name="title"
          id="project-title-input"
          value={newProject.title}
          onChange={handleInput}
        />
        <label className="modal__label" htmlFor="project-desc-input">Desc:</label>
        <input
          className="modal__input"
          type="text"
          name="desc"
          id="project-desc-input"
          value={newProject.desc}
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

export default ProjectModal;
