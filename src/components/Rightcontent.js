import React from "react";
import Button2 from "../smallcomponents/Button2";
import "../style/rightStyle.scss";
import graph from "../images/graph.png";
import circle from "../images/paper3-circle.png";
import bargraph from "../images/paper3-bar.png";
import Mediumpaper from "../smallcomponents/Mediumpaper";
import Paper3 from "../smallcomponents/Paper3";
import Paper4 from "../smallcomponents/Paper4";

function Rightcontent() {
  return (
    <section className="Rightcontent">
      <div className="right-main">
        <div className="right-head">
          <div className="right-head-left">
            <h1>Activity Tracking</h1>
            <p>Thursday, 22 Sep</p>
          </div>
          <Button2 icon={<i class="fa-solid fa-plus"></i>} />
        </div>

        <div className="date-buttons">
          <div className="date">
            <p>Sun</p>
            <h4>17</h4>
          </div>

          <div className="date">
            <p>Mon</p>
            <h4>18</h4>
          </div>

          <div className="date">
            <p>Tue</p>
            <h4>19</h4>
          </div>

          <div className="date">
            <p>Wed</p>
            <h4>20</h4>
          </div>

          <div className="date">
            <p>Thu</p>
            <h4>21</h4>
          </div>

          <div className="date">
            <p>Fri</p>
            <h4>22</h4>
          </div>

          <div className="date">
            <p>Sat</p>
            <h4>23</h4>
          </div>
        </div>
        <div className="graph">
          <img src={graph} />
        </div>
        <div className="graph-data">
          <div className="left">
            <h1> - 5.6</h1>
            <p>Done</p>
          </div>
          <div className="right">
            <h1>4.6</h1>
            <p>Left</p>
          </div>
        </div>

        <Mediumpaper />

        <div className="bottom-paper">
          <Paper3
            icon={<i class="fa-solid fa-route"></i>}
            title="Total Distance"
            details="10 km"
            // img={circle}
          />

          <Paper4
            icon={<i class="fa-solid fa-fire"></i>}
            title="Average Speed"
            details="6.1 p/km"
            // img={}
          />
        </div>
      </div>
    </section>
  );
}

export default Rightcontent;
