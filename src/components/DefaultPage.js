import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import SignIn from './modals/SignIn';
import Header from './Header';

class DefaultPage extends Component {
    render() {
      return (
        <div> 
          <Header/>
          <SignIn/>
          <h1> LINKSTAGRAM </h1>
        </div>
      );
    //TODO
    //ADD BUTTON That links to sign in page
    //ADD carousel- of???
    //ADD button that links to billing page
    }
  }
  export default withRouter(DefaultPage);