import React from 'react';
import Background from '../images/tech-stock-photo.jpg'

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        //set state
      };
  
    }
    
    render() {
        return (
          <div id="header">
            <div id="headerInfo"> 
              <h1> Trevor Sanderson </h1>
            </div>
            <div id="headerPic">
              <img src={Background} alt="Tacky background" width="100%" height="100%" /> 
            </div>
          </div>
        );
    };
}

export default Header
