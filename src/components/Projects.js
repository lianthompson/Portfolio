import React, { Component } from 'react';
import './Projects.css';



class Projects extends Component {
    render() {
        return (
            <div id="Projects">
                <h1>Projects</h1>
            <div id="project-container">
                <div className="giphy">
                <h3>Giftr</h3>
                <img src="https://media.giphy.com/media/8ccRgyBzBC2SPxRRhS/giphy.gif" class="img-fluid" alt="demo"/>
                </div>
                <div className="giphy">
                <h3>Eventful</h3>
                <img src="https://media.giphy.com/media/65To8Pi2sWmVvjWXpy/giphy.gif" class="img-fluid" alt="demo"/>
                </div>
            </div>
            </div>
        );
    }

}

export default Projects;