import React from "react";
import { useState } from "react";

function App() {
  const [isPassword, setIsPassword] = useState(true);
  return (
    <div className="bg-fuchsia-400 h-screen w-screen flex justify-center items-center rounded">
      <div className="bg-blue-300 p-2 rounded shadow-lg ">
        <input
          type={isPassword ? "password" : "text"}
          placeholder="Enter your password"
        />
        <span
          onClick={() => setIsPassword(!isPassword)}
          className="cursor-pointer"
        >
          {isPassword ? "show" : "hide"}
        </span>
      </div>
    </div>
  );
}

export default App;
