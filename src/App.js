import React, { Component } from 'react';
import { withRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DefaultPage from './components/DefaultPage';
import Dashboard from './components/Dashboard';
import PicturePage from './components/PicturePage';
import VisitorLandingPage from './components/VisitorLandingPage';
import BillingPage from './components/BillingPage';
import Notfound from './components/NotFound';
import RequireAuth from './components/Auth/RequireAuth';
import './index.css';
class App extends Component {
  render() {
    return (
      <Router >
        <Switch>
          <Route path="/" component={DefaultPage} exact />
          <Route path="/Dashboard" component={Dashboard} exact />
          <Route path="/Pictures" component={PicturePage} exact />
          <Route path="/User/:user" component={VisitorLandingPage} exact />
          <Route path="/Billing" component={BillingPage} exact />
          <Route component={Notfound} />
        </Switch>
      </Router>
    );
  }
}

export default withRouter(App);
