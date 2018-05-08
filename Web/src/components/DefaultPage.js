import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import {Button} from 'reactstrap';
import Header from './Header';
import Carousel from './Carousel';
import { signin } from '../actions';
class DefaultPage extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Carousel/>
          <h1> LINKSTAGRAM </h1>
          // if authenticated and registerd no need for buy now, otherwise handle.
          <Button><Link to="/Billing">BUY NOW </Link></Button>
      </div>
      ); 
    }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default withRouter(connect(mapStateToProps, {signin})(DefaultPage));