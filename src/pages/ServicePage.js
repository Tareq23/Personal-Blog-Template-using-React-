import React, { Component, Fragment } from 'react';
import ClientOffer from '../components/clientOffer/ClientOffer';
import FooterSection from '../components/footerSection/FooterSection';
import TestimonialSection from '../components/testimonialSection/TestimonialSection';
import TopNavigation from '../components/topNavigation/TopNavigation';



export default class ServicePage extends Component
{


    constructor()
    {
        super();
        this.state = {
            bgColor: {
                color:'#000',
                backgroundColor : 'linear-gradient(to right,#9594b8,#72a5ac)'
            }
        }
    }

    render(){
        return(
            <Fragment>
                <TopNavigation title="Service" bgColor={this.state.bgColor}/>
                <ClientOffer />
                <TestimonialSection/>
                <FooterSection/>
            </Fragment>
        )
    }


}


