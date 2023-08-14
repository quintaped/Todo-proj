import React from "react";
import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { Stack, TextField } from "@mui/material";

export const Todo = (props) => {
  const [value, setValue] = useState("");

  const onChange = (e) => setValue(e.target.value);

  return (
    <div>
      <Stack className="stack" spacing={2} direction="row">
        <input
          className="quest"
          color="primary"
          type="text"
          name="Enter new Todo"
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Stack>
      <Stack className="stack" spacing={2} direction="row">
        <button type="reset">Reset form</button>
      </Stack>
    </div>
  );
};
