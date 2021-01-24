import { faFacebook, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';


class FooterSection extends Component
{
    constructor()
    {
        super();
        this.state = {}
    }
    render()
    {
        return (
            <Fragment>
                <footer className="footer_section">
                    <Container fluid className="inner_footer_section">
                        <Row>
                            <Col lg={5} md={12} sm={12}>
                                <h2>About Me</h2>
                                <p className="footer_text">Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills,</p>
                                <p className="copy_right">Copyright &copy; 2021 All rights reserved | This template is made with by Colorlib</p>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <h2>
                                    Newsletter
                                </h2>
                                <p className="footer_text">Stay updated with our latest trends</p>
                                <form action="#home" method="post">
                                    <input type="email" />
                                    <input type="submit" value="submit" />
                                </form>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <h2>Follow me</h2>
                                <p className="footer_text">Let us be social</p>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon size="3x" icon={faFacebook} /> 
                                    </li>
                                    <li>
                                        <FontAwesomeIcon size="3x" icon={faTwitter} />
                                    </li>
                                    <li>
                                        <FontAwesomeIcon size="3x" icon = {faLinkedinIn}/>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </Fragment>
        )
    }

}


export default FooterSection;
