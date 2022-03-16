import React from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editList, deleteList, deleteCompletedExercises } from "../../actions/actions";
import Modal from "react-modal";
import { Home, Settings, Trash, Edit, Delete, CrossSmall } from "../../icons/All";
Modal.setAppElement("#root");
const Nav2 = (props) => {
  const dispatch = useDispatch();
  let darkMode = useSelector((state) => state.darkMode);
  let actualList = useSelector((state) => state.actualList);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpen2, setIsOpen2] = React.useState(false);
  function openModal() {
    if (modalIsOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  function closeModal() {
    setIsOpen(false);
  }
  function openModal2() {
    setIsOpen2(true);
  }

  function closeModal2() {
    setIsOpen2(false);
  }
  return (
    <>
      <nav className={darkMode === false ? "nav" : "nav-dark"}>
        <Link to="/">
          <div className={darkMode === false ? "convex-icon w50" : "convex-icon-dark w50"}>
            <Home darkMode={darkMode} />
          </div>
        </Link>

        <h2>{props.text}</h2>

        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={darkMode === false ? "Modal" : "Modal Modal-dark"}>
          <div className={darkMode === false ? "cross-container" : "cross-container cross-container-dark"} onClick={closeModal}>
            <div className={darkMode === false ? "convex-icon w50" : "convex-icon-dark w50"}>
              <CrossSmall darkMode={darkMode} />
            </div>
          </div>
          <div className={darkMode === false ? "modal-container" : "modal-container modal-container-dark"}>
            <div className={darkMode === false ? "convex" : "convex-dark"}>
              {/* <h3>Usuń wykonane zadania</h3> */}
              <div className={darkMode === false ? "modal-with-icons" : " modal-with-icons modal-with-icons-dark"}>
                {props.type === "list" ? (
                  <div
                    onClick={() => {
                      dispatch(deleteCompletedExercises(actualList));
                      closeModal();
                    }}
                    className={darkMode === false ? "modal-row" : "modal-row modal-row-dark"}
                  >
                    {/* <div className={darkMode === false ? "convex-icon w50" : "convex-icon-dark w50"}>
                    <Delete darkMode={darkMode} />
                  </div> */}
                    <h3>Usuń wykonane zadania</h3>
                  </div>
                ) : null}

                <Link to="/edit-list" className="link">
                  <div className={darkMode === false ? "modal-row" : "modal-row modal-row-dark"}>
                    {/* <div className={darkMode === false ? "concave-icon w50" : "convex-icon-dark w50"}>
                      <Edit darkMode={darkMode} />
                    </div> */}

                    <h3>Edytuj listę</h3>
                  </div>
                </Link>

                <div className={darkMode === false ? "modal-row" : "modal-row modal-row-dark"} onClick={openModal2}>
                  {/* <div className={darkMode === false ? "convex-icon w50" : "convex-icon-dark w50"}>
                    <Trash darkMode={darkMode} />
                  </div> */}
                  <h3>Usuń listę</h3>
                </div>
              </div>
            </div>
          </div>
        </Modal>
        <Modal isOpen={modalIsOpen2} onRequestClose={closeModal2} className={darkMode === false ? "Modal" : "Modal Modal-dark"}>
          <Link to="/exercises">
            <div className={darkMode === false ? "cross-container" : "cross-container cross-container-dark"} onClick={closeModal2}>
              <div className={darkMode === false ? "convex-icon w50" : "convex-icon-dark w50"}>
                <CrossSmall darkMode={darkMode} />
              </div>
            </div>
          </Link>
          <div className={darkMode === false ? "modal-container" : "modal-container modal-container-dark"}>
            <div className={darkMode === false ? "convex" : "convex-dark"}>
              <h2>Czy na pewno chcesz usunąć tą listę?</h2>
              <div className={darkMode === false ? "modal-button-container" : "modal-button-container modal-button-container-dark"}>
                <Link to="/">
                  <div
                    className={darkMode === false ? "convex add-list-button" : "convex-dark add-list-button"}
                    onClick={() => {
                      dispatch(deleteList(actualList));
                    }}
                  >
                    <h3>Tak</h3>
                  </div>
                </Link>
                <Link to="/exercises" onClick={closeModal2}>
                  <div className={darkMode === false ? "convex add-list-button" : "convex-dark add-list-button"}>
                    <h3>Nie</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Modal>

        {/* <Link to="/edit-list"> */}
        <div className={darkMode === false ? "convex-icon w50" : "convex-icon-dark w50"} onClick={openModal}>
          <Settings darkMode={darkMode} />
        </div>
        {/* </Link> */}
      </nav>
    </>
  );
};

export default Nav2;
