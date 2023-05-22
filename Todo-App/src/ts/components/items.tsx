function Items(props: ControllerInterface) {
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {props.list.map((task) => (
          <li
            key={task.id}
            className={task.completed === true ? "completed" : "active"}
          >
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                defaultChecked={task.completed === true ? true : false}
                onClick={(event) => props.handleCheckClick(event, task.id)}
              />
              <label onClick={(event) => props.handleEditClick(event, task.id)}>
                {task.title}
              </label>
              <button
                className="destroy"
                onClick={(event) => props.handleDestroyClick(event, task.id)}
              ></button>
            </div>
            <input
              className="edit"
              value="Create a TodoMVC template"
              onKeyDown={(event) => props.handleEditKeyPress(event, task.id)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Items;
