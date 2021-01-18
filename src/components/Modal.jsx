import React from 'react';
import ProjectModal from './ProjectModal';
import TodoModal from './TodoModal';

const Modal = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { todoFlag, projectFlag } = props;

  if (todoFlag) {
    const { todoInfo = {} } = props;
    return (
      <div className="modal">
        <TodoModal todoInfo={todoInfo} />
      </div>
    );
  }
  if (projectFlag) {
    const { projectInfo = {} } = props;
    return (
      <div className="modal">
        <ProjectModal projectInfo={projectInfo} />
      </div>
    );
  }
  return null;
};

export default Modal;
