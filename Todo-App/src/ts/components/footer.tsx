interface FooterInterface {
  items_left: number;
  handleClearCompleted: ControllerInterface["handleClearCompleted"];
}

function Footer(props: FooterInterface) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{props.items_left}</strong> item left
      </span>
      <ul className="filters">
        <li>
          <a className="selected" href="#/">
            All
          </a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button className="clear-completed" onClick={props.handleClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
