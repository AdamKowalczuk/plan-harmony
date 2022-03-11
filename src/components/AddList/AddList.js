import React, { useState } from "react";
import "./addList.scss";
import "../Menu/menu.scss";

import { Balloons, CrossSmall, Layers } from "../../icons/All";
import { changeFormName, changeFormType, changeFormIcon, resetForm } from "../../actions/actions";
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
    <ListCheck key={1} icon="ListCheck" darkMode={darkMode} />,
    <ShoppingBag key={2} icon="ShoppingBag" darkMode={darkMode} />,
    <Book key={3} icon="Book" darkMode={darkMode} />,
    <Dollar key={4} icon="Dollar" darkMode={darkMode} />,
    <Edit key={5} icon="Edit" darkMode={darkMode} />,
    <Backpack key={6} icon="Backpack" darkMode={darkMode} />,
    <Beer key={7} icon="Beer" darkMode={darkMode} />,
    <CakeBirthday key={8} icon="CakeBirthday" darkMode={darkMode} />,
    <Flag key={9} icon="Flag" darkMode={darkMode} />,
    <Gamepad key={10} icon="Gamepad" darkMode={darkMode} />,
    <Gift key={11} icon="Gift" darkMode={darkMode} />,
    <Gym key={12} icon="Gym" darkMode={darkMode} />,
    <Hamburger key={13} icon="Hamburger" darkMode={darkMode} />,
    <HearthArrow key={14} icon="HearthArrow" darkMode={darkMode} />,
    <Medicine key={15} icon="Medicine" darkMode={darkMode} />,
    <MusicAlt key={16} icon="MusicAlt" darkMode={darkMode} />,
    <Paw key={17} icon="Paw" darkMode={darkMode} />,
    <Plane key={18} icon="Plane" darkMode={darkMode} />,
    <Thumbtack key={19} icon="Thumbtack" darkMode={darkMode} />,
    <Trophy key={20} icon="Trophy" darkMode={darkMode} />,
    <VideoCamera key={21} icon="VideoCamera" darkMode={darkMode} />,
  ];

  const changeColor = (id) => {
    setColor(id);
  };
  return (
    <>
      <div className={darkMode === false ? "add-list" : "add-list-dark"}>
        <Link to="/">
          <div className={darkMode === false ? "cross-container" : " cross-container cross-container-dark"}>
            <div className={darkMode === false ? "convex-icon w50" : "convex-icon-dark w50"}>
              <CrossSmall darkMode={darkMode} />
            </div>
          </div>
        </Link>

        <div className={darkMode === false ? "form-container" : "form-container form-container-dark"}>
          <div className={darkMode === false ? "concave add-list-name" : "concave-dark add-list-name add-list-name-dark"}>
            <input
              type="text"
              className={darkMode === false ? "input-text" : "input-text-dark"}
              placeholder="Nazwa..."
              onChange={(e) => {
                dispatch(changeFormName(e.target.value));
              }}
            />
          </div>
          <div className={darkMode === false ? "convex add-list-type" : "convex-dark add-list-type"}>
            <div className="type-container">
              <div className="center w50">
                <Layers darkMode={darkMode} />
              </div>
              <h3>Typ</h3>
            </div>
            <div className="add-list-button-container">
              {darkMode === false ? (
                <div
                  className={form.type === "list" ? "button-concave concave" : "button-concave "}
                  onClick={() => {
                    dispatch(changeFormType("list"));
                  }}
                >
                  <h3>Lista</h3>
                </div>
              ) : (
                <div
                  className={form.type === "list" ? "button-concave concave-dark" : "button-concave"}
                  onClick={() => {
                    dispatch(changeFormType("list"));
                  }}
                >
                  <h3>Lista</h3>
                </div>
              )}
              {darkMode === false ? (
                <div
                  className={form.type === "note" ? "button-concave concave" : "button-concave "}
                  onClick={() => {
                    dispatch(changeFormType("note"));
                  }}
                >
                  <h3>Notatki</h3>
                </div>
              ) : (
                <div
                  className={form.type === "note" ? "button-concave concave-dark" : "button-concave"}
                  onClick={() => {
                    dispatch(changeFormType("note"));
                  }}
                >
                  <h3>Notatki</h3>
                </div>
              )}
            </div>
          </div>
          <div className={darkMode === false ? "convex add-list-icons" : "convex-dark add-list-icons"}>
            <div className="icon-container">
              <div className="center w50">
                <Balloons darkMode={darkMode} />
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
          <div className={darkMode === false ? "convex add-list-button" : "convex-dark add-list-button"}>
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
