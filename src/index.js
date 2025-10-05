import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // It knows to find App.jsx

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);