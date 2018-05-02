import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Link from './Link';
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
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
      const target = e.target;
      const value = target.type === 'image' ? target.image : target.value;
      const name = target.name;

      this.setState ({
        [name]: value
      });
    }
    handleSubmit(e) {
      //update input fields
     e.preventdefault()
    }
    render(){
     
      return (
            
              <Grid fluid className="picture-page">
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
                      <input  type="text" name="title" className='titleBar' placeholder="Picture Title" value = {title}/>                    
                    <Row>
                      <input md={2} type="image" name="image" className="image" placeholder="image" value={image} onChange={this.handleChange}  />                  
                      <Col  xs={13} md={8} >                     
                       <input className="affiliateLink" name="link" placeholder="link"><Link /></input> 
                       <br/>
                       </Col>               
                    </Row>
                    </Col>
                    </Row>
                    <Col md={7}> 
                    <Button  outline color="primary" style={{ 'align-self:': 'start'}} className="floatRight" onClick={()=>this.handleSubmit}>Submit</Button>
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




