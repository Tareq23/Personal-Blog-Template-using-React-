import React,{Component, Fragment} from 'react';
import TopNavigation from '../components/topNavigation/TopNavigation';
import TopBanner from '../components/topBanner/TopBanner';
import AboutSection from '../components/aboutSection/AboutSection';
import ExperienceEducation from '../components/experienceEducation/ExperienceEducation';
import ClientOffer from '../components/clientOffer/ClientOffer';
import ProjectSection from '../components/projectSection/ProjectSecton';
import TestimonialSection from '../components/testimonialSection/TestimonialSection';
import FooterSection from '../components/footerSection/FooterSection';
export default class HomePage extends Component
{
    constructor(){
        super();
        this.state = {}
    }

    render(){
        return (
            <Fragment>
                <TopNavigation title="Home"/>
                <TopBanner/>
                <AboutSection/>
                <ExperienceEducation/>
                <ClientOffer/>
                <ProjectSection/>
                <TestimonialSection/>
                <FooterSection/> 
            </Fragment>
        )
    }
}




