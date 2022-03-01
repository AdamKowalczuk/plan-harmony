import React from "react";
import "./nav.scss";
import Home from "../../icons/Home";
import Settings from "../../icons/Settings";
import { Link } from "react-router-dom";
const Nav2 = (props) => {
  return (
    <>
      <nav>
        <Link to="/">
          <div
            className="convex-icon"
            style={{ width: "50px", height: "50px" }}
          >
            <Home />
          </div>
        </Link>

        <h2>{props.text}</h2>
        <Link to="/edit-list">
          <div
            className="convex-icon"
            style={{ width: "50px", height: "50px" }}
          >
            <Settings />
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Nav2;
