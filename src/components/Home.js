import React from 'react';
import './Home.css'; // Import the custom CSS
import profilephoto from './Images/sanyog.jpg';

const Home = () => {
  return (
    <section id="home" className="d-flex justify-content-center align-items-center home-section">
      <div className="text-center text-white animated fadeIn">
      <img src={profilephoto} className="profilepic" alt="Project 1" />

        <h1 className="display-4 animate__animated animate__fadeIn animate__delay-1s">Welcome to SanyogTech</h1>
        <p className="lead animate__animated animate__fadeIn animate__delay-2s">Empowering Ideas Through Code</p>
        <div className="btn-container">
          <a href="#projects" className="btn btn-primary btn-lg animate__animated animate__fadeIn animate__delay-3s">View My Work</a>
          <a href="#contact" className="btn btn-primary btn-lg animate__animated animate__fadeIn animate__delay-3s">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
