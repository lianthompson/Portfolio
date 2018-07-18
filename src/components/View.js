import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './View.css';
 


class Views extends Component {
    render() {
        return(
            <div id="jumbotron-container">
            <Jumbotron>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1>LIAN THOMPSON</h1>
                <p>Full Stack Dev | San Francisco</p>
                <p>
                  Code + Cats + Caffeine
                </p>
                <p>
                <Button><a href="https://drive.google.com/file/d/1Yqkt9ePGVfRPJo9iTGfeu3cfLYz4Z6Wg/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></Button>
                </p>
                    <br />
                    <br />
                    <br />
                 <p>I'm Lian, a Web Developer based in San Francisco, CA. My specialty is Javascript with MySQL, Express, React & Node.
                 </p> 
                 <p>I have a passion for learning and love discovering new frameworks and libraries to create with!
                </p>
            </Jumbotron>
            </div>
        );
    }

}

export default Views;