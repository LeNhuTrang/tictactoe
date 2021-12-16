import React, { useEffect, useRef, useState } from "react";
import useCountdown from "./useCountdown";

const Countdown = (props) => {
  const {restart, setRestart, winner, checkComplete} = props
  const endTime = new Date().getTime() + 60000 * 20; // 20 minutes
  const [timeLeft, setEndTime] = useCountdown(endTime);

  const minutes = Math.floor(timeLeft / 60000) % 60;
  const seconds = Math.floor(timeLeft / 1000) % 60;

  useEffect(() => {
    if (winner) {
      setRestart(true);
    }

    if (checkComplete.length == 24) {
      setEndTime(endTime);
      setRestart(false);
    }
  }, [winner, checkComplete]);

  return (
    <div className="countdown">
      <i className="fa fa-stopwatch"></i>
      {restart ? (
        <span style={{ marginLeft: 5 }}>00:00</span>
      ) : (
        <span style={{ marginLeft: 5 }}>{`${minutes}:${seconds}`}</span>
      )}
      <div>
        <button
          style={{
            margin: 5,
            padding: 5,
            backgroundColor: "rgba(255, 255, 255, 0.479)",
            borderRadius: "2px",
            border: "none",
            cursor: "pointer",
            color: "#ffffff",
            fontWeight: "bolder",
            textShadow: " 2px 2px 4px #bbb",
          }}
          onClick={() => {
            setRestart(false);
            setEndTime(endTime);
            props.setSquare(Array(25).fill(null));
          }}
        >
          Play again
        </button>
      </div>
    </div>
  );
};

export default Countdown;
