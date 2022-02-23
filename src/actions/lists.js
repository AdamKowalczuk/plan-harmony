import { ADD_TO_LIST, EDIT_LIST, DELETE_LIST } from "../constants/actionTypes";

export const addToList = (newItem) => {
  return {
    type: "ADD_TO_LIST",
    payload: newItem,
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
