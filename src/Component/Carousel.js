import React, { Component } from 'react';
import DefaultCarousel from './DefaultCarousel';
import CarouselLoggedIn from '/CarouselLoggedIn';

class Carousel extends Component {
    render() {
        const isLoggedIn = this.state.isLoggedIn; 
        return(
            <div>
                {!isLoggedIn ? (
                    <DefaultCarousel/> ) 
                    : (
                    <CarouselLoggedIn/>
                )}
                </div>
        );
    }
}
export default Carousel;