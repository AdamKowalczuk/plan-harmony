import React from "react";
import "../Convex/convex.scss";
import "./list.scss";
import Nav from "../Nav/Nav";
import { useSelector, useDispatch } from "react-redux";
import { changeActualList } from "../../actions/lists";
// import Icon1 from "../../icons/list-check.svg";
// import Icon2 from "../../icons/shopping-bag.svg";
// import Icon3 from "../../icons/plane.svg";
// import Icon4 from "../../icons/book.svg";
// import Icon5 from "../../icons/dollar.svg";
// import Icon6 from "../../icons/edit.svg";
import Plus from "../../icons/Plus";
import { Link } from "react-router-dom";

const SingleList = (props) => {
  const dispatch = useDispatch();
  return (
    <div
      className="convex list-topic"
      onClick={() => {
        dispatch(changeActualList(props.id));
      }}
    >
      <h3>{props.name}</h3>
      <Link to="/exercises" className="link">
        <div className="convex-icon" style={{ width: "80px", height: "80px" }}>
          {props.icon}
        </div>
      </Link>
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
          return (
            <SingleList name={list.name} key={id} id={id} icon={list.icon} />
          );
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
