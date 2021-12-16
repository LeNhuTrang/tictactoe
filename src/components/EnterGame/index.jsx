import { useFormik } from "formik";
import React, { useState } from "react";
import Board from "../Board";
import "./style.css";

const EnterGame = (props) => {
  const [state, setState] = useState(true);
  const [players, setPlayer] = useState(null);

  const formik = useFormik({
    initialValues: {
      player1: "",
      player2: "",
    },
  });
  const handlePlay = (e) => {
    e.preventDefault();
    setState(false);
    setPlayer(formik.values);
  };

  return (
    <div className="container">
      {state ? (
        <div className="startGame">
          <h1>Please fill in your names</h1>

          <div className="inputs">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label>Player 1</label>
              <input
                type="text"
                name="player1"
                id="player1"
                onChange={formik.handleChange}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label>Player 2</label>
              <input
                type="text"
                name="player2"
                id="player2"
                onChange={formik.handleChange}
              />
            </div>
          </div>

          <button onClick={(e) => handlePlay(e)}>Play Now</button>
        </div>
      ) : (
        <Board players={players} />
      )}
    </div>
  );
};

export default EnterGame;
