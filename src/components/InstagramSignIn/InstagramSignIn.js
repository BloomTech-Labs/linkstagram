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
      clientId="5fd2f11482844c5eba963747a5f34556"
      buttonText="Sign In"
      onSuccess={responseInstagram}
      onFailure={responseInstagram}
    >,
    {/* <FontAwesome
        name="instagram"
      /> */}
      <span> Sign In with Instagram </span>
    </InstagramLogin>
    );
  }
}
export default withRouter(InstaLogin);