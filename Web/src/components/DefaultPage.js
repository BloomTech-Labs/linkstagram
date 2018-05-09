import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import {Button} from 'reactstrap';
import Header from './Header';
import Carousel from './Carousel';
import {signUpToggle} from '../actions'
class DefaultPage extends Component {
  toggle(){
    this.props.signUpToggle(this.props.modal)
  }
  render() {
    return (
      <div>
          <Header/>
          <Carousel/>
          <h1> LINKSTAGRAM </h1>
          {!this.props.registered ? <Button onClick={this.toggle.bind(this)}>BUY NOW</Button> : ''}
      </div>
      ); 
    }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    modal: state.modal
  };
};

export default withRouter(connect(mapStateToProps, {signUpToggle})(DefaultPage));