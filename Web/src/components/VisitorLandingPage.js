import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from './Header';
class VisitorLandingPage extends Component {
    render(){
      return(
        <div >
          <Header />
          {this.props.match.params.user ? <h1>{this.props.match.params.user}</h1> : ''}
        Visitor Landing Page
        </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
    registered : state.auth.registered
  };
};

export default withRouter(connect(mapStateToProps)(VisitorLandingPage));