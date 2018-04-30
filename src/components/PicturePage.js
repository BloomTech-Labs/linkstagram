import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from './Header';
class PicturePage extends Component {
    render(){
      return(
        <div >
        <Header />
        Picture Page
        </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default withRouter(connect(mapStateToProps)(PicturePage));