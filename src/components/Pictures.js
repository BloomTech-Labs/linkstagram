import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import request from 'superagent';

class Pictures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    };
  }

  componentDidMount() {
  this.fetchPictures();
  }

 fetchPictures() {
   request 
    .get('https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS-TOKEN')
    .then((res)=> {
      this.setState({
        pictures: res.body.data
       })
    })
 }

  render() {
      return(
      <div className="Pictures">
          { this.state.pictures.map((picture, key) => {
            return (
            <Link to={Pictures}>
            <div key={picture.id}>
                <img src={picture.images.standard_resolution.url}/>
            </div>
                </Link>
            )
          })}
      </div>
      )
  }
}

export default Pictures;