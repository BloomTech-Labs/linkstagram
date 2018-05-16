import React, { Component } from 'react';
import StickyBox from 'react-sticky-box'; 

export default class SideBar extends Component {
    render(){
      return(
        <div >
            <StickyBox style={{ 'display': 'flex', 'alignItems': 'flex-start', 'padding': '30px 20px' }}>
                <ul>
                    <li><a href="#Pictures">Pictures</a></li>
                    <li><a href="#Billing">Billing</a></li>
                    <li><a href="#Settings">Settings</a></li>
                </ul>
            </StickyBox>
        </div>
      );
    }
}


