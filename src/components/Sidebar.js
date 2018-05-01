import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import StickyBox from 'react-sticky-box'; 

class Sidebar extends Component {
    render(){
      return(
        <div >
            <StickyBox style={{ 'paddingTop': '10px', 'display': 'flex', 'alignItems': 'flex-wrap' , 'height': '550px', 'width': '140px','border': '2px solid'}}>
                <ul>
                    <li><a href="#Pictures">Pictures</a></li>
                    <li><a href="#Billing">Billing</a></li>
                    <li><a href="#Settings">Settings</a></li>
                </ul>
            </StickyBox>
            <br/>
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