import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './Sidebar';
class PicturePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        image:'',
        link:'',
        title:''
      };
    }
    handleClick() {
      //update input fields
      this.setState({
        image : this.image,
        link : this.link,
        title : this.title
      });
    }
    render(){
      const { image, link, title } = this.state;
      return (
              <Grid fluid className="grid-figure">
                <nav class="navbar-text navbar-left" style={{'width': '620px'}}>
                  <ol class="breadcrumb">
                    <li><a href="#Home">Home </a></li> 
                    <li href="active">Picture Name</li>
                  </ol>
                  <p className="navbar-text nav-right">
                    <a href="#SignOut" className="navbar-link">SignOut</a>
                  </p>
                </nav>
                <Row>
                  <Col className='pictureName' xs={13} md={3}  style={{ 'textAlign': 'center', 'min-width': '550px', 'height': '30px'}}>
                      <h1 style={{'border': '2px solid' , 'marginBottom':'10px'}}>title{title}</h1>                    
                  </Col>       
                </Row>
                <br/>
                <div style={{'width': '1000px'}}>
                  <Row >
                    <Col className="Sidebar"xs={9}  md={3}>
                      <Sidebar style={{ 'border': '5px solid'}}/>
                    </Col>
                    <img md={2} src={image} alt={image.title} style={{ 'align-self': 'center', 'border': '2px solid','height': '150px', 'width': '150px'  }}/>
                    <Row>
                    <Col className="affiliateLink" xs={12} md={8} style={{ 'paddingTop': '20px'}}>
                       <Link to={link} style={{ 'align-self':'f', 'border': '2px solid' }}> link</Link>
                    </Col>
                    </Row>
                    </Row>
                    <Col md={7}>       
                     <Button outline color="primary" className="float-right" onClick={()=>this.handleClick.bind(this)}>Submit</Button>
                   </Col>              
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




