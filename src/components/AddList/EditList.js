import React, { useState } from "react";
import "./addList.scss";
import "../Menu/menu.scss";
import Modal from "react-modal";
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

Modal.setAppElement("#root");
const EditList = () => {
  const dispatch = useDispatch();
  let actualList = useSelector((state) => state.actualList);
  let lists = useSelector((state) => state.lists);
  let darkMode = useSelector((state) => state.darkMode);
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
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div className={darkMode === false ? "add-list" : "add-list-dark"}>
        {darkMode === false ? (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="Modal"
          >
            <Link to="/edit-list">
              <div className="cross-container" onClick={closeModal}>
                <div
                  className="convex-icon"
                  style={{ width: "50px", height: "50px" }}
                >
                  <CrossSmall darkMode={darkMode} />
                </div>
              </div>
            </Link>
            <div className="modal-container">
              <div className="convex">
                <h2>Czy na pewno chcesz usunąć tą listę?</h2>
                <div className="modal-button-container">
                  <Link to="/">
                    <div
                      className="convex add-list-button"
                      onClick={() => {
                        dispatch(deleteList(actualList));
                      }}
                    >
                      <h3>Tak</h3>
                    </div>
                  </Link>
                  <Link to="/edit-list" onClick={closeModal}>
                    <div className="convex add-list-button">
                      <h3>Nie</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Modal>
        ) : (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="Modal-dark"
          >
            <Link to="/edit-list">
              <div className="cross-container-dark" onClick={closeModal}>
                <div
                  className="convex-icon-dark"
                  style={{ width: "50px", height: "50px" }}
                >
                  <CrossSmall darkMode={darkMode} />
                </div>
              </div>
            </Link>
            <div className="modal-container-dark">
              <div className="convex-dark">
                <h2>Czy na pewno chcesz usunąć tą listę?</h2>
                <div className="modal-button-container-dark">
                  <Link to="/">
                    <div
                      className="convex-dark add-list-button-dark"
                      onClick={() => {
                        dispatch(deleteList(actualList));
                      }}
                    >
                      <h3>Tak</h3>
                    </div>
                  </Link>
                  <Link to="/edit-list" onClick={closeModal}>
                    <div className="convex-dark add-list-button-dark">
                      <h3>Nie</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Modal>
        )}

        <div className={darkMode === false ? "top-icons" : "top-icons-dark"}>
          <div
            className={
              darkMode === false ? "delete-container" : "delete-container-dark"
            }
            onClick={openModal}
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
