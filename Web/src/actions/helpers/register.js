import axios from 'axios';
import {CHECK_IF_REGISTERED, USER_REGISTERED, REGISTRATION_ERROR, REGISTRATION_EXPIRED, SIGN_UP_TOGGLE} from '../constants/register';

const API_URL = 'http://localhost:2000';

export const signUpToggle = (state) => {
    return dispatch => {
        dispatch({
            type: SIGN_UP_TOGGLE,
            payload:!state
        });
    };
}

export const registrationError = error => {
    return {
        type: REGISTRATION_ERROR,
        payload: error
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