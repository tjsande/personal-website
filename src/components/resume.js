import React from 'react';
import ResumeImage from '../images/2019_Computer_Science-page.jpg'

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //set state
    };
  }
    
  render() {
    return (
      <div id="resume">
        <img src={ResumeImage} alt="Resume" object-fit="cover" width="50%" />
        <p>
          Printable Copy
      </p>
      </div>
    );
  };
}

export default Resume
