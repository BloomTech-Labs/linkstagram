import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SignIn extends Component {
    render(){
      return(
        <div className="modal fade" id="signInModal" tabIndex="-1" role="dialog" aria-labelledby="signInModalLabel" aria-hidden="true">
            <div className="mt-5 pt-5">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="signInModalLabel">Sign In</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                /* Add Form Here */
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary"
                                data-dismiss="modal">
                            Cancel
                        </button>
                        <button className="btn btn-primary">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default withRouter(connect(mapStateToProps)(SignIn));
