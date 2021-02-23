import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Notes from "./views/Notes";
import Nav from "./components/Nav";

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div>
          <Switch>
            <Route path="/notes">
              <Notes />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
