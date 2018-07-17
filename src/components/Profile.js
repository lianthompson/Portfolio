import React, { Component } from 'react';
//import './Profile.css';


class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <img src={require("./image/headshot.png")} />
            </div>  

        )}
    }

export default Profile;