import React from "react";
import "./Display.scss";

const Display = props => {
  return (
    <div className="display">
      <div className="display-text">{props.displayState}</div>
    </div>
  );
};

export default Display;
