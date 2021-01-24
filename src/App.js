import React,{Component,Fragment} from 'react';
// import { ProgressBar } from 'react-bootstrap';
// import styled from 'styled-components';

import './assets/css/bootstrap.min.css';
import './assets/css/custom.css';
import './assets/css/blog.css';

import BlogTopBanner from './components/blogComponents/blogTopBanner/BlogTopBanner';
// import AboutSection from './components/aboutSection/AboutSection';
// import ClientOffer from './components/clientOffer/ClientOffer';
// import ExperienceEducation from './components/experienceEducation/ExperienceEducation';
// import FooterSection from './components/footerSection/FooterSection';
// // import ProgressBar from './components/progressBar/ProgressBar';
// import ProjectSection from './components/projectSection/ProjectSecton';
// import TestimonialSection from './components/testimonialSection/TestimonialSection';
// import TopBanner from './components/topBanner/TopBanner';
import TopNavigation from './components/topNavigation/TopNavigation';
import CategorySlider from './components/blogComponents/categorySlider/CategorySlider';
// import BlogPost from './components/blogComponents/blogPost/BlogPost';
import SinglePost from './components/blogComponents/singlePost/SinglePost';
import BlogSection from './components/blogComponents/blogSection/BlogSection';



// const AppWrapper = styled.div`
//   display:flex;
//   justify-content:center;
// `;
// const ProgressBarContainer = styled.div`

//   width:300px;
//   margin-top:200px;

// `;



class App extends Component
{
  constructor(props){
    super(props);
    this.state = {
      percentage:20
    }
  }

  render(){
    return (
      <Fragment>
          {/* <TopNavigation/>
          <TopBanner/>
          <AboutSection/>
          <ExperienceEducation/>
          <ClientOffer/>
          <ProjectSection/>
          <TestimonialSection/>
          <FooterSection/> */}
          <TopNavigation />
          <BlogTopBanner />
          <CategorySlider />
          <BlogSection />
      </Fragment>
    );
  }
}
export default App;





