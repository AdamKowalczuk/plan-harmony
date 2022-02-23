import { CHANGE_MODE } from "../constants/actionTypes";

const darkMode = (darkMode = false, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return action.payload;
    default:
      return darkMode;
  }
};

export default darkMode;
