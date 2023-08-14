import logo from "./logo.svg";
import "./App.css";
import { NewToDo } from "./NewTodo";
import { Todo } from "./Todo";

function App() {
  return (
    <div className="body">
      <header>Todo App</header>
      <body>
        <form className="add">
          <Todo />
        </form>
        <NewToDo></NewToDo>
      </body>
    </div>
  );
}

export default App;
