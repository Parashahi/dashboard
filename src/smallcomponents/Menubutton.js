import React from "react";
import "../style/smallcompStyle/menuStyle.scss";

function Menubutton(props) {
  return (
    <>
      <a href="#">
        <li>
          {props.icon}
          <p>{props.title}</p>
        </li>
      </a>
    </>
  );
}

export default Menubutton;
