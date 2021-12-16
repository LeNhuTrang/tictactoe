import React, { useState } from "react";
import Countdown from "../CountDown";
import Square from "../Square";

const Board = (props) => {
  const [square, setSquare] = useState(Array(25).fill(null));
  const [x, setX] = useState(true);
  const [restart, setRestart] = useState(true);

  const renderSquare = (i) => {
    return <Square i={i} value={square[i]} handleClick={handleClick} />;
  };

  const handleClick = (i) => {
    let cloneSquare = [...square];
    if (cloneSquare[i]) return;
    cloneSquare[i] = x ? "x" : "o";
    setX(!x);
    setSquare(cloneSquare);
  };

  const checkWinner = (playingSquares) => {
    const winningLines = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
      [0, 5, 10, 15, 20],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
      [0, 6, 12, 18, 24],
      [4, 8, 12, 16, 20],
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c, d, e] = winningLines[i];

      if (
        playingSquares[a] &&
        playingSquares[a] === playingSquares[b] &&
        playingSquares[b] === playingSquares[c] &&
        playingSquares[c] === playingSquares[d] &&
        playingSquares[d] === playingSquares[e]
      ) {
        return playingSquares[a];
      }
    }
    return null;
  };

  //array of unfullfilled squares:
  let checkComplete = square.filter((item) => item === null);
  const winner = checkWinner(square);
  let status;

  //logic to end game:
  if (winner) {
    status = (
      <div>
        Congrats{" "}
        <span style={{ textTransform: "uppercase", color: "blue" }}>
          {winner}
        </span>{" "}
        ! You won this game
      </div>
    );
  } else if (!checkComplete.length && !winner) { //fully filled yet no winner
    status = "Awww! No winner!";
    setTimeout(() => {
      setSquare(Array(25).fill(null));
      setRestart(true);
    }, 1000);
  } else {
    status = (
      <div>
        Next player:
        <span style={{ fontSize: 20 }}>{x ? " X" : " O"}</span>
      </div>
    );
  }

  return (
    <div className="board">
      <h1 className="header">Tic Tac Toe</h1>

      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
      </div>
      <div className="board-row">
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
        {renderSquare(9)}
      </div>
      <div className="board-row">
        {renderSquare(10)}
        {renderSquare(11)}
        {renderSquare(12)}
        {renderSquare(13)}
        {renderSquare(14)}
      </div>
      <div className="board-row">
        {renderSquare(15)}
        {renderSquare(16)}
        {renderSquare(17)}
        {renderSquare(18)}
        {renderSquare(19)}
      </div>
      <div className="board-row">
        {renderSquare(20)}
        {renderSquare(21)}
        {renderSquare(22)}
        {renderSquare(23)}
        {renderSquare(24)}
      </div>

      <h3>{status}</h3>
      <Countdown
        restart={restart}
        setRestart={setRestart}
        winner={winner}
        checkComplete={checkComplete}
        setSquare={setSquare}
      />
    </div>
  );
};

export default Board;
