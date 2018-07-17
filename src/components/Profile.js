import React, { Component } from 'react';
import './Profile.css';


class Profile extends Component {
    render() {
        return (
            <div id="About Me">
                <img src={require("./image/headshot.png")} />
                <br/>
                <br/>
                <br/>
                <p>I'm Lian, a Web Developer based in San Francisco, CA. My specialty is Javascript with MySQL, Express, React & Node. When I'm not coding, I like to urban hike around the city, practice yoga, & consume mountains of food.</p>
            </div>  

        )}
    }

export default Profile;