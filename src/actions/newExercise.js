// import {
//   CHANGE_NEW_EXERCISE_NAME,
//   RESET_NEW_EXERCISE_INPUT,
//   EDIT_NOTE,
//   DELETE_EXERCISE,
// } from "../constants/actionTypes";

export const changeNewExerciseName = (newValue) => {
  return {
    type: "CHANGE_NEW_EXERCISE_NAME",
    payload: newValue,
  };
};
export const resetNewExerciseInput = () => {
  return {
    type: "RESET_NEW_EXERCISE_INPUT",
  };
};
export const editNote = (newNote, id) => {
  return {
    type: "EDIT_NOTE",
    payload: newNote,
    id: id,
  };
};

export const deleteExercise = (actualList, id) => {
  return {
    type: "DELETE_EXERCISE",
    actualList: actualList,
    id: id,
  };
};
