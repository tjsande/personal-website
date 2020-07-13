import React from 'react';
import Header from './containers/header.js';
// import ToolBar from './toolbar.js'
import About from './containers/about.js'
import Projects from './containers/projects'
import Resume from './containers/resume.js'
import Footer from './containers/footer.js'
import Contact from './containers/contact.js'
import './App.css';
import Experience from './containers/experience.js';

function App() {
  return (
    <div id="homepage">
    <Header />
    <body className="body">
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </body>
  </div>
  );
}

export default App;
