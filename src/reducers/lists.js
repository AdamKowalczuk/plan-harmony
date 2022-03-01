import {
  ADD_TO_LIST,
  ADD_NEW_EXERCISE,
  EDIT_NOTE,
  DELETE_EXERCISE,
  EDIT_LIST,
  DELETE_LIST,
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
let newList;
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
      newList[action.id].exercises.push(action.payload);
      return newList;
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
    default:
      return lists;
  }
};

export default lists;
