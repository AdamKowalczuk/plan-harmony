export const addToList = (newItem) => {
  return {
    type: "ADD_TO_LIST",
    payload: newItem,
  };
};
export const editList = (editedList, listId) => {
  return {
    type: "EDIT_LIST",
    editedList: editedList,
    listId: listId,
  };
};
export const deleteList = (listId) => {
  return {
    type: "DELETE_LIST",
    listId: listId,
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

export const changeNewExerciseName = (newValue) => {
  return {
    type: "CHANGE_NEW_EXERCISE_NAME",
    payload: newValue,
  };
};
export const resetNewExerciseInput = () => {
  return {
    type: "RESET_NEW_EXERCISE_INPUT",
  };
};
export const editNote = (newNote, id) => {
  return {
    type: "EDIT_NOTE",
    payload: newNote,
    id: id,
  };
};

export const deleteExercise = (actualList, id) => {
  return {
    type: "DELETE_EXERCISE",
    actualList: actualList,
    id: id,
  };
};
export const subtractFromNumber = (finishedTask) => {
  return {
    type: "SUBTRACT_FROM_NUMBER",
    payload: finishedTask - 1,
  };
};
export const deleteItemFromHistory = (name, listName) => {
  return {
    type: "DELETE_ITEM_FROM_HISTORY",
    name: name,
    listName: listName,
  };
};

export const deleteCompletedExercises = (actualList) => {
  return {
    type: "DELETE_COMPLETED_EXERCISES",
    actualList: actualList,
  };
};

export const changeExerciseToComplete = (actualList, id) => {
  return {
    type: "CHANGE_EXERCISE_TO_COMPLETE",
    actualList: actualList,
    id: id,
  };
};

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

export const changeFormName = (actualName) => {
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

export const addToHistory = (name, time, listName) => {
  return {
    type: "ADD_TO_HISTORY",
    name: name,
    time: time,
    listName: listName,
  };
};

export const addToNumber = (number) => {
  return {
    type: "ADD_TO_NUMBER",
    payload: number + 1,
  };
};

export const deleteFromHistory = (id) => {
  return {
    type: "DELETE_FROM_HISTORY",
    id: id,
  };
};
