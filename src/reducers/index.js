import { combineReducers } from "redux";

import actualList from "./actualList";
import darkMode from "./darkMode";
import lists from "./lists";
import notifications from "./notifications";
import form from "./form";

export const reducers = combineReducers({
  actualList,
  darkMode,
  lists,
  notifications,
  form,
});
