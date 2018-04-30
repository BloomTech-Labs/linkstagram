import React, { Component } from 'react';
import { withRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DefaultPage from './components/DefaultPage';
import Notfound from './components/NotFound';
import './index.css';
class App extends Component {
  render() {
    return (
      <Router >
        <Switch>
          <Route path="/" component={DefaultPage} exact />
          <Route component={Notfound} />
        </Switch>
      </Router>
    );
  }
}

export default withRouter(App);
