import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';
import Pictures from './Pictures';

class Dashboard extends Component {
    render(){
      return(
        <div >
          <Header/>
          <SideBar/>
          <Pictures/>
        </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default withRouter(connect(mapStateToProps)(Dashboard));