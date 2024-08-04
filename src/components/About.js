import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5"><b>About Me</b></h2>
        <div className="row g-5 justify-content-center">
          <div className="col-md-12">
            <div className="about-content d-flex flex-row">
              <div className="feature-box shadow-lg me-3">
                <h3 className="section-title">Hello, I'm Sanyog Jadhav!</h3>
                <p className="section-content">
                  I am currently in my 2nd year of BTech in Computer Engineering. As a software developer, I have a passion for building apps and websites.
                  My goal is to create innovative solutions and impactful user experiences. With a keen interest in both front-end and back-end development, 
                  I am constantly learning and experimenting with new technologies to enhance my skills.
                </p>
              </div>
              <div className="feature-box shadow-lg me-3">
                <h4 className="section-title">What I Do:</h4>
                <p className="section-content">
                  I specialize in developing user-friendly and efficient applications. My expertise includes web development, application design, and coding in various programming languages. 
                  I strive to blend creativity with technical skills to deliver exceptional results.
                </p>
              </div>
              <div className="feature-box shadow-lg">
                <h4 className="section-title">Looking Ahead</h4>
                <p className="section-content">
                  As I continue my journey in computer engineering, I’m excited about the opportunities to collaborate on new projects and further develop my skills. I’m always eager to learn, adapt, and embrace new technologies that will shape the future of software development.
                </p>
              </div>
            </div>
            <p className="text-center mt-4">
              Thank you for visiting my portfolio. I invite you to explore my projects and see how I’m turning ideas into reality. If you’d like to connect or discuss potential collaborations, feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
