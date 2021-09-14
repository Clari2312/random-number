import { useState } from "react";
import "./Display.css";

const Display = (props) => {
  return <div className="display">{props.displayNumber}</div>;
};

export default Display;
