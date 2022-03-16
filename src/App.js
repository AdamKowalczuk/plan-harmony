import "./App.scss";
import List from "./components/List/List.js";
import Exercises from "./components/Exercises/Exercises.js";
import Menu from "./components/Menu/Menu.js";
import History from "./components/History/History.js";
import { useSelector } from "react-redux";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddList from "./components/AddList/AddList";
import EditList from "./components/AddList/EditList";
import Notification from "./components/Notification/Notification";
function App() {
  let darkMode = useSelector((state) => state.darkMode);
  return (
    <BrowserRouter>
      <Notification />
      <div className={darkMode === false ? "App" : "App-dark"}>
        <Switch>
          <Route path="/" exact>
            <List />
          </Route>
          <Route path="/add-list">
            <AddList />
          </Route>
          <Route path="/edit-list">
            <EditList />
          </Route>
          <Route path="/exercises">
            <Exercises />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/history">
            <History />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("serviceWorker.js");
    // navigator.serviceWorker.register("firebase-messaging-sw.js");
  });
}

export default App;
