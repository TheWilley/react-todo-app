import { KeyboardEvent } from "react";

interface HeaderInterface {
  handleNewKeyPress: (event: KeyboardEvent) => void;
}

function Header(props: HeaderInterface) {
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onKeyDown={(e) => props.handleNewKeyPress(e)}
      />
    </header>
  );
}

export default Header;
