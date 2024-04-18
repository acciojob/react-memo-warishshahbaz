{
  /* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */
}
// App.js
import React, { useState, useEffect } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState("");

  useEffect(() => {
    // Fetch todos from localStorage or initialize empty array
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    // Update localStorage when todos change
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleCustomTaskChange = (e) => {
    setCustomTask(e.target.value);
  };

  const submitCustomTask = () => {
    if (customTask.length > 5) {
      setTodos([...todos, customTask]);
      setCustomTask("");
    } else {
      alert("Custom task must be more than 5 characters.");
    }
  };

  return (
    <div id="main">
      <h1>Task Manager</h1>
      <button id="add-todo-btn" onClick={addTodo}>
        Add Todo
      </button>
      <button id="incr-cnt" onClick={incrementCounter}>
        {counter}
      </button>
      <UseMemo />
      <ReactMemo />
      <input
        type="text"
        id="skill-input"
        value={customTask}
        onChange={handleCustomTaskChange}
        placeholder="Enter custom task (more than 5 characters)"
      />
      <button id="skill-btn" onClick={submitCustomTask}>
        Submit
      </button>
      <ul id="item-jumbotron">
        {todos.map((todo, index) => (
          <li id={`todo-${index}`} key={index}>
            {todo}
          </li>
        ))}
      </ul>
      <p id="calc">Counter: {counter}</p>
    </div>
  );
};

export default App;
