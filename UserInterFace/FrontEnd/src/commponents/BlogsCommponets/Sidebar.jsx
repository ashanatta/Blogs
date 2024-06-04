import React from "react";
import allgame from "../../assets/All games.jpg";
import action from "../../assets/Action.jpg";
import adventure from "../../assets/Adventure.jpg";
import shooter from "../../assets/Shooter.jpg";
import "../../style/index.css";

function Sidebar() {
  return (
    <div>
      <section id="sidebar">
        <div>
          <h3 className="p-1 border-bottom ">Category</h3>
          <ul>
            <li>
              <img src={allgame} className="img-genre" alt="All blogs" />
              All blogs
            </li>
            <li>
              <img src={action} className="img-genre" alt="car" />
              car
            </li>
            <li>
              <img src={adventure} className="img-genre" alt="natural" />
              natural
            </li>
            <li>
              <img src={shooter} className="img-genre" alt="mobile" />
              mobile
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Sidebar;
