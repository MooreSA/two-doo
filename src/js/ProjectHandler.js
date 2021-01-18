import Project from './Project';

class ProjectHandler {
  constructor(projects = [new Project()]) {
    this.projects = projects;
  }

  appendProject(newProject = (new Project())) {
    this.projects.push(newProject);
    return new ProjectHandler(this.projects);
  }

  deleteProject(projectIndex) {
    if (projectIndex === undefined) {
      throw new Error('Undefined Project Index');
    }
    // have to do this in two lines because
    // splice will return the spliced out element
    this.projects.splice(projectIndex, 1);
    return new ProjectHandler(this.projects);
  }

  addTodo(projectIndex, newTodo) {
    const newProject = this.projects[projectIndex].addTodo(newTodo);
    this.projects.splice(projectIndex, 1, newProject);
    return new ProjectHandler(this.projects);
  }

  removeTodo(projectIndex, todoIndex) {
    const newProject = this.projects[projectIndex].deleteTodo(todoIndex);
    this.projects.splice(projectIndex, 1, newProject);
    return new ProjectHandler(this.projects);
  }

  editTodo(projectIndex, todoIndex, newTodo) {
    const newProject = this.projects[projectIndex].editTodo(todoIndex, newTodo);
    this.projects.splice(projectIndex, 1, newProject);
    return new ProjectHandler(this.projects);
  }
}

export default ProjectHandler;
