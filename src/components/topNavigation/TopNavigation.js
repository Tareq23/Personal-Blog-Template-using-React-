import React,{Component,Fragment} from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

class TopNavigation extends Component
{
    constructor(props){
        super();
        this.state = {
            title : props.title,
        }
    }
    render(){
        return (
            <Fragment>
                <title>{this.state.title}</title>
                <div className="topNavigation">
                    <Container  className="innerTopNavigation p-0">
                        <Navbar className="navbar" expand="lg">
                            <NavLink className="brand navbar-brand" to="/">meetme</NavLink>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <div className="mr-auto"></div>
                                <Nav className="navMenu">
                                    <NavLink exact activeStyle={{color:"#fff"}} className="nav-link" to="/" >Home</NavLink>
                                    <NavLink exact activeStyle={{color:"#fff"}} className="nav-link" to="/about">About</NavLink>
                                    <NavLink exact activeStyle={{color:"#fff"}} className="nav-link" to="/service">service</NavLink>
                                    {/* <Nav.Link href="#link">page
                                        <ul className="dropdownMenu">
                                            <li>
                                            <NavLink className="sub-link" to="/about">portfolio</NavLink>
                                            </li>
                                            <li>
                                            <NavLink className="sub-link" to="/about">portfolio</NavLink>
                                            </li>
                                        </ul>
                                    </Nav.Link> */}
                                    <NavLink exact activeStyle={{color:"#fff"}} className="nav-link" to="/blog">blog</NavLink>
                                    <NavLink exact activeStyle={{color:"#fff"}} className="nav-link" to="/contact">contact</NavLink>
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





