import { faFacebook, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{Component,Fragment} from 'react';
import { Container, Image, Row ,Col} from 'react-bootstrap';

import ProfileImg from '../../assets/img/personal.jpeg';



class TopBannerInner extends Component{
    constructor(){
        super();
        this.state = {}
    }
    render()
    {
        return (
            <Fragment>
                <Container fluid className="p-0">
                    <div className="top_banner_overlay">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <Image src={ProfileImg} rounded />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <div className="top_banner_text">
                                    <h4>hello everybody i am</h4>
                                    <h1>Md Tarequl Islam</h1>
                                    <h3>ux/ui developer</h3>
                                    <p>You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures)</p>
                                    <ul className="address_icon">
                                        <li>
                                            <a href="#home">
                                                <FontAwesomeIcon icon={faCalendarAlt} />
                                            </a>
                                            <span>2 February 1997</span>
                                        </li>
                                        <li>
                                            <a href="#home">
                                                <FontAwesomeIcon icon={faPhone} />
                                            </a>
                                            <span>+880-1723434285</span>
                                        </li>
                                        <li>
                                            <a href="#home">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                            </a>
                                            <span>mdtarequlislam634@gmail.com</span>
                                        </li>
                                        <li>
                                            <a href="#home">
                                                <FontAwesomeIcon icon={faHome}/>
                                            </a>
                                            <span>word-no:07,Charkhalifa Daulatkhan Bhola</span>
                                        </li>
                                    </ul>
                                    <ul className="social_icon">
                                        <li><FontAwesomeIcon icon={faFacebook}/></li>
                                        <li><FontAwesomeIcon icon={faLinkedinIn}/></li>
                                        <li><FontAwesomeIcon icon={faTwitter}/></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBannerInner;



