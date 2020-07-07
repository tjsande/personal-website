import React from 'react';
import Card from '../components/card.js';
import imgs from '../images/images.js';

class Projects extends React.Component {
  render() {
    return (
        <div id="projects">
          <h1>Projects</h1>
          <div id="projectCards">
            <Card 
              title="Personal Website"
              description="This web application was built using React.js and deployed it through Google’s Firebase." 
              iconLink={imgs[1].icon}
              buttonLink="https://github.com/tjsande/personal-website"
              buttonText="Git Repository"
              />
            <Card
              title="CrewCam"
              description="CrewCam enables groups to record, edit and post clips quickly by syncing their phones while recording. All audio and video is shared so that a clip can be cut to show the best angles and commentary from each user." 
              iconLink={imgs[1].icon}
              buttonLink="https://github.com/btajfel/Gold-Team"
              buttonText="Git Repository"
              />
            <Card 
              title="Cloud Storage"
              description="This was a cool little project for my stray Raspberry Pi. Personal cloud storage hosted from home using Owncloud and a great tutorial from Gus at PyMyLifeUp."
              iconLink={imgs[2].icon}
              buttonLink="https://pimylifeup.com/raspberry-pi-owncloud/"
              buttonText="Tutorial"
              />
          </div>
        </div>
    );
  };
}

export default Projects