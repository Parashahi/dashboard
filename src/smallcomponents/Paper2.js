import React from "react";
import "../style/smallcompStyle/paperStyle.scss";

function Paper2(props) {
  return (
    <div className="Paper2">
      {props.icon}
      <p>{props.name}</p>
      <h1>{props.details}</h1>
    </div>
  );
}

export default Paper2;
