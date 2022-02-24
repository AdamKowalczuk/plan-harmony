import {
  CHANGE_NEW_EXERCISE_NAME,
  RESET_NEW_EXERCISE_INPUT,
} from "../constants/actionTypes";

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
