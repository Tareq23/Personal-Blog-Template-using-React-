import React,{Component, Fragment} from 'react';
import { Row,Col } from 'react-bootstrap';
import styled from 'styled-components';
import CatPost1 from '../../../assets/img/blog/cat-post/cat-post-1.jpg';
import CatPost2 from '../../../assets/img/blog/cat-post/cat-post-2.jpg';
import CatPost3 from '../../../assets/img/blog/cat-post/cat-post-3.jpg';


const CategorySliders = styled.section`
    margin:3rem 0;
    width:100%;
    padding:0 25px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export default class CategorySlider extends Component
{
    constructor()
    {
        super();
        this.state = {

        }
    }
    render(){
        return (
            <Fragment>
                <CategorySliders className="category_slider">
                    <Row>
                    <Col lg={4} md={6} sm={12}>
                        <div className="inner_category_slider">
                            <img src={CatPost1} alt="cat-post"></img>
                            <div>
                                <h4>social life</h4>
                                <p>Enjoy our social life together</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="inner_category_slider">
                            <img src={CatPost2} alt="cat-post"></img>
                            <div>
                                <h4>politics</h4>
                                <p>Be a part of politics</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="inner_category_slider">
                            <img src={CatPost3} alt="cat-post"></img>
                            <div>
                                <h4>food</h4>
                                <p>Let the food be finished</p>
                            </div>
                        </div>
                    </Col>
                    </Row>
                </CategorySliders>
            </Fragment>
        )
    }
}



