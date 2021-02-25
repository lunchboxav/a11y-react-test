import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Notes from "./views/Notes";
import Nav from "./components/Nav";
import FlexContainer from "./components/FlexContainer";

export default function App() {
  return (
    <Router>
      <FlexContainer>
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
      </FlexContainer>
    </Router>
  );
}
