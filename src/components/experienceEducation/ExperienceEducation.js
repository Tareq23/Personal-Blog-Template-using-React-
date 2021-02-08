import React, { Component, Fragment } from 'react';
import { Button, Container,Row} from 'react-bootstrap';
import ApiUrl from '../../restApi/ApiUrl';
import RestClient from '../../restApi/RestClient';

class ExperienceEducation extends Component{
    constructor()
    {
        super();
        this.state = {
            experience : true,
            education : false,
            data : []
        }

    }
    componentDidMount()
    {
        RestClient.GetRequest(ApiUrl.experience)
                    .then(result=>{
                        this.setState(
                            {data:result}
                        );
                    })
                    .catch(error=>{
                        // console.log(error);
                    });
        // if(this.state.experience){
        //     RestClient.GetRequest(ApiUrl.experience)
        //             .then(result=>{
        //                 this.setState(
        //                     {data:result}
        //                 );
        //             })
        //             .catch(error=>{
        //                 // console.log(error);
        //             });
        // }
        // else if(this.state.education){
        //         RestClient.GetRequest(ApiUrl.education)
        //                 .then(result=>{
        //                     this.setState(
        //                         {data:result}
        //                     );
        //                 }).catch(error=>{

        //                 });
        // }
    }
    componentDidUpdate()
    {
        if(this.state.experience){
            RestClient.GetRequest(ApiUrl.experience)
                    .then(result=>{
                        this.setState(
                            {data:result}
                        );
                    })
                    .catch(error=>{
                        // console.log(error);
                    });
        }
        else if(this.state.education){
                RestClient.GetRequest(ApiUrl.education)
                        .then(result=>{
                            this.setState(
                                {data:result}
                            );
                        }).catch(error=>{

                        });
        }
    }
    education = () =>{
            this.setState({education:true,experience:false});
            console.log("education : "+this.state.education);
            console.log("experience : "+this.state.experience);
    }
    experience = () => {
        this.setState({experience:true,education:false})
        console.log("Experience : "+this.state.experience);
        console.log("Education : "+this.state.education);
    }
    render(){
        const dataList = this.state.data.map(result=>{
            return(
                <li key={result.id} className="list_item">
                    <span></span>
                    <div className="media">
                        <div className="date">
                            <p>
                              {
                                result.start_time + " to " + result.end_time
                              }
                            </p>
                        </div>
                            <div className="content">
                                <h2>{result.company_name}</h2>
                                <p>{result.user_position} </p>
                                <p>{result.address}</p>
                            </div>
                    </div>
                </li>
            )
        })
       
        return(
            <Fragment>
                <Container fluid className="education_experience">
                    <Row>
                        <ul className="ee_btn">
                            <li><Button onClick={this.experience}>Experience</Button></li>
                            <li><Button onClick={this.education}>Education</Button></li>
                        </ul>
                        <div className="my_tab">
                            <ul className="inner_my_tab">
                                {
                                    dataList
                                }
                            </ul>
                        </div>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}


export default ExperienceEducation;