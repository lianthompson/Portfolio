import React, { Component } from 'react';
import './Projects.css';


class Projects extends Component {
    render() {
        return (
            <div id="Projects">
                <h1>Projects</h1>
            <div className="project-container">
                <div id="project">
                <h3>Giftr</h3>
                <img id="giphy" src="https://media.giphy.com/media/8ccRgyBzBC2SPxRRhS/giphy.gif" class="img-fluid" alt="demo"/>
                </div>
                <div id="project">
                <h3>Eventful</h3>
                <img id="giphy" src="https://media.giphy.com/media/65To8Pi2sWmVvjWXpy/giphy.gif" class="img-fluid" alt="demo"/>
                </div>
            </div>
            </div>
        );
    }

}

export default Projects;