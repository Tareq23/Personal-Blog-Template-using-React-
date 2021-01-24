import React, { Component, Fragment } from 'react';
import { Button, Container,Row} from 'react-bootstrap';

class ExperienceEducation extends Component{
    constructor()
    {
        super();
        this.state = {

        }
    }
    render(){
        return(
            <Fragment>
                <Container fluid className="education_experience">
                    <Row>
                        <ul className="ee_btn">
                            <li><Button>Experience</Button></li>
                            <li><Button>Education</Button></li>
                        </ul>
                        <div className="my_tab">
                            <ul className="inner_my_tab">
                                <li className="list_item">
                                    <span></span>
                                    <div className="media">
                                        <div className="date">
                                            <p>March 2017 to present</p>
                                        </div>
                                        <div>
                                            <div className="content">
                                                <h2>Colorlib</h2>
                                                <p>Senior Web Developer </p>
                                                <p>Santa monica, Los angeles</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list_item">
                                    <span></span>
                                    <div className="media">
                                        <div className="date">
                                            <p>March 2017 to present</p>
                                        </div>
                                        <div>
                                            <div className="content">
                                                <h2>Colorlib</h2>
                                                <p>Senior Web Developer </p>
                                                <p>Santa monica, Los angeles</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list_item">
                                    <span></span>
                                    <div className="media">
                                        <div className="date">
                                            <p>March 2017 to present</p>
                                        </div>
                                        <div>
                                            <div className="content">
                                                <h2>Colorlib</h2>
                                                <p>Senior Web Developer </p>
                                                <p>Santa monica, Los angeles</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}


export default ExperienceEducation;