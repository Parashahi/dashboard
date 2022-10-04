import React from "react";
// import Button from "../smallcomponents/Button";
import "../style/midStyle.scss";
import Profile from "../images/me.jpg";
import Shoe from "../images/shoe1.png";
import Button2 from "../smallcomponents/Button2";
import Paper from "../smallcomponents/Paper";
import Paper2 from "../smallcomponents/Paper2";
import Darkpaper from "../smallcomponents/Darkpaper";
import Bigpaper from "../smallcomponents/Bigpaper";

function Midcontent() {
  return (
    <section className="mid-content">
      <div className="mid-head">
        <div className="location">
          <i class="fa-solid fa-location-dot"></i>

          <p>
            <strong> Seattle</strong>, New Jersey
          </p>
        </div>

        <div className="button-profile">
          <div className="time">
            <Button2 icon={<i class="fa-regular fa-bell"></i>} img="" />
          </div>
          <div className="profile">
            <Button2 icon="" img={Profile} />
          </div>
        </div>
      </div>

      <div className="mid-papers">
        <Paper
          icon={<i class="fa-solid fa-clock"></i>}
          name="Time"
          details="56m"
        />
        <Paper2
          icon={<i class="fa-solid fa-route"></i>}
          name="Total Distance"
          details="15h 56km"
        />
        <Paper2
          icon={<i class="fa-solid fa-fire"></i>}
          name="Energy Burn"
          details="1456 kcal"
        />
        <Paper
          icon={<i class="fa-solid fa-bed"></i>}
          name="Sleep"
          details="8hrs"
        />
      </div>

      <div className="mid-darkpapers">
        <Darkpaper
          icon={Shoe}
          name="Running"
          time="17min"
          name2="Flight time"
          time2="18min"
        />
        <Darkpaper
          icon={Shoe}
          name="Running"
          time="17min"
          name2="Flight time"
          time2="18min"
        />
        <Darkpaper
          icon={Shoe}
          name="Running"
          time="17min"
          name2="Flight time"
          time2="18min"
        />
      </div>

      <div className="mid-bigpaper">
        <Bigpaper />
      </div>
    </section>
  );
}

export default Midcontent;
