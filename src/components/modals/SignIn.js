import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import { reduxForm, Field } from 'redux-form';
import { signin } from '../../actions';
import { connect } from 'react-redux';

class SignIn extends Component {
    handleFormSubmit({ email, password }) {
      this.props.signin(email, password, this.props.history);
    }

    renderAlert() {
      if (!this.props.error) return null;
      return <h3>{this.props.error}</h3>;
    }
    render() {
      const { handleSubmit } = this.props;
  
      return (
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
                            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                            {this.renderAlert()}
                            <fieldset>
                                <label>Email:</label>
                                <Field name="email" component="input" type="text" />
                            </fieldset>
                            <fieldset>
                                <label>Password:</label>
                                <Field name="password" component="input" type="password" />
                            </fieldset>
                            <button action="submit">Sign In</button>
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
  SignIn = connect(mapStateToProps, { signin })(SignIn);

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(SignIn);

 
        
