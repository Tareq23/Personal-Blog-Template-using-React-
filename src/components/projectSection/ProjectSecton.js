import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
// import Img3 from '../../assets/img/project-3.jpg';
import Img1 from '../../assets/img/gallery/project-1.jpg';
import Img2 from '../../assets/img/gallery/project-2.jpg';
import Img3 from '../../assets/img/gallery/project-3.jpg';
import Img4 from '../../assets/img/gallery/project-4.jpg';
import Img5 from '../../assets/img/gallery/project-5.jpg';
import Img6 from '../../assets/img/gallery/project-6.jpg';



const ActiveItem = styled.div`
    display:${props => props.display};
`;


class ProjectSection extends Component
{

    constructor()
    {
        super();
        this.state = {
            all : true,
            uxUi : true,
            vector: true,
            printing: true,
            rester: true,
            display:"block",
        }
    }
    componentDidUpdate()
    {

    }
    active = (activeType) => {
        console.log(activeType);
        if(activeType==='all')
        {
            this.setState({
                uxUi:true,vector:true,printing:true,rester:true
            });
        }
        else if(activeType==='uxUi')
        {
            this.setState({
                uxUi:true,vector:false,printing:false,rester:false
            });
        }
        else if(activeType==='vector')
        {
            this.setState({
                uxUi:false,vector:true,printing:false,rester:false
            });
        }
        else if(activeType==='printing')
        {
            this.setState({
                uxUi:false,vector:false,printing:true,rester:false
            });
        }
        else if(activeType==='rester')
        {
            this.setState({
                uxUi:false,vector:false,printing:false,rester:true
            });
        }
        // activeType.preventDefault();
    }
    render()
    {
        return (
            <Fragment>
                <Container fluid className="project_section">
                    <div className="inner_project_section">
                        <Row className="project_top_section">
                            <Col lg={12} md={12} sm={12}>
                                <h2>Our Latest Featured Projects</h2>
                                <p>Who are in extremely love with eco friendly system.</p>
                            </Col>
                            <Col lg={12} md={12} sm={12}>
                                <ul >
                                    <li><a onClick={()=>{this.active('all')}} href="#home">all</a></li>
                                    <li><a onClick={()=>{this.active('vector')}} href="#home">vector</a></li>
                                    <li><a onClick={()=>{this.active('printing')}} href="#home">printing</a></li>
                                    <li><a onClick={()=>{this.active('rester')}} href="#home">rester</a></li>
                                    <li><a onClick={()=>{this.active('uxUi')}} href="#home">ux/ui</a></li>
                                </ul>
                            </Col>
                        </Row>
                        <Row className="project_design">
                            <Col  style={this.state.vector?{"display":"block"}:{"display":"none"}} className="p-0 m-0" lg={4} md={6} sm={12}>
                                <div className={`project_card `}>
                                    <div className="inner_project_card">
                                        <img src={Img1} alt="project img"></img>
                                        <div className="project_text">
                                            <h3>3D Helmet Design</h3>
                                            <p>client</p>
                                        </div>
                                    </div>
                                </div>
                            </Col> 
                            <Col  style={this.state.uxUi?{"display":"block"}:{"display":"none"}} className="p-0 m-0" lg={4} md={6} sm={12}>
                                <div className="project_card">
                                    <div className="inner_project_card">
                                        <img src={Img2} alt="project img"></img>
                                        <div className="project_text">
                                            <h3>2D Vinyl Design</h3>
                                            <p>client</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col style={this.state.printing?{"display":"block"}:{"display":"none"}} className="p-0 m-0" lg={4} md={6} sm={12}>
                                <div className="project_card">
                                    <div className="inner_project_card">
                                        <img src={Img3} alt="project img"></img>
                                        <div className="project_text">
                                            <h3>Creative Poster Design</h3>
                                            <p>client</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col style={this.state.rester?{"display":"block"}:{"display":"none"}} className="p-0 m-0" lg={4} md={6} sm={12}>
                                <div className="project_card">
                                    <div className="inner_project_card">
                                        <img src={Img4} alt="project img"></img>
                                        <div className="project_text">
                                            <h3>Embosed Logo Design</h3>
                                            <p>client</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col style={this.state.uxUi?{"display":"block"}:{"display":"none"}} className="p-0 m-0" lg={4} md={6} sm={12}>
                                <div className="project_card">
                                    <div className="inner_project_card">
                                        <img src={Img5} alt="project img"></img>
                                        <div className="project_text">
                                            <h3>3D Disposable Bottle</h3>
                                            <p>client</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col style={this.state.vector?{"display":"block"}:{"display":"none"}} className="p-0 m-0" lg={4} md={6} sm={12}>
                                <div className="project_card">
                                    <div className="inner_project_card">
                                        <img src={Img6} alt="project img"></img>
                                        <div className="project_text">
                                            <h3>3D Logo Design</h3>
                                            <p>client</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="my-5">
                            <Button className="project_btn">Load more items</Button>
                        </Row>
                    </div>
                </Container>
            </Fragment>
        );
    }
}



export default ProjectSection;

