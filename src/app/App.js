import React, { Component } from 'react';
import Home from '../components/Home';
import DotPatterns from '../pages/project-demos/dot-patterns/index';
import Projects from '../components/projects';
import { Route, Routes } from "react-router-dom";


class App extends Component {
  render() {
    console.log("app start!!");
    console.log(DotPatterns);
    return (
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dot-patterns" element={<Home />}></Route>
        </Routes>
        
      </div>
    );
  }
}

export default App;
