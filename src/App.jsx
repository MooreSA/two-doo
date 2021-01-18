import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Todolist from './components/Todolist';
import TodoModal from './components/TodoModal';
import ProjectHandler from './js/ProjectHandler';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [projectHandler, setProjectHandler] = useState(new ProjectHandler());
  // eslint-disable-next-line no-unused-vars
  const [activeProjectIndex, setActiveProject] = useState(0);
  const [todoModalFlag, setTodoModalFlag] = useState(false);

  const addTodo = () => {
    setTodoModalFlag(true);
  };

  // TODO
  // const addProject = () => {
  //   // Open a modal
  //   // Take info for new project
  // };

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
      {todoModalFlag ? <TodoModal /> : null}
      <Header
        project={projectHandler.projects[activeProjectIndex]}
        editProject={editProject}
      />
      <div className="content">
        <Sidebar
          projects={projectHandler.projects}
          activeIndex={activeProjectIndex}
          changeProject={changeProject}
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
