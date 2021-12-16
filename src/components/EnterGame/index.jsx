import { useFormik } from "formik";
import React, { useState } from "react";
import Board from "../Board";
import "./style.css";
import * as yup from "yup";

const schema = yup.object().shape({
  player1: yup.string().required("Name is required!"),
  player2: yup.string().required("Name is required!"),
});

const EnterGame = (props) => {
  const [state, setState] = useState(true);
  const [players, setPlayer] = useState(null);

  const formik = useFormik({
    initialValues: {
      player1: "",
      player2: "",
    },
    validationSchema: schema,
    validateOnMount: true,
  });
  const handlePlay = (e) => {
    e.preventDefault();

    formik.setTouched({ player1: true, player2: true });
    if (!formik.isValid) return;

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
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.player1 && (
              <p
                style={{
                  color: "pink",
                  textAlign: "center",
                  margin: "-10px 0 5px 5px",
                  fontSize: 14,
                  fontWeight: 400,
                  textShadow: "0px 0px 10px #fff",
                }}
              >
                {formik.errors.player1}
              </p>
            )}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label>Player 2</label>
              <input
                type="text"
                name="player2"
                id="player2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.player2 && (
              <p
                style={{
                  color: "pink",
                  textAlign: "center",
                  margin: "-10px 0 5px 5px",
                  fontSize: 14,
                  fontWeight: 400,
                  textShadow: "0px 0px 10px #fff",
                }}
              >
                {formik.errors.player2}
              </p>
            )}
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
