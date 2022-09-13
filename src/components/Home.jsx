import React, { Component } from 'react';
import '../pages/home/home.css';
import Projects from '../components/projects'


class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="top-heading">
          <h1>Barry's Site</h1>
          <p>I'm Barry Zhang. This is where I share some of the things I've worked on. You can also check me out on <a href="https://github.com/bluebarryz" target="_blank">GitHub</a>.</p>
        </div>
        <h2>Projects</h2>
        <Projects />
      </div>
    );
  }
}

export default Home;
