import React from "react";

const Square = (props) => {
  return (
    <button className="btn" onClick={() => props.handleClick(props.i)}>
      {props.value}
    </button>
  );
};

export default Square;
