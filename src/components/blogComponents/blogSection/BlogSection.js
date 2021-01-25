import React, { Component, Fragment } from 'react';
import { Col,Row,Container } from 'react-bootstrap';
import CategorySlider from '../categorySlider/CategorySlider';
import BlogSidebar from '../blogSidebar/BlogSidebar';
import BlogPost from '../blogPost/BlogPost';
import BlogTopBanner from '../blogTopBanner/BlogTopBanner';

export default class BlogSection extends Component
{
    constructor()
    {
        super();
        this.state = {}
    }
    render(){
        return (
            <Fragment>
                <BlogTopBanner/>
                <CategorySlider />
                <Container fluid className="p-0">
                    <Row>
                        <Col lg={8} md={8} sm={12}>
                            {/* <SinglePost /> */}
                            <BlogPost />
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <BlogSidebar />
                        </Col>  
                    </Row>
                </Container>

            </Fragment>
        );
    }
}


