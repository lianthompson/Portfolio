import React, { Component } from 'react';
import './Contact.css';



class Contact extends Component {
    render() {
        return (
            <div id="Contact">
                <h1>Let's Connect!</h1>
                <br/>
                <div id="contact-links">
                    <a href="https://github.com/lianthompson" rel="noopener noreferrer" target="_blank"><img src={require("../image/github.png")} alt="Github"/></a>
                    <a href="https://www.linkedin.com/in/lianthompson/" rel="noopener noreferrer" target="_blank"><img src={require("../image/linkedin.png")} alt="Linkedin"/></a>
                    <a href="https://twitter.com/liansthumbs" rel="noopener noreferrer" target="_blank"><img src={require("../image/twitter.png")} alt="Twitter"/></a>
                    <a href="https://instagram.com/littleorphanliannie" rel="noopener noreferrer" target="_blank"><img src={require("../image/instagram.png")} alt="Instagram"/></a>
                    <br/>
                </div>
                    <br/>
                    <div className="contact-content">
                        <p>I'm currently looking for new work opportuntites. If you'd like to collaborate on a project, drop me a line!</p>
                    </div>
            </div>
        );
    }

}

export default Contact;