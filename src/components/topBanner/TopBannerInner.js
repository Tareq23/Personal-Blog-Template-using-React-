import { faFacebook, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{Component,Fragment} from 'react';
import { Container, Image, Row ,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ProfileImg from '../../assets/img/personal.jpeg';
import ApiUrl from '../../restApi/ApiUrl';
import RestClient from '../../restApi/RestClient';



class TopBannerInner extends Component{
    constructor(){
        super();
        this.state = {
            userName:"",
            userPosition:"",
            userInfo : {},
            facebook : "facebook.com"
        }
    }

    componentDidMount()
    {
        RestClient.GetRequest(ApiUrl.usersInfo)
                  .then(response => {
                      this.setState(
                        {userInfo:response}
                      );
                  }).catch(function(error){

                  })
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
                                    <h1>{this.state.userInfo.name}</h1>
                                    <h3>{this.state.userInfo.working_position}</h3>
                                    <p>{this.state.userInfo.sort_desc}</p>
                                    <ul className="address_icon">
                                        <li>
                                            <a href="#home">
                                                <FontAwesomeIcon icon={faCalendarAlt} />
                                            </a>
                                            <span>{this.state.userInfo.birthdate}</span>
                                        </li>
                                        <li>
                                            <Link >
                                                <FontAwesomeIcon icon={faPhone} />
                                            </Link>
                                            {/* <a href="#home">
                                                <FontAwesomeIcon icon={faPhone} />
                                            </a> */}
                                            <span>{this.state.userInfo.phone}</span>
                                        </li>
                                        <li>
                                            <a href="#home">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                            </a>
                                            <span>{this.state.userInfo.email}</span>
                                        </li>
                                        <li>
                                            <a href="#home">
                                                <FontAwesomeIcon icon={faHome}/>
                                            </a>
                                            <span>{this.state.userInfo.address}</span>
                                        </li>
                                    </ul>
                                    <ul className="social_icon">
                                        <li>
                                            <a href={this.state.facebook} >
                                                <FontAwesomeIcon icon={faFacebook}/>
                                            </a>
                                            {/* <Link to="route" target="_blank" onClick={(event) => {event.preventDefault(); window.open(this.makeHref("route"));}} /> */}
                                        </li>
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



