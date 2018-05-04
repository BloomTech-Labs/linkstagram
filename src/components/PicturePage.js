import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Link from '../helpers/Link';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/styles/PicturePage.css';
import Sidebar from './SideBar';
class PicturePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        image:'',
        link:'',
        title:'',
        submitted: false
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
     e.preventdefault()
     this.setState({
       submitted: !this.state.submitted
     });
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
                        <input  type="text" name="title" className='titleBar' placeholder="Picture Title" value = {this.props.title}/>                    
                          <Row>
                            <input md={2} type="image" alt="single-image" name="image" className="image" placeholder="image" value={this.props.image} onChange={this.handleChange}  />                  
                              <Col  xs={13} md={8} >     

      {/*NOTE!!!---------->> we will have a problem right here because Link (react-router-dom) is for internal links. 
      but how do we get this input to update to use <a></a> tags when we use the submit button? <----------NOTE!!!!!*/}
                              {this.state.submitted ? <a href={this.props.link}>{this.props.link}</a> : 
                                   <input className="affiliateLink" name="link" placeholder="link"></input>
                              }
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




