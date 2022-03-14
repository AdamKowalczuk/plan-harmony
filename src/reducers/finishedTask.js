import { ADD_TO_NUMBER, SUBTRACT_FROM_NUMBER } from "../constants/actionTypes";

const finishedTask = (number = 0, action) => {
  switch (action.type) {
    case ADD_TO_NUMBER:
      return action.payload;
    case SUBTRACT_FROM_NUMBER:
      return action.payload;
    default:
      return number;
  }
};

export default finishedTask;
