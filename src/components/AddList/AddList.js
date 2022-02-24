import React, { useState } from "react";
import "./addList.scss";
import "../Convex/convex.scss";
import "../Concave/concave.scss";
import "../Menu/menu.scss";
import Balloons from "../../icons/Balloons";
import CrossSmall from "../../icons/CrossSmall";
import Layers from "../../icons/Layers";
import {
  changeFormName,
  changeFormType,
  changeFormIcon,
  resetForm,
} from "../../actions/form";
import {
  Backpack,
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
  Plane,
  Snowboarding,
  Thumbtack,
  Trophy,
  VideoCamera,
} from "../../list-icons/All";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToList } from "../../actions/lists";
// function importAll(r) {
//   let icons = [];
//   r.keys().map((item, index) => {
//     icons.push(r(item));
//   });
//   return icons;
// }

// const icons = importAll(
//   require.context("../../list-icons", false, /\.(js|jpe?g|svg)$/)
// );

const AddList = () => {
  const dispatch = useDispatch();
  let form = useSelector((state) => state.form);
  const [color, setColor] = useState(0);
  let components = [
    <Backpack />,
    <Beer />,
    <CakeBirthday />,
    <Flag />,
    <Gamepad />,
    <Gift />,
    <Gym />,
    <Hamburger />,
    <HearthArrow />,
    <Medicine />,
    <MusicAlt />,
    <Paw />,
    <Plane />,
    <Snowboarding />,
    <Thumbtack />,
    <Trophy />,
    <VideoCamera />,
  ];

  const changeColor = (id) => {
    setColor(id);
  };
  return (
    <>
      <div className="add-list">
        <Link to="/">
          <div className="cross-container">
            <div
              className="convex-icon"
              style={{ width: "50px", height: "50px" }}
            >
              <CrossSmall />
            </div>
          </div>
        </Link>

        <div className="form-container">
          <div className="concave add-list-name">
            <input
              type="text"
              className="input-text"
              placeholder="Nazwa..."
              onChange={(e) => {
                dispatch(changeFormName(e.target.value));
              }}
            />
          </div>
          <div className="convex add-list-type">
            <div className="type-container">
              <div className="center w50">
                <Layers />
              </div>
              <h3>Typ</h3>
            </div>
            <div className="add-list-button-container">
              <div
                className={
                  form.type === "list"
                    ? "button-concave concave"
                    : "button-concave "
                }
                onClick={() => {
                  dispatch(changeFormType("list"));
                }}
              >
                <h3>Lista</h3>
              </div>

              <div
                className={
                  form.type === "note"
                    ? "button-concave concave"
                    : "button-concave "
                }
                onClick={() => {
                  dispatch(changeFormType("note"));
                }}
              >
                <h3>Notatki</h3>
              </div>
            </div>
          </div>
          <div className="convex add-list-icons">
            <div className="icon-container">
              <div className="center w50">
                <Balloons />
              </div>
              <h3>Ikona</h3>
            </div>
            <div className="icons">
              {components.map((component, id) => {
                return (
                  <div
                    className={color === id ? "colored" : "not-colored"}
                    key={id}
                    onClick={() => {
                      dispatch(changeFormIcon(component));
                      changeColor(id);
                    }}
                  >
                    {component}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="convex add-list-button">
            <Link className="link" to="/">
              <h3
                onClick={() => {
                  dispatch(addToList(form));
                  dispatch(resetForm());
                }}
              >
                Dodaj
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddList;
