import React from "react";
import "./exercises.scss";
import "./notes.scss";
import { useSelector, useDispatch } from "react-redux";
import Nav2 from "../Nav/Nav2";
import moment from "moment";

import { List2, ArrowSmallUp } from "../../icons/All";

import {
  changeNewExerciseName,
  resetNewExerciseInput,
  editNote,
  deleteExercise,
  addNewExercise,
  addToHistory,
  addToNumber,
} from "../../actions/actions";

const SingleExercise = (props) => {
  let actualList = useSelector((state) => state.actualList);
  let darkMode = useSelector((state) => state.darkMode);
  let finishedTask = useSelector((state) => state.finishedTask);
  let dateYear = moment().format("YYYY");
  let dateMonth = moment().format("MM");
  let dateDay = moment().format("DD");
  let date = new Date(dateYear, dateMonth - 1, dateDay);

  const dispatch = useDispatch();
  return (
    <>
      <div
        className={
          darkMode === false
            ? "convex single-exercises"
            : "convex-dark single-exercise-dark"
        }
        onClick={() => {
          dispatch(deleteExercise(actualList, props.id));
          dispatch(addToHistory(props.exercise, date));
          dispatch(addToNumber(finishedTask));
        }}
      >
        <div
          className={
            darkMode === false
              ? "concave w40 animated-button"
              : "concave-dark w40 animated-button-dark"
          }
        >
          {/* <ArrowSmallUp /> */}
        </div>
        <h3>{props.exercise}</h3>
      </div>
    </>
  );
};

const Exercises = () => {
  let actualList = useSelector((state) => state.actualList);
  const dispatch = useDispatch();
  let lists = useSelector((state) => state.lists);
  let darkMode = useSelector((state) => state.darkMode);
  let newExercise = useSelector((state) => state.newExercise);

  return (
    <>
      <Nav2 text={lists[actualList].name} />
      {lists[actualList].type === "list" ? (
        <div className={darkMode === false ? "exercises" : "exercises-dark"}>
          {lists[actualList].exercises.length === 0 ? (
            <div
              className={
                darkMode === false ? "no-exercises" : "no-exercises-dark"
              }
            >
              <div
                className={
                  darkMode === false
                    ? "exercise-add-container"
                    : "exercise-add-container-dark"
                }
              >
                <List2 />
              </div>
              <h3>Brak zadań</h3>
              <h4>Dodaj nowe zadanie!</h4>
            </div>
          ) : (
            lists[actualList].exercises.map((exercise, id) => {
              return <SingleExercise exercise={exercise} id={id} key={id} />;
            })
          )}

          <div
            className={
              darkMode === false
                ? "exercise-add-container"
                : "exercise-add-container-dark"
            }
          >
            <div
              className={
                darkMode === false
                  ? "concave add-exercise"
                  : "concave-dark add-exercise-dark"
              }
            >
              <input
                type="text"
                className={
                  darkMode === false ? "input-text" : "input-text-dark"
                }
                placeholder="Dodaj zadanie..."
                value={newExercise}
                onChange={(e) => {
                  dispatch(changeNewExerciseName(e.target.value));
                }}
              />
            </div>

            <div
              className={
                darkMode === false ? "convex-icon w50" : "convex-icon-dark w50"
              }
              onClick={(e) => {
                dispatch(addNewExercise(newExercise, actualList));
                dispatch(resetNewExerciseInput());
              }}
            >
              <ArrowSmallUp />
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Exercises;
