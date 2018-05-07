import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { onToken } from '../actions';

class Checkout extends Component {
  render() {
    const {name, description, amount, currency, onToken } = this.props;
    return (
      <StripeCheckout
        name={name}
        description={description}
        amount={amount}
        token={onToken(amount, description)}
        currency={currency}
        stripeKey='pk_test_raKeZeBVGtWOnOlrpLoNBqtf'
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default withRouter(connect(mapStateToProps, {onToken})(Checkout));

