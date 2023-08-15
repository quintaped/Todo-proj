import React from "react";
import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { Stack, TextField, ThemeProvider } from "@mui/material";
import { NewToDo } from "./NewTodo";
import { createTheme } from "@mui/material/styles";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DeleteIcon from "@mui/icons-material/Delete";

export const Todo = (props) => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const onClick = (e) => console.log("l");
  const onChange = (e) => setValue(e.target.value.trim());

  const theme = createTheme({
    palette: {
      ochre: {
        main: "wheat",
        contrastText: "#242105",
      },
    },
  });

  const onTodoAdd = async (e) => {
    e.preventDefault();
    // if (value.length === 0) return;
    <p>jj</p>;
    setDisabled(true);
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <form>
          <Stack className="stack" spacing={2} direction="row">
            <TextField
              label="Enter new Todo           "
              onChange={onChange}
              value={value}
              className="quest"
              size="small"
            />
            <Button
              variant="contained"
              color="ochre"
              className="submit"
              type="submit"
              onClick={onClick}
            >
              Submit
            </Button>

            {/* <input
          className="quest"
          id="nameTodo"
          type="text"
          label="Enter new Todo"
          value={value}
        /> */}
          </Stack>
        </form>
        <h5 className="empty">Todo list is empty</h5>
        <form>
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
            >
              <RestartAltIcon />
            </Button>
            <Button
              variant="contained"
              className="reset"
              type="delete"
              size="small"
              disabled={disabled}
              color="ochre"
            >
              <DeleteIcon />
            </Button>
          </Stack>
        </form>
        <p>{value}</p>
      </ThemeProvider>
    </div>
  );
};
