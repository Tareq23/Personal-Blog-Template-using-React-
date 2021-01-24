import {faCalendarAlt, faComment, faEye, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import PostImage1 from '../../../assets/img/blog/main-blog/m-blog-1.jpg';

const BlogPostMain = styled.section`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:10px;
`;

export default class BlogPost extends Component
{
    constructor(){
        super();
        this.state = {}
    }

    render(){
        return (
            <Fragment>
                <BlogPostMain >
                    <Col lg={4} md={4} sm={12}>
                        <div className="post_info">
                            <div className="post_tag">
                                <a href="#home">technology,</a>
                                <a href="#home">life style,</a>
                                <a href="#home">politics,</a>
                                <a href="#home">food</a>
                            </div>
                            <ul>
                                <li><a href="#home">Mark wiens
                                    <FontAwesomeIcon icon={faUser} />
                                    </a></li>
                                <li><a href="#home">12 Dec, 2017 
                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                    </a></li>
                                <li><a href="#home">1.2M Views 
                                    <FontAwesomeIcon icon={faEye} />
                                    </a></li>
                                <li><a href="#home">06 Comments 
                                    <FontAwesomeIcon icon={faComment} />
                                    </a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={8} md={8} sm={12}>
                        <div className="main_post">
                            <img src={PostImage1} alt="main post"></img>
                            <a href="#details"><h2>The Basics Of Buying A Telescope</h2></a>
                            <p className="post_short_desc">
                            MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                            </p>
                            <a className="post_link" href="#home">view more</a>
                        </div>
                    </Col>
                </BlogPostMain>
            </Fragment>
        )
    }
}