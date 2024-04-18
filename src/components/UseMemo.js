// UseMemo.js
import React, { useMemo } from "react";

const UseMemo = () => {
  // Memoized value for expensive calculation
  const memoizedValue = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result;
  }, []);

  return (
    <div>
      <h2>useMemo Demo</h2>
      <p>Memoized Value: {memoizedValue}</p>
    </div>
  );
};

export default UseMemo;
