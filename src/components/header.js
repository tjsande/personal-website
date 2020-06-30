import React from 'react';
// import Background from '../images/tech-stock-photo.jpg'

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
        <h1 id="greeting">Hi, My Name is Trevor</h1>
      </div>
    );
  };
}

export default Header
