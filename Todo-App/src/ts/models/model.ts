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

  updateState(id: number) {
    console.log(id)
    const task = this.tasks.filter(item => item.id == id)[0]
    task.completed = task.completed == true ? false : true
  }

  destroyTask(id: number) {
    this.tasks.splice(this.tasks.findIndex(task => task.id == id), 1)
  }
}

export default Model;
