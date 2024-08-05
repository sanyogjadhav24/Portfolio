import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer py-4">
      <div className="container">
    <div className="row">
          <div className="col-md-4">
            <h5>Contact</h5>
       <p>Email: jadhavsanyog.400@gmail.com</p>
          <p>Phone:+91 8600596593</p>
          </div>
          <div className="col-md-4">
        <h5>Quick Links</h5>
         <ul className="list-unstyled">
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
   <h5>Follow Me</h5>
            <center><ul className="list-unstyled social-icons">
              <li><a href="https://github.com/sanyogjadhav24" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
              <li><a href="https://linkedin.com/in/sanyog-jadhav-295154258" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="https://instagram.com/sanyog_jadhav_2424" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
            </ul></center>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 Sanyog Jadhav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
