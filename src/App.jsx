import React, { useState, useEffect } from 'react';
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

  const deleteTodo = (todoIndex) => {
    setProjectHandler(
      projectHandler.removeTodo(activeProjectIndex, todoIndex),
    );
    // discardModal();
  };

  // appends the project to the app
  const saveNewProject = (projectInfo) => {
    setProjectHandler(
      projectHandler.appendProject(projectInfo),
    );
    // discardModal();
  };

  const saveEditProject = (projectInfo) => {
    setProjectHandler(
      projectHandler.editProject(activeProjectIndex, projectInfo),
    );
    // discardModal();
  };

  const deleteProject = () => {
    if (projectHandler.projects.length > 1) {
      setProjectHandler(projectHandler.deleteProject(activeProjectIndex));
      setActiveProject(0);
    }
    // discardModal();
  };

  // swaps the current active project
  const changeProject = (event) => {
    const newIndex = parseInt(event.target.dataset.projectId, 10);
    setActiveProject(newIndex);
  };

  useEffect(() => {
    discardModal();
  }, [projectHandler]);

  useEffect(() => {
    const modalListener = (event) => {
      if (event.keyCode === 27) {
        discardModal();
      }
    };

    if (todoModalFlag || editTodoFlag || projectModalFlag || editProjectFlag) {
      window.addEventListener('keydown', modalListener);
    } else {
      window.removeEventListener('keydown', modalListener);
    }
  }, [todoModalFlag, editTodoFlag, projectModalFlag, editProjectFlag]);

  return (
    <div className="page">
      {/* if the todo modal flag, render it */}
      { todoModalFlag
        ? (
          <Modal
            todoFunctions={{ saveNewTodo, discardModal }}
            discardModal={discardModal}
          />
        )
        : null }
      { editTodoFlag
        ? (
          <Modal
            todoFunctions={{ saveEditTodo, deleteTodo, discardModal }}
            index={editTodoFlag.index}
            todoInfo={editTodoFlag.todoInfo}
          />
        )
        : null }
      {/* if the projectModalFlag, render the modal */}
      { projectModalFlag
        ? (
          <Modal
            projectFunctions={{ saveNewProject, discardModal }}
          />
        )
        : null }
      { editProjectFlag
        ? (
          <Modal
            projectFunctions={{ saveEditProject, deleteProject, discardModal }}
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
          saveEditTodo={saveEditTodo}
        />
      </div>
      <footer className="footer">
        Copyright © Seamus Moore 2021
      </footer>
    </div>
  );
};

export default App;
