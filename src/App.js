import React, { Component } from 'react';
import Navbars from './components/Navbar';
import Views from './components/View';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbars />
        <div className="content-container">
        <Views />
        <Projects />
        <Profile />
        <Contact />
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
