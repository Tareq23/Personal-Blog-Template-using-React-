import React,{Component,Fragment} from 'react';

import TopBannerInner from './TopBannerInner';



class TopBanner extends Component{
    constructor(){
        super();
        this.state = {}
    }
    render()
    {
        return (
            <Fragment>
                <div className="top_banner">
                    <TopBannerInner />
                </div>
            </Fragment>
        );
    }
}

export default TopBanner;



