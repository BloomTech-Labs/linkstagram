import React, { Component } from 'react';
import { withRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import Dashboard from './Component/Dashboard';
import PhotoGallery from './Component/PhotoGallery';
import PhotoPage from './Component/PhotoPage';
import BillingPage from './Component/Billing';

import './index.css';

class App extends Component {
  render() {
    return (
      <Router >
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/gallery" component={PhotoGallery} exact />
          <Route path="/user" component={PhotoPage} exact />
          <Route path="/billing" component={BillingPage} exact />
        </Switch>
      </Router>
    );
  }
}

export default withRouter(App);
