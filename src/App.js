import "./App.css";
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Board from "./component/board";
import Page1 from "./component/page1";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/board">
            <Board />
          </Route>
          <Route path="/">
            <Page1 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
