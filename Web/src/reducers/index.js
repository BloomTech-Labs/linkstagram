import { combineReducers } from 'redux';
import AuthReducer from './auth';
import { reducer as FormReducer } from 'redux-form';
import  BillingReducer from './billing'
const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  modal: BillingReducer
});
export default rootReducer;