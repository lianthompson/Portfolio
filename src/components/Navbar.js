import React, { Component } from 'react';
// eslint-disable-next-line
import { Navbar, NavItem, Nav } from 'react-bootstrap';
// import './Navbars.css';

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
            <div>
                <Navbar fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Lian Thompson</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>

                        <NavItem eventKey={2} href="Projects"
                            onClick={this.goTo.bind(this, 'Projects')}
                        > Projects&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
                </NavItem>

                        <NavItem eventKey={3} href="Resume"
                            onClick={this.goTo.bind(this, 'Resume')}
                        > Resume&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
                </NavItem>

                        <NavItem eventKey={4} href="Contact"
                            onClick={this.goTo.bind(this, 'Contact')}
                        > Contact
                </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
};

export default Navbars;