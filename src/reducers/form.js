import {
  CHANGE_FORM_NAME,
  CHANGE_FORM_TYPE,
  CHANGE_FORM_ICON,
  RESET_FORM,
} from "../constants/actionTypes";

let newForm;
const form = (actualForm = { name: "", type: true, icon: "" }, action) => {
  switch (action.type) {
    case CHANGE_FORM_NAME:
      // newForm = actualForm;
      // newForm.name = action.payload;
      // return newForm;
      return { ...actualForm, name: action.payload };
    case CHANGE_FORM_TYPE:
      // newForm = actualForm;
      // newForm.type = action.payload;
      // return newForm;
      return { ...actualForm, type: action.payload };
    case CHANGE_FORM_ICON:
      // newForm = actualForm;
      // newForm.icon = action.payload;
      // return newForm;
      return { ...actualForm, icon: action.payload };
    case RESET_FORM:
      // newForm = { name: "", type: true, icon: "" };
      // return newForm;
      return { ...actualForm, name: "", type: true, icon: "" };
    default:
      return actualForm;
  }
};

export default form;
