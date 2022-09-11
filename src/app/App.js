import React, { Component } from 'react';
import Home from '../components/Home';
import DotPatterns from '../pages/project-demos/dot-patterns/index';
import { Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    console.log("app start?");
    //console.log(DotPatterns);
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dots">
            <DotPatterns />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
