interface InformationInterface {
  author: string;
  github_link: string;
}

function Info(props: InformationInterface) {
  return (
    <footer className="info">
      <p>Double-click to edit a todo</p>
      <p>
        Created by <a href={props.github_link}>{props.author}</a>
      </p>
      <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
  );
}

export default Info;
