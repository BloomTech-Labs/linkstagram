import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchPictures } from '../actions';
import { 
  Card,
  CardBody,
  CardDeck,
  CardHeader,
  CardTitle,
  CardImg,
  CardImgOverlay,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';
class Pictures extends Component {
  componentDidMount(){
    this.props.fetchPictures(this.props.auth.access_token);    
  }

  fetchPictures() {
    const { max_id, min_id, count } = this.props.pagination; 
    this.props.fetchPictures(this.props.auth.access_token, max_id, min_id, count);
  }
  
  renderCards(){
    return (this.props.pictures.map((picture, i) => {
      return <Card key={i}>
      {console.log(picture)}
        <CardBody>
          <CardImg className="img-thumbnail" src={picture.images.standard_resolution.url}/>
        </CardBody>
        <CardFooter>
        affiliate link        
        </CardFooter>
      </Card>
    }));
  }
  render() {
      return(
      <CardDeck>
        <Pagination>
          <PaginationItem>
            <PaginationLink>
            1
            </PaginationLink>
            <PaginationLink>
            2
            </PaginationLink>
          </PaginationItem>
        </Pagination>
        {this.props.pictures ? this.renderCards() : this.props.error ? this.renderError() : 'No Picuters Found.'}
      </CardDeck>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth : state.auth,
    authenticated: state.auth.authenticated,
    registered : state.auth.registered,
    pictures : state.pictures.data,
    pagination : state.pictures.pagination
  }; 
};

export default withRouter(connect(mapStateToProps, {fetchPictures})(Pictures));