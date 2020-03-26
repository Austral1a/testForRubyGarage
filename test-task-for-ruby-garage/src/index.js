import './css/body.css';
import './css/general.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/TodoApp';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);