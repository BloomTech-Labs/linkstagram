import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";

class SideBar extends Component {
  render() {
    return (
      <div>
        <p>List Based</p>
        <Nav vertical>
          <NavItem>
            <NavLink href="/PhotoPage">Pictures</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Billing">Billing</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Settings">Settings</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default SideBar;
