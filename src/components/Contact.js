import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch('https://formspree.io/f/mnnadgzd', {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.ok) {
      form.reset();
      setStatus("SUCCESS");
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="py-5 contact-section">
      <div className="container">
        <h2 className="text-center">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
        {status === "SUCCESS" && <p className="text-success mt-3">Thanks! Your message has been sent.</p>}
        {status === "ERROR" && <p className="text-danger mt-3">Oops! There was an error.</p>}
      </div>
    </section>
  );
};

export default Contact;
