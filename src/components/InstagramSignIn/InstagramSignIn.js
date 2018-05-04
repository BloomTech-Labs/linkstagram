import React from 'react';

import InstagramLogin from 'react-instagram-login';
// import FontAwesome from 'font-awesome';



const responseInstagram = (response) => {
  res
}
 
export default () => {
  return(
    <InstagramLogin
      clientId=""
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