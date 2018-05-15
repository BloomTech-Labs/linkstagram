import React, { Component } from "react";
import { Button, Link } from "react";
import Carousel from "./Carousel";
import Header from "./Header";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <Button>
          <Link to="/Billing">BUY NOW </Link>
        </Button>
      </div>
    );
  }
}
export default LandingPage;
