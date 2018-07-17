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
                    <Button bsStyle="primary">Learn More</Button>
                </p>
            </Jumbotron>
        );
    }

}

export default Views;