import React from "react";
import "./menu.scss";
import Nav from "../Nav/Nav";
import { changeMode, changeNotifications } from "../../actions/menu";
import { useDispatch, useSelector } from "react-redux";
import "../Convex/convex.scss";
import "../Concave/concave.scss";
import User from "../../icons/User.js";
import Fill from "../../icons/Fill.js";
import BellRing from "../../icons/BellRing";
import TimePast from "../../icons/TimePast";
import AngleSmallRight from "../../icons/AngleSmallRight";
import { Link } from "react-router-dom";
const Menu = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  const notifications = useSelector((state) => state.notifications);
  return (
    <>
      <Nav text="Menu" />
      <div className="menu">
        <div className="convex menu-option1">
          <div className="menu-name">
            <User />
            <h3>Profil</h3>
          </div>
          <Link to="/profile">
            <div
              className="convex-icon"
              style={{ width: "30px", height: "30px" }}
            >
              <AngleSmallRight />
            </div>
          </Link>
        </div>
        <div className="convex menu-option2">
          <div className="menu-name">
            <Fill />
            <h3>Motyw</h3>
          </div>
          <div className="menu-button-container">
            <div
              className={
                darkMode === true ? "button-concave" : "button-concave concave"
              }
              onClick={() => {
                dispatch(changeMode(false));
              }}
            >
              <h3>Jasny</h3>
            </div>
            <div
              className={
                darkMode === false ? "button-concave" : "button-concave concave"
              }
              onClick={() => {
                dispatch(changeMode(true));
              }}
            >
              <h3>Ciemny</h3>
            </div>
          </div>
        </div>
        <div className="convex menu-option2">
          <div className="menu-name">
            <BellRing />
            <h3>Powiadomienia</h3>
          </div>
          <div className="menu-button-container">
            <div
              className={
                notifications === true
                  ? "button-concave concave"
                  : "button-concave"
              }
              onClick={() => {
                dispatch(changeNotifications(true));
              }}
            >
              <h3>Włączone</h3>
            </div>
            <div
              className={
                notifications === false
                  ? "button-concave concave"
                  : "button-concave"
              }
              onClick={() => {
                dispatch(changeNotifications(false));
              }}
            >
              <h3>Wyłączone</h3>
            </div>
          </div>
        </div>
        <div className="convex menu-option1" style={{ marginBottom: "10px" }}>
          <div className="menu-name">
            <TimePast />
            <h3>Historia</h3>
          </div>

          <div
            className="convex-icon"
            style={{ width: "30px", height: "30px" }}
          >
            <AngleSmallRight />
          </div>
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
