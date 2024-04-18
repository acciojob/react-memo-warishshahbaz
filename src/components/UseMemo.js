// UseMemo.js
import React, { useMemo } from "react";

const UseMemo = () => {
  // Memoized value for expensive calculation
  const memoizedValue = useMemo(() => {
    let result = 0;
    for (let i = 0; i <= 1000000000; i++) {
      result += i; // Accumulate the sum
    }
    return result;
  }, []);
  // /1000000000
  return (
    <div id="add-todo-btn">
      <h2>useMemo Demo</h2>
      <p id="calc">{memoizedValue}</p>
    </div>
  );
};

export default UseMemo;
