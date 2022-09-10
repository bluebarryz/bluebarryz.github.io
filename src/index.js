import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import App from './app/App';
import DotPatterns from './pages/project-demos/dot-patterns';
import reportWebVitals from './misc/reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter basename='/'>
      <App />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
