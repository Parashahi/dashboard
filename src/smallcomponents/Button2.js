import React from "react";
import "../style/smallcompStyle/buttonStyle.scss";

function Button2(props) {
  return (
    <>
      <div className="Button2">
        <button>
          {props.icon}
          {/* <img src={props.img} /> */}
        </button>
      </div>
    </>
  );
}

export default Button2;
