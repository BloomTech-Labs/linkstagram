import axios from 'axios';
export const CHECK_IF_AUTHENTICATED = 'CHECK_IF_AUTHENTICATED';
export const USER_UNAUTHENTICATED = 'USER_UNAUTHENTICATED';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const authError = error => {
    return {
        type: AUTHENTICATION_ERROR,
        payload: error
    };
};

export const signin = (privateKey, history) => {
    return dispatch => { dispatch(authError('Failed to Sign In.')); };      
};

export const signout = () => {
    return dispatch => {
        dispatch({
            type: USER_UNAUTHENTICATED,
            payload: {}
            });
    };
};