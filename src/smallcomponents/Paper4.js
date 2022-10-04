import React from "react";
import "../style/smallcompStyle/paperStyle.scss";

function Paper4(props) {
  return (
    <div className="Paper4">
      <div className="head">
        <div className="icon">{props.icon}</div>

        <div className="title">
          <p>{props.title}</p>
          <h1>{props.details}</h1>
        </div>
      </div>

      <div className="bars">
        <div className="single-bar"></div>
        <div className="single-bar1"></div>
        <div className="single-bar2"></div>
        <div className="single-bar3"></div>
        <div className="single-bar4"></div>
        <div className="single-bar5"></div>
        <div className="single-bar6"></div>
        <div className="single-bar7"></div>
        <div className="single-bar8"></div>
      </div>
    </div>
  );
}

export default Paper4;
