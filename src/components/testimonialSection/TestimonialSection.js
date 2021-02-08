
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
// import { faStarHalf } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import RestClient from '../../restApi/RestClient';
// import RestClient from '../../restApi/ApiUrl';
import ApiUrl from '../../restApi/ApiUrl';


class TestimonialSection extends Component
{


    constructor(){
        super();
        this.state = {
            data : []
        }
    }

    componentDidMount()
    {
        RestClient.GetRequest(ApiUrl.clientOverview)
                    .then(result=>{
                        console.log(result);
                        this.setState({data:result});
                    })
                    .catch(result=>{
                        
                    })
    }

    render(){

        const clientSays = this.state.data.map((result)=>{
            return (
                <div key={result.id} className="carousel-card">
                    <p>{result.comments}</p>
                    <h3>{result.name}</h3>
                    <p>
                        <FontAwesomeIcon  icon={faStar} color="#ffc000"/>
                        <FontAwesomeIcon  icon={faStar} color="#ffc000"/>
                        <FontAwesomeIcon  icon={faStar} color="#ffc000"/>
                        <FontAwesomeIcon  icon={faStar} color="#ffc000"/>
                        <FontAwesomeIcon  icon={faStarHalfAlt} color="#ffc000"/>
                    </p>
                </div>
            );
        })

        const settings = {
            dots:true,
            autoPlay:true,
            autoPlaySpeed:1500,
            infinite:true,
            speed:3000,
            slidesToShow:1,
            slidesToScroll:1,
            initialSlide:0,
            responsive : [
                {
                    breakpoint:1024,
                    settings:{
                        slidesToShow:3,
                        slidesToScroll:1
                    }
                }
            ]
    
        };


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
                        
                            
                            <Slider {...settings} >
                                {
                                    clientSays
                                }
                                {/* <div className="carousel-card">
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
                                </div> */}
                               
                            </Slider>
                            
                            {/* <Col lg={4} md={6} sm={12}>
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
                            </Col> */}
                        
                    </div>
                </Container>
            </Fragment>
        )
    }

}



export default TestimonialSection;



