import {
  STRIPE_PAYMENT_SUCCESS, 
  STRIPE_PAYMENT_ERROR
} from '../actions';

export default (obj = {}, action) => {
  switch (action.type) {
    case STRIPE_PAYMENT_SUCCESS:
      return { ...obj, success: true, data: action.payload};
    case STRIPE_PAYMENT_ERROR:
      return { ...obj, success: false };
    default:
      return obj;
  }
};