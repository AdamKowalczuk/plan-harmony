import React from "react";
import "./nav.scss";
import ConvexIcon from "../Convex/ConvexIcon";
import Home from "../../icons/home.svg";
import Menu from "../../icons/align-right.svg";
import { Link } from "react-router-dom";
const Nav = (props) => {
  return (
    <>
      <div className="nav">
        <Link to="/">
          <ConvexIcon w="50px" iw="30px" icon={Home} alt="home"></ConvexIcon>
        </Link>

        <h2>{props.text}</h2>
        <Link to="/menu">
          <ConvexIcon w="50px" iw="30px" icon={Menu} alt="menu"></ConvexIcon>
        </Link>
      </div>
    </>
  );
};

export default Nav;
