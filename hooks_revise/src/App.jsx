import React, { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState();

  return (
    <div>
      <input
        type="text"
        placeholder="type something................!"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
      />
      <p>you typed : <strong>{inputValue}</strong> </p>
    </div>
  );
};

export default App;
