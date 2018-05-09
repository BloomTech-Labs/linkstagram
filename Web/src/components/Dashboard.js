import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';
import Pictures from './Pictures';

class Dashboard extends Component {
    render(){
      return(
        <div className="container-fluid">
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-3">
                        <SideBar/>
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-9">
                        <h1>Dashboard</h1>     
                        <hr/>             
                        <Pictures/>
                    </div>
                </div>
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

export default withRouter(connect(mapStateToProps)(Dashboard));