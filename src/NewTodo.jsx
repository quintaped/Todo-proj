import React from "react";
import { useState } from "react";

export const NewToDo = (props) => {
  const value = props;
  const [list, setNewList] = useState([""]);

  return <div>{/* <h1>{value}</h1> */}</div>;
};
