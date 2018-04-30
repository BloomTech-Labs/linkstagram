import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';

// TODO 
// 1. Replace email place holder with {user.email} ?
// 2. handle Submit button


class SettingsPage extends Component {
    render(){
      return (
        <div >
        <Header />
        <SideBar/>
        <form>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="text" class="form-control" placeholder="Email"/> 
          </div>
          <div class="form-group">
            <label for="old-password">Old password:</label>
            <input type="password" class="form-control" placeholder="********"/> 
          </div>
          <div class="form-group">
            <label for="new-password">New password:</label>
            <input type="password" class="form-control" placeholder="********"/> 
          </div>
          <button type="submit" class="btn btn-primary">Update Password</button>
        </form>
        </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default withRouter(connect(mapStateToProps)(SettingsPage));
