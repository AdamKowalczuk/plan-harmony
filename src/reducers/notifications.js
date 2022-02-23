import { CHANGE_NOTIFICATIONS } from "../constants/actionTypes";

const notifications = (notifications = true, action) => {
  switch (action.type) {
    case CHANGE_NOTIFICATIONS:
      return action.payload;
    default:
      return notifications;
  }
};

export default notifications;
