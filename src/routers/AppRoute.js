import React, { Component, Fragment } from 'react';
import {Route, Switch} from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import BlogPage from '../pages/BlogPage';
import HomePage from '../pages/HomePage';
import ServicePage from '../pages/ServicePage';
import SinglePostPage from '../pages/SinglePostPage';
export default class AppRoute extends Component
{
    constructor(){
        super();
        this.state = {}
    }
    render()
    {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/service" component={ServicePage}/>
                    <Route exact path="/blog" component={BlogPage}/>
                    <Route exact path="/blog-details" component={SinglePostPage}/>
                </Switch>
            </Fragment>
        )
    }
}



