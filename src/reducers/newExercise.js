import {
  CHANGE_NEW_EXERCISE_NAME,
  RESET_NEW_EXERCISE_INPUT,
} from "../constants/actionTypes";

const newExercise = (newExercise = "", action) => {
  switch (action.type) {
    case CHANGE_NEW_EXERCISE_NAME:
      return action.payload;
    case RESET_NEW_EXERCISE_INPUT:
      let exercise = "";
      return exercise;
    default:
      return newExercise;
  }
};

export default newExercise;
