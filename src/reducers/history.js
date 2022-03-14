import { log } from "react-modal/lib/helpers/ariaAppHider";
import { ADD_TO_HISTORY, DELETE_FROM_HISTORY, DELETE_ITEM_FROM_HISTORY } from "../constants/actionTypes";
let newHistory;
const history = (actualHistory = [], action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      // newHistory = actualhistory;
      // newHistory.push({ name: action.name, time: action.time });
      // return newHistory;
      // newHistory = actualHistory;
      // return newHistory.push({
      //   name: action.name,
      //   time: action.time,
      //   listName: action.listName,
      // });

      // newHistory = actualHistory;
      newHistory = actualHistory;
      newHistory.push({
        name: action.name,
        time: action.time,
        listName: action.listName,
      });
      return newHistory;
    // return {
    //   ...newHistory,
    // };

    case DELETE_FROM_HISTORY:
      newHistory = actualHistory;
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
    case DELETE_ITEM_FROM_HISTORY:
      newHistory = actualHistory;
      newHistory.map((item, id) => {
        if (item.name === action.name && item.listName === action.listName) {
          newHistory.splice(id, 1);
        }
      });
      return newHistory;
    default:
      return actualHistory;
  }
};

export default history;
