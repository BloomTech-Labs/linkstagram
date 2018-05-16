import React, { Component } from 'react';
import { withRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import Dashboard from './Component/Dashboard';
import PhotoPage from './Component/PhotoPage';
import PhotoGallery from './Component/PhotoGallery';
import Billing from './Component/Billing';
// import Notfound from './Component/NotFound';

import './index.css';

class App extends Component {
  render() {
    return (
      <Router >
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Pictures" component={PhotoPage}/>
          <Route path="/User" component={PhotoGallery}/>
          <Route path="/Billing" component={Billing}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
