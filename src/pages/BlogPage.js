import React, { Component, Fragment } from 'react';
import BlogSection from '../components/blogComponents/blogSection/BlogSection';
import FooterSection from '../components/footerSection/FooterSection';
import TopNavigation from '../components/topNavigation/TopNavigation';



export default class BlogPage extends Component
{
    constructor(){
        super();
        this.state = {
            bgColor : {
                color:'#fff',
                backgroundColor : 'rgba(0,0,0,0.0)',
            }
        }
    }
    render(){
        return(
            <Fragment>
                <TopNavigation title="Blog" bgColor = {this.state.bgColor}/>
                <BlogSection/>
                <FooterSection/>
            </Fragment>
        )
    }
}




