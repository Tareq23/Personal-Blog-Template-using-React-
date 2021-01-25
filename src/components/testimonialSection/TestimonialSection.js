
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
// import { faStarHalf } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';



class TestimonialSection extends Component
{


    constructor(){
        super();
        this.state = {}
    }

    render(){
        return (
            <Fragment>
                <Container fluid className="p-0 testimonial_section">
                    <div className="inner_testimonial_section">
                        <Row className="text-center testimonial_top">
                            <Col className="heading" lg={12} md={12} sm={12}>
                                <h2>Testimonials</h2>
                                <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4} md={6} sm={12}>
                                <div className="carousel-card">
                                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
                                    <h3>Fanny spencer</h3>
                                    <p>
                                        <FontAwesomeIcon  icon={faStar} color="#ffc000"/>
                                        <FontAwesomeIcon  icon={faStar} color="#ffc000"/>
                                        <FontAwesomeIcon  icon={faStar} color="#ffc000"/>
                                        <FontAwesomeIcon  icon={faStar} color="#ffc000"/>
                                        <FontAwesomeIcon  icon={faStarHalfAlt} color="#ffc000"/>
                                    </p>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <div className="carousel-card">
                                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
                                    <h3>Fanny spencer</h3>
                                    <p>
                                        <FontAwesomeIcon  icon={faStar} color="#ffc000"/>
                                        <FontAwesomeIcon  icon={faStar} color="#ffc000"/>
                                        <FontAwesomeIcon  icon={faStar} color="#ffc000"/>
                                        <FontAwesomeIcon  icon={faStar} color="#ffc000"/>
                                        <FontAwesomeIcon  icon={faStarHalfAlt} color="#ffc000"/>
                                    </p>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <div className="carousel-card">
                                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
                                    <h3>Fanny spencer</h3>
                                    <p>
                                        <FontAwesomeIcon  icon={faStar} color="#ffc000"/>
                                        <FontAwesomeIcon  icon={faStar} color="#ffc000"/>
                                        <FontAwesomeIcon  icon={faStar} color="#ffc000"/>
                                        <FontAwesomeIcon  icon={faStar} color="#ffc000"/>
                                        <FontAwesomeIcon  icon={faStarHalfAlt} color="#ffc000"/>
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Fragment>
        )
    }

}



export default TestimonialSection;



