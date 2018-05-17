import React, { Component } from 'react';
import { withRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Landing from './Component/Landing';
import Dashboard from './Component/Dashboard';
import PhotoPage from './Component/PhotoPage';
import LandingPage from './Component/LandingPage';
import Billing from './Component/Billing';
// import Notfound from './Component/NotFound';


import './index.css';

class App extends Component {
  render() {
    return (

      
      <Router >
      
       <div>
          <Route path="/" component={LandingPage}  />
         </div>
        
       
      </Router>
     

    
    );
  }
}

export default App;
