import { keys } from "../helpers/keys";
import { useState } from "react";
import Items from "../components/items";
import Header from "../components/header";
import Footer from "../components/footer";
import TaskModel from "../models/model";

// Create model outside controller to keep tasks, as it otherwise just would create a new instance every update
const taskModel = new TaskModel();

// Controller to handle GUI interaction
function Controller() {
  // State to handle the tasks
  const [taskState, setTaskState] = useState<taskModel[]>([]);
  const [viewState, setViewState] = useState<view_states>("");
  const [pageLoaded, setPageLoaded] = useState(false);

  /**
   * Triggers when the enter key is clicked inside "new todo" input
   * @param event The keyboard event
   */
  const handleNewKeyPress: ControllerInterface["handleNewKeyPress"] = (
    event
  ) => {
    // keyCode is depricated but used per assigment requirements
    if (event.keyCode != keys.ENTER_KEY) return;

    // Get task title
    let task = event.target as HTMLInputElement;

    // If task title is not undefined, add it
    if (task.value != "") {
      taskModel.addTask({
        title: task.value.trim(),
        completed: false,
        id: Math.random() * 9999999,
        editing: false,
        show: true,
      });
      task.value = "";
    }

    updateComps();
  };

  const handleEditKeyPress: ControllerInterface["handleEditKeyPress"] = (
    event,
    task_id
  ) => {
    if (event.keyCode == keys.ENTER_KEY) {
      // Get task title
      let task = event.target as HTMLInputElement;

      // If task title is not undefined, add it
      if (task.value != "") {
        taskModel.updateTitle(task_id, task.value);
        taskModel.updateEditStatus(task_id);
      }
    } else if (event.keyCode == keys.ESC_KEY) {
      taskModel.updateEditStatus(task_id);
    }

    updateComps();
  };

  const handleCheckClick: ControllerInterface["handleCheckClick"] = (
    _event,
    task_id
  ) => {
    taskModel.updateState(task_id);

    updateComps();
  };

  const handleDestroyClick: ControllerInterface["handleDestroyClick"] = (
    _event,
    task_id
  ) => {
    taskModel.destroyTask(task_id);

    updateComps();
  };

  const handleEditClick: ControllerInterface["handleEditClick"] = (
    event,
    task_id
  ) => {
    if (event.detail == 2) {
      taskModel.updateEditStatus(task_id);
    }

    updateComps();
  };

  const handleClearCompleted: ControllerInterface["handleClearCompleted"] =
    () => {
      taskModel.clearCompleted();

      updateComps();
    };

  const handleRouter: ControllerInterface["handleRouter"] = (_event, path) => {
    taskModel.setActiveView(path);

    updateComps();
  };

  const handleToggleAll: ControllerInterface["handleToggleAll"] = () => {
    taskModel.toggleAll();

    updateComps();
  };

  const updateComps = () => {
    localStorage.setItem("tasks", JSON.stringify([...taskModel.getTasks()]));

    setTaskState([...taskModel.getTasks()]);
    setViewState(taskModel.getActiveView());
  };

  // When page first loads, update the list to reflect local storage
  if (!pageLoaded) {
    updateComps();

    setPageLoaded(true);
  }

  return (
    <>
      <Header handleNewKeyPress={handleNewKeyPress} />
      {taskState.length > 0 && (
        <>
          <Items
            list={taskState}
            handleEditClick={handleEditClick}
            handleDestroyClick={handleDestroyClick}
            handleCheckClick={handleCheckClick}
            handleEditKeyPress={handleEditKeyPress}
            handleToggleAll={handleToggleAll}
          />
          <Footer
            view_state={viewState}
            all_items_completed={
              taskState.filter((item) => item.completed == true).length > 0
            }
            items_left={
              taskState.filter((item) => item.completed == false).length
            }
            handleClearCompleted={handleClearCompleted}
            handleRouter={handleRouter}
          />
        </>
      )}
    </>
  );
}

export default Controller;
