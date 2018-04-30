import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
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
    
    getLinks() {
      if (this.props.authenticated) {
        /* Signed In */
        return [
          <NavItem key={1}>
          <NavLink tag={Link} to="/" className="d-block d-md-none d-lg-none d-xl-none" >Home</NavLink>
          </NavItem>
        ];
      }
      return [
        /* Signed out.. */
        <NavItem key={1}>
          <NavLink tag={Link} to="/" className="d-block d-md-none d-lg-none d-xl-none" >Home</NavLink>
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
        </div>
      );
    }    
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default withRouter(connect(mapStateToProps)(Header));