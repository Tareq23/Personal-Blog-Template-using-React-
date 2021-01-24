import React,{Component,Fragment} from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

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
                            <Navbar.Brand className="brand" href="#home">MEETME</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <div className="mr-auto"></div>
                                <Nav className="navMenu">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    
                                    <Nav.Link href="#link">About</Nav.Link>
                                    <Nav.Link href="#link">service</Nav.Link>
                                    <Nav.Link href="#link">page
                                        <Nav className="dropdownMenu">
                                            <li>
                                            <Nav.Link className="sub-link" href="#link">portfolio</Nav.Link>
                                            </li>
                                            <li>
                                            <Nav.Link className="sub-link" href="#link">portfolio</Nav.Link>
                                            </li>
                                        </Nav>
                                    </Nav.Link>
                                    <Nav.Link href="#link">blog</Nav.Link>
                                    <Nav.Link href="#link">contact</Nav.Link>
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





