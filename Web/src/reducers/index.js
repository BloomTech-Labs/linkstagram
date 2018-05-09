import { combineReducers } from 'redux';
import AuthReducer from './auth';
import { reducer as FormReducer } from 'redux-form';
import  BillingReducer from './billing';
import fetchImagesReducer from './fetchImages';

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  modal: BillingReducer,
  pictures: fetchImagesReducer
});
export default rootReducer;