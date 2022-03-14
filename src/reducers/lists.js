import { log } from "react-modal/lib/helpers/ariaAppHider";
import {
  ADD_TO_LIST,
  ADD_NEW_EXERCISE,
  EDIT_NOTE,
  DELETE_EXERCISE,
  EDIT_LIST,
  DELETE_LIST,
  CHANGE_EXERCISE_TO_COMPLETE,
  DELETE_COMPLETED_EXERCISES,
} from "../constants/actionTypes";

let list = [
  {
    name: "Lista zadań",
    icon: "ListCheck",
    type: "list",
    exercises: [],
    finishedExercises: [],
  },
  {
    name: "Lista zakupów",
    icon: "ShoppingBag",
    type: "list",
    exercises: [],
    finishedExercises: [],
  },
  {
    name: "Cele na rok",
    icon: "Plane",
    type: "list",
    exercises: [],
    finishedExercises: [],
  },
  {
    name: "Książki",
    icon: "Book",
    type: "list",
    exercises: [],
    finishedExercises: [],
  },
  {
    name: "Wydatki",
    icon: "Dollar",
    type: "list",
    exercises: [],
    finishedExercises: [],
  },
  {
    name: "Notatki",
    icon: "Edit",
    type: "note",
    note: "",
    finishedExercises: [],
  },
];
let newList, newExercises;

const lists = (lists = list, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      newList = lists;
      newList.push(action.payload);
      return newList;
    case EDIT_LIST:
      newList = lists;
      newList[action.listId] = action.editedList;
      return newList;
    case ADD_NEW_EXERCISE:
      newList = lists;
      newList[action.id].exercises.push({
        name: action.payload,
        isCompleted: false,
      });
      return newList;

    case CHANGE_EXERCISE_TO_COMPLETE:
      newList = lists;
      return lists.map((list, id) => {
        if (id === action.actualList) {
          let isCompleted = newList[action.actualList].exercises[action.id].isCompleted;
          newList[action.actualList].exercises[action.id].isCompleted = !isCompleted;
        }
        return list;
      });

    case EDIT_NOTE:
      newList = lists;
      newList[action.id].note = action.payload;
      return newList;
    case DELETE_LIST:
      newList = lists;
      newList.splice(action.listId, 1);
      return newList;
    // newList = lists;
    // return lists.map((list, id) => {
    //   if (id === action.listId) {
    //     newList.splice(action.listId, 1);
    //   }
    //   return list;
    // });

    case DELETE_EXERCISE:
      newList = lists;
      return lists.map((list, id) => {
        if (id === action.actualList) {
          newList[action.actualList].exercises.splice(action.id, 1);
        }
        return list;
      });
    case DELETE_COMPLETED_EXERCISES:
      newList = lists;
      newExercises = [];
      lists[action.actualList].exercises.map((list, id) => {
        if (list.isCompleted === false) {
          newExercises.push(list);
        }
      });
      lists[action.actualList].exercises = newExercises;
      return [...lists];
    default:
      return lists;
  }
};

export default lists;
