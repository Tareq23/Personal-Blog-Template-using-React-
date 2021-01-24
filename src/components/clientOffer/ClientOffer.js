import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Architecture from '../../assets/img/architecture.jpg';
import InteriorDesign from '../../assets/img/interior_design.jpg';
import ConceptDesign from '../../assets/img/concept_design.jpg';


class ClientOffer extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <Fragment>
                <Container fluid className="client_offer">
                    <div className="inner_client_offer">
                        <Row className="main_title">
                            <Col lg={12} md={12} sm={12}>
                                <h2>offerings to my clients</h2>
                                <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
                            </Col>
                        </Row>
                        <Row className="features">
                            <Col lg={4} md={6} sm={12}>
                                <div className="card">
                                    <div className="card-image">
                                        <img src={Architecture} alt="architectur"></img>
                                    </div>
                                    <div className="card-body">
                                        <h2>Architecture</h2>
                                        <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <div className="card">
                                    <div className="card-image">
                                        <img src={InteriorDesign} alt="architectur"></img>
                                    </div>
                                    <div className="card-body">
                                        <h2>interior design</h2>
                                        <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <div className="card">
                                    <div className="card-image">
                                        <img src={ConceptDesign} alt="architectur"></img>
                                    </div>
                                    <div className="card-body">
                                        <h2>Concept Design</h2>
                                        <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Fragment>
        )
    }
}



export default ClientOffer;