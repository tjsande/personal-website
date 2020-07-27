import React from 'react';
import { Parallax } from 'react-scroll-parallax';

class Header extends React.Component {
  render() {
    return (  
    <div id="header">
      <Parallax className="greetingParallax" y={[80,-80]}>
        <h1 id="greeting">Trevor Sanderson</h1>
      </Parallax>
    </div>
    );
  };
}

export default Header
