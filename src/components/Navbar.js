import React, { Component } from 'react';
// eslint-disable-next-line
// import Scrollchor from 'react-scrollchor';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import './Navbar.css';


class Navbars extends Component {
    //the following code is for Auth0

    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
        this.onClick = this.onClick.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <div className="navbar">
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Lian Thompson</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav pullRight>

                        <NavItem eventKey={2} href="Projects"
                            onClick={this.goTo.bind(this, 'Projects')}
                        > Projects
                        </NavItem>
                        <NavItem eventKey={3} href="Resume"
                            onClick={this.goTo.bind(this, 'Resume')}
                        >Resume
                        </NavItem>
                        <NavItem eventKey={4} href="Contact"
                            onClick={this.goTo.bind(this, 'Contact')}
                        > Contact
                        </NavItem>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
};

export default Navbars;