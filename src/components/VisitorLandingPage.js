import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from './Header';
class VisitorLandingPage extends Component {
    render(){
      return(
        <div >
          <Header />
        Visitor Landing Page
        </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default withRouter(connect(mapStateToProps)(VisitorLandingPage));