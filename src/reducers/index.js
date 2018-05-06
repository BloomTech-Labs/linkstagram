import { combineReducers } from 'redux';
import AuthReducer from './auth';
import { reducer as FormReducer } from 'redux-form';
import UserReducer from './user';
import AlertsReducer from './alerts';
import UrlReducer from './UrlService';

const rootReducer = combineReducers({
  alert: AlertsReducer,
  auth: AuthReducer,
  form: FormReducer,
  users: UserReducer,
  links: UrlReducer
});
export default rootReducer;