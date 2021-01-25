import React,{Component,Fragment} from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

class TopNavigation extends Component
{
    constructor(){
        super();
        this.state = {}
    }
    render(){
        return (
            <Fragment>
                <div className="topNavigation">
                    <Container  className="innerTopNavigation p-0">
                        <Navbar className="navbar" expand="lg">
                            <NavLink className="brand navbar-brand" to="/">meetme</NavLink>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <div className="mr-auto"></div>
                                <Nav className="navMenu">
                                    <NavLink className="nav-link" to="/" >Home</NavLink>
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                    <NavLink className="nav-link" to="/service">service</NavLink>
                                    <Nav.Link href="#link">page
                                        <Nav className="dropdownMenu">
                                            <li>
                                            <NavLink className="sub-link" to="/about">portfolio</NavLink>
                                            </li>
                                            <li>
                                            <NavLink className="sub-link" to="/about">portfolio</NavLink>
                                            </li>
                                        </Nav>
                                    </Nav.Link>
                                    <NavLink className="nav-link" to="/blog">blog</NavLink>
                                    <NavLink className="nav-link" to="/contact">contact</NavLink>
                                </Nav>    
                            </Navbar.Collapse>
                        </Navbar>
                    </Container>
                </div>
            </Fragment>
        )
    }
}


export default TopNavigation;





