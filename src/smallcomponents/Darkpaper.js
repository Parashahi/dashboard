import React from "react";
import "../style/smallcompStyle/darkpaperStyle.scss";

function Darkpaper(props) {
  return (
    <div className="Darkpaper">
      <img src={props.icon} />
      <p>{props.name}</p>
      <span>{props.time} &#128314; </span>
      <p>{props.name2}</p>
      <span>{props.time2} &#128315;</span>
    </div>
  );
}

export default Darkpaper;
