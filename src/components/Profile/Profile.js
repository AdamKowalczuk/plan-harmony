import React from "react";
import "./profile.scss";
import "../Convex/convex.scss";
import Nav from "../Nav/Nav";
const Profile = () => {
  return (
    <>
      <Nav text="Lista zadań" />
      <div className="profile">
        <div className="convex profile-convex">
          <h3>Wykres aktywności</h3>
          <div className="chart">
            <div className="column">
              <h4>2</h4>
              <div className="progress-bar">
                <div className="fill"></div>
              </div>
              <h4>Mon</h4>
            </div>
            <div className="column">
              <h4>3</h4>
              <div className="progress-bar"></div>
              <h4>Tur</h4>
            </div>
            <div className="column">
              <h4>4</h4>
              <div className="progress-bar"></div>
              <h4>Wed</h4>
            </div>
            <div className="column">
              <h4>0</h4>
              <div className="progress-bar"></div>
              <h4>Thu</h4>
            </div>
            <div className="column">
              <h4>4</h4>
              <div className="progress-bar"></div>
              <h4>Fri</h4>
            </div>
            <div className="column">
              <h4>3</h4>
              <div className="progress-bar"></div>
              <h4>Sat</h4>
            </div>
            <div className="column">
              <h4>0</h4>
              <div className="progress-bar"></div>
              <h4>Sun</h4>
            </div>
          </div>
          <div className="profile-sum">
            <div className="convex">
              <h4>Dzisiaj</h4>
              <h4>12</h4>
            </div>
            <div className="convex">
              <h4>W tym tygodniu</h4>
              <h4>102</h4>
            </div>
            <div className="convex">
              <h4>Łącznie</h4>
              <h4>2613</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
