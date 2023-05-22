import { KeyboardEvent } from "react";

function Header({
  handleNewKeyPress,
}: {
  handleNewKeyPress: (event: KeyboardEvent) => void;
}) {
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onKeyDown={(e) => handleNewKeyPress(e)}
      />
    </header>
  );
}

export default Header;
