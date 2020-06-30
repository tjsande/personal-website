import React from 'react';

class ToolBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //set state
    };
  }
    
  render() {
    return (
      <div id="toolbar">
        <p class="toolbarButton"> About Me </p>
        <p class="toolbarButton"> Affiliations </p>
        <p class="toolbarButton"> Resume </p> 
        <p class="toolbarButton"> Contact </p>
      </div>
    );
  };
}

export default ToolBar
