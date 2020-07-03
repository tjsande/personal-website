import React from 'react';
import Header from '../components/header.js';
import ToolBar from '../components/toolbar.js'
import About from '../components/about.js'
import Resume from '../components/resume.js'
import Footer from '../components/footer.js'
import ContactForm from '../components/contactForm.js'
import '../App.css';

class HomePage extends React.Component {
  render() {
    return (
      <div id="homepage">
        <ToolBar />
        <Header />
        <body className="body">
          <About />
          <Resume />
          <ContactForm />
          <Footer />
        </body>
      </div>
    );
  };
}

export default HomePage
