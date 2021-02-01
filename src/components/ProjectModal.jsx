/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const ProjectModal = (props) => {
  const {
    projectInfo,
    projectFunctions,
  } = props;

  const {
    saveNewProject,
    saveEditProject,
    deleteProject,
    discardModal,
  } = projectFunctions;

  const springProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const { title = 'Todo List', desc = 'Chores to be done', todos } = projectInfo;
  const [newProject, setNewProject] = useState({ title, desc });

  // lets the user change the various inputs
  // must be done like this since the inputs are states
  const handleInput = (event) => {
    const { value, name } = event.target;
    setNewProject({ ...newProject, [name]: value });
  };

  // passes the new project up the chain to App
  // const newProjectEvent = () => {
  //   saveNewProject({ title, desc, todos: [] });
  // };

  const submitPress = () => {
    if (saveNewProject) {
      saveNewProject({ ...newProject, todos: [] });
      return;
    }
    saveEditProject({ ...newProject, todos });
  };

  return (
    <animated.div className="modal__content" style={springProps}>
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
        <button type="button" className="btn modal__submit" onClick={submitPress}>Submit</button>
        <button type="button" className="btn modal__discard" onClick={discardModal}>Discard</button>
        {deleteProject
          ? <button type="button" className="btn modal__delete" onClick={deleteProject}>Delete</button>
          : null}
      </div>
    </animated.div>
  );
};

export default ProjectModal;
