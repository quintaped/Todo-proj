import logo from "./logo.svg";
import "./App.css";

import { Todo } from "./Todo";

function App() {
  return (
    <div className="body">
      <body>
        <p className="p">
          <h3>Todo App</h3>
        </p>
        <form className="add">
          <Todo />
        </form>
      </body>
    </div>
  );
}

export default App;
