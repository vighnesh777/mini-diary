
import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (

      <div className="app">
        <div className="app-title">
          <center><h1>Mini's Diary</h1></center>
        </div>
        <div className="app-button">
          <Link to="/login">Make Memories Noted</Link>
        </div>
      </div>

    );
  }
}

export default App;

