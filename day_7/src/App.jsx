import React, { useInsertionEffect, useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);

  function increse() {
    setnum(num + 1);
  }

  function decrese() {
    setnum(num - 1);
  }

  function jump() {
    setnum(num + 5);
  }
  function clear() {
    setnum(0);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-6">Counter</h1>

        <h2 className="text-6xl font-bold text-blue-600 mb-8">{num}</h2>

        <div className="flex gap-4 justify-center">
          <button
            onClick={decrese}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
          >
            -
          </button>

          <button
            onClick={increse}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
          >
            +
          </button>

          <button
            onClick={jump}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg"
          >
            jump by 5
          </button>
          <button
            onClick={clear}
            className="bg-blue-500 hover:bg-bluex-600 text-white px-6 py-2 rounded-lg"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
