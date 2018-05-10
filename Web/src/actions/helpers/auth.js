import axios from 'axios';
import {CHECK_IF_AUTHENTICATED, AUTHENTICATION_ERROR, USER_AUTHENTICATED, USER_UNAUTHENTICATED} from '../constants/auth';

const API_URL = 'http://localhost:2000';

export const authError = error => {
    return {
        type: AUTHENTICATION_ERROR,
        payload: error
    };
};

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

export const signout = () => {
    return dispatch => {
          dispatch({
            type: USER_UNAUTHENTICATED,
            payload: {}
          });
    };
};