import React, { Component, Fragment } from 'react';
import { Col,Row,Container } from 'react-bootstrap';
import BlogSidebar from '../blogSidebar/BlogSidebar';

import SinglePost from '../singlePost/SinglePost';

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

                <Container fluid className="p-0">
                    <Row>
                        <Col lg={8} md={8} sm={12}>
                            <SinglePost />
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


