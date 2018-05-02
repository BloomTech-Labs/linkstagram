import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
//not quite sure what is wanted here from the parallax effect so I will 
class DefaultPage extends Component {
    render() {
      return (<h1>Linkstagram</h1>);
    }
  }
export default withRouter(DefaultPage);