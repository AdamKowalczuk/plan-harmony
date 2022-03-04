import React, { useState } from "react";
import "./addList.scss";
import "../Menu/menu.scss";

import { Balloons, CrossSmall, Layers } from "../../icons/All";
import {
  changeFormName,
  changeFormType,
  changeFormIcon,
  resetForm,
} from "../../actions/actions";
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
import { addToList } from "../../actions/actions";

const AddList = () => {
  const dispatch = useDispatch();
  let darkMode = useSelector((state) => state.darkMode);
  let form = useSelector((state) => state.form);
  const [color, setColor] = useState(0);
  let components = [
    <Backpack icon="Backpack" />,
    <Beer icon="Beer" />,
    <CakeBirthday icon="CakeBirthday" />,
    <Flag icon="Flag" />,
    <Gamepad icon="Gamepad" />,
    <Gift icon="Gift" />,
    <Gym icon="Gym" />,
    <Hamburger icon="Hamburger" />,
    <HearthArrow icon="HearthArrow" />,
    <Medicine icon="Medicine" />,
    <MusicAlt icon="MusicAlt" />,
    <Paw icon="Paw" />,
    <Plane icon="Plane" />,
    <Snowboarding icon="Snowboarding" />,
    <Thumbtack icon="Thumbtack" />,
    <Trophy icon="Trophy" />,
    <VideoCamera icon="VideoCamera" />,
  ];

  const changeColor = (id) => {
    setColor(id);
  };
  return (
    <>
      <div className={darkMode === false ? "add-list" : "add-list-dark"}>
        <Link to="/">
          <div
            className={
              darkMode === false ? "cross-container" : "cross-container-dark"
            }
          >
            <div
              className={
                darkMode === false ? "convex-icon" : "convex-icon-dark"
              }
              style={{ width: "50px", height: "50px" }}
            >
              <CrossSmall />
            </div>
          </div>
        </Link>

        <div
          className={
            darkMode === false ? "form-container" : "form-container-dark"
          }
        >
          <div
            className={
              darkMode === false
                ? "concave add-list-name"
                : "concave-dark add-list-name-dark"
            }
          >
            <input
              type="text"
              className={darkMode === false ? "input-text" : "input-text-dark"}
              placeholder="Nazwa..."
              onChange={(e) => {
                dispatch(changeFormName(e.target.value));
              }}
            />
          </div>
          <div
            className={
              darkMode === false
                ? "convex add-list-type"
                : "convex-dark add-list-type"
            }
          >
            <div className="type-container">
              <div className="center w50">
                <Layers />
              </div>
              <h3>Typ</h3>
            </div>
            <div className="add-list-button-container">
              {darkMode === false ? (
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
              ) : (
                <div
                  className={
                    form.type === "list"
                      ? "button-concave-dark concave-dark"
                      : "button-concave-dark "
                  }
                  onClick={() => {
                    dispatch(changeFormType("list"));
                  }}
                >
                  <h3>Lista</h3>
                </div>
              )}
              {/* <div
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
              </div> */}

              {darkMode === false ? (
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
              ) : (
                <div
                  className={
                    form.type === "note"
                      ? "button-concave-dark concave-dark"
                      : "button-concave-dark "
                  }
                  onClick={() => {
                    dispatch(changeFormType("note"));
                  }}
                >
                  <h3>Notatki</h3>
                </div>
              )}
            </div>
          </div>
          <div
            className={
              darkMode === false
                ? "convex add-list-icons"
                : "convex-dark add-list-icons-dark"
            }
          >
            <div
              className={
                darkMode === false ? "icon-container" : "icon-container-dark"
              }
            >
              <div className="center w50">
                <Balloons />
              </div>
              <h3>Ikona</h3>
            </div>
            <div className={darkMode === false ? "icons" : "icons-dark"}>
              {components.map((component, id) => {
                return (
                  <div
                    className={color === id ? "colored" : "not-colored"}
                    key={id}
                    onClick={() => {
                      dispatch(changeFormIcon(component.props.icon));
                      changeColor(id);
                    }}
                  >
                    {component}
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className={
              darkMode === false
                ? "convex add-list-button"
                : "convex-dark add-list-button-dark"
            }
          >
            <Link className="link" to="/">
              <h3
                onClick={() => {
                  dispatch(addToList({ ...form, exercises: [] }));
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
