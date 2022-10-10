import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Calendar }  from 'views/Apps/Calendar/Calendar';
import { Culture }  from 'views/Apps/Culture/Culture';
import { Excelencia } from 'views/Apps/Excelencia/Excelencia';
import { Faq } from 'views/Apps/FAQs/Faq';
import { Sie } from 'views/Apps/SIE/Sie';
import { Somos } from 'views/Apps/Somos/Somos';
import { Touchid } from 'views/Apps/TouchId/Touchid';
import { Unitel } from 'views/Apps/Unitel/Unitel';
import { Universidad } from 'views/Apps/UniversidadRU/Universidad';

import reportWebVitals from 'reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/excelencia" element={<Excelencia />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/sie" element={<Sie />} />
        <Route path="/somos" element={<Somos />} />
        <Route path="/touchid" element={<Touchid />} />
        <Route path="/unitel" element={<Unitel />} />
        <Route path="/universidadru" element={<Universidad />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
