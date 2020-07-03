import React from 'react';


const ContactForm = () => (

      <form method="POST" id="contactForm">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
    
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
    
        <label htmlFor="message">Message</label>
        <textarea name="message" rows="10"></textarea>
    
        <input id="submitButton" type="submit" />
      </form>

  )

export default ContactForm