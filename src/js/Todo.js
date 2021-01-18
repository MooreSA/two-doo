class Todo {
  constructor(props) {
    if (!props) {
      this.active = true;
      this.title = 'New Todo';
      this.desc = 'Todo Description';
      this.dueDate = new Date().toLocaleDateString();
      return;
    }
    const {
      active = true, title = 'New Todo', desc = 'Todo Description', dueDate = new Date(),
    } = props;
    this.active = active;
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate.toLocaleDateString();
  }
}

export default Todo;
