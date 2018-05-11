import { combineReducers } from 'redux';
import AuthReducer from './auth';
import { reducer as FormReducer } from 'redux-form';
import  BillingReducer from './billing';
import FetchImagesReducer from './fetchImages';
import CarouselReducer from './carousels';

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  modal: BillingReducer,
  pictures: FetchImagesReducer,
  carouselItems: CarouselReducer
});
export default rootReducer;