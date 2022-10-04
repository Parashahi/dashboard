import React from "react";
import "../style/smallcompStyle/paperStyle.scss";

function Paper(props) {
  return (
    <div className="Paper">
      {props.icon}
      <p>{props.name}</p>
      <h1>{props.details}</h1>
    </div>
  );
}

export default Paper;
