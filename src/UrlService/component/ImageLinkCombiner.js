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
  
renderList() {
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

render() {   
    //this condition will probably never render out  
    if (this.props.links === '') {
        return <div>loading...</div>;
    }    
    return (
        <Grid fluid style={{ 'paddingBottom': '1200px' }}>
            <Row>
                <Col xs={12} md={12} style={{ 'textAlign': 'center', 'padding': '10px' }}>
                    <h3>[INSTALINKS GALLERY]</h3>
                </Col>
            </Row>
            <Row>
                {
                    (this.props.links.length === 0) 
                    ? <p>Gallery Empty</p> 
                    : this.renderList()
                }
                <p style={{'textAlign' : 'center'}}><b>Click an Image to Visit the Link</b></p>
            </Row>
        </Grid>
    );
  }   
}

function mapStateToProps(state) {
    return {
        links: this.state.links
    }
}
export default connect(mapStateToProps, {shortenLink})(ImagLinkCombiner);