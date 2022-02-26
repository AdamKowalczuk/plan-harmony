import "./App.css";
import List from "./components/List/List.js";
import Exercises from "./components/Exercises/Exercises.js";
import Menu from "./components/Menu/Menu.js";
import History from "./components/History/History.js";
import Profile from "./components/Profile/Profile.js";

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddList from "./components/AddList/AddList";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <List />
          </Route>
          <Route path="/add-list">
            <AddList />
          </Route>
          <Route path="/exercises">
            <Exercises />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/history">
            <History />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker.register("serviceWorker.js");
//   });
// }
export default App;
