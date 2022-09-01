import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './app/App';
import DotPatterns from './pages/project-demos/dot-patterns';
import reportWebVitals from './misc/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/dot-patterns" element={<DotPatterns />}></Route>
      <Route
        path="/project-demos/dot-patterns/dot-patterns"
        render={() => { window.location.href = "dot-patterns.html" }}
      >
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
