import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <p>Current count is {counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click to increase counter by 1
      </button>
    </>
  );
};

export default Counter;
