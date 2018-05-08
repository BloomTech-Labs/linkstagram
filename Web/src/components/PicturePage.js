import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import Link from '../helpers/Link';
// import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button } from 'reactstrap';
import SideBar from './SideBar';
class PicturePage extends Component {
    render(){ return (<div>Picture Page</div>); }
};

 
const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
    registered : state.auth.registered
  };
};

export default withRouter(connect(mapStateToProps)(PicturePage));




