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
                        <div>
                        <Col xs="6" sm="4" >
                            <h2 className="Bold">Frontend:</h2>
                            <p>JavaScript<br />
                                React<br />
                                jQuery<br />
                                HTML <br />
                                CSS <br />
                            </p>

                        </Col>
                        <Col xs="6" sm="4">
                            <h2 className="Bold">Backend:</h2>
                            <p>Node <br />
                                Express <br />
                                MySQL<br />
                                MongoDB<br /></p>
                            <br />

                        </Col>
                        <Col xs="6" sm="4">
                            <h2 className="Bold">Dev Tools:</h2>
                            <p>Bootstrap<br />
                                Git<br />
                                GitHub<br />
                                Terminal<br />
                                Visual Studio Code<br />
                                Sequel Pro<br />
                                Postman</p>

                        </Col>
                        </div>
                    </Row>
                </Grid>

            </div>
        )
    }
}

export default Technology;