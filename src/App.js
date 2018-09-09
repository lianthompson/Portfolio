import React, { Component } from 'react';
import Navbars from './components/Navbar/index.js';
import Views from './components/View/index.js';
import Profile from './components/Profile/index.js';
import Projects from './components/Projects/index.js';
import Contact from './components/Contact/index.js';
import Technology from './components/Technology/index.js';
import Footer from './components/Footer/index.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbars />
        <Views />
        <Projects />
        <Technology />
        <Profile />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
