// ReactMemo.js
import React from "react";

const ReactMemo = ({ counter }) => {
  return (
    <div>
      <h2>React.memo Demo</h2>
      <p>Counter value: {counter}</p>
    </div>
  );
};

export default React.memo(ReactMemo);
