import React, { useState } from "react";
import "./addList.scss";
import "../Convex/convex.scss";
import "../Concave/concave.scss";
import "../Menu/menu.scss";
import Balloons from "../../icons/Balloons";
import CrossSmall from "../../icons/CrossSmall";
import Layers from "../../icons/Layers";
import Trash from "../../icons/Trash";
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
      <div className="add-list">
        <div className="top-icons">
          <Link to="/">
            <div
              className="delete-container"
              onClick={() => {
                dispatch(deleteList(actualList));
              }}
            >
              <div
                className="convex-icon"
                style={{ width: "50px", height: "50px" }}
              >
                <Trash />
              </div>
            </div>
          </Link>
          <Link to="/exercises">
            <div className="cross-container">
              <div
                className="convex-icon"
                style={{ width: "50px", height: "50px" }}
              >
                <CrossSmall />
              </div>
            </div>
          </Link>
        </div>

        <div className="form-container">
          <div className="concave add-list-name">
            <input
              type="text"
              className="input-text"
              name="name"
              value={form.name}
              onChange={handleChange}
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
                name="icon"
                onClick={() => {
                  changeType("list");
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
                  changeType("note");
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
          <div className="convex add-list-button">
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
