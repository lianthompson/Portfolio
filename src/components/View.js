import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './View.css';
 
 
class Views extends Component {
    render() {
        return(
            <Jumbotron>
                <h1>Lian Thompson</h1>
                <p>
                    I'm a full-stack software developer in San Francisco. My specialty is Javascript + MySQL, React, & Node.
                </p>
                <p>
                    <Button bsStyle="primary">Learn more</Button>
                </p>
            </Jumbotron>
        );
    }

}

export default Views;