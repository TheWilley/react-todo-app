interface InformationInterface {
    author: string, 
    github_link: string
}

function Info({author, github_link}: InformationInterface) {
    return (
        <footer className="info">
            <p>Double-click to edit a todo</p>
            <p>Created by <a href={github_link}>{author}</a></p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
    );
}

export default Info;