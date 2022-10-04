import React from "react";
import Button from "./Button";
import Button2 from "./Button2";
import "../style/smallcompStyle/bigpaperStyle.scss";
import back from "../images/paper-img.png";

function Bigpaper() {
  return (
    <div className="Bigpaper">
      <div className="bigpaper-head">
        <div className="left-head">
          <Button2 />
          <div className="head-date">
            <h3>Running with Kate</h3>
            <p>
              <i class="fa-solid fa-calendar-days"></i> 9 Sep, 2022
            </p>
          </div>
        </div>
        <Button name="View More" />
      </div>

      <div className="bigpaper-img">
        <img src={back} />
        <p>Double Walking Time</p>
        <h3>56m</h3>
      </div>
    </div>
  );
}

export default Bigpaper;
