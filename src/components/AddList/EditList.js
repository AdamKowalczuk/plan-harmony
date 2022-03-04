import React, { useState } from "react";
import "./addList.scss";
import "../Menu/menu.scss";
import { Balloons, CrossSmall, Layers, Trash } from "../../icons/All";
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
  ListCheck,
  ShoppingBag,
  Book,
  Dollar,
  Edit,
} from "../../list-icons/All";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editList, deleteList } from "../../actions/actions";
let components = [
  <ListCheck icon="ListCheck" />,
  <ShoppingBag icon="ShoppingBag" />,
  <Book icon="Book" />,
  <Dollar icon="Dollar" />,
  <Edit icon="Edit" />,

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
const EditList = () => {
  const dispatch = useDispatch();
  let actualList = useSelector((state) => state.actualList);
  let lists = useSelector((state) => state.lists);
  let darkMode = useSelector((state) => state.darkMode);
  const initialState = {
    name: lists[actualList].name,
    type: lists[actualList].type,
    icon: lists[actualList].icon,
    exercises: lists[actualList].exercises,
  };
  const [form, setForm] = useState(initialState);
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const changeIcon = (icon) => {
    setForm({ ...form, icon: icon });
  };
  const changeType = (type) => {
    setForm({ ...form, type: type });
  };
  function iconId() {
    for (let i = 0; i < components.length; i++) {
      if (components[i].props.icon === form.icon) {
        return i;
      }
    }
  }
  iconId();

  const [color, setColor] = useState(iconId);

  const changeColor = (id) => {
    setColor(id);
  };
  return (
    <>
      <div className={darkMode === false ? "add-list" : "add-list-dark"}>
        <div className={darkMode === false ? "top-icons" : "top-icons-dark"}>
          <Link to="/">
            <div
              className={
                darkMode === false
                  ? "delete-container"
                  : "delete-container-dark"
              }
              onClick={() => {
                dispatch(deleteList(actualList));
              }}
            >
              <div
                className={
                  darkMode === false ? "convex-icon" : "convex-icon-dark"
                }
                style={{ width: "50px", height: "50px" }}
              >
                <Trash darkMode={darkMode} />
              </div>
            </div>
          </Link>
          <Link to="/exercises">
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
        </div>

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
              name="name"
              value={form.name}
              onChange={handleChange}
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
                  name="icon"
                  onClick={() => {
                    changeType("list");
                  }}
                >
                  <h3>Lista</h3>
                </div>
              ) : (
                <div
                  className={
                    form.type === "list"
                      ? "button-concave-dark concave-dark"
                      : "button-concave-dark"
                  }
                  name="icon"
                  onClick={() => {
                    changeType("list");
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
                    changeType("note");
                  }}
                >
                  <h3>Notatki</h3>
                </div>
              ) : (
                <div
                  className={
                    form.type === "note"
                      ? "button-concave-dark concave-dark"
                      : "button-concave-dark"
                  }
                  onClick={() => {
                    changeType("note");
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
                    name="icon"
                    onClick={() => {
                      changeIcon(component.props.icon);
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
            <Link className="link" to="/exercises">
              <h3
                onClick={() => {
                  dispatch(editList(form, actualList));
                }}
              >
                Edytuj
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditList;
