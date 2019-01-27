import React, { Component } from 'react';
import './Technology.css';


class Technology extends Component {
    render() {
        return (
            <div id="Technology">
                <h1 className="header">
                    Full Stack Developer
                </h1>
                <p>With Javascript, I can seamlessly transition working from Frontend to Backend.</p>
                <div className="technology-container">
                    <div className="frontend">
                        <h2>Frontend:</h2>
                            <p>React</p>
                            <p>Javascript</p>
                            <p>HTML & BEM CSS</p>
                    </div>
                    <div className="backend">
                        <h2>Backend:</h2>
                            <p>Node</p>
                            <p>Express</p>
                            <p>Javascript</p>
                    </div>
                    <div className="devtools">
                        <h2>Dev Tools:</h2>
                            <p>Git</p>
                            <p>Github</p>
                            <p>Terminal</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Technology;