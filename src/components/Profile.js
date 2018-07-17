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
                <p>I'm Lian, a Web Developer based in San Francisco, CA. My specialty is Javascript with MySQL, Express, React & Node. I'm currently looking for new work opportuntites. If you'd like to collaborate on a project, drop me a line!</p>
            </div>  

        )}
    }

export default Profile;