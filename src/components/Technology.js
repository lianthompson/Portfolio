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
                            <br />
                            <p>JavaScript<br /><br />
                                React<br /><br />
                                jQuery<br /><br />
                                HTML <br /><br />
                                CSS <br /><br />
                            </p>

                        </Col>
                        <Col xs="6" sm="4">
                            <h2 className="Bold">Backend:</h2>
                            <br />
                            <p>Node <br /><br />
                                Express <br /><br />
                                MySQL<br /><br />
                                MongoDB<br /><br />
                                </p>

                        </Col>
                        <Col xs="6" sm="4">
                            <h2 className="Bold">Dev Tools:</h2>
                            <br />
                            <p>Bootstrap<br /><br />
                                Git<br /><br />
                                GitHub<br /><br />
                                Terminal<br /><br />
                                Visual Studio Code<br /><br />
                                Sequel Pro<br /><br />
                                Postman<br /><br />
                                </p>

                        </Col>
                    </Row>
                </Grid>

            </div>
        )
    }
}

export default Technology;