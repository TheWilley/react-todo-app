class Model {
  private tasks: taskModel[] = [];
  private active_view: view_states = ""

  constructor() {
    this.tasks = [];

    this.checkActiveView()
    this.checkLocalStorage()
  }

  /**
   * Changes the view
   * @param view The target view
   */
  setActiveView(view: view_states) {
    this.active_view = view

    this.checkActiveView()
  }

  /**
   * Returns the active view
   * @returns The active view
   */
  getActiveView() {
    return this.active_view
  }

  /**
   * Filters all tasks by view option
   */
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
      }
    }
  }

  /**
   * Checks if there are any items in local storage and assigns them to the task list array if there are
   */
  checkLocalStorage() {
    if (localStorage.getItem("tasks")) {
      this.tasks = JSON.parse(localStorage.getItem("tasks")!)
    }
  }

  /**
   * Adds a task
   * @param e The task
   */
  addTask(e: taskModel) {
    this.tasks.push(e);
  }

  /**
   * Returns all tasks
   * @returns All tasks
   */
  getTasks() {
    return this.tasks;
  }

  /**
   * Updates the state (i.e., checked or not) of a task 
   * @param id The id of the task
   */
  updateState(id: number) {
    let task = this.tasks.filter(item => item.id === id)[0]
    task.completed = task.completed == true ? false : true
  }

  /**
   * Updates the edit status (i.e., to show or hide edit input) of a task
   * @param id The id of the task
   */
  updateEditStatus(id: number) {
    let task = this.tasks.filter(item => item.id === id)[0]
    task.editing = task.editing == true ? false : true
  }

  /**
   * Updates the title of a task
   * @param id TThe id of the task
   * @param value The new title
   */
  updateTitle(id: number, value: string) {
    let task = this.tasks.filter(item => item.id === id)[0]
    task.title = value
  }

  /**
   * Removes a task
   * @param id The id of the task
   */
  destroyTask(id: number) {
    this.tasks.splice(this.tasks.findIndex(task => task.id === id), 1)
  }

  /**
   * Removes all completed tasks
   */
  clearCompleted() {
    for (let i = this.tasks.length - 1; i >= 0; i--) {
      console.log(this.tasks[i]);
      if (this.tasks[i].completed) {
        this.tasks.splice(i, 1);
      }
    }
  }

  /**
   * Toggles all tasks as completed or uncompleted
   */
  toggleAll() {
    let allCompleted = true

    // Check if all items are completed
    for (const item of this.tasks) {
      if (!item.completed) {
        allCompleted = false
      }
    }

    // Make all items uncompleted if all are completed
    if (allCompleted) {
      for (const item of this.tasks) {
        item.completed = false
      }
    }
    // Make those uncompleted completed if all is not completed
    else {
      for (const item of this.tasks) {
        if (!item.completed) {
          item.completed = true
        }
      }
    }
  }
}

export default Model;
