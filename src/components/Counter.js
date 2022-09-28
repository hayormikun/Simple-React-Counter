import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <p>Current count is <strong>{counter}</strong></p>
      <button className="btn"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click to increase counter by 1
      </button>

      <button className="btn"
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset counter
      </button>
    </>
  );
};

export default Counter;
