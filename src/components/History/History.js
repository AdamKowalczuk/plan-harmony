import React from "react";
import "./history.scss";
import { useSelector, useDispatch } from "react-redux";
import Nav from "../Nav/Nav";
import moment from "moment";
import DateDiff from "date-diff";
import { deleteFromHistory } from "../../actions/actions";
const History = () => {
  const dispatch = useDispatch();
  let history = useSelector((state) => state.history);
  let darkMode = useSelector((state) => state.darkMode);
  let finishedTask = useSelector((state) => state.finishedTask);
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
  let days = [0, 0, 0, 0, 0, 0, 0];

  function exercisesEachDay() {
    let weekStart = moment(newDate).startOf("isoWeek")._d;
    let weekDay = new Date(weekStart);
    let weekDays = [];
    for (let i = 0; i < 7; i++) {
      let date = new Date(weekDay);
      weekDays.push(moment(date).format("YYYY-MM-DD"));
      weekDay.setDate(weekDay.getDate() + 1);
    }
    let historyTime;
    for (let i = 0; i < history.length; i++) {
      historyTime = new Date(history[i].time);
      switch (moment(historyTime).format("YYYY-MM-DD")) {
        case weekDays[0]:
          days[0]++;
          break;
        case weekDays[1]:
          days[1]++;
          break;
        case weekDays[2]:
          days[2]++;
          break;
        case weekDays[3]:
          days[3]++;
          break;
        case weekDays[4]:
          days[4]++;
          break;
        case weekDays[5]:
          days[5]++;
          break;
        case weekDays[6]:
          days[6]++;
          break;
        default:
          break;
      }
    }
  }
  function deleteTasksLongerThanWeek() {
    let newTime, diff;
    for (let i = 0; i < history.length; i++) {
      newTime = new Date(history[i].time);
      diff = new DateDiff(newDate, newTime);
      if (diff.days() > 6) {
        dispatch(deleteFromHistory(i));
      }
    }
  }
  deleteTasksLongerThanWeek();

  exercisesEachDay();
  function getMaxNumber(days) {
    let maxNumber = 0;
    for (let i = 0; i < days.length; i++) {
      if (days[i] > maxNumber) {
        maxNumber = days[i];
      }
    }
    return maxNumber;
  }
  function getHeight(day) {
    let result = (day / maxNumber) * 150;
    if (isNaN(result)) {
      result = 0;
    }
    return result;
  }
  function getExercisesForWeek() {
    let result = 0;
    for (let i = 0; i < days.length; i++) {
      result += days[i];
    }
    return result;
  }

  let maxNumber = getMaxNumber(days);
  return (
    <>
      <Nav text="Lista zadań" />
      <div className={darkMode === false ? "history" : "history-dark"}>
        <div className={darkMode === false ? "convex history-convex" : "convex-dark history-convex-dark"}>
          <h2 className={darkMode === false ? "gray" : "green"}>Wykres aktywności</h2>
          <div className={darkMode === false ? "chart" : "chart-dark"}>
            <div className={darkMode === false ? "column" : "column-dark"}>
              <h4>{days[0]}</h4>
              <div className={darkMode === false ? "progress-bar concave" : "progress-bar-dark concave-dark"}>
                <div className={darkMode === false ? "fill" : "fill-dark"} style={{ height: getHeight(days[0]) }}></div>
              </div>
              <h4>Mon</h4>
            </div>
            <div className={darkMode === false ? "column" : "column-dark"}>
              <h4>{days[1]}</h4>
              <div className={darkMode === false ? "progress-bar concave" : "progress-bar-dark concave-dark"}>
                <div className={darkMode === false ? "fill" : "fill-dark"} style={{ height: getHeight(days[1]) }}></div>
              </div>
              <h4>Tur</h4>
            </div>
            <div className={darkMode === false ? "column" : "column-dark"}>
              <h4>{days[2]}</h4>
              <div className={darkMode === false ? "progress-bar concave" : "progress-bar-dark concave-dark"}>
                <div className={darkMode === false ? "fill" : "fill-dark"} style={{ height: getHeight(days[2]) }}></div>
              </div>
              <h4>Wed</h4>
            </div>
            <div className={darkMode === false ? "column" : "column-dark"}>
              <h4>{days[3]}</h4>
              <div className={darkMode === false ? "progress-bar concave" : "progress-bar-dark concave-dark"}>
                <div className={darkMode === false ? "fill" : "fill-dark"} style={{ height: getHeight(days[3]) }}></div>
              </div>
              <h4>Thu</h4>
            </div>
            <div className={darkMode === false ? "column" : "column-dark"}>
              <h4>{days[4]}</h4>
              <div className={darkMode === false ? "progress-bar concave" : "progress-bar-dark concave-dark"}>
                <div className={darkMode === false ? "fill" : "fill-dark"} style={{ height: getHeight(days[4]) }}></div>
              </div>
              <h4>Fri</h4>
            </div>
            <div className={darkMode === false ? "column" : "column-dark"}>
              <h4>{days[5]}</h4>
              <div className={darkMode === false ? "progress-bar concave" : "progress-bar-dark concave-dark"}>
                <div className={darkMode === false ? "fill" : "fill-dark"} style={{ height: getHeight(days[5]) }}></div>
              </div>
              <h4>Sat</h4>
            </div>
            <div className={darkMode === false ? "column" : "column-dark"}>
              <h4>{days[6]}</h4>
              <div className={darkMode === false ? "progress-bar concave" : "progress-bar-dark concave-dark"}>
                <div className={darkMode === false ? "fill" : "fill-dark"} style={{ height: getHeight(days[6]) }}></div>
              </div>
              <h4>Sun</h4>
            </div>
          </div>
          <div className={darkMode === false ? "history-sum" : "history-sum-dark"}>
            <div className={darkMode === false ? "convex" : "convex-dark"}>
              <h4>Dzisiaj</h4>
              <h3 className={darkMode === false ? "finished-tasks pink" : "finished-task-dark pink"}>{checkTodayFinished()}</h3>
            </div>
            <div className={darkMode === false ? "convex" : "convex-dark"}>
              <h4>Tydzień</h4>
              <h3 className={darkMode === false ? "finished-tasks pink" : "finished-task-dark pink"}>{getExercisesForWeek()}</h3>
            </div>
            <div className={darkMode === false ? "convex" : "convex-dark"}>
              <h4>Łącznie</h4>
              <h3 className={darkMode === false ? "finished-tasks pink" : "finished-task-dark pink"}>{finishedTask}</h3>
            </div>
          </div>
        </div>

        <div className={darkMode === false ? "convex history-container" : "convex-dark history-container-dark"}>
          <h3>Wykonane zadania:</h3>
          {history.length === 0 ? (
            <p>Brak</p>
          ) : (
            <>
              <table className={darkMode === false ? "table" : "table-dark"}>
                <tr className={darkMode === false ? "table-header" : "table-header-dark"}>
                  <th>Id</th>
                  <th>Nazwa</th>
                  <th>Data ukończenia</th>
                </tr>
                {history.map((item, id) => {
                  let formattedDate = moment(item.time).format("DD-MM-YYYY");
                  return (
                    <>
                      <tr key={id}>
                        <th>#{id + 1}</th>
                        <th>{item.name}</th>
                        <th>{formattedDate}</th>
                      </tr>
                    </>
                  );
                })}
              </table>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default History;
