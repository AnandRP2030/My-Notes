import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AddTodo } from "./components/addTodo";
import { DisplayTodo } from "./components/displayTodo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> Hello </h1>
      <AddTodo />
      <DisplayTodo />
    </>
  );
}

export default App;
