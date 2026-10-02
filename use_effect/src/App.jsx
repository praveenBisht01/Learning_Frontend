import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);
  const [num2, setnum2] = useState(0);

  useEffect(function () {
    console.log("use effect is running");
  }, [num]);

  return (
    <div>
      <h1> valus of num is {num} </h1>
      <h1> valus of num is {num2} </h1>

      <button
        onClick={() => {
          setnum(num + 1);
        }}

        onMouseEnter={() => {
          setnum2(num2+10)
        }}

      >
        click
      </button>
    </div>
  );
};

export default App;
