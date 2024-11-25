// src/index.tsx (or main.tsx)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter

ReactDOM.render(
  <BrowserRouter>  {/* Wrap your app with BrowserRouter */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
