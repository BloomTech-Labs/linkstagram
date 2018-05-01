import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { signin } from '../../actions';
class SignIn extends Component {
    handleFormSubmit({ username, password }) {
    
    }
    renderAlert() {
        if (!this.props.error) return null;
        return <h3>{this.props.error}</h3>;
    }
    render(){
        const { handleSubmit } = this.props;
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
                                {this.renderAlert()}
                                <form  onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                                    <Field className="form-control" name="username" component="input" type="input" />
                                    <Field className="form-control" name="password" component="input" type="input" />
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
      error: state.auth.error,
      authenticated: state.auth.authenticated
    };
  };

  SignIn = withRouter(connect(mapStateToProps, { signin })(SignIn));
  
export default reduxForm({
    form: 'signin',
    fields: ['username','password']
})(SignIn);
  