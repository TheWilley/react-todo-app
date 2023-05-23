interface HeaderInterface {
  handleNewKeyPress: ControllerInterface['handleNewKeyPress'];
}

function Header(props: HeaderInterface) {
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        data-testid="task-input"
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onKeyDown={(e) => props.handleNewKeyPress(e)}
      />
    </header>
  );
}

export default Header;
