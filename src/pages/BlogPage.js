import React, { Component, Fragment } from 'react';
import BlogSection from '../components/blogComponents/blogSection/BlogSection';
import FooterSection from '../components/footerSection/FooterSection';
import TopNavigation from '../components/topNavigation/TopNavigation';



export default class BlogPage extends Component
{
    constructor(){
        super();
        this.state = {}
    }
    render(){
        return(
            <Fragment>
                <TopNavigation/>
                <BlogSection/>
                <FooterSection/>
            </Fragment>
        )
    }
}




