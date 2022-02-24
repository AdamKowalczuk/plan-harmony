import React from "react";
import "../Convex/convex.scss";
import "../Concave/concave.scss";
import "./exercises.scss";
import "./notes.scss";
import { useSelector, useDispatch } from "react-redux";
import ArrowSmallUp from "../../icons/ArrowSmallUp";
import Nav from "../Nav/Nav";

import {
  changeNewExerciseName,
  resetNewExerciseInput,
  editNote,
  deleteExercise,
} from "../../actions/newExercise";
import { addNewExercise } from "../../actions/lists";

const SingleExercise = (props) => {
  let actualList = useSelector((state) => state.actualList);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="convex single-exercise"
        onClick={() => {
          dispatch(deleteExercise(actualList, props.id));
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
      <Nav text={lists[actualList].name} />
      {lists[actualList].type === "list" ? (
        <div className="exercises">
          {lists[actualList].exercises.map((exercise, id) => {
            return <SingleExercise exercise={exercise} id={id} key={id} />;
          })}

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
