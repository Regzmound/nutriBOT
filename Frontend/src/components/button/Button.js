import React from "react";
import "./Button.css"

function Button({onButtonClick, label,}) {
  return <button onClick={onButtonClick} className="global-btn">
    {label}
  </button>;
}

export default Button;
