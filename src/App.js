import React, { Component } from 'react';
import Navbars from './components/Navbar';
import Views from './components/View';
import Profile from './components/Profile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbars />
        <Views />
        <Profile />
      </div>
    );
  }
}

export default App;
