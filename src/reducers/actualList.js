import { SET_ACTUAL_LIST } from "../constants/actionTypes";

const actualList = (actualList = "", action) => {
  switch (action.type) {
    case SET_ACTUAL_LIST:
      return action.payload;
    default:
      return actualList;
  }
};

export default actualList;
