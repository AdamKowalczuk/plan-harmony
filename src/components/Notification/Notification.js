import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { requestForToken, onMessageListener } from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import { Trophy } from "../../icons/All";
import "./notification.scss";
import moment from "moment";
const Notification = () => {
  let history = useSelector((state) => state.history);
  let newDateYear = moment().format("YYYY");
  let newDateMonth = moment().format("MM");
  let newDateDay = moment().format("DD");
  let newDate = new Date(newDateYear, newDateMonth - 1, newDateDay);
  function checkTodayFinished() {
    let day = 0;
    let newHistoryItem;
    for (let i = 0; i < history.length; i++) {
      newHistoryItem = new Date(history[i].time);
      if (newHistoryItem.getDay() === newDate.getDay()) {
        day++;
      }
    }
    return day;
  }
  const [notification, setNotification] = useState({
    title: "",
    body: "",
    image: "",
  });
  const notify = () => toast(<ToastDisplay />);
  function ToastDisplay() {
    return (
      <div className="notification">
        {/* <p>
          <b>Gratulacje!</b>
        </p>
        <p>Dzisiaj wykonałeś</p>
        <Trophy />
        <b>{checkTodayFinished()} zadań</b> */}
        <p>
          <b>HEH {notification?.title}</b>
        </p>
        <p>{notification?.body}</p>
        <p>
          {checkTodayFinished()} {notification?.title}
        </p>
        {/* <img src={notification?.image} alt="notification" /> */}
        {/* <Trophy />
        <b>{checkTodayFinished()} zadań</b> */}
        {/* <p>
          <b>{notification?.title}</b>
        </p>
        <p>{notification?.body}</p>
        <img src={notification?.image} width="100px" alt="" /> */}
      </div>
    );
  }

  useEffect(() => {
    if (notification?.title) {
      notify();
    }
  }, [notification]);

  requestForToken();

  onMessageListener()
    .then((payload) => {
      // alert(console.log(payload?.notification?.title));

      setNotification({
        title: payload?.notification?.title,
        body: payload?.notification?.body,
        image: payload?.notification?.image,
      });
    })
    .catch((err) => console.log("failed: ", err));

  return <Toaster />;
};

export default Notification;
