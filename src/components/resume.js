import React from 'react';
import ResumeImage from '../images/2019_Computer_Science-page.jpg'
import pdf from '../ResumeMay2020.pdf'

class Resume extends React.Component {
  render() {
    return (
      <div id="resume">
        <img src={ResumeImage} alt="Resume" object-fit="cover" width="50%" />
        <a href={pdf} download="TrevorSandersonResume.pdf">
          Printable Copy
      </a>
      </div>
    );
  };
}

export default Resume
