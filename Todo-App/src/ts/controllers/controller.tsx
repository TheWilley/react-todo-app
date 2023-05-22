import { keys } from "../helpers/keys";
import {
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEventHandler,
  useState,
} from "react";
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
  const handleNewKeyPress = (event: KeyboardEvent) => {
    // keyCode is depricated but used per assigment requirements
    if (event.keyCode != keys.ENTER_KEY) return;

    // Get task title
    const task_title = (event.target as HTMLInputElement).value.trim();

    // If task title is not undefined, add it
    if (task_title != undefined) {
      taskModel.addTask({ title: task_title, completed: false });
    }

    updateTasks();
  };

  const handleEditKeyPress: KeyboardEventHandler = (event) => {
    console.log("Handling edit key");
  };

  const handleCheckClick: MouseEventHandler = (event) => {
    console.log("Handling click");
  };

  const handleDestroyClick: MouseEventHandler = (event) => {
    console.log("Handling destroy click");
  };

  const handleEditClick: MouseEventHandler = (event) => {
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
      <Items
        list={taskState}
        handleEditClick={(event) => handleEditClick(event)}
        handleDestroyClick={(event) => handleDestroyClick(event)}
        handleCheckClick={(event) => handleCheckClick(event)}
        handleEditKeyPress={(event) => handleEditKeyPress(event)}
      />
      <Footer
        items_left={taskState.filter((item) => item.completed == false).length}
      />
    </>
  );
}

export default Controller;
