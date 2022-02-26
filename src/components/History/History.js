import React from "react";
import "./history.scss";
import "../Convex/convex.scss";
import {
  useSelector,
  // , useDispatch
} from "react-redux";
import Nav from "../Nav/Nav";
import moment from "moment";
import DateDiff from "date-diff";
const History = () => {
  let history = useSelector((state) => state.history);
  let finishedTask = useSelector((state) => state.finishedTask);
  let newDateYear = moment().format("YYYY");
  let newDateMonth = moment().format("MM");
  let newDateDay = moment().format("DD");
  let newDate = new Date(newDateYear, newDateMonth, newDateDay);

  function checkTodayFinished() {
    let day;
    day = 0;
    history.map((item) => {
      let diff = new DateDiff(newDate, item.time);
      if (diff.days() < 1) {
        day++;
      } else {
        return day;
      }
    });
    return day;
  }
  let days = [0, 0, 0, 0, 0, 0, 0];

  function exercisesEachDay() {
    let day = newDate.getDay();
    history.map((item) => {
      let diff = new DateDiff(newDate, item.time);

      if (diff.days() < day) {
        switch (item.time.getDay() - 1) {
          case 0:
            days[0]++;
            break;
          case 1:
            days[1]++;
            break;
          case 2:
            days[2]++;
            break;
          case 3:
            days[3]++;
            break;
          case 4:
            days[4]++;
            break;
          case 5:
            days[5]++;
            break;
          case 6:
            days[6]++;
            break;
          default:
            break;
        }
      }
      return days;
    });
  }
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
  getMaxNumber(days);
  // let maxNumber = getMaxNumber(days);
  let maxNumber = getMaxNumber(days);
  return (
    <>
      <Nav text="Lista zadań" />
      <div className="history">
        <div className="convex history-convex">
          <h3>Wykres aktywności</h3>
          <div className="chart">
            <div className="column">
              <h4>{days[0]}</h4>
              <div className="progress-bar">
                <div
                  className="fill"
                  style={{ height: (days[0] / maxNumber) * 150 }}
                ></div>
              </div>
              <h4>Mon</h4>
            </div>
            <div className="column">
              <h4>{days[1]}</h4>
              <div className="progress-bar">
                <div
                  className="fill"
                  style={{ height: (days[1] / maxNumber) * 150 }}
                ></div>
              </div>
              <h4>Tur</h4>
            </div>
            <div className="column">
              <h4>{days[2]}</h4>
              <div className="progress-bar">
                <div
                  className="fill"
                  style={{ height: (days[2] / maxNumber) * 150 }}
                ></div>
              </div>
              <h4>Wed</h4>
            </div>
            <div className="column">
              <h4>{days[3]}</h4>
              <div className="progress-bar">
                <div
                  className="fill"
                  style={{ height: (days[3] / maxNumber) * 150 }}
                ></div>
              </div>
              <h4>Thu</h4>
            </div>
            <div className="column">
              <h4>{days[4]}</h4>
              <div className="progress-bar">
                <div
                  className="fill"
                  style={{ height: (days[4] / maxNumber) * 150 }}
                ></div>
              </div>
              <h4>Fri</h4>
            </div>
            <div className="column">
              <h4>{days[5]}</h4>
              <div className="progress-bar">
                <div
                  className="fill"
                  style={{ height: (days[5] / maxNumber) * 150 }}
                ></div>
              </div>
              <h4>Sat</h4>
            </div>
            <div className="column">
              <h4>{days[6]}</h4>
              <div className="progress-bar">
                <div
                  className="fill"
                  style={{ height: (days[6] / maxNumber) * 150 }}
                ></div>
              </div>
              <h4>Sun</h4>
            </div>
          </div>
          <div className="history-sum">
            <div className="convex">
              <h4>Dzisiaj</h4>
              <h4 className="finished-tasks">{checkTodayFinished()}</h4>
            </div>
            <div className="convex">
              <h4>W tym tygodniu</h4>
              <h4 className="finished-tasks">{history.length}</h4>
            </div>
            <div className="convex">
              <h4>Łącznie</h4>
              <h4 className="finished-tasks">{finishedTask}</h4>
            </div>
          </div>
        </div>
        <div className="convex history-container">
          {history.map((item, id) => {
            let formattedDate = moment(item.time).format("DD-MM-YYYY");
            return (
              <div className="row" key={id}>
                <h4 className="gray">{item.name}</h4>
                <h4>{formattedDate}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default History;
