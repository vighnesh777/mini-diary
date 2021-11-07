import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App/App';
// import Login from './components/Login/Login';
import App1 from './components/App1';
ReactDOM.hydrate(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>,
  document.getElementById('root')
);