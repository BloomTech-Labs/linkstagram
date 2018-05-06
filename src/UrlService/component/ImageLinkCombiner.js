import react, { Component } from 'react';
import connect from 'react-redux';
import Image from './ImageHelper';

class ImageLinkCombiner extends Component {
    constructor(props){
        super(props);
        this.state = {
            links:[]
        };
    }
    // componentDidMount() {
    //     this.props.shortenLink(inputlink)
    // }
  
renderlist() {
    const links = [ ...this.props.links ]
    return ( 
        links.map((link) =>
                (
                <div key={link} >
                    <a href={link}><Image src={imageURL} width={150} height={150} mode= "fit"/></a>
                </div>
            ) 
         )
      );
    }



}
function mapStateToProps(state) {
    return {
        links: this.state.links
    }
}
export default connect(mapStateToProps, {shortenLink})(UrlShortener);