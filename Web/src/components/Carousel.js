import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Button, UncontrolledCarousel } from 'reactstrap';
import {signUpToggle, getCarouselItems} from '../actions';



class DefaultCarousel extends Component {
    componentDidMount() {
      this.props.getCarouselItems(this.props.auth);
    }

    toggle() {
        this.props.signUpToggle(this.props.modal)
    }
    
    renderCarouselGroup(items) {
        return ( <UncontrolledCarousel items={items} />)
        
    }
    
    getItems() {
        console.log(this)
        const {registered, authenticated} = this.props.auth;
        if(!registered && !authenticated) { 
           return this.renderCarouselGroup(this.props.carouselItems);
        } else if(!registered && authenticated) {
            return this.renderCarouselGroup(this.props.carouselItems);
        } else {
            return this.renderCarouselGroup(this.props.carouselItems);
        }
    }
    
    render() {
      return(this.getItems())
    }
}

const mapStateToProps = state => {
    return {
      auth: state.auth,
      modal: state.modal,
      carouselItems: state.carouselItems 
    };
};

export default withRouter(connect(mapStateToProps, {signUpToggle, getCarouselItems})(DefaultCarousel));