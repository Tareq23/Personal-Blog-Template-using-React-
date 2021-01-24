import React,{Component,Fragment} from 'react';
import { Container, Row,Col} from "react-bootstrap";
import styled from 'styled-components';



const ProgressSection = styled.div`
    width:98%;
    height:10px;
    border-radius:10px;
    background-color:#e8e8e8;
`;

const ProgressBar = styled.div`
   

    width:${props => props.percentage}%;
    height:100%;
    border-radius:8px;
    background:linear-gradient(to right,
        #766fff,#88f1ff);
`;



class AboutSection extends Component{


    constructor(props){
        super(props);
        this.state = {
            data : [
                {
                    technology:"adad",projects:83
                },
                {
                    technology:"aaaa",projects:45
                },
                {
                    technology:"ccc",projects:67
                },
                {
                    technology:"ddd",projects:45
                },
                {
                    technology:"eee",projects:43
                }
            ]
        }
    }
    render()
    {
        //let fill_color="linear-gradient(to right #766fff,#88f1ff)";
        return(
            <Fragment>
                <Container className="about_section">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className="about_text">
                                <h2>About Myself</h2>
                                <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed.</p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} >
                            <div className="skill_progress">
                                <div className="progress_text">
                                    <p>After Effects <span>85%</span></p>
                                </div>
                                <div className="custom_progress">
                                    <ProgressSection>
                                        <ProgressBar percentage={85}/>
                                    </ProgressSection>
                                </div>
                            </div>
                            <div className="skill_progress">
                                <div className="progress_text">
                                    <p>Photoshop <span>90%</span></p>
                                </div>
                                <div className="custom_progress">
                                    <ProgressSection>
                                        <ProgressBar percentage={90}/>
                                    </ProgressSection>
                                </div>
                            </div>
                            <div className="skill_progress">
                                <div className="progress_text">
                                    <p>Illustrator <span>70%</span></p>
                                </div>
                                <div className="custom_progress">
                                    <ProgressSection>
                                        <ProgressBar percentage={70}/>
                                    </ProgressSection>
                                </div>
                            </div>
                            <div className="skill_progress">
                                <div className="progress_text">
                                    <p>Sublime <span>95%</span></p>
                                </div>
                                <div className="custom_progress">
                                    <ProgressSection>
                                        <ProgressBar percentage={95}/>
                                    </ProgressSection>
                                </div>
                            </div>
                            <div className="skill_progress">
                                <div className="progress_text">
                                    <p>Sketch <span>75%</span></p>
                                </div>
                                <div className="custom_progress">
                                    <ProgressSection>
                                        <ProgressBar percentage={75}/>
                                    </ProgressSection>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AboutSection;


