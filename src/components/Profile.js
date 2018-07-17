import React, { Component } from 'react';
import './Profile.css';


class Profile extends Component {
    render() {
        return (
            <div id="About Me">
                <div id="profile-container">
                <h1>About Me</h1>
                <img src={require("./image/headshot.png")} />
                <br/>
                <br/>
                <br/>
                    <div className="about">
                        <p>I'm Lian, a Web Developer based in San Francisco, CA. My specialty is Javascript with MySQL, Express, React & Node.
                        I have a passion for learning and love discovering new frameworks and libraries to create with!
                        </p>
                        <p>When I'm not coding, I like to urban hike around the city, practice yoga, & consume mountains of food.</p>

                    </div>
                </div>
            </div> 

        )}
    }

export default Profile;