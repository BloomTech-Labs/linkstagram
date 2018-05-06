import axios from 'axios';
axios.defaults.withCredentials = true;

export const STRIPE_PAYMENT_ERROR = 'STRIPE_PAYMENT_ERROR';
export const STRIPE_PAYMENT_SUCCESS = 'STRIPE_PAYMENT_SUCCESS';
const PAYMENT_SERVER_URL = 'http://localhost:8080';

export const stripeError = error => {
  return {
      type: STRIPE_PAYMENT_ERROR,
      payload: error
  };
};

export const stripeSuccess = data => {
  return {
      type: STRIPE_PAYMENT_SUCCESS,
      payload: data
  };
};

export const onToken = (amount, description, currency) => token =>
axios.post(PAYMENT_SERVER_URL,
  {
    description,
    source: token.id,
    currency,
    amount
  })
  .then(successPayment)
  .catch(errorPayment);

export const successPayment = data => {
  return dispatch => {
    dispatch(stripeSuccess(data));
    }
  };

export const errorPayment = error => {
  return dispatch => {
    dispatch(stripeError(error));
  }
};