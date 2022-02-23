import {
  SET_ACTUAL_LIST,
  CHANGE_MODE,
  CHANGE_NOTIFICATIONS,
} from "../constants/actionTypes";

export const setActualList = (actualList) => {
  return {
    type: "SET_ACTUAL_QUIZ",
    payload: !actualList,
  };
};

export const changeMode = (selectedMode) => {
  return {
    type: "CHANGE_MODE",
    payload: selectedMode,
  };
};

export const changeNotifications = (selectedNotifications) => {
  return {
    type: "CHANGE_NOTIFICATIONS",
    payload: selectedNotifications,
  };
};
