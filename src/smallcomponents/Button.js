import React from "react";
import "../style/smallcompStyle/buttonStyle.scss";

function Button(props) {
  return (
    <div className="Button1">
      <button>
        {props.name} {props.icon}
      </button>
    </div>
  );
}

export default Button;
