import React from 'react';
import ProjectModal from './ProjectModal';
import TodoModal from './TodoModal';

const Modal = (props) => {
  const {
    todoInfo = {},
    todoFunctions,
    index,
    projectFunctions,
    projectInfo = {},
  } = props;

  // display the todo Modal
  if (todoFunctions) {
    return (
      <div className="modal">
        <TodoModal
          todoInfo={todoInfo}
          index={index}
          todoFunctions={todoFunctions}
        />
      </div>
    );
  }

  // display the project modal
  if (projectFunctions) {
    return (
      <div className="modal">
        <ProjectModal
          projectInfo={projectInfo}
          projectFunctions={projectFunctions}
        />
      </div>
    );
  }
  return null;
};

export default Modal;
