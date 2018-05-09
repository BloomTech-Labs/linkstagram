import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import  InstaLogin from './InstagramSignIn/InstagramSignIn';
import SignUpModal from './Modals/SignUpModal';
import { signUpToggle } from '../actions';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  toggleSignUpModal(){
    this.props.signUpToggle(this.props.modal);
  }  
    getLinks() {
      if (this.props.authenticated) {
        /* Signed In */
        const _l = [
          <NavItem key={1}>
            <NavLink tag={Link} to="/" className="" >Home</NavLink>
          </NavItem>,
          <NavItem key={2}>
            <NavLink tag={Link} to="/Dashboard" className="" >Dashboard</NavLink>
          </NavItem>
        ];
        if(this.props.registered){
          _l.push(
            <NavItem key={3}>
              <NavLink tag={Link} to="/Billing" className="" >Billing</NavLink>
            </NavItem>);
        } else {
          _l.push(
            <NavItem key={3}>
              <a className="nav-link" onClick={this.toggleSignUpModal.bind(this)} style={{cursor:'pointer'}}>Sign-Up</a>
            </NavItem>);
        }
        return _l;
      }
      return [
        /* Signed out.. */
        <NavItem key={1}>
          <NavLink tag={Link} to="/" className="" >Home</NavLink>
        </NavItem>,
        <NavItem key={2}>
          <InstaLogin />
        </NavItem>
      ];
    }

    render() {
      return (
        <div className="container-fluid mx-0 px-0" id="navigation">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="navbar--top">
                            <Navbar color="faded" light expand="md" style={{zIndex:1100}}>
                                <a className="navbar-brand" id="nav-logo" href="/" >LINKSTAGRAM</a>
                                <NavbarToggler onClick={this.toggle} />
                                  <Collapse isOpen={this.state.isOpen} navbar>
                                    <Nav className="mx-auto" navbar>
                                        {this.getLinks()}
                                    </Nav>
                                </Collapse>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>
            <SignUpModal />
        </div>
      );
    }    
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
    registered : state.auth.registered,
    modal: state.modal
  };
};

export default withRouter(connect(mapStateToProps, {signUpToggle})(Header));
