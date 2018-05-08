import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

class RegisterPage extends Component {
    render() {
      return (<div >
        Register Page
        // get their email address.
        </div>    );
    }    
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
    registered : state.auth.registered
  };
};

export default withRouter(connect(mapStateToProps)(Header));