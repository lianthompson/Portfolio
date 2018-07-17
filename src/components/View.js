import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './View.css';
 


class Views extends Component {
    render() {
        return(
            <Jumbotron>
                <h1>Hello, I'm Lian!</h1>
                <p>
                    Full Stack Dev +  Code + Cats + Caffeine
                </p>
                <p>
                    <Button><a href="https://drive.google.com/file/d/1Yqkt9ePGVfRPJo9iTGfeu3cfLYz4Z6Wg/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></Button>
                </p>
            </Jumbotron>
        );
    }

}

export default Views;