import React from "react";
import "../style/smallcompStyle/paperStyle.scss";

function Paper3(props) {
  return (
    <div className="Paper3">
      <div className="head">
        <div className="icon">{props.icon}</div>

        <div className="title">
          <p>{props.title}</p>
          <h1>{props.details}</h1>
        </div>
      </div>
      <div className="circle">
        <div className="text">
          <h1>5,6 km</h1>
          <div className="border-circle-top"></div>
          <div className="border-circle-bottom"></div>
        </div>
      </div>
    </div>
  );
}

export default Paper3;
