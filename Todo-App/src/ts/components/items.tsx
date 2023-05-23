interface ItemsInterface {
  list: taskModel[];
  handleCheckClick: ControllerInterface['handleCheckClick'];
  handleEditClick: ControllerInterface['handleEditClick'];
  handleDestroyClick: ControllerInterface['handleDestroyClick'];
  handleEditKeyPress: ControllerInterface['handleEditKeyPress'];
  handleToggleAll: ControllerInterface['handleToggleAll'];
}

function Items(props: ItemsInterface) {
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all" onClick={(event) => props.handleToggleAll(event)}>
        Mark all as complete
      </label>
      <ul className="todo-list">
        {props.list.map((task) => (
          <li
            key={task.id}
            className={`${task.completed === true ? 'completed' : 'active'} ${
              task.editing === true && 'editing'
            } ${task.show === false && 'hidden'}`}
          >
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                defaultChecked={task.completed === true ? true : false}
                onClick={(event) => props.handleCheckClick(event, task.id)}
                checked={task.completed}
              />
              <label onClick={(event) => props.handleEditClick(event, task.id)}>{task.title}</label>
              <button
                className="destroy"
                onClick={(event) => props.handleDestroyClick(event, task.id)}
              ></button>
            </div>
            <input
              className="edit"
              defaultValue={task.title}
              onKeyDown={(event) => props.handleEditKeyPress(event, task.id)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Items;
