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
                    <p className="description">I'm Lian, a Web Developer based in San Francisco, CA. Some sites I've worked on are <a href="https://colark.com" alt="">here</a> and <a href="https://5cdb73dfb5f84dd19df022dd--quirky-stonebraker-253e43.netlify.com/" alt="">here</a>.</p>
                    
                    <p>My specialty is Javascript with MySQL, Express, React & Node.
                    </p> 
                </Jumbotron>
            </div>
        );
    }

}

export default Views;