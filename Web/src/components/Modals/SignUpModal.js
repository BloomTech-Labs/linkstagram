import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
          <ModalHeader toggle={this.toggle.bind(this)}>Modal title</ModalHeader>
          <ModalBody>
            The is a Sign Up Modal.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle.bind(this)}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle.bind(this)}>Cancel</Button>
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