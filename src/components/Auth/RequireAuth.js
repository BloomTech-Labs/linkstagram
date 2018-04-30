import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ComposedComponent => {
  class RequireAuthentication extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/Sign-In');
      }
    }

    render() {
      return (this.props.authenticated ? (
            <ComposedComponent />
          ) : null);
    }
  }

  const mapStateToProps = state => {
    return {
      authenticated: state.auth.authenticated
    };
  };

  return connect(mapStateToProps)(RequireAuthentication);
};