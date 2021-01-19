import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Todolist from './components/Todolist';
import Modal from './components/Modal';
import ProjectHandler from './js/ProjectHandler';
import Todo from './js/Todo';

const App = () => {
  // setup all the states
  const [projectHandler, setProjectHandler] = useState(new ProjectHandler());
  const [activeProjectIndex, setActiveProject] = useState(0);
  const [todoModalFlag, setTodoModalFlag] = useState(false);
  const [editTodoFlag, setEditTodoFlag] = useState(false);
  const [projectModalFlag, setProjectModalFlag] = useState(false);
  const [editProjectFlag, setEditProjectFlag] = useState(false);

  // open the todo edit/new modal
  const addTodo = () => setTodoModalFlag(true);
  const editTodo = (index) => {
    const todoInfo = projectHandler.projects[activeProjectIndex].todos[index];
    setEditTodoFlag({ index, todoInfo });
  };

  // open to new project modal
  const addProject = () => setProjectModalFlag(true);
  const editProject = () => setEditProjectFlag(true);

  // stop rendering modals
  const discardModal = () => {
    setTodoModalFlag(false);
    setEditTodoFlag(false);
    setProjectModalFlag(false);
    setEditProjectFlag(false);
  };

  // save a brand new todo in the current project
  const saveNewTodo = (todoInfo) => {
    const { title, desc, dueDate } = todoInfo;
    setProjectHandler(
      projectHandler.addTodo(activeProjectIndex, new Todo({ title, desc, dueDate })),
    );
    discardModal();
  };

  const saveEditTodo = (todoIndex, todoInfo) => {
    const newTodo = new Todo(todoInfo);
    setProjectHandler(
      projectHandler.editTodo(activeProjectIndex, todoIndex, newTodo),
    );
    discardModal();
  };

  // appends the project to the app
  const saveNewProject = (projectInfo) => {
    setProjectHandler(
      projectHandler.appendProject(projectInfo),
    );
    discardModal();
  };

  const saveEditProject = (projectInfo) => {
    setProjectHandler(
      projectHandler.editProject(activeProjectIndex, projectInfo),
    );
    discardModal();
  };

  // swaps the current active project
  const changeProject = (event) => {
    const newIndex = parseInt(event.target.dataset.projectId, 10);
    setActiveProject(newIndex);
  };

  return (
    <div className="page">
      {/* if the todo modal flag, render it */}
      { todoModalFlag
        ? (
          <Modal
            todoFlag
            discardModal={discardModal}
            saveNewTodo={saveNewTodo}
          />
        )
        : null }
      { editTodoFlag
        ? (
          <Modal
            todoFlag
            discardModal={discardModal}
            index={editTodoFlag.index}
            todoInfo={editTodoFlag.todoInfo}
            saveEditTodo={saveEditTodo}
            // TODO
            // todoInfo{todoInfo}
          />
        )
        : null }
      {/* if the projectModalFlag, render the modal */}
      { projectModalFlag
        ? (
          <Modal
            projectFlag
            discardModal={discardModal}
            saveNewProject={saveNewProject}
          />
        )
        : null }
      { editProjectFlag
        ? (
          <Modal
            projectFlag
            discardModal={discardModal}
            saveEditProject={saveEditProject}
            projectInfo={projectHandler.projects[activeProjectIndex]}
          />
        )
        : null}
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
          editTodo={editTodo}
        />
      </div>
    </div>
  );
};

export default App;
