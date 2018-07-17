import React, { Component } from 'react';
import './Footer.css';



class Footer extends Component {
    render() {
        return (
            <footer id="footer-container">
                <div id="footer-links">
                    <a href="https://github.com/lianthompson" rel="noopener noreferrer" target="_blank"><i className="fab fa-github fa-3x fa-fw"></i></a>
                    <a href="https://www.linkedin.com/in/lianthompson/" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin fa-3x fa-fw"></i></a>
                    <a href="https://twitter.com/liansthumbs" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter fa-3x fa-fw"></i></a>
                    <a href="https://instagram.com/littleorphanliannie" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram fa-3x fa-fw"></i></a>
                </div>
                <br />
                <p>&copy; Lian Thompson 2018</p>
            </footer>
        );
    }

}

export default Footer;