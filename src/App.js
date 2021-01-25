import React,{Component} from 'react';


import './assets/css/bootstrap.min.css';
import './assets/css/custom.css';
import './assets/css/blog.css';


import { BrowserRouter } from 'react-router-dom';
import AppRoute from './routers/AppRoute';





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
     <BrowserRouter>
        <AppRoute />
     </BrowserRouter>
    );
  }
}
export default App;





