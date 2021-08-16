import React from 'react';
import Header from './containers/header.js';
import ToolBar from './containers/toolbar.js'
import About from './containers/about.js'
import Projects from './containers/projects'
import Footer from './containers/footer.js'
import Contact from './containers/contact.js'
import './App.css';
import Experience from './containers/experience.js';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
        
        <body className="body">
          <ToolBar />
          <Parallax className="headerParallax" y={[-30, 30]}>
            <Header />
          </Parallax>
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </body>

    </ParallaxProvider>
  );
}

export default App;
