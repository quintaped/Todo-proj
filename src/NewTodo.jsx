import React from "react";
import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { ListItem, Stack, TextField, ThemeProvider } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import SummarizeIcon from "@mui/icons-material/Summarize";
import CheckIcon from "@mui/icons-material/Check";

export const NewToDo = ({ todos, remove }) => {
  return (
    <div>
      <form>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {todos?.length > 0 ? (
            <ul className="todo-list">
              {todos.map((todo, index) => (
                <div className="todo">
                  <SummarizeIcon className="stick" />
                  <p key={index} id="myTodo">
                    {todo}
                    {/* {"    "} */}
                  </p>
                  <Stack spacing={1} justifyContent="flex-end">
                    <Button
                      size="small"
                      onClick={() => {
                        remove(todo);
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                    {/* <Button
                        size="small"
                        onClick={() => {
                          todoIsDone(todo);
                        }}
                      >
                        <CheckIcon className="em" />
                      </Button> */}
                  </Stack>
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
    </div>
  );
};
