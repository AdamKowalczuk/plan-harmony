import React, { useState } from "react";
import "./exercises.scss";
import "./notes.scss";
import { useSelector, useDispatch } from "react-redux";
import Nav2 from "../Nav/Nav2";
import moment from "moment";
import { motion } from "framer-motion";
import { List2, ArrowSmallUp, Check } from "../../icons/All";

import {
  changeNewExerciseName,
  resetNewExerciseInput,
  editNote,
  deleteExercise,
  subtractFromNumber,
  deleteItemFromHistory,
  addNewExercise,
  addToHistory,
  addToNumber,
  changeExerciseToComplete,
} from "../../actions/actions";
const containerVariants = {
  hidden: {
    opacity: 0,
    y: "-50px",
  },
  visible: {
    opacity: 1,
    y: "0px",
    transition: {
      duration: 0.5,
    },
  },
};
const deleteVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 0.5,
    transition: {
      duration: 0.5,
    },
  },
};
const SingleExercise = (props) => {
  let actualList = useSelector((state) => state.actualList);
  let lists = useSelector((state) => state.lists);
  let darkMode = useSelector((state) => state.darkMode);
  let finishedTask = useSelector((state) => state.finishedTask);
  let dateYear = moment().format("YYYY");
  let dateMonth = moment().format("MM");
  let dateDay = moment().format("DD");
  let date = new Date(dateYear, dateMonth - 1, dateDay);
  let [deleted, setDelete] = useState(false);

  const dispatch = useDispatch();
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial={props.animate ? "hidden" : "visible"}
        animate={props.animate ? "visible" : "visible"}
        key={props.id}
        className={darkMode === false ? "convex single-exercise" : "convex-dark single-exercise single-exercise-dark"}
        onClick={
          props.isCompleted
            ? () => {
                setDelete(true);
                dispatch(deleteItemFromHistory(props.name, lists[actualList].name));
                dispatch(changeExerciseToComplete(actualList, props.id));
                dispatch(subtractFromNumber(finishedTask));
              }
            : () => {
                setDelete(true);
                dispatch(addToHistory(props.name, date, lists[actualList].name));
                dispatch(changeExerciseToComplete(actualList, props.id));
                dispatch(addToNumber(finishedTask));
              }
        }
        // onClick={() => {
        //   setDelete(true);
        //   dispatch(addToHistory(props.name, date, lists[actualList].name));
        //   dispatch(changeExerciseToComplete(actualList, props.id));
        //   dispatch(addToNumber(finishedTask));
        // }}
      >
        <div className={darkMode === false ? "concave w40 animated-button" : "concave-dark w40 animated-button"}>
          {props.isCompleted ? <Check darkMode={darkMode} /> : null}
        </div>

        {props.isCompleted === false ? (
          <h3>{props.name}</h3>
        ) : (
          [
            props.deleted ? (
              <motion.h3
                variants={deleteVariants}
                initial={deleted ? "hidden" : "visible"}
                animate={deleted ? "visible" : "visible"}
                className="deleted-h3"
              >
                {props.name}
              </motion.h3>
            ) : (
              <motion.h3
                variants={deleteVariants}
                initial={deleted ? "hidden" : "visible"}
                animate={deleted ? "visible" : "visible"}
                className="deleted-h3"
              >
                {props.name}
              </motion.h3>
            ),
          ]
        )}
      </motion.div>
    </>
  );
};

const Exercises = () => {
  let actualList = useSelector((state) => state.actualList);
  const dispatch = useDispatch();
  const [animate, setAnimate] = useState(false);

  let lists = useSelector((state) => state.lists);
  let history = useSelector((state) => state.history);
  let darkMode = useSelector((state) => state.darkMode);
  let newExercise = useSelector((state) => state.newExercise);

  return (
    <>
      <Nav2 text={lists[actualList].name} type={lists[actualList].type} />
      {lists[actualList].type === "list" ? (
        <>
          <motion.div className={darkMode === false ? "exercises" : "exercises exercises-dark"}>
            {lists[actualList].exercises.length === 0 ? (
              <div className={darkMode === false ? "no-exercises" : "no-exercises-dark"}>
                <div className={darkMode === false ? "exercise-container convex" : "exercise-container-dark convex-dark"}>
                  <List2 darkMode={darkMode} />
                </div>
                <h3>Brak zadań</h3>
                <h4>Dodaj nowe zadanie!</h4>
              </div>
            ) : (
              <>
                {lists[actualList].exercises.map((exercise, id) => {
                  return <SingleExercise animate={animate} name={exercise.name} isCompleted={exercise.isCompleted} id={id} key={id} />;
                })}
              </>
            )}
          </motion.div>
          <div className={darkMode === false ? "exercise-add-container" : "exercise-add-container-dark"}>
            <div className={darkMode === false ? "concave add-exercise" : "concave-dark add-exercise-dark"}>
              <input
                type="text"
                className={darkMode === false ? "input-text" : "input-text-dark"}
                placeholder="Dodaj zadanie..."
                value={newExercise}
                onChange={(e) => {
                  dispatch(changeNewExerciseName(e.target.value));
                }}
              />
            </div>

            <div
              className={darkMode === false ? "convex-icon w50" : "convex-icon-dark w50"}
              onClick={(e) => {
                setAnimate(true);
                dispatch(addNewExercise(newExercise, actualList));
                dispatch(resetNewExerciseInput());
              }}
            >
              <ArrowSmallUp darkMode={darkMode} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={darkMode === false ? "notes" : "notes-dark"}>
            <textarea
              className={darkMode === false ? "concave" : "concave-dark"}
              cols="30"
              rows="20"
              placeholder="Wpisz swoje notatki..."
              onChange={(e) => {
                dispatch(editNote(e.target.value, actualList));
              }}
            >
              {lists[actualList].note}
            </textarea>
          </div>
        </>
      )}
    </>
  );
};

export default Exercises;
