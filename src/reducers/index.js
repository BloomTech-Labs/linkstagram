import { combineReducers } from 'redux';
import AuthReducer from './auth';
import { reducer as FormReducer } from 'redux-form';
<<<<<<< HEAD
import UserReducer from './user';
import AlertsReducer from './alerts';
=======

>>>>>>> master
const rootReducer = combineReducers({
  alert: AlertsReducer,
  auth: AuthReducer,
  form: FormReducer,
  users: UserReducer
});
export default rootReducer;