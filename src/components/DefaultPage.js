import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
<<<<<<< HEAD
//not quite sure what is wanted here from the parallax effect so I will 
=======
import { UncontrolledCarousel } from 'reactstrap';

import Header from './Header';

>>>>>>> master
class DefaultPage extends Component {
  render() {
    return (
      <div> 
          <Header/>
          {this.props.location}
          <h1> LINKSTAGRAM </h1>
          <Link to="/Billing">BUY NOW </Link>
        </div>
      );
    //TODO
    
    //ADD carousel- of???
    
    }
  }
export default withRouter(DefaultPage);