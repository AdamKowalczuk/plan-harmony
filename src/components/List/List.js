import React from "react";
import "./list.scss";
import Nav from "../Nav/Nav";
import { useSelector, useDispatch } from "react-redux";
import { changeActualList } from "../../actions/actions";
import { Link } from "react-router-dom";
import { Plus } from "../../icons/All";
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
  Thumbtack,
  Trophy,
  VideoCamera,
} from "../../list-icons/All";

function returnIcon(icon, darkMode) {
  switch (icon) {
    case "ListCheck":
      return <ListCheck darkMode={darkMode} />;
    case "ShoppingBag":
      return <ShoppingBag darkMode={darkMode} />;
    case "Plane":
      return <Plane darkMode={darkMode} />;
    case "Book":
      return <Book darkMode={darkMode} />;
    case "Dollar":
      return <Dollar darkMode={darkMode} />;
    case "Edit":
      return <Edit darkMode={darkMode} />;
    case "Backpack":
      return <Backpack darkMode={darkMode} />;
    case "Beer":
      return <Beer darkMode={darkMode} />;
    case "CakeBirthday":
      return <CakeBirthday darkMode={darkMode} />;
    case "Flag":
      return <Flag darkMode={darkMode} />;
    case "Gamepad":
      return <Gamepad darkMode={darkMode} />;
    case "Gift":
      return <Gift darkMode={darkMode} />;
    case "Gym":
      return <Gym darkMode={darkMode} />;
    case "Hamburger":
      return <Hamburger darkMode={darkMode} />;
    case "HearthArrow":
      return <HearthArrow darkMode={darkMode} />;
    case "Medicine":
      return <Medicine darkMode={darkMode} />;
    case "MusicAlt":
      return <MusicAlt darkMode={darkMode} />;
    case "Paw":
      return <Paw darkMode={darkMode} />;
    case "Thumbtack":
      return <Thumbtack darkMode={darkMode} />;
    case "Trophy":
      return <Trophy darkMode={darkMode} />;
    case "VideoCamera":
      return <VideoCamera darkMode={darkMode} />;
    default:
      return null;
  }
}
// function darkMode() {
//   let convex = document.getElementsByClassName("convex");
//   // console.log(convex);
//   console.log(convex.length);
//   for (let i = 0; i < convex.length; i++) {
//     convex[i].className = "convex-dark";
//     console.log(convex[i].className);
//   }
// }
// darkMode();
const SingleList = (props) => {
  const dispatch = useDispatch();
  let darkMode = useSelector((state) => state.darkMode);
  return (
    <div
      className={
        darkMode === false ? "convex list-topic" : "convex-dark list-topic-dark"
      }
      onClick={() => {
        dispatch(changeActualList(props.id));
      }}
    >
      <h3>{props.name}</h3>
      <Link to="/exercises" className="link">
        <div
          className={darkMode === false ? "convex-icon" : "convex-icon-dark"}
          style={{ width: "80px", height: "80px" }}
        >
          {returnIcon(props.icon, darkMode)}
        </div>
      </Link>
    </div>
  );
};
const List = () => {
  let lists = useSelector((state) => state.lists);
  let darkMode = useSelector((state) => state.darkMode);
  return (
    <>
      <Nav text="Lista zadań" />

      <div className={darkMode === false ? "list" : "list-dark"}>
        {lists.map((list, id) => {
          return (
            <SingleList name={list.name} key={id} id={id} icon={list.icon} />
          );
        })}

        <div
          className={
            darkMode === false
              ? "convex list-topic"
              : "convex-dark list-topic-dark"
          }
        >
          <Link to="/add-list" className="link">
            <div
              className={
                darkMode === false ? "convex-icon w80" : "convex-icon-dark w80"
              }
            >
              <Plus darkMode={darkMode} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default List;
