import React, { Component } from 'react';
import { withRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DefaultPage from './components/DefaultPage';
import Dashboard from './components/Dashboard';
import PicturePage from './components/PicturePage';
import VisitorLandingPage from './components/VisitorLandingPage';
import BillingPage from './components/BillingPage';
import SettingsPage from './components/SettingsPage';
import Notfound from './components/NotFound';
import './index.css';
class App extends Component {
  render() {
    return (
      <Router >
        <Switch>
          <Route path="/" component={DefaultPage} exact />
          <Route path="/Dashboard" component={RequireAuth(Dashboard)} exact />
          <Route path="/Pictures" component={RequireAuth(PicturePage)} exact />
          <Route path="/:user" component={VisitorLandingPage} exact />
          <Route path="/Billing" component={RequireAuth(BillingPage)} exact />
          <Route path="/Settings" component={RequireAuth(SettingsPage)} exact />
          <Route component={Notfound} />
        </Switch>
      </Router>
    );
  }
}

export default withRouter(App);
