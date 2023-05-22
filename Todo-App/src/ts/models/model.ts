class Model {
  private tasks: taskModel[] = [];

  constructor() {
    this.tasks = [];
  }

  addTask(e: taskModel) {
    this.tasks.push(e);
  }

  getTasks() {
    return this.tasks;
  }
}

export default Model;
