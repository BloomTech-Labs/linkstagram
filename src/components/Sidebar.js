import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import StickyBox from 'react-sticky-box'; 

class SideBar extends Component {
    render(){
      return(
        <div >
            <StickyBox style={{ 'display': 'flex', 'alignItems': 'flex-start', 'padding': '30px 20px' }}>
                <ul>
                    <li><a href="#Pictures">Pictures</a></li>
                    <li><a href="#Billing">Billing</a></li>
                    <li><a href="#Settings">Settings</a></li>
                </ul>
            </StickyBox>
        </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default withRouter(connect(mapStateToProps)(Sidebar));