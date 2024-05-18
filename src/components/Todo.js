import React from "react";

let Todo = (props) => {
  function adddata() {
    props.set([...props.arr, "New Todo"]);
  }
  return (
    <div>
      <div className="cont">
        <h1>My Todos</h1>
        {props.arr.map((element, index) => {
          return <div id={"todo-" + index}>{element}</div>;
        })}
      </div>
      <button onClick={adddata} id="add-todo-btn">
        Add Todo
      </button>
    </div>
  );
};
export default Todo;
