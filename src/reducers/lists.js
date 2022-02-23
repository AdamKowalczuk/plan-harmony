// import { SET_ACTUAL_LIST } from "../constants/actionTypes";
import ListCheck from "../list-icons/ListCheck";
import ShoppingBag from "../list-icons/ShoppingBag";
import Plane from "../list-icons/Plane";
import Book from "../list-icons/Book";
import Dollar from "../list-icons/Dollar";
import Edit from "../list-icons/Edit";
import { ADD_TO_LIST } from "../constants/actionTypes";

let list = [
  {
    name: "Lista zadań",
    icon: <ListCheck />,
    type: "list",
    exercies: [],
    finishedExercises: [],
  },
  {
    name: "Lista zakupów",
    icon: <ShoppingBag />,
    type: "list",
    exercies: [],
    finishedExercises: [],
  },
  {
    name: "Cele na rok",
    icon: <Plane />,
    type: "list",
    exercies: [],
    finishedExercises: [],
  },
  {
    name: "Książki",
    icon: <Book />,
    type: "list",
    exercies: [],
    finishedExercises: [],
  },
  {
    name: "Wydatki",
    icon: <Dollar />,
    type: "list",
    exercies: [],
    finishedExercises: [],
  },
  {
    name: "Notatki",
    icon: <Edit />,
    type: "list",
    exercies: [],
    finishedExercises: [],
  },
];
let newList;
const lists = (lists = list, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      newList = lists;
      newList.push(action.payload);
      return newList;
    default:
      return lists;
  }
};

export default lists;
