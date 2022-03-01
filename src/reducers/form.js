import {
  CHANGE_FORM_NAME,
  CHANGE_FORM_TYPE,
  CHANGE_FORM_ICON,
  RESET_FORM,
} from "../constants/actionTypes";

const form = (actualForm = { name: "", type: "list", icon: "" }, action) => {
  switch (action.type) {
    case CHANGE_FORM_NAME:
      return { ...actualForm, name: action.payload };
    case CHANGE_FORM_TYPE:
      return { ...actualForm, type: action.payload };
    case CHANGE_FORM_ICON:
      return { ...actualForm, icon: action.payload };
    case RESET_FORM:
      return { ...actualForm, name: "", type: "list", icon: "Backpack" };
    default:
      return actualForm;
  }
};

export default form;
