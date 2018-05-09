import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchPictures } from '../actions';
class Pictures extends Component {
  fetchPictures() {
    const { max_id, min_id, count } = this.props.pagination; 
    this.props.fetchPictures( max_id, min_id, count, this.props.auth.access_token);
  }

  render() {
      return(<div className="Pictures"> </div>);
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
    registered : state.auth.registered,
    pagination : state.pagination
  }; 
};

export default withRouter(connect(mapStateToProps, {fetchPictures})(Pictures));