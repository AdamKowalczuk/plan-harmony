import React from "react";
import "../Convex/convex.scss";
import "./list.scss";
import Nav from "../Nav/Nav";
import { useSelector, useDispatch } from "react-redux";
import { changeActualList } from "../../actions/lists";
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
  let lists = useSelector((state) => state.lists);
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
