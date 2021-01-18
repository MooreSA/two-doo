class Project {
  constructor(args = {}) {
    const {
      todos = [], title = 'Project', desc = 'Project Description',
    } = args;
    this.todos = todos;
    this.title = title;
    this.desc = desc;
  }

  addTodo(todo) {
    this.todos.push(todo);
    return new Project({
      todos: this.todos, title: this.title, desc: this.desc,
    });
  }

  editTodo(todoIndex, newTodo) {
    this.todos[todoIndex] = newTodo;
    return new Project({
      todos: this.todos, title: this.title, desc: this.desc,
    });
  }

  editTitle(newTitle) {
    return new Project({
      todos: this.todos, title: newTitle, desc: this.desc,
    });
  }

  editDesc(newDesc) {
    return new Project({
      todos: this.todos, title: this.title, desc: newDesc,
    });
  }

  deleteTodo(todoIndex) {
    this.todos.splice(todoIndex, 1);
    return new Project({
      todos: this.todos, title: this.title, desc: this.desc,
    });
  }
}

export default Project;
