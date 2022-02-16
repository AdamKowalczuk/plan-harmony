import React from "react";
import ConvexIcon from "../Convex/ConvexIcon";
import "../Convex/convex.scss";
import "./list.scss";
import Nav from "../Nav/Nav";
import Icon1 from "../../icons/list-check.svg";
import Icon2 from "../../icons/shopping-bag.svg";
import Icon3 from "../../icons/plane.svg";
import Icon4 from "../../icons/book.svg";
import Icon5 from "../../icons/dollar.svg";
import Icon6 from "../../icons/edit.svg";
import Icon7 from "../../icons/plus.svg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Nav text="Lista zadań" />
      <div className="list">
        <div className="convex list-topic">
          <h3>Lista zadań</h3>
          <ConvexIcon w="80px" iw="40px" icon={Icon1} alt="list"></ConvexIcon>
        </div>
        <div className="convex list-topic">
          <h3>Lista zakupów</h3>
          <ConvexIcon w="80px" iw="40px" icon={Icon2} alt="list"></ConvexIcon>
        </div>
        <div className="convex list-topic">
          <h3>Cele na rok</h3>
          <ConvexIcon w="80px" iw="40px" icon={Icon3} alt="list"></ConvexIcon>
        </div>
        <div className="convex list-topic">
          <h3>Książki</h3>
          <ConvexIcon w="80px" iw="40px" icon={Icon4} alt="list"></ConvexIcon>
        </div>
        <div className="convex list-topic">
          <h3>Wydatki</h3>
          <ConvexIcon w="80px" iw="40px" icon={Icon5} alt="list"></ConvexIcon>
        </div>
        <div className="convex list-topic">
          <h3>Notatki</h3>
          <ConvexIcon w="80px" iw="40px" icon={Icon6} alt="list"></ConvexIcon>
        </div>
        <Link to="/add-list" className="link">
          <div className="convex list-topic">
            <ConvexIcon w="80px" iw="40px" icon={Icon7} alt="list"></ConvexIcon>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
