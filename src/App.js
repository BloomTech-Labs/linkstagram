import React, { Component } from 'react';
import { withRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import LandingPage from './Component/LandingPage';
import Dashboard from './Component/Dashboard';
import PhotoGallery from './Component/PhotoGallery';
import PhotoPage from './Component/PhotoPage';
import BillingPage from './Component/Billing';
=======

// import Landing from './Component/Landing';
import Dashboard from './Component/Dashboard';
import PhotoPage from './Component/PhotoPage';
import LandingPage from './Component/LandingPage';
import Billing from './Component/Billing';
// import Notfound from './Component/NotFound';

>>>>>>> master

import './index.css';

class App extends Component {
  render() {
    return (

      
      <Router >
      
        <Switch>
<<<<<<< HEAD
          <Route path="/" component={LandingPage} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/gallery" component={PhotoGallery} exact />
          <Route path="/user" component={PhotoPage} exact />
          <Route path="/billing" component={BillingPage} exact />
=======
        
          <Route path="/" component={LandingPage}  exact/>
          <Route path="/Dashboard" component={Dashboard}  />
          <Route path="/Pictures" component={PhotoPage}  />
          <Route path="/User" component={LandingPage}  />

      
          <Route path="/Billing" component={Billing}  />    
>>>>>>> master
        </Switch>
       
      </Router>
     

    
    );
  }
}

export default withRouter(App);
