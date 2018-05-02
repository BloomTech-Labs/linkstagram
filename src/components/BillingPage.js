import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from './Header';
class BillingPage extends Component {
  render(){
    return(
      <div >

        <Header />

        <div>
        <h2>Billing Page</h2>
        <form className='payment-info' autocomplete='on' onSubmit=''>
          <fieldset>
            <label for='credit-card-number'>Credit Card Number</label>
            <input id='credit-card-number' autoComplete='cc-number' type="text" />

            <label for='expiration-date'>Expiration Date</label>
            <input id='expiration-date' type='month' autoComplete='cc-exp' />

            <label for='ccv-number'>CCV security code</label>
            <input id='ccv-number' autoComplete='cc-csc' />
          </fieldset>

          <input id='subscription' type='checkbox' />
          <label for='subscription'>
            get me 1 month subscription for $20, brother.
          </label>

          <button name='submit'>Buy Now</button>
        </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default withRouter(connect(mapStateToProps)(BillingPage));