import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import InstagramLogin from 'react-instagram-login';
// import FontAwesome from 'font-awesome';

class InstaLogin extends Component {

  handleOnSuccess(response){
    /* need an action to handle the token from Instagram */
    console.log('Im Success respone', response);
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
export default withRouter(InstaLogin);
