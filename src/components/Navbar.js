import React, { Component } from 'react';
// eslint-disable-next-line
import Scrollchor from 'react-scrollchor';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import './Navbar.css';


class Navbars extends Component {


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
                        <NavItem><Scrollchor to="#Projects" className="nav-link">Projects</Scrollchor></NavItem>
                        <NavItem><Scrollchor to="#About Me" className="nav-link">About Me</Scrollchor></NavItem>
                        <NavItem><Scrollchor to="#Contact" className="nav-link">Contact</Scrollchor></NavItem>

                    </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        );
    }
};

export default Navbars;