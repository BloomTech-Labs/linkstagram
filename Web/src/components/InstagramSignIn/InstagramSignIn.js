import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import InstagramLogin from 'react-instagram-login';
// import FontAwesome from 'font-awesome';
import { signin } from '../../actions';
class InstaLogin extends Component {

  handleOnSuccess(response) {
    if(!this.props.auth.authenticated) {
      this.props.signin(response, this.props.history);
    }
  }
  
  handleOnFailue(response) {
    /* need to dispatch an error  */
    console.log('Im Failure Response', response);
  }
 
  render() {
    return(
      <InstagramLogin
        clientId="b9ff132273934310bebf3aecc6e77643"
        buttonText="Sign In"
        onSuccess={this.handleOnSuccess.bind(this)}
        onFailure={this.handleOnFailue.bind(this)}
      >
        <span> Sign In with Instagram </span>
      </InstagramLogin>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default withRouter(connect(mapStateToProps, {signin})(InstaLogin));