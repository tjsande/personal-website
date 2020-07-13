import React from 'react';
import michiganUnion from "../images/michigan_Union.jpg";
import grandRapids from "../images/grand_Rapids.jpg";

class About extends React.Component {
  render() {
    return (
      <body id="about">
        <h1> About Me </h1>
        <div class="aboutParagraph">
          <img class="aboutImage" src={grandRapids} alt="Michigan Union"/>
            <p class="aboutText">
              Hi, my name is Trevor I'm a Software Developer, 
              sports enthusiast, gamer, and self-proclaimed foodie. On the weekends you can 
              find me in one of the local breweries or
              on the beaches of Lake Michigan. As a proud Michigander I've spent my life in the Greater 
              Grand Rapids area. I attended Kentwood Public Schools and graduated from the 
              University of Michigan with a Bachelor's degree in
              Computer Science. I'm interested in both frontend and backend
              web development as well as data science. 
            </p>
        </div>

        {/* <div class="aboutParagraph">
          <img class="aboutImage" src={michiganUnion} alt="Michigan Union"/>
            <p class="aboutText">
              I started my 
            </p>
        </div> */}
      </body>
    )
  };
}

export default About