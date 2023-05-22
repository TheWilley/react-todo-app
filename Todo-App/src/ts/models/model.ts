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
    let task = this.tasks.filter(item => item.id === id)[0]
    task.completed = task.completed == true ? false : true
  }

  updateEditStatus(id: number) {
    let task = this.tasks.filter(item => item.id === id)[0]
    task.editing = task.editing == true ? false : true
  }

  updateTitle(id: number, value: string) {
    let task = this.tasks.filter(item => item.id === id)[0]
    task.title = value
  }

  destroyTask(id: number) {
    this.tasks.splice(this.tasks.findIndex(task => task.id === id), 1)
  }

  clearCompleted() {
    for (let i = this.tasks.length - 1; i >= 0; i--) {
      console.log(this.tasks[i]);
      if (this.tasks[i].completed) {
        this.tasks.splice(i, 1);
      }
    }
  }
}

export default Model;
