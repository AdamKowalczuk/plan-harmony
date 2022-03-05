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
  Thumbtack,
  Trophy,
  VideoCamera,
  ListCheck,
  ShoppingBag,
  Book,
  Dollar,
  Edit,
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
    <ListCheck icon="ListCheck" darkMode={darkMode} />,
    <ShoppingBag icon="ShoppingBag" darkMode={darkMode} />,
    <Book icon="Book" darkMode={darkMode} />,
    <Dollar icon="Dollar" darkMode={darkMode} />,
    <Edit icon="Edit" darkMode={darkMode} />,
    <Backpack icon="Backpack" darkMode={darkMode} />,
    <Beer icon="Beer" darkMode={darkMode} />,
    <CakeBirthday icon="CakeBirthday" darkMode={darkMode} />,
    <Flag icon="Flag" darkMode={darkMode} />,
    <Gamepad icon="Gamepad" darkMode={darkMode} />,
    <Gift icon="Gift" darkMode={darkMode} />,
    <Gym icon="Gym" darkMode={darkMode} />,
    <Hamburger icon="Hamburger" darkMode={darkMode} />,
    <HearthArrow icon="HearthArrow" darkMode={darkMode} />,
    <Medicine icon="Medicine" darkMode={darkMode} />,
    <MusicAlt icon="MusicAlt" darkMode={darkMode} />,
    <Paw icon="Paw" darkMode={darkMode} />,
    <Plane icon="Plane" darkMode={darkMode} />,
    <Thumbtack icon="Thumbtack" darkMode={darkMode} />,
    <Trophy icon="Trophy" darkMode={darkMode} />,
    <VideoCamera icon="VideoCamera" darkMode={darkMode} />,
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
              <CrossSmall darkMode={darkMode} />
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
                : "convex-dark add-list-type-dark"
            }
          >
            <div
              className={
                darkMode === false ? "type-container" : "type-container-dark"
              }
            >
              <div className="center w50">
                <Layers darkMode={darkMode} />
              </div>
              <h3>Typ</h3>
            </div>
            <div
              className={
                darkMode === false
                  ? "add-list-button-container"
                  : "add-list-button-container-dark"
              }
            >
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
                <Balloons darkMode={darkMode} />
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
