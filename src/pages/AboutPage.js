import React, { Component, Fragment } from 'react';
import AboutSection from '../components/aboutSection/AboutSection';
import FooterSection from '../components/footerSection/FooterSection';
import TestimonialSection from '../components/testimonialSection/TestimonialSection';
import TopBannerInner from '../components/topBanner/TopBannerInner';
import TopNavigation from '../components/topNavigation/TopNavigation';


export default class AboutPage extends Component
{
    constructor()
    {
        super();
        this.state = {}
    }
    render(){
        return(
            <Fragment>
                <TopNavigation title="About" />
                <TopBannerInner />
                <hr className="mt-5"/>
                <AboutSection />
                <TestimonialSection />
                <FooterSection />
            </Fragment>
        )
    }
}










