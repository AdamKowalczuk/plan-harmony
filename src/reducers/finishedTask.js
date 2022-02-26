import { ADD_TO_NUMBER } from "../constants/actionTypes";

const finishedTask = (number = 0, action) => {
  switch (action.type) {
    case ADD_TO_NUMBER:
      return action.payload;

    default:
      return number;
  }
};

export default finishedTask;
