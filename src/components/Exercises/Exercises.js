import React from "react";
import "../Convex/convex.scss";
import "../Concave/concave.scss";
import "./exercises.scss";
import "./notes.scss";
import { useSelector, useDispatch } from "react-redux";
import ArrowSmallUp from "../../icons/ArrowSmallUp";
import Nav2 from "../Nav/Nav2";
import moment from "moment";
import List from "../../icons/List2";

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
  let finishedTask = useSelector((state) => state.finishedTask);
  let dateYear = moment().format("YYYY");
  let dateMonth = moment().format("MM");
  let dateDay = moment().format("DD");
  let date = new Date(dateYear, dateMonth, dateDay);

  const dispatch = useDispatch();
  return (
    <>
      <div
        className="convex single-exercise"
        onClick={() => {
          dispatch(deleteExercise(actualList, props.id));
          dispatch(addToHistory(props.exercise, date));
          dispatch(addToNumber(finishedTask));
        }}
      >
        <div className="concave w40 animated-button">
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
  let newExercise = useSelector((state) => state.newExercise);

  return (
    <>
      <Nav2 text={lists[actualList].name} />
      {lists[actualList].type === "list" ? (
        <div className="exercises">
          {lists[actualList].exercises.length === 0 ? (
            <div className="no-exercises">
              <div className="convex">
                <List />
              </div>
              <h3>Brak zadań</h3>
              <h4>Dodaj nowe zadanie!</h4>
            </div>
          ) : (
            lists[actualList].exercises.map((exercise, id) => {
              return <SingleExercise exercise={exercise} id={id} key={id} />;
            })
          )}

          <div className="exercise-add-container">
            <div className="concave add-exercise">
              <input
                type="text"
                className="input-text"
                placeholder="Dodaj zadanie..."
                value={newExercise}
                onChange={(e) => {
                  dispatch(changeNewExerciseName(e.target.value));
                }}
              />
            </div>

            <div
              className="convex-icon w50"
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
        <div className="notes">
          <textarea
            className="concave"
            cols="30"
            rows="20"
            placeholder="Wpisz swoje notatki..."
            onChange={(e) => {
              dispatch(editNote(e.target.value, actualList));
            }}
          >
            {lists[actualList].note}
          </textarea>
          {/* <div className="convex edit-button">
            <h3
              onClick={() => {
                dispatch(editNote(lists[actualList].note, actualList));
              }}
            >
              Edytuj
            </h3>
          </div> */}
        </div>
      )}
    </>
  );
};

export default Exercises;
