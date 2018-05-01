import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Header extends Component {
    render(){
      return(
        <div >
        <a href='https://api.instagram.com/oauth/authorize/?client_id=b9ff132273934310bebf3aecc6e77643&redirect_uri=https://linkstagram.herokuapp.com/&response_type=token'>Sign In</a>
        </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default withRouter(connect(mapStateToProps)(Header));