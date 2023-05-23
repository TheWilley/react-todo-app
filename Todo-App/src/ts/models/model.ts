class Model {
  private tasks: taskModel[] = [];
  private active_view: view_states = ""

  constructor() {
    this.tasks = [];

    this.checkActiveView()
  }

  setActiveView(view: view_states) {
    this.active_view = view

    this.checkActiveView()
  }

  getActiveView() {
    return this.active_view
  }

  checkActiveView() {
    // Only if it's the first time the user enters (reload page)
    if (this.active_view == "") {
      // Get url
      const url = window.location.hash

      // Check which one to render
      if (url.includes("active")) {
        this.active_view = "active"
      } else if (url.includes("completed")) {
        this.active_view = "completed"
      } else {
        this.active_view = "all"
      }
    } else {
      // Filter tasks
      for (let task of this.tasks) {
        if (this.active_view == "all") {
          task.show = true
        } else if (this.active_view == "active") {
          if (task.completed == false) {
            task.show = true
          } else {
            task.show = false
          }
        } else if (this.active_view == "completed") {
          if (task.completed == true) {
            task.show = true
          } else {
            console.log(task)
            task.show = false
          }
        }
        window.location.hash
      }
    }
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
