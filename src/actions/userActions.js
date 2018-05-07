import { userConstants } from '../constants';
import { userService } from '../services'; // this file should contain all the back end api calls.
import { alertActions } from './';
import { history } from '../helpers';

export const userActions = {
    login,
    logout,
    register,
    deleteID
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { 
        return { 
            type: userConstants.LOGIN_REQUEST, 
            payload: user 
            }; 
        }

    function success(user) { 
        return { 
            type: userConstants.LOGIN_SUCCESS, 
            payload: user 
        }; 
    }

    function failure(error) { 
        return { 
            type: userConstants.LOGIN_FAILURE, 
            payload: error 
        }; 
    }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { 
        return { 
            type: REGISTER_REQUEST, 
            payload: user 
        }; 
    }
    
    function success(user) { 
        return { 
            type: userConstants.REGISTER_SUCCESS, 
            payload: user 
        };
    }
    
    function failure(error) { 
        return { 
            type: userConstants.REGISTER_FAILURE, 
            payload: error 
            }; 
        }
}




function deleteID(id) {
    return dispatch => {
        dispatch(request(id));

        userService.deleteID(id)
            .then(
                user => { 
                    dispatch(success(id));
                },
                error => {
                    dispatch(failure(id, error));
                }
            );
    };

    function request(id) { 
        return { 
            type: userConstants.DELETE_REQUEST, 
            payload: id 
        }; 
    }

    function success(id) { 
        return { 
            type: userConstants.DELETE_SUCCESS, 
            payload: id 
        }; 
    
    }

    function failure(id, error) { 
        return { 
            type: userConstants.DELETE_FAILURE, 
            payload: id, error 
        }; 
    }
}
