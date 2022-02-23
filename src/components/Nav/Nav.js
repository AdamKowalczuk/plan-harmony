import React from "react";
import "./nav.scss";
import Home from "../../icons/Home";
import Menu from "../../icons/AlignRight";
import { Link } from "react-router-dom";
const Nav = (props) => {
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
        <Link to="/menu">
          <div
            className="convex-icon"
            style={{ width: "50px", height: "50px" }}
          >
            <Menu />
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Nav;
