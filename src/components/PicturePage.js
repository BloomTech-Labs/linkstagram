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

                    <Col className="Sidebar"xs={1}  md={2}>
                      <Sidebar style={{ 'border': '5px solid'}}/>
                    </Col>
                    <Col className='pictureName' xs={5}  md={1} style={{ 'textAlign': 'center', 'min-width': '600px', 'height': '30px'}}>
                      <h1 style={{'align-self': 'flex-start', 'border': '2px solid' , 'marginBottom':'10px'}}>Picture Name{title}</h1>                    
                    <Row>
                      <img md={2} src={image} alt={image.title} style={{ 'flex-direction': 'column', 'border': '2px solid','height': '130px', 'width': '150px', 'marginTop': '65px', 'marginLeft': '10px' }}/>
                   
                      <Col className="affiliateLink" xs={13} md={8} style={{ 'marginLeft': '20px', 'paddingLeft': '20px', 'flex-direction': 'row', 'align-self':'flex-end','border': '1px solid'}}>
                       
                       <Link to={link}> lin</Link>
                       <br/>
                       </Col>
                       <Col>
                      
               
                    
                  
                  

                        

                    </Col>
                  
                    
                    
                    </Row>
                  
                    </Col>
                    
                   
                  
                    
                  
                  
                    </Row>
                    <Col md={7}> 
                    <Button outline color="primary" style={{'flex-direction': 'fle', 'align-self:': 'start'}} className="floatRight" onClick={()=>this.handleClick.bind(this)}>Submit</Button>

                  


                        
                    
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




