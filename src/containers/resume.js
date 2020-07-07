import React from 'react';
import ResumeImage from '../images/2020_May_Resume.jpg'
import pdf from '../ResumeMay2020.pdf'

class Resume extends React.Component {
  render() {
    return (
      <div id="resume">
        <img src={ResumeImage} alt="Resume" object-fit="cover" width="50%" />
        <a id="resumeLink" href={pdf} download="TrevorSandersonResume.pdf">
          Printable Copy
        </a>
      </div>
    );
  };
}

export default Resume
