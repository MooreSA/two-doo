import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Todolist from './components/Todolist';
import ProjectHandler from './js/ProjectHandler';
import Modal from './components/Modal';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [projectHandler, setProjectHandler] = useState(new ProjectHandler());
  const [activeProjectIndex, setActiveProject] = useState(0);
  const [todoModalFlag, setTodoModalFlag] = useState(false);
  const [projectModalFlag, setProjectModalFlag] = useState(false);

  const addTodo = () => {
    setTodoModalFlag(true);
  };

  const addProject = () => {
    setProjectModalFlag(true);
  };

  const changeProject = (event) => {
    const newIndex = event.target.dataset.projectId;
    setActiveProject(newIndex);
  };

  const editProject = () => {
    // TODO
    // Open a modal
    // change the info of the project
    console.log('Editing the current project!');
  };

  return (
    <div className="page">
      { todoModalFlag ? <Modal todoFlag /> : null }
      { projectModalFlag ? <Modal projectFlag /> : null }
      <Header
        project={projectHandler.projects[activeProjectIndex]}
        editProject={editProject}
      />
      <div className="content">
        <Sidebar
          projects={projectHandler.projects}
          activeIndex={activeProjectIndex}
          changeProject={changeProject}
          addProject={addProject}
        />
        <Todolist
          project={projectHandler.projects[activeProjectIndex]}
          addTodo={addTodo}
        />
      </div>
    </div>
  );
};

export default App;
