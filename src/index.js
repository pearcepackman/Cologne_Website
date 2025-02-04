import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { About } from './pages/about';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Awards } from './pages/awards';









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path = "/" element = {<App/>} />
        <Route path = "/about" element = {<About/>} />
        <Route path = "/awards" element = {<Awards/>} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
