import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {signup, signUpToggle} from '../../actions';

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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
  
export default withRouter(connect(mapStateToProps)(SignUpModal));