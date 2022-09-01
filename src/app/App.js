import React, { Component } from 'react';
import './App.css';
import Projects from '../components/projects'


class App extends Component {
  render() {
    return (
      <div class="homepage">
        <div className="top-heading">
          <h1>Barry's Site</h1>
          <p>I'm Barry Zhang. This is my website.</p>
        </div>
        <h2>Projects</h2>
        <Projects />
      </div>
    );
  }
}

export default App;
