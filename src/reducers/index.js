import { combineReducers } from 'redux';
import AuthReducer from './auth';
import { reducer as FormReducer } from 'redux-form';
import UserReducer from './user';
import AlertsReducer from './alerts';
import StripeReducer from './stripe';

const rootReducer = combineReducers({
  alert: AlertsReducer,
  auth: AuthReducer,
  form: FormReducer,
  users: UserReducer,
  payment: StripeReducer
});
export default rootReducer;