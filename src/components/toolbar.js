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
          > About Me </Link>
      </div>
      <div class="toolbarButton">
        <Link class="toolbarButtonActive"
          to="resume"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          > Resume </Link> 
      </div>
      <div class="toolbarButton">
        <Link class="toolbarButtonActive"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          > Projects </Link>
      </div>
      <div class="toolbarButton">
        <Link class="toolbarButtonActive"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        > Contact </Link>
        </div>
      </div>
    );
  };
}

export default ToolBar
