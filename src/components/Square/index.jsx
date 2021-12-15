import React from "react";

const Square = (props) => {
  return (
    <button className="btn" onClick={() => props.handleClick(props.i)}>
      {props.value}
    </button>
    
    //cách 2 thep board:
    //<button className="btn" onClick={() => props.onClick()}>{props.value}</button>
  );
};

export default Square;
