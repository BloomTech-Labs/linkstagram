import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/styles/PicturePage.css';
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
               <Row>
                  <ol class="breadcrumb">
                    <li><a href="#Home">Home > </a></li> 
                    <li href="active">Picture Name</li>
                  </ol>
                  <p className="navbar-text nav-right">
                    <a href="#SignOut" className="navbar-link">SignOut</a>
                  </p>
                  </Row>                
                <br/>
                <div style={{'width': '1000px'}}>
                  <Row >
                    <Col xs={1}  md={2}>
                      <Sidebar className="sidebar" style={{ 'border': '5px solid'}}/>
                    </Col>
                    <Col className='pictureName' xs={5}  md={1} >
                      <h1 className='titleBar' >Picture Name{title}</h1>                    
                    <Row>
                      <img md={2} src={image} alt={image.title} className="image" />                  
                      <Col  xs={13} md={8} >                     
                       <Link className="affiliateLink" to={link}> lin</Link>
                       <br/>
                       </Col>               
                    </Row>
                    </Col>
                    </Row>
                    <Col md={7}> 
                    <Button  outline color="primary" style={{ 'align-self:': 'start'}} className="floatRight" onClick={()=>this.handleClick.bind(this)}>Submit</Button>
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




