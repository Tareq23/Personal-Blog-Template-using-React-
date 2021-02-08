import React,{Component,Fragment} from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


class TopNavigation extends Component
{
    constructor(props){
        super();
        this.state = {
            title : props.title,
            topNav : "top_navigation_without_scroll",
            bgColor : props.bgColor,
            color : props.bgColor.color,
            activeColor : '#fff',
        }
    }
    onScroll = () => {
    
        if(window.scrollY<100)
        {
            const bgColors = {
                color:'#fff',
                backgroundColor : 'rgba(0,0,0,0.0)',
            }
            this.setState({
                topNav:'top_navigation_without_scroll',
            });
            if(this.state.title==="Blog")
            {
                this.setState({bgColor:bgColors,activeColor:'#fff'});
            }
        }
        else if(window.scrollY>100)
        {
            const bgColors = {
                color:'#000',
                backgroundColor : 'linear-gradient(to right,#9594b8,#72a5ac)',
            }
            this.setState({
                topNav:'top_navigation_on_scroll'
            });
            if(this.state.title==="Blog")
            {
                this.setState({bgColor:bgColors,activeColor:'#000'});
            }
        }
    }
    componentDidMount()
    {
        window.addEventListener('scroll',this.onScroll);
    }
    
    render(){
        return (
            <Fragment>
                <title>{this.state.title}</title>
                <div className={this.state.topNav} style={{background:this.state.bgColor.backgroundColor,color:this.props.bgColor.color}}>
                    <Container  className="inner_top_navigation p-0">
                        <Navbar className="navbar" expand="lg">
                            <NavLink style={{color:this.state.color}} className="brand navbar-brand" to="/">meetme</NavLink>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <div className="mr-auto"></div>
                                <Nav className="navMenu">
                                    <NavLink style={{color:this.state.color}} exact activeStyle={{color:this.state.activeColor}} className="nav-link" to="/" >Home</NavLink>
                                    <NavLink style={{color:this.state.color}} exact activeStyle={{color:this.state.activeColor}} className="nav-link" to="/about">About</NavLink>
                                    <NavLink style={{color:this.state.color}} exact activeStyle={{color:this.state.activeColor}} className="nav-link" to="/service">service</NavLink>
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
                                    <NavLink style={{color:this.state.color}} exact activeStyle={{color:this.state.activeColor}} className="nav-link" to="/blog">blog</NavLink>
                                    <NavLink style={{color:this.state.color}} exact activeStyle={{color:this.state.activeColor}} className="nav-link" to="/contact">contact</NavLink>
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





