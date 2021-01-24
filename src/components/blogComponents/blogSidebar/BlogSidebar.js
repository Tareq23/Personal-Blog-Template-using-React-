import { faFacebook, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import AuthorImg from '../../../assets/img/blog/author.png';
import CheckImg from '../../../assets/img/blog/causes/causes-1.jpg';
import PostImg1 from '../../../assets/img/blog/popular-post/post1.jpg';
import PostImg2 from '../../../assets/img/blog/popular-post/post2.jpg';
import PostImg3 from '../../../assets/img/blog/popular-post/post3.jpg';
import PostImg4 from '../../../assets/img/blog/popular-post/post4.jpg';



export default class BlogSidebar extends Component
{
    constructor(){
        super();
        this.state = {}
    }

    render(){
        return (
            <Fragment>
                <aside className="blog_sidebar">
                    <div className="post_search">
                        <form action="#blog" method="post">
                            <input type="text"></input>
                            <a href="#search">
                                <FontAwesomeIcon size="sm" icon={faSearch} />
                            </a>
                        </form>
                    </div>
                    <div className="blog_writer">
                        
                            <div className="blogger_img">
                                <img src={CheckImg} alt="bloger images"></img>
                            </div>
                                
                            <p className="name">Charlie Barber</p>
                            <p className="position">Senior blog writer</p>
                            <ul>
                                <li><a href="#blog">
                                    <FontAwesomeIcon size="1x" icon={faFacebook} />
                                    </a></li>
                                <li><a href="#blog">
                                    <FontAwesomeIcon size="1x" icon={faLinkedinIn}/>
                                    </a></li>
                                <li><a href="#blog">
                                    <FontAwesomeIcon size="1x" icon={faGithub} />
                                    </a></li>
                                <li><a href="#blog">
                                    <FontAwesomeIcon size="1x" icon={faTwitter}/>
                                    </a></li>
                            </ul>
                            <p className="text-center">Boot camps have its supporters andit sdetractors. Some people do not understand why you should have to spend money on boot camp when you can get. Boot camps have itssuppor ters andits detractors.</p>
                       
                    </div>
                    <div className="popular_post mt-5">
                        <h2 className="sidebar_title">Popular post</h2>
                        <ul>
                            <li>
                                <img src={PostImg1} alt="post img"></img>
                                <div>
                                    <a href="#home"><h3>space The final Frontier</h3></a>
                                    <p>02 Hours ago</p>
                                </div>
                            </li>
                            <li>
                                <img src={PostImg2} alt="post img"></img>
                                <div>
                                    <a href="#home"><h3>seperate another title here</h3></a>
                                    <p>02 Hours ago</p>
                                </div>
                            </li>
                            <li>
                                <img src={PostImg3} alt="post img"></img>
                                <div>
                                    <a href="#home"><h3>space The final Frontier</h3></a>
                                    <p>02 Hours ago</p>
                                </div>
                            </li>
                            <li>
                                <img src={PostImg4} alt="post img"></img>
                                <div>
                                    <a href="#home"><h3>post small title here</h3></a>
                                    <p>02 Hours ago</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="ads_widget">
                            <pre>300 x 250 px
                                 ads goes here
                            </pre>
                    </div>
                    <div className="post_categories mt-5">
                        <h2 className="sidebar_title" >post categories</h2>
                        <ul>
                            <li><a href="#blog"><span>cat name</span><span>10</span></a></li>
                            <li><a href="#blog"><span>cat name</span><span>10</span></a></li>
                            <li><a href="#blog"><span>cat name</span><span>10</span></a></li>
                            <li><a href="#blog"><span>cat name</span><span>10</span></a></li>
                            <li><a href="#blog"><span>cat name</span><span>10</span></a></li>
                        </ul>
                    </div>
                    <div className="blog_newsletter mt-5">
                        <h2 className="sidebar_title">Newsletter</h2>
                        <p className="text-center">Here, I focus on a range of items and features that we use in life without giving them a second thought. </p>
                        <form>
                            
                            <FontAwesomeIcon fill="red" icon={faEnvelope} />
                            <input type="email"></input>
                            
                            <a className="text-center" href="#home">subscribe</a>
                        </form>
                    </div>
                    <div className="tag_clouds mt-5">
                        <h2 className="sidebar_title">Tag clouds</h2>
                        <ul>
                            <a href="#home">technology</a>
                            <a href="#home">fashion</a>
                            <a href="#home">architecture</a>
                            <a href="#home">food</a>
                        </ul>
                    </div>
                </aside>
            </Fragment>
        );
    }
}




