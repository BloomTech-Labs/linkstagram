import axios from 'axios';

//axios.defaults.withCredentials = true;
const API_URL = 'http://localhost:2000';


export const CHECK_IF_AUTHENTICATED = 'CHECK_IF_AUTHENTICATED';
export const USER_UNAUTHENTICATED = 'USER_UNAUTHENTICATED';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const SIGN_UP_TOGGLE = 'SIGN_UP_TOGGLE';
export const CHECK_IF_REGISTERED = 'CHECK_IF_REGISTERED';
export const USER_REGISTERED = 'USER_REGISTERED';
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';
export const REGISTRATION_EXPIRED = 'REGISTRATION_EXPIRED';

export const authError = error => {
    return {
        type: AUTHENTICATION_ERROR,
        payload: error
    };
};

export const registrationError = error => {
    return {
        type: REGISTRATION_ERROR,
        payload: error
    };
};

export const signUpToggle = (state) => {
    return dispatch => {
        dispatch({
            type: SIGN_UP_TOGGLE,
            payload:!state
        });
    };
}


export const signin = (code, history) => {
    return dispatch => {
      axios
        .get(API_URL + `/authentication/${code}`)
        .then((response) => {
            dispatch({
                type: USER_AUTHENTICATED,
                payload:response.data
            });
            history.push('/Dashboard');
        })
        .catch((error) => {
            dispatch(authError(error));
        });
    };
};

export const signup = (access_token, email, history) => {
    return dispatch => {
      axios
        .post(API_URL + `/users/signup`, {access_token, email})
        .then((response) => {
            dispatch({
                type: USER_REGISTERED,
                payload:response.data
            });
            history.push('/Dashboard');
        })
        .catch((error) => {
            dispatch(registrationError(error));
        });
    };
};


export const signout = () => {
    return dispatch => {
          dispatch({
            type: USER_UNAUTHENTICATED,
            payload: {}
          });
    };
};

