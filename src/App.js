import React,{Component} from 'react';


import './assets/css/bootstrap.min.css';
import './assets/css/custom.css';
import './assets/css/blog.css';


import { BrowserRouter } from 'react-router-dom';
import AppRoute from './routers/AppRoute';





class App extends Component
{
  constructor(){
    super();
    this.state = {
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





