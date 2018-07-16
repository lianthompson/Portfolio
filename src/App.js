import React, { Component } from 'react';
import Navbars from './components/Navbar';
import Views from './components/View';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbars />
        <Views />
            <div className="profile">
                <img src={require("./image/headshot.png")} />
            </div>   
      </div>
    );
  }
}

export default App;
