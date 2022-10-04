import React from "react";
import "../style/navStyle.scss";
import Logo from "../images/khalti.png";
import Menubutton from "../smallcomponents/Menubutton";
import Button from "../smallcomponents/Button";

function Navbar() {
  return (
    <>
      <section className="Nav">
        <div className="Up">
          <div className="logo">
            <img src={Logo} />
          </div>
          <div className="navbar">
            <ul>
              <Menubutton
                title={"Overview"}
                icon={<i class="fa-solid fa-house-user" />}
              />
              <Menubutton
                title="Competition"
                icon={<i class="fa-solid fa-medal"></i>}
              />
              <Menubutton
                title="Timer"
                icon={<i class="fa-solid fa-stopwatch"></i>}
              />
              <Menubutton
                title="Energy"
                icon={<i class="fa-solid fa-heart-circle-bolt"></i>}
              />
              <Menubutton
                title="Calendar"
                icon={<i class="fa-solid fa-calendar-days"></i>}
              />
              <Menubutton
                title="Distances"
                icon={<i class="fa-solid fa-map"></i>}
              />
              <Menubutton
                title="Profile"
                icon={<i class="fa-solid fa-circle-user"></i>}
              />
              <Menubutton
                title="Settings"
                icon={<i class="fa-solid fa-gear"></i>}
              />
            </ul>
          </div>
        </div>
        <Button
          name="Logout"
          icon={<i class="fa-solid fa-right-from-bracket"></i>}
        />
      </section>
    </>
  );
}

export default Navbar;
