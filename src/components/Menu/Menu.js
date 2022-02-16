import React from "react";
import "./menu.scss";
import Nav from "../Nav/Nav";
import "../Convex/convex.scss";
import "../Concave/concave.scss";
import ConvexIcon from "../Convex/ConvexIcon";
import User from "../../icons/user.svg";
import Fill from "../../icons/fill.svg";
import BellRing from "../../icons/bell-ring.svg";
import TimePast from "../../icons/time-past.svg";
import Gift from "../../icons/gift.svg";
import AngleSmallRight from "../../icons/angle-small-right.svg";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <Nav text="Menu" />
      <div className="menu">
        <div className="convex menu-option1">
          <div className="menu-name">
            <img src={User} alt="user" className="menu-icon" />
            <h3>Profil</h3>
          </div>
          <Link to="/profile">
            <ConvexIcon
              w="30px"
              iw="30px"
              icon={AngleSmallRight}
              alt="arrow right"
            />
          </Link>
        </div>
        <div className="convex menu-option2">
          <div className="menu-name">
            <img src={Fill} alt="fill" className="menu-icon" />
            <h3>Motyw</h3>
          </div>
          <div className="menu-button-container">
            <div className="button-concave concave">
              <h3>Jasny</h3>
            </div>
            <div className="button-concave concave">
              <h3>Ciemny</h3>
            </div>
          </div>
        </div>
        <div className="convex menu-option2">
          <div className="menu-name">
            <img src={BellRing} alt="bell ring" className="menu-icon" />
            <h3>Powiadomienia</h3>
          </div>
          <div className="menu-button-container">
            <div className="button-concave concave">
              <h3>Włączone</h3>
            </div>
            <div className="button-concave concave">
              <h3>Wyłączone</h3>
            </div>
          </div>
        </div>
        <div className="convex menu-option1">
          <div className="menu-name">
            <img src={TimePast} alt="time past" className="menu-icon" />
            <h3>Historia</h3>
          </div>

          <ConvexIcon
            w="30px"
            iw="30px"
            icon={AngleSmallRight}
            alt="arrow right"
          />
        </div>
        {/* <div className="convex menu-option1">
          <div className="menu-name">
            <img src={Gift} alt="gift" className="menu-icon" />
            <h3>Wesprzyj</h3>
          </div>

          <ConvexIcon
            w="30px"
            iw="30px"
            icon={AngleSmallRight}
            alt="arrow right"
          />
        </div> */}
      </div>
    </>
  );
};

export default Menu;
