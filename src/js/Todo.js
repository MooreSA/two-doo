import moment from 'moment';

class Todo {
  constructor(props) {
    // todo will store the unformatted datetime object
    if (!props) {
      this.active = true;
      this.title = 'New Todo';
      this.desc = 'Todo Description';
      this.dueDate = moment();
      return;
    }
    const {
      active = true, title = 'New Todo', desc = 'Todo Description', dueDate = moment(),
    } = props;
    this.active = active;
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
  }
}

export default Todo;
