import react, { Component } from 'React';
import Image from './imageTag';


import StickyBox from "react-sticky-box/dist/react-sticky.esnext.js"

class ImagePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: []
        }
    };



render() {
    return(
        <StickyBox width={350}>
          <Image src={} width={150} height={150} mode={'fit'} />   /*attribute src will be the url of the image to be combined with the link, links will be from the url service*/
        </StickyBox>
        )
    }
}