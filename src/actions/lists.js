// import {
//   ADD_TO_LIST,
//   CHANGE_ACTUAL_LIST,
//   EDIT_LIST,
//   DELETE_LIST,
//   ADD_NEW_EXERCISE,
// } from "../constants/actionTypes";

export const addToList = (newItem) => {
  return {
    type: "ADD_TO_LIST",
    payload: newItem,
  };
};

export const changeActualList = (actualList) => {
  return {
    type: "CHANGE_ACTUAL_LIST",
    payload: actualList,
  };
};

export const addNewExercise = (newExercise, id) => {
  return {
    type: "ADD_NEW_EXERCISE",
    payload: newExercise,
    id: id,
  };
};

//   export const editList = (selectedType) => {
//     return {
//       type: "CHANGE_FORM_TYPE",
//       payload: selectedType,
//     };
//   };

//   export const deleteList = (selectedIcon) => {
//     return {
//       type: "CHANGE_FORM_ICON",
//       payload: selectedIcon,
//     };
//   };
