import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import InstagramLogin from 'react-instagram-login';
// import FontAwesome from 'font-awesome';

class InstaLogin extends Component {

  
 
render() {
  const responseInstagram = (response) => {
    console.log(response);
  }
  return(
    <InstagramLogin
      clientId="b9ff132273934310bebf3aecc6e77643"
      buttonText="Sign In"
      onSuccess={responseInstagram}
      onFailure={responseInstagram}
    >
      <span> Sign In with Instagram </span>
    </InstagramLogin>
    );
  }
}
export default withRouter(InstaLogin);