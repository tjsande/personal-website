import React from 'react';
import Header from './header.js';
import ToolBar from './toolbar.js'
import About from './about.js'
import Resume from './resume.js'
import '../App.css';

class HomePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        //set state
      };
    }

    render() {
        return (
          <div id="homepage">
            <ToolBar />
            <Header />
            <body className="body">
              <About />
              <Resume />
            </body>
          </div>
        );
    };
}

export default HomePage
