
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';


const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="contact-form-container">
      {!isSubmitted ? (
        <>
          <h1>CONTACT ME</h1>
          <h3>— Get in Touch —</h3>
          <p className="description">
            Feel free to get in touch with me. Email me with any questions or inquiries. I'll be happy to answer your
            questions and set up a meeting with you.
          </p>
          <div className="contact-info">
            <p><span className="label">Name:</span> Koushik Mehta</p>
            <p><span className="label">Address:</span> Jamshedpur, India</p>
            <p><span className="label">Email:</span> koushikmehta07@gmail.com</p>
            <p><span className="label">Language Known:</span> English, Hindi</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message.." rows="4" required></textarea>
            <button type="submit">Send message</button>
          </form>
        </>
      ) : (
        <div className="thank-you-message">
          <h1>Thank You!</h1>
          <p>Your message has been sent successfully. I will get back to you soon!</p>
          <div>
          
            <button className='home'><Link to="/">Back to Home</Link></button>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Contact;
