import axios from 'axios';

axios.defaults.withCredentials = true;
const ROOT_URL = 'http://localhost:3000';


export const USER_REGISTERED = 'USER_REGISTERED';
export const CHECK_IF_AUTHENTICATED = 'CHECK_IF_AUTHENTICATED';
export const USER_UNAUTHENTICATED = 'USER_UNAUTHENTICATED';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';

<<<<<<< HEAD

=======
>>>>>>> master
export const authError = error => {
    return {
        type: AUTHENTICATION_ERROR,
        payload: error
    };
};


  export const signin = (username, password, history) => {
    return dispatch => {
      axios
        .post(`https://api.instagram.com/oauth/authorize/`, {client_id:CLIENT-ID, redirect_uri:'https://linkstagram.herokuapp.com/', response_type:code })
        .then(() => {
          dispatch({
            type: USER_AUTHENTICATED
          });
          history.push('/users');
        })
        .catch(() => {
          dispatch(authError('Incorrect email/password combo'));
        });
    };
  };
  
  export const signout = () => {
    return dispatch => {
      axios
        .post(`${ROOT_URL}/logout`)
        .then(() => {
          dispatch({
            type: USER_UNAUTHENTICATED
          });
        })
        .catch(() => {
          dispatch(authError('Failed to log you out'));
        });
    };
  };

