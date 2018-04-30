import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';

class DefaultPage extends Component {
    render() {
      return (<h1>Linkstagram</h1>);
    }
  }
  export default withRouter(DefaultPage);