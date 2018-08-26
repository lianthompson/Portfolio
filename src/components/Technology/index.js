import React, { Component } from 'react';
import './Technology.css';


class Technology extends Component {
    render() {
        return (
            <div id="Technology">
                <h1 className="header">
                    Full Stack Developer
                </h1>
                <div className="technology-container">
                    <div className="frontend">
                        <h2>Frontend:</h2>
                            <p>React</p>
                            <p>JavaScript</p>
                            <p>JQuery</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Apollo</p>
                    </div>
                    <div className="backend">
                        <h2>Backend:</h2>
                            <p>Node</p>
                            <p>Express</p>
                            <p>MySQL</p>
                            <p>MongoDB</p>
                    </div>
                    <div className="devtools">
                        <h2>Dev Tools:</h2>
                            <p>Git</p>
                            <p>Github</p>
                            <p>Terminal</p>
                            <p>Jira</p>
                            <p>Trello</p>
                            <p>Visual Studio Code</p>
                            <p>Postman</p>
                            <p>GraphQL</p>
                            <p>Sequel Pro</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Technology;