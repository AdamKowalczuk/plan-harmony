import {
  CHANGE_FORM_NAME,
  CHANGE_FORM_TYPE,
  CHANGE_FORM_ICON,
  RESET_FORM,
} from "../constants/actionTypes";

export const changeFormName = (actualName) => {
  console.log(actualName);
  return {
    type: "CHANGE_FORM_NAME",
    payload: actualName,
  };
};

export const changeFormType = (selectedType) => {
  return {
    type: "CHANGE_FORM_TYPE",
    payload: selectedType,
  };
};

export const changeFormIcon = (selectedIcon) => {
  return {
    type: "CHANGE_FORM_ICON",
    payload: selectedIcon,
  };
};

export const resetForm = () => {
  return {
    type: "RESET_FORM",
  };
};
