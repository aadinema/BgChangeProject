import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  return (
    <div
      className="h-screen w-full flex justify-center relative"
      style={{ backgroundColor: color }}
    >
      <div className="w-1/2 h-16 bg-slate-800 rounded-2xl absolute top-10 flex items-center gap-5 justify-center flex-wrap ">
        <button
          onClick={() => setColor("rgb(255 237 213)")}
          className="bg-orange-100 w-16 h-10 rounded-3xl "
        >
          orange
        </button>
        <button
          onClick={() => setColor("blue")}
          className="bg-blue-500 w-16 h-10 rounded-3xl "
        >
          blue
        </button>
        <button
          onClick={() => setColor("purple")}
          className="bg-purple-500 w-16 h-10 rounded-3xl "
        >
          purple
        </button>
        <button
          onClick={() => setColor("orange")}
          className="bg-orange-500 w-16 h-10 rounded-3xl "
        >
          yellow
        </button>
      </div>
    </div>
  );
}

export default App;
