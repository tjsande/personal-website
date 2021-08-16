import React from 'react';
import Button from '../components/button.js';
import imgs from '../images/images.js';
import resume from '../images/Trevor_Sanderson_Software_Developer_August_2021.pdf'

class Experience extends React.Component {
  render() {
    return (
      <body id="experience">
        <h1> Experience </h1>
        <div id="experienceBody">
          <h3>SOFTWARE ENGINEER | MENKLAB SOFTWARE | 2020 (MARCH)</h3>
          <ul>
              <li>Created payment method forms and configure a Rest API to handle customer data</li>
              <li>Provided technical support for custom software sales and growth of customer relations</li>
          </ul>
          <hr Class="experienceDivider" />
          <h3>SOFTWARE ENGINEER INTERN | MENKLAB SOFTWARE | 2019 (MAY-AUGUST)</h3>
          <ul>
              <li>Developed and styled React components for Menkpay payment portal</li>
              <li>Codeveloped and managed synchronization between customer databases</li>
              <li>Collaborated with project lead to format DynamoDB tables and Graphql schemas</li>
          </ul>
          <div id="experienceButtonWrapper">
            <Button
              icon={imgs[3].icon}
              buttonLink={resume}
              buttonText="My Resume"
            />
          </div>
        </div>
      </body>
    )
  };
}

export default Experience