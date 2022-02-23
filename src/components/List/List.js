import React from "react";
import "../Convex/convex.scss";
import "./list.scss";
import Nav from "../Nav/Nav";
import { useSelector, useDispatch } from "react-redux";
// import Icon1 from "../../icons/list-check.svg";
// import Icon2 from "../../icons/shopping-bag.svg";
// import Icon3 from "../../icons/plane.svg";
// import Icon4 from "../../icons/book.svg";
// import Icon5 from "../../icons/dollar.svg";
// import Icon6 from "../../icons/edit.svg";
import Plus from "../../icons/Plus";
import { Link } from "react-router-dom";

const SingleList = (props) => {
  return (
    <div className="convex list-topic">
      <h3>{props.name}</h3>
      <div className="convex-icon" style={{ width: "80px", height: "80px" }}>
        {props.icon}
      </div>
    </div>
  );
};
const List = () => {
  const lists = useSelector((state) => state.lists);
  return (
    <>
      <Nav text="Lista zadań" />
      <div className="list">
        {lists.map((list, id) => {
          return <SingleList name={list.name} key={id} icon={list.icon} />;
        })}
        <Link to="/add-list" className="link">
          <div className="convex list-topic">
            <div className="convex-icon w80">
              <Plus />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default List;
