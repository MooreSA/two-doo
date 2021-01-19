import React from 'react';
import ProjectModal from './ProjectModal';
import TodoModal from './TodoModal';

const Modal = (props) => {
  const {
    todoFlag, projectFlag, discardModal, saveNewTodo,
    saveNewProject, saveEditProject, index, saveEditTodo,
  } = props;
  // display the todo Modal
  if (todoFlag) {
    const { todoInfo = {} } = props;
    return (
      <div className="modal">
        <TodoModal
          todoInfo={todoInfo}
          index={index}
          discardTodo={discardModal}
          saveNewTodo={saveNewTodo}
          saveEditTodo={saveEditTodo}
        />
      </div>
    );
  }
  const { projectInfo = {} } = props;
  // display the project modal
  if (projectFlag) {
    return (
      <div className="modal">
        <ProjectModal
          projectInfo={projectInfo}
          discardProject={discardModal}
          saveNewProject={saveNewProject}
          saveEditProject={saveEditProject}
        />
      </div>
    );
  }
  return null;
};

export default Modal;
