import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './View.css';
 


class Views extends Component {
    render() {
        return(
            <div id="jumbotron-container">
                <Jumbotron>
                    <h1>LIAN THOMPSON</h1>
                    <h2>Full Stack Dev | San Francisco</h2>
                    <p>Code + Cats + Caffeine</p>
                    <Button><a href="https://docs.google.com/document/d/1RXw5ybtroDqMSMjONrkcQBlSZPEc7AO9lTmTGJHVsRo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></Button>
                    <p className="description">I'm Lian, a Web Developer based in San Francisco, CA. My specialty is Javascript with MySQL, Express, React & Node.
                    </p> 
                    <p className="description">I have a passion for learning and love discovering new frameworks and libraries to create with!
                    </p>
                </Jumbotron>
            </div>
        );
    }

}

export default Views;