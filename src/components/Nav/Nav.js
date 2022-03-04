import React from "react";
import "./nav.scss";
import { AlignRight, Home } from "../../icons/All";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Nav = (props) => {
  let darkMode = useSelector((state) => state.darkMode);
  return (
    <>
      <nav className={darkMode === false ? "nav" : "nav-dark"}>
        <Link to="/">
          <div
            className={darkMode === false ? "convex-icon" : "convex-icon-dark"}
            style={{ width: "50px", height: "50px" }}
          >
            <Home darkMode={darkMode} />
          </div>
        </Link>

        <h2>{props.text}</h2>
        <Link to="/menu">
          <div
            className={darkMode === false ? "convex-icon" : "convex-icon-dark"}
            style={{ width: "50px", height: "50px" }}
          >
            <AlignRight darkMode={darkMode} />
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Nav;
