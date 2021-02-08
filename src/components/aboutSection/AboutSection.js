import React,{Component,Fragment} from 'react';
import { Container, Row,Col} from "react-bootstrap";
import styled from 'styled-components';
import ApiUrl from '../../restApi/ApiUrl';
import RestClient from '../../restApi/RestClient';



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
            
            short_desc : "...",
            skills : []
            
        }
    }

    componentDidMount()
    {
        RestClient.GetRequest(ApiUrl.aboutMe)
                    .then(result=>{
                        
                        this.setState(
                            
                            {short_desc:result[0].about_desc,skills:JSON.parse(result[0].skills)}
                        );
                        
                    }).catch(error=>{

                    })
    }

    render()
    {
        
        const data = this.state.skills;
        const progress = data.map(result=>{
            return(
                <div key={result.name} className="skill_progress">
                    <div className="progress_text">
                        <p>{result.name} <span>{result.value}%</span></p>
                    </div>
                    <div className="custom_progress">
                        <ProgressSection>
                            <ProgressBar percentage={result.value}/>
                        </ProgressSection>
                    </div>
                </div>
            )
        });

        return(
            <Fragment>
                <Container className="about_section">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className="about_text">
                                <h2>About Myself</h2>
                                <p>{this.state.short_desc}</p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} >
                            {
                                progress
                            }
                            
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AboutSection;


