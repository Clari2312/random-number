import { useState } from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button className="button" onClick={props.changeNumber}>
      Click ME!
    </button>
  );
};

export default Button;
