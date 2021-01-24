import {faCalendarAlt, faComment, faEye, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
// import styled from 'styled-components';
import PostImage1 from '../../../assets/img/blog/main-blog/m-blog-1.jpg';
import PostImage2 from '../../../assets/img/blog/post-img1.jpg';
import PostImage3 from '../../../assets/img/blog/post-img2.jpg';

import PrevImg from '../../../assets/img/blog/prev.jpg';
import NextImg from '../../../assets/img/blog/next.jpg';

// const BlogPostMain = styled.section`
// width:100%;
// display:flex;
// justify-content:center;
// align-items:center;
// padding:10px;
// `;

export default class SiglePost extends Component
{

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return (
            <Fragment>

                <Row className="single_post">
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
                            <p className="post_short_desc">
                            Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed
                            </p>
                            <p className="post_short_desc">
                            Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed
                            </p>
                        </div>
                    </Col>
                    <Col lg={12} md={12} sm={12}>
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <div className="card_text">
                                    <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. </p>
                                </div>
                            </Col>
                            <Col lg={12} md={12} sm={12}>
                                {/* <Row className="post_img">
                                    <Col lg={6} md={6} sm={12} className="p-0 post_left_img">
                                        <img src={PostImage2} alt="post images"></img>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} className="p-0 post_right_img">
                                        <img src={PostImage3} alt="post images"></img>
                                    </Col>
                                </Row> */}
                                <div className="post_img">
                                    <div className="">
                                        <img src={PostImage2} alt="postpicture"></img>
                                    </div>
                                    <div className="">
                                        <img src={PostImage3} alt="postpicture"></img>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12} md={12} sm={12}>
                                <div className="my-5">
                                    <p className="post_short_desc">MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower.</p>
                                    <p className="post_short_desc">
                                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="post_nav">
                            <div className="post_nav_left">
                                <div className="thumb">
                                    <a href="#home"><img src={PrevImg} alt="prev"></img></a>
                                    <span></span>
                                </div>
                                <div className="arrow">
                                    <span></span>
                                </div>
                                <div>
                                    <a href="#prev" >prev</a>
                                    <a href="#prev"><h4>post title</h4></a>
                                </div>
                            </div>
                            
                            <div className="post_nav_right">
                                <div>
                                    <a href="#home"><img src={NextImg} alt="prev"></img></a>
                                    <span></span>
                                </div>
                                <div>
                                    <a href="#prev" >prev</a>
                                    <a href="#prev"><h4>post title</h4></a>
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>

            </Fragment>
        );
    }
}





