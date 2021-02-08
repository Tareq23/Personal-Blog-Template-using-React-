import React, { Component, Fragment } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import BlogSidebar from '../components/blogComponents/blogSidebar/BlogSidebar';
import SinglePost from '../components/blogComponents/singlePost/SinglePost';
import FooterSection from '../components/footerSection/FooterSection';
import TopNavigation from '../components/topNavigation/TopNavigation';


export default class SinglePostPage extends Component
{
    constructor(){
        super();
        this.state = {
            bgColor: {
                color:'#fff',
                backgroundColor : 'rgba(0,0,0,0.0)'
            }
        }
    }
    render()
    {
        return (
            <Fragment>
                <TopNavigation title="Details Post" bgColor={this.state.bgColor}/>
                <Container fluid className="p-0 pt-5">
                    <Row>
                        <Col lg={8} md={8} sm={12}>
                            <SinglePost/>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <BlogSidebar/>
                        </Col>
                    </Row>
                </Container>
                <FooterSection/>
            </Fragment>
        )
    }
}


