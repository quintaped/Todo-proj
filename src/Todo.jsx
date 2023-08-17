import React from "react";
import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { ListItem, Stack, TextField, ThemeProvider } from "@mui/material";
import { NewToDo } from "./NewTodo";
import { createTheme } from "@mui/material/styles";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import SummarizeIcon from "@mui/icons-material/Summarize";
import CheckIcon from "@mui/icons-material/Check";

export const Todo = (props) => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [disabled, setDisabled] = useState(true);
  const onClick = (e) => console.log("l");
  const { defaultValue = "" } = props;
  const [value, setValue] = useState(defaultValue);
  const onChange = (e) => setValue(e.target.value);

  const theme = createTheme({
    palette: {
      ochre: {
        main: "wheat",
        contrastText: "#242105",
      },
    },
  });

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    } else {
      alert("enter ToDo name!");
    }
  };
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };
  const todoIsDone = () => {
    const isDoneTodo = todos.filter((todo, index) => {
      return console.log("dd");
    });
    setTodos(isDoneTodo);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <form>
          <Stack className="stack" spacing={2} direction="row">
            <div className="input-wrapper">
              <input
                type="text"
                name="todo"
                className="newTodo"
                value={todo}
                placeholder="Create a new todo"
                onChange={(e) => {
                  setTodo(e.target.value);
                }}
              />{" "}
            </div>
            <Button
              variant="contained"
              color="ochre"
              className="submit"
              onClick={addTodo}
            >
              Submit
            </Button>
          </Stack>
        </form>

        <form>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {todos?.length > 0 ? (
              <ul className="todo-list">
                <Stack
                  className="stack-res"
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={4}
                >
                  <Button
                    color="ochre"
                    className="reset"
                    type="reset"
                    size="small"
                    variant="contained"
                    onClick={onreset}
                  >
                    <RestartAltIcon />
                  </Button>
                  <Button
                    variant="contained"
                    className="reset"
                    type="delete"
                    size="small"
                    onClick={deleteTodo}
                    color="ochre"
                  >
                    <DeleteIcon />
                  </Button>
                </Stack>
                {todos.map((todo, index) => (
                  <div className="todo">
                    <p key={index} id="myTodo">
                      <SummarizeIcon className="stick" />
                      {todo}
                      {"    "}
                      <Button
                        cclassName="em"
                        type="delete"
                        size="small"
                        onClick={() => {
                          deleteTodo(todo);
                        }}
                      >
                        <DeleteIcon />
                      </Button>
                      <Button
                        cclassName="em"
                        size="small"
                        onClick={() => {
                          todoIsDone(todo);
                        }}
                      >
                        <CheckIcon />
                      </Button>
                    </p>
                  </div>
                ))}
              </ul>
            ) : (
              <div>
                <h5 className="empty">Todo list is empty</h5>
              </div>
            )}
          </Stack>
        </form>
        <p>{value}</p>
      </ThemeProvider>
    </div>
  );
};
