import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { signUpToggle }  from '../actions';
import {
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
class SideBar extends Component {
    toggleSignUpModal(){
      this.props.signUpToggle(this.props.modal);
    }  
    render(){
      return(this.props.registered ? <Nav vertical>
                <NavItem key={1}><NavLink tag={Link} to="/Pictures">Pictures</NavLink></NavItem>
                <NavItem key={2}><NavLink tag={Link} to="/Billing">Billing</NavLink></NavItem>
                <NavItem key={3}><NavLink tag={Link} to="/Settings">Settings</NavLink></NavItem>
            </Nav> : 
            <Nav vertical>
                <NavItem key={1}>
                  <a className="nav-link" onClick={this.toggleSignUpModal.bind(this)} style={{cursor:'pointer'}}>Sign-Up</a>
                </NavItem>
            </Nav>
          );
    }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
    registered : state.auth.registered
  };
};

export default withRouter(connect(mapStateToProps,{signUpToggle})(SideBar));