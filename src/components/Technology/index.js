import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Technology.css';


class Technology extends Component {
    render() {
        return (
            <div id="Technology">
                <Grid className="Grid">
                    <Row className="show-grid">
                        <h1 className="title">
                            Full Stack Developer</h1>
                        <br />
                        <Col xs="6" sm="4" >
                            <h2 className="Bold">Frontend:</h2>
                            <p>React</p>
                            <p>JavaScript</p> 
                            <p>JQuery</p> 
                            <p>HTML</p>  
                            <p>CSS</p>
                            <p>Apollo</p>
                        </Col>
                        <Col xs="6" sm="4">
                            <h2 className="Bold">Backend:</h2>
                            <p>Node</p>
                            <p>Express</p> 
                            <p>MySQL</p> 
                            <p>MongoDB</p>    
                        </Col>
                        <Col xs="6" sm="4">
                            <h2 className="Bold">Dev Tools:</h2>
                            <p>Git</p>
                            <p>Github</p> 
                            <p>Terminal</p> 
                            <p>Jira</p>  
                            <p>Trello</p>
                            <p>Visual Studio Code</p>
                            <p>Postman</p> 
                            <p>GraphQL</p> 
                            <p>Sequel Pro</p>  
                        </Col>
                    </Row>
                </Grid>

            </div>
        )
    }
}

export default Technology;