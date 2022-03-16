import React from "react";
import "./menu.scss";
import Nav from "../Nav/Nav";
import { changeMode, changeNotifications } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";

import { AngleSmallRight, TimePast, BellRing, Fill } from "../../icons/All";
import { Link } from "react-router-dom";
const Menu = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  // const notifications = useSelector((state) => state.notifications);

  return (
    <>
      <Nav text="Menu" />
      <div className={darkMode === false ? "menu" : "menu menu-dark"}>
        <div className={darkMode === false ? "convex menu-option2" : "convex-dark menu-option2"}>
          <div className={darkMode === false ? "menu-name" : "menu-name menu-name-dark"}>
            <Fill darkMode={darkMode} />
            <h3>Motyw</h3>
          </div>
          <div className={darkMode === false ? "menu-button-container" : "menu-button-container menu-button-container-dark"}>
            <div
              className={darkMode === false ? "button-concave concave" : "button-concave-dark"}
              onClick={() => {
                dispatch(changeMode(false));
              }}
            >
              <h3>Jasny</h3>
            </div>
            <div
              className={darkMode === false ? "button-concave" : "button-concave-dark concave-dark"}
              onClick={() => {
                dispatch(changeMode(true));
              }}
            >
              <h3>Ciemny</h3>
            </div>
          </div>
        </div>
        {/* <div className={darkMode === false ? "convex menu-option2" : "convex-dark menu-option2"}>
          <div className={darkMode === false ? "menu-name" : "menu-name menu-name-dark"}>
            <BellRing darkMode={darkMode} />
            <h3>Powiadomienia</h3>
          </div>
          <div className={darkMode === false ? "menu-button-container" : "menu-button-container menu-button-container-dark"}>
            {darkMode === false ? (
              <div
                className={notifications === true ? "button-concave concave" : "button-concave"}
                onClick={() => {
                  dispatch(changeNotifications(true));
                }}
              >
                <h3>Włączone</h3>
              </div>
            ) : (
              <div
                className={notifications === true ? "button-concave-dark concave-dark" : "button-concave-dark"}
                onClick={() => {
                  dispatch(changeNotifications(true));
                }}
              >
                <h3>Włączone</h3>
              </div>
            )}
            {darkMode === false ? (
              <div
                className={notifications === false ? "button-concave concave" : "button-concave"}
                onClick={() => {
                  dispatch(changeNotifications(false));
                }}
              >
                <h3>Wyłączone</h3>
              </div>
            ) : (
              <div
                className={notifications === false ? "button-concave-dark concave-dark" : "button-concave-dark"}
                onClick={() => {
                  dispatch(changeNotifications(false));
                }}
              >
                <h3>Wyłączone</h3>
              </div>
            )}
          </div>
        </div> */}
        <div className={darkMode === false ? "convex menu-option1" : "convex-dark menu-option1"} style={{ marginBottom: "10px" }}>
          <div className={darkMode === false ? "menu-name" : "menu-name menu-name-dark"}>
            <TimePast darkMode={darkMode} />
            <h3>Dziennik aktywności</h3>
          </div>

          <Link to="/history">
            <div className={darkMode === false ? "convex-icon w30" : "convex-icon-dark w30"}>
              <AngleSmallRight darkMode={darkMode} />
            </div>
          </Link>
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
