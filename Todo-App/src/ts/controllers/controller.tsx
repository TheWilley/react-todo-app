import { keys } from "../helpers/keys";
import { KeyboardEventHandler, MouseEventHandler, useState } from "react";
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

  /**
   * Triggers when the enter key is clicked inside "new todo" input
   * @param event The keyboard event
   */
  const handleNewKeyPress: KeyboardEventHandler = (event) => {
    // keyCode is depricated but used per assigment requirements
    if (event.keyCode != keys.ENTER_KEY) return;

    // Get task title
    let task = event.target as HTMLInputElement;

    // If task title is not undefined, add it
    if (task.value != "") {
      taskModel.addTask({
        title: task.value.trim(),
        completed: false,
        id: taskState.length,
      });
      task.value = "";
    }

    updateTasks();
  };

  const handleEditKeyPress: ControllerInterface["handleEditKeyPress"] = (
    event,
    task_id
  ) => {
    console.log("Handling edit key");
  };

  const handleCheckClick: ControllerInterface["handleCheckClick"] = (
    _event,
    task_id
  ) => {
    taskModel.updateState(task_id);

    updateTasks();
  };

  const handleDestroyClick: ControllerInterface["handleDestroyClick"] = (
    _event,
    task_id
  ) => {
    taskModel.destroyTask(task_id);

    updateTasks();
  };

  const handleEditClick: ControllerInterface["handleEditClick"] = (
    event,
    task_id
  ) => {
    if (event.detail == 2) {
      console.log("Editing item");
    }
  };

  const updateTasks = () => {
    setTaskState([...taskModel.getTasks()]);
  };

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
          />
          <Footer
            items_left={
              taskState.filter((item) => item.completed == false).length
            }
          />
        </>
      )}
    </>
  );
}

export default Controller;
