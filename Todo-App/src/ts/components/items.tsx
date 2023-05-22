import { KeyboardEventHandler, useState } from "react";
import { MouseEventHandler } from "react";

interface ItemsInterface {
  list: taskModel[];
  handleCheckClick: MouseEventHandler;
  handleEditClick: MouseEventHandler;
  handleDestroyClick: MouseEventHandler;
  handleEditKeyPress: KeyboardEventHandler;
}

function Items(props: ItemsInterface) {
  const [completed, updateCompleted] = useState(0);
  const [title, updateTitle] = useState("");

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {props.list.map((task, index) => (
          <li key={index} className={completed === 1 ? "completed" : "active"}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                defaultChecked={completed === 1 ? true : false}
                onClick={props.handleCheckClick}
              />
              <label onClick={props.handleEditClick}>{task.title}</label>
              <button
                className="destroy"
                onClick={props.handleDestroyClick}
              ></button>
            </div>
            <input
              className="edit"
              value="Create a TodoMVC template"
              onKeyDown={props.handleEditKeyPress}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Items;
