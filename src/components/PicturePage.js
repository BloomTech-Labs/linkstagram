import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button } from 'react-strap';
import 'bootstrap/dist/css/bootstrapmin.css';
// import Sidebar from './SideBar';
class PicturePage extends Component {
    constructor(props) {
      super(props);
      state = {
        image,
        link,
        title
      };
    }
    handleClick() {
      //update input fields
      this.setState({
        image : image,
        link : link,
        title : title
      });
    }
    render(){
      // const { image, link, title } = this.state;
      return (
              <Grid fluid className="grid-figure">
              <nav class="navbar-text navbar-left">
              <ol class="breadcrumb">
                <li><a href="#Home">Home</a></li>
                <li href="active">Picture Name</li>
              </ol>
              <p class="navbar-text navbar-right">
              <a href="#SignOut" class="navbar-link">SignOut</a>
              </p>
              </nav>
               <Row>
                  <Col className='pictureName' xs={4} md={8} mdOffset={5} style={{ 'textAlign': 'center', 'width': '1145px'}}>
                      <h1>{this.state.title}</h1>
                  </Col>
                </Row>
                  <br/>
                  <div >
                    <Row >
                      <Col className="Sidebar"xs={12} md={3}>
                        <SideBar/> 
                      </Col>
                      <Col className="image" xs={12} md={3} >
                        <img src={this.state.image} alt={image.title} />
                      </Col>
                      <Col className="affiliateLink" md={8} style={{ 'paddingTop': '20px'}}>
                       <Link to={this.state.link}> </Link>
                      </Col>
                    </Row> 
                    <Row className="submit">
                      <Button outline color="primary" className="float-right" onClick={()=>this.handleClick.bind(this)}>Submit</Button>
                    </Row>
                  </div>
              </Grid>
           )
        }
      };

 
const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default withRouter(connect(mapStateToProps)(PicturePage));




