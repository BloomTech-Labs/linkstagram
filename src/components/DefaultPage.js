import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';

import { Button } from 'reactstrap';


import Header from './Header';
import Carousel from './Carousel';

class DefaultPage extends Component {
  render() {
    return (
      <div> 
          <Header/>
          <Carousel>
          <h1> LINKSTAGRAM </h1>
          <Button>
          <Link to="/Billing">BUY NOW </Link>
          </Button>
        </div>
      );
    }
  }
export default withRouter(DefaultPage);