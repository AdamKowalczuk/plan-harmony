import { ADD_TO_HISTORY } from "../constants/actionTypes";
let newHistory;
const history = (actualhistory = [], action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      newHistory = actualhistory;
      newHistory.push({ name: action.name, time: action.time });
      return newHistory;

    default:
      return actualhistory;
  }
};

export default history;
