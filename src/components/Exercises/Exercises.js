import React from "react";
import "../Convex/convex.scss";
import "../Concave/concave.scss";
import "./exercises.scss";
import { useSelector, useDispatch } from "react-redux";
import ArrowSmallUp from "../../icons/ArrowSmallUp";
import Nav from "../Nav/Nav";

import {
  changeNewExerciseName,
  resetNewExerciseInput,
} from "../../actions/newExercise";
import { addNewExercise } from "../../actions/lists";

const SingleExercise = (props) => {
  return (
    <>
      <div className="convex single-exercise">
        <div className="concave w40"></div>
        <h3>{props.exercise}</h3>
      </div>
    </>
  );
};

const Exercises = () => {
  const actualList = useSelector((state) => state.actualList);
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);
  const newExercise = useSelector((state) => state.newExercise);
  return (
    <>
      <Nav text={lists[actualList].name} />
      <div className="exercises">
        {lists[actualList].exercises.map((exercise) => {
          return <SingleExercise exercise={exercise} />;
        })}

        <div className="exercise-add-container">
          <div className="concave add-exercise">
            <input
              type="text"
              className="input-text"
              // value={form.name}
              placeholder="Dodaj zadanie..."
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
    </>
  );
};

export default Exercises;
