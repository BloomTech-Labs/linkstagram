import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Pictures extends Component {
  componentDidMount() {
      this.fetchPictures();
  }

 fetchPictures() {
   
 }

  render() {
      return(<div className="Pictures"> </div>);
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
    registered : state.auth.registered
  };
};

export default withRouter(connect(mapStateToProps)(Pictures));