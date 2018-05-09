import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import {Button} from 'reactstrap';
import Header from './Header';
import Carousel from './Carousel';
class DefaultPage extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Carousel/>
          <h1> LINKSTAGRAM </h1>
          {!this.props.registered ? <Button><Link to="/Billing">BUY NOW </Link></Button> : ''}
      </div>
      ); 
    }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default withRouter(connect(mapStateToProps)(DefaultPage));