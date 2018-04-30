import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class NotFound extends Component {
    render(){
      return(<div>Not Found</div>);
    }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default withRouter(connect(mapStateToProps)(NotFound));
