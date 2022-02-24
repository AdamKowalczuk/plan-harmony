// import { SET_ACTUAL_LIST } from "../constants/actionTypes";
import ListCheck from "../list-icons/ListCheck";
import ShoppingBag from "../list-icons/ShoppingBag";
import Plane from "../list-icons/Plane";
import Book from "../list-icons/Book";
import Dollar from "../list-icons/Dollar";
import Edit from "../list-icons/Edit";
import { ADD_TO_LIST, ADD_NEW_EXERCISE } from "../constants/actionTypes";

let list = [
  {
    name: "Lista zadań",
    icon: <ListCheck />,
    type: "list",
    exercises: [],
    finishedExercises: [],
  },
  {
    name: "Lista zakupów",
    icon: <ShoppingBag />,
    type: "list",
    exercises: [],
    finishedExercises: [],
  },
  {
    name: "Cele na rok",
    icon: <Plane />,
    type: "list",
    exercises: [],
    finishedExercises: [],
  },
  {
    name: "Książki",
    icon: <Book />,
    type: "list",
    exercises: [],
    finishedExercises: [],
  },
  {
    name: "Wydatki",
    icon: <Dollar />,
    type: "list",
    exercises: [],
    finishedExercises: [],
  },
  {
    name: "Notatki",
    icon: <Edit />,
    type: "list",
    exercises: [],
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
    case ADD_NEW_EXERCISE:
      newList = lists;
      newList[action.id].exercises.push(action.payload);
      return newList;
    default:
      return lists;
  }
};

export default lists;
