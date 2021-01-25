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
        this.state = {}
    }

    render(){
        return(
            <Fragment>
                <TopNavigation title="Service"/>
                <ClientOffer />
                <TestimonialSection/>
                <FooterSection/>
            </Fragment>
        )
    }


}


