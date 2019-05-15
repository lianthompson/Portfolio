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
                        <p>I graduated with a B.A. in Art Education from St. Edward's University in Austin, TX. After moving to San Francisco, I learned about the different roles and opportunities there are in tech. This led me to realize my passion for creating and how that translated to web development.</p>

                        <p>On Tuesdays, I host <a href="https://www.meetup.com/Women-Who-Code-SF/" alt="">Women Who Code's Javascript study group</a>. It's a laidback meetup where women and allies can code/network for two hours.</p>

                        <p>When I'm not coding, you can find me hiking around the Bay Area or eating food. I'm also big into shopping sustainably and love to go thrifting. I sell a lot of the things I find on <a href="https://poshmark.com/closet/lianthompson" alt="">Poshmark</a>. I love giving back to the community by volunteering at conferences. A few that I've been a part of are SXSW, Grace Hopper Conference, & Women Who Code Connect. 
                        </p>
                    </div>
                </div>
            </div> 

        )}
    }

export default Profile;