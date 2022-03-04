import { ADD_TO_HISTORY, DELETE_FROM_HISTORY } from "../constants/actionTypes";
let newHistory;
const history = (actualhistory = [], action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      newHistory = actualhistory;
      newHistory.push({ name: action.name, time: action.time });
      return newHistory;
    case DELETE_FROM_HISTORY:
      newHistory = actualhistory;
      newHistory.splice(action.id, 1);
      return newHistory;
    // newHistory = actualhistory;
    // return actualhistory.map((item, id) => {
    //   if (id === action.id) {
    //     console.log("FIND");
    //     console.log(newHistory[action.id]);
    //     newHistory[action.id].splice(action.id, 1);
    //   }
    //   return item;
    // });
    default:
      return actualhistory;
  }
};

export default history;
