import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //set state
    };
  }
    
  render() {
    return (
      <body id="about">
        <h2> About Me </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et bibendum lacus. 
        Ut tincidunt dapibus purus, eu pulvinar massa posuere molestie. Vivamus vehicula ante odio, 
        sed lobortis odio scelerisque eu. Nullam maximus aliquam mauris, eu maximus diam imperdiet non. 
        In eros metus, tempor eget libero id, cursus suscipit metus. Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Aenean urna justo, tristique quis mi id, tempor consequat justo. Vestibulum ante ipsum 
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed molestie fermentum sem, vel 
        facilisis diam vestibulum quis. Proin ac sapien vitae massa luctus suscipit a vitae mauris. 
        Mauris ex tellus, auctor sagittis placerat et, placerat eu metus. Nam leo ante, rutrum sit 
        amet lectus in, feugiat rhoncus sem. Morbi quis tempus nisi. Vestibulum quam arcu, faucibus 
        sit amet turpis sit amet, fringilla ornare libero. Phasellus ac justo semper, tristique nisi 
        sit amet, sagittis nisl.</p>
      </body>
    )
  };
}

export default About