import { BrowserRouter as Router, Link } from 'react-router-dom';

interface FooterInterface {
  view_state: view_states;
  items_left: number;
  all_items_completed: boolean;
  handleClearCompleted: ControllerInterface['handleClearCompleted'];
  handleRouter: ControllerInterface['handleRouter'];
}

function Footer(props: FooterInterface) {
  return (
    <Router>
      <footer className="footer">
        <span className="todo-count">
          <strong>{props.items_left}</strong> item left
        </span>
        <ul className="filters">
          <li>
            <Link
              className={props.view_state == 'all' ? 'selected' : ''}
              to="#/"
              onClick={(event) => props.handleRouter(event, 'all')}
            >
              All
            </Link>
          </li>
          <li>
            <Link
              to="#/active"
              onClick={(event) => props.handleRouter(event, 'active')}
              className={props.view_state == 'active' ? 'selected' : ''}
            >
              Active
            </Link>
          </li>
          <li>
            <Link
              to="#/completed"
              onClick={(event) => props.handleRouter(event, 'completed')}
              className={props.view_state == 'completed' ? 'selected' : ''}
            >
              Completed
            </Link>
          </li>
        </ul>
        <button
          className={`clear-completed ${props.all_items_completed ? '' : 'hidden'}`}
          onClick={props.handleClearCompleted}
        >
          Clear completed
        </button>
      </footer>
    </Router>
  );
}

export default Footer;
