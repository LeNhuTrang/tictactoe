import React from "react";
import { useState } from "react";
import Board from "./components/Board";

function App() {
  const [board, setBoard] = useState([]);
  return (
    <div className="container">
      <Board />
     
    </div>
  );
}

export default App;
