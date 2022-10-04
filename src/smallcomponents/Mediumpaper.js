import React from "react";
import "../style/smallcompStyle/mediumpaperStyle.scss";
import bar from "../images/bar.png";

function Mediumpaper() {
  return (
    <div className="mediumpaper">
      <div className="head">
        <div className="icon">
          <i class="fa-solid fa-clock"></i>
        </div>
        <div className="time">
          <p>Total time</p>
          <h4>2 h 30 m</h4>
        </div>
      </div>
      {/* <div className="bar">
        <img src={bar} />
      </div> */}

      <div className="bargraph">
        <div className="grey1">
          <div className="white"></div>
        </div>

        <div className="grey2">
          <div className="white"></div>
        </div>

        <div className="grey3">
          <div className="white"></div>
        </div>

        <div className="grey4">
          <div className="white"></div>
        </div>

        <div className="grey5">
          <div className="white"></div>
        </div>

        <div className="grey6">
          <div className="white"></div>
        </div>

        <div className="grey7">
          <div className="white"></div>
        </div>
      </div>

      <div className="days">
        <ul>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
          <li>Sun</li>
        </ul>
      </div>
    </div>
  );
}

export default Mediumpaper;
