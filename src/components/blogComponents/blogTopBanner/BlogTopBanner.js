import React, { Component, Fragment } from 'react';
// import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import BG_image from '../../../assets/img/banner/banner-2.jpg';

const BlogBanner = styled.section`
    width:100%;
    min-height:100vh;
    // background-color:red;
    background-image:url('${props=>props.bg_image}');
    position:relative;
    background-position:50% 15%;
`;

const InnerBlogBanner = styled.div`

    position:absolute;
    width:100%;
    height:100%;
    color:#fff;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    background-color:rgba(0,0,0,0.6);
`;


export default class BlogTopBanner extends Component
{
    constructor()
    {
        super();
        this.state = {}
    }

    render(){
        return (
            <Fragment>
                <BlogBanner bg_image={BG_image}>
                    <InnerBlogBanner className="blog_banner">
                        <h2>Dude You’re Getting a Telescope</h2>
                        <p>There is a moment in the life of any aspiring astronomer that it is time to buy that first</p>
                        <a href="#blog">view more</a>
                    </InnerBlogBanner>
                </BlogBanner>
            </Fragment>
        )
    }
}