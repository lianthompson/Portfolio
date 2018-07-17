import React, { Component } from 'react';
// eslint-disable-next-line
import Scrollchor from 'react-scrollchor';
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
                        <Scrollchor to="" className="nav-link">Lian Thompson</Scrollchor>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav pullRight>

                        <NavItem><Scrollchor to="#Resume" className="nav-link">Resume</Scrollchor></NavItem>
                        <NavItem><Scrollchor to="#About Me" className="nav-link">About Me</Scrollchor></NavItem>
                        <NavItem><Scrollchor to="#Projects" className="nav-link">Projects</Scrollchor></NavItem>

                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
};

export default Navbars;