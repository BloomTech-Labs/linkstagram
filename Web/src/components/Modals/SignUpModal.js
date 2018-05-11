import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Button, Form, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {signup,signUpToggle} from '../../actions';

class SignUpModal extends Component { 
    constructor(props){
        super(props);
    }
    toggle() {
        this.props.signUpToggle(this.props.modal);
    }
    render() {
        console.log(this.props.modal)
        return (<Modal isOpen={this.props.modal} toggle={this.toggle.bind(this)} className="">
          <ModalHeader toggle={this.toggle.bind(this)}>Sign up to Linkstasite!</ModalHeader>
          <ModalBody>
            <Form>
              <Label for="email">Email</Label>
              <Input type="email" id="email" name="email" placeholder="enter your email" />
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle.bind(this)}>Sign Up!</Button>{' '}
          </ModalFooter>
        </Modal> );
  }
}

const mapStateToProps = state => {
    return {
      auth: state.auth,
      modal: state.modal
    };
};
  
export default withRouter(connect(mapStateToProps, {signUpToggle})(SignUpModal));