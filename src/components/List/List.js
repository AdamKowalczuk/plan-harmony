import React from "react";
import "../Convex/convex.scss";
import "./list.scss";
import Nav from "../Nav/Nav";
import { useSelector, useDispatch } from "react-redux";
import { changeActualList } from "../../actions/actions";
import Plus from "../../icons/Plus";
import { Link } from "react-router-dom";
import {
  ListCheck,
  ShoppingBag,
  Backpack,
  Plane,
  Book,
  Dollar,
  Edit,
  Beer,
  CakeBirthday,
  Flag,
  Gamepad,
  Gift,
  Gym,
  Hamburger,
  HearthArrow,
  Medicine,
  MusicAlt,
  Paw,
  Snowboarding,
  Thumbtack,
  Trophy,
  VideoCamera,
} from "../../list-icons/All";

function returnIcon(icon) {
  switch (icon) {
    case "ListCheck":
      return <ListCheck />;
    case "ShoppingBag":
      return <ShoppingBag />;
    case "Plane":
      return <Plane />;
    case "Book":
      return <Book />;
    case "Dollar":
      return <Dollar />;
    case "Edit":
      return <Edit />;
    case "Backpack":
      return <Backpack />;
    case "Beer":
      return <Beer />;
    case "CakeBirthday":
      return <CakeBirthday />;
    case "Flag":
      return <Flag />;
    case "Gamepad":
      return <Gamepad />;
    case "Gift":
      return <Gift />;
    case "Gym":
      return <Gym />;
    case "Hamburger":
      return <Hamburger />;
    case "HearthArrow":
      return <HearthArrow />;
    case "Medicine":
      return <Medicine />;
    case "MusicAlt":
      return <MusicAlt />;
    case "Paw":
      return <Paw />;
    case "Snowboarding":
      return <Snowboarding />;
    case "Thumbtack":
      return <Thumbtack />;
    case "Trophy":
      return <Trophy />;
    case "VideoCamera":
      return <VideoCamera />;
    default:
      return null;
  }
}

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
          {returnIcon(props.icon)}
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
        <div className="convex list-topic">
          <Link to="/add-list" className="link">
            <div className="convex-icon w80">
              <Plus />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default List;
