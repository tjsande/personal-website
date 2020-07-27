import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

class ToolBar extends React.Component {
  render() {
    return (
      <div id="toolbar">
      <div class="toolbarButton">
        <Link
          class="toolbarButtonActive"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          > ABOUT ME </Link>
      </div>
      <div class="toolbarButton">
        <Link class="toolbarButtonActive"
          to="experience"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          > EXPERIENCE </Link> 
      </div>
      <div class="toolbarButton">
        <Link class="toolbarButtonActive"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          > PROJECTS </Link>
      </div>
      <div class="toolbarButton">
        <Link class="toolbarButtonActive"
          to="contactSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        > CONTACT </Link>
        </div>
      </div>
    );
  };
}

export default ToolBar
