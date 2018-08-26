import React, { Component } from 'react';
import './Profile.css';


class Profile extends Component {
    render() {
        return (
            <div id="About Me">
                <div id="profile-container">
                <h1>About Me</h1>
                <img className="Profile" src={require("../image/headshot.png")} />
                    <div className="about">
                        <p>Aside from coding, I love giving back to the community by volunteering at conferences and meetups. A few that I've been a part of are SXSW, Women Who Code, & Tech in the Tenderloin. 
                        </p>
                        <p>I'm also an active member of Write/Speak/Code & Women Who Code's SF chapter.
                        </p>
                        <p>When I'm not doing that stuff, I like to urban hike around the city, practice yoga, & consume mountains of food.</p>
                    </div>
                </div>
            </div> 

        )}
    }

export default Profile;