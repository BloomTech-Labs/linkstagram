import React, { Component } from 'react';
import { withRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Component/Landing';
import Dashboard from './Component/Dashboard';
import PicturePage from './Component/PicturePage';
import VisitorLandingPage from './Component/VisitorLandingPage';
import Billing from './Component/Billing';
import Notfound from './Component/NotFound';

import './index.css';

class App extends Component {
  render() {
    return (
      <Router >
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/Dashboard" component={Dashboard} exact />
          <Route path="/Pictures" component={PicturePage} exact />
          <Route path="/User" component={VisitorLandingPage} exact />
          <Route path="/Billing" component={BillingPage} exact />
          <Route component={Notfound} />
        </Switch>
      </Router>
    );
  }
}

export default withRouter(App);
