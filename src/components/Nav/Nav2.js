import React from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Home, Settings } from "../../icons/All";
const Nav2 = (props) => {
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
        <Link to="/edit-list">
          <div
            className={darkMode === false ? "convex-icon" : "convex-icon-dark"}
            style={{ width: "50px", height: "50px" }}
          >
            <Settings darkMode={darkMode} />
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Nav2;
