import React from 'react';
import ReactDOM from 'react-dom';
import InstagramLogin from 'react-instagram-login';
 
const responseInstagram = (response) => {
  console.log(response);
}
 
ReactDOM.render(
  <InstagramLogin
    clientId="5fd2f11482844c5eba963747a5f34556"
    buttonText="Sign In"
    onSuccess={responseInstagram}
    onFailure={responseInstagram}
  >,
  <FontAwesome
      name="instagram"
    />
    <span> Sign In with Instagram </span>
  </InstagramLogin>
)