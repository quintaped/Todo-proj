import React from "react";
import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import {
  ListItem,
  Stack,
  TextField,
  ThemeProvider,
  Toolbar,
} from "@mui/material";

import { createTheme } from "@mui/material/styles";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import SummarizeIcon from "@mui/icons-material/Summarize";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const Todo = (props) => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [doneTodos, setDoneTodos] = useState([]);
  const [doneTodo, setDoneTodo] = useState(todo);

  const theme = createTheme({
    palette: {
      ochre: {
        main: "wheat",
        contrastText: "#242105",
      },
    },
  });

  const addTodo = (e) => {
    if (todo !== "") {
      setTodo(e.target.value);
      setTodos([...todos, todo]);
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
  const del = () => {
    setDoneTodos([]);
  };
  const todoIsDone = (text, index, id) => {
    const curElem = todos[index];
    doneTodos.push(curElem);
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
    console.log(id[index]);
  };
  const onClick = (text, index) => {
    const curElem = doneTodos[index];
    todos.push(curElem);
    const newTodos = doneTodos.filter((todo) => {
      return todo !== text;
    });
    setDoneTodos(newTodos);
    console.log(curElem);
  };

  const onReset = () => {
    setTodos([]);
    setDoneTodos([]);
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <form>
          <Stack className="stack" spacing={2} direction="row">
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
            <Button
              variant="contained"
              color="ochre"
              type="button"
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
            {todos?.length > 0 || doneTodos?.length > 0 ? (
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
                    onClick={onReset}
                  >
                    <RestartAltIcon />
                  </Button>
                  <Button
                    variant="contained"
                    className="delete"
                    type="button"
                    size="small"
                    onClick={del}
                    color="ochre"
                  >
                    <DeleteIcon />
                  </Button>
                </Stack>
                {todos.map((todo, index, id) => (
                  <div className="td">
                    <p key={index} id="`${index}`" className="todo">
                      <SummarizeIcon className="stick" />
                      {todo}
                      {"    "}

                      <DeleteIcon
                        className="del"
                        type="button"
                        size="small"
                        onClick={() => {
                          deleteTodo(todo);
                        }}
                      />
                      <CheckIcon
                        className="em"
                        type="button"
                        size="small"
                        onClick={(e) => {
                          todoIsDone(todo, index, id);
                        }}
                      />
                    </p>
                  </div>
                ))}
                <>
                  {doneTodos.map((doneTodo, index) => (
                    <div className="td">
                      <p key={index} id="`${index}`" className="Done-todo">
                        <SummarizeIcon className="stick1" />
                        {doneTodo}

                        <CheckIcon
                          className="undo"
                          type="button"
                          onClick={(e) => {
                            onClick(doneTodo, index);
                          }}
                          size="small"
                        />
                      </p>
                    </div>
                  ))}
                </>
              </ul>
            ) : (
              <div>
                <h5 className="empty">Todo list is empty</h5>
              </div>
            )}
          </Stack>
        </form>
      </ThemeProvider>
    </div>
  );
};
