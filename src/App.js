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
      
        <Switch>
        
          <Route path="/" component={LandingPage}  exact/>
          <Route path="/Dashboard" component={Dashboard}  />
          <Route path="/Pictures" component={PhotoPage}  />
          <Route path="/User" component={LandingPage}  />

      
          <Route path="/Billing" component={Billing}  />    
        </Switch>
       
      </Router>
     
    );
  }
}

export default withRouter(App);
